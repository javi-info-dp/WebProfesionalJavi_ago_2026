import AnimatedPage from '../components/AnimatedPage';
import { motion } from 'framer-motion';
import { useState } from 'react';

const fases = [
  {
    num: "1",
    titulo: "Claridad y Diferenciación",
    periodo: "Días 1 - 30",
    puntos: [
      "¿Qué quieres y qué te motiva realmente?",
      "Definición de tu Propuesta de Valor Única (PVU)",
      "Creación de tu CV Estratégico (no genérico)",
      "Diseño de tu Portfolio de Liderazgo"
    ],
    entregable: "Posicionamiento claro y materiales profesionales de alto nivel"
  },
  {
    num: "2",
    titulo: "Construcción y Visibilidad",
    periodo: "Días 31 - 60",
    puntos: [
      "CRM Personal con 20-30 stakeholders clave del sector",
      "Optimización de LinkedIn orientada a decisión ejecutiva",
      "Activación de pipeline con 15-25 conversaciones estratégicas",
      "Apertura del mercado oculto de oportunidades"
    ],
    entregable: "Motor de acceso al mercado oculto 100% operativo"
  },
  {
    num: "3",
    titulo: "Validación y Momentum",
    periodo: "Días 61 - 90",
    puntos: [
      "Simulaciones de entrevista con enfoque headhunter",
      "Validación market-ready y feedback en tiempo real",
      "Estrategia y simulación de negociación retributiva",
      "Instalación de sistema sostenible para el futuro"
    ],
    entregable: "Momentum profesional + máxima confianza ejecutiva"
  }
];

const planes = [
  {
    nombre: "LITE",
    duracion: "90 días",
    precio: "1.200 €",
    cuotas: "o 2 cuotas de 650 €",
    dedicacion: "2-4 horas / semana",
    idealPara: "Profesionales con preparación previa sólida y autonomía que necesitan optimización, foco e integración de sistema.",
    incluye: [
      "8 Sesiones individuales 1:1",
      "5 Anexos operativos personalizados",
      "Auditoría y CV Estratégico",
      "Optimización de perfil de LinkedIn",
      "Soporte continuo por email"
    ],
    destacado: false,
    ctaLink: "https://form.typeform.com/to/u1QuphFN"
  },
  {
    nombre: "PREMIUM",
    duracion: "120 días",
    precio: "2.900 €",
    cuotas: "o 3 cuotas de 1.000 €",
    dedicacion: "3-5 horas / semana",
    idealPara: "Profesionales que buscan una construcción integral, transformación profunda o tienen múltiples dimensiones a potenciar.",
    incluye: [
      "14 Sesiones individuales 1:1",
      "4 Flash Calls para decisiones urgentes",
      "6 Anexos operativos completos",
      "Dashboard de KPIs + CRM Personalizado",
      "Simulaciones intensivas de entrevista y negociación",
      "Acompañamiento prioritario en onboarding"
    ],
    destacado: true,
    ctaLink: "https://form.typeform.com/to/u1QuphFN"
  }
];

const faqs = [
  {
    q: "¿Para quién está diseñado exactamente BlackBox90©?",
    a: "Para profesionales senior de marketing digital (con más de 5 años de experiencia, actualmente en roles de Senior Manager, Head o Director) que buscan su siguiente salto a CMO, VP Marketing o proyectos de alto impacto. No está dirigido a perfiles junior o mid-level."
  },
  {
    q: "¿Cuál es la diferencia entre LITE y PREMIUM?",
    a: "LITE (90 días, 1.200€) incluye 8 sesiones y 5 anexos para quienes necesitan afinar y optimizar su estrategia. PREMIUM (120 días, 2.900€) incluye 14 sesiones, 4 flash calls, 6 anexos y el Dashboard completo de KPIs para una reestructuración ejecutiva total."
  },
  {
    q: "¿Garantizas que conseguiré un trabajo?",
    a: "No. BlackBox90© es un programa de ingeniería de carrera y estrategia personal, no una agencia de colocación. Garantizo que tendrás el sistema completo, las herramientas profesionales y la preparación necesaria para competir al máximo nivel. El éxito depende de tu ejecución y del contexto del mercado."
  },
  {
    q: "¿Las sesiones son presenciales u online?",
    a: "Todas las sesiones son 100% online por Google Meet con flexibilidad de agenda, permitiendo trabajar con profesionales en cualquier punto de España, Europa o Latinoamérica."
  },
  {
    q: "¿Qué pasa si a mitad del programa consigo una oferta?",
    a: "¡Celebramos y pivotamos de inmediato! Las sesiones restantes se reorientan a la negociación del paquete retributivo, evaluación del contrato y plan de onboarding estratégico para tus primeros 90 días en el nuevo rol."
  }
];

