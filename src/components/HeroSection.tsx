import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="min-h-screen gradient-hero pt-20 lg:pt-24">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
              O caminho para o{" "}
              <span className="text-primary">equilíbrio emocional</span>{" "}
              começa aqui
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Psicóloga Clínica especializada em ajudar você a encontrar clareza, 
              paz interior e bem-estar emocional através de um acompanhamento 
              humanizado e acolhedor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => scrollToSection("#contato")}
                className="bg-primary hover:bg-coral-dark text-primary-foreground rounded-full px-8 py-6 text-base"
              >
                Agende sua Consulta
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("#sobre")}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-8 py-6 text-base"
              >
                Conheça-me
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative mx-auto max-w-md lg:max-w-lg">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=face"
                alt="Vera Baumgarten - Psicóloga Clínica"
                className="rounded-3xl shadow-2xl w-full object-cover aspect-[3/4]"
              />
              {/* Floating Card */}
              <div className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 bg-card rounded-2xl shadow-xl p-4 lg:p-6">
                <p className="text-sm text-muted-foreground">CRP 00/00000</p>
                <p className="font-display text-lg lg:text-xl text-foreground font-semibold">
                  Psicóloga Clínica
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
