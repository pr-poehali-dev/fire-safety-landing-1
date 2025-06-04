import Header from "@/components/Header";
import Hero from "@/components/Hero";
import RisksSection from "@/components/RisksSection";
import ServicesSection from "@/components/ServicesSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <RisksSection />
      <ServicesSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
