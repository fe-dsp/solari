import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ShoppingBag, Leaf, Sparkles, HandHeart, Flower2, MessageCircle } from "lucide-react";
import { products } from "@/lib/products";
import { BRAND, WHATSAPP, whatsappUrl } from "@/lib/brand";
import { CartProvider, useCart } from "@/lib/cart-context";
import { CartDrawer } from "@/components/solari/CartDrawer";
import { ProductCard } from "@/components/solari/ProductCard";
import { Reveal } from "@/components/solari/Reveal";

export const Route = createFileRoute("/")({
  component: () => (
    <CartProvider>
      <SolariPage />
      <CartDrawer />
    </CartProvider>
  ),
  head: () => ({
    meta: [
      { title: BRAND.seoTitle },
      { name: "description", content: BRAND.seoDescription },
      { property: "og:title", content: BRAND.seoTitle },
      { property: "og:description", content: BRAND.seoDescription },
      { property: "og:image", content: BRAND.images.hero },
    ],
  }),
});

function CartButton() {
  const { setOpen, count } = useCart();
  return (
    <button
      onClick={() => setOpen(true)}
      className="glass relative flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium tracking-wide shadow-[var(--shadow-card)] transition-all hover:border-primary"
      aria-label="Abrir sacola"
    >
      <ShoppingBag className="h-4 w-4" />
      <span className="hidden sm:inline">Sacola</span>
      {count > 0 && (
        <span className="grid h-5 min-w-5 place-items-center rounded-full bg-primary px-1.5 text-[11px] font-semibold text-primary-foreground">
          {count}
        </span>
      )}
    </button>
  );
}

function useParallax() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return y;
}

