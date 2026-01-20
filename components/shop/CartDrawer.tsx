"use client";

import { motion } from "framer-motion";

import DrawerShell from "./DrawerShell";
import { useShop } from "./ShopProvider";

export default function CartDrawer() {
  const {
    drawer,
    closeDrawer,
    cart,
    cartCount,
    cartSubtotal,
    removeFromCart,
    setQty,
    clearCart,
    checkoutWhatsApp,
    copyCartText,
  } = useShop();

  const isOpen = drawer === "cart";

  return (
    <DrawerShell
      open={isOpen}
      onClose={closeDrawer}
      title="Your Cart"
      subtitle={
        cartCount > 0
          ? `${cartCount} item${cartCount > 1 ? "s" : ""} selected`
          : "Add products and checkout instantly"
      }
    >
      {cart.length === 0 ? (
        <div className="rounded-xl border border-black/10 bg-black/[0.02] p-5">
          <p className="text-sm font-semibold text-black">Your cart is empty</p>
          <p className="mt-1 text-sm text-black/60">
            Pick your favorite pieces and finish on WhatsApp with one click.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {cart.map((it) => (
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
                  <QtyControl
                    value={it.qty}
                    onMinus={() => setQty(it.id, it.qty - 1)}
                    onPlus={() => setQty(it.id, it.qty + 1)}
                  />

                  <button
                    type="button"
                    onClick={() => removeFromCart(it.id)}
                    className="text-xs font-semibold uppercase tracking-wide text-black/50 hover:text-black"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="border-t border-black/10 pt-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-black/70">Subtotal</p>
              <p className="text-base font-semibold text-black">
                ${cartSubtotal.toFixed(2)}
              </p>
            </div>

            <p className="mt-2 text-xs text-black/50">
              This cart is temporary (refresh clears it). Perfect for “buy now” flow.
            </p>

            <div className="mt-4 grid gap-2">
              <motion.button
                type="button"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                onClick={checkoutWhatsApp}
                className="h-11 w-full border border-black bg-black px-5 text-xs font-semibold uppercase tracking-wide text-white"
              >
                Buy on WhatsApp
              </motion.button>

              <div className="grid grid-cols-2 gap-2">
                <motion.button
                  type="button"
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => void copyCartText()}
                  className="h-11 border border-black/15 bg-white px-5 text-xs font-semibold uppercase tracking-wide text-black hover:border-black"
                >
                  Save List
                </motion.button>

                <motion.button
                  type="button"
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={clearCart}
                  className="h-11 border border-black/15 bg-white px-5 text-xs font-semibold uppercase tracking-wide text-black hover:border-black"
                >
                  Clear
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      )}
    </DrawerShell>
  );
}

function QtyControl({
  value,
  onMinus,
  onPlus,
}: {
  value: number;
  onMinus: () => void;
  onPlus: () => void;
}) {
  return (
    <div className="inline-flex items-center overflow-hidden border border-black/15 bg-white">
      <button
        type="button"
        onClick={onMinus}
        className="grid h-9 w-9 place-items-center text-black hover:bg-black/[0.03]"
        aria-label="Decrease"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M6 12h12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <div className="grid h-9 w-10 place-items-center text-sm font-semibold text-black">
        {value}
      </div>
      <button
        type="button"
        onClick={onPlus}
        className="grid h-9 w-9 place-items-center text-black hover:bg-black/[0.03]"
        aria-label="Increase"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 6v12M6 12h12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  );
}
