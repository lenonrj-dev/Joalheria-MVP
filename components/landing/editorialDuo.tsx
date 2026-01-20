"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { EditorialDuoData } from "../../data/landingData";

type EditorialDuoProps = {
  data: EditorialDuoData;
};

export default function EditorialDuo({ data }: EditorialDuoProps) {
  return (
    <section className="pb-12">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="grid grid-cols-1 gap-4 md:grid-cols-12"
      >
        {/* Left collage */}
        <div className="relative overflow-hidden border border-black/10 md:col-span-7">
          <div className="relative aspect-[7/4] md:aspect-[7/4]">
            <img
              src={data.collage.baseImageUrl}
              alt="Jewelry lifestyle"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />

            <div className="absolute bottom-6 left-6 w-[280px] border border-black/10 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/60">
                {data.collage.cardTitle}
              </p>
              <p className="mt-2 text-sm font-semibold text-black">
                {data.collage.cardText}
              </p>

              <motion.div
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="mt-4"
              >
                <Link
                  href={data.collage.ctaHref}
                  className="inline-flex h-10 items-center border border-black bg-black px-4 text-xs font-semibold uppercase tracking-wide text-white"
                >
                  {data.collage.ctaLabel}
                </Link>
              </motion.div>
            </div>

            <div className="absolute right-6 top-6 hidden w-[220px] overflow-hidden border border-black/10 bg-white shadow-sm md:block">
              <div className="aspect-[1/1] bg-black/[0.03]">
                <img
                  src={data.collage.floatingImageUrl}
                  alt="Detail"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right portrait */}
        <div className="relative overflow-hidden border border-black/10 md:col-span-5">
          <div className="aspect-[4/5] md:aspect-[5/6]">
            <img
              src={data.portraitImageUrl}
              alt="Model portrait"
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
