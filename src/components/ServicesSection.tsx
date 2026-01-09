import { User, Users, Heart, Brain } from "lucide-react";

const services = [
  {
    icon: User,
    title: "Psicoterapia para Adultos",
    description: "Atendimento individual focado no autoconhecimento, resolução de conflitos internos e desenvolvimento pessoal.",
  },
  {
    icon: Users,
    title: "Psicoterapia para Adolescentes",
    description: "Acompanhamento especializado para jovens em fase de transição, ajudando a lidar com os desafios dessa etapa.",
  },
  {
    icon: Heart,
    title: "Orientação aos Pais",
    description: "Suporte e orientação para pais que buscam melhorar a comunicação e o relacionamento com seus filhos.",
  },
  {
    icon: Brain,
    title: "Ansiedade e Depressão",
    description: "Tratamento especializado para transtornos de ansiedade e depressão, com abordagem acolhedora e eficaz.",
  },
];

export const ServicesSection = () => {
  return (
    <section id="servicos" className="py-16 lg:py-24 gradient-section">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Serviços
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-3 mb-4">
            Áreas de Atendimento
          </h2>
          <p className="text-muted-foreground">
            Ofereço atendimento psicológico online e presencial, adaptado às 
            suas necessidades e ao seu momento de vida.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-card rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-lg transition-shadow border border-border"
            >
              <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="font-display text-xl text-foreground font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
