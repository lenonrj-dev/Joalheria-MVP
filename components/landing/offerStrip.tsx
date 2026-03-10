"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { CategoryLink } from "../../data/landingData";

type OfferStripProps = {
  categories: CategoryLink[];
};

export default function OfferStrip({ categories }: OfferStripProps) {
  return (
    <section className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="text-center"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/60">
          Oferta por tempo limitado
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-black md:text-3xl">
          Até 50% OFF em selecionados
        </h2>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {categories.map((c) => (
            <Link
              key={c.label}
              href={c.href}
              className="text-xs font-semibold uppercase tracking-wide text-black/70 hover:text-black"
            >
              {c.label}
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
