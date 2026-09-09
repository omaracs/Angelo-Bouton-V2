import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Contáctanos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            ¿Listo para dar el siguiente paso? Estamos disponibles para ayudarle a comprar, vender o financiar su propiedad.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-3xl bg-slate-900 text-white rounded-3xl overflow-hidden shadow-2xl p-10 md:p-16 relative">
            {/* Decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-500/10 rounded-tr-full"></div>

            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold mb-2 text-amber-500">Información de Contacto</h3>
              <p className="text-gray-400">Estamos aquí para servirle</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="p-3 bg-white/5 rounded-lg">
                    <MapPin className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-gray-400 uppercase mb-1">Dirección</p>
                    <p className="text-lg">{CONTACT_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="p-3 bg-white/5 rounded-lg">
                    <Phone className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-gray-400 uppercase mb-1">Teléfono</p>
                    <a href={`https://wa.me/12147668878`} className="text-lg hover:text-amber-400 transition-colors">
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="p-3 bg-white/5 rounded-lg">
                    <Mail className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-gray-400 uppercase mb-1">Email</p>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-lg hover:text-amber-400 transition-colors break-all">
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="p-3 bg-white/5 rounded-lg">
                    <Clock className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-gray-400 uppercase mb-1">Horario</p>
                    <p className="text-lg">Lunes a Domingo</p>
                    <p className="text-sm text-gray-400">7:00 AM - 12:00 AM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center pt-8 border-t border-gray-800">
               <p className="text-gray-400 italic">
                 "Atendemos Sábados, Domingos y Festivos."
               </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;