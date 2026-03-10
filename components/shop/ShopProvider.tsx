"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

import type { ProductCard, MosaicTile } from "../../data/landingData";
import { WHATSAPP_SHARE_BASE } from "../../data/landingData";

export type ShopProduct = {
  id: string;
  title: string;
  price: string;
  imageUrl: string;
};

export type CartItem = ShopProduct & {
  qty: number;
};

type DrawerKey = "cart" | "favorites" | null;

type ShopContextValue = {
  cart: CartItem[];
  favorites: ShopProduct[];
  drawer: DrawerKey;

  openCart: () => void;
  openFavorites: () => void;
  closeDrawer: () => void;

  addToCart: (product: ShopProduct, qty?: number) => void;
  removeFromCart: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clearCart: () => void;

  toggleFavorite: (product: ShopProduct) => void;
  isFavorite: (id: string) => boolean;

  cartCount: number;
  favoritesCount: number;
  cartSubtotal: number;

  getWhatsAppText: () => string;
  checkoutWhatsApp: () => void;
  copyCartText: () => Promise<void>;
};

const ShopContext = createContext<ShopContextValue | null>(null);

export default function ShopProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [favorites, setFavorites] = useState<ShopProduct[]>([]);
  const [drawer, setDrawer] = useState<DrawerKey>(null);

  const openCart = useCallback(() => setDrawer("cart"), []);
  const openFavorites = useCallback(() => setDrawer("favorites"), []);
  const closeDrawer = useCallback(() => setDrawer(null), []);

  const addToCart = useCallback((product: ShopProduct, qty = 1) => {
    setCart((prev) => {
      const found = prev.find((p) => p.id === product.id);
      if (found) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, qty: clamp(p.qty + qty, 1, 99) } : p
        );
      }
      return [...prev, { ...product, qty: clamp(qty, 1, 99) }];
    });
  }, []);

  const removeFromCart = useCallback((id: string) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  }, []);

  const setQty = useCallback((id: string, qty: number) => {
    setCart((prev) =>
      prev
        .map((p) => (p.id === id ? { ...p, qty: clamp(qty, 1, 99) } : p))
        .filter((p) => p.qty > 0)
    );
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  const toggleFavorite = useCallback((product: ShopProduct) => {
    setFavorites((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) return prev.filter((p) => p.id !== product.id);
      return [...prev, product];
    });
  }, []);

  const isFavorite = useCallback(
    (id: string) => favorites.some((p) => p.id === id),
    [favorites]
  );

  const cartCount = useMemo(
    () => cart.reduce((acc, it) => acc + it.qty, 0),
    [cart]
  );

  const favoritesCount = useMemo(() => favorites.length, [favorites]);

  const cartSubtotal = useMemo(() => {
    return cart.reduce((acc, it) => acc + parsePrice(it.price) * it.qty, 0);
  }, [cart]);

  const getWhatsAppText = useCallback(() => {
    if (cart.length === 0) {
      return "Olá! Quero saber mais sobre as joias da LUME.";
    }

    const lines = cart.map((it) => `• ${it.qty}x ${it.title} — ${it.price}`);

    const total =
      cartSubtotal > 0 ? `\n\nSubtotal: $${cartSubtotal.toFixed(2)}` : "";

    return `Olá! Quero comprar estes itens:\n\n${lines.join("\n")}${total}`;
  }, [cart, cartSubtotal]);

  const checkoutWhatsApp = useCallback(() => {
    const text = getWhatsAppText();
    const url = `${WHATSAPP_SHARE_BASE}${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }, [getWhatsAppText]);

  const copyCartText = useCallback(async () => {
    const text = getWhatsAppText();
    await navigator.clipboard.writeText(text);
  }, [getWhatsAppText]);

  const value: ShopContextValue = useMemo(
    () => ({
      cart,
      favorites,
      drawer,

      openCart,
      openFavorites,
      closeDrawer,

      addToCart,
      removeFromCart,
      setQty,
      clearCart,

      toggleFavorite,
      isFavorite,

      cartCount,
      favoritesCount,
      cartSubtotal,

      getWhatsAppText,
      checkoutWhatsApp,
      copyCartText,
    }),
    [
      cart,
      favorites,
      drawer,
      openCart,
      openFavorites,
      closeDrawer,
      addToCart,
      removeFromCart,
      setQty,
      clearCart,
      toggleFavorite,
      isFavorite,
      cartCount,
      favoritesCount,
      cartSubtotal,
      getWhatsAppText,
      checkoutWhatsApp,
      copyCartText,
    ]
  );

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop() {
  const ctx = useContext(ShopContext);
  if (!ctx) throw new Error("useShop must be used inside ShopProvider");
  return ctx;
}

// Helpers
export function toShopProduct(item: ProductCard | MosaicTile): ShopProduct {
  return {
    id: item.id,
    title: "title" in item ? item.title : item.label,
    price: item.price,
    imageUrl: item.imageUrl,
  };
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function parsePrice(price: string) {
  const cleaned = price.replace(/[^0-9.]/g, "");
  const value = Number(cleaned);
  return Number.isFinite(value) ? value : 0;
}
