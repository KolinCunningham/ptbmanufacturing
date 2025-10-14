interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
}

export default function ProcessStep({ number, title, description, image, reverse }: ProcessStepProps) {
  return (
    <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
      <div className="flex-1">
        <div className="aspect-[4/3] rounded-md overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
            data-testid={`img-process-${title.toLowerCase().replace(/\s+/g, '-')}`}
          />
        </div>
      </div>
      <div className="flex-1">
        <div className="font-serif text-6xl font-light text-primary/20 mb-4" data-testid={`text-step-number-${number}`}>
          {number}
        </div>
        <h3 className="font-serif text-3xl font-medium text-foreground mb-4" data-testid={`text-step-title-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed text-lg" data-testid={`text-step-description-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {description}
        </p>
      </div>
    </div>
  );
}
