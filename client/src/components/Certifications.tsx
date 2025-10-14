import { Badge } from "@/components/ui/badge";
import { Sprout, Award, Droplets, Recycle } from "lucide-react";

export default function Certifications() {
  const items = [
    {
      id: 1,
      icon: Droplets,
      badge: "Eco-Friendly",
      title: "Water-Based Inks",
      description: "Non-toxic inks for vibrant, sustainable results"
    },
    {
      id: 2,
      icon: Recycle,
      badge: "Low-Waste",
      title: "Efficient Processes",
      description: "Minimising fabric and ink waste"
    },
    {
      id: 3,
      icon: Sprout,
      badge: "ISO 14001:2015",
      title: "Environmental Standards",
      description: "International environmental management certification"
    },
    {
      id: 4,
      icon: Award,
      badge: "SA8000",
      title: "Ethical Manufacturing",
      description: "Social accountability and ethical practices"
    }
  ];

  return (
    <section className="py-16 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground mb-3" data-testid="text-certifications-title">
            Sustainable & Ethical Practices
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="text-certifications-subtitle">
            Certified environmental and social standards
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item) => (
            <div key={item.id} className="p-5 rounded-md border border-border hover-elevate transition-all duration-300" data-testid={`card-certification-${item.id}`}>
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-foreground" data-testid={`icon-certification-${item.id}`} />
                </div>
                <Badge variant="outline" className="text-xs" data-testid={`badge-certification-${item.id}`}>
                  {item.badge}
                </Badge>
              </div>
              <h4 className="font-medium text-foreground mb-2 text-sm" data-testid={`text-certification-title-${item.id}`}>
                {item.title}
              </h4>
              <p className="text-xs text-muted-foreground" data-testid={`text-certification-description-${item.id}`}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
