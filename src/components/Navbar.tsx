import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'BlackBox90©', path: '/blackbox90' },
    { name: 'Sobre Mí', path: '/sobre-mi' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <header className="bg-[#0b0b0e]/90 backdrop-blur-xl fixed top-0 w-full z-50 border-b border-white/[0.06] transition-all duration-300">
      <div className="max-w-container-max mx-auto flex justify-between items-center h-20 px-gutter">
        <Link to="/" className="flex items-center gap-3">
          <img 
            src="/images/Logo BlackBox fondo transparente.png" 
            alt="BlackBox90 Logo" 
            className="h-9 w-auto object-contain opacity-95"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          <div className="flex flex-col">
            <span className="font-headline-sm tracking-wider text-white uppercase text-sm sm:text-base leading-tight font-bold">
              JAVIER ABELEIRA
            </span>
            <span className="text-[10px] tracking-[0.2em] text-secondary font-label-caps uppercase">
              EXECUTIVE SEARCH & COACHING
            </span>
          </div>
        </Link>
        
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`font-label-caps text-xs tracking-widest transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'text-secondary border-b-2 border-secondary pb-1 font-bold'
                    : 'text-gray-400 hover:text-secondary'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://bookme.name/dpsoluciones/lite/sesion-estrategica-blackbox90-60-minutos"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary text-[#0b0b0e] font-label-caps text-xs py-2.5 px-5 hover:bg-secondary-hover transition-colors duration-300 uppercase tracking-widest font-bold shadow-lg shadow-secondary/10"
          >
            Sesión Estratégica
          </a>
        </div>

        <button 
          className="lg:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Abrir menú"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#121216] border-b border-white/[0.08] shadow-2xl"
          >
            <nav className="flex flex-col items-center py-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-label-caps text-xs tracking-wider text-gray-300 hover:text-secondary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="https://bookme.name/dpsoluciones/lite/sesion-estrategica-blackbox90-60-minutos"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-[#0b0b0e] font-label-caps py-3 px-8 hover:bg-secondary-hover transition-colors duration-300 uppercase text-xs font-bold mt-2"
              >
                Sesión Estratégica (60 min)
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
