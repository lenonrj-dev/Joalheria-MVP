"use client";

import { motion } from "framer-motion";

import DrawerShell from "./DrawerShell";
import { useShop } from "./ShopProvider";

export default function FavoritesDrawer() {
  const {
    drawer,
    closeDrawer,
    favorites,
    favoritesCount,
    toggleFavorite,
    addToCart,
  } = useShop();

  const isOpen = drawer === "favorites";

  return (
    <DrawerShell
      open={isOpen}
      onClose={closeDrawer}
      title="Favorites"
      subtitle={
        favoritesCount > 0
          ? `${favoritesCount} saved item${favoritesCount > 1 ? "s" : ""}`
          : "Save your favorite pieces"
      }
    >
      {favorites.length === 0 ? (
        <div className="rounded-xl border border-black/10 bg-black/[0.02] p-5">
          <p className="text-sm font-semibold text-black">No favorites yet</p>
          <p className="mt-1 text-sm text-black/60">
            Tap the heart on products to save them for later.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {favorites.map((it) => (
            <div
              key={it.id}
              className="flex items-start gap-3 border border-black/10 bg-white p-3"
            >
              <div className="relative h-16 w-16 overflow-hidden border border-black/10 bg-black/[0.03]">
                <img
                  src={it.imageUrl}
                  alt={it.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-black">
                  {it.title}
                </p>
                <p className="mt-0.5 text-xs font-semibold text-black/70">
                  {it.price}
                </p>

                <div className="mt-3 flex items-center justify-between gap-3">
                  <motion.button
                    type="button"
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => addToCart(it, 1)}
                    className="h-9 border border-black bg-black px-3 text-xs font-semibold uppercase tracking-wide text-white"
                  >
                    Add to cart
                  </motion.button>

                  <button
                    type="button"
                    onClick={() => toggleFavorite(it)}
                    className="text-xs font-semibold uppercase tracking-wide text-black/50 hover:text-black"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </DrawerShell>
  );
}
