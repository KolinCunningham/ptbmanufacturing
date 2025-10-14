import ProcessStep from "./ProcessStep";
import studioImage from "@assets/stock_images/fashion_design_studi_68ed279b.jpg";
import samplingImage from "@assets/e05dbfa4a41d8541340b683c10c005fc_1760437644758.avif";
import productionImage from "@assets/592a464de07d1dbcbe9e7cd7172c95d4_1760437681638.avif";

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Concept & Design",
      description: "We begin by understanding your vision, translating ideas into technical patterns using advanced CAD systems combined with traditional pattern making expertise.",
      image: studioImage
    },
    {
      number: "02",
      title: "Sampling & Refinement",
      description: "Expert artisans create initial samples, allowing for fit adjustments and design refinements before moving to full production.",
      image: samplingImage
    },
    {
      number: "03",
      title: "Production & Quality",
      description: "Your garments are crafted with meticulous attention to detail, using premium natural fibers and digital printing through our trusted production partners who uphold ethical working conditions and fair labor practices.",
      image: productionImage
    }
  ];

  return (
    <section id="process" className="py-24 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-4" data-testid="text-process-title">
            Our Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-process-subtitle">
            From initial concept to finished garment, we guide your project through every stage with precision and care
          </p>
        </div>
        
        <div className="space-y-24">
          {steps.map((step, index) => (
            <ProcessStep key={step.number} {...step} reverse={index % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
