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
      subtitle: "Estrategia de carrera & Mentoring 1:1 de 90 días",
      description: "Un laboratorio estratégico personal diseñado exclusivamente para profesionales senior y directivos de marketing digital. 4 sesiones de coaching y 3 de mentoring 1:1 para redefinir tu posicionamiento, empaquetar tu propuesta de valor y acceder al mercado oculto.",
      features: [
        "Auditoría profunda de trayectoria y habilidades diferenciales",
        "Diseño de CV Estratégico y Portfolio de Liderazgo",
        "CRM Personal con 20 a 30 stakeholders clave del sector",
        "Simulaciones de entrevista y validación market-ready",
        "Acompañamiento en negociación de condiciones y retribución"
      ],
      link: "/blackbox90",
      cta: "Conocer BlackBox90©",
      isInternal: true,
      img: "/images/13.png"
    },
    {
      badge: "1:1 INTENSIVO",
      title: "Mentoring de Carrera & Outplacement",
      subtitle: "Acompañamiento individualizado a medida",
      description: "Sesiones estratégicas personalizadas para afinar tu discurso, preparar procesos de selección decisivos, resolver dudas de liderazgo o evaluar ofertas de empleo de alta dirección.",
      features: [
        "Auditoría de perfil de LinkedIn y marca ejecutiva",
        "Estrategia de posicionamiento en el mercado digital",
        "Preparación intensiva de entrevistas con comités",
        "Análisis de encaje cultural y paquete retributivo"
      ],
      link: "https://bookme.name/dpsoluciones/lite/sesion-estrategica-blackbox90-60-minutos",
      cta: "Agendar Sesión 1:1",
      isInternal: false,
      img: "/images/30.png"
    },
    {
      badge: "ORIENTACIÓN DIRECTIVA",
      title: "Deep Coaching Ejecutivo (EMCC)",
      subtitle: "Trabajo interno de liderazgo y claridad",
      description: "Sesiones de coaching acreditadas por EMCC enfocadas en desbloquear resistencias, superar el síndrome de la persona impostora y tomar decisiones profesionales alineadas con tus valores y visión de futuro.",
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
      subtitle: "Executive Search para Startups y Scaleups",
      description: "Búsqueda directa y atracción de perfiles clave en Marketing Digital, Growth, Performance, Product Marketing y Tecnología. Más de 20 años de experiencia y más de 1.000 búsquedas ejecutivas cerradas con éxito.",
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
      badge: "FORMACIÓN CORPORATIVA",
      title: "Programas de Liderazgo & Habilidades Directivas",
      subtitle: "Capacitación in-company adaptada a tus retos",
      description: "Módulos y talleres prácticos para mandos intermedios y directivos: trabajo en equipo, metodologías ágiles, gestión del tiempo, comunicación interna y clima laboral.",
      features: [
        "Metodología práctica orientada a resultados",
        "Desarrollo de competencias de liderazgo",
        "Impartido en másteres universitarios y corporaciones",
        "Formato presencial u online con total flexibilidad"
      ],
      link: "/contacto",
      cta: "Diseñar Plan a Medida",
      isInternal: true,
      img: "/images/42.png"
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
      isInternal: true,
      img: "/images/11.png"
    }
  ];

  const serviciosActuales = activeTab === 'profesionales' ? serviciosProfesionales : serviciosEmpresas;

  return (
    <AnimatedPage>
      <div className="max-w-container-max mx-auto px-gutter py-section-desktop bg-[#0b0b0e]">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-label-caps text-secondary uppercase tracking-[0.2em] text-xs font-bold">
            SOLUCIONES ESPECIALIZADAS
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Servicios y Programas
          </h1>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Metodologías contrastadas para profesionales senior de marketing digital que buscan un salto cualitativo y para empresas que necesitan incorporar talento directivo clave.
          </p>
        </div>

        {/* Selector de Pestaña */}
        <div className="flex justify-center mb-16">
          <div className="bg-[#14141a] p-1.5 rounded-xl border border-white/[0.08] flex max-w-md w-full shadow-lg">
            <button
              onClick={() => setActiveTab('profesionales')}
              className={`flex-1 py-3.5 px-6 font-label-caps text-xs tracking-widest uppercase transition-all duration-300 rounded-lg ${
                activeTab === 'profesionales'
                  ? 'bg-secondary text-[#0b0b0e] font-bold shadow-lg shadow-secondary/20'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Para Profesionales
            </button>
            <button
              onClick={() => setActiveTab('empresas')}
              className={`flex-1 py-3.5 px-6 font-label-caps text-xs tracking-widest uppercase transition-all duration-300 rounded-lg ${
                activeTab === 'empresas'
                  ? 'bg-secondary text-[#0b0b0e] font-bold shadow-lg shadow-secondary/20'
                  : 'text-gray-400 hover:text-white'
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
              className="glass-panel p-8 rounded-2xl flex flex-col justify-between group shadow-xl relative overflow-hidden border border-white/[0.08]"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="font-label-caps text-secondary text-xs block tracking-widest font-bold">{item.badge}</span>
                  <img 
                    src={item.img} 
                    alt="" 
                    className="w-14 h-14 object-contain opacity-75 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-snug">{item.title}</h3>
                <h4 className="font-body-md text-secondary font-medium text-xs mb-4">{item.subtitle}</h4>
                <p className="font-body-md text-gray-300 text-sm mb-6 leading-relaxed">
                  {item.description}
                </p>

                <div className="border-t border-white/[0.08] pt-4 mb-8">
                  <span className="font-label-caps text-secondary text-xs uppercase block mb-3 font-bold tracking-wider">Qué incluye:</span>
                  <ul className="space-y-2.5">
                    {item.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start text-xs text-gray-200 leading-relaxed">
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
                  className="block text-center bg-secondary text-[#0b0b0e] font-label-caps text-xs py-3.5 px-6 hover:bg-secondary-hover transition-colors uppercase tracking-widest font-bold rounded-md shadow-md shadow-secondary/10"
                >
                  {item.cta}
                </Link>
              ) : (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-secondary text-[#0b0b0e] font-label-caps text-xs py-3.5 px-6 hover:bg-secondary-hover transition-colors uppercase tracking-widest font-bold rounded-md shadow-md shadow-secondary/10"
                >
                  {item.cta}
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Banner Conversación Estratégica */}
        <div className="glass-panel p-8 lg:p-12 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 border-l-4 border-l-secondary shadow-2xl">
          <div className="max-w-2xl space-y-2">
            <span className="font-label-caps text-secondary text-xs uppercase block font-bold tracking-widest">CONVERSACIÓN SIN COMPROMISO</span>
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">¿Hablamos de tu caso particular?</h3>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Reserva una sesión estratégica de 60 minutos para explorar cómo podemos orientar tu perfil o cubrir esa posición clave en tu organización.
            </p>
          </div>
          <a
            href="https://bookme.name/dpsoluciones/lite/sesion-estrategica-blackbox90-60-minutos"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary text-[#0b0b0e] font-label-caps text-xs py-4 px-9 hover:bg-secondary-hover transition-colors uppercase tracking-widest whitespace-nowrap font-bold shadow-xl shadow-secondary/20 rounded-md"
          >
            Agendar Reunión →
          </a>
        </div>

      </div>
    </AnimatedPage>
  );
}
