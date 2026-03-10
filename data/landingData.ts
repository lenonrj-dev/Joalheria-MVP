export type NavLink = { label: string; href: string };
export type CategoryLink = { label: string; href: string };

export type HeroData = {
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  ctaLabel: string;
  ctaHref: string;
  imageUrl: string;
};

export type MosaicTile = {
  id: string;
  label: string;
  discount: string;
  price: string;
  imageUrl: string;
  href: string;
};

export type MosaicData = {
  leftTopA: MosaicTile;
  leftTopB: MosaicTile;
  leftBottom: MosaicTile;
  centerTall: MosaicTile;
  rightTop: MosaicTile;
  rightBottomA: MosaicTile;
  rightBottomB: MosaicTile;
};

export type ProductCard = {
  id: string;
  badge?: "New" | "Hot";
  title: string;
  price: string;
  imageUrl: string;
  href: string;
};

export type TripleShowcaseData = {
  leftImageUrl: string;
  rightImageUrl: string;
  centerCard: {
    id: string;
    eyebrow: string;
    title: string;
    price: string;
    imageUrl: string;
    ctaLabel: string;
    ctaHref: string;
  };
};

export type ProductsRowData = {
  eyebrow: string;
  title: string;
  items: ProductCard[];
};

export type EditorialDuoData = {
  collage: {
    baseImageUrl: string;
    floatingImageUrl: string;
    cardTitle: string;
    cardText: string;
    ctaLabel: string;
    ctaHref: string;
  };
  portraitImageUrl: string;
};

export type DiscountBannerData = {
  bigText: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
};

export type PromoBanner = {
  imageUrl: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  ctaLabel: string;
  ctaHref: string;
};

export type PromoBannersData = {
  left: PromoBanner;
  rightTop: PromoBanner;
  rightBottom: PromoBanner;
};

export type FeatureItem = {
  title: string;
  description: string;
  icon: "truck" | "support" | "refund" | "discount";
};

export type BrandStripData = {
  title: string;
  subtitle: string;
  brands: { name: string; note: string }[];
};

export type TabbedProductsData = {
  eyebrow: string;
  title: string;
  tabs: {
    key: "featured" | "new" | "best";
    label: string;
    items: ProductCard[];
  }[];
};

export type InstagramData = {
  eyebrow: string;
  title: string;
  subtitle: string;
  images: { imageUrl: string; href: string }[];
};

export type PartnerLogoItem = {
  name: string;
  href: string;
};

// ✅ Checkout via WhatsApp sem número (abre o WhatsApp e deixa o usuário escolher o contato)
export const WHATSAPP_SHARE_BASE = "https://wa.me/?text=";

export const navLinks: NavLink[] = [
  { label: "Início", href: "/" },
  { label: "Loja", href: "/" },
  { label: "Coleções", href: "/" },
  { label: "Blog", href: "/" },
  { label: "Sobre", href: "/" },
];

export const categories: CategoryLink[] = [
  { label: "Anéis", href: "/" },
  { label: "Brincos", href: "/" },
  { label: "Colares", href: "/" },
  { label: "Pulseiras", href: "/" },
  { label: "Braceletes", href: "/" },
  { label: "Novidades", href: "/" },
  { label: "Mais vendidos", href: "/" },
];

export const heroData: HeroData = {
  eyebrow: "Brilhe com elegância",
  titleLine1: "Joias minimalistas",
  titleLine2: "feitas para durar",
  ctaLabel: "VER COLEÇÃO",
  ctaHref: "/",
  imageUrl:
    "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=1800&q=80",
};

