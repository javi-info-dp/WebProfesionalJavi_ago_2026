import AnimatedPage from '../components/AnimatedPage';

export default function Contact() {
  return (
    <AnimatedPage>
      <div className="max-w-container-max mx-auto px-gutter py-section-desktop grid grid-cols-1 lg:grid-cols-12 gap-10 bg-[#0b0b0e]">
        
        {/* Formulario de Contacto Principal */}
        <div className="col-span-1 lg:col-span-8 glass-panel p-8 sm:p-12 lg:p-14 rounded-3xl shadow-2xl border border-white/[0.1]">
          <span className="font-label-caps text-secondary text-xs sm:text-sm uppercase block mb-2 font-bold tracking-[0.25em]">
            INICIAR CONVERSACIÓN
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Hablemos de tu reto o proyecto
          </h1>
          <p className="text-gray-300 mb-10 leading-relaxed text-base sm:text-lg">
            Tanto si eres un profesional senior de marketing digital buscando tu próximo gran salto como si eres una empresa que necesita incorporar talento directivo clave.
          </p>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label htmlFor="fullName" className="font-label-caps text-secondary mb-2 text-xs sm:text-sm font-bold">NOMBRE Y APELLIDOS</label>
                <input type="text" id="fullName" name="fullName" className="elegant-input" placeholder="Tu nombre completo" required />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="font-label-caps text-secondary mb-2 text-xs sm:text-sm font-bold">CORREO ELECTRÓNICO</label>
                <input type="email" id="email" name="email" className="elegant-input" placeholder="tu.email@empresa.com" required />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label htmlFor="perfil" className="font-label-caps text-secondary mb-2 text-xs sm:text-sm font-bold">TIPO DE CONSULTA</label>
                <select id="perfil" name="perfil" className="elegant-input bg-[#16161e] cursor-pointer text-sm">
                  <option value="" disabled selected>Selecciona tu situación...</option>
                  <option value="blackbox">Soy Profesional Senior: Información sobre BlackBox90©</option>
                  <option value="mentoring">Soy Profesional Senior: Mentoring 1:1 / Outplacement</option>
                  <option value="headhunting">Soy Empresa / Startup: Búsqueda de Talento Directivo</option>
                  <option value="formacion">Soy Empresa: Formación In-Company / Liderazgo</option>
                  <option value="otro">Otra consulta general</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="phone" className="font-label-caps text-secondary mb-2 text-xs sm:text-sm font-bold">TELÉFONO O LINKEDIN</label>
                <input type="text" id="phone" name="phone" className="elegant-input" placeholder="+34 ... o url de LinkedIn" />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="font-label-caps text-secondary mb-2 text-xs sm:text-sm font-bold">¿EN QUÉ PUNTO TE ENCUENTRAS Y CÓMO TE PUEDO AYUDAR?</label>
              <textarea id="message" name="message" rows={4} className="elegant-input resize-none" placeholder="Cuéntame brevemente tu situación actual o las características de la posición a cubrir..." required></textarea>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-white/[0.08]">
              <span className="text-xs sm:text-sm text-gray-300">Respuesta personalizada y confidencial en menos de 24h</span>
              <button type="submit" className="bg-secondary text-[#0b0b0e] font-label-caps text-xs sm:text-sm py-4 px-9 hover:bg-secondary-hover transition-colors uppercase tracking-widest font-bold rounded-md shadow-lg shadow-secondary/20 w-full sm:w-auto">
                ENVIAR MENSAJE
              </button>
            </div>
          </form>
        </div>

        {/* Canales Directos & Reservas */}
        <div className="col-span-1 lg:col-span-4 flex flex-col gap-6">
          
          {/* Card con Foto de Javier y Sesión Estratégica en Bookme */}
          <div className="glass-panel p-8 rounded-3xl text-white border-secondary/40 shadow-2xl">
            <div className="flex items-center gap-4 mb-5">
              <img src="/images/01.jpg" alt="Javier Abeleira" className="w-16 h-16 rounded-full object-cover border-2 border-secondary shadow-md" />
              <div>
                <span className="font-label-caps text-secondary text-xs block font-bold">AGENDA DIRECTA</span>
                <span className="text-white font-bold text-lg block">Javier Abeleira</span>
              </div>
            </div>
            
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Sesión Estratégica 1:1</h3>
            <p className="text-gray-300 text-xs sm:text-sm mb-6 leading-relaxed">
              Agenda directamente en mi calendario una videollamada de 60 minutos sin compromiso para evaluar tu caso.
            </p>
            <a
              href="https://bookme.name/dpsoluciones/lite/sesion-estrategica-blackbox90-60-minutos"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-secondary text-[#0b0b0e] font-label-caps py-4 px-6 hover:bg-secondary-hover transition-colors font-bold uppercase text-xs sm:text-sm tracking-widest rounded-md shadow-lg shadow-secondary/15"
            >
              Agendar en Bookme (60 min) →
            </a>
          </div>

          {/* Postulación BlackBox90 */}
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/[0.08]">
            <span className="font-label-caps text-secondary text-xs block mb-1 font-bold">PROGRAMA BLACKBOX90©</span>
            <h4 className="text-lg sm:text-xl font-bold text-white mb-2">Solicitud de Plaza</h4>
            <p className="text-gray-300 text-xs sm:text-sm mb-4 leading-relaxed">
              Formulario de postulación directa para acceder a una de las 8 plazas exclusivas por edición.
            </p>
            <a
              href="https://form.typeform.com/to/u1QuphFN"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary font-label-caps text-xs sm:text-sm font-bold hover:underline block"
            >
              Acceder al Formulario →
            </a>
          </div>

          {/* Datos Directos */}
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/[0.08]">
            <h4 className="text-lg sm:text-xl font-bold text-white mb-4">Datos de Contacto</h4>
            <ul className="space-y-4 text-xs sm:text-sm">
              <li>
                <span className="font-label-caps text-gray-400 block text-[11px]">CORREO ELECTRÓNICO</span>
                <a href="mailto:javier@dpsoluciones.es" className="text-white hover:text-secondary font-medium">
                  javier@dpsoluciones.es
                </a>
              </li>
              <li>
                <span className="font-label-caps text-gray-400 block text-[11px]">WEB CORPORATIVA</span>
                <a href="https://dpsoluciones.es/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary font-medium">
                  dpsoluciones.es
                </a>
              </li>
              <li>
                <span className="font-label-caps text-gray-400 block text-[11px]">RED PROFESIONAL</span>
                <a href="https://www.linkedin.com/in/digital-marketing-coach-javier-abeleira" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary font-medium">
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
