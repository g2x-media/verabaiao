import { GraduationCap, Award, BookOpen } from "lucide-react";

const trainingData = [
  {
    icon: GraduationCap,
    title: "Graduação",
    items: [
      "Psicologia - Universidade Federal",
      "Formação concluída em 2015",
      "Registro CRP ativo",
    ],
  },
  {
    icon: Award,
    title: "Especializações",
    items: [
      "Terapia Cognitivo-Comportamental",
      "Psicoterapia de Adolescentes",
      "Neuropsicologia Clínica",
    ],
  },
  {
    icon: BookOpen,
    title: "Abordagens",
    items: [
      "Terapia Cognitivo-Comportamental",
      "Terapia Focada nas Emoções",
      "Mindfulness e Meditação",
    ],
  },
];

export const TrainingSection = () => {
  return (
    <section id="formacao" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Currículo
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-3 mb-4">
            Formação e Especializações
          </h2>
          <p className="text-muted-foreground">
            Busco constantemente atualização e aprimoramento para oferecer 
            o melhor atendimento aos meus pacientes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {trainingData.map((column) => (
            <div
              key={column.title}
              className="bg-secondary rounded-2xl p-8"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <column.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl text-foreground font-semibold mb-6">
                {column.title}
              </h3>
              <ul className="space-y-4">
                {column.items.map((item) => (
                  <li 
                    key={item}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
