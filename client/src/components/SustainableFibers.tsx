import tencelLogo from "@assets/tencel-logo.webp";
import ecoveroLogo from "@assets/ecovero-logo.jpg";

export default function SustainableFibers() {
  return (
    <section className="py-24 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-4" data-testid="text-sustainable-fibers-title">
            Sustainable Fibers
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-sustainable-fibers-subtitle">
            We partner with industry-leading sustainable fiber producers to bring you the highest quality, eco-friendly materials
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* TENCEL Lyocell */}
          <div className="flex flex-col items-center text-center" data-testid="card-tencel">
            <div className="mb-8 h-48 flex items-center justify-center">
              <img 
                src={tencelLogo} 
                alt="TENCEL Lyocell by Lenzing" 
                className="max-h-full w-auto object-contain"
                data-testid="img-tencel-logo"
              />
            </div>
            <h3 className="text-2xl font-medium text-foreground mb-4" data-testid="text-tencel-title">
              TENCEL™ Lyocell
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4" data-testid="text-tencel-description">
              TENCEL™ Lyocell fibers are derived from sustainably sourced wood using an environmentally responsible closed-loop process. These fibers are known for their natural comfort, breathability, and gentle touch on skin.
            </p>
            <ul className="text-sm text-muted-foreground space-y-2" data-testid="list-tencel-features">
              <li>• Produced from renewable wood sources</li>
              <li>• 95% of solvents recycled in production</li>
              <li>• Biodegradable and compostable</li>
              <li>• Superior moisture management</li>
              <li>• Exceptionally soft and smooth drape</li>
            </ul>
          </div>

          {/* EcoVero */}
          <div className="flex flex-col items-center text-center" data-testid="card-ecovero">
            <div className="mb-8 h-48 flex items-center justify-center">
              <img 
                src={ecoveroLogo} 
                alt="LENZING ECOVERO Viscose" 
                className="max-h-full w-auto object-contain"
                data-testid="img-ecovero-logo"
              />
            </div>
            <h3 className="text-2xl font-medium text-foreground mb-4" data-testid="text-ecovero-title">
              LENZING™ ECOVERO™
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4" data-testid="text-ecovero-description">
              LENZING™ ECOVERO™ viscose fibers are derived from renewable wood sources using an eco-responsible production process. They offer a sustainable alternative to conventional viscose with significantly lower environmental impact.
            </p>
            <ul className="text-sm text-muted-foreground space-y-2" data-testid="list-ecovero-features">
              <li>• 50% lower emissions and water impact vs. generic viscose</li>
              <li>• Wood sources with full traceability</li>
              <li>• EU Ecolabel for environmental excellence</li>
              <li>• Silky-smooth texture with beautiful drape</li>
              <li>• Excellent color absorption for vibrant prints</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
