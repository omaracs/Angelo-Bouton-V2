import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { NAVIGATION_LINKS, CONTACT_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = "https://wa.me/12147668878";

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' 
          : 'bg-gradient-to-b from-black/60 to-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          
          {/* Brand - Left */}
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              className={`text-lg md:text-xl font-bold tracking-tighter uppercase transition-colors duration-300 ${
                isScrolled ? 'text-slate-900' : 'text-white drop-shadow-lg'
              }`}
            >
              {CONTACT_INFO.company}
            </a>
          </div>

          {/* Desktop Links - Center/Right */}
          <div className="hidden lg:flex items-center space-x-8">
            {NAVIGATION_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:text-amber-500 ${
                  isScrolled ? 'text-slate-800' : 'text-white/90 drop-shadow-md'
                }`}
              >
                {link.name}
              </a>
            ))}
            
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 transform hover:-translate-y-1 shadow-md ${
                isScrolled 
                  ? 'bg-green-500 text-white hover:bg-green-600 shadow-green-500/20' 
                  : 'bg-white text-slate-900 hover:bg-slate-100 shadow-white/20'
              }`}
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button - Visible on Small Screens */}
          <div className="lg:hidden flex items-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2.5 rounded-full transition-all duration-300 ${
                isScrolled ? 'bg-green-500 text-white shadow-lg' : 'bg-white text-green-500 shadow-lg'
              }`}
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <button
              className="focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <X className={`w-8 h-8 ${isScrolled ? 'text-slate-900' : 'text-white'}`} />
              ) : (
                <Menu className={`w-8 h-8 ${isScrolled ? 'text-slate-900' : 'text-white'}`} />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col px-8 py-8 space-y-6 text-center">
          {NAVIGATION_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-800 font-bold hover:text-amber-600 py-2 uppercase tracking-[0.2em] text-sm border-b border-gray-50 last:border-0"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex justify-center items-center gap-3 px-6 py-4 bg-green-500 text-white font-bold rounded-xl shadow-lg mt-4 uppercase tracking-widest text-xs"
            onClick={() => setIsOpen(false)}
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp: {CONTACT_INFO.phone}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;