export const mosaicData: MosaicData = {
  leftTopA: {
    id: "mosaic-rings",
    label: "Anéis",
    discount: "-30%",
    price: "$39.00",
    href: "/",
    imageUrl:
      "https://images.unsplash.com/photo-1608042314453-ae338d80c427?auto=format&fit=crop&w=900&q=80",
  },
  leftTopB: {
    id: "mosaic-bracelet",
    label: "Pulseiras",
    discount: "-20%",
    price: "$29.00",
    href: "/",
    imageUrl:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80",
  },
  leftBottom: {
    id: "mosaic-love",
    label: "Presentes",
    discount: "-15%",
    price: "$49.00",
    href: "/",
    imageUrl:
      "https://images.unsplash.com/photo-1520975682031-a83e1e38d2bb?auto=format&fit=crop&w=1200&q=80",
  },
  centerTall: {
    id: "mosaic-chain",
    label: "Colares",
    discount: "-40%",
    price: "$59.00",
    href: "/",
    imageUrl:
      "https://images.unsplash.com/photo-1519682577862-22b62b24e493?auto=format&fit=crop&w=1200&q=80",
  },
  rightTop: {
    id: "mosaic-bangles",
    label: "Braceletes",
    discount: "-25%",
    price: "$55.00",
    href: "/",
    imageUrl:
      "https://images.unsplash.com/photo-1601121141461-9d664e9efedb?auto=format&fit=crop&w=1400&q=80",
  },
  rightBottomA: {
    id: "mosaic-necklace",
    label: "Colares",
    discount: "-10%",
    price: "$69.00",
    href: "/",
    imageUrl:
      "https://images.unsplash.com/photo-1535632787350-4e68ef7a040e?auto=format&fit=crop&w=900&q=80",
  },
  rightBottomB: {
    id: "mosaic-accessories",
    label: "Acessórios",
    discount: "-18%",
    price: "$24.00",
    href: "/",
    imageUrl:
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=900&q=80",
  },
};

export const tripleShowcaseData: TripleShowcaseData = {
  leftImageUrl:
    "https://images.unsplash.com/photo-1603570419986-3c3a1d5931f6?auto=format&fit=crop&w=1400&q=80",
  rightImageUrl:
    "https://images.unsplash.com/photo-1520975958221-562b4b6fd5d3?auto=format&fit=crop&w=1400&q=80",
  centerCard: {
    id: "triple-minimal-earrings",
    eyebrow: "Escolha do momento",
    title: "Brincos Gota Minimalistas",
    price: "$49.00",
    imageUrl:
      "https://images.unsplash.com/photo-1512499617640-c2f999fe6b8a?auto=format&fit=crop&w=1000&q=80",
    ctaLabel: "COMPRAR AGORA",
    ctaHref: "/",
  },
};

export const productRowData: ProductsRowData = {
  eyebrow: "Semana de ofertas • 10% OFF",
  title: "Joias essenciais para o seu dia a dia",
  items: [
    {
      id: "row-silver-loop-bracelet",
      badge: "New",
      title: "Pulseira Loop Prateada",
      price: "$29.00",
      href: "/",
      imageUrl:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: "row-golden-chain-necklace",
      badge: "Hot",
      title: "Colar Corrente Dourada",
      price: "$59.00",
      href: "/",
      imageUrl:
        "https://images.unsplash.com/photo-1519682577862-22b62b24e493?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: "row-minimal-hoop-earrings",
      badge: "New",
      title: "Brincos Argola Minimal",
      price: "$39.00",
      href: "/",
      imageUrl:
        "https://images.unsplash.com/photo-1512499617640-c2f999fe6b8a?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: "row-stackable-rings-set",
      badge: "Hot",
      title: "Kit de Anéis Empilháveis",
      price: "$45.00",
      href: "/",
      imageUrl:
        "https://images.unsplash.com/photo-1608042314453-ae338d80c427?auto=format&fit=crop&w=900&q=80",
    },
  ],
};

export const editorialDuoData: EditorialDuoData = {
  collage: {
    baseImageUrl:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1400&q=80",
    floatingImageUrl:
      "https://images.unsplash.com/photo-1603570419986-3c3a1d5931f6?auto=format&fit=crop&w=1200&q=80",
    cardTitle: "Nova curadoria",
    cardText:
      "Peças que elevam o seu look e acompanham você em todos os momentos.",
    ctaLabel: "VER DESTAQUES",
    ctaHref: "/",
  },
  portraitImageUrl:
    "https://images.unsplash.com/photo-1520975682031-a83e1e38d2bb?auto=format&fit=crop&w=1600&q=80",
};

export const discountBannerData: DiscountBannerData = {
  bigText: "20% OFF",
  title: "Oferta por tempo limitado",
  subtitle: "Em itens selecionados",
  ctaLabel: "APROVEITAR AGORA",
  ctaHref: "/",
};

export const promoBannersData: PromoBannersData = {
  left: {
    imageUrl:
      "https://images.unsplash.com/photo-1520975958221-562b4b6fd5d3?auto=format&fit=crop&w=1600&q=80",
    eyebrow: "Para você",
    title: "Joias que valorizam seu estilo",
    subtitle: "Minimalistas, sofisticadas e fáceis de combinar.",
    ctaLabel: "EXPLORAR",
    ctaHref: "/",
  },
  rightTop: {
    imageUrl:
      "https://images.unsplash.com/photo-1535632787350-4e68ef7a040e?auto=format&fit=crop&w=1600&q=80",
    eyebrow: "Oferta especial",
    title: "Descontos de até 30%",
    subtitle: "Nas peças favoritas do momento.",
    ctaLabel: "VER OFERTAS",
    ctaHref: "/",
  },
  rightBottom: {
    imageUrl:
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=1600&q=80",
    eyebrow: "Edição limitada",
    title: "40% OFF em selecionados",
    subtitle: "Enquanto durarem os estoques.",
    ctaLabel: "GARANTIR AGORA",
    ctaHref: "/",
  },
};

