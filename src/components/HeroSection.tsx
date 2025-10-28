import { Button } from "@/components/ui/button";
import { ShieldCheck, ArrowRight } from "lucide-react";
import heroPhone from "@/assets/hero-phone.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="text-white animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-sm font-medium">Segurança em suas mãos</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Proteja-se e fortaleça sua comunidade
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
              Envie alertas instantâneos para seus contatos de confiança e colabore com sua comunidade para criar um ambiente mais seguro para todos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 shadow-glow animate-pulse-glow"
              >
                Baixar Agora
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-lg px-8 py-6"
              >
                Saiba Mais
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap gap-8">
              <div>
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-white/80 text-sm">Disponibilidade</div>
              </div>
              <div>
                <div className="text-3xl font-bold">&lt;3s</div>
                <div className="text-white/80 text-sm">Tempo de Resposta</div>
              </div>
              <div>
                <div className="text-3xl font-bold">99%</div>
                <div className="text-white/80 text-sm">Uptime</div>
              </div>
            </div>
          </div>

          {/* Phone mockup */}
          <div className="relative animate-fade-in lg:animate-slide-in">
            <div className="relative z-10">
              <img 
                src={heroPhone} 
                alt="AlertaMe App Interface" 
                className="w-full max-w-lg mx-auto drop-shadow-2xl"
              />
            </div>
            
            {/* Floating badges */}
            <div className="absolute top-10 -left-4 bg-white rounded-2xl p-4 shadow-strong animate-fade-in">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-sm">Alerta Enviado</div>
                  <div className="text-xs text-muted-foreground">Em 2.3s</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
