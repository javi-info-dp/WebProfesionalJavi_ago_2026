import { Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import { motion } from 'framer-motion';

const pilares = [
  {
    num: "01",
    title: "Visión estratégica para tu carrera",
    desc: "Claridad absoluta en tu propuesta de valor y hacia dónde enfocar tu próximo salto profesional sin dar pasos en falso.",
    img: "/images/2.png"
  },
  {
    num: "02",
    title: "Marketing personal de alto impacto",
    desc: "Construcción de tu CV Estratégico y Portfolio de Liderazgo para que nadie quede indiferente ante tu perfil y trayectoria.",
    img: "/images/3.png"
  },
  {
    num: "03",
    title: "Acceso al mercado oculto",
    desc: "Inteligencia de mercado y conexión directa con oportunidades ejecutivas que nunca se publican en portales convencionales.",
    img: "/images/4.png"
  },
  {
    num: "04",
    title: "Agilidad en la negociación ejecutiva",
    desc: "Técnicas de negociación para cerrar el paquete retributivo, alcance y condiciones que realmente mereces.",
    img: "/images/5.png"
  }
];

const soluciones = [
  {
    tag: "PROGRAMA SIGNATURE",
    title: "BlackBox90©: Cambio de Juego",
    desc: "Programa de coaching y mentoring ejecutivo de 90 días para profesionales senior de marketing digital. Solo 8 plazas exclusivas por edición.",
    link: "/blackbox90",
    cta: "Descubrir el Programa",
    img: "/images/13.png"
  },
  {
    tag: "EMPRESAS & STARTUPS",
    title: "Headhunting & Selección Digital",
    desc: "Atracción de talento directivo y especialista en marketing digital, Growth, Tech e IT con encaje cultural y resultados probados.",
    link: "/servicios",
    cta: "Servicios para Empresas",
    img: "/images/26.png"
  },
  {
    tag: "1:1 ACOMPAÑAMIENTO",
    title: "Mentoring & Outplacement",
    desc: "Sesiones estratégicas individuales para ejecutivos en transición que buscan acelerar su recolocación, narrativa y visibilidad.",
    link: "/servicios",
    cta: "Ver Opciones 1:1",
    img: "/images/30.png"
  }
];

export default function Home() {
  return (
    <AnimatedPage>
      {/* Hero Section */}
      <section className="relative min-h-[94vh] flex items-center justify-center overflow-hidden bg-[#0b0b0e] pt-6 pb-16">
        {/* Glow ambient background effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-secondary/15 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute -top-24 right-10 w-[500px] h-[500px] bg-[#2a2218] rounded-full blur-[140px] pointer-events-none"></div>

        <div className="relative z-10 max-w-container-max mx-auto px-gutter w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          <div className="w-full lg:w-3/5 space-y-8 text-center lg:text-left">
            
            {/* Logo BlackBox90 en Grande */}
            <div className="flex justify-center lg:justify-start items-center gap-4">
              <img 
                src="/images/Logo BlackBox fondo transparente.png" 
                alt="Logo BlackBox90" 
                className="h-20 sm:h-24 md:h-28 w-auto object-contain drop-shadow-[0_0_25px_rgba(201,168,118,0.3)]"
              />
            </div>

            <div className="inline-flex items-center gap-2.5 text-secondary font-label-caps tracking-[0.2em] text-xs font-bold bg-secondary/10 border border-secondary/25 py-2 px-5 rounded-full">
              <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse"></span>
              HEADHUNTER · COACH EMCC · MENTOR EJECUTIVO
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12] font-headline-lg">
              No buscas un trabajo. <br/>
              <span className="text-secondary italic font-serif font-normal">Buscas un cambio de juego.</span>
            </h1>
            
            <p className="font-body-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 text-base md:text-xl leading-relaxed">
              Combino la visión de un headhunter en activo con el rigor de un coach acreditado por EMCC. Ayudo a profesionales de marketing digital a desbloquear su potencial y a empresas a incorporar líderes de alto rendimiento.
            </p>
            
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
                className="border border-white/25 text-white font-label-caps text-xs py-4 px-8 hover:bg-white/5 hover:border-secondary transition-all duration-300 w-full sm:w-auto uppercase text-center tracking-widest rounded-md"
              >
                SESIÓN ESTRATÉGICA
              </a>
            </div>
          </div>
          
          {/* Card BlackBox90 Luxury Glass */}
          <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
            <div className="glass-panel p-8 lg:p-10 rounded-2xl text-white max-w-md w-full relative overflow-hidden group shadow-2xl">
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-secondary/20 rounded-full blur-3xl pointer-events-none"></div>
              
              <div className="flex justify-between items-center mb-6">
                <span className="font-label-caps text-secondary text-xs uppercase tracking-widest font-bold">
                  MÉTODO SIGNATURE
                </span>
                <span className="text-xs bg-secondary/15 text-secondary border border-secondary/30 px-3 py-1 rounded-full font-mono font-semibold">
                  8 PLAZAS
                </span>
              </div>

              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">BlackBox90©</h2>
              <p className="font-body-md text-gray-300 text-sm mb-6 leading-relaxed">
                Laboratorio de estrategia personal de 90 días en 3 fases: Claridad, Construcción de Visibilidad y Validación de Mercado.
              </p>
              
              <div className="space-y-3.5 border-t border-white/[0.08] pt-5 mb-8">
                <div className="flex items-center gap-3 text-sm text-gray-200">
                  <span className="text-secondary font-bold text-base">✓</span>
                  <span>Formato 1:1 (4 coaching + 3 mentoring)</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-200">
                  <span className="text-secondary font-bold text-base">✓</span>
                  <span>CV Estratégico y Portfolio de Liderazgo</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-200">
                  <span className="text-secondary font-bold text-base">✓</span>
                  <span>Acceso directo al mercado oculto de ofertas</span>
                </div>
              </div>
              
              <a 
                href="https://form.typeform.com/to/u1QuphFN" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-center bg-secondary text-[#0b0b0e] font-label-caps py-4 px-6 hover:bg-secondary-hover transition-all font-bold uppercase text-xs tracking-widest rounded-md shadow-lg shadow-secondary/20"
              >
                Postular a una Plaza →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-white/[0.06] bg-[#070709]">
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
          <div className="space-y-1.5">
            <div className="text-4xl md:text-5xl text-secondary font-bold font-headline-lg">+27</div>
            <div className="font-label-caps text-xs text-gray-400 uppercase tracking-widest font-semibold">AÑOS DE EXPERIENCIA</div>
          </div>
          <div className="space-y-1.5">
            <div className="text-4xl md:text-5xl text-secondary font-bold font-headline-lg">+1.000</div>
            <div className="font-label-caps text-xs text-gray-400 uppercase tracking-widest font-semibold">BÚSQUEDAS EJECUTIVAS</div>
          </div>
          <div className="space-y-1.5">
            <div className="text-4xl md:text-5xl text-secondary font-bold font-headline-lg">EMCC</div>
            <div className="font-label-caps text-xs text-gray-400 uppercase tracking-widest font-semibold">COACH PRACTITIONER</div>
          </div>
          <div className="space-y-1.5">
            <div className="text-4xl md:text-5xl text-secondary font-bold font-headline-lg">90 D</div>
            <div className="font-label-caps text-xs text-gray-400 uppercase tracking-widest font-semibold">METODOLOGÍA PROPIA</div>
          </div>
        </div>
      </section>

      {/* Áreas de Acompañamiento */}
      <section className="py-20 lg:py-28 bg-[#0e0e12] border-b border-white/[0.06]">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="font-label-caps text-secondary uppercase tracking-[0.2em] text-xs font-bold">
              SOLUCIONES Y PROGRAMAS
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Áreas de Acompañamiento
            </h2>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              Tanto si buscas transformar tu carrera ejecutiva como si necesitas incorporar líderes que impulsen tu compañía.
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
                className="glass-card p-8 rounded-2xl flex flex-col justify-between group relative overflow-hidden shadow-lg border border-white/[0.08]"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="font-label-caps text-secondary text-xs block tracking-widest font-bold">{sol.tag}</span>
                    <img 
                      src={sol.img} 
                      alt="" 
                      className="w-16 h-16 object-contain opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{sol.title}</h3>
                  <p className="font-body-md text-gray-300 text-sm mb-6 leading-relaxed">{sol.desc}</p>
                </div>
                <Link 
                  to={sol.link}
                  className="inline-flex items-center gap-2 font-label-caps text-secondary font-bold text-xs hover:text-white transition-colors border-b border-secondary/40 pb-1 self-start tracking-wider"
                >
                  {sol.cta} →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 Pilares */}
      <section className="py-20 lg:py-28 bg-[#0b0b0e] border-b border-white/[0.06]">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="font-label-caps text-secondary uppercase tracking-[0.2em] text-xs font-bold">
              METODOLOGÍA DE TRANSFORMACIÓN
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Los 4 Pilares del Cambio de Juego
            </h2>
            <p className="text-gray-300 text-base md:text-lg">
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
                className="glass-card p-7 rounded-2xl flex flex-col justify-between border border-white/[0.06] group"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-headline-md text-secondary text-3xl font-bold">{pilar.num}</span>
                    <img 
                      src={pilar.img} 
                      alt="" 
                      className="w-10 h-10 object-contain opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{pilar.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{pilar.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-[#070709] text-center border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-gutter space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">¿Listo para dar tu siguiente salto profesional?</h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Agenda una reunión estratégica de 30 minutos sin compromiso y evaluemos juntos la mejor vía para ti o tu empresa.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://bookme.name/dpsoluciones/lite/sesion-estrategica-blackbox90-60-minutos" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-secondary text-[#0b0b0e] font-label-caps text-xs py-4 px-9 hover:bg-secondary-hover transition-colors font-bold uppercase tracking-widest shadow-2xl shadow-secondary/20 rounded-md"
            >
              Agendar Sesión Estratégica
            </a>
            <Link 
              to="/contacto"
              className="border border-white/25 text-white font-label-caps text-xs py-4 px-8 hover:bg-white/5 hover:border-secondary transition-colors uppercase tracking-widest rounded-md"
            >
              Contactar por Mensaje
            </Link>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}
