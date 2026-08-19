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
      <section className="relative min-h-[85vh] flex items-center justify-center bg-primary-container text-on-primary py-20 overflow-hidden">
        <div className="max-w-container-max mx-auto px-gutter relative z-10 text-center">
          <span className="font-label-caps text-secondary-container tracking-widest text-sm uppercase block mb-4">
            PROGRAMA HÍBRIDO DE COACHING Y MENTORING EJECUTIVO
          </span>
          <h1 className="font-display-lg-mobile md:font-display-lg text-on-primary tracking-tight max-w-4xl mx-auto">
            BlackBox90©: <br/>
            <span className="text-secondary-fixed italic">Cambio de Juego</span>
          </h1>
          <p className="font-body-lg text-on-primary-container max-w-2xl mx-auto mt-6 text-base md:text-xl leading-relaxed">
            Un laboratorio de estrategia personal de 90 días para profesionales de marketing digital que han tocado techo y saben que su verdadero potencial es mucho mayor.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <a
              href="https://form.typeform.com/to/RH3SPk3R"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary-container text-on-secondary-fixed font-label-caps py-4 px-8 hover:bg-secondary-fixed transition-colors font-bold uppercase text-xs tracking-wider"
            >
              Evaluar mi Preparación (Scorecard)
            </a>
            <a
              href="https://bookme.name/dpsoluciones/lite/sesion-estrategica-blackbox90-60-minutos"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-on-primary/30 text-on-primary font-label-caps py-4 px-8 hover:bg-on-primary/10 transition-colors uppercase text-xs tracking-wider"
            >
              Agendar Sesión Estratégica (60 min)
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mt-12 text-xs text-secondary-container border-t border-outline-navy pt-6">
            <span>✓ Diagnóstico en 6 dimensiones</span>
            <span>✓ Solo 8 plazas por edición</span>
            <span>✓ 100% tailor-made</span>
            <span>✓ Certificación EMCC</span>
          </div>
        </div>
      </section>

      {/* El Verdadero Desafío */}
      <section className="py-section-padding-mobile md:py-section-padding-desktop bg-surface border-b border-outline-variant/30">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-label-caps text-secondary uppercase tracking-widest">EL RETO</span>
            <h2 className="font-headline-lg text-primary mt-2">El verdadero desafío no está en tu CV</h2>
            <p className="font-body-md text-on-surface-variant mt-2">
              Llevas años liderando equipos y estrategias. Has alcanzado el éxito, pero la fórmula actual ya no te satisface.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-surface-container-lowest p-6 border border-outline-variant/30">
              <h3 className="font-headline-sm text-primary text-base font-bold mb-2">Ofertas que no motivan</h3>
              <p className="font-body-md text-on-surface-variant text-sm">Las oportunidades que te llegan parecen más de lo mismo y no suponen un desafío real.</p>
            </div>
            <div className="bg-surface-container-lowest p-6 border border-outline-variant/30">
              <h3 className="font-headline-sm text-primary text-base font-bold mb-2">Discurso estancado</h3>
              <p className="font-body-md text-on-surface-variant text-sm">No sabes cómo empaquetar y monetizar todo tu valor acumulado para el siguiente gran salto.</p>
            </div>
            <div className="bg-surface-container-lowest p-6 border border-outline-variant/30">
              <h3 className="font-headline-sm text-primary text-base font-bold mb-2">Mercado opaco</h3>
              <p className="font-body-md text-on-surface-variant text-sm">El 80% de las mejores posiciones ejecutivas nunca se publican y no sabes cómo acceder a ellas.</p>
            </div>
            <div className="bg-surface-container-lowest p-6 border border-outline-variant/30">
              <h3 className="font-headline-sm text-primary text-base font-bold mb-2">Miedo al paso en falso</h3>
              <p className="font-body-md text-on-surface-variant text-sm">Una mala decisión en esta etapa de tu carrera tiene un coste personal y profesional muy alto.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Las 3 Fases del Sistema */}
      <section className="py-section-padding-mobile md:py-section-padding-desktop bg-surface-container-low border-b border-outline-variant/30">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-label-caps text-secondary uppercase tracking-widest">EL MÉTODO</span>
            <h2 className="font-headline-lg text-primary mt-2">El Sistema en 3 Fases</h2>
            <p className="font-body-md text-on-surface-variant mt-2">90 días de transformación ejecutiva, estratégica y personal.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fases.map((fase, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-surface-container-lowest p-8 border border-outline-variant/30 flex flex-col justify-between shadow-sm hover:border-secondary transition-all"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="w-10 h-10 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-bold text-lg font-headline-sm">
                      {fase.num}
                    </span>
                    <span className="font-label-caps text-secondary text-xs">{fase.periodo}</span>
                  </div>
                  
                  <h3 className="font-headline-sm text-primary mb-4 text-xl">{fase.titulo}</h3>
                  
                  <ul className="space-y-2.5 mb-6">
                    {fase.puntos.map((punto, pIdx) => (
                      <li key={pIdx} className="flex items-start text-xs text-on-surface-variant leading-relaxed">
                        <span className="text-secondary mr-2">•</span>
                        <span>{punto}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-outline-variant/20 pt-4 bg-surface-container/30 -mx-8 -mb-8 p-6 mt-4">
                  <span className="font-label-caps text-secondary text-[10px] uppercase block mb-1">Entregable:</span>
                  <p className="font-body-md text-primary text-xs font-semibold">{fase.entregable}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Planes y Modalidades (LITE vs PREMIUM) */}
      <section className="py-section-padding-mobile md:py-section-padding-desktop bg-surface border-b border-outline-variant/30">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-label-caps text-secondary uppercase tracking-widest">MODALIDADES</span>
            <h2 className="font-headline-lg text-primary mt-2">Programas y Precios</h2>
            <p className="font-body-md text-on-surface-variant mt-2">
              Elige el nivel de profundidad que mejor se adapte a tu momento actual.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {planes.map((plan, idx) => (
              <div
                key={idx}
                className={`p-8 lg:p-10 border flex flex-col justify-between transition-all duration-300 relative ${
                  plan.destacado
                    ? 'bg-primary-container text-on-primary border-secondary-fixed shadow-2xl scale-[1.02]'
                    : 'bg-surface-container-lowest text-on-surface border-outline-variant/30'
                }`}
              >
                {plan.destacado && (
                  <span className="absolute -top-3.5 right-8 bg-secondary-container text-on-secondary-fixed font-label-caps text-[10px] py-1 px-4 uppercase font-bold tracking-widest shadow">
                    MÁS COMPLETO
                  </span>
                )}

                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className={`font-headline-md text-2xl ${plan.destacado ? 'text-on-primary' : 'text-primary'}`}>{plan.nombre}</h3>
                    <span className={`font-label-caps text-xs ${plan.destacado ? 'text-secondary-container' : 'text-secondary'}`}>{plan.duracion}</span>
                  </div>

                  <div className="mb-6">
                    <div className={`font-display-lg-mobile text-3xl font-bold ${plan.destacado ? 'text-secondary-fixed' : 'text-secondary'}`}>
                      {plan.precio}
                    </div>
                    <div className={`text-xs ${plan.destacado ? 'text-on-primary-container' : 'text-on-surface-variant'}`}>
                      {plan.cuotas} · {plan.dedicacion}
                    </div>
                  </div>

                  <p className={`font-body-md text-xs mb-6 leading-relaxed ${plan.destacado ? 'text-on-primary-container' : 'text-on-surface-variant'}`}>
                    {plan.idealPara}
                  </p>

                  <div className={`border-t pt-4 mb-8 ${plan.destacado ? 'border-outline-navy' : 'border-outline-variant/20'}`}>
                    <span className={`font-label-caps text-[11px] uppercase block mb-3 ${plan.destacado ? 'text-secondary-container' : 'text-secondary'}`}>
                      Qué incluye:
                    </span>
                    <ul className="space-y-2.5">
                      {plan.incluye.map((inc, iIdx) => (
                        <li key={iIdx} className={`flex items-start text-xs ${plan.destacado ? 'text-on-primary' : 'text-on-surface'}`}>
                          <span className={`mr-2 font-bold ${plan.destacado ? 'text-secondary-container' : 'text-secondary'}`}>✓</span>
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
                  className={`block text-center font-label-caps text-xs py-4 px-6 uppercase tracking-wider font-bold transition-colors ${
                    plan.destacado
                      ? 'bg-secondary-container text-on-secondary-fixed hover:bg-secondary-fixed'
                      : 'bg-primary text-on-primary hover:bg-secondary'
                  }`}
                >
                  Solicitar Plaza ({plan.nombre})
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-section-padding-mobile md:py-section-padding-desktop bg-surface-container-low">
        <div className="max-w-3xl mx-auto px-gutter">
          <div className="text-center mb-12">
            <span className="font-label-caps text-secondary uppercase tracking-widest">DUDAS FRECUENTES</span>
            <h2 className="font-headline-lg text-primary mt-2">Preguntas Frecuentes</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-surface-container-lowest border border-outline-variant/30 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 text-left flex justify-between items-center gap-4 font-headline-sm text-base text-primary hover:text-secondary transition-colors"
                >
                  <span>{faq.q}</span>
                  <span className="text-secondary font-bold text-lg">{openFaq === idx ? '−' : '+'}</span>
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-sm text-on-surface-variant font-body-md leading-relaxed border-t border-outline-variant/10 pt-4">
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
