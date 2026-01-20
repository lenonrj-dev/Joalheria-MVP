"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ProductsRowData, ProductCard } from "../../data/landingData";

import ProductActions from "../shop/ProductsAction";

type ProductsRowProps = {
  data: ProductsRowData;
};

export default function ProductsRow({ data }: ProductsRowProps) {
  return (
    <section className="pb-12">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/60">
            {data.eyebrow}
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-black md:text-3xl">
            {data.title}
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {data.items.map((p) => (
            <ProductTile key={p.id} item={p} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function ProductTile({ item }: { item: ProductCard }) {
  return (
    <motion.div whileHover={{ y: -2 }} className="group">
      <Link href={item.href} className="block" aria-label={item.title}>
        <div className="relative overflow-hidden border border-black/10 bg-white">
          <div className="relative aspect-square bg-black/[0.03]">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="absolute inset-0 h-full w-full object-contain p-6 transition-transform duration-500 ease-out group-hover:scale-[1.05]"
              loading="lazy"
              decoding="async"
            />
            {item.badge ? (
              <span className="absolute left-3 top-3 bg-black px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
                {item.badge}
              </span>
            ) : null}

            {/* Ações rápidas (favoritar + carrinho) */}
            <ProductActions item={item} />
          </div>

          <div className="p-4">
            <p className="text-sm font-semibold text-black/90">{item.title}</p>
            <p className="mt-1 text-sm font-semibold text-black">{item.price}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
