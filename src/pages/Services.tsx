import AnimatedPage from '../components/AnimatedPage';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
  const [activeTab, setActiveTab] = useState<'profesionales' | 'empresas'>('profesionales');

  const serviciosProfesionales = [
    {
      badge: "PROGRAMA SIGNATURE",
      title: "BlackBox90©: Cambio de Juego",
      subtitle: "Estrategia de carrera & Mentoring 1:1 de 90 a 120 días",
      description: "Un laboratorio estratégico personal diseñado exclusivamente para profesionales senior y directivos de marketing digital. Acompañamiento intensivo para redefinir tu posicionamiento, empaquetar tu propuesta de valor de alto impacto y acceder al 80% del mercado oculto.",
      features: [
        "Auditoría profunda de trayectoria y habilidades diferenciales",
        "Diseño de CV Estratégico y Portfolio de Liderazgo (PLD)",
        "CRM Personal con 20 a 30 stakeholders clave del sector",
        "Simulaciones de entrevista con la óptica de un seleccionador",
        "Acompañamiento en negociación de retribución y condiciones"
      ],
      link: "/blackbox90",
      cta: "Conocer BlackBox90©",
      isInternal: true,
      img: "/images/13.png"
    },
    {
      badge: "TRANSICIÓN Y ASESORÍA",
      title: "Mentoring Directivo & Transición de Carrera",
      subtitle: "Acompañamiento individualizado a medida",
      description: "Sesiones estratégicas personalizadas para afinar tu discurso ante comités de selección, preparar procesos de alta dirección, evaluar opciones de carteras de proyectos (Portfolio Careers) o roles de consejero.",
      features: [
        "Auditoría de perfil de LinkedIn y marca ejecutiva",
        "Estrategia de posicionamiento en el mercado digital",
        "Preparación intensiva de entrevistas con comités de dirección",
        "Análisis de encaje cultural y paquete retributivo"
      ],
      link: "https://bookme.name/dpsoluciones/lite/sesion-estrategica-blackbox90-60-minutos",
      cta: "Agendar Sesión 1:1",
      isInternal: false,
      img: "/images/30.png"
    },
    {
      badge: "ATERRIZAJE ACELERADO",
      title: "Executive Onboarding (Primeros 90 Días)",
      subtitle: "Acompañamiento estratégico post-incorporación",
      description: "El 88% de los fracasos de integración directiva ocurren por falta de un plan estructurado en los primeros meses. Te acompaño en tus primeros 90 días en el nuevo rol para consolidar tu liderazgo y acelerar resultados.",
      features: [
        "Diseño del Plan de Primeros 90 Días de alto impacto",
        "Mapeo de stakeholders internos y alineación de expectativas",
        "Flash calls para resolver decisiones críticas de gestión",
        "Consolidación de autoridad y cohesión con tu nuevo equipo"
      ],
      link: "/contacto",
      cta: "Consultar Plan Onboarding",
      isInternal: true,
      img: "/images/23.png"
    },
    {
      badge: "ORIENTACIÓN DIRECTIVA",
      title: "Deep Coaching Ejecutivo (EMCC)",
      subtitle: "Trabajo interno de liderazgo y toma de decisiones",
      description: "Sesiones de coaching acreditadas por EMCC Global enfocadas en desbloquear resistencias, superar el síndrome de la persona impostora y tomar decisiones profesionales estratégicas alineadas con tus valores.",
      features: [
        "Acreditación internacional EMCC Practitioner",
        "Gestión de bloqueos y miedos al cambio de etapa",
        "Liderazgo consciente y comunicación directiva",
        "Plan de acción sostenible a largo plazo"
      ],
      link: "/contacto",
      cta: "Solicitar Información",
      isInternal: true,
      img: "/images/34.png"
    }
  ];

  const serviciosEmpresas = [
    {
      badge: "HEADHUNTING ESPECIALIZADO",
      title: "Selección de Talento Digital & IT",
      subtitle: "Executive Search para Startups, Scaleups y Tech",
      description: "Búsqueda directa y atracción de perfiles clave en Marketing Digital, Growth, Performance, Product Marketing y Liderazgo Tecnológico. Más de 20 años de experiencia y más de 1.000 búsquedas ejecutivas cerradas con éxito.",
      features: [
        "Definición exhaustiva del perfil y encaje cultural",
        "Acceso directo a talento pasivo y mercado no visible",
        "Evaluación técnica y competencial rigurosa",
        "Acompañamiento en la fase de oferta y onboarding"
      ],
      link: "/contacto",
      cta: "Contratar Búsqueda",
      isInternal: true,
      img: "/images/26.png"
    },
    {
      badge: "OUTPLACEMENT CORPORATIVO",
      title: "Executive Outplacement & Desvinculación Ética",
      subtitle: "Transición cuidada para directivos y líderes",
      description: "Programas personalizados de recolocación para directivos desvinculados en procesos de reestructuración. Protege la marca empleadora, refuerza el contrato psicológico del equipo y asegura un acompañamiento 1:1 impecable.",
      features: [
        "Diagnóstico y plan de transición individualizado",
        "Coaches con más de 20 años de experiencia ejecutiva",
        "Rediseño integral de materiales y acceso al mercado oculto",
        "Reportes periódicos de avance y KPIs de inserción"
      ],
      link: "/contacto",
      cta: "Diseñar Plan Outplacement",
      isInternal: true,
      img: "/images/14.png"
    },
    {
      badge: "FORMACIÓN Y EQUIPOS",
      title: "Liderazgo Directivo & Coaching de Equipos",
      subtitle: "Capacitación in-company adaptada a tus retos",
      description: "Módulos y talleres prácticos para comités de dirección y mandos intermedios: cultura de coaching, comunicación de alto impacto, adopción de IA en procesos de marketing y gestión del cambio.",
      features: [
        "Metodología práctica en 5 puntos orientada a resultados",
        "Desarrollo de competencias de liderazgo situacional",
        "Impartido en másteres universitarios y empresas",
        "Formato presencial u online con total flexibilidad"
      ],
      link: "/contacto",
      cta: "Diseñar Plan a Medida",
      isInternal: true,
      img: "/images/42.png"
    }
  ];

  const serviciosActuales = activeTab === 'profesionales' ? serviciosProfesionales : serviciosEmpresas;

  return (
    <AnimatedPage>
      <div className="max-w-container-max mx-auto px-gutter py-section-desktop bg-[#0b0b0e]">

        {/* Header con Tipografía Destacada */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-label-caps text-secondary uppercase tracking-[0.25em] text-xs sm:text-sm font-bold">
            SOLUCIONES ESPECIALIZADAS PARA MARKETERS Y ORGANIZACIONES
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Servicios y Programas
          </h1>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Metodologías contrastadas para profesionales senior de marketing digital que buscan un salto cualitativo y para empresas que necesitan incorporar talento directivo clave o gestionar transiciones con el máximo estándar ético.
          </p>
        </div>

        {/* Selector de Pestaña */}
        <div className="flex justify-center mb-16">
          <div className="bg-[#14141a] p-1.5 rounded-xl border border-white/[0.08] flex max-w-md w-full shadow-lg">
            <button
              onClick={() => setActiveTab('profesionales')}
              className={`flex-1 py-3.5 px-6 font-label-caps text-xs tracking-widest uppercase transition-all duration-300 rounded-lg ${activeTab === 'profesionales'
                  ? 'bg-secondary text-[#0b0b0e] font-bold shadow-lg shadow-secondary/20'
                  : 'text-gray-400 hover:text-white'
                }`}
            >
              Para Profesionales
            </button>
            <button
              onClick={() => setActiveTab('empresas')}
              className={`flex-1 py-3.5 px-6 font-label-caps text-xs tracking-widest uppercase transition-all duration-300 rounded-lg ${activeTab === 'empresas'
                  ? 'bg-secondary text-[#0b0b0e] font-bold shadow-lg shadow-secondary/20'
                  : 'text-gray-400 hover:text-white'
                }`}
            >
              Para Empresas & Startups
            </button>
          </div>
        </div>

        {/* Grid de Servicios */}
        <div className={`grid grid-cols-1 ${activeTab === 'profesionales' ? 'lg:grid-cols-2 gap-8' : 'lg:grid-cols-3 gap-8'} mb-20`}>
          {serviciosActuales.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              className="glass-panel p-8 sm:p-10 rounded-3xl flex flex-col justify-between group shadow-2xl relative overflow-hidden border border-white/[0.08]"
            >
              <div>
                <div className="flex justify-between items-start mb-5">
                  <span className="font-label-caps text-secondary text-xs sm:text-sm block tracking-widest font-bold">{item.badge}</span>
                  <img
                    src={item.img}
                    alt=""
                    className="w-14 h-14 sm:w-16 sm:h-16 object-contain opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 leading-tight">{item.title}</h3>
                <h4 className="text-secondary font-medium text-xs sm:text-sm mb-4">{item.subtitle}</h4>
                <p className="text-gray-300 text-xs sm:text-sm mb-6 leading-relaxed">
                  {item.description}
                </p>

                <div className="border-t border-white/[0.08] pt-5 mb-8">
                  <span className="font-label-caps text-secondary text-xs uppercase block mb-3 font-bold tracking-wider">Qué incluye:</span>
                  <ul className="space-y-3">
                    {item.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start text-xs sm:text-sm text-gray-200 leading-relaxed">
                        <span className="text-secondary mr-2.5 font-bold">✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {item.isInternal ? (
                <Link
                  to={item.link}
                  className="block text-center bg-secondary text-[#0b0b0e] font-label-caps text-xs sm:text-sm py-4 px-6 hover:bg-secondary-hover transition-colors uppercase tracking-widest font-bold rounded-md shadow-lg shadow-secondary/15"
                >
                  {item.cta}
                </Link>
              ) : (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-secondary text-[#0b0b0e] font-label-caps text-xs sm:text-sm py-4 px-6 hover:bg-secondary-hover transition-colors uppercase tracking-widest font-bold rounded-md shadow-lg shadow-secondary/15"
                >
                  {item.cta}
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Banner Conversación Estratégica con Foto de Javier */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 border-l-4 border-l-secondary shadow-2xl">
          <div className="flex items-center gap-6">
            <img src="/images/05.jpg" alt="Javier Abeleira" className="w-20 h-20 rounded-full object-cover border-2 border-secondary hidden sm:block shadow-lg" />
            <div className="space-y-2">
              <span className="font-label-caps text-secondary text-xs sm:text-sm uppercase block font-bold tracking-widest">CONVERSACIÓN CONFIDENCIAL</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">¿Hablamos de tu caso particular?</h3>
              <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
                Reserva una sesión estratégica de 60 minutos para explorar cómo podemos enfocar tu transición de carrera o cubrir una posición directiva clave en tu organización.
              </p>
            </div>
          </div>
          <a
            href="https://bookme.name/dpsoluciones/lite/sesion-estrategica-blackbox90-60-minutos"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary text-[#0b0b0e] font-label-caps text-xs sm:text-sm py-4 px-9 hover:bg-secondary-hover transition-colors uppercase tracking-widest whitespace-nowrap font-bold shadow-xl shadow-secondary/20 rounded-md"
          >
            Agendar Reunión 1:1 →
          </a>
        </div>

      </div>
    </AnimatedPage>
  );
}
