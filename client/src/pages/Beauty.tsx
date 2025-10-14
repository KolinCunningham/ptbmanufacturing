import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FlaskConical, Package, Sparkles, Lightbulb } from "lucide-react";
import { useEffect } from "react";
import heroImage from "@assets/stock_images/luxury_beauty_cosmet_b945f9ee.jpg";
import formulationImage from "@assets/stock_images/beauty_product_formu_6538c332.jpg";
import packagingImage from "@assets/stock_images/printed_beauty_produ_df42511e.jpg";
import manufacturingImage from "@assets/stock_images/beauty_product_manuf_35f37882.jpg";

export default function Beauty() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const processSteps = [
    {
      image: formulationImage,
      title: "Formulation & Development",
      description: "Create your unique formulation with our expert chemists. Receive your samples for approval without any of the hassle."
    },
    {
      image: packagingImage,
      title: "Printed Packaging Design",
      description: "Get all your packaging sourced and designed by our team. We ensure your packaging is fully compliant and market-ready."
    },
    {
      image: manufacturingImage,
      title: "Manufacturing & Scale",
      description: "Working with manufacturers globally, we ensure your product is manufactured on time wherever you need."
    }
  ];

  const solutions = [
    {
      icon: FlaskConical,
      title: "Product Development",
      description: "Turn your beauty product ideas into reality with our expert development team guiding you through every step from concept to prototype."
    },
    {
      icon: Package,
      title: "Manufacturing",
      description: "Leverage our state-of-the-art facilities to efficiently produce your beauty products at scale, ensuring top-notch quality and consistency."
    },
    {
      icon: Sparkles,
      title: "Packaging Management",
      description: "Ensure your products are presented in the best light with our comprehensive packaging solutions, designed to meet all market and regulatory standards."
    },
    {
      icon: Lightbulb,
      title: "Brand Consulting",
      description: "Grow and refine your brand with personalized consulting and mentoring that drives business success and market differentiation."
    }
  ];

  const testimonials = [
    {
      quote: "I was looking for a manufacturer that could do exactly what I needed. PTB moved mountains and helped me put my vision into a reality that nobody else could.",
      author: "Louis",
      company: "Eden Ancient Infusions"
    },
    {
      quote: "As a cosmetic scientist, my clients consistently want to work with high quality manufacturers. I've been so impressed with PTB Manufacturing, I always direct my clients to them.",
      author: "Sarah Chen",
      company: "Chen Consulting"
    },
    {
      quote: "As a long-time customer, I am continually impressed by the exceptional quality of PTB's manufacturing platform. Every batch has surpassed my expectations.",
      author: "James Rodriguez",
      company: "Lumina Beauty"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center pt-20">
        <div className="absolute inset-0">
          <img 
            src={heroImage}
            alt="Luxury Beauty Products"
            className="w-full h-full object-cover"
            data-testid="img-hero"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 text-center z-10 lg:pr-96">
          <h1 className="font-serif text-5xl md:text-7xl font-light text-white mb-6" data-testid="text-hero-title">
            The Simplest Way To Develop & Manufacture Beauty Products
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-8" data-testid="text-hero-subtitle">
            PTB Manufacturing is a global manufacturing platform. Develop, manufacture and launch your next big beauty product.
          </p>
          <Button variant="default" size="lg" asChild data-testid="button-hero-cta">
            <a href="#contact">Book A Free Consultation Now</a>
          </Button>
        </div>

        {/* Floating Testimonial */}
        <div className="absolute top-32 right-8 z-20 w-80 hidden lg:block">
          <Card className="backdrop-blur-sm bg-background/95 border-border shadow-lg">
            <CardContent className="p-6">
              <blockquote className="text-sm font-light text-foreground leading-relaxed mb-3 italic" data-testid="text-featured-quote">
                "I was looking for 4 months for a manufacturer that could do exactly what I needed. PTB moved mountains and has helped me put my vision into a reality that nobody else could."
              </blockquote>
              <cite className="text-xs font-medium text-muted-foreground not-italic" data-testid="text-featured-author">
                — Louis | CEO @ Eden Ancient Infusions
              </cite>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How To Process */}
      <section id="process" className="py-24 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-4" data-testid="text-process-title">
              How To Bring Your Beauty Product To Life
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-process-subtitle">
              There is a simple 3 step process to bringing your product to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="space-y-6" data-testid={`process-step-${index}`}>
                <div className="relative h-64 rounded-md overflow-hidden">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-cover"
                    data-testid={`img-process-${index}`}
                  />
                </div>
                <h3 className="font-serif text-2xl font-light text-foreground" data-testid={`text-process-title-${index}`}>
                  {step.title}
                </h3>
                <p className="text-muted-foreground" data-testid={`text-process-description-${index}`}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-24 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-4" data-testid="text-solutions-title">
              Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-solutions-subtitle">
              Comprehensive Solutions to Elevate Your Beauty Brand: From Concept to Market Success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`card-solution-${index}`}>
                  <CardContent className="p-8">
                    <Icon className="w-12 h-12 text-primary mb-6" data-testid={`icon-solution-${index}`} />
                    <h3 className="font-serif text-xl font-light text-foreground mb-4" data-testid={`text-solution-title-${index}`}>
                      {solution.title}
                    </h3>
                    <p className="text-muted-foreground text-sm" data-testid={`text-solution-description-${index}`}>
                      {solution.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-4" data-testid="text-testimonials-title">
              Testimonials
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`card-testimonial-${index}`}>
                <CardContent className="p-8">
                  <blockquote className="text-foreground leading-relaxed mb-6 italic" data-testid={`text-testimonial-quote-${index}`}>
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="border-t border-border pt-4">
                    <cite className="font-medium text-foreground not-italic block" data-testid={`text-testimonial-author-${index}`}>
                      {testimonial.author}
                    </cite>
                    <p className="text-sm text-muted-foreground" data-testid={`text-testimonial-company-${index}`}>
                      {testimonial.company}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-4" data-testid="text-contact-title">
              Ready to Create?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-contact-subtitle">
              Let's build the next iconic beauty product together. Reach out to our team for a complimentary consultation about your project.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}
