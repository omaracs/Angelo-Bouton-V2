import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { CONTACT_INFO, FEATURES } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute top-0 left-0 w-full h-full bg-amber-500/10 transform -translate-x-4 translate-y-4 rounded-2xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1073&q=80" 
              alt="Real Estate Professional" 
              className="relative rounded-2xl shadow-2xl w-full object-cover h-[500px]"
            />
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:right-[-20px] bg-white p-6 rounded-lg shadow-xl border-l-4 border-amber-500 max-w-xs hidden sm:block">
              <p className="font-bold text-slate-900 text-lg">Misión</p>
              <p className="text-slate-600 text-sm mt-2">
                "Simplificar el proceso y dar el mejor servicio posible negociando para obtener mejores resultados."
              </p>
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            <h4 className="text-amber-600 font-bold uppercase tracking-wider mb-2 text-sm">Sobre {CONTACT_INFO.company}</h4>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Más que agentes, somos <span className="text-amber-500">su familia</span> en bienes raíces.
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Con más de 20 años de experiencia, {CONTACT_INFO.name} ha ayudado a innumerables familias a encontrar su hogar.
              Nos diferenciamos por ofrecer un servicio personalizado donde actuamos como <strong>Realtor y Oficial de Préstamos</strong> simultáneamente.
            </p>

            <div className="grid grid-cols-1 gap-4">
              {FEATURES.map((feature, idx) => (
                <div key={idx} className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-amber-500 mt-1 flex-shrink-0 mr-4" />
                  <div>
                    <h4 className="font-bold text-slate-900">{feature.title}</h4>
                    <p className="text-gray-500 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;