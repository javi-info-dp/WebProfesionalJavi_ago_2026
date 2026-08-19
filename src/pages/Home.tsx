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
    desc: "Construcción de tu CV Estratégico y Portfolio de Liderazgo para que nadie quede indiferente ante tu perfil."
  },
  {
    num: "03",
    title: "Acceso al mercado oculto",
    desc: "Inteligencia de mercado y conexión directa con oportunidades que nunca se publican en portales convencionales."
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
    desc: "Programa de coaching y mentoring ejecutivo de 90 días para profesionales senior de marketing digital. Solo 8 plazas por edición.",
    link: "/blackbox90",
    cta: "Descubrir el Programa"
  },
  {
    tag: "EMPRESAS & STARTUPS",
    title: "Headhunting & Selección Digital",
    desc: "Atracción de talento directivo y especialista en marketing digital, Growth, Tech e IT con encaje cultural y resultados inmediatos.",
    link: "/servicios",
    cta: "Servicios para Empresas"
  },
  {
    tag: "1:1 ACOMPAÑAMIENTO",
    title: "Mentoring & Outplacement",
    desc: "Sesiones estratégicas individuales para ejecutivos en transición que buscan acelerar su recolocación y visibilidad.",
    link: "/servicios",
    cta: "Ver Opciones 1:1"
  }
];

