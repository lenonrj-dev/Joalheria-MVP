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
  { label: "Home", href: "/" },
  { label: "Shop", href: "/" },
  { label: "Collection", href: "/" },
  { label: "Blog", href: "/" },
  { label: "About", href: "/" },
];

export const categories: CategoryLink[] = [
  { label: "Rings", href: "/" },
  { label: "Earrings", href: "/" },
  { label: "Necklaces", href: "/" },
  { label: "Bracelets", href: "/" },
  { label: "Bangles", href: "/" },
  { label: "New Arrivals", href: "/" },
  { label: "Best Seller", href: "/" },
];

export const heroData: HeroData = {
  eyebrow: "Shine Bright With",
  titleLine1: "Shine Bright With",
  titleLine2: "Sustainably Jewelry",
  ctaLabel: "SHOP NOW",
  ctaHref: "/",
  imageUrl:
    "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=1800&q=80",
};

export const mosaicData: MosaicData = {
  leftTopA: {
    id: "mosaic-rings",
    label: "Rings",
    discount: "-30%",
    price: "$39.00",
    href: "/",
    imageUrl:
      "https://images.unsplash.com/photo-1608042314453-ae338d80c427?auto=format&fit=crop&w=900&q=80",
  },
  leftTopB: {
    id: "mosaic-bracelet",
    label: "Bracelet",
    discount: "-20%",
    price: "$29.00",
    href: "/",
    imageUrl:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80",
  },
  leftBottom: {
    id: "mosaic-love",
    label: "Love",
    discount: "-15%",
    price: "$49.00",
    href: "/",
    imageUrl:
      "https://images.unsplash.com/photo-1520975682031-a83e1e38d2bb?auto=format&fit=crop&w=1200&q=80",
  },
  centerTall: {
    id: "mosaic-chain",
    label: "Chain",
    discount: "-40%",
    price: "$59.00",
    href: "/",
    imageUrl:
      "https://images.unsplash.com/photo-1519682577862-22b62b24e493?auto=format&fit=crop&w=1200&q=80",
  },
  rightTop: {
    id: "mosaic-bangles",
    label: "Bangles",
    discount: "-25%",
    price: "$55.00",
    href: "/",
    imageUrl:
      "https://images.unsplash.com/photo-1601121141461-9d664e9efedb?auto=format&fit=crop&w=1400&q=80",
  },
  rightBottomA: {
    id: "mosaic-necklace",
    label: "Necklace",
    discount: "-10%",
    price: "$69.00",
    href: "/",
    imageUrl:
      "https://images.unsplash.com/photo-1535632787350-4e68ef7a040e?auto=format&fit=crop&w=900&q=80",
  },
  rightBottomB: {
    id: "mosaic-accessories",
    label: "Accessories",
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
    eyebrow: "Best pick",
    title: "Minimal Drop Earrings",
    price: "$49.00",
    imageUrl:
      "https://images.unsplash.com/photo-1512499617640-c2f999fe6b8a?auto=format&fit=crop&w=1000&q=80",
    ctaLabel: "SHOP NOW",
    ctaHref: "/",
  },
};

export const productRowData: ProductsRowData = {
  eyebrow: "Big Sale 10% Off",
  title: "We love The Jewelry For You All Brand",
  items: [
    {
      id: "row-silver-loop-bracelet",
      badge: "New",
      title: "Silver Loop Bracelet",
      price: "$29.00",
      href: "/",
      imageUrl:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: "row-golden-chain-necklace",
      badge: "Hot",
      title: "Golden Chain Necklace",
      price: "$59.00",
      href: "/",
      imageUrl:
        "https://images.unsplash.com/photo-1519682577862-22b62b24e493?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: "row-minimal-hoop-earrings",
      badge: "New",
      title: "Minimal Hoop Earrings",
      price: "$39.00",
      href: "/",
      imageUrl:
        "https://images.unsplash.com/photo-1512499617640-c2f999fe6b8a?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: "row-stackable-rings-set",
      badge: "Hot",
      title: "Stackable Rings Set",
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
    cardTitle: "Jewelry",
    cardText:
      "Jewelry That Boosts Up Your Events And Gets You Ready For The Day",
    ctaLabel: "SHOP NOW",
    ctaHref: "/",
  },
  portraitImageUrl:
    "https://images.unsplash.com/photo-1520975682031-a83e1e38d2bb?auto=format&fit=crop&w=1600&q=80",
};

export const discountBannerData = {
  bigText: "20% OFF",
  title: "Limited Time Offer Only",
  subtitle: "On Selected Items",
  ctaLabel: "SHOP NOW",
  ctaHref: "/",
};

export const promoBannersData: PromoBannersData = {
  left: {
    imageUrl:
      "https://images.unsplash.com/photo-1520975958221-562b4b6fd5d3?auto=format&fit=crop&w=1600&q=80",
    eyebrow: "Jewelry For You",
    title: "Jewelry That Boosts Up Your Events",
    subtitle: "Make your day shine with clean minimal pieces.",
    ctaLabel: "SHOP NOW",
    ctaHref: "/",
  },
  rightTop: {
    imageUrl:
      "https://images.unsplash.com/photo-1535632787350-4e68ef7a040e?auto=format&fit=crop&w=1600&q=80",
    eyebrow: "Special Offer",
    title: "Enjoy The Discount Up To 30%",
    subtitle: "On your favorite essentials.",
    ctaLabel: "SHOP NOW",
    ctaHref: "/",
  },
  rightBottom: {
    imageUrl:
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=1600&q=80",
    eyebrow: "Friends & Family Event",
    title: "40% OFF On Selected Items",
    subtitle: "Limited time only.",
    ctaLabel: "SHOP NOW",
    ctaHref: "/",
  },
};

export const features: FeatureItem[] = [
  {
    icon: "truck",
    title: "Free Shipping",
    description: "On all orders over $49",
  },
  {
    icon: "support",
    title: "Support 24/7",
    description: "Friendly customer care",
  },
  {
    icon: "refund",
    title: "Money Return",
    description: "30 days guarantee",
  },
  {
    icon: "discount",
    title: "Order Discount",
    description: "Exclusive member deals",
  },
];

export const brandStrip: BrandStripData = {
  title: "Trusted Brands",
  subtitle: "Crafted with care. Loved worldwide.",
  brands: [
    { name: "ZARA", note: "Curated essentials" },
    { name: "LVMH", note: "Luxury heritage" },
    { name: "GQ", note: "Style picks" },
    { name: "Benefit", note: "Beauty & shine" },
  ],
};

const tabItemsBase: ProductCard[] = [
  {
    id: "tab-pearl-necklace",
    badge: "New",
    title: "Pearl Minimal Necklace",
    price: "$69.00",
    href: "/",
    imageUrl:
      "https://images.unsplash.com/photo-1519682577862-22b62b24e493?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "tab-gold-bangles",
    badge: "Hot",
    title: "Gold Thin Bangles",
    price: "$55.00",
    href: "/",
    imageUrl:
      "https://images.unsplash.com/photo-1601121141461-9d664e9efedb?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "tab-silver-drop-earrings",
    badge: "New",
    title: "Silver Drop Earrings",
    price: "$44.00",
    href: "/",
    imageUrl:
      "https://images.unsplash.com/photo-1512499617640-c2f999fe6b8a?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "tab-stack-rings",
    badge: "Hot",
    title: "Stack Rings Classic",
    price: "$49.00",
    href: "/",
    imageUrl:
      "https://images.unsplash.com/photo-1608042314453-ae338d80c427?auto=format&fit=crop&w=900&q=80",
  },
];

export const tabbedProductsData: TabbedProductsData = {
  eyebrow: "We love to see you shine",
  title: "We wish The Jewelry For You All Brand.",
  tabs: [
    { key: "featured", label: "Featured", items: tabItemsBase },
    {
      key: "new",
      label: "New Arrivals",
      items: tabItemsBase.map((p) => ({
        ...p,
        id: `${p.id}-new`,
        title: p.title.replace("Classic", "Edition"),
      })),
    },
    {
      key: "best",
      label: "Best Seller",
      items: tabItemsBase.map((p) => ({
        ...p,
        id: `${p.id}-best`,
      })),
    },
  ],
};

export const instagramData: InstagramData = {
  eyebrow: "INSTAGRAM",
  title: "Share Your Latest Look",
  subtitle: "Tag your photos with #JokerJewelry",
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
