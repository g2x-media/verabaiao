import { Quote } from "lucide-react";

export const QuoteSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="w-12 h-12 text-primary mx-auto mb-6 opacity-60" />
          <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed italic">
            "A psicoterapia é um espaço seguro onde você pode se reconectar 
            consigo mesmo, compreender suas emoções e encontrar novos 
            caminhos para viver com mais leveza e autenticidade."
          </blockquote>
          <p className="mt-6 text-muted-foreground font-medium">
            — Vera Baumgarten
          </p>
        </div>
      </div>
    </section>
  );
};