export default function Home() {
  return (
    <AnimatedPage>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="bg-cover bg-center bg-no-repeat w-full h-full opacity-25" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAcL6ra7zPQRddIs4fGwJPe1VSexNJtOcxlMzcJTcEvzWZjJY22Cee-AvKHSOIKv8a3A-vQzCTtP2amwUGny9lm4CzrsD2B335DCBND7_woZvQjpCmMo0UN-IMdEbEbw5djrt12pdl3eiLlycNxkiDqIScZUAJIywc8Z4Zl1-VSpXtc5_5FvnHzyFNJD5oXu-2ZX5aiGrMSPHsK-JzQmWGdsdov_GlJfxZh3rTYamdhYpVUvej3mvtX8A')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-container-max mx-auto px-gutter w-full flex flex-col lg:flex-row items-center gap-stack-lg py-16">
          <div className="w-full lg:w-3/5 space-y-stack-lg text-center lg:text-left">
            <div className="inline-flex items-center gap-stack-sm text-secondary font-label-caps tracking-widest mb-stack-md" style={{ fontSize: '13px', lineHeight: '20px', letterSpacing: '0.14em', fontWeight: 700 }}>
              <span className="w-8 h-[1px] bg-secondary"></span>
              HEADHUNTER · COACH EMCC · MENTOR EJECUTIVO
            </div>
            
            <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary tracking-tight">
              No buscas un trabajo. <br/>
              <span className="text-secondary italic">Buscas un cambio de juego.</span>
            </h1>
            
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto lg:mx-0">
              Combino la visión de un headhunter en activo con el rigor de un coach acreditado por EMCC. Ayudo a profesionales de marketing digital a desbloquear su potencial y a empresas a construir equipos ganadores.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-stack-md pt-stack-md justify-center lg:justify-start">
              <Link to="/blackbox90" className="bg-primary text-on-primary font-label-caps text-label-caps py-4 px-8 hover:bg-secondary transition-colors duration-300 w-full sm:w-auto uppercase text-center shadow-lg">
                PROGRAMA BLACKBOX90©
              </Link>
              <a 
                href="https://bookme.name/dpsoluciones/lite/sesion-estrategica-blackbox90-60-minutos" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="border border-secondary text-primary font-label-caps text-label-caps py-4 px-8 hover:bg-secondary/10 transition-colors duration-300 w-full sm:w-auto uppercase text-center"
              >
                SESIÓN ESTRATÉGICA
              </a>
            </div>
          </div>
          
          {/* Card BlackBox90 Destacada */}
          <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
            <div className="bg-primary-container p-8 lg:p-10 rounded border border-primary-fixed/20 text-on-primary max-w-md w-full shadow-2xl relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/20 rounded-full blur-2xl pointer-events-none"></div>
              
              <span className="font-label-caps text-secondary-container text-xs block mb-2 tracking-wider">MÉTODO SIGNATURE</span>
              <h2 className="font-headline-md text-on-primary mb-3">BlackBox90©</h2>
              <p className="font-body-md text-on-primary-container text-sm mb-6 leading-relaxed">
                Laboratorio de estrategia personal de 90 días en 3 fases: Claridad, Construcción de Visibilidad y Validación de Mercado.
              </p>
              
              <div className="space-y-2.5 border-t border-outline-navy pt-4 mb-6">
                <div className="flex items-center gap-2.5 text-xs text-secondary-container">
                  <span className="text-sm">✓</span>
                  <span>Diagnóstico personalizado en 6 dimensiones</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-secondary-container">
                  <span className="text-sm">✓</span>
                  <span>Formato 1:1 (4 coaching + 3 mentoring)</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-secondary-container">
                  <span className="text-sm">✓</span>
                  <span>Solo 8 plazas exclusivas por edición</span>
                </div>
              </div>
              
              <a 
                href="https://form.typeform.com/to/RH3SPk3R" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-center bg-secondary-container text-on-secondary-fixed font-label-caps py-3.5 px-6 hover:bg-secondary-fixed transition-colors font-bold uppercase text-xs tracking-wider"
              >
                Autodiagnóstico (Scorecard) →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-section-padding-mobile md:py-section-padding-desktop border-t border-outline-variant/30 bg-surface">
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-2 md:grid-cols-4 gap-stack-lg text-center md:text-left">
          <div className="space-y-stack-sm">
            <div className="font-display-lg-mobile text-display-lg-mobile text-secondary">+27</div>
            <div className="font-label-caps text-label-caps text-on-surface-variant uppercase">AÑOS DE EXPERIENCIA</div>
          </div>
          <div className="space-y-stack-sm">
            <div className="font-display-lg-mobile text-display-lg-mobile text-secondary">+1.000</div>
            <div className="font-label-caps text-label-caps text-on-surface-variant uppercase">BÚSQUEDAS EJECUTIVAS</div>
          </div>
          <div className="space-y-stack-sm">
            <div className="font-display-lg-mobile text-display-lg-mobile text-secondary">EMCC</div>
            <div className="font-label-caps text-label-caps text-on-surface-variant uppercase">COACH PRACTITIONER</div>
          </div>
          <div className="space-y-stack-sm">
            <div className="font-display-lg-mobile text-display-lg-mobile text-secondary">90 D</div>
            <div className="font-label-caps text-label-caps text-on-surface-variant uppercase">METODOLOGÍA PROPIA</div>
          </div>
        </div>
      </section>

      {/* Soluciones Unificadas */}
      <section className="py-section-padding-mobile md:py-section-padding-desktop bg-surface-container-low border-t border-outline-variant/30">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-label-caps text-secondary uppercase tracking-widest">ECOSISTEMA DE SERVICIOS</span>
            <h2 className="font-headline-lg text-primary mt-2">Soluciones de Alto Impacto</h2>
            <p className="font-body-md text-on-surface-variant mt-2">
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
                className="bg-surface-container-lowest p-8 border border-outline-variant/30 flex flex-col justify-between hover:border-secondary transition-all duration-300 group shadow-sm"
              >
                <div>
                  <span className="font-label-caps text-secondary text-xs block mb-2">{sol.tag}</span>
                  <h3 className="font-headline-sm text-primary mb-3">{sol.title}</h3>
                  <p className="font-body-md text-on-surface-variant text-sm mb-6 leading-relaxed">{sol.desc}</p>
                </div>
                <Link 
                  to={sol.link}
                  className="inline-flex items-center gap-2 font-label-caps text-secondary font-bold text-xs hover:text-primary transition-colors border-b border-secondary/40 pb-1 self-start"
                >
                  {sol.cta} →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 Pilares */}
      <section className="py-section-padding-mobile md:py-section-padding-desktop border-t border-outline-variant/30">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-label-caps text-secondary uppercase tracking-widest">METODOLOGÍA</span>
            <h2 className="font-headline-lg text-primary mt-2">Los 4 Pilares del Cambio de Juego</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pilares.map((pilar, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
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

      {/* CTA Final */}
      <section className="py-section-padding-mobile md:py-section-padding-desktop bg-primary-container text-on-primary border-t border-outline-variant/20 text-center">
        <div className="max-w-3xl mx-auto px-gutter space-y-6">
          <h2 className="font-headline-lg text-on-primary">¿Listo para redefinir tu trayectoria profesional?</h2>
          <p className="font-body-lg text-on-primary-container">
            Agenda una reunión estratégica de 30 minutos sin compromiso y evaluemos juntos el siguiente gran paso para ti o tu empresa.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://bookme.name/dpsoluciones/lite/sesion-estrategica-blackbox90-60-minutos" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-secondary-container text-on-secondary-fixed font-label-caps py-4 px-8 hover:bg-secondary-fixed transition-colors font-bold uppercase"
            >
              Agendar Sesión Estratégica
            </a>
            <Link 
              to="/contacto"
              className="border border-on-primary/30 text-on-primary font-label-caps py-4 px-8 hover:bg-on-primary/10 transition-colors uppercase"
            >
              Contactar por Email
            </Link>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}
