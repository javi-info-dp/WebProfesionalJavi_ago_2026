import AnimatedPage from '../components/AnimatedPage';
import { motion } from 'framer-motion';

const servicios = [
  {
    category: "Programa Signature",
    title: "BlackBox90©: Cambio de Juego",
    description: "Programa de coaching y mentoring ejecutivo de 90 días (4 sesiones de coaching + 3 de mentoring 1:1). Diseñado para profesionales de marketing digital que buscan posicionarse, diferenciarse y acceder a su siguiente gran salto profesional. Máximo 8 plazas por edición.",
    link: "https://form.typeform.com/to/u1QuphFN",
    cta: "Solicitar Plaza"
  },
  {
    category: "Headhunting & Selección",
    title: "Reclutamiento de Talento Digital & IT",
    description: "Servicio especializado de headhunting para startups y empresas que buscan líderes de marketing digital, perfiles tecnológicos y mandos intermedios con encaje cultural y resultados probados.",
    link: "https://dpsoluciones.es/",
    cta: "Consultar Servicio"
  },
  {
    category: "Outplacement & Carrera",
    title: "Mentoring & Estrategia Profesional 1:1",
    description: "Acompañamiento individualizado para redefinir tu propuesta de valor, preparar procesos de selección clave y negociar condiciones con agilidad e inteligencia de mercado.",
    link: "https://bookme.name/dpsoluciones/lite/llamada-de-contacto",
    cta: "Agendar Sesión"
  },
  {
    category: "Formación In-Company",
    title: "Liderazgo y Habilidades Directivas",
    description: "Módulos y programas a medida para empresas en trabajo en equipo, desarrollo de mandos intermedios, comunicación interna, clima laboral y metodologías ágiles.",
    link: "https://dpsoluciones.es/",
    cta: "Saber Más"
  }
];

const publicaciones = [
  "BUSCANDO AL MARKETERO/A IDEAL - Entrevista con Sonia Duro Limia",
  "RECRUITING TOOLBOX – Entrevista a Elena Martínez",
  "10 motivos por los que te pueden descartar en una entrevista de trabajo",
  "BUSCANDO AL MARKETERO/A IDEAL - Entrevista con Marta Fernández",
  "Los 20 errores más comunes en una entrevista de trabajo"
];

export default function Portfolio() {
  return (
    <AnimatedPage>
      {/* Hero */}
      <section className="max-w-container-max mx-auto px-gutter py-section-desktop">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary mb-unit-lg max-w-3xl"
        >
          Programas y Soluciones.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-unit-lg"
        >
          Metodologías probadas para acelerar el desarrollo de talento individual y potenciar equipos de alto rendimiento.
        </motion.p>
      </section>

      {/* Grid de Soluciones */}
      <section className="max-w-container-max mx-auto px-gutter pb-section-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicios.map((servicio, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-surface-container-lowest border border-outline-variant/30 p-8 flex flex-col justify-between hover:border-secondary transition-colors group"
            >
              <div>
                <span className="font-label-caps text-secondary block mb-2">{servicio.category}</span>
                <h3 className="font-headline-sm text-primary mb-4">{servicio.title}</h3>
                <p className="font-body-md text-on-surface-variant mb-6">{servicio.description}</p>
              </div>
              <a
                href={servicio.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-label-caps text-secondary font-bold hover:text-primary transition-colors self-start border-b border-secondary/40 pb-1"
              >
                {servicio.cta} →
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Publicaciones & Artículos */}
      <section className="bg-surface-container-low py-section-desktop border-t border-outline-variant/30">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-label-caps text-secondary uppercase">Divulgación & Entrevistas</span>
            <h2 className="font-headline-md text-primary mt-2">Publicaciones y Artículos</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publicaciones.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="bg-surface-container-lowest p-6 border border-outline-variant/20 flex items-start gap-4 hover:border-secondary transition-colors"
              >
                <span className="material-symbols-outlined text-secondary text-2xl">article</span>
                <div>
                  <h4 className="font-body-lg text-primary font-medium text-sm leading-snug">{pub}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}
