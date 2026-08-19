import AnimatedPage from '../components/AnimatedPage';
import { motion } from 'framer-motion';

const educacion = [
  {
    titulo: "Licenciatura en Ciencias Políticas y Sociología",
    centro: "Universidad de Granada",
    periodo: "1995 - 2000"
  },
  {
    titulo: "Máster en Coaching y Mentoring",
    centro: "UNIR - La Universidad en Internet",
    periodo: "Octubre de 2022 - Mayo de 2023"
  },
  {
    titulo: "Máster Full Stack (Programación e Inteligencia Artificial)",
    centro: "Conquer Blocks",
    periodo: "Febrero de 2025"
  },
  {
    titulo: "Executive Master in Project Management",
    centro: "Universitat Politècnica de València (UPV)",
    periodo: "2006"
  },
  {
    titulo: "Master M.B.A. Dirección y Gestión de Empresas",
    centro: "Compañía de Formación Empresarial (CFE)",
    periodo: "2007"
  }
];

const certificaciones = [
  "EMCC Accredited Coach/Mentor (Practitioner Level)",
  "Orientación Profesional e Inserción Laboral",
  "Inteligencia Emocional y Gestión del Cambio",
  "Gestión de Proyectos con Metodologías Ágiles y Enfoques Lean",
  "Pseudocódigo, Lógica de Programación e IA",
  "Aspectos Generales de la Transparencia"
];

const hitos = [
  {
    empresa: "DP SOLUCIONES · Desarrollo Profesional",
    cargo: "Fundador · Recruiter | Headhunter (Freelance)",
    fecha: "2017 - Presente (9 años)",
    desc: "Acompañamiento a profesionales senior de marketing digital y selección de talento directivo para startups e instituciones.",
    img: "/images/13.png"
  },
  {
    empresa: "EMCC Global",
    cargo: "Coach & Mentor Acreditado (Practitioner Level)",
    fecha: "2023 - Presente",
    desc: "Acreditación internacional del European Mentoring & Coaching Council que avala el rigor y la ética de mis procesos.",
    img: "/images/23.png"
  },
  {
    empresa: "NExO Professional Community SL",
    cargo: "SAM-HR (Service Area Manager Recursos Humanos)",
    fecha: "2020 - Presente",
    desc: "Líder de la comunidad de personas dentro del ecosistema colaborativo de freelancers y startups.",
    img: "/images/26.png"
  },
  {
    empresa: "Consejería de Economía, Empresas y Empleo CLM",
    cargo: "Asesor de Carrera y Orientador Profesional",
    fecha: "2021 - 2025 (4 años)",
    desc: "Consultoría estratégica en empleo, autoempleo y creación de negocios.",
    img: "/images/30.png"
  },
  {
    empresa: "Universidad Europea de Valencia",
    cargo: "Formador de Habilidades Directivas",
    fecha: "2019 - 2020",
    desc: "Docencia en el Máster Universitario en Gestión de Proyectos - Project Management.",
    img: "/images/34.png"
  },
  {
    empresa: "CCOO & Fondos Europeos",
    cargo: "Adjunto Secretaría de Empleo & Técnico de Empleo",
    fecha: "2010 - 2017 (7 años)",
    desc: "Diseño y seguimiento de políticas activas de empleo, Fondos FSE y FEDER de la UE.",
    img: "/images/42.png"
  }
];

export default function About() {
  return (
    <AnimatedPage>
      <div className="max-w-container-max mx-auto px-gutter py-section-desktop bg-[#0b0b0e]">
        
        {/* Bio Header con Foto de Javier */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="font-label-caps text-secondary uppercase tracking-[0.25em] text-xs sm:text-sm font-bold block">
              SOBRE MÍ
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Javier Abeleira
            </h1>
            <h2 className="text-2xl sm:text-3xl text-secondary font-medium">
              Headhunter · EMCC Accredited Coach/Mentor · Creador de BlackBox90©
            </h2>
            <p className="text-gray-300 leading-relaxed text-base sm:text-lg md:text-xl">
              Tras más de dos décadas transformando equipos y analizando el mercado laboral desde dentro, decidí enfocar mi energía en lo que más me apasiona: <strong className="text-white">impulsar carreras de líderes de marketing digital y construir equipos ganadores</strong>.
            </p>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              No vendo fórmulas mágicas ni soluciones prefabricadas. Mi enfoque se basa en una relación cercana, sincera y sin artificios. Combino la visión estratégica de un seleccionador en activo con el rigor profundo de un coach certificado para ayudarte a dar el salto que realmente mereces.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Foto de Javier en alta resolución */}
            <div className="relative rounded-3xl overflow-hidden border-2 border-secondary/40 shadow-2xl group">
              <img 
                src="/images/14.jpg" 
                alt="Javier Abeleira" 
                className="w-full h-80 sm:h-96 object-cover object-top group-hover:scale-105 transition-all duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0e] via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <div>
                  <span className="text-white font-bold text-lg block">Javier Abeleira</span>
                  <span className="text-secondary text-xs">Acreditación Internacional EMCC Global</span>
                </div>
              </div>
            </div>

            {/* Tarjeta En Cifras */}
            <div className="glass-panel p-6 rounded-2xl border border-white/[0.08] grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-secondary">Más de 20</div>
                <div className="text-[11px] text-gray-400 mt-1">Años de experiencia</div>
              </div>
              <div className="border-x border-white/[0.08] px-2">
                <div className="text-2xl sm:text-3xl font-bold text-secondary">Más de 1.000</div>
                <div className="text-[11px] text-gray-400 mt-1">Búsquedas cerradas</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-secondary">EMCC</div>
                <div className="text-[11px] text-gray-400 mt-1">Practitioner Level</div>
              </div>
            </div>
          </div>

        </div>

        {/* Hitos de Carrera */}
        <section className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="font-label-caps text-secondary uppercase tracking-[0.25em] text-xs sm:text-sm font-bold">TRAYECTORIA</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">Experiencia Clave</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hitos.map((hito, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="glass-card p-8 rounded-3xl flex flex-col justify-between border border-white/[0.08] group shadow-xl"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="font-label-caps text-secondary text-xs sm:text-sm block font-bold tracking-wider">{hito.fecha}</span>
                    <img 
                      src={hito.img} 
                      alt="" 
                      className="w-12 h-12 object-contain opacity-75 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{hito.empresa}</h3>
                  <h4 className="text-sm text-secondary font-semibold mb-4">{hito.cargo}</h4>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{hito.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Educación & Certificaciones */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 glass-panel p-8 lg:p-12 rounded-3xl border border-white/[0.08]">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8">Formación Académica & Posgrados</h3>
            <div className="space-y-6">
              {educacion.map((edu, idx) => (
                <div key={idx} className="border-b border-white/[0.06] pb-5 last:border-b-0">
                  <h4 className="text-lg sm:text-xl font-bold text-white">{edu.titulo}</h4>
                  <p className="text-secondary text-sm sm:text-base font-medium mt-1">{edu.centro}</p>
                  <p className="text-gray-400 text-xs mt-1 font-mono">{edu.periodo}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 glass-card p-8 lg:p-10 rounded-3xl border border-white/[0.08]">
            <h3 className="text-2xl font-bold text-white mb-6">Certificaciones</h3>
            <ul className="space-y-4">
              {certificaciones.map((cert, idx) => (
                <li key={idx} className="flex items-start text-xs sm:text-sm text-gray-200 leading-relaxed">
                  <span className="text-secondary mr-3 font-bold text-base">✓</span>
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

      </div>
    </AnimatedPage>
  );
}
