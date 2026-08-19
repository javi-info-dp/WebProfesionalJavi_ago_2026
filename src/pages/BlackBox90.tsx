import AnimatedPage from '../components/AnimatedPage';
import { motion } from 'framer-motion';
import { useState } from 'react';

const fases = [
  {
    num: "1",
    titulo: "Claridad y Diferenciación",
    periodo: "Días 1 a 30",
    img: "/images/1.png",
    puntos: [
      "Auditoría profunda de trayectoria y habilidades diferenciales",
      "Definición de tu Propuesta de Valor Única (PVU)",
      "Creación de tu CV Estratégico de alto impacto",
      "Diseño de tu Portfolio de Liderazgo y casos de éxito"
    ],
    entregable: "Posicionamiento nítido y materiales ejecutivos de nivel C-Level"
  },
  {
    num: "2",
    titulo: "Construcción y Visibilidad",
    periodo: "Días 31 a 60",
    img: "/images/14.png",
    puntos: [
      "CRM Personal con 20 a 30 stakeholders decisivos del sector",
      "Optimización de LinkedIn orientada a comités de selección",
      "Activación de pipeline con 15 a 25 conversaciones estratégicas",
      "Apertura del mercado oculto de oportunidades no publicadas"
    ],
    entregable: "Motor de acceso al mercado oculto 100% operativo"
  },
  {
    num: "3",
    titulo: "Validación y Momentum",
    periodo: "Días 61 a 90",
    img: "/images/23.png",
    puntos: [
      "Simulaciones de entrevista con la óptica de un headhunter",
      "Validación market-ready y feedback técnico en tiempo real",
      "Estrategia y simulación de negociación retributiva",
      "Instalación de sistema sostenible de carrera para el futuro"
    ],
    entregable: "Momentum profesional y máxima seguridad en el cierre de ofertas"
  }
];

const modalidades = [
  {
    nombre: "Modalidad LITE",
    duracion: "90 días de acompañamiento",
    dedicacion: "2 a 4 horas semanales",
    idealPara: "Profesionales senior de marketing con sólida trayectoria y autonomía que necesitan optimizar su discurso, afinar materiales y conectar con el mercado oculto con foco estratégico.",
    incluye: [
      "8 Sesiones individuales 1:1 de trabajo intensivo",
      "5 Anexos operativos personalizados",
      "Auditoría exhaustiva y rediseño de CV Estratégico",
      "Optimización de perfil de LinkedIn para decisores",
      "Soporte continuo y seguimiento por correo"
    ],
    destacado: false,
    ctaLink: "https://bookme.name/dpsoluciones/lite/sesion-estrategica-blackbox90-60-minutos",
    ctaTexto: "Solicitar Diagnóstico LITE"
  },
  {
    nombre: "Modalidad PREMIUM",
    duracion: "120 días de acompañamiento",
    dedicacion: "3 a 5 horas semanales",
    idealPara: "Directores de Marketing y líderes que buscan una reconstrucción integral de su posicionamiento, preparación intensiva de comités y acompañamiento directo en la incorporación.",
    incluye: [
      "14 Sesiones individuales 1:1 de trabajo profundo",
      "4 Flash Calls prioritarias para decisiones urgentes de proceso",
      "6 Anexos operativos y plantillas estratégicas avanzadas",
      "Dashboard de KPIs + CRM Personalizado de Stakeholders",
      "Simulaciones intensivas de entrevista y negociación salarial",
      "Acompañamiento prioritario en el plan de primeros 90 días (Onboarding)"
    ],
    destacado: true,
    ctaLink: "https://bookme.name/dpsoluciones/lite/sesion-estrategica-blackbox90-60-minutos",
    ctaTexto: "Solicitar Diagnóstico PREMIUM"
  }
];

