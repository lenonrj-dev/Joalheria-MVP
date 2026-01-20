"use client";

import { motion } from "framer-motion";
import { toShopProduct, useShop } from "./ShopProvider";
import type { ProductCard, MosaicTile } from "../../data/landingData";

export default function ProductActions({
  item,
  variant = "overlay",
}: {
  item: ProductCard | MosaicTile;
  variant?: "overlay" | "inline";
}) {
  const { addToCart, toggleFavorite, isFavorite, openCart, openFavorites } =
    useShop();

  const product = toShopProduct(item);
  const liked = isFavorite(product.id);

  const wrapClass =
    variant === "overlay"
      ? "absolute right-3 top-3 z-20 flex flex-col gap-2"
      : "flex items-center gap-2";

  return (
    <div className={wrapClass}>
      <motion.button
        type="button"
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => {
          toggleFavorite(product);
          openFavorites();
        }}
        aria-label={liked ? "Remove from favorites" : "Add to favorites"}
        className={`grid h-9 w-9 place-items-center border bg-white shadow-sm transition-colors ${
          liked ? "border-[var(--wine)]" : "border-black/15 hover:border-black"
        }`}
      >
        <HeartIcon filled={liked} />
      </motion.button>

      <motion.button
        type="button"
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => {
          addToCart(product, 1);
          openCart();
        }}
        aria-label="Add to cart"
        className="grid h-9 w-9 place-items-center border border-black/15 bg-white shadow-sm hover:border-black"
      >
        <PlusIcon />
      </motion.button>
    </div>
  );
}

function HeartIcon({ filled }: { filled: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 21s-7-4.4-9.3-9A5.4 5.4 0 0 1 12 5.2 5.4 5.4 0 0 1 21.3 12c-2.3 4.6-9.3 9-9.3 9Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
        fill={filled ? "currentColor" : "none"}
      />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 6v12M6 12h12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
