import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { QuoteSection } from "@/components/QuoteSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TrainingSection } from "@/components/TrainingSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <QuoteSection />
        <AboutSection />
        <ServicesSection />
        <TrainingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
