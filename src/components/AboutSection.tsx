import { Heart, Sparkles, Shield } from "lucide-react";
const values = [{
  icon: Heart,
  title: "Acolhimento",
  description: "Um espaço seguro e livre de julgamentos para você expressar seus sentimentos."
}, {
  icon: Sparkles,
  title: "Transformação",
  description: "Acompanhamento focado no seu crescimento pessoal e mudanças positivas."
}, {
  icon: Shield,
  title: "Sigilo",
  description: "Total confidencialidade e ética em todo o processo terapêutico."
}];
export const AboutSection = () => {
  return <section id="sobre" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <img alt="Consultório acolhedor" className="rounded-3xl shadow-xl w-full object-cover aspect-[4/5]" src="/lovable-uploads/6f56e003-b16b-4ed3-9262-5d6f274fcc04.jpg" />
          </div>

          {/* Content */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Sobre Mim
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-3 mb-6">
              Prazer, sou a Vera
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Sou psicóloga clínica apaixonada por ajudar pessoas a encontrarem 
                seu equilíbrio emocional e bem-estar. Acredito que cada pessoa 
                possui dentro de si a capacidade de superar desafios e viver 
                de forma mais plena e autêntica.
              </p>
              <p>
                Minha abordagem é integrativa e humanizada, combinando diferentes 
                técnicas terapêuticas para atender às necessidades únicas de cada 
                paciente. Trabalho com adolescentes e adultos, oferecendo um 
                espaço seguro para autoconhecimento e transformação.
              </p>
            </div>

            {/* Values */}
            <div className="grid sm:grid-cols-3 gap-6 mt-10">
              {values.map(value => <div key={value.title} className="bg-secondary rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg text-foreground font-semibold mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};