export default function Footer() {
  return (
    <footer className="w-full py-section-padding-mobile md:py-section-padding-desktop border-t border-secondary/10 bg-surface-container-lowest dark:bg-primary-container transition-opacity duration-200">
      <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-center">
        <div className="flex flex-col gap-stack-sm">
          <span className="font-headline-sm text-headline-sm text-primary dark:text-on-primary-fixed">
            JAVIER ABELEIRA
          </span>
          <p className="font-body-md text-body-md text-on-surface dark:text-on-primary-container">
            © {new Date().getFullYear()} DP Soluciones · Desarrollo Profesional. Todos los derechos reservados.
          </p>
        </div>
        
        <nav className="flex flex-wrap gap-x-stack-lg gap-y-stack-sm md:justify-end">
          <a href="https://dpsoluciones.es/" target="_blank" rel="noopener noreferrer" className="font-body-md text-body-md text-on-surface-variant hover:text-secondary underline decoration-secondary/30 transition-colors duration-200">
            dpsoluciones.es
          </a>
          <a href="https://www.linkedin.com/in/digital-marketing-coach-javier-abeleira" target="_blank" rel="noopener noreferrer" className="font-body-md text-body-md text-on-surface-variant hover:text-secondary underline decoration-secondary/30 transition-colors duration-200">
            LinkedIn
          </a>
          <a href="mailto:javier@dpsoluciones.es" className="font-body-md text-body-md text-on-surface-variant hover:text-secondary underline decoration-secondary/30 transition-colors duration-200">
            javier@dpsoluciones.es
          </a>
        </nav>
      </div>
    </footer>
  );
}
