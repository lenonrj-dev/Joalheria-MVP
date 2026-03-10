"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { InstagramData } from "../../data/landingData";

type InstagramGridProps = {
  data: InstagramData;
};

export default function InstagramGrid({ data }: InstagramGridProps) {
  return (
    <section className="pb-14">
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
          <h3 className="mt-2 text-2xl font-semibold tracking-tight text-black md:text-3xl">
            {data.title}
          </h3>
          <p className="mt-2 text-sm text-black/60">{data.subtitle}</p>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-3 md:grid-cols-5 md:gap-4">
          {data.images.map((img, idx) => (
            <motion.div key={idx} whileHover={{ y: -2 }} className="group">
              <Link
                href={img.href}
                className="relative block aspect-square overflow-hidden border border-black/10 bg-white"
                aria-label={`Imagem do Instagram ${idx + 1}`}
              >
                <img
                  src={img.imageUrl}
                  alt="Post do Instagram"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
