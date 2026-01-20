"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { PromoBannersData, PromoBanner } from "../../data/landingData";

type PromoBannersProps = {
  data: PromoBannersData;
};

export default function PromoBanners({ data }: PromoBannersProps) {
  return (
    <section className="pb-12">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="grid grid-cols-1 gap-4 md:grid-cols-12"
      >
        <BannerCard banner={data.left} className="md:col-span-7" ratio="wide" />

        <div className="grid gap-4 md:col-span-5">
          <BannerCard banner={data.rightTop} ratio="rect" />
          <BannerCard banner={data.rightBottom} ratio="rect" />
        </div>
      </motion.div>
    </section>
  );
}

function BannerCard({
  banner,
  ratio,
  className = "",
}: {
  banner: PromoBanner;
  ratio: "wide" | "rect";
  className?: string;
}) {
  return (
    <motion.div whileHover={{ y: -2 }} className={className}>
      <div className="relative overflow-hidden border border-black/10">
        <div className={ratio === "wide" ? "aspect-[7/4]" : "aspect-[5/2]"}>
          <img
            src={banner.imageUrl}
            alt={banner.title}
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent" />

        <div className="absolute left-6 top-1/2 -translate-y-1/2">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/90">
            {banner.eyebrow}
          </p>
          <h3 className="mt-2 max-w-xs text-xl font-semibold leading-snug text-white md:text-2xl">
            {banner.title}
          </h3>
          {banner.subtitle ? (
            <p className="mt-2 max-w-xs text-sm text-white/80">{banner.subtitle}</p>
          ) : null}

          <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }} className="mt-4">
            <Link
              href={banner.ctaHref}
              className="inline-flex h-10 items-center border border-white/70 bg-white/95 px-4 text-xs font-semibold uppercase tracking-wide text-black hover:bg-white"
            >
              {banner.ctaLabel}
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
