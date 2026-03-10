"use client";

import { AnimatePresence, motion } from "framer-motion";

type DrawerShellProps = {
  open: boolean;
  title: string;
  subtitle?: string;
  onClose: () => void;
  children: React.ReactNode;
};

export default function DrawerShell({
  open,
  title,
  subtitle,
  onClose,
  children,
}: DrawerShellProps) {
  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.button
            type="button"
            aria-label="Fechar painel"
            onClick={onClose}
            className="fixed inset-0 z-[90] cursor-pointer bg-black/40 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.aside
            role="dialog"
            aria-modal="true"
            className="fixed right-0 top-0 z-[95] h-dvh w-[420px] max-w-[92vw] overflow-hidden border-l border-black/10 bg-white shadow-2xl"
            initial={{ x: 520 }}
            animate={{ x: 0 }}
            exit={{ x: 520 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <div className="flex h-full flex-col">
              <div className="flex items-start justify-between gap-4 border-b border-black/10 px-5 py-4">
                <div>
                  <p className="text-sm font-semibold text-black">{title}</p>
                  {subtitle ? (
                    <p className="mt-1 text-xs text-black/60">{subtitle}</p>
                  ) : null}
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  className="grid h-9 w-9 place-items-center border border-black/10 bg-white text-black hover:border-black/20"
                  aria-label="Fechar"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M6 6l12 12M18 6 6 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>

              <div className="min-h-0 flex-1 overflow-y-auto px-5 py-4">
                {children}
              </div>
            </div>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}
