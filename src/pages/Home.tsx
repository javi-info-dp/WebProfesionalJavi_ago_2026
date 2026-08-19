import { Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import { motion } from 'framer-motion';

const pilares = [
  {
    num: "01",
    title: "Visión estratégica para tu carrera",
    desc: "Claridad absoluta en tu propuesta de valor y hacia dónde enfocar tu próximo salto profesional sin dar pasos en falso."
  },
  {
    num: "02",
    title: "Marketing personal de alto impacto",
    desc: "Construcción de tu CV Estratégico y Portfolio de Liderazgo para que nadie quede indiferente ante tu perfil y trayectoria."
  },
  {
    num: "03",
    title: "Acceso al mercado oculto",
    desc: "Inteligencia de mercado y conexión directa con oportunidades ejecutivas que nunca se publican en portales convencionales."
  },
  {
    num: "04",
    title: "Agilidad en la negociación ejecutiva",
    desc: "Técnicas de negociación para cerrar el paquete retributivo, alcance y condiciones que realmente mereces."
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
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#0b0b0e]">
        {/* Glow ambient effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-secondary/10 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute -top-24 right-10 w-[400px] h-[400px] bg-[#221c14] rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative z-10 max-w-container-max mx-auto px-gutter w-full flex flex-col lg:flex-row items-center gap-12 py-16">
          <div className="w-full lg:w-3/5 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2.5 text-secondary font-label-caps tracking-[0.2em] text-xs font-bold bg-secondary/10 border border-secondary/20 py-1.5 px-4 rounded-full">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              HEADHUNTER · COACH EMCC · MENTOR EJECUTIVO
            </div>
            
            <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-white tracking-tight leading-[1.1]">
              No buscas un trabajo. <br/>
              <span className="text-secondary italic">Buscas un cambio de juego.</span>
            </h1>
            
            <p className="font-body-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 text-base md:text-lg leading-relaxed">
              Combino la visión de un headhunter en activo con el rigor de un coach acreditado por EMCC. Ayudo a profesionales de marketing digital a desbloquear su verdadero potencial y a empresas a construir equipos ganadores.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 justify-center lg:justify-start">
              <Link 
                to="/blackbox90" 
                className="bg-secondary text-[#0b0b0e] font-label-caps text-xs py-4 px-8 hover:bg-secondary-hover transition-all duration-300 w-full sm:w-auto uppercase text-center font-bold tracking-widest shadow-xl shadow-secondary/15"
              >
                PROGRAMA BLACKBOX90©
              </Link>
              <a 
                href="https://bookme.name/dpsoluciones/lite/sesion-estrategica-blackbox90-60-minutos" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="border border-white/20 text-white font-label-caps text-xs py-4 px-8 hover:bg-white/5 hover:border-secondary transition-all duration-300 w-full sm:w-auto uppercase text-center tracking-widest"
              >
                SESIÓN ESTRATÉGICA
              </a>
            </div>
          </div>
          
          {/* Card BlackBox90 Luxury Glass */}
          <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
            <div className="glass-panel p-8 lg:p-10 rounded-xl text-white max-w-md w-full relative overflow-hidden group">
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-secondary/15 rounded-full blur-2xl pointer-events-none"></div>
              
              <div className="flex justify-between items-center mb-4">
                <span className="font-label-caps text-secondary text-[11px] uppercase tracking-widest font-bold">
                  MÉTODO SIGNATURE
                </span>
                <span className="text-[10px] bg-secondary/15 text-secondary border border-secondary/30 px-2 py-0.5 rounded font-mono">
                  8 PLAZAS
                </span>
              </div>

              <h2 className="font-headline-md text-white text-2xl mb-3">BlackBox90©</h2>
              <p className="font-body-md text-gray-300 text-sm mb-6 leading-relaxed">
                Laboratorio de estrategia personal de 90 días en 3 fases: Claridad, Construcción de Visibilidad y Validación de Mercado.
              </p>
              
              <div className="space-y-3 border-t border-white/[0.08] pt-4 mb-6">
                <div className="flex items-center gap-3 text-xs text-gray-200">
                  <span className="text-secondary font-bold">✓</span>
                  <span>Formato 1:1 personalizado (coaching + mentoring)</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-200">
                  <span className="text-secondary font-bold">✓</span>
                  <span>CV Estratégico y Portfolio de Liderazgo</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-200">
                  <span className="text-secondary font-bold">✓</span>
                  <span>Acceso directo al mercado oculto de ofertas</span>
                </div>
              </div>
              
              <a 
                href="https://form.typeform.com/to/u1QuphFN" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-center bg-secondary text-[#0b0b0e] font-label-caps py-3.5 px-6 hover:bg-secondary-hover transition-colors font-bold uppercase text-xs tracking-wider"
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
          <div className="space-y-1">
            <div className="font-display-lg-mobile text-3xl md:text-4xl text-secondary font-bold">+27</div>
            <div className="font-label-caps text-xs text-gray-400 uppercase tracking-wider">AÑOS DE EXPERIENCIA</div>
          </div>
          <div className="space-y-1">
            <div className="font-display-lg-mobile text-3xl md:text-4xl text-secondary font-bold">+1.000</div>
            <div className="font-label-caps text-xs text-gray-400 uppercase tracking-wider">BÚSQUEDAS EJECUTIVAS</div>
          </div>
          <div className="space-y-1">
            <div className="font-display-lg-mobile text-3xl md:text-4xl text-secondary font-bold">EMCC</div>
            <div className="font-label-caps text-xs text-gray-400 uppercase tracking-wider">COACH PRACTITIONER</div>
          </div>
          <div className="space-y-1">
            <div className="font-display-lg-mobile text-3xl md:text-4xl text-secondary font-bold">90 D</div>
            <div className="font-label-caps text-xs text-gray-400 uppercase tracking-wider">METODOLOGÍA PROPIA</div>
          </div>
        </div>
      </section>

      {/* Ecosistema de Soluciones */}
      <section className="py-section-padding-mobile md:py-section-padding-desktop bg-[#0e0e12] border-b border-white/[0.06]">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-label-caps text-secondary uppercase tracking-widest text-xs">SOLUCIONES A MEDIDA</span>
            <h2 className="font-headline-lg text-white mt-2">Áreas de Acompañamiento</h2>
            <p className="font-body-md text-gray-400 mt-2 text-sm">
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
                className="glass-card p-8 rounded-xl flex flex-col justify-between group relative overflow-hidden"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="font-label-caps text-secondary text-[11px] block tracking-wider font-bold">{sol.tag}</span>
                    <img 
                      src={sol.img} 
                      alt="" 
                      className="w-12 h-12 object-contain opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                  </div>
                  <h3 className="font-headline-sm text-white mb-3 text-lg font-bold">{sol.title}</h3>
                  <p className="font-body-md text-gray-300 text-sm mb-6 leading-relaxed">{sol.desc}</p>
                </div>
                <Link 
                  to={sol.link}
                  className="inline-flex items-center gap-2 font-label-caps text-secondary font-bold text-xs hover:text-white transition-colors border-b border-secondary/40 pb-1 self-start"
                >
                  {sol.cta} →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 Pilares */}
      <section className="py-section-padding-mobile md:py-section-padding-desktop bg-[#0b0b0e] border-b border-white/[0.06]">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-label-caps text-secondary uppercase tracking-widest text-xs">METODOLOGÍA</span>
            <h2 className="font-headline-lg text-white mt-2">Los 4 Pilares del Cambio de Juego</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pilares.map((pilar, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="glass-card p-6 rounded-xl flex flex-col justify-between"
              >
                <div>
                  <span className="font-headline-md text-secondary text-2xl mb-3 block font-bold">{pilar.num}</span>
                  <h3 className="font-headline-sm text-white mb-3 text-base font-bold">{pilar.title}</h3>
                  <p className="font-body-md text-gray-400 text-xs leading-relaxed">{pilar.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-[#070709] text-center border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-gutter space-y-6">
          <h2 className="font-headline-lg text-white text-3xl md:text-4xl">¿Listo para dar tu siguiente salto profesional?</h2>
          <p className="font-body-lg text-gray-300 text-sm md:text-base">
            Agenda una reunión estratégica de 30 minutos sin compromiso y evaluemos juntos la mejor vía para ti o tu empresa.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://bookme.name/dpsoluciones/lite/sesion-estrategica-blackbox90-60-minutos" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-secondary text-[#0b0b0e] font-label-caps text-xs py-4 px-8 hover:bg-secondary-hover transition-colors font-bold uppercase tracking-widest shadow-xl shadow-secondary/15"
            >
              Agendar Sesión Estratégica
            </a>
            <Link 
              to="/contacto"
              className="border border-white/20 text-white font-label-caps text-xs py-4 px-8 hover:bg-white/5 hover:border-secondary transition-colors uppercase tracking-widest"
            >
              Contactar por Mensaje
            </Link>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}