export default function BlackBox90() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <AnimatedPage>
      {/* Hero BlackBox90 */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-[#0b0b0e] text-white py-20 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-secondary/10 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-container-max mx-auto px-gutter relative z-10 text-center">
          <span className="font-label-caps text-secondary tracking-[0.2em] text-xs uppercase block mb-4 font-bold">
            PROGRAMA HÍBRIDO DE COACHING Y MENTORING EJECUTIVO
          </span>
          <h1 className="font-display-lg-mobile md:font-display-lg text-white tracking-tight max-w-4xl mx-auto leading-[1.1]">
            BlackBox90©: <br/>
            <span className="text-secondary italic">Cambio de Juego</span>
          </h1>
          <p className="font-body-lg text-gray-300 max-w-2xl mx-auto mt-6 text-base md:text-xl leading-relaxed">
            Un laboratorio de estrategia personal de 90 días para profesionales de marketing digital que han tocado techo y saben que su verdadero potencial es mucho mayor.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <a
              href="https://form.typeform.com/to/u1QuphFN"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary text-[#0b0b0e] font-label-caps py-4 px-8 hover:bg-secondary-hover transition-colors font-bold uppercase text-xs tracking-widest shadow-xl shadow-secondary/15 rounded"
            >
              Postular a una de las 8 Plazas
            </a>
            <a
              href="https://bookme.name/dpsoluciones/lite/sesion-estrategica-blackbox90-60-minutos"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 text-white font-label-caps py-4 px-8 hover:bg-white/5 hover:border-secondary transition-colors uppercase text-xs tracking-widest rounded"
            >
              Agendar Sesión Estratégica (60 min)
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mt-12 text-xs text-gray-300 border-t border-white/[0.06] pt-6">
            <span><strong className="text-secondary">✓</strong> Solo 8 plazas por edición</span>
            <span><strong className="text-secondary">✓</strong> 100% tailor-made</span>
            <span><strong className="text-secondary">✓</strong> Certificación EMCC</span>
            <span><strong className="text-secondary">✓</strong> 4 Coaching + 3 Mentoring</span>
          </div>
        </div>
      </section>

      {/* El Verdadero Desafío */}
      <section className="py-section-padding-mobile md:py-section-padding-desktop bg-[#0e0e12] border-y border-white/[0.06]">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-label-caps text-secondary uppercase tracking-widest text-xs font-bold">EL RETO</span>
            <h2 className="font-headline-lg text-white mt-2">El verdadero desafío no está en tu CV</h2>
            <p className="font-body-md text-gray-400 mt-2 text-sm">
              Llevas años liderando equipos y estrategias. Has alcanzado el éxito, pero la fórmula actual ya no te satisface.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card p-6 rounded-xl">
              <h3 className="font-headline-sm text-white text-base font-bold mb-2">Ofertas que no motivan</h3>
              <p className="font-body-md text-gray-400 text-xs leading-relaxed">Las oportunidades que te llegan parecen más de lo mismo y no suponen un desafío real.</p>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <h3 className="font-headline-sm text-white text-base font-bold mb-2">Discurso estancado</h3>
              <p className="font-body-md text-gray-400 text-xs leading-relaxed">No sabes cómo empaquetar y monetizar todo tu valor acumulado para el siguiente gran salto.</p>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <h3 className="font-headline-sm text-white text-base font-bold mb-2">Mercado opaco</h3>
              <p className="font-body-md text-gray-400 text-xs leading-relaxed">El 80% de las mejores posiciones ejecutivas nunca se publican y no sabes cómo acceder a ellas.</p>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <h3 className="font-headline-sm text-white text-base font-bold mb-2">Miedo al paso en falso</h3>
              <p className="font-body-md text-gray-400 text-xs leading-relaxed">Una mala decisión en esta etapa de tu carrera tiene un coste personal y profesional muy alto.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Las 3 Fases del Sistema */}
      <section className="py-section-padding-mobile md:py-section-padding-desktop bg-[#0b0b0e] border-b border-white/[0.06]">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-label-caps text-secondary uppercase tracking-widest text-xs font-bold">EL MÉTODO</span>
            <h2 className="font-headline-lg text-white mt-2">El Sistema en 3 Fases</h2>
            <p className="font-body-md text-gray-400 mt-2 text-sm">90 días de transformación ejecutiva, estratégica y personal.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fases.map((fase, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-panel p-8 rounded-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="w-10 h-10 rounded-full bg-secondary text-[#0b0b0e] flex items-center justify-center font-bold text-lg font-headline-sm">
                      {fase.num}
                    </span>
                    <span className="font-label-caps text-secondary text-xs font-bold">{fase.periodo}</span>
                  </div>
                  
                  <h3 className="font-headline-sm text-white mb-4 text-xl font-bold">{fase.titulo}</h3>
                  
                  <ul className="space-y-2.5 mb-6">
                    {fase.puntos.map((punto, pIdx) => (
                      <li key={pIdx} className="flex items-start text-xs text-gray-300 leading-relaxed">
                        <span className="text-secondary mr-2 font-bold">•</span>
                        <span>{punto}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-white/[0.08] pt-4 bg-white/[0.02] -mx-8 -mb-8 p-6 mt-4 rounded-b-xl">
                  <span className="font-label-caps text-secondary text-[10px] uppercase block mb-1 font-bold">Entregable:</span>
                  <p className="font-body-md text-white text-xs font-semibold">{fase.entregable}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Planes y Modalidades (LITE vs PREMIUM) */}
      <section className="py-section-padding-mobile md:py-section-padding-desktop bg-[#0e0e12] border-b border-white/[0.06]">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-label-caps text-secondary uppercase tracking-widest text-xs font-bold">MODALIDADES</span>
            <h2 className="font-headline-lg text-white mt-2">Programas y Precios</h2>
            <p className="font-body-md text-gray-400 mt-2 text-sm">
              Elige el nivel de profundidad que mejor se adapte a tu momento actual.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {planes.map((plan, idx) => (
              <div
                key={idx}
                className={`p-8 lg:p-10 rounded-xl border flex flex-col justify-between transition-all duration-300 relative ${
                  plan.destacado
                    ? 'glass-panel border-secondary shadow-2xl shadow-secondary/10'
                    : 'glass-card'
                }`}
              >
                {plan.destacado && (
                  <span className="absolute -top-3 right-8 bg-secondary text-[#0b0b0e] font-label-caps text-[10px] py-1 px-4 uppercase font-bold tracking-widest shadow-md rounded">
                    MÁS COMPLETO
                  </span>
                )}

                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="font-headline-md text-2xl text-white font-bold">{plan.nombre}</h3>
                    <span className="font-label-caps text-xs text-secondary font-bold">{plan.duracion}</span>
                  </div>

                  <div className="mb-6">
                    <div className="font-display-lg-mobile text-3xl md:text-4xl font-bold text-secondary">
                      {plan.precio}
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      {plan.cuotas} · {plan.dedicacion}
                    </div>
                  </div>

                  <p className="font-body-md text-xs text-gray-300 mb-6 leading-relaxed">
                    {plan.idealPara}
                  </p>

                  <div className="border-t border-white/[0.08] pt-4 mb-8">
                    <span className="font-label-caps text-[11px] uppercase block mb-3 text-secondary font-bold">
                      Qué incluye:
                    </span>
                    <ul className="space-y-2.5">
                      {plan.incluye.map((inc, iIdx) => (
                        <li key={iIdx} className="flex items-start text-xs text-gray-200">
                          <span className="mr-2 font-bold text-secondary">✓</span>
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a
                  href={plan.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center font-label-caps text-xs py-4 px-6 uppercase tracking-wider font-bold transition-colors bg-secondary text-[#0b0b0e] hover:bg-secondary-hover rounded shadow-lg shadow-secondary/15"
                >
                  Postular a Plaza ({plan.nombre})
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-section-padding-mobile md:py-section-padding-desktop bg-[#0b0b0e]">
        <div className="max-w-3xl mx-auto px-gutter">
          <div className="text-center mb-12">
            <span className="font-label-caps text-secondary uppercase tracking-widest text-xs font-bold">DUDAS FRECUENTES</span>
            <h2 className="font-headline-lg text-white mt-2">Preguntas Frecuentes</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="glass-card rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 text-left flex justify-between items-center gap-4 font-headline-sm text-base text-white hover:text-secondary transition-colors font-bold"
                >
                  <span>{faq.q}</span>
                  <span className="text-secondary font-bold text-lg">{openFaq === idx ? '−' : '+'}</span>
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-sm text-gray-300 font-body-md leading-relaxed border-t border-white/[0.06] pt-4">
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