function SolariPage() {
  const y = useParallax();
  const scrollToCollection = () => {
    document.getElementById("colecao")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* Floating cart */}
      <div className="fixed right-4 top-4 z-50 sm:right-6 sm:top-6">
        <CartButton />
      </div>

      {/* Logo mark top-left */}
      <div className="fixed left-5 top-5 z-40 sm:left-8 sm:top-7">
        <span className="font-script text-3xl text-foreground sm:text-4xl">{BRAND.name}</span>
      </div>

      {/* HERO */}
      <section className="relative min-h-[100svh] w-full">
        <div
          className="absolute inset-0 -z-10 bg-secondary/40"
          style={{ transform: `translateY(${y * 0.15}px)` }}
        >
          <img
            src={BRAND.images.hero}
            alt={BRAND.images.heroAlt}
            className="h-full w-full object-cover opacity-90"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-background" />
        </div>

        {/* Botanical branches entering from edges */}
        <img
          src={BRAND.images.branchLeft}
          alt=""
          aria-hidden
          className="pointer-events-none absolute left-0 top-[14%] z-[5] w-[55vw] max-w-[520px] -translate-x-[18%] animate-fade-in-up opacity-90 sm:top-[10%] md:w-[42vw] lg:w-[38vw] lg:max-w-[620px]"
          style={{ transform: `translate(-18%, ${y * -0.06}px)` }}
        />
        <img
          src={BRAND.images.branchRight}
          alt=""
          aria-hidden
          className="pointer-events-none absolute right-0 bottom-[12%] z-[5] w-[55vw] max-w-[520px] translate-x-[18%] animate-fade-in-up opacity-90 sm:bottom-[8%] md:top-[12%] md:bottom-auto md:w-[42vw] lg:w-[38vw] lg:max-w-[620px]"
          style={{ transform: `translate(18%, ${y * -0.04}px)` }}
        />

        <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-6 pb-16 pt-32 text-center">
          <Reveal>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-1.5 text-[11px] uppercase tracking-[0.3em] text-muted-foreground backdrop-blur">
              <Leaf className="h-3 w-3 text-primary" /> {BRAND.heroBadge}
            </span>
          </Reveal>
          <Reveal delay={150}>
            <h1 className="text-balance font-display text-5xl leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
              {BRAND.heroTitlePart1}{" "}
              <em className="font-script not-italic text-primary">{BRAND.heroTitleAccent}</em>
              <br className="hidden sm:block" />
              {BRAND.heroTitlePart2}
            </h1>
          </Reveal>
          <Reveal delay={300}>
            <p className="mx-auto mt-7 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              {BRAND.heroSubtitle}
            </p>
          </Reveal>
          <Reveal delay={450}>
            <button
              onClick={scrollToCollection}
              className="mt-10 inline-flex h-14 items-center gap-3 rounded-full bg-foreground px-8 text-sm uppercase tracking-[0.22em] text-background shadow-[var(--shadow-soft)] transition-all hover:scale-105 hover:bg-primary"
            >
              {BRAND.heroCta}
              <Sparkles className="h-4 w-4" />
            </button>
          </Reveal>
        </div>

        <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
          ↓ role para descobrir
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="relative px-6 py-28 md:py-36">
        <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-2 md:items-center md:gap-20">
          <Reveal className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-[var(--shadow-soft)]">
              <img
                src={BRAND.images.manifesto}
                alt={BRAND.images.manifestoAlt}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl border border-border bg-background p-5 shadow-[var(--shadow-card)] md:block">
              <HandHeart className="h-6 w-6 text-primary" />
              <p className="mt-2 max-w-[180px] font-display text-base leading-snug">
                Sob demanda, com tempo e afeto.
              </p>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <span className="text-xs uppercase tracking-[0.3em] text-primary">{BRAND.manifestoEyebrow}</span>
            <h2 className="mt-4 font-display text-4xl leading-[1.1] sm:text-5xl md:text-6xl">
              {BRAND.manifestoTitle}{" "}
              <em className="font-script not-italic text-primary">{BRAND.manifestoTitleAccent}</em>{" "}
              {BRAND.manifestoTitleEnd}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {BRAND.manifestoText}
            </p>

            <ul className="mt-8 space-y-4 text-sm">
              {[
                { icon: Flower2, t: "Botânicos selecionados", d: "Notas naturais e duradouras." },
                { icon: HandHeart, t: "Produção sob demanda", d: "Frescor que se sente no primeiro contato." },
                { icon: Sparkles, t: "Acabamento artesanal", d: "Cada frasco passa pelas mãos da artesã." },
              ].map(({ icon: Icon, t, d }) => (
                <li key={t} className="flex items-start gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent/40 text-primary">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-display text-lg leading-tight">{t}</p>
                    <p className="text-muted-foreground">{d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* COLLECTION */}
      <section id="colecao" className="relative bg-secondary/30 px-6 py-28 md:py-36">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-16 text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-primary">{BRAND.collectionEyebrow}</span>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl md:text-6xl">
              {BRAND.collectionTitle}{" "}
              <em className="font-script not-italic text-primary">{BRAND.collectionTitleAccent}</em>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
              {BRAND.collectionSubtitle}
            </p>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2">
            {products.map((p, i) => (
              <Reveal key={p.id} delay={i * 80} className={p.highlight ? "md:col-span-2" : ""}>
                <ProductCard product={p} featured={p.highlight} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / FOOTER */}
      <section className="relative px-6 py-24">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl leading-tight sm:text-5xl">
            {BRAND.ctaTitle}{" "}
            <em className="font-script not-italic text-primary">{BRAND.ctaTitleAccent}</em>{" "}
            {BRAND.ctaTitleEnd}
          </h2>
          <p className="mt-5 text-muted-foreground">
            {BRAND.ctaSubtitle}
          </p>
          <a
            href={whatsappUrl(WHATSAPP.contactMessage)}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex h-14 items-center gap-3 rounded-full bg-primary px-8 text-sm uppercase tracking-[0.22em] text-primary-foreground shadow-[var(--shadow-soft)] transition-all hover:scale-105"
          >
            <MessageCircle className="h-4 w-4" />
            {BRAND.ctaButton}
          </a>
        </Reveal>
      </section>

      <footer className="border-t border-border px-6 py-10 text-center text-sm text-muted-foreground">
        <p className="font-script text-3xl text-foreground">{BRAND.name}</p>
        <p className="mt-2">{BRAND.footerText}</p>
        <p className="mt-1 text-xs">© {BRAND.year} {BRAND.name}. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}
