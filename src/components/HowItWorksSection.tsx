import { Card, CardContent } from "@/components/ui/card";
import { UserPlus, Shield, Users as UsersIcon, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Cadastre-se",
    description: "Crie sua conta em segundos usando e-mail ou autenticação social (Google/Apple).",
    step: "01",
  },
  {
    icon: UsersIcon,
    title: "Adicione Contatos",
    description: "Selecione seus contatos de confiança que receberão seus alertas de emergência.",
    step: "02",
  },
  {
    icon: Shield,
    title: "Configure Alertas",
    description: "Personalize como deseja enviar alertas: toque rápido, comando de voz ou botão de emergência.",
    step: "03",
  },
  {
    icon: CheckCircle,
    title: "Esteja Protegido",
    description: "Pronto! Agora você está conectado à sua rede de segurança pessoal e comunitária.",
    step: "04",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Como Funciona
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comece a se proteger em poucos minutos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connection line (hidden on mobile) */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-secondary"></div>

          {steps.map((step, index) => (
            <Card 
              key={index}
              className="relative bg-card border-2 hover:border-primary transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-6 text-center">
                {/* Step number badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-soft z-10">
                  {step.step}
                </div>

                <div className="w-16 h-16 mx-auto mb-4 mt-6 rounded-2xl bg-gradient-accent flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-accent-foreground" />
                </div>

                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
