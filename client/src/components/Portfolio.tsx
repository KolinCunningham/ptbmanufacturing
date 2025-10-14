import floralStrapless from "@assets/stock_images/floral-strapless-dress.png";
import orangeResortDress from "@assets/stock_images/orange-resort-dress.png";
import blueGeometricDress2 from "@assets/stock_images/blue-geometric-dress-2.webp";
import homeTextiles from "@assets/stock_images/home-textiles.webp";
import resortWear1 from "@assets/stock_images/resort_wear_fashion__23661e47.jpg";
import resortWear2 from "@assets/stock_images/resort_wear_fashion__be2d3cb6.jpg";
import sustainableFashion1 from "@assets/stock_images/sustainable_fashion__cb9f203e.jpg";
import sustainableFashion2 from "@assets/stock_images/sustainable_fashion__221e052c.jpg";

export default function Portfolio() {
  const garments = [
    { id: 1, image: floralStrapless, title: "Botanical Print Dress", category: "Beachwear" },
    { id: 2, image: orangeResortDress, title: "Vibrant Print Resort Dress", category: "Women's Resort" },
    { id: 3, image: blueGeometricDress2, title: "Geometric Print Collection", category: "Resort Wear" },
    { id: 4, image: homeTextiles, title: "Custom Print Home Textiles", category: "Home Decor" }
  ];

  return (
    <section className="pt-12 pb-24 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-4" data-testid="text-portfolio-title">
            Finished Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-portfolio-subtitle">
            From concept to creation: explore garments and textiles crafted with our premium fabrics and printing
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {garments.map((garment) => (
            <div 
              key={garment.id} 
              className="group relative overflow-hidden rounded-md hover-elevate active-elevate-2 transition-all duration-300 cursor-pointer"
              data-testid={`card-portfolio-${garment.id}`}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={garment.image} 
                  alt={garment.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  data-testid={`img-portfolio-${garment.id}`}
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-xs text-white/70 mb-1" data-testid={`text-portfolio-category-${garment.id}`}>
                  {garment.category}
                </p>
                <h4 className="font-serif text-sm font-medium text-white" data-testid={`text-portfolio-title-${garment.id}`}>
                  {garment.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground italic" data-testid="text-portfolio-note">
            All pieces feature digital printing on premium natural and synthetic fabrics through our trusted production partners
          </p>
        </div>
      </div>
    </section>
  );
}
