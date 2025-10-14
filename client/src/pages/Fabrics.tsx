import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from "react";

export default function Fabrics() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const fabricGroups = [
    {
      title: "Natural Fibre - Woven",
      description: "Premium woven fabrics from cotton, linen, rayon, viscose, and sustainable options",
      fabrics: [
        { name: "Cotton Poplin", gsm: "100-140", application: "Shirts, quilting, home décor" },
        { name: "Cotton Voile", gsm: "90", application: "Summer apparel, kaftans, scarves" },
        { name: "Cotton Twill", gsm: "185-200", application: "Structured apparel, tote bags, home decor" },
        { name: "Cotton Canvas", gsm: "230", application: "Upholstery, homewares, bags" },
        { name: "Rayon Chiffon", gsm: "80", application: "Summer apparel, caftans, scarves" },
        { name: "Rayon Satin", gsm: "110", application: "Apparel, scarves, lining" },
        { name: "Viscose Crepe", gsm: "140", application: "Resort wear, apparel, scarves" },
        { name: "TENCEL™ Lyocell Voile", gsm: "70-90", application: "Sustainable fabric, scarves, pool/beach apparel" },
        { name: "TENCEL™ Twill", gsm: "115", application: "Sustainable fabric, aloha shirts, scarves" },
        { name: "LENZING™ ECOVERO™", gsm: "115", application: "Sustainable viscose, soft drape apparel" },
        { name: "Linen (various weights)", gsm: "140-240", application: "Apparel, homewares, crafts" },
        { name: "Linen Blends", gsm: "120-190", application: "Summer clothing, resort wear, dresses" },
        { name: "Organic Cotton Poplin", gsm: "140", application: "GOTS certified, shirting, homewares" },
        { name: "Organic Cotton Twill", gsm: "100", application: "GOTS certified, apparel, home décor" },
        { name: "Cotton Muslin/Gauze", gsm: "120", application: "Baby wraps, summer fashion" }
      ]
    },
    {
      title: "Natural Fibre - Knitted",
      description: "Comfortable jersey knits from cotton, bamboo, viscose with stretch options",
      fabrics: [
        { name: "Cotton Jersey", gsm: "140-160", application: "T-shirts, apparel, loungewear" },
        { name: "Cotton Double Knit", gsm: "200", application: "Sleepwear, kids apparel, blankets" },
        { name: "Cotton-Elastane Stretch", gsm: "200", application: "Active wear, apparel" },
        { name: "Viscose-Elastane Stretch", gsm: "200-240", application: "Fashion, yoga wear" },
        { name: "Bamboo-Cotton Jersey", gsm: "150", application: "T-shirts, kids wear" },
        { name: "TENCEL™ Elastane", gsm: "200", application: "Sustainable stretch jersey" },
        { name: "LENZING™ ECOVERO™ Elastane", gsm: "200-240", application: "Luxuriously soft sustainable knit" },
        { name: "Organic Cotton Jersey", gsm: "120-160", application: "GOTS certified T-shirt fabric" },
        { name: "Organic Cotton-Elastane", gsm: "200", application: "GOTS certified 4-way stretch" },
        { name: "French Terry", gsm: "310", application: "Jumpers, track pants, toys" },
        { name: "Cotton Rib", gsm: "200", application: "Sweater cuffs, ribbing, dresses" }
      ]
    },
    {
      title: "Silk Fabrics",
      description: "Luxurious silk options for premium apparel and accessories",
      fabrics: [
        { name: "Silk Satin", gsm: "60", application: "Luxurious smooth apparel, scarves" },
        { name: "Silk Charmeuse", gsm: "55-60", application: "Elegant draping garments" },
        { name: "Silk Crepe de Chine", gsm: "45-50", application: "Blouses, dresses, scarves" },
        { name: "Silk Habotai", gsm: "40-45", application: "Light apparel, linings" }
      ]
    },
    {
      title: "Performance & Synthetic",
      description: "Polyester-based fabrics for activewear and technical applications",
      fabrics: [
        { name: "Polyester Jersey", gsm: "150-180", application: "Activewear, sportswear" },
        { name: "Polyester Interlock", gsm: "180-200", application: "Performance apparel" },
        { name: "Polyester-Elastane", gsm: "200-220", application: "Yoga wear, swimwear, active" },
        { name: "Recycled Polyester", gsm: "150-180", application: "Sustainable activewear option" }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-4" data-testid="text-fabrics-title">
              Our Fabric Collection
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-fabrics-subtitle">
              Premium digital printing on natural fibers, sustainable options, and performance fabrics. All fabrics are carefully selected for quality and printability.
            </p>
          </div>

          <div className="space-y-12">
            {fabricGroups.map((group, groupIndex) => (
              <div key={groupIndex} data-testid={`group-${groupIndex}`}>
                <div className="mb-6">
                  <h2 className="font-serif text-2xl md:text-3xl font-light text-foreground mb-2" data-testid={`text-group-title-${groupIndex}`}>
                    {group.title}
                  </h2>
                  <p className="text-muted-foreground" data-testid={`text-group-description-${groupIndex}`}>
                    {group.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.fabrics.map((fabric, fabricIndex) => (
                    <Card key={fabricIndex} className="hover-elevate transition-all duration-300" data-testid={`card-fabric-${groupIndex}-${fabricIndex}`}>
                      <CardContent className="p-5">
                        <h3 className="font-medium text-foreground mb-2" data-testid={`text-fabric-name-${groupIndex}-${fabricIndex}`}>
                          {fabric.name}
                        </h3>
                        <div className="space-y-1">
                          <p className="text-xs text-muted-foreground" data-testid={`text-fabric-gsm-${groupIndex}-${fabricIndex}`}>
                            <span className="font-medium">Weight:</span> {fabric.gsm} GSM
                          </p>
                          <p className="text-xs text-muted-foreground" data-testid={`text-fabric-application-${groupIndex}-${fabricIndex}`}>
                            <span className="font-medium">Uses:</span> {fabric.application}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center bg-card rounded-md p-8 border border-border">
            <h3 className="font-serif text-xl md:text-2xl font-light text-foreground mb-4">
              Custom Fabric Sourcing
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't see the fabric you need? We can source custom materials for your project. Contact us to discuss your specific requirements and we'll help you find the perfect fabric for your vision.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
