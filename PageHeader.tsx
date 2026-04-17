import { FadeIn } from "@/components/ui/fade-in";

interface PageHeaderProps {
  title: string;
  description?: string;
  image?: string;
}

export function PageHeader({ title, description, image }: PageHeaderProps) {
  return (
    <div className="relative bg-primary overflow-hidden">
      {image && (
        <div className="absolute inset-0 z-0">
          <img 
            src={import.meta.env.BASE_URL + image.replace(/^\//, "")} 
            alt={title} 
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary" />
        </div>
      )}
      
      <div className="container relative z-10 mx-auto px-4 py-16 md:py-24 text-center">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-white mb-6 tracking-tight">
            {title}
          </h1>
          {description && (
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto font-light">
              {description}
            </p>
          )}
        </FadeIn>
      </div>
    </div>
  );
}
