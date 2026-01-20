"use client";

import { motion } from "framer-motion";
import type { FeatureItem } from "../../data/landingData";

type FeatureStripProps = {
  items: FeatureItem[];
};

export default function FeatureStrip({ items }: FeatureStripProps) {
  return (
    <section className="pb-14">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="grid grid-cols-2 gap-4 border border-black/10 bg-white p-6 md:grid-cols-4 md:p-7"
      >
        {items.map((i) => (
          <div key={i.title} className="flex items-start gap-3">
            <div className="grid h-10 w-10 place-items-center border border-black/10 bg-black/[0.02]">
              <FeatureIcon type={i.icon} />
            </div>
            <div>
              <p className="text-sm font-semibold text-black">{i.title}</p>
              <p className="mt-1 text-xs text-black/60">{i.description}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

function FeatureIcon({ type }: { type: FeatureItem["icon"] }) {
  const common = "h-5 w-5 text-black";

  if (type === "truck") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
        <path
          d="M3 7h11v10H3V7Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M14 10h4l3 3v4h-7V10Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M7 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm11 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (type === "support") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
        <path
          d="M12 2a8 8 0 0 0-8 8v4a4 4 0 0 0 4 4h1v-7H6v-1a6 6 0 1 1 12 0v1h-3v7h1a4 4 0 0 0 4-4v-4a8 8 0 0 0-8-8Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M10 20h4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "refund") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
        <path
          d="M21 12a9 9 0 1 1-2.64-6.36"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M21 3v6h-6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
      <path
        d="M4 4h16v6H4V4Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M4 14h16v6H4v-6Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M12 6h6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M12 16h6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
