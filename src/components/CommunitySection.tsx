import { Button } from "@/components/ui/button";
import { MapPin, MessageCircle, Camera, TrendingUp } from "lucide-react";
import communityMap from "@/assets/community-map.png";

const CommunitySection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <div className="relative animate-fade-in order-2 lg:order-1">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-strong">
              <img 
                src={communityMap} 
                alt="Mapa Colaborativo da Comunidade" 
                className="w-full"
              />
            </div>

            {/* Floating stats - Adicionado z-20 aqui para ficar por cima do mapa */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-strong animate-fade-in z-20"> 
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-accent rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold">+45%</div>
                  <div className="text-sm text-muted-foreground">Mais seguro</div>
                </div>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="animate-fade-in order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6 border border-primary/20">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Mapa Colaborativo</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Sua comunidade mais forte e informada
            </h2>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Compartilhe e visualize ocorrências de segurança em tempo real. Juntos, criamos um mapa colaborativo que ajuda todos a tomarem melhores decisões sobre suas rotas e atividades.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Relatos em Tempo Real</h3>
                  <p className="text-muted-foreground">
                    Compartilhe ocorrências instantaneamente com texto, fotos ou áudio
                  </p>
                </div>
              </div>

              {/* Tópico alterado para usar bg-primary/10 e text-primary */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Camera className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Evidências Visuais</h3>
                  <p className="text-muted-foreground">
                    Adicione fotos e vídeos para documentar situações de forma segura
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Zonas de Segurança</h3>
                  <p className="text-muted-foreground">
                    Visualize áreas seguras e regiões que requerem mais atenção
                  </p>
                </div>
              </div>
            </div>

            <Button 
              size="lg" 
              className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-soft hover:shadow-red transition-all duration-300 hover:scale-105"
            >
              Explorar o Mapa
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;