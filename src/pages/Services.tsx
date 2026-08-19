import AnimatedPage from '../components/AnimatedPage';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
  const [activeTab, setActiveTab] = useState<'profesionales' | 'empresas'>('profesionales');

  const serviciosProfesionales = [
    {
      badge: "PROGRAMA INSIGNIA",
      title: "BlackBox90©: Cambio de Juego",
      subtitle: "Coaching & Mentoring Ejecutivo de 90 días",
      description: "Un laboratorio estratégico personal diseñado exclusivamente para profesionales senior de marketing digital. 4 sesiones de coaching + 3 de mentoring 1:1 para redefinir tu posicionamiento, empaquetar tu propuesta de valor y acceder al mercado oculto de oportunidades.",
      features: [
        "Auditoría profunda en 6 dimensiones críticas",
        "Diseño de CV Estratégico y Portfolio de Liderazgo",
        "CRM Personal con 20-30 stakeholders clave",
        "Simulaciones de entrevista y validación market-ready",
        "Acompañamiento en negociación de salario y condiciones"
      ],
      link: "/blackbox90",
      cta: "Conocer BlackBox90©",
      isInternal: true
    },
    {
      badge: "1:1 INTENSIVO",
      title: "Mentoring de Carrera & Outplacement",
      subtitle: "Acompañamiento individualizado a medida",
      description: "Sesiones estratégicas personalizables para desatascar tu discurso, preparar procesos de selección decisivos, resolver dudas de liderazgo o evaluar ofertas de empleo complejas.",
      features: [
        "Auditoría de perfil de LinkedIn y marca personal",
        "Estrategia de posicionamiento sectorial",
        "Preparación intensiva de entrevistas ejecutivas",
        "Análisis de encaje cultural y retributivo"
      ],
      link: "https://bookme.name/dpsoluciones/lite/llamada-de-contacto",
      cta: "Agendar Sesión 1:1",
      isInternal: false
    },
    {
      badge: "ORIENTACIÓN DIRECTIVA",
      title: "Deep Coaching Ejecutivo (EMCC)",
      subtitle: "Trabajo interno de liderazgo y claridad",
      description: "Sesiones de coaching acreditadas por EMCC enfocadas en desbloquear resistencias, superar el síndrome de la persona impostora y tomar decisiones profesionales alineadas con tus valores y propósito.",
      features: [
        "Acreditación internacional EMCC Practitioner",
        "Gestión de bloqueos y miedos al cambio",
        "Liderazgo consciente y comunicación asertiva",
        "Plan de acción sostenible a largo plazo"
      ],
      link: "/contacto",
      cta: "Solicitar Información",
      isInternal: true
    }
  ];

  const serviciosEmpresas = [
    {
      badge: "HEADHUNTING ESPECIALIZADO",
      title: "Selección de Talento Digital & IT",
      subtitle: "Executive Search para Startups y Scaleups",
      description: "Búsqueda directa y atracción de perfiles clave en Marketing Digital, Growth, Performance, Product Marketing y Tecnología. Más de 20 años de experiencia y más de 1.000 búsquedas ejecutivas cerradas con éxito.",
      features: [
        "Definición exhaustiva del perfil y encaje cultural",
        "Acceso directo a talento pasivo y mercado oculto",
        "Evaluación técnica y competencial rigurosa",
        "Acompañamiento en la fase de oferta y onboarding"
      ],
      link: "/contacto",
      cta: "Contratar Búsqueda",
      isInternal: true
    },
    {
      badge: "FORMACIÓN CORPORATIVA",
      title: "Programas de Liderazgo & Habilidades Directivas",
      subtitle: "Capacitación in-company adaptada a tus retos",
      description: "Módulos y talleres prácticos para mandos intermedios y directivos: trabajo en equipo, metodologías ágiles, gestión del tiempo, comunicación interna y clima laboral.",
      features: [
        "Metodología práctica orientada a resultados",
        "Desarrollo de competencias de liderazgo",
        "Impartido en másteres universitarios y corporaciones",
        "Formato presencial u online"
      ],
      link: "/contacto",
      cta: "Diseñar Plan a Medida",
      isInternal: true
    },
    {
      badge: "CONSULTORÍA ESTRATÉGICA",
      title: "Consultoría de Personas & Organización (RR.HH.)",
      subtitle: "Estructura, evaluación del desempeño y clima",
      description: "Asesoramiento integral a PYMES y organizaciones en análisis de puestos, planes de formación, políticas activas de retención de talento y sistemas de incentivos.",
      features: [
        "Auditoría y diagnóstico de clima laboral",
        "Diseño de sistemas de evaluación del desempeño",
        "Planes de carrera y retención de talento clave",
        "Relación sincera y sin artificios con la dirección"
      ],
      link: "/contacto",
      cta: "Consultar con Javier",
      isInternal: true
    }
  ];

  const serviciosActuales = activeTab === 'profesionales' ? serviciosProfesionales : serviciosEmpresas;

  return (
    <AnimatedPage>
      <div className="max-w-container-max mx-auto px-gutter py-section-desktop">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-label-caps text-secondary uppercase tracking-widest">PROPUESTA DE VALOR</span>
          <h1 className="font-display-lg-mobile md:font-display-lg text-primary mt-2">
            Servicios y Programas
          </h1>
          <p className="font-body-lg text-on-surface-variant mt-4">
            Soluciones contrastadas tanto para profesionales senior que buscan un cambio de juego, como para empresas que necesitan incorporar talento estratégico.
          </p>
        </div>

        {/* Selector de Pestaña */}
        <div className="flex justify-center mb-16">
          <div className="bg-surface-container p-1.5 rounded-none border border-outline-variant/40 flex max-w-md w-full">
            <button
              onClick={() => setActiveTab('profesionales')}
              className={`flex-1 py-3 px-6 font-label-caps text-xs tracking-wider uppercase transition-all duration-300 ${
                activeTab === 'profesionales'
                  ? 'bg-primary text-on-primary shadow-md'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              Para Profesionales
            </button>
            <button
              onClick={() => setActiveTab('empresas')}
              className={`flex-1 py-3 px-6 font-label-caps text-xs tracking-wider uppercase transition-all duration-300 ${
                activeTab === 'empresas'
                  ? 'bg-primary text-on-primary shadow-md'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              Para Empresas & Startups
            </button>
          </div>
        </div>

        {/* Grid de Servicios */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {serviciosActuales.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-surface-container-lowest border border-outline-variant/30 p-8 flex flex-col justify-between hover:border-secondary transition-all duration-300 group shadow-sm"
            >
              <div>
                <span className="font-label-caps text-secondary text-xs block mb-2">{item.badge}</span>
                <h3 className="font-headline-sm text-primary mb-1 text-xl">{item.title}</h3>
                <h4 className="font-body-md text-secondary font-medium text-xs mb-4">{item.subtitle}</h4>
                <p className="font-body-md text-on-surface-variant text-sm mb-6 leading-relaxed">
                  {item.description}
                </p>

                <div className="border-t border-outline-variant/20 pt-4 mb-8">
                  <span className="font-label-caps text-on-surface-variant text-[11px] uppercase block mb-3">Qué incluye:</span>
                  <ul className="space-y-2">
                    {item.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start text-xs text-on-surface-variant">
                        <span className="text-secondary mr-2 font-bold">✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {item.isInternal ? (
                <Link
                  to={item.link}
                  className="block text-center bg-primary text-on-primary font-label-caps text-xs py-3 px-6 hover:bg-secondary transition-colors uppercase tracking-wider font-bold"
                >
                  {item.cta}
                </Link>
              ) : (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-primary text-on-primary font-label-caps text-xs py-3 px-6 hover:bg-secondary transition-colors uppercase tracking-wider font-bold"
                >
                  {item.cta}
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Banner Scorecard */}
        <div className="bg-surface-bone p-8 lg:p-12 border border-secondary/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="font-label-caps text-secondary text-xs uppercase block mb-1">EVALUACIÓN RÁPIDA</span>
            <h3 className="font-headline-md text-primary">¿No sabes por dónde empezar?</h3>
            <p className="font-body-md text-on-surface-variant mt-2">
              Realiza el Scorecard de Autodiagnóstico en 15 minutos y recibe un análisis personalizado sobre tu preparación en 6 dimensiones críticas.
            </p>
          </div>
          <a
            href="https://form.typeform.com/to/RH3SPk3R"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary text-on-primary font-label-caps text-xs py-4 px-8 hover:bg-primary transition-colors uppercase tracking-wider whitespace-nowrap font-bold"
          >
            Hacer Autodiagnóstico →
          </a>
        </div>

      </div>
    </AnimatedPage>
  );
}
