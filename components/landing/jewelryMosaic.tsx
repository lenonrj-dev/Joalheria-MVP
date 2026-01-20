"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { MosaicData, MosaicTile } from "../../data/landingData";

import ProductActions from "../shop/ProductsAction";

type JewelryMosaicProps = {
  data: MosaicData;
};

export default function JewelryMosaic({ data }: JewelryMosaicProps) {
  return (
    <section className="pb-12">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        {/*
          MOSAICO EXATO
          - Esquerda: 2 quadrados em cima + 1 retângulo embaixo
          - Centro: 1 tile alto (altura total do bloco esquerdo)
          - Direita: 1 retângulo em cima + 2 quadrados embaixo

          Desktop: grid 5 colunas -> [2 | 1 | 2]
        */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
          {/* LEFT BLOCK (2 cols) */}
          <div className="md:col-span-2">
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <MosaicCard tile={data.leftTopA} ratio="square" />
                <MosaicCard tile={data.leftTopB} ratio="square" />
              </div>
              <MosaicCard tile={data.leftBottom} ratio="rect" />
            </div>
          </div>

          {/* CENTER TALL (1 col) */}
          <div className="md:col-span-1">
            <MosaicCard tile={data.centerTall} ratio="tall" />
          </div>

          {/* RIGHT BLOCK (2 cols) */}
          <div className="md:col-span-2">
            <div className="grid gap-4">
              <MosaicCard tile={data.rightTop} ratio="rect" />
              <div className="grid grid-cols-2 gap-4">
                <MosaicCard tile={data.rightBottomA} ratio="square" />
                <MosaicCard tile={data.rightBottomB} ratio="square" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function MosaicCard({
  tile,
  ratio,
}: {
  tile: MosaicTile;
  ratio: "square" | "rect" | "tall";
}) {
  const ratioClass =
    ratio === "square"
      ? "aspect-square"
      : ratio === "rect"
      ? "aspect-[2/1]"
      : "aspect-[1/2]";

  return (
    <motion.div whileHover={{ y: -2 }} className="group">
      <Link
        href={tile.href}
        className={`relative block overflow-hidden border border-black/10 bg-white ${ratioClass}`}
        aria-label={tile.label}
      >
        <img
          src={tile.imageUrl}
          alt={tile.label}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          loading="lazy"
          decoding="async"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />

        <div className="absolute left-3 top-3 flex flex-col gap-2">
          <span className="inline-flex w-fit bg-[var(--wine)] px-2 py-1 text-[10px] font-semibold text-white">
            {tile.discount}
          </span>
          <span className="inline-flex w-fit bg-white px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-black">
            {tile.label}
          </span>
        </div>

        {/* Ações rápidas (favoritar + carrinho) */}
        <ProductActions item={tile} />
      </Link>
    </motion.div>
  );
}
