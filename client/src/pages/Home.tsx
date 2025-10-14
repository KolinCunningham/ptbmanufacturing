import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FabricShowcase from "@/components/FabricShowcase";
import Materials from "@/components/Materials";
import SustainableFibers from "@/components/SustainableFibers";
import Innovation from "@/components/Innovation";
import SustainabilityStatement from "@/components/SustainabilityStatement";
import Certifications from "@/components/Certifications";
import Services from "@/components/Services";
import Capabilities from "@/components/Capabilities";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FabricShowcase />
      <Services />
      <Process />
      <SustainabilityStatement />
      <Innovation />
      <Capabilities />
      <Portfolio />
      <Testimonials />
      <Materials />
      <SustainableFibers />
      <Certifications />
      <ContactForm />
      <Footer />
    </div>
  );
}
