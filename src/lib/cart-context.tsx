import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import type { Product, Variant } from "./products";

export type CartItem = {
  key: string;
  productId: string;
  productName: string;
  variantLabel: string;
  size: string;
  price: number;
  quantity: number;
};

type CartCtx = {
  items: CartItem[];
  open: boolean;
  setOpen: (v: boolean) => void;
  add: (p: Product, v: Variant) => void;
  inc: (key: string) => void;
  dec: (key: string) => void;
  remove: (key: string) => void;
  clear: () => void;
  total: number;
  count: number;
};

const Ctx = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);

  const add = (p: Product, v: Variant) => {
    const key = `${p.id}-${v.id}`;
    setItems((prev) => {
      const found = prev.find((i) => i.key === key);
      if (found) return prev.map((i) => (i.key === key ? { ...i, quantity: i.quantity + 1 } : i));
      return [
        ...prev,
        {
          key,
          productId: p.id,
          productName: p.name,
          variantLabel: v.label,
          size: p.size,
          price: v.price,
          quantity: 1,
        },
      ];
    });
    setOpen(true);
  };

  const inc = (key: string) =>
    setItems((p) => p.map((i) => (i.key === key ? { ...i, quantity: i.quantity + 1 } : i)));
  const dec = (key: string) =>
    setItems((p) =>
      p.flatMap((i) =>
        i.key === key ? (i.quantity > 1 ? [{ ...i, quantity: i.quantity - 1 }] : []) : [i],
      ),
    );
  const remove = (key: string) => setItems((p) => p.filter((i) => i.key !== key));
  const clear = () => setItems([]);

  const total = useMemo(() => items.reduce((s, i) => s + i.price * i.quantity, 0), [items]);
  const count = useMemo(() => items.reduce((s, i) => s + i.quantity, 0), [items]);

  return (
    <Ctx.Provider value={{ items, open, setOpen, add, inc, dec, remove, clear, total, count }}>
      {children}
    </Ctx.Provider>
  );
}

export function useCart() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useCart must be used within CartProvider");
  return c;
}
