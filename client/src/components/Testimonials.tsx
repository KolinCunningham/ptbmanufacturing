import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "PTB Manufacturing transformed our vision into reality. Their expertise in sustainable fabrics and ethical production practices aligned perfectly with our brand values.",
      author: "Sarah Chen",
      role: "Creative Director",
      company: "Coastal Threads"
    },
    {
      id: 2,
      quote: "The quality of their TENCEL prints is exceptional. From pattern making to final production, every detail was handled with professionalism and care.",
      author: "Marcus Rodriguez",
      role: "Founder",
      company: "Verde Apparel"
    },
    {
      id: 3,
      quote: "Working with PTB's production partners gave us confidence in both quality and ethics. The minimum order quantities were perfect for our emerging brand.",
      author: "Aisha Patel",
      role: "Design Lead",
      company: "Luminara Fashion"
    },
    {
      id: 4,
      quote: "Their digital printing on natural fibers exceeded our expectations. The sampling process was thorough and the grading was flawless across all sizes.",
      author: "James Mitchell",
      role: "Production Manager",
      company: "Elements Collection"
    }
  ];

  return (
    <section className="py-16 bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground mb-3" data-testid="text-testimonials-title">
            Client Testimonials
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="text-testimonials-subtitle">
            Trusted by fashion brands who value quality, sustainability, and ethical production
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="p-6 rounded-md border border-border hover-elevate transition-all duration-300" data-testid={`card-testimonial-${testimonial.id}`}>
              <Quote className="w-6 h-6 text-primary/60 mb-3" data-testid={`icon-quote-${testimonial.id}`} />
              <blockquote className="text-sm text-foreground leading-relaxed mb-4" data-testid={`text-quote-${testimonial.id}`}>
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-medium text-foreground">{testimonial.author.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground" data-testid={`text-author-${testimonial.id}`}>
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-muted-foreground" data-testid={`text-role-${testimonial.id}`}>
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
