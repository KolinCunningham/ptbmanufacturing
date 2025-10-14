export default function Capabilities() {
  const garmentTypes = [
    "Women's Resort Wear",
    "Men's Resort Wear", 
    "Swimwear & Beachwear",
    "Activewear & Sportswear",
    "Yoga & Wellness Apparel",
    "T-Shirts & Basics",
    "Kids, Infant & Baby",
    "Boardshorts & Rashguards",
    "Home Textiles & Cushions"
  ];

  return (
    <section className="py-20 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground mb-4" data-testid="text-capabilities-title">
            What We Can Make
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="text-capabilities-subtitle">
            From fashion to activewear to home textiles - we bring versatility to every project
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {garmentTypes.map((type) => (
            <div 
              key={type} 
              className="bg-card rounded-md p-4 text-center hover-elevate active-elevate-2 transition-all cursor-pointer"
              data-testid={`card-capability-${type.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
            >
              <p className="text-sm font-medium text-foreground" data-testid={`text-capability-${type.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
                {type}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground italic">
            And many more custom garment types - if it's fabric, we can make it
          </p>
        </div>
      </div>
    </section>
  );
}
