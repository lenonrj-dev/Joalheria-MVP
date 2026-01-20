"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { HeroData } from "../../data/landingData";

type HeroProps = {
  data: HeroData;
};

export default function Hero({ data }: HeroProps) {
  return (
    <section className="pt-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="relative overflow-hidden border border-black/10"
      >
        <div className="relative h-[360px] w-full md:h-[520px]">
          <img
            src={data.imageUrl}
            alt="Jewelry hero banner"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/5 to-transparent" />

          <div className="relative z-10 flex h-full w-full items-center">
            <div className="w-full max-w-xl px-6 py-10 md:px-14">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/90">
                {data.eyebrow}
              </p>
              <h1 className="mt-3 text-4xl font-semibold leading-[1.05] text-white md:text-6xl">
                {data.titleLine1}
                <br />
                {data.titleLine2}
              </h1>

              <div className="mt-6">
                <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href={data.ctaHref}
                    className="inline-flex h-11 items-center border border-white/70 bg-white/95 px-5 text-xs font-semibold uppercase tracking-wide text-black hover:bg-white"
                  >
                    {data.ctaLabel}
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
