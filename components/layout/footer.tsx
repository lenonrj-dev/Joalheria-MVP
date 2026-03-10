"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-black/10 bg-[var(--muted)]">
      <div className="mx-auto w-full max-w-[1200px] px-4 py-12">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <h3 className="text-sm font-semibold tracking-wide text-black">
              Receba novidades e ganhe 10% OFF na primeira compra
            </h3>
            <p className="mt-2 max-w-md text-sm text-black/70">
              Acesso antecipado aos lançamentos, ofertas limitadas e curadoria de joias.
            </p>

            <form
              className="mt-5 flex w-full max-w-md gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder="Digite seu e-mail"
                className="h-11 flex-1 border border-black/15 bg-white px-4 text-sm outline-none placeholder:text-black/40 focus:border-black"
              />
              <motion.button
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="h-11 border border-black bg-black px-5 text-xs font-semibold uppercase tracking-wide text-white"
              >
                Quero receber
              </motion.button>
            </form>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-wide text-black/80">
              Loja
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-black/70">
              <li>
                <Link href="/" className="hover:text-black">
                  Novidades
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-black">
                  Mais vendidos
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-black">
                  Ofertas
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-black">
                  Vale-presente
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-wide text-black/80">
              Informações
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-black/70">
              <li>
                <Link href="/" className="hover:text-black">
                  Sobre a LUME
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-black">
                  Política de envio
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-black">
                  Trocas e devoluções
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-black">
                  Fale com a gente
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wide text-black/80">
              Atendimento
            </h4>
            <div className="mt-4 text-sm text-black/70">
              <p>+1 (212) 555-0104</p>
              <p className="mt-1">suporte@lume-joias.com</p>

              <div className="mt-4 flex items-center gap-2">
                <SocialButton label="Facebook" />
                <SocialButton label="Instagram" />
                <SocialButton label="Twitter" />
                <SocialButton label="YouTube" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-black/10 pt-6 text-xs text-black/60 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} LUME. Todos os direitos reservados.</p>
          <p className="tracking-wide">Checkout seguro • Qualidade premium • Design minimalista</p>
        </div>
      </div>
    </footer>
  );
}

function SocialButton({ label }: { label: string }) {
  return (
    <motion.button
      type="button"
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      aria-label={label}
      className="grid h-9 w-9 place-items-center border border-black/15 bg-white text-[10px] font-semibold uppercase tracking-wide text-black hover:border-black/25"
    >
      {label.slice(0, 2)}
    </motion.button>
  );
}
