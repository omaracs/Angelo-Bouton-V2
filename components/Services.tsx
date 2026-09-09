import React from 'react';
import { Home, BadgeDollarSign, TrendingUp, MapPin } from 'lucide-react';
import { SERVICES } from '../constants';

const iconMap: Record<string, React.ReactNode> = {
  'home': <Home className="w-8 h-8" />,
  'finance': <BadgeDollarSign className="w-8 h-8" />,
  'chart': <TrendingUp className="w-8 h-8" />,
  'map': <MapPin className="w-8 h-8" />
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Nuestros Servicios</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Soluciones integrales para todas sus necesidades inmobiliarias. Desde la búsqueda de su hogar ideal hasta el financiamiento y cierre.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-slate-700 mb-6 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                {iconMap[service.icon]}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;