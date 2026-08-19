export default function Footer() {
  return (
    <footer className="w-full py-section-padding-mobile md:py-section-padding-desktop border-t border-white/[0.06] bg-[#070709] transition-opacity duration-200">
      <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-center">
        <div className="flex flex-col gap-stack-sm">
          <div className="flex items-center gap-3">
            <span className="font-headline-sm text-lg text-white font-bold tracking-wider">
              JAVIER ABELEIRA
            </span>
            <span className="text-xs text-secondary font-label-caps">· DP SOLUCIONES</span>
          </div>
          <p className="font-body-md text-sm text-gray-400">
            © {new Date().getFullYear()} Javier Abeleira · BlackBox90©. Todos los derechos reservados.
          </p>
        </div>
        
        <nav className="flex flex-wrap gap-x-stack-lg gap-y-stack-sm md:justify-end text-sm">
          <a href="https://dpsoluciones.es/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-secondary transition-colors duration-200">
            dpsoluciones.es
          </a>
          <a href="https://www.linkedin.com/in/digital-marketing-coach-javier-abeleira" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-secondary transition-colors duration-200">
            LinkedIn
          </a>
          <a href="mailto:javier@dpsoluciones.es" className="text-gray-400 hover:text-secondary transition-colors duration-200">
            javier@dpsoluciones.es
          </a>
        </nav>
      </div>
    </footer>
  );
}
