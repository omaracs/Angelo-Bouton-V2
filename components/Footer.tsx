import React from 'react';
import { CONTACT_INFO, NAVIGATION_LINKS, LOGO_URL } from '../constants';
import { Home, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img 
                src={LOGO_URL} 
                alt="Bouton Real Estate" 
                className="h-40 w-auto rounded-lg bg-white/5 p-1"
              />
            </div>
            <p className="text-gray-400 mb-6">
              Haciendo realidad el sueño de ser dueño de su casa con honestidad, integridad y profesionalismo.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-amber-500">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {NAVIGATION_LINKS.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-amber-500">Servicios</h4>
            <ul className="space-y-3 text-gray-400">
              <li>Compra de Casas</li>
              <li>Venta de Propiedades</li>
              <li>Préstamos Hipotecarios</li>
              <li>Reparación de Crédito</li>
              <li>Reubicación (CA/MX to TX)</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-amber-500">Contacto</h4>
            <ul className="space-y-3 text-gray-400">
              <li>{CONTACT_INFO.address}</li>
              <li>
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-white">{CONTACT_INFO.phone}</a>
              </li>
              <li>
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white break-words">{CONTACT_INFO.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} {CONTACT_INFO.company}. Todos los derechos reservados.
          </p>
          
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <Home className="w-5 h-5" />
            <span>Equal Housing Opportunity</span>
          </div>
        </div>
        <div className="text-center mt-4 text-xs text-gray-600">
            <p>No discriminamos por motivos de raza, color, religión, sexo, discapacidad, estado familiar u origen nacional.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;