"use client";

import { motion } from "framer-motion";
import type { BrandStripData } from "../../data/landingData";

type BrandStripProps = {
  data: BrandStripData;
};

export default function BrandStrip({ data }: BrandStripProps) {
  return (
    <section className="bg-[var(--muted)] py-12">
      <div className="mx-auto w-full max-w-[1200px] px-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <div className="text-center">
            <h3 className="text-2xl font-semibold tracking-tight text-black md:text-3xl">
              {data.title}
            </h3>
            <p className="mt-2 text-sm text-black/60">{data.subtitle}</p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {data.brands.map((b) => (
              <div
                key={b.name}
                className="flex flex-col items-center justify-center border border-black/10 bg-white px-6 py-7 text-center"
              >
                <p className="text-lg font-semibold tracking-wide text-black">
                  {b.name}
                </p>
                <p className="mt-1 text-xs text-black/55">{b.note}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
