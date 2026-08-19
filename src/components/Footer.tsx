import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#070709] text-gray-300 py-16">
      <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Marca y Propósito */}
        <div className="space-y-4 md:col-span-1">
          <div className="flex items-center gap-3">
            <img 
              src="/images/Logo BlackBox fondo transparente.png" 
              alt="Logo BlackBox90" 
              className="h-10 w-auto object-contain"
            />
            <span className="font-headline-sm text-white font-bold text-lg tracking-wider">JAVIER ABELEIRA</span>
          </div>
          <p className="font-body-md text-xs text-gray-400 leading-relaxed">
            Headhunter & EMCC Coach/Mentor. Estrategia de carrera, posicionamiento y selección de talento para líderes de marketing digital y empresas.
          </p>
        </div>

        {/* Enlaces Rápidos */}
        <div className="space-y-3">
          <span className="font-label-caps text-secondary text-xs uppercase font-bold tracking-wider">NAVEGACIÓN</span>
          <ul className="space-y-2 text-xs">
            <li><Link to="/" className="hover:text-secondary transition-colors">Inicio</Link></li>
            <li><Link to="/servicios" className="hover:text-secondary transition-colors">Servicios & Programas</Link></li>
            <li><Link to="/blackbox90" className="hover:text-secondary transition-colors">BlackBox90©</Link></li>
            <li><Link to="/sobre-mi" className="hover:text-secondary transition-colors">Sobre Mí</Link></li>
            <li><Link to="/blog" className="hover:text-secondary transition-colors">Blog & Recursos</Link></li>
          </ul>
        </div>

        {/* Programas Clave */}
        <div className="space-y-3">
          <span className="font-label-caps text-secondary text-xs uppercase font-bold tracking-wider">SOLUCIONES</span>
          <ul className="space-y-2 text-xs text-gray-400">
            <li>BlackBox90© (LITE & PREMIUM)</li>
            <li>Mentoring Directivo & Outplacement</li>
            <li>Deep Coaching Ejecutivo (EMCC)</li>
            <li>Headhunting Digital & IT</li>
            <li>Formación In-Company de Liderazgo</li>
          </ul>
        </div>

        {/* Contacto Directo */}
        <div className="space-y-3">
          <span className="font-label-caps text-secondary text-xs uppercase font-bold tracking-wider">CONTACTO DIRECTO</span>
          <p className="font-body-md text-xs text-gray-400">
            <strong className="text-gray-300">Email:</strong> javier@dpsoluciones.es
          </p>
          <p className="font-body-md text-xs text-gray-400">
            <strong className="text-gray-300">Web Corporativa:</strong> dpsoluciones.es
          </p>
          <div className="pt-2">
            <a 
              href="https://www.linkedin.com/in/digital-marketing-coach-javier-abeleira" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-label-caps text-xs text-secondary hover:underline font-bold"
            >
              Perfil de LinkedIn →
            </a>
          </div>
        </div>

      </div>

      <div className="max-w-container-max mx-auto px-gutter mt-12 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 gap-4">
        <span>© {new Date().getFullYear()} Javier Abeleira · DP Soluciones · BlackBox90©. Todos los derechos reservados.</span>
        <div className="flex gap-6">
          <Link to="/contacto" className="hover:text-gray-300">Aviso Legal</Link>
          <Link to="/contacto" className="hover:text-gray-300">Privacidad</Link>
          <Link to="/contacto" className="hover:text-gray-300">Contacto</Link>
        </div>
      </div>
    </footer>
  );
}
