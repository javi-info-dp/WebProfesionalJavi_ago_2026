import { Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import { motion } from 'framer-motion';

const pilares = [
  {
    num: "01",
    title: "Claridad Estratégica & Narrativa",
    desc: "Definición quirúrgica de tu propuesta de valor y tu tesis de liderazgo para que tu perfil destaque de inmediato ante directores generales y comités de selección.",
    img: "/images/2.png"
  },
  {
    num: "02",
    title: "Materiales de Nivel Ejecutivo",
    desc: "Construcción de un CV Estratégico y Portfolio de Liderazgo diseñados bajo los criterios exactos con los que un headhunter evalúa perfiles de alta dirección.",
    img: "/images/3.png"
  },
  {
    num: "03",
    title: "Acceso al Mercado Oculto",
    desc: "Activación de un CRM personal con los 20 o 30 stakeholders decisivos para acceder al 80% de posiciones que nunca llegan a publicarse.",
    img: "/images/4.png"
  },
  {
    num: "04",
    title: "Negociación & Onboarding",
    desc: "Simulaciones intensivas de entrevista ejecutiva y acompañamiento en la negociación del paquete retributivo, alcance y condiciones.",
    img: "/images/5.png"
  }
];

const soluciones = [
  {
    title: "BlackBox90©: Cambio de Juego",
    tag: "PROGRAMA EXCLUSIVO (8 PLAZAS)",
    desc: "Programa de estrategia personal y mentoring 1:1 de 90 días para profesionales senior de marketing digital. Solo 8 plazas exclusivas por edición.",
    link: "/blackbox90",
    cta: "Conocer el Programa",
    img: "/images/13.png",
    bgAccent: "/images/18.png"
  },
  {
    title: "Headhunting & Selección Digital",
    tag: "EMPRESAS & STARTUPS",
    desc: "Executive search especializado en la atracción y selección de directores de marketing, Growth leads y talento IT clave para proyectos en expansión.",
    link: "/servicios",
    cta: "Servicios para Empresas",
    img: "/images/26.png",
    bgAccent: "/images/21.png"
  },
  {
    title: "Mentoring Directivo & Outplacement",
    tag: "ACOMPAÑAMIENTO 1:1",
    desc: "Sesiones estratégicas personalizadas para afinar tu discurso, preparar procesos decisivos o desbloquear transiciones de carrera complejas.",
    link: "/servicios",
    cta: "Ver Opciones 1:1",
    img: "/images/30.png",
    bgAccent: "/images/37.png"
  }
];

const sectores = [
  "SaaS & B2B Tech",
  "E-commerce & D2C",
  "FinTech & InsurTech",
  "MarTech & AdTech",
  "Scaleups & Startups Digitales",
  "Agencias de Alto Rendimiento"
];

export default function Home() {
  return (
    <AnimatedPage>
      {/* Hero Section con Enfoque Dual, Foto de Javier y Logo BlackBox90 */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#0b0b0e] pt-8 pb-20">
        {/* Glows ambient background */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-secondary/15 rounded-full blur-[160px] pointer-events-none"></div>
        <div className="absolute -top-24 right-10 w-[500px] h-[500px] bg-[#2a2218] rounded-full blur-[140px] pointer-events-none"></div>

        <div className="relative z-10 max-w-container-max mx-auto px-gutter w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Columna Izquierda: Mensaje Principal */}
          <div className="w-full lg:w-7/12 space-y-8 text-center lg:text-left">
            
            {/* Logo BlackBox90 en Grande */}
            <div className="flex justify-center lg:justify-start items-center">
              <img 
                src="/images/Logo BlackBox fondo transparente.png" 
                alt="Logo BlackBox90" 
                className="h-20 sm:h-24 md:h-28 w-auto object-contain drop-shadow-[0_0_25px_rgba(201,168,118,0.3)]"
              />
            </div>

            <div className="inline-flex items-center gap-2.5 text-secondary font-label-caps tracking-[0.2em] text-xs font-bold bg-secondary/10 border border-secondary/25 py-2.5 px-5 rounded-full">
              <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse"></span>
              HEADHUNTER EN ACTIVO · COACH EMCC PRACTITIONER
            </div>
            
            {/* Título Principal con Misma Tipografía y Separación de Bloques */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.15]">
              <span className="block mb-2">Estrategia de carrera para</span>
              <span className="block text-secondary">líderes de marketing digital.</span>
            </h1>
            
            {/* Subtítulo con Párrafos Separados */}
            <div className="space-y-4 max-w-2xl mx-auto lg:mx-0 text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
              <p>
                Más de 20 años evaluando talento al otro lado de la mesa.
              </p>
              <p>
                Ayudo a profesionales senior y directivos de marketing digital a desbloquear su verdadero valor de mercado y acceder a las mejores oportunidades ejecutivas.
              </p>
            </div>
            
            {/* Botones de Acción */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 justify-center lg:justify-start">
              <Link 
                to="/blackbox90" 
                className="bg-secondary text-[#0b0b0e] font-label-caps text-xs py-4 px-9 hover:bg-secondary-hover transition-all duration-300 w-full sm:w-auto uppercase text-center font-bold tracking-widest shadow-2xl shadow-secondary/20 rounded-md"
              >
                PROGRAMA BLACKBOX90©
              </Link>
              <a 
                href="https://bookme.name/dpsoluciones/lite/sesion-estrategica-blackbox90-60-minutos" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="border border-white/25 text-white font-label-caps text-xs py-4 px-8 hover:bg-white/5 hover:border-secondary transition-all duration-300 w-full sm:w-auto uppercase text-center tracking-widest rounded-md font-semibold"
              >
                SESIÓN ESTRATÉGICA 1:1
              </a>
            </div>
          </div>
          
          {/* Columna Derecha: Tarjeta Visual con Foto de Javier & Método */}
          <div className="w-full lg:w-5/12 flex justify-center lg:justify-end">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl text-white max-w-md w-full relative overflow-hidden shadow-2xl border border-white/[0.1]">
              
              {/* Foto de Javier Abeleira */}
              <div className="relative w-full h-72 sm:h-80 rounded-2xl overflow-hidden mb-6 border border-secondary/30 shadow-inner group">
                <img 
                  src="/images/03.jpg" 
                  alt="Javier Abeleira - Headhunter & Coach EMCC" 
                  className="w-full h-full object-cover object-top filter grayscale contrast-125 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0e] via-transparent to-transparent"></div>
                
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <div>
                    <span className="text-white font-bold text-lg sm:text-xl block">Javier Abeleira</span>
                    <span className="text-secondary text-xs font-medium">Headhunter & Coach EMCC</span>
                  </div>
                  <span className="bg-secondary text-[#0b0b0e] text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-lg">
                    8 PLAZAS
                  </span>
                </div>
              </div>

              {/* Bloque Destacado BlackBox90 */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-white">Método BlackBox90©</h3>
                  <span className="text-xs text-secondary font-mono font-semibold">90 DÍAS 1:1</span>
                </div>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  Claridad de propuesta de valor, CV Estratégico y acceso directo al mercado oculto de oportunidades de marketing digital.
                </p>
                
                <a 
                  href="https://bookme.name/dpsoluciones/lite/sesion-estrategica-blackbox90-60-minutos" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-center bg-secondary text-[#0b0b0e] font-label-caps py-3.5 px-6 hover:bg-secondary-hover transition-all font-bold uppercase text-xs tracking-widest rounded-md shadow-lg shadow-secondary/20 mt-4"
                >
                  Agendar Sesión de Diagnóstico →
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Stats Section con Orden Invertido (Etiqueta Arriba, Cifra Abajo) */}
      <section className="py-16 border-y border-white/[0.08] bg-[#070709]">
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
          <div className="space-y-2">
            <div className="font-label-caps text-xs sm:text-sm text-gray-300 uppercase tracking-widest font-semibold">AÑOS DE EXPERIENCIA</div>
            <div className="text-4xl md:text-5xl text-secondary font-bold font-headline-lg">Más de 20</div>
          </div>
          <div className="space-y-2">
            <div className="font-label-caps text-xs sm:text-sm text-gray-300 uppercase tracking-widest font-semibold">PROCESOS DE SELECCIÓN</div>
            <div className="text-4xl md:text-5xl text-secondary font-bold font-headline-lg">Más de 1.000</div>
          </div>
          <div className="space-y-2">
            <div className="font-label-caps text-xs sm:text-sm text-gray-300 uppercase tracking-widest font-semibold">COACH PRACTITIONER</div>
            <div className="text-4xl md:text-5xl text-secondary font-bold font-headline-lg">EMCC</div>
          </div>
          <div className="space-y-2">
            <div className="font-label-caps text-xs sm:text-sm text-gray-300 uppercase tracking-widest font-semibold">MÉTODO PROBADO</div>
            <div className="text-4xl md:text-5xl text-secondary font-bold font-headline-lg">90 Días</div>
          </div>
        </div>
      </section>

      {/* Bloque de Autoridad: "La Perspectiva Real del Headhunter" con Foto de Javier */}
      <section className="py-20 lg:py-28 bg-[#0b0b0e] border-b border-white/[0.08]">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="glass-panel p-8 sm:p-12 lg:p-16 rounded-3xl border border-white/[0.1] grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Foto de Javier en primer plano */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm rounded-2xl overflow-hidden border-2 border-secondary/40 shadow-2xl">
                <img 
                  src="/images/08.jpg" 
                  alt="Javier Abeleira" 
                  className="w-full h-96 object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-white font-bold text-lg block">Javier Abeleira</span>
                  <span className="text-secondary text-xs">Fundador DP Soluciones · BlackBox90©</span>
                </div>
              </div>
            </div>

            {/* Texto de Autoridad con Párrafos Separados */}
            <div className="lg:col-span-7 space-y-6">
              <span className="font-label-caps text-secondary uppercase tracking-[0.25em] text-xs sm:text-sm font-bold block">
                VENTAJA DIFERENCIAL
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-snug">
                Conozco ambos lados de la mesa: sé qué busca el reclutador y cómo debe sonar tu propuesta.
              </h2>
              
              <div className="space-y-4 text-gray-300 text-base sm:text-lg leading-relaxed">
                <p>
                  La mayoría de los profesionales senior cometen el error de enviar CVs generalistas o depender únicamente de portales de empleo donde compiten con cientos de candidatos.
                </p>
                <p>
                  Al haber liderado procesos de selección para startups y comités de dirección durante más de dos décadas, te enseño a posicionarte desde la perspectiva de quien toma la decisión de contratación.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="glass-card p-5 rounded-xl border border-white/[0.08]">
                  <span className="text-secondary font-bold text-base block mb-1">Sin Fórmulas Mágicas</span>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">Estrategia basada en datos, psicología de decisión ejecutiva y métricas de negocio.</p>
                </div>
                <div className="glass-card p-5 rounded-xl border border-white/[0.08]">
                  <span className="text-secondary font-bold text-base block mb-1">Relación Directa y Sincera</span>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">Feedback riguroso y constructivo para elevar tu nivel de competitividad en el mercado.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Soluciones y Programas */}
      <section className="py-20 lg:py-28 bg-[#0e0e12] border-b border-white/[0.08]">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Soluciones y Programas
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Soluciones a medida para profesionales que buscan un salto cualitativo y para empresas que necesitan líderes contrastados.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {soluciones.map((sol, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-8 sm:p-10 rounded-3xl flex flex-col justify-between group relative overflow-hidden shadow-2xl border border-white/[0.1]"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">{sol.title}</h3>
                    <img 
                      src={sol.img} 
                      alt="" 
                      className="w-16 h-16 sm:w-20 sm:h-20 object-contain opacity-85 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 shrink-0 ml-4"
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                  </div>
                  <span className="font-label-caps text-secondary text-xs sm:text-sm block tracking-widest font-bold mb-4">{sol.tag}</span>
                  <p className="text-gray-300 text-sm sm:text-base mb-8 leading-relaxed">{sol.desc}</p>
                </div>
                <Link 
                  to={sol.link}
                  className="inline-flex items-center gap-2 font-label-caps text-secondary font-bold text-xs sm:text-sm hover:text-white transition-colors border-b border-secondary/40 pb-1 self-start tracking-wider"
                >
                  {sol.cta} →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Los 4 Pilares del Cambio de Juego */}
      <section className="py-20 lg:py-28 bg-[#0b0b0e] border-b border-white/[0.08]">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Los 4 Pilares del Cambio de Juego
            </h2>
            <p className="text-gray-300 text-base sm:text-lg">
              Los fundamentos que aseguran un posicionamiento sólido, diferencial y sostenible en el mercado.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pilares.map((pilar, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="glass-card p-8 rounded-3xl flex flex-col justify-between border border-white/[0.08] group shadow-xl"
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-3xl sm:text-4xl font-bold text-secondary">{pilar.num}</span>
                    <img 
                      src={pilar.img} 
                      alt="" 
                      className="w-12 h-12 object-contain opacity-75 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">{pilar.title}</h3>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{pilar.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectores de Especialización */}
      <section className="py-20 bg-[#070709] border-b border-white/[0.08]">
        <div className="max-w-container-max mx-auto px-gutter text-center">
          <span className="font-label-caps text-secondary text-xs sm:text-sm uppercase tracking-[0.25em] font-bold block mb-6">
            SECTORES EN LOS QUE APLICA BLACKBOX90©
          </span>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
            {sectores.map((sec, idx) => (
              <span key={idx} className="bg-white/[0.04] border border-white/[0.1] text-gray-200 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium hover:border-secondary/50 transition-colors">
                {sec}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final con Foto de Javier & Reserva Directa */}
      <section className="py-24 bg-[#0b0b0e] text-center">
        <div className="max-w-3xl mx-auto px-gutter space-y-6">
          <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-secondary shadow-lg mb-2">
            <img src="/images/05.jpg" alt="Javier Abeleira" className="w-full h-full object-cover" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            ¿Listo para definir tu siguiente gran proyecto?
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Agenda una sesión estratégica confidencial de 60 minutos y analicemos tu situación profesional actual para trazar la mejor hoja de ruta.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://bookme.name/dpsoluciones/lite/sesion-estrategica-blackbox90-60-minutos" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-secondary text-[#0b0b0e] font-label-caps text-xs sm:text-sm py-4 px-9 hover:bg-secondary-hover transition-colors font-bold uppercase tracking-widest shadow-2xl shadow-secondary/20 rounded-md"
            >
              Agendar Sesión Estratégica
            </a>
            <Link 
              to="/contacto"
              className="border border-white/25 text-white font-label-caps text-xs sm:text-sm py-4 px-8 hover:bg-white/5 hover:border-secondary transition-colors uppercase tracking-widest rounded-md font-semibold"
            >
              Contactar por Mensaje
            </Link>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}
