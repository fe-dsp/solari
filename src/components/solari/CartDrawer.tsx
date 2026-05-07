import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2, MessageCircle, ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { BRAND, WHATSAPP, whatsappUrl } from "@/lib/brand";

const fmt = (n: number) => `R$${n.toFixed(0)}`;

export function CartDrawer() {
  const { open, setOpen, items, inc, dec, remove, total, clear } = useCart();

  const sendWhatsapp = () => {
    if (items.length === 0) return;
    const list = items
      .map((i) => `${i.productName} (${i.variantLabel}) x ${i.quantity}`)
      .join(", ");
    const msg = WHATSAPP.orderMessage(list, total);
    window.open(whatsappUrl(msg), "_blank");
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent className="flex w-full flex-col gap-0 border-l-border bg-background p-0 sm:max-w-md">
        <SheetHeader className="border-b border-border px-6 py-5">
          <SheetTitle className="flex items-center gap-2 font-display text-2xl">
            <ShoppingBag className="h-5 w-5 text-primary" />
            Sua Sacola
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 text-center text-muted-foreground">
              <ShoppingBag className="h-10 w-10 opacity-40" />
              <p className="font-display text-xl text-foreground">Sua sacola está vazia</p>
              <p className="text-sm">Comece a compor sua coleção {BRAND.name}.</p>
            </div>
          ) : (
            <ul className="divide-y divide-border">
              {items.map((i) => (
                <li key={i.key} className="flex gap-3 py-4">
                  <div className="flex-1">
                    <p className="font-display text-lg leading-tight">{i.productName}</p>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      {i.variantLabel} · {i.size}
                    </p>
                    <p className="mt-1 text-sm text-primary">{fmt(i.price)} un.</p>

                    <div className="mt-3 flex items-center gap-2">
                      <button
                        onClick={() => dec(i.key)}
                        className="grid h-8 w-8 place-items-center rounded-full border border-border transition-colors hover:bg-muted"
                        aria-label="Diminuir"
                      >
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <span className="w-6 text-center text-sm">{i.quantity}</span>
                      <button
                        onClick={() => inc(i.key)}
                        className="grid h-8 w-8 place-items-center rounded-full border border-border transition-colors hover:bg-muted"
                        aria-label="Aumentar"
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                      <button
                        onClick={() => remove(i.key)}
                        className="ml-auto text-muted-foreground transition-colors hover:text-destructive"
                        aria-label="Remover"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <div className="text-right font-display text-lg">
                    {fmt(i.price * i.quantity)}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-border bg-secondary/40 px-6 py-5">
          <div className="mb-4 flex items-baseline justify-between">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Total estimado</span>
            <span className="font-display text-3xl text-primary">{fmt(total)}</span>
          </div>
          <Button
            onClick={sendWhatsapp}
            disabled={items.length === 0}
            className="h-12 w-full gap-2 rounded-full bg-primary text-base text-primary-foreground hover:bg-primary/90"
          >
            <MessageCircle className="h-4 w-4" />
            Confirmar Pedido via WhatsApp
          </Button>
          {items.length > 0 && (
            <button
              onClick={clear}
              className="mt-3 w-full text-center text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground"
            >
              Esvaziar sacola
            </button>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
