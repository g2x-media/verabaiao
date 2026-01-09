import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  {
    icon: Phone,
    label: "WhatsApp",
    value: "(11) 99999-9999",
    href: "https://wa.me/5511999999999",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "contato@verabaumgarten.com.br",
    href: "mailto:contato@verabaumgarten.com.br",
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "São Paulo, SP",
    href: null,
  },
  {
    icon: Clock,
    label: "Horário",
    value: "Seg - Sex: 8h às 20h",
    href: null,
  },
];

export const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Visual only - no backend
    alert("Formulário apenas visual. Entre em contato pelo WhatsApp!");
  };

  return (
    <section id="contato" className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Contato
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-3 mb-4">
            Vamos Conversar?
          </h2>
          <p className="text-muted-foreground">
            Dê o primeiro passo rumo ao seu bem-estar emocional. 
            Entre em contato e agende sua consulta.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Info */}
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {contactInfo.map((info) => (
              <div
                key={info.label}
                className="bg-card rounded-2xl p-6 border border-border"
              >
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <p className="text-sm text-muted-foreground mb-1">
                  {info.label}
                </p>
                {info.href ? (
                  <a
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="font-medium text-foreground">{info.value}</p>
                )}
              </div>
            ))}
          </div>

          <Button
            asChild
            className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full py-6 text-base"
          >
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone className="w-5 h-5 mr-2" />
              Falar pelo WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
