"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { TripleShowcaseData } from "../../data/landingData";

import ProductActions from "../shop/ProductsAction";

type TripleShowcaseProps = {
  data: TripleShowcaseData;
};

export default function TripleShowcase({ data }: TripleShowcaseProps) {
  return (
    <section className="pb-12">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="grid grid-cols-1 gap-4 md:grid-cols-12"
      >
        <div className="relative overflow-hidden border border-black/10 md:col-span-4">
          <div className="aspect-[4/5] md:aspect-[4/6]">
            <img
              src={data.leftImageUrl}
              alt="Jewelry showcase left"
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <div className="border border-black/10 bg-white p-8 md:col-span-4 md:p-10">
          <div className="mx-auto flex h-full max-w-sm flex-col items-center justify-center text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/60">
              {data.centerCard.eyebrow}
            </p>

            <div className="relative mt-4 aspect-square w-full overflow-hidden bg-black/[0.03]">
              <img
                src={data.centerCard.imageUrl}
                alt={data.centerCard.title}
                className="h-full w-full object-contain p-6"
                loading="lazy"
                decoding="async"
              />

              {/* Ações rápidas também aqui */}
              <ProductActions
                item={{
                  id: data.centerCard.id,
                  title: data.centerCard.title,
                  price: data.centerCard.price,
                  imageUrl: data.centerCard.imageUrl,
                  href: data.centerCard.ctaHref,
                }}
              />
            </div>

            <h3 className="mt-5 text-base font-semibold text-black">
              {data.centerCard.title}
            </h3>
            <p className="mt-1 text-sm font-semibold text-black/80">
              {data.centerCard.price}
            </p>

            <motion.div
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="mt-6"
            >
              <Link
                href={data.centerCard.ctaHref}
                className="inline-flex h-11 items-center border border-black bg-black px-5 text-xs font-semibold uppercase tracking-wide text-white"
              >
                {data.centerCard.ctaLabel}
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="relative overflow-hidden border border-black/10 md:col-span-4">
          <div className="aspect-[4/5] md:aspect-[4/6]">
            <img
              src={data.rightImageUrl}
              alt="Jewelry showcase right"
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
