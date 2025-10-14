import MaterialCard from "./MaterialCard";
import tencelImage from "@assets/tencel-dress-2.webp";
import viscoseImage from "@assets/ecovero-fabric.webp";
import cottonImage from "@assets/organic-cotton-raw.png";
import linenImage from "@assets/linen-fabric.jpg";

export default function Materials() {
  const naturalFibers = [
    {
      name: "Lenzing TENCEL™",
      description: "Sustainable wood-based fiber with exceptional softness and breathability",
      image: tencelImage
    },
    {
      name: "EcoVero™ Viscose",
      description: "Eco-friendly viscose with silky drape and vibrant color absorption",
      image: viscoseImage
    },
    {
      name: "Organic Cotton Twill",
      description: "Premium organic cotton with superior durability and soft hand feel",
      image: cottonImage
    },
    {
      name: "Natural Linen",
      description: "Elegant European linen with exceptional breathability and timeless appeal",
      image: linenImage
    }
  ];

  const printingTypes = [
    {
      title: "Digital Printing on Natural Fibers",
      description: "State-of-the-art digital fabric printing on cotton, linen, viscose, tencel, and other natural fibers. Perfect for intricate patterns and vibrant designs.",
      features: ["Sharp, detailed results", "Vibrant, long-lasting colors", "Eco-friendly process", "25 pcs per colorway minimum"]
    },
    {
      title: "Sublimation Printing",
      description: "Heat transfer printing on polyester fabrics, ideal for sportswear, swimwear, activewear, and performance fabrics.",
      features: ["Perfect for technical fabrics", "Durable, fade-resistant", "Ideal for all-over prints", "Quick turnaround times"]
    }
  ];

  return (
    <section id="materials" className="py-24 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-4" data-testid="text-materials-title">
            Our Fabric Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-materials-subtitle">
            From Lenzing TENCEL™ to silk: explore our range of premium, sustainable fabrics
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {naturalFibers.map((material) => (
            <MaterialCard key={material.name} {...material} />
          ))}
        </div>
      </div>
    </section>
  );
}