const paraQuien = [
  {
    tipo: "esParaTi",
    titulo: "BlackBox90© ES para ti si:",
    puntos: [
      "Eres profesional senior o directivo de marketing digital (Head of Marketing, CMO, Growth Lead, Director de Performance).",
      "Estás buscando tu siguiente gran proyecto profesional y no quieres dar un paso en falso.",
      "Sientes que las ofertas genéricas que te llegan no valoran todo tu potencial acumulado.",
      "Quieres acceder al 80% de posiciones ejecutivas que nunca se publican en portales tradicionales.",
      "Buscas una relación de trabajo 1:1 honesta, directa y respaldada por un seleccionador en activo."
    ]
  },
  {
    tipo: "noEsParaTi",
    titulo: "BlackBox90© NO es para ti si:",
    puntos: [
      "Buscas una agencia de colocación o alguien que envíe currículums en tu nombre.",
      "Eres un perfil junior o en etapas iniciales de tu carrera profesional.",
      "Buscas trucos rápidos o recetas milagrosas sin dedicar tiempo semanal al proceso.",
      "No estás dispuesto a recibir feedback constructivo y cuestionar tu narrativa actual.",
      "Esperas resultados sin involucrarte al 100% en las simulaciones y ejercicios prácticos."
    ]
  }
];

const faqs = [
  {
    q: "¿Para qué perfiles está diseñado exclusivamente BlackBox90©?",
    a: "Está diseñado exclusivamente para profesionales senior de marketing digital (con una trayectoria consolidada en roles de Senior Manager, Head of Marketing, Director de Growth o CMO) que buscan nuevos proyectos de alto impacto o dar el salto a posiciones de máxima responsabilidad ejecutiva."
  },
  {
    q: "¿Cómo se accede al programa y cómo se valoran los costes?",
    a: "El programa cuenta con solo 8 plazas por edición. El primer paso es realizar una Sesión Estratégica 1:1 confidencial de 60 minutos. En ella analizamos tu situación actual, evaluamos el encaje mutuo y, si determinamos que podemos trabajar juntos, te presento la propuesta económica detallada y el plan de trabajo específico (LITE o PREMIUM)."
  },
  {
    q: "¿Garantizas la contratación en una empresa específica?",
    a: "No. BlackBox90© es un programa de estrategia de carrera de alto nivel, no una agencia de empleo temporal. Te garantizo que tendrás las herramientas, la narrativa, el CRM de contactos y la preparación necesaria para competir y ganar en el mercado ejecutivo. El resultado final depende de tu ejecución y del encaje con el mercado."
  },
  {
    q: "¿En qué formato se realizan las sesiones y qué flexibilidad hay?",
    a: "Todas las sesiones son 100% online y totalmente individuales (1:1), adaptándonos a tu agenda laboral con máxima confidencialidad, tanto si resides en España como a nivel internacional."
  },
  {
    q: "¿Qué sucede si surge una oportunidad decisiva durante el programa?",
    a: "Adaptamos el plan en tiempo real. Dedicamos las sesiones a preparar exhaustivamente cada ronda de entrevistas con el comité de selección, revisar la oferta económica y negociar las mejores condiciones posibles para tu contrato."
  }
];

