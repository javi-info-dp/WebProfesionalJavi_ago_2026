import AnimatedPage from '../components/AnimatedPage';
import { motion } from 'framer-motion';

export default function EducationSkills() {
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
      titulo: "Máster Full Stack (Programación e IA)",
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
    "Orientación Profesional",
    "Inteligencia Emocional",
    "Gestión de Proyectos con Metodologías Ágiles y Enfoques Lean (5.ª ed.)",
    "Pseudocódigo y Lógica de Programación",
    "Aspectos Generales de la Transparencia"
  ];

  const aptitudes = [
    "Asesor de carreras profesionales",
    "Coaching de desarrollo del liderazgo",
    "Headhunting & Executive Search",
    "Inteligencia Artificial aplicada a RR.HH.",
    "Negociación de acuerdos directivos",
    "Metodologías Ágiles & Project Management",
    "Planificación estratégica de carrera",
    "Marketing Personal & Posicionamiento"
  ];

  return (
    <AnimatedPage>
      <div className="max-w-container-max mx-auto px-gutter py-section-desktop">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-[32px] auto-rows-min">
          
          {/* Educación */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="md:col-span-8 bg-surface-container-lowest p-8 lg:p-12 border border-secondary/20 rounded relative group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
              <span className="material-symbols-outlined text-[120px] text-secondary">school</span>
            </div>
            <h2 className="font-label-caps text-secondary mb-[16px]">Formación Académica</h2>
            <h3 className="font-headline-md text-primary mb-[32px]">Educación & Posgrados</h3>
            
            <div className="space-y-6 relative z-10">
              {educacion.map((edu, idx) => (
                <div key={idx} className="border-b border-outline-variant/20 pb-4 last:border-b-0">
                  <h4 className="font-headline-sm text-primary text-lg font-bold">{edu.titulo}</h4>
                  <p className="font-body-lg text-secondary mt-1">{edu.centro}</p>
                  <p className="font-label-sm text-on-surface-variant mt-1 uppercase tracking-wider">{edu.periodo}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certificaciones Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="md:col-span-4 bg-primary-container p-8 lg:p-10 rounded border border-primary-fixed/20 flex flex-col justify-between"
          >
            <div>
              <h2 className="font-label-caps text-secondary-container mb-[16px]">Acreditaciones</h2>
              <h3 className="font-headline-md text-on-primary mb-[24px] text-xl">Certificaciones</h3>
              <ul className="space-y-3">
                {certificaciones.map((cert, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-3 bg-secondary-container flex-shrink-0"></span>
                    <span className="font-body-md text-on-primary-container text-sm">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Aptitudes y Competencias Clave */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="md:col-span-12 mt-[16px] lg:mt-0"
          >
            <h2 className="font-headline-md text-primary mb-[24px]">Aptitudes Principales</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[16px]">
              {aptitudes.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.04 }}
                  className="bg-surface-container-lowest border border-outline-variant/30 p-6 text-center hover:border-secondary transition-colors duration-300 group"
                >
                  <span className="font-label-caps text-secondary block mb-2">0{index + 1}</span>
                  <span className="font-body-lg text-primary group-hover:text-secondary transition-colors text-sm md:text-base font-semibold">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </AnimatedPage>
  );
}
