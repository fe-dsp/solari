/**
 * ============================================================
 *  CATÁLOGO DE PRODUTOS
 * ============================================================
 *  COMO ADICIONAR um novo produto:
 *    1. Coloque a imagem em src/assets/ (ex.: meu-produto.jpg)
 *    2. Importe no topo deste arquivo:
 *         import meuProduto from "@/assets/meu-produto.jpg";
 *    3. Copie um bloco { ... } abaixo e cole no array `products`.
 *    4. Mude `id` (deve ser ÚNICO), `name`, `image` e `variants`.
 *
 *  COMO REMOVER: apague o bloco { ... } correspondente.
 *
 *  COMO DESTACAR um produto (ocupa 2 colunas): adicione `highlight: true`.
 * ============================================================
 */

import diffuser from "@/assets/product-diffuser.jpg";
import soap from "@/assets/product-soap.jpg";
import spray from "@/assets/product-spray.jpg";
import kit from "@/assets/product-kit.jpg";

// Re-exporta para manter compatibilidade. A fonte da verdade está em brand.ts
export { WHATSAPP } from "./brand";
import { WHATSAPP } from "./brand";
export const WHATSAPP_NUMBER = WHATSAPP.number;

export type Variant = { id: string; label: string; price: number };
export type Product = {
  id: string;
  name: string;
  category: string;
  size: string;
  description: string;
  image: string;
  variants: Variant[];
  highlight?: boolean;
};

export const products: Product[] = [
  {
    id: "difusor",
    name: "Difusor de Ambientes",
    category: "Difusores",
    size: "250ml",
    description:
      "Aroma contínuo e elegante. Varetas naturais que perfumam seu lar por semanas.",
    image: diffuser,
    variants: [
      { id: "vidro", label: "Vidro", price: 90 },
      { id: "plastico", label: "Plástico", price: 65 },
      { id: "refil", label: "Refil", price: 55 },
    ],
  },
  {
    id: "sabonete",
    name: "Sabonete Líquido",
    category: "Sabonetes",
    size: "250ml",
    description: "Fórmula suave e perfumada para um ritual de cuidado diário.",
    image: soap,
    variants: [
      { id: "vidro", label: "Vidro", price: 70 },
      { id: "plastico", label: "Plástico", price: 35 },
      { id: "refil", label: "Refil", price: 30 },
    ],
  },
  {
    id: "homespray",
    name: "Home Spray",
    category: "Home Spray",
    size: "200ml",
    description:
      "Borrifadas precisas para renovar tecidos, ambientes e momentos.",
    image: spray,
    variants: [
      { id: "spray", label: "Spray", price: 35 },
      { id: "refil", label: "Refil", price: 30 },
    ],
  },
  {
    id: "kit-bandeja",
    name: "Kit Bandeja",
    category: "Premium",
    size: "Edição limitada",
    description:
      "Bandeja artesanal com difusor e sabonete em vidro. Presente sob medida.",
    image: kit,
    highlight: true,
    variants: [
      { id: "pequena", label: "Bandeja Pequena", price: 180 },
      { id: "grande", label: "Bandeja Grande", price: 200 },
    ],
  },

  // ----- MODELO: copie o bloco abaixo para criar um novo produto -----
  // {
  //   id: "id-unico",
  //   name: "Nome do Produto",
  //   category: "Categoria",
  //   size: "Tamanho",
  //   description: "Descrição curta e elegante.",
  //   image: minhaImagem,
  //   variants: [
  //     { id: "padrao", label: "Padrão", price: 50 },
  //   ],
  // },
];
