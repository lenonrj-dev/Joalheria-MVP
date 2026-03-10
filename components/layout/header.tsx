"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import type { NavLink } from "../../data/landingData";
import { useShop } from "../shop/ShopProvider";

type HeaderProps = {
  links: NavLink[];
};

export default function Header({ links }: HeaderProps) {
  const { cartCount, favoritesCount, openCart, openFavorites } = useShop();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-[72px] w-full max-w-[1200px] items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="select-none text-lg font-semibold tracking-[0.22em]"
            aria-label="LUME — Página inicial"
          >
            LUME
          </Link>
        </div>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-xs font-semibold uppercase tracking-wide text-black/80 hover:text-black"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <IconButton label="Buscar">
            <IconSearch />
          </IconButton>

          <IconButton label="Conta" className="hidden sm:inline-flex">
            <IconUser />
          </IconButton>

          <motion.button
            type="button"
            onClick={openFavorites}
            aria-label="Favoritos"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="relative inline-flex h-9 w-9 items-center justify-center border border-black/10 bg-white hover:border-black/20"
          >
            <IconHeart />
            {favoritesCount > 0 ? (
              <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-[var(--wine)] text-[10px] font-bold text-white">
                {favoritesCount}
              </span>
            ) : null}
          </motion.button>

          <motion.button
            type="button"
            onClick={openCart}
            aria-label="Carrinho"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="relative inline-flex h-9 items-center gap-2 border border-black/10 bg-white px-3 text-xs font-semibold uppercase tracking-wide text-black hover:border-black/20"
          >
            <IconCart />
            <span className="hidden md:inline">Carrinho</span>
            <span className="grid h-5 w-5 place-items-center rounded-full bg-black text-[10px] font-bold text-white">
              {cartCount}
            </span>
          </motion.button>
        </div>
      </div>
    </header>
  );
}

function IconButton({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.button
      type="button"
      aria-label={label}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex h-9 w-9 items-center justify-center border border-black/10 bg-white hover:border-black/20 ${className}`}
    >
      {children}
    </motion.button>
  );
}

function IconSearch() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M16.8 16.8 21 21"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconUser() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 12a4.5 4.5 0 1 0-4.5-4.5A4.5 4.5 0 0 0 12 12Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M4 21a8 8 0 0 1 16 0"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconHeart() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 21s-7-4.4-9.3-9A5.4 5.4 0 0 1 12 5.2 5.4 5.4 0 0 1 21.3 12c-2.3 4.6-9.3 9-9.3 9Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconCart() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 6h15l-1.5 9H7.5L6 6Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M6 6 5 3H2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M8.5 21a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm10 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
        fill="currentColor"
      />
    </svg>
  );
}
