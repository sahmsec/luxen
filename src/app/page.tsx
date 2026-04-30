import HeroSection from "@/components/sections/HeroSection";
import FeaturedCollection from "@/components/sections/FeaturedCollection";
import BrandPhilosophy from "@/components/sections/BrandPhilosophy";
import SignatureProduct from "@/components/sections/SignatureProduct";
import Newsletter from "@/components/sections/Newsletter";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedCollection />
      <BrandPhilosophy />
      <SignatureProduct />
      <Newsletter />
    </>
  );
}
