import { Card, CardContent } from "@/components/ui/card";

interface MaterialCardProps {
  name: string;
  description: string;
  image: string;
}

export default function MaterialCard({ name, description, image }: MaterialCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 cursor-pointer" data-testid={`card-material-${name.toLowerCase()}`}>
      <div className="aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover"
          data-testid={`img-material-${name.toLowerCase()}`}
        />
      </div>
      <CardContent className="p-6">
        <h4 className="font-serif text-xl font-medium text-foreground mb-2" data-testid={`text-material-name-${name.toLowerCase()}`}>
          {name}
        </h4>
        <p className="text-sm text-muted-foreground" data-testid={`text-material-description-${name.toLowerCase()}`}>
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
