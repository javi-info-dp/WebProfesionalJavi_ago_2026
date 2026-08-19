import AnimatedPage from '../components/AnimatedPage';

export default function Contact() {
  return (
    <AnimatedPage>
      <div className="max-w-container-max mx-auto px-gutter py-section-desktop grid grid-cols-1 lg:grid-cols-12 gap-stack-lg">
        
        {/* Formulario de Contacto Principal */}
        <div className="col-span-1 lg:col-span-8 bg-surface-container-lowest border border-outline-variant/30 p-gutter md:p-[48px] shadow-sm">
          <span className="font-label-caps text-secondary text-xs uppercase block mb-1">INICIAR CONVERSACIÓN</span>
          <h1 className="font-headline-lg text-primary mb-3">Hablemos de tu reto o proyecto</h1>
          <p className="font-body-md text-on-surface-variant mb-8 leading-relaxed">
            Tanto si eres un profesional senior buscando tu próximo gran salto como si eres una empresa que necesita incorporar talento directivo clave.
          </p>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label htmlFor="fullName" className="font-label-caps text-secondary mb-2 text-xs">NOMBRE Y APELLIDOS</label>
                <input type="text" id="fullName" name="fullName" className="elegant-input font-body-md" placeholder="Tu nombre completo" required />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="font-label-caps text-secondary mb-2 text-xs">CORREO ELECTRÓNICO</label>
                <input type="email" id="email" name="email" className="elegant-input font-body-md" placeholder="tu.email@empresa.com" required />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label htmlFor="perfil" className="font-label-caps text-secondary mb-2 text-xs">TIPO DE CONSULTA</label>
                <select id="perfil" name="perfil" className="elegant-input font-body-md bg-transparent appearance-none rounded-none cursor-pointer text-sm">
                  <option value="" disabled selected>Selecciona tu situación...</option>
                  <option value="blackbox">Soy Profesional: Quiero info sobre BlackBox90©</option>
                  <option value="mentoring">Soy Profesional: Mentoring 1:1 / Outplacement</option>
                  <option value="headhunting">Soy Empresa / Startup: Búsqueda de Talento</option>
                  <option value="formacion">Soy Empresa: Formación In-Company / Liderazgo</option>
                  <option value="otro">Otra consulta general</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="phone" className="font-label-caps text-secondary mb-2 text-xs">TELÉFONO O LINKEDIN</label>
                <input type="text" id="phone" name="phone" className="elegant-input font-body-md" placeholder="+34 ... o url de LinkedIn" />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="font-label-caps text-secondary mb-2 text-xs">¿EN QUÉ PUNTO TE ENCUENTRAS Y CÓMO TE PUEDO AYUDAR?</label>
              <textarea id="message" name="message" rows={4} className="elegant-input font-body-md resize-none" placeholder="Cuéntame brevemente tu situación actual o las características de la posición a cubrir..." required></textarea>
            </div>

            <div className="pt-4 flex justify-between items-center">
              <span className="text-xs text-on-surface-variant">Respuesta personalizada en menos de 24h</span>
              <button type="submit" className="bg-primary text-on-primary font-label-caps text-xs py-4 px-8 hover:bg-secondary transition-colors duration-300 uppercase tracking-wider font-bold">
                ENVIAR MENSAJE
              </button>
            </div>
          </form>
        </div>

        {/* Canales Directos & Reservas */}
        <div className="col-span-1 lg:col-span-4 flex flex-col gap-6">
          
          {/* Card Sesión Estratégica en Bookme */}
          <div className="bg-primary-container p-8 text-on-primary border border-primary-fixed/20 shadow-lg">
            <span className="font-label-caps text-secondary-container text-xs block mb-1">ACCESO RÁPIDO</span>
            <h3 className="font-headline-sm text-on-primary mb-2 text-xl">Sesión Estratégica 1:1</h3>
            <p className="font-body-md text-on-primary-container text-xs mb-6 leading-relaxed">
              Agenda directamente en mi calendario una videollamada de 60 minutos sin compromiso para evaluar tu caso.
            </p>
            <a
              href="https://bookme.name/dpsoluciones/lite/sesion-estrategica-blackbox90-60-minutos"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-secondary-container text-on-secondary-fixed font-label-caps py-3.5 px-4 hover:bg-secondary-fixed transition-colors font-bold uppercase text-xs tracking-wider"
            >
              Agendar en Bookme →
            </a>
          </div>

          {/* Autodiagnóstico Scorecard */}
          <div className="bg-surface-bone p-6 border border-secondary/20">
            <span className="font-label-caps text-secondary text-[11px] block mb-1">SCORECARD BLACKBOX90©</span>
            <h4 className="font-headline-sm text-primary text-base font-bold mb-2">Autodiagnóstico en 15 min</h4>
            <p className="font-body-md text-on-surface-variant text-xs mb-4">
              Evalúa tu preparación para el cambio de juego en 6 dimensiones críticas con análisis en 48h.
            </p>
            <a
              href="https://form.typeform.com/to/RH3SPk3R"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary font-label-caps text-xs font-bold hover:underline block"
            >
              Completar Test Online →
            </a>
          </div>

          {/* Datos Directos */}
          <div className="bg-surface-container-lowest border border-outline-variant/30 p-6">
            <h4 className="font-headline-sm text-primary mb-4 text-base font-bold">Datos Directos</h4>
            <ul className="space-y-4 text-xs">
              <li>
                <span className="font-label-caps text-on-surface-variant block text-[10px]">CORREO ELECTRÓNICO</span>
                <a href="mailto:javier@dpsoluciones.es" className="font-body-md text-primary hover:text-secondary font-medium">
                  javier@dpsoluciones.es
                </a>
              </li>
              <li>
                <span className="font-label-caps text-on-surface-variant block text-[10px]">WEB CORPORATIVA</span>
                <a href="https://dpsoluciones.es/" target="_blank" rel="noopener noreferrer" className="font-body-md text-primary hover:text-secondary font-medium">
                  dpsoluciones.es
                </a>
              </li>
              <li>
                <span className="font-label-caps text-on-surface-variant block text-[10px]">RED PROFESIONAL</span>
                <a href="https://www.linkedin.com/in/digital-marketing-coach-javier-abeleira" target="_blank" rel="noopener noreferrer" className="font-body-md text-primary hover:text-secondary font-medium">
                  linkedin.com/in/digital-marketing-coach-javier-abeleira
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </AnimatedPage>
  );
}
