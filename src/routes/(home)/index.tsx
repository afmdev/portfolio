import Hero from "~/components/Hero/Hero";
import LogoCarousel from "~/components/LogoCarousel/LogoCarousel";
import Services from "~/components/Services/Services";
import ServicesV2 from "~/components/Services/ServicesV2";
import ServicesCarousel from "~/components/ServicesCarousel/ServicesCarousel";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <LogoCarousel /> */}
      <ServicesV2 />
      {/* <Services /> */}
      {/* <ServicesCarousel /> */}
    </>
  );
}
