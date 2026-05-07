/**
 * ============================================================
 *  CONFIGURAÇÃO CENTRAL DA MARCA
 * ============================================================
 *  Altere qualquer valor aqui para refletir em TODO o site.
 *  - Nome, slogan, descrições
 *  - Número e mensagens do WhatsApp
 *  - Imagens do hero e seções
 * ============================================================
 */

import heroImg from "@/assets/hero-solari.jpg";
import craftImg from "@/assets/manifesto-craft.jpg";
import branchLeft from "@/assets/branch-left.png";
import branchRight from "@/assets/branch-right.png";

export const BRAND = {
  // ---------- IDENTIDADE ----------
  name: "Solari",
  tagline: "Perfumaria Artesanal",
  year: new Date().getFullYear(),

  // ---------- SEO ----------
  seoTitle: "Solari — A Alma da Casa em Cada Aroma",
  seoDescription:
    "Perfumaria artesanal Solari: difusores, home sprays e sabonetes feitos à mão sob demanda. Luxo botânico para o seu lar.",

  // ---------- HERO ----------
  heroBadge: "Perfumaria Artesanal",
  heroTitlePart1: "Solari:",
  heroTitleAccent: "a alma",
  heroTitlePart2: "da casa em cada aroma",
  heroSubtitle:
    "Fragrâncias naturais feitas à mão, com o cuidado que o seu lar merece.",
  heroCta: "Conhecer a Coleção",

  // ---------- MANIFESTO ----------
  manifestoEyebrow: "O Manifesto",
  manifestoTitle: "Feito por mãos,",
  manifestoTitleAccent: "movido",
  manifestoTitleEnd: "por memórias.",
  manifestoText:
    "Cada difusor e spray é produzido sob demanda, garantindo que a essência chegue fresca e potente até você. Sem pressa industrial — apenas a precisão de quem acredita que perfume é sensação, não produto.",

  // ---------- COLEÇÃO ----------
  collectionEyebrow: "A Coleção",
  collectionTitle: "Catálogo de",
  collectionTitleAccent: "experiências",
  collectionSubtitle:
    "Escolha sua versão, monte sua sacola e finalize seu pedido diretamente pelo WhatsApp.",

  // ---------- CTA FINAL ----------
  ctaTitle: "Pronta para",
  ctaTitleAccent: "perfumar",
  ctaTitleEnd: "seu lar?",
  ctaSubtitle:
    "Encomende direto pelo WhatsApp e receba uma criação fresca, feita especialmente para você.",
  ctaButton: "Falar no WhatsApp",

  // ---------- RODAPÉ ----------
  footerText: "Perfumaria artesanal · Feita à mão sob demanda",
  footerAddress: "Rua Campo Largo, 156",

  // ---------- IMAGENS ----------
  images: {
    hero: heroImg,
    heroAlt: "Composição botânica Solari com lavanda, eucalipto e cítricos",
    manifesto: craftImg,
    manifestoAlt: "Artesã preparando difusor Solari à mão",
    // Ramos PNG que entram pelas bordas no hero
    branchLeft,
    branchRight,
  },
};

/**
 * ============================================================
 *  CONFIGURAÇÃO DO WHATSAPP
 * ============================================================
 *  Apenas dígitos, com código do país (55) + DDD + número.
 *  Ex.: 5511976684475
 * ============================================================
 */
export const WHATSAPP = {
  number: "5511976684475",

  // Mensagem do botão "Falar no WhatsApp" (CTA final)
  contactMessage: "Olá ! Gostaria de conhecer mais sobre os produtos.",

  // Função que monta a mensagem do pedido (sacola).
  // Recebe a lista de itens já formatada e o total em reais.
  orderMessage: (itemsList: string, total: number) =>
    `Olá ! Gostaria de encomendar: ${itemsList}. 
    Valor Total Estimado: R$${total.toFixed(0)}`,
};

/** Helper: gera URL pronta do WhatsApp com a mensagem codificada. */
export const whatsappUrl = (message: string) =>
  `https://wa.me/${WHATSAPP.number}?text=${encodeURIComponent(message)}`;
