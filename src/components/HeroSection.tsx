import { Button } from "@/components/ui/button";
import { ShieldCheck, ArrowRight } from "lucide-react";
import logoAlertaMe from "@/assets/logo_alertaMe.png"; // Sua imagem

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-2xl animate-pulse"></div>
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
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 shadow-red hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                Baixar Agora
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:border-white/50 text-lg px-8 py-6 transition-all duration-300"
              >
                Saiba Mais
              </Button>
            </div>

            {/* Div das estatísticas */}
            <div className="mt-10 flex flex-wrap gap-8 items-center">
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
              
              {/* Card de alerta */}
              <div className="bg-white rounded-2xl p-4 shadow-strong animate-fade-in text-black"> 
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-sm">Alerta Enviado</div>
                    <div className="text-xs text-gray-700">Em 2.3s</div> 
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Seção da imagem logo_alertaMe.png DENTRO DE UM CARD */}
          <div className="relative animate-fade-in lg:animate-slide-in flex justify-center lg:justify-end items-center p-4">
            {/* Card ajustado — esticado horizontalmente, sem mudar o tamanho da imagem */}
            <div className="bg-white rounded-3xl p-8 shadow-strong w-[110%] max-w-sm lg:-translate-x-10 transition-all duration-500">
              <img 
                src={logoAlertaMe} 
                alt="Logo AlertaMe" 
                className="w-full h-auto object-contain" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
