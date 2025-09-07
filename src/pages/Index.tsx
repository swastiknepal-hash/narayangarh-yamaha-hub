import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedModels from "@/components/FeaturedModels";
import ServiceSection from "@/components/ServiceSection";
import OffersSection from "@/components/OffersSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <FeaturedModels />
        <ServiceSection />
        <OffersSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
