import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@assets/stock_images/linen-swatches.png";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="mb-8">
          <p className="text-sm md:text-base text-white/80 font-light tracking-widest uppercase mb-4" data-testid="text-hero-tagline">
            Fabric Innovation • Conscious Manufacturing • Unmatched Quality
          </p>
        </div>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-white mb-6 tracking-tight leading-tight" data-testid="text-hero-title">
          Where Conscious<br />Design Begins
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-12 font-light leading-relaxed" data-testid="text-hero-subtitle">
          Redefining sustainable textile production with premium fabrics, ethical sourcing, and superior craftsmanship
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            variant="default" 
            size="lg" 
            className="group" 
            asChild
            data-testid="button-start-project"
          >
            <a href="#contact">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
            asChild
            data-testid="button-explore"
          >
            <a href="#fabrics">Explore Fabrics</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
