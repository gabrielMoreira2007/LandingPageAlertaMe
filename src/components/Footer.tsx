import { Shield, Mail, Instagram, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold">AlertaMe</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Protegendo vidas e fortalecendo comunidades através da tecnologia e colaboração.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-bold mb-4">Produto</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Funcionalidades</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Como Funciona</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Comunidade</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Download</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Contato</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Privacidade</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Termos de Uso</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Contato</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                contato@alertame.app
              </li>
            </ul>
            
            <div className="flex gap-4 mt-6">
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/alertame_ofc/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>

              {/* Twitter */}
              <a 
                href="#" 
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>

              {/* Facebook */}
              <a 
                href="#" 
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} AlertaMe. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
