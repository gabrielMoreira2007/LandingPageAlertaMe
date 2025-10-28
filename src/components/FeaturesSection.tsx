import { Card, CardContent } from "@/components/ui/card";
import { 
  Bell, 
  MapPin, 
  Mic, 
  Users, 
  Zap, 
  MessageSquare 
} from "lucide-react";

const features = [
  {
    icon: Bell,
    title: "Alertas Instantâneos",
    description: "Envie alertas de emergência para seus contatos de confiança com apenas um toque ou comando de voz.",
    color: "text-primary",
  },
  {
    icon: MapPin,
    title: "Localização em Tempo Real",
    description: "Seus contatos recebem sua localização GPS atualizada automaticamente durante emergências.",
    color: "text-accent",
  },
  {
    icon: Mic,
    title: "Ativação por Voz",
    description: "Ative alertas usando comandos de voz, perfeito para situações onde não é possível usar as mãos.",
    color: "text-primary",
  },
  {
    icon: Users,
    title: "Mapa Colaborativo",
    description: "Compartilhe e visualize ocorrências de segurança relatadas pela sua comunidade.",
    color: "text-secondary",
  },
  {
    icon: Zap,
    title: "Notificações Push & SMS",
    description: "Garanta que seus alertas cheguem mesmo com conexão limitada através de múltiplos canais.",
    color: "text-accent",
  },
  {
    icon: MessageSquare,
    title: "Relatos da Comunidade",
    description: "Registre ocorrências com texto, imagens ou áudio e ajude a manter sua região mais segura.",
    color: "text-primary",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Funcionalidades Poderosas
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tudo que você precisa para se proteger e fortalecer a segurança da sua comunidade
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="bg-gradient-card border border-border/50 shadow-soft hover:shadow-red hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-4 shadow-soft group-hover:shadow-glow transition-all duration-300 ${feature.color}`}>
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
