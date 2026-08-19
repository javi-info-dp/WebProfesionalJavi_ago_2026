import AnimatedPage from '../components/AnimatedPage';

export default function Contact() {
  return (
    <AnimatedPage>
      <div className="max-w-container-max mx-auto px-gutter py-section-desktop grid grid-cols-1 lg:grid-cols-12 gap-stack-lg bg-[#0b0b0e]">
        
        {/* Formulario de Contacto Principal */}
        <div className="col-span-1 lg:col-span-8 glass-panel p-gutter md:p-[48px] rounded-xl shadow-xl">
          <span className="font-label-caps text-secondary text-xs uppercase block mb-1 font-bold">INICIAR CONVERSACIÓN</span>
          <h1 className="font-headline-lg text-white mb-3">Hablemos de tu reto o proyecto</h1>
          <p className="font-body-md text-gray-300 mb-8 leading-relaxed text-sm">
            Tanto si eres un profesional senior buscando tu próximo gran salto como si eres una empresa que necesita incorporar talento directivo clave.
          </p>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label htmlFor="fullName" className="font-label-caps text-secondary mb-2 text-xs font-bold">NOMBRE Y APELLIDOS</label>
                <input type="text" id="fullName" name="fullName" className="elegant-input" placeholder="Tu nombre completo" required />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="font-label-caps text-secondary mb-2 text-xs font-bold">CORREO ELECTRÓNICO</label>
                <input type="email" id="email" name="email" className="elegant-input" placeholder="tu.email@empresa.com" required />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label htmlFor="perfil" className="font-label-caps text-secondary mb-2 text-xs font-bold">TIPO DE CONSULTA</label>
                <select id="perfil" name="perfil" className="elegant-input bg-[#16161e] cursor-pointer text-sm">
                  <option value="" disabled selected>Selecciona tu situación...</option>
                  <option value="blackbox">Soy Profesional: Info sobre BlackBox90©</option>
                  <option value="mentoring">Soy Profesional: Mentoring 1:1 / Outplacement</option>
                  <option value="headhunting">Soy Empresa / Startup: Búsqueda de Talento</option>
                  <option value="formacion">Soy Empresa: Formación In-Company / Liderazgo</option>
                  <option value="otro">Otra consulta general</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="phone" className="font-label-caps text-secondary mb-2 text-xs font-bold">TELÉFONO O LINKEDIN</label>
                <input type="text" id="phone" name="phone" className="elegant-input" placeholder="+34 ... o url de LinkedIn" />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="font-label-caps text-secondary mb-2 text-xs font-bold">¿EN QUÉ PUNTO TE ENCUENTRAS Y CÓMO TE PUEDO AYUDAR?</label>
              <textarea id="message" name="message" rows={4} className="elegant-input resize-none" placeholder="Cuéntame brevemente tu situación actual o las características de la posición a cubrir..." required></textarea>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row justify-between items-center gap-4">
              <span className="text-xs text-gray-400">Respuesta personalizada en menos de 24h</span>
              <button type="submit" className="bg-secondary text-[#0b0b0e] font-label-caps text-xs py-4 px-8 hover:bg-secondary-hover transition-colors uppercase tracking-widest font-bold rounded shadow-lg shadow-secondary/15 w-full sm:w-auto">
                ENVIAR MENSAJE
              </button>
            </div>
          </form>
        </div>

        {/* Canales Directos & Reservas */}
        <div className="col-span-1 lg:col-span-4 flex flex-col gap-6">
          
          {/* Card Sesión Estratégica en Bookme */}
          <div className="glass-panel p-8 text-white rounded-xl border-secondary/40 shadow-xl">
            <span className="font-label-caps text-secondary text-xs block mb-1 font-bold">AGENDA DIRECTA</span>
            <h3 className="font-headline-sm text-white mb-2 text-xl font-bold">Sesión Estratégica 1:1</h3>
            <p className="font-body-md text-gray-300 text-xs mb-6 leading-relaxed">
              Agenda directamente en mi calendario una videollamada de 60 minutos sin compromiso para evaluar tu caso.
            </p>
            <a
              href="https://bookme.name/dpsoluciones/lite/sesion-estrategica-blackbox90-60-minutos"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-secondary text-[#0b0b0e] font-label-caps py-3.5 px-4 hover:bg-secondary-hover transition-colors font-bold uppercase text-xs tracking-widest rounded shadow-md"
            >
              Agendar en Bookme →
            </a>
          </div>

          {/* Postulación BlackBox90 */}
          <div className="glass-card p-6 rounded-xl">
            <span className="font-label-caps text-secondary text-[11px] block mb-1 font-bold">PROGRAMA BLACKBOX90©</span>
            <h4 className="font-headline-sm text-white text-base font-bold mb-2">Solicitud de Plaza</h4>
            <p className="font-body-md text-gray-400 text-xs mb-4 leading-relaxed">
              Formulario de postulación directa para acceder a una de las 8 plazas por edición.
            </p>
            <a
              href="https://form.typeform.com/to/u1QuphFN"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary font-label-caps text-xs font-bold hover:underline block"
            >
              Acceder al Formulario →
            </a>
          </div>

          {/* Datos Directos */}
          <div className="glass-card p-6 rounded-xl">
            <h4 className="font-headline-sm text-white mb-4 text-base font-bold">Datos Directos</h4>
            <ul className="space-y-4 text-xs">
              <li>
                <span className="font-label-caps text-gray-400 block text-[10px]">CORREO ELECTRÓNICO</span>
                <a href="mailto:javier@dpsoluciones.es" className="font-body-md text-white hover:text-secondary font-medium">
                  javier@dpsoluciones.es
                </a>
              </li>
              <li>
                <span className="font-label-caps text-gray-400 block text-[10px]">WEB CORPORATIVA</span>
                <a href="https://dpsoluciones.es/" target="_blank" rel="noopener noreferrer" className="font-body-md text-white hover:text-secondary font-medium">
                  dpsoluciones.es
                </a>
              </li>
              <li>
                <span className="font-label-caps text-gray-400 block text-[10px]">RED PROFESIONAL</span>
                <a href="https://www.linkedin.com/in/digital-marketing-coach-javier-abeleira" target="_blank" rel="noopener noreferrer" className="font-body-md text-white hover:text-secondary font-medium">
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
