import { Instagram, MessageCircle, MapPin, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <h3 className="font-display text-2xl font-semibold tracking-wider mb-4">
              LUME<span className="opacity-50">925</span>
            </h3>
            <p className="font-body text-sm opacity-70 leading-relaxed">
              Joias em prata 925 autêntica. Elegância e qualidade para cada momento.
            </p>
          </div>

          <div>
            <h4 className="font-body text-xs tracking-widest uppercase mb-4 opacity-50">Navegação</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="font-body text-sm opacity-70 hover:opacity-100 transition-opacity">Início</Link>
              <Link to="/produtos" className="font-body text-sm opacity-70 hover:opacity-100 transition-opacity">Produtos</Link>
              <Link to="/sobre" className="font-body text-sm opacity-70 hover:opacity-100 transition-opacity">Sobre Nós</Link>
              <Link to="/contacto" className="font-body text-sm opacity-70 hover:opacity-100 transition-opacity">Contacto</Link>
            </div>
          </div>

          <div>
            <h4 className="font-body text-xs tracking-widest uppercase mb-4 opacity-50">Contacto</h4>
            <div className="flex flex-col gap-3">
              <a href="https://wa.me/244900000000" className="flex items-center gap-2 font-body text-sm opacity-70 hover:opacity-100 transition-opacity">
                <MessageCircle size={14} /> WhatsApp
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-body text-sm opacity-70 hover:opacity-100 transition-opacity">
                <Instagram size={14} /> Instagram
              </a>
              <span className="flex items-center gap-2 font-body text-sm opacity-70">
                <MapPin size={14} /> Luanda, Angola
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-body text-xs tracking-widest uppercase mb-4 opacity-50">Garantia</h4>
            <div className="flex items-start gap-2">
              <Shield size={16} className="mt-0.5 opacity-70 shrink-0" />
              <p className="font-body text-sm opacity-70 leading-relaxed">
                Todas as peças acompanham certificado de autenticidade Prata 925.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center">
          <p className="font-body text-xs opacity-40">
            © {new Date().getFullYear()} LUME925. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
