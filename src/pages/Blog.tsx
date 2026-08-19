import AnimatedPage from '../components/AnimatedPage';
import { motion } from 'framer-motion';
import { useState } from 'react';

const articulos = [
  {
    id: 1,
    tag: "ENTREVISTA EXCLUSIVA",
    title: "Buscando al Marketero/a Ideal: Entrevista con Sonia Duro Limia",
    date: "Publicación Destacada",
    summary: "Conversación estratégica sobre las competencias digitales, el liderazgo de impacto y los rasgos diferenciadores que buscan las empresas en sus directores de marketing.",
    content: "En este encuentro profundizamos en la evolución del perfil marketero: de la pura ejecución técnica hacia la visión holística de negocio y la capacidad de orquestar equipos multidisciplinares con metodologías ágiles e inteligencia artificial.",
    img: "/images/2.png"
  },
  {
    id: 2,
    tag: "PROCESOS DE SELECCIÓN",
    title: "Recruiting Toolbox: Entrevista a Elena Martínez",
    date: "Publicación Destacada",
    summary: "Claves sobre cómo optimizar los procesos de atracción y selección de talento directivo en entornos competitivos y cambiantes.",
    content: "Una mirada entre bastidores sobre las herramientas, dinámicas de evaluación por competencias y cómo los candidatos de alto nivel pueden transmitir su verdadero valor en cada fase del proceso.",
    img: "/images/6.png"
  },
  {
    id: 3,
    tag: "INGENIERÍA DE CARRERA",
    title: "10 motivos por los que te pueden descartar en una entrevista ejecutiva",
    date: "Estrategia",
    summary: "Los errores invisibles más comunes que cometen profesionales senior y directivos al comunicar su trayectoria ante un headhunter o comité de dirección.",
    content: "Desde un discurso no adaptado al interlocutor hasta la falta de métricas de impacto de negocio o la falta de claridad en el 'por qué tú'. Analizamos cómo neutralizar cada uno de estos 10 factores.",
    img: "/images/9.png"
  },
  {
    id: 4,
    tag: "ENTREVISTA EXCLUSIVA",
    title: "Buscando al Marketero/a Ideal: Entrevista con Marta Fernández",
    date: "Publicación Destacada",
    summary: "Análisis sobre la adaptación del talento a las nuevas exigencias del mercado digital y el papel del mentoring en la aceleración de carreras.",
    content: "Reflexiones sobre el cambio de paradigma en la contratación: por qué la adaptabilidad, el pensamiento estratégico y la honestidad profesional pesan más que nunca.",
    img: "/images/12.png"
  },
  {
    id: 5,
    tag: "GUÍA PRÁCTICA",
    title: "Los 20 errores más comunes en una entrevista de trabajo (Parte 2)",
    date: "Guías & Recursos",
    summary: "Segunda entrega del decálogo de errores críticos y cómo transformarlos en oportunidades de diferenciación y conexión genuina.",
    content: "Repasamos las preguntas trampa, la negociación prematura del salario, el lenguaje no verbal en entrevistas virtuales y el seguimiento post-entrevista que marca la diferencia.",
    img: "/images/16.png"
  },
  {
    id: 6,
    tag: "MERCADO LABORAL",
    title: "El Mercado Oculto: Cómo acceder al 80% de ofertas que nunca se publican",
    date: "Inteligencia de Mercado",
    summary: "Por qué los mejores puestos directivos se cubren antes de salir a la luz y cuál es el sistema para posicionarte en el radar de los decision makers.",
    content: "Estrategias de networking cualitativo, construcción de un CRM personal de stakeholders y activación de conversaciones de valor sin necesidad de 'venderte' de forma agresiva.",
    img: "/images/20.png"
  }
];

export default function Blog() {
  const [selectedArticle, setSelectedArticle] = useState<typeof articulos[0] | null>(null);

  return (
    <AnimatedPage>
      <div className="max-w-container-max mx-auto px-gutter py-section-desktop bg-[#0b0b0e]">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-label-caps text-secondary uppercase tracking-[0.2em] text-xs font-bold">
            DIVULGACIÓN & CRITERIO
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Blog y Publicaciones
          </h1>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Artículos, entrevistas y análisis sobre selección de talento, mercado oculto, liderazgo y desarrollo de carreras de marketing digital.
          </p>
        </div>

        {/* Grid de Artículos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articulos.map((art, idx) => (
            <motion.div
              key={art.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="glass-card p-8 rounded-2xl flex flex-col justify-between cursor-pointer group border border-white/[0.06] hover:border-secondary/50 transition-all shadow-lg"
              onClick={() => setSelectedArticle(art)}
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="font-label-caps text-secondary text-xs font-bold tracking-wider">{art.tag}</span>
                  <img 
                    src={art.img} 
                    alt="" 
                    className="w-12 h-12 object-contain opacity-75 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>
                
                <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-secondary transition-colors leading-snug">
                  {art.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-6">
                  {art.summary}
                </p>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedArticle(art);
                }}
                className="inline-flex items-center gap-2 font-label-caps text-secondary font-bold text-xs hover:text-white transition-colors border-b border-secondary/40 pb-1 self-start tracking-wider"
              >
                Leer artículo completo →
              </button>
            </motion.div>
          ))}
        </div>

        {/* Modal de Lectura de Artículo */}
        {selectedArticle && (
          <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-[#121216] p-8 lg:p-12 max-w-2xl w-full max-h-[85vh] overflow-y-auto border border-secondary/40 rounded-2xl shadow-2xl relative text-white"
            >
              <button 
                onClick={() => setSelectedArticle(null)}
                className="absolute top-6 right-6 text-gray-400 hover:text-secondary text-xl font-bold p-2"
                aria-label="Cerrar modal"
              >
                ✕
              </button>

              <span className="font-label-caps text-secondary text-xs block mb-2 font-bold tracking-wider">{selectedArticle.tag}</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{selectedArticle.title}</h2>
              <p className="text-secondary font-medium text-xs mb-6 pb-4 border-b border-white/[0.08]">
                Por Javier Abeleira · DP Soluciones & BlackBox90©
              </p>

              <div className="text-gray-300 text-sm leading-relaxed space-y-4 mb-8">
                <p>{selectedArticle.summary}</p>
                <p>{selectedArticle.content}</p>
                <p className="text-xs bg-[#181820] p-4 border-l-2 border-secondary italic rounded-r text-gray-200">
                  "El mayor riesgo en una transición directiva no es la falta de competencias, sino la falta de una narrativa estratégica alineada con el mercado."
                </p>
              </div>

              <div className="border-t border-white/[0.08] pt-6 flex justify-between items-center">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="font-label-caps text-xs text-gray-400 hover:text-white uppercase tracking-wider"
                >
                  Cerrar
                </button>
                <a
                  href="https://bookme.name/dpsoluciones/lite/sesion-estrategica-blackbox90-60-minutos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary text-[#0b0b0e] font-label-caps text-xs py-2.5 px-6 hover:bg-secondary-hover transition-colors uppercase font-bold rounded-md shadow-md shadow-secondary/15 tracking-wider"
                >
                  Agendar Sesión Estratégica
                </a>
              </div>
            </motion.div>
          </div>
        )}

      </div>
    </AnimatedPage>
  );
}
