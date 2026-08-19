import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Experiencia', path: '/experiencia' },
    { name: 'Formación & Skills', path: '/habilidades' },
    { name: 'Programas', path: '/programas' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <header className="bg-surface/80 dark:bg-surface-container-high/80 backdrop-blur-xl fixed top-0 w-full z-50 border-b border-outline-variant/30 transition-all duration-300">
      <div className="max-w-container-max mx-auto flex justify-between items-center h-20 px-gutter">
        <Link to="/" className="font-headline-sm text-headline-sm tracking-tight text-primary dark:text-on-primary-fixed uppercase text-lg sm:text-headline-sm">
          JAVIER ABELEIRA
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`font-label-caps text-label-caps transition-colors duration-300 cursor-pointer ${
                  isActive
                    ? 'text-secondary dark:text-secondary-fixed-dim border-b border-secondary pb-1'
                    : 'text-on-surface-variant dark:text-surface-variant hover:text-secondary dark:hover:text-secondary-fixed'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://bookme.name/dpsoluciones/lite/llamada-de-contacto"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-on-primary font-label-caps text-label-caps py-2.5 px-5 hover:bg-secondary transition-colors duration-300 uppercase text-xs"
          >
            Agendar Reunión
          </a>
        </div>

        <button 
          className="md:hidden text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface border-b border-outline-variant/30"
          >
            <nav className="flex flex-col items-center py-4 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-label-caps text-label-caps text-on-surface-variant hover:text-secondary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="https://bookme.name/dpsoluciones/lite/llamada-de-contacto"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-on-primary font-label-caps text-label-caps py-2.5 px-6 hover:bg-secondary transition-colors duration-300 uppercase text-xs mt-2"
              >
                Agendar Reunión
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
