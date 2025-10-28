import { Button } from "@/components/ui/button";
import { Apple, Smartphone } from "lucide-react";

const DownloadSection = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Baixe agora e comece a se proteger
          </h2>
          
          <p className="text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed">
            Disponível para Android e iOS. Junte-se a milhares de usuários que já estão mais seguros com o AlertaMe.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 hover:shadow-red text-lg px-8 py-6 shadow-strong transition-all duration-300 hover:scale-105 group"
            >
              <Apple className="mr-2 w-6 h-6 group-hover:scale-110 transition-transform" />
              App Store
            </Button>
            
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 hover:shadow-red text-lg px-8 py-6 shadow-strong transition-all duration-300 hover:scale-105 group"
            >
              <Smartphone className="mr-2 w-6 h-6 group-hover:scale-110 transition-transform" />
              Google Play
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-white/20">
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-white/80">Gratuito</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">Android 8+</div>
              <div className="text-white/80">Compatibilidade</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">iOS 13+</div>
              <div className="text-white/80">Compatibilidade</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
