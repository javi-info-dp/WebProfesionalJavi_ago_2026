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
    desc: "Acompañamiento a profesionales de marketing digital y selección de talento directivo para startups e instituciones."
  },
  {
    empresa: "EMCC Global",
    cargo: "Coach & Mentor Acreditado (Practitioner Level)",
    fecha: "2023 - Presente",
    desc: "Acreditación internacional del European Mentoring & Coaching Council que avala el rigor y la ética de mis procesos."
  },
  {
    empresa: "NExO Professional Community SL",
    cargo: "SAM-HR (Service Area Manager Recursos Humanos)",
    fecha: "2020 - Presente",
    desc: "Líder de la comunidad de personas dentro del ecosistema colaborativo de freelancers y startups."
  },
  {
    empresa: "Consejería de Economía, Empresas y Empleo CLM",
    cargo: "Asesor de Carrera y Orientador Profesional",
    fecha: "2021 - 2025 (4 años)",
    desc: "Consultoría estratégica en empleo, autoempleo y creación de negocios."
  },
  {
    empresa: "Universidad Europea de Valencia",
    cargo: "Formador de Habilidades Directivas",
    fecha: "2019 - 2020",
    desc: "Docencia en el Máster Universitario en Gestión de Proyectos - Project Management."
  },
  {
    empresa: "CCOO & Fondos Europeos",
    cargo: "Adjunto Secretaría de Empleo & Técnico de Empleo",
    fecha: "2010 - 2017 (7 años)",
    desc: "Diseño y seguimiento de políticas activas de empleo, Fondos FSE y FEDER de la UE."
  }
];

export default function About() {
  return (
    <AnimatedPage>
      <div className="max-w-container-max mx-auto px-gutter py-section-desktop bg-[#0b0b0e]">
        
        {/* Bio Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-8 space-y-6">
            <span className="font-label-caps text-secondary uppercase tracking-widest text-xs font-bold">SOBRE MÍ</span>
            <h1 className="font-display-lg-mobile md:font-display-lg text-white">
              Javier Abeleira
            </h1>
            <h2 className="font-headline-sm text-secondary font-medium text-lg md:text-xl">
              Headhunter · EMCC Accredited Coach/Mentor · Creador de BlackBox90©
            </h2>
            <p className="font-body-lg text-gray-300 leading-relaxed text-base md:text-lg">
              Tras más de dos décadas transformando equipos y analizando el mercado laboral, decidí enfocar mi energía en lo que más me apasiona: <strong className="text-white">impulsar carreras ejecutivas y construir equipos ganadores</strong>.
            </p>
            <p className="font-body-md text-gray-400 leading-relaxed text-sm">
              No vendo fórmulas mágicas ni soluciones prefabricadas. Mi enfoque se basa en una relación cercana, sincera y sin artificios. Combino la visión estratégica de un seleccionador en activo con el rigor profundo de un coach certificado para ayudarte a dar el salto que realmente mereces.
            </p>
          </div>

          <div className="lg:col-span-4 glass-panel p-8 text-white rounded-xl">
            <span className="font-label-caps text-secondary text-xs block mb-3 font-bold tracking-wider">EN CIFRAS</span>
            <div className="space-y-4">
              <div>
                <div className="text-3xl font-bold font-display-lg-mobile text-secondary">+27 Años</div>
                <div className="text-xs text-gray-400">En selección, RR.HH. y desarrollo de talento</div>
              </div>
              <div className="border-t border-white/[0.08] pt-3">
                <div className="text-3xl font-bold font-display-lg-mobile text-secondary">+1.000</div>
                <div className="text-xs text-gray-400">Búsquedas ejecutivas y procesos de selección</div>
              </div>
              <div className="border-t border-white/[0.08] pt-3">
                <div className="text-3xl font-bold font-display-lg-mobile text-secondary">EMCC</div>
                <div className="text-xs text-gray-400">Practitioner Accredited Coach & Mentor</div>
              </div>
            </div>
          </div>
        </div>

        {/* Hitos de Carrera */}
        <section className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-label-caps text-secondary uppercase tracking-widest text-xs font-bold">TRAYECTORIA</span>
            <h2 className="font-headline-lg text-white mt-2">Experiencia Clave</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hitos.map((hito, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="glass-card p-6 rounded-xl"
              >
                <span className="font-label-caps text-secondary text-xs block mb-1 font-bold">{hito.fecha}</span>
                <h3 className="font-headline-sm text-white text-base font-bold mb-1">{hito.empresa}</h3>
                <h4 className="font-body-md text-secondary font-semibold text-xs mb-3">{hito.cargo}</h4>
                <p className="font-body-md text-gray-400 text-xs leading-relaxed">{hito.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Educación & Certificaciones */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 glass-panel p-8 rounded-xl">
            <h3 className="font-headline-md text-white mb-6 text-xl font-bold">Formación Académica & Posgrados</h3>
            <div className="space-y-4">
              {educacion.map((edu, idx) => (
                <div key={idx} className="border-b border-white/[0.06] pb-3 last:border-b-0">
                  <h4 className="font-headline-sm text-white text-sm md:text-base font-bold">{edu.titulo}</h4>
                  <p className="font-body-md text-secondary text-xs md:text-sm font-medium">{edu.centro}</p>
                  <p className="font-label-caps text-gray-400 text-[11px] mt-0.5">{edu.periodo}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 glass-card p-8 rounded-xl">
            <h3 className="font-headline-md text-white mb-6 text-lg font-bold">Certificaciones</h3>
            <ul className="space-y-3">
              {certificaciones.map((cert, idx) => (
                <li key={idx} className="flex items-start text-xs text-gray-300">
                  <span className="text-secondary mr-2 font-bold">✓</span>
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
