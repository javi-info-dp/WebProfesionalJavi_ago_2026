import { Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import { motion } from 'framer-motion';

const pilares = [
  {
    num: "01",
    title: "Visión estratégica para tu carrera",
    desc: "Claridad absoluta en tu propuesta de valor y hacia dónde enfocar tu próximo salto profesional."
  },
  {
    num: "02",
    title: "Marketing personal de alto impacto",
    desc: "Empaquetar todo tu expertise para que nadie se quede indiferente ante tu perfil y discurso."
  },
  {
    num: "03",
    title: "Inteligencia de mercado",
    desc: "Acceso a oportunidades reales y dinámicas de selección desde la perspectiva de un headhunter en activo."
  },
  {
    num: "04",
    title: "Agilidad y poder de negociación",
    desc: "Estrategias para cerrar las condiciones, responsabilidades y el acuerdo económico que mereces."
  }
];

export default function Home() {
  return (
    <AnimatedPage>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="bg-cover bg-center bg-no-repeat w-full h-full opacity-30" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAcL6ra7zPQRddIs4fGwJPe1VSexNJtOcxlMzcJTcEvzWZjJY22Cee-AvKHSOIKv8a3A-vQzCTtP2amwUGny9lm4CzrsD2B335DCBND7_woZvQjpCmMo0UN-IMdEbEbw5djrt12pdl3eiLlycNxkiDqIScZUAJIywc8Z4Zl1-VSpXtc5_5FvnHzyFNJD5oXu-2ZX5aiGrMSPHsK-JzQmWGdsdov_GlJfxZh3rTYamdhYpVUvej3mvtX8A')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-container-max mx-auto px-gutter w-full flex flex-col lg:flex-row items-center gap-stack-lg py-12">
          <div className="w-full lg:w-3/5 space-y-stack-lg text-center lg:text-left">
            <div className="inline-flex items-center gap-stack-sm text-secondary font-label-caps tracking-widest mb-stack-md" style={{ fontSize: '14px', lineHeight: '20px', letterSpacing: '0.12em', fontWeight: 700 }}>
              <span className="w-8 h-[1px] bg-secondary"></span>
              HEADHUNTER & EXECUTIVE COACH (EMCC)
            </div>
            <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary tracking-tight">
              Estrategia y liderazgo para profesionales de <span className="text-secondary italic">marketing digital</span>.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto lg:mx-0">
              Combino la visión de un headhunter en activo con el rigor de un coach acreditado por EMCC. Acompaño a profesionales senior a conseguir en 90 días oportunidades y proyectos alineados con su propósito y expertise.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-stack-md pt-stack-md justify-center lg:justify-start">
              <Link to="/programas" className="bg-primary text-on-primary font-label-caps text-label-caps py-4 px-8 hover:bg-secondary transition-colors duration-300 w-full sm:w-auto uppercase text-center">
                PROGRAMA BLACKBOX90©
              </Link>
              <a 
                href="https://bookme.name/dpsoluciones/lite/llamada-de-contacto" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="border border-secondary text-primary font-label-caps text-label-caps py-4 px-8 hover:bg-secondary/10 transition-colors duration-300 w-full sm:w-auto uppercase text-center"
              >
                REUNIÓN GRATUITA
              </a>
            </div>
          </div>
          
          {/* Card Destacada / BlackBox90 */}
          <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
            <div className="bg-primary-container p-8 lg:p-10 rounded border border-primary-fixed/20 text-on-primary max-w-md w-full shadow-xl">
              <span className="font-label-caps text-secondary-container block mb-2">METODOLOGÍA EXCLUSIVA</span>
              <h2 className="font-headline-md text-on-primary mb-4">BlackBox90©</h2>
              <p className="font-body-md text-on-primary-container mb-6">
                Un laboratorio de estrategia personal de 90 días: 4 sesiones de coaching + 3 de mentoring 1:1 para construir tu cambio de juego.
              </p>
              <div className="space-y-3 border-t border-outline-navy pt-4">
                <div className="flex items-center gap-2 font-label-sm text-secondary-container">
                  <span>✔</span>
                  <span>Solo 8 plazas por edición</span>
                </div>
                <div className="flex items-center gap-2 font-label-sm text-secondary-container">
                  <span>✔</span>
                  <span>Formato 1:1 personalizado</span>
                </div>
              </div>
              <a 
                href="https://form.typeform.com/to/u1QuphFN" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-6 block text-center bg-secondary-container text-on-secondary-fixed font-label-caps py-3 px-6 hover:bg-secondary-fixed transition-colors font-bold uppercase"
              >
                Solicitar Plaza
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-section-padding-mobile md:py-section-padding-desktop border-t border-outline-variant/30">
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-2 md:grid-cols-4 gap-stack-lg text-center md:text-left">
          <div className="space-y-stack-sm">
            <div className="font-display-lg-mobile text-display-lg-mobile text-secondary">+27</div>
            <div className="font-label-caps text-label-caps text-on-surface-variant uppercase">AÑOS DE EXPERIENCIA</div>
          </div>
          <div className="space-y-stack-sm">
            <div className="font-display-lg-mobile text-display-lg-mobile text-secondary">90</div>
            <div className="font-label-caps text-label-caps text-on-surface-variant uppercase">DÍAS BLACKBOX90©</div>
          </div>
          <div className="space-y-stack-sm">
            <div className="font-display-lg-mobile text-display-lg-mobile text-secondary">EMCC</div>
            <div className="font-label-caps text-label-caps text-on-surface-variant uppercase">COACH ACREDITADO</div>
          </div>
          <div className="space-y-stack-sm">
            <div className="font-display-lg-mobile text-display-lg-mobile text-secondary">1:1</div>
            <div className="font-label-caps text-label-caps text-on-surface-variant uppercase">ACOMPAÑAMIENTO TAILOR-MADE</div>
          </div>
        </div>
      </section>

      {/* 4 Pilares */}
      <section className="py-section-padding-mobile md:py-section-padding-desktop bg-surface-container-low border-t border-outline-variant/30">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-label-caps text-secondary uppercase">Pilares de Transformación</span>
            <h2 className="font-headline-lg text-primary mt-2">Cómo construimos tu cambio de juego</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pilares.map((pilar, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-surface-container-lowest p-6 border border-outline-variant/30 flex flex-col justify-between hover:border-secondary transition-colors"
              >
                <div>
                  <span className="font-headline-md text-secondary mb-3 block">{pilar.num}</span>
                  <h3 className="font-headline-sm text-primary mb-3 text-lg font-bold">{pilar.title}</h3>
                  <p className="font-body-md text-on-surface-variant text-sm">{pilar.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}
