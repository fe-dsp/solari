import { useState } from "react";
import { Plus } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import type { Product } from "@/lib/products";
import { cn } from "@/lib/utils";

const fmt = (n: number) => `R$${n.toFixed(0)}`;

export function ProductCard({ product, featured }: { product: Product; featured?: boolean }) {
  const [variantId, setVariantId] = useState(product.variants[0].id);
  const { add } = useCart();
  const variant = product.variants.find((v) => v.id === variantId)!;

  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]",
        featured && "md:col-span-2 md:flex-row",
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden bg-secondary/40",
          featured ? "md:w-1/2" : "aspect-[4/5]",
        )}
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-background/85 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-foreground backdrop-blur">
          {product.category}
        </span>
      </div>

      <div className={cn("flex flex-1 flex-col p-6", featured && "md:p-10")}>
        <div className="mb-1 text-xs uppercase tracking-[0.25em] text-muted-foreground">
          {product.size}
        </div>
        <h3 className={cn("font-display leading-tight", featured ? "text-3xl md:text-4xl" : "text-2xl")}>
          {product.name}
        </h3>
        <p className="mt-3 text-sm text-muted-foreground">{product.description}</p>

        <div className="mt-5 space-y-2">
          {product.variants.map((v) => {
            const active = v.id === variantId;
            return (
              <button
                key={v.id}
                onClick={() => setVariantId(v.id)}
                className={cn(
                  "flex w-full items-center justify-between rounded-full border px-4 py-2.5 text-sm transition-all",
                  active
                    ? "border-primary bg-primary/5 text-foreground"
                    : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground",
                )}
              >
                <span className="flex items-center gap-2">
                  <span
                    className={cn(
                      "h-2 w-2 rounded-full border",
                      active ? "border-primary bg-primary" : "border-border",
                    )}
                  />
                  {v.label}
                </span>
                <span className="font-display text-base">{fmt(v.price)}</span>
              </button>
            );
          })}
        </div>

        <button
          onClick={() => add(product, variant)}
          className="mt-6 flex h-12 items-center justify-center gap-2 rounded-full bg-foreground text-sm uppercase tracking-[0.18em] text-background transition-all hover:bg-primary"
        >
          <Plus className="h-4 w-4" />
          Adicionar à sacola
        </button>
      </div>
    </article>
  );
}
