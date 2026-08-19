import AnimatedPage from '../components/AnimatedPage';

export default function Contact() {
  return (
    <AnimatedPage>
      <div className="max-w-container-max mx-auto px-gutter py-section-desktop grid grid-cols-1 md:grid-cols-12 gap-stack-lg">
        
        {/* Formulario de Contacto */}
        <div className="col-span-1 md:col-span-8 bg-surface-container-lowest border border-outline-variant/30 p-gutter md:p-[48px]">
          <h2 className="font-headline-md text-primary mb-2">Hablemos de tu proyecto o carrera</h2>
          <p className="font-body-md text-on-surface-variant mb-8">
            Tanto si eres un profesional del marketing digital buscando tu próximo salto como si eres una startup o empresa en búsqueda de talento clave.
          </p>

          <form className="space-y-stack-lg" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg">
              <div className="flex flex-col">
                <label htmlFor="fullName" className="font-label-caps text-secondary mb-2">NOMBRE COMPLETO / EMPRESA</label>
                <input type="text" id="fullName" name="fullName" className="elegant-input font-body-md" placeholder="Tu nombre" required />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="font-label-caps text-secondary mb-2">CORREO ELECTRÓNICO</label>
                <input type="email" id="email" name="email" className="elegant-input font-body-md" placeholder="tuemail@ejemplo.com" required />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg">
              <div className="flex flex-col">
                <label htmlFor="projectType" className="font-label-caps text-secondary mb-2">¿EN QUÉ PUEDO AYUDARTE?</label>
                <select id="projectType" name="projectType" className="elegant-input font-body-md bg-transparent appearance-none rounded-none cursor-pointer">
                  <option value="" disabled selected>Selecciona una opción...</option>
                  <option value="blackbox">Programa BlackBox90© (Coaching & Mentoring)</option>
                  <option value="headhunting">Búsqueda de Talento / Headhunting para Empresa</option>
                  <option value="mentoring">Mentoring y Asesoramiento de Carrera 1:1</option>
                  <option value="formacion">Formación Directiva / In-Company</option>
                  <option value="other">Otra Consulta</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="phone" className="font-label-caps text-secondary mb-2">TELÉFONO / WHATSAPP</label>
                <input type="tel" id="phone" name="phone" className="elegant-input font-body-md" placeholder="+34 ..." />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="font-label-caps text-secondary mb-2">DETALLES DE TU SITUACIÓN O NECESIDAD</label>
              <textarea id="message" name="message" rows={4} className="elegant-input font-body-md resize-none" placeholder="Cuéntame brevemente en qué punto te encuentras..." required></textarea>
            </div>

            <div className="pt-stack-md flex justify-end">
              <button type="submit" className="bg-primary text-on-primary font-label-caps py-4 px-8 hover:bg-secondary transition-colors duration-300">
                ENVIAR MENSAJE
              </button>
            </div>
          </form>
        </div>

        {/* Canales Directos & Agendamiento */}
        <div className="col-span-1 md:col-span-4 flex flex-col gap-stack-lg">
          
          {/* Card Agendar Reunión Directa */}
          <div className="bg-primary-container p-gutter text-on-primary border border-primary-fixed/20">
            <span className="font-label-caps text-secondary-container block mb-1">AGENDA DIRECTA</span>
            <h3 className="font-headline-sm text-on-primary mb-3">Reunión de 30 min</h3>
            <p className="font-body-md text-on-primary-container text-sm mb-6">
              Programa una videollamada sin compromiso para explorar cómo puedo ayudarte.
            </p>
            <a
              href="https://bookme.name/dpsoluciones/lite/llamada-de-contacto"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-secondary-container text-on-secondary-fixed font-label-caps py-3 px-4 hover:bg-secondary-fixed transition-colors font-bold uppercase text-xs"
            >
              Reservar en Bookme
            </a>
          </div>

          {/* Contacto Directo */}
          <div className="bg-surface border border-outline-variant/30 p-gutter">
            <h3 className="font-headline-sm text-primary mb-stack-md">Canales Directos</h3>
            <ul className="space-y-stack-md gold-bullet">
              <li>
                <p className="font-label-caps text-on-surface-variant mb-1">EMAIL DIRECTO</p>
                <a href="mailto:javier@dpsoluciones.es" className="font-body-md text-primary hover:text-secondary underline decoration-secondary/30 transition-colors">
                  javier@dpsoluciones.es
                </a>
              </li>
              <li>
                <p className="font-label-caps text-on-surface-variant mb-1">UBICACIÓN</p>
                <p className="font-body-md text-primary">Barcelona / Madrid / Remoto</p>
              </li>
              <li>
                <p className="font-label-caps text-on-surface-variant mb-1">WEB CORPORATIVA</p>
                <a href="https://dpsoluciones.es/" target="_blank" rel="noopener noreferrer" className="font-body-md text-primary hover:text-secondary underline decoration-secondary/30 transition-colors">
                  dpsoluciones.es
                </a>
              </li>
            </ul>
          </div>

          {/* Redes */}
          <div className="bg-surface-container-lowest border border-outline-variant/30 p-gutter">
            <h3 className="font-headline-sm text-primary mb-stack-md">Red Profesional</h3>
            <a href="https://www.linkedin.com/in/digital-marketing-coach-javier-abeleira" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
              <span className="material-symbols-outlined text-secondary">work</span>
              <span className="font-body-md text-primary group-hover:text-secondary transition-colors underline decoration-transparent group-hover:decoration-secondary/30">
                Perfil en LinkedIn
              </span>
            </a>
          </div>

        </div>
      </div>
    </AnimatedPage>
  );
}