export const features: FeatureItem[] = [
  {
    icon: "truck",
    title: "Frete grátis",
    description: "Em pedidos acima de $49",
  },
  {
    icon: "support",
    title: "Suporte 24/7",
    description: "Atendimento rápido e humano",
  },
  {
    icon: "refund",
    title: "Troca fácil",
    description: "Garantia de 30 dias",
  },
  {
    icon: "discount",
    title: "Ofertas exclusivas",
    description: "Vantagens para membros",
  },
];

export const brandStrip: BrandStripData = {
  title: "Marcas que inspiram",
  subtitle: "Curadoria cuidadosa. Qualidade em cada detalhe.",
  brands: [
    { name: "ZARA", note: "Essenciais curados" },
    { name: "LVMH", note: "Herança de luxo" },
    { name: "GQ", note: "Seleção de estilo" },
    { name: "Benefit", note: "Beleza & brilho" },
  ],
};

const tabItemsBase: ProductCard[] = [
  {
    id: "tab-pearl-necklace",
    badge: "New",
    title: "Colar Pérola Minimal",
    price: "$69.00",
    href: "/",
    imageUrl:
      "https://images.unsplash.com/photo-1519682577862-22b62b24e493?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "tab-gold-bangles",
    badge: "Hot",
    title: "Braceletes Dourados Finos",
    price: "$55.00",
    href: "/",
    imageUrl:
      "https://images.unsplash.com/photo-1601121141461-9d664e9efedb?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "tab-silver-drop-earrings",
    badge: "New",
    title: "Brincos Gota Prateados",
    price: "$44.00",
    href: "/",
    imageUrl:
      "https://images.unsplash.com/photo-1512499617640-c2f999fe6b8a?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "tab-stack-rings",
    badge: "Hot",
    title: "Anéis Empilháveis Clássicos",
    price: "$49.00",
    href: "/",
    imageUrl:
      "https://images.unsplash.com/photo-1608042314453-ae338d80c427?auto=format&fit=crop&w=900&q=80",
  },
];

export const tabbedProductsData: TabbedProductsData = {
  eyebrow: "A gente ama ver você brilhar",
  title: "Escolha suas peças preferidas",
  tabs: [
    { key: "featured", label: "Destaques", items: tabItemsBase },
    {
      key: "new",
      label: "Novidades",
      items: tabItemsBase.map((p) => ({
        ...p,
        id: `${p.id}-new`,
        title: p.title.replace("Clássicos", "Edição"),
      })),
    },
    {
      key: "best",
      label: "Mais vendidos",
      items: tabItemsBase.map((p) => ({
        ...p,
        id: `${p.id}-best`,
      })),
    },
  ],
};

export const instagramData: InstagramData = {
  eyebrow: "INSTAGRAM",
  title: "Inspire seu próximo look",
  subtitle: "Marque suas fotos com #LumeJoias",
  images: [
    {
      href: "/",
      imageUrl:
        "https://images.unsplash.com/photo-1535632787350-4e68ef7a040e?auto=format&fit=crop&w=900&q=80",
    },
    {
      href: "/",
      imageUrl:
        "https://images.unsplash.com/photo-1512499617640-c2f999fe6b8a?auto=format&fit=crop&w=900&q=80",
    },
    {
      href: "/",
      imageUrl:
        "https://images.unsplash.com/photo-1519682577862-22b62b24e493?auto=format&fit=crop&w=900&q=80",
    },
    {
      href: "/",
      imageUrl:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80",
    },
    {
      href: "/",
      imageUrl:
        "https://images.unsplash.com/photo-1608042314453-ae338d80c427?auto=format&fit=crop&w=900&q=80",
    },
  ],
};

export const partnerLogos: PartnerLogoItem[] = [
  { name: "adidas", href: "/" },
  { name: "Nike", href: "/" },
  { name: "Puma", href: "/" },
  { name: "Umbro", href: "/" },
  { name: "Reebok", href: "/" },
  { name: "New Balance", href: "/" },
];
