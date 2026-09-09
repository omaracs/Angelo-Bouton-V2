import React from 'react';
import { Star, ShieldCheck, Clock, HeartHandshake } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="features" className="relative py-24 bg-slate-900 text-white">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Skyscrapers"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Por qué elegir Bouton Real Estate?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Entendemos que comprar una casa es una de las decisiones más importantes de su vida. 
              Por eso, eliminamos las barreras tradicionales del mercado.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-amber-500 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Seguridad y Confianza</h3>
                  <p className="text-gray-400 text-sm">Texas ofrece índices de crimen muy bajos. Priorizamos la seguridad de su inversión y su familia.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-amber-500 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Rapidez en Trámites</h3>
                  <p className="text-gray-400 text-sm">Gestionamos la venta de su casa actual y la compra de la nueva simultáneamente para que nunca se quede sin hogar.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-amber-500 flex items-center justify-center flex-shrink-0">
                  <HeartHandshake className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Apoyo a la Comunidad</h3>
                  <p className="text-gray-400 text-sm">Programas especiales para primeros compradores y asesoría para la comunidad Hispana.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl text-slate-900 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 text-center">Testimonios</h3>
            <div className="space-y-6">
              <div className="border-b border-gray-100 pb-4">
                <div className="flex text-amber-500 mb-2">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <p className="italic text-gray-600 mb-2">"Excelente servicio, nos ayudaron con el préstamo y la casa al mismo tiempo. Muy recomendado para gente que viene de fuera."</p>
                <p className="font-bold text-sm">- Familia Rodriguez</p>
              </div>
              <div>
                <div className="flex text-amber-500 mb-2">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <p className="italic text-gray-600 mb-2">"Angelo nos atendió un domingo por la tarde cuando nadie más contestaba. Gracias a él tenemos nuestra casa en Dallas."</p>
                <p className="font-bold text-sm">- Carlos M.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;