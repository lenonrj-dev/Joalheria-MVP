import Header from "../components/layout/header";
import Footer from "../components/layout/footer";

import Hero from "../components/landing/hero";
import OfferStrip from "../components/landing/offerStrip";
import JewelryMosaic from "../components/landing/jewelryMosaic";
import TripleShowcase from "../components/landing/tripleShowcase";
import ProductsRow from "../components/landing/productsRows";
import EditorialDuo from "../components/landing/editorialDuo";
import DiscountBanner from "../components/landing/discountBanner";
import PromoBanners from "../components/landing/promoBanners";
import FeatureStrip from "../components/landing/featureStrip";
import BrandStrip from "../components/landing/brandStrip";
import TabbedProducts from "../components/landing/tabbedProducts";
import InstagramGrid from "../components/landing/instagramGrid";
import PartnerLogos from "../components/landing/partnerLogos";
import CartDrawer from "../components/shop/CartDrawer";
import FavoritesDrawer from "../components/shop/FavoritesDrawer";

import {
  navLinks,
  categories,
  heroData,
  mosaicData,
  tripleShowcaseData,
  productRowData,
  editorialDuoData,
  discountBannerData,
  promoBannersData,
  features,
  brandStrip,
  tabbedProductsData,
  instagramData,
  partnerLogos,
} from "../data/landingData";

export default function Page() {
  return (
    <div className="min-h-screen">
      <Header links={navLinks} />

      <main id="main" className="w-full">
        <div className="mx-auto w-full max-w-[1200px] px-4">
          <Hero data={heroData} />
          <OfferStrip categories={categories} />
          <JewelryMosaic data={mosaicData} />
          <TripleShowcase data={tripleShowcaseData} />
          <ProductsRow data={productRowData} />
          <EditorialDuo data={editorialDuoData} />
        </div>

        <DiscountBanner data={discountBannerData} />

        <div className="mx-auto w-full max-w-[1200px] px-4">
          <PromoBanners data={promoBannersData} />
          <FeatureStrip items={features} />
        </div>

        <BrandStrip data={brandStrip} />

        <div className="mx-auto w-full max-w-[1200px] px-4">
          <TabbedProducts data={tabbedProductsData} />
          <InstagramGrid data={instagramData} />
          <PartnerLogos items={partnerLogos} />
        </div>
      </main>

      <Footer />

      <CartDrawer />
<FavoritesDrawer />
    </div>
  );
}