export default function BlackBox90() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <AnimatedPage>
      {/* Hero BlackBox90 */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-[#0b0b0e] text-white py-24 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-secondary/15 rounded-full blur-[160px] pointer-events-none"></div>

        <div className="max-w-container-max mx-auto px-gutter relative z-10 text-center">
          
          <div className="flex justify-center mb-8">
            <img 
              src="/images/Logo BlackBox fondo transparente.png" 
              alt="Logo BlackBox90" 
              className="h-24 sm:h-28 md:h-32 w-auto object-contain drop-shadow-[0_0_30px_rgba(201,168,118,0.3)]"
            />
          </div>

          <span className="font-label-caps text-secondary tracking-[0.25em] text-xs sm:text-sm uppercase block mb-4 font-bold">
            PROGRAMA DE ESTRATEGIA DE CARRERA & MENTORING 1:1
          </span>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight max-w-4xl mx-auto leading-[1.1]">
            BlackBox90©: <br/>
            <span className="text-secondary italic font-serif font-normal">Cambio de Juego</span>
          </h1>
          
          <p className="text-gray-300 max-w-3xl mx-auto mt-6 text-base sm:text-lg md:text-xl leading-relaxed">
            Un laboratorio estratégico personal de 90 días para profesionales senior de marketing digital que buscan definir su siguiente gran proyecto con criterio, visibilidad y confianza.
          </p>

          {/* Insignia de Autoridad con Mini Foto */}
          <div className="inline-flex items-center gap-3 bg-white/[0.04] border border-white/[0.1] py-2 px-5 rounded-full mt-6">
            <img src="/images/01.jpg" alt="Javier Abeleira" className="w-8 h-8 rounded-full object-cover border border-secondary" />
            <span className="text-xs sm:text-sm text-gray-200 font-medium">
              Diseñado e impartido 1:1 por <strong className="text-white">Javier Abeleira</strong> (Headhunter & Coach EMCC)
            </span>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <a
              href="https://bookme.name/dpsoluciones/lite/sesion-estrategica-blackbox90-60-minutos"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary text-[#0b0b0e] font-label-caps py-4 px-9 hover:bg-secondary-hover transition-colors font-bold uppercase text-xs sm:text-sm tracking-widest shadow-2xl shadow-secondary/20 rounded-md"
            >
              Agendar Sesión Estratégica (60 min)
            </a>
            <a
              href="https://form.typeform.com/to/u1QuphFN"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/25 text-white font-label-caps py-4 px-8 hover:bg-white/5 hover:border-secondary transition-colors uppercase text-xs sm:text-sm tracking-widest rounded-md font-semibold"
            >
              Postular a una de las 8 Plazas
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mt-14 text-xs sm:text-sm text-gray-300 border-t border-white/[0.08] pt-6">
            <span><strong className="text-secondary font-bold">✓</strong> Solo 8 plazas exclusivas por edición</span>
            <span><strong className="text-secondary font-bold">✓</strong> 100% individualizado y confidencial</span>
            <span><strong className="text-secondary font-bold">✓</strong> Acreditación EMCC Practitioner</span>
            <span><strong className="text-secondary font-bold">✓</strong> Visión directa de headhunter</span>
          </div>
        </div>
      </section>

      {/* Para Quién Es vs Para Quién No Es */}
      <section className="py-20 lg:py-28 bg-[#0e0e12] border-y border-white/[0.08]">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="font-label-caps text-secondary uppercase tracking-[0.25em] text-xs sm:text-sm font-bold">
              CRITERIO DE SELECCIÓN Y ENCAJE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">¿Es BlackBox90© para ti?</h2>
            <p className="text-gray-300 text-base sm:text-lg">
              La exclusividad del programa garantiza el máximo nivel de foco y resultados en cada participante.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {paraQuien.map((bloque, idx) => (
              <div 
                key={idx}
                className={`p-8 sm:p-10 rounded-3xl border ${
                  bloque.tipo === 'esParaTi'
                    ? 'glass-panel border-secondary/50 shadow-2xl'
                    : 'glass-card border-white/[0.08]'
                }`}
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className={`w-3.5 h-3.5 rounded-full ${bloque.tipo === 'esParaTi' ? 'bg-secondary' : 'bg-red-400'}`}></span>
                  {bloque.titulo}
                </h3>
                <ul className="space-y-4">
                  {bloque.puntos.map((punto, pIdx) => (
                    <li key={pIdx} className="flex items-start text-sm md:text-base text-gray-300 leading-relaxed">
                      <span className={`mr-3 font-bold text-base ${bloque.tipo === 'esParaTi' ? 'text-secondary' : 'text-red-400'}`}>
                        {bloque.tipo === 'esParaTi' ? '✓' : '✕'}
                      </span>
                      <span>{punto}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Las 3 Fases del Sistema */}
      <section className="py-20 lg:py-28 bg-[#0b0b0e] border-b border-white/[0.08]">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="font-label-caps text-secondary uppercase tracking-[0.25em] text-xs sm:text-sm font-bold">METODOLOGÍA EXCLUSIVA</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">El Sistema en 3 Fases</h2>
            <p className="text-gray-300 text-base sm:text-lg">90 días de transformación ejecutiva, estratégica y personal.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fases.map((fase, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-panel p-8 sm:p-10 rounded-3xl flex flex-col justify-between group shadow-2xl border border-white/[0.1]"
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="w-14 h-14 rounded-2xl bg-secondary text-[#0b0b0e] flex items-center justify-center font-bold text-2xl font-headline-sm shadow-lg">
                      {fase.num}
                    </span>
                    <img 
                      src={fase.img} 
                      alt="" 
                      className="w-16 h-16 object-contain opacity-85 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                  </div>
                  
                  <span className="font-label-caps text-secondary text-xs sm:text-sm font-bold block mb-2">{fase.periodo}</span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-snug">{fase.titulo}</h3>
                  
                  <ul className="space-y-3.5 mb-8">
                    {fase.puntos.map((punto, pIdx) => (
                      <li key={pIdx} className="flex items-start text-xs sm:text-sm text-gray-300 leading-relaxed">
                        <span className="text-secondary mr-3 font-bold">•</span>
                        <span>{punto}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-white/[0.08] pt-5 bg-white/[0.02] -mx-8 sm:-mx-10 -mb-8 sm:-mb-10 p-6 sm:p-8 mt-4 rounded-b-3xl">
                  <span className="font-label-caps text-secondary text-xs uppercase block mb-1 font-bold">Entregable:</span>
                  <p className="text-white text-sm sm:text-base font-semibold">{fase.entregable}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modalidades de Acompañamiento */}
      <section className="py-20 lg:py-28 bg-[#0e0e12] border-b border-white/[0.08]">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="font-label-caps text-secondary uppercase tracking-[0.25em] text-xs sm:text-sm font-bold">MODALIDADES</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">Opciones del Programa</h2>
            <p className="text-gray-300 text-base sm:text-lg">
              Dos niveles de profundidad adaptados a tu momento profesional y objetivos de posicionamiento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {modalidades.map((mod, idx) => (
              <div
                key={idx}
                className={`p-8 sm:p-10 rounded-3xl border flex flex-col justify-between transition-all duration-300 relative shadow-2xl ${
                  mod.destacado
                    ? 'glass-panel border-secondary shadow-2xl shadow-secondary/15 scale-[1.02]'
                    : 'glass-card border-white/[0.08]'
                }`}
              >
                {mod.destacado && (
                  <span className="absolute -top-3.5 right-8 bg-secondary text-[#0b0b0e] font-label-caps text-xs py-1.5 px-4 uppercase font-bold tracking-widest shadow-lg rounded-full">
                    TRANSFORMACIÓN INTEGRAL
                  </span>
                )}

                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">{mod.nombre}</h3>
                    <span className="font-label-caps text-xs sm:text-sm text-secondary font-bold">{mod.duracion}</span>
                  </div>

                  <div className="text-xs sm:text-sm text-gray-400 mb-6 font-medium">
                    Dedicación estimada: {mod.dedicacion}
                  </div>

                  <p className="text-sm sm:text-base text-gray-300 mb-6 leading-relaxed">
                    {mod.idealPara}
                  </p>

                  <div className="border-t border-white/[0.08] pt-5 mb-8">
                    <span className="font-label-caps text-xs uppercase block mb-4 text-secondary font-bold tracking-wider">
                      Qué incluye el programa:
                    </span>
                    <ul className="space-y-3">
                      {mod.incluye.map((inc, iIdx) => (
                        <li key={iIdx} className="flex items-start text-xs sm:text-sm text-gray-200">
                          <span className="mr-3 font-bold text-secondary">✓</span>
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-white/[0.08]">
                  <a
                    href={mod.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center font-label-caps text-xs sm:text-sm py-4 px-6 uppercase tracking-widest font-bold transition-colors bg-secondary text-[#0b0b0e] hover:bg-secondary-hover rounded-md shadow-lg shadow-secondary/15"
                  >
                    {mod.ctaTexto}
                  </a>
                  <span className="block text-center text-xs text-gray-400">
                    Propuesta económica confidencial tras la sesión de diagnóstico
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 lg:py-28 bg-[#0b0b0e]">
        <div className="max-w-3xl mx-auto px-gutter">
          <div className="text-center mb-16 space-y-4">
            <span className="font-label-caps text-secondary uppercase tracking-[0.25em] text-xs sm:text-sm font-bold">DUDAS FRECUENTES</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">Preguntas Frecuentes</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="glass-card rounded-2xl overflow-hidden border border-white/[0.08]">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 sm:p-8 text-left flex justify-between items-center gap-4 font-headline-sm text-lg sm:text-xl text-white hover:text-secondary transition-colors font-bold"
                >
                  <span>{faq.q}</span>
                  <span className="text-secondary font-bold text-2xl">{openFaq === idx ? '−' : '+'}</span>
                </button>
                {openFaq === idx && (
                  <div className="px-6 sm:px-8 pb-8 text-sm sm:text-base text-gray-300 font-body-md leading-relaxed border-t border-white/[0.08] pt-5">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}
