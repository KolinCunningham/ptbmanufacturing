import printingProcess from "@assets/stock_images/printing-process.webp";
import { Printer, Zap, Ruler } from "lucide-react";

export default function Innovation() {
  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="aspect-[4/3] overflow-hidden rounded-md">
              <img 
                src={printingProcess} 
                alt="Digital fabric printing process" 
                className="w-full h-full object-cover"
                data-testid="img-printing-process"
              />
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6" data-testid="text-innovation-title">
              Eco-Friendly Innovation Meets Cutting-Edge Technology
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8" data-testid="text-innovation-description-1">
              We combine eco-friendly innovation with cutting-edge digital printing to deliver exceptional results on both natural and synthetic fibers.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4" data-testid="feature-digital-printing">
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Printer className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1" data-testid="text-digital-printing-title">
                    Advanced Digital Printing
                  </h3>
                  <p className="text-sm text-muted-foreground" data-testid="text-digital-printing-description">
                    State-of-the-art technology for vibrant, long-lasting prints on natural fibers
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4" data-testid="feature-sublimation">
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1" data-testid="text-sublimation-title">
                    Sublimation Printing
                  </h3>
                  <p className="text-sm text-muted-foreground" data-testid="text-sublimation-description">
                    Perfect for performance fabrics, activewear, and technical applications
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4" data-testid="feature-minimum-orders">
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Ruler className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1" data-testid="text-minimum-orders-title">
                    Low Minimums
                  </h3>
                  <p className="text-sm text-muted-foreground" data-testid="text-minimum-orders-description">
                    Low minimum order quantities perfect for emerging brands and small batch production
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
