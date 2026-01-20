"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { DiscountBannerData } from "../../data/landingData";

type DiscountBannerProps = {
  data: DiscountBannerData;
};

export default function DiscountBanner({ data }: DiscountBannerProps) {
  return (
    <section className="my-10 bg-[var(--wine)]">
      <div className="mx-auto w-full max-w-[1200px] px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="grid items-center gap-6 md:grid-cols-12"
        >
          <div className="md:col-span-3">
            <div className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
              {data.bigText}
            </div>
          </div>
          <div className="md:col-span-6">
            <h3 className="text-2xl font-semibold text-white md:text-3xl">
              {data.title}
            </h3>
            <p className="mt-1 text-sm text-white/80">{data.subtitle}</p>
          </div>
          <div className="md:col-span-3 md:text-right">
            <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }}>
              <Link
                href={data.ctaHref}
                className="inline-flex h-11 items-center border border-white bg-white px-5 text-xs font-semibold uppercase tracking-wide text-black"
              >
                {data.ctaLabel}
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
