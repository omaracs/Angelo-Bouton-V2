import React from 'react';
import { CONTACT_INFO } from '../constants';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Luxury Home" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <span className="inline-block py-1 px-3 rounded-full bg-amber-500/20 border border-amber-400 text-amber-300 text-sm font-semibold tracking-wider mb-6 backdrop-blur-sm">
          20 AÑOS DE EXPERIENCIA
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 drop-shadow-lg">
          Hacer realidad el sueño Americano<br />
          <span className="text-amber-400">de ser dueño de su casa</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
          {CONTACT_INFO.company} le ofrece un servicio integral de Bienes Raíces y Financiamiento. 
          Honestidad, integridad y un trato familiar para asegurar su futuro en Texas y Florida.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                 
          <a 
            href={`https://wa.me/12147668878`} 
            className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg flex items-center"          >
            Contáctanos Hoy
          </a>
          {/* <a 
            href="#services" 
            className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold rounded-lg transition-all backdrop-blur-sm"
          >
            Nuestros Servicios
          </a> */}
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/70">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;