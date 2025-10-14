import ServiceCard from "./ServiceCard";
import Logo from "./Logo";
import { Scissors, Palette, Layers, Factory } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Scissors,
      title: "Pattern Making",
      description: "Precision pattern development using CAD technology and traditional craftsmanship to ensure perfect fit and construction."
    },
    {
      icon: Palette,
      title: "Fabric Selection",
      description: "Expert guidance in selecting the perfect fabrics from our premium collection of natural fibers, sustainable options, and performance materials."
    },
    {
      icon: Layers,
      title: "Sampling",
      description: "Expert sample creation to validate your designs before production, ensuring quality and fit meet your exact specifications."
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Full-scale production with meticulous attention to detail, crafting garments from premium natural fibers through ethical manufacturing partners that ensure fair labor practices."
    }
  ];

  return (
    <section id="services" className="py-24 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-4" data-testid="text-services-title">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12" data-testid="text-services-subtitle">
            Comprehensive manufacturing solutions from concept to finished garment
          </p>
          
          <div className="flex justify-center mb-12">
            <Logo className="w-32 h-32 md:w-40 md:h-40" data-testid="logo-services" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
