import tencelFiber from "@assets/stock_images/tencel-fiber.png";
import naturalFiber from "@assets/stock_images/natural-fiber-1.webp";
import { Sprout, Sparkles, Palette } from "lucide-react";

export default function FabricShowcase() {
  return (
    <section id="fabrics" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Premium Fabrics Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6" data-testid="text-fabric-title">
              Premium Fabrics That Define Excellence
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6" data-testid="text-fabric-description-1">
              At PTB Manufacturing, we specialize in sustainable, high-performance fabrics, from Lenzing TENCEL™ and EcoVero™ to Organic Cotton Twill, linen, and silk.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-fabric-description-2">
              Each fiber is ethically sourced and crafted with superior attention to detail, giving designers the freedom to create without compromise.
            </p>
          </div>
          <div className="space-y-6">
            <div className="aspect-[4/3] overflow-hidden rounded-md">
              <img 
                src={tencelFiber} 
                alt="Lenzing TENCEL fiber" 
                className="w-full h-full object-cover"
                data-testid="img-tencel-fiber"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-md">
              <img 
                src={naturalFiber} 
                alt="Natural fiber texture" 
                className="w-full h-full object-cover"
                data-testid="img-natural-fiber"
              />
            </div>
          </div>
        </div>

        {/* Fabric Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center" data-testid="card-fabric-feature-1">
            <div className="mb-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <Sprout className="w-7 h-7 text-foreground" />
              </div>
            </div>
            <h3 className="font-serif text-xl font-medium text-foreground mb-3" data-testid="text-feature-sustainable-title">
              Sustainably Sourced
            </h3>
            <p className="text-muted-foreground" data-testid="text-feature-sustainable-description">
              Traceable, responsible materials from trusted suppliers worldwide
            </p>
          </div>
          
          <div className="text-center" data-testid="card-fabric-feature-2">
            <div className="mb-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <Sparkles className="w-7 h-7 text-foreground" />
              </div>
            </div>
            <h3 className="font-serif text-xl font-medium text-foreground mb-3" data-testid="text-feature-quality-title">
              Exceptional Quality
            </h3>
            <p className="text-muted-foreground" data-testid="text-feature-quality-description">
              Fabrics that move beautifully, wear effortlessly, and last longer
            </p>
          </div>
          
          <div className="text-center" data-testid="card-fabric-feature-3">
            <div className="mb-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <Palette className="w-7 h-7 text-foreground" />
              </div>
            </div>
            <h3 className="font-serif text-xl font-medium text-foreground mb-3" data-testid="text-feature-versatile-title">
              Design Freedom
            </h3>
            <p className="text-muted-foreground" data-testid="text-feature-versatile-description">
              Unlimited creative possibilities with our diverse fabric selection
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
