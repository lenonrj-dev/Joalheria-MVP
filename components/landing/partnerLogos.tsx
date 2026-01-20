"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { PartnerLogoItem } from "../../data/landingData";

type PartnerLogosProps = {
  items: PartnerLogoItem[];
};

export default function PartnerLogos({ items }: PartnerLogosProps) {
  return (
    <section className="pb-16">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="grid grid-cols-3 gap-3 md:grid-cols-6 md:gap-4"
      >
        {items.map((i) => (
          <Link
            key={i.name}
            href={i.href}
            className="grid h-14 place-items-center border border-black/10 bg-white text-xs font-semibold uppercase tracking-wide text-black/60 hover:text-black"
            aria-label={i.name}
          >
            {i.name}
          </Link>
        ))}
      </motion.div>
    </section>
  );
}
