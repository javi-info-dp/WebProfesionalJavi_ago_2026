import AnimatedPage from '../components/AnimatedPage';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: "Recruiter | Headhunter (Freelance). Selección de personal",
    company: "DP SOLUCIONES. Desarrollo profesional",
    period: "Septiembre de 2017 - Presente (9 años)",
    location: "España",
    desc: "Tras más de dos décadas transformando equipos y viendo el potencial del marketing digital, decidí enfocar mi energía en lo que más me apasiona: impulsar carreras y construir equipos ganadores. Acompañamiento a profesionales de marketing digital y selección de talento directivo para startups."
  },
  {
    role: "EMCC Accredited Coach/Mentor at Practitioner level",
    company: "EMCC Global",
    period: "Octubre de 2023 - Presente (2 años 11 meses)",
    location: "Barcelona y alrededores",
    desc: "Acreditación internacional como Coach y Mentor a nivel Practitioner por el European Mentoring & Coaching Council."
  },
  {
    role: "SAM-HR (Service Area Manager Recursos Humanos)",
    company: "NExO Professional Community SL",
    period: "Octubre de 2020 - Presente (5 años 11 meses)",
    location: "Madrid, Comunidad de Madrid, España",
    desc: "Líder de la comunidad de recursos humanos dentro de la plataforma colaborativa de freelancers y startups Nexo Professional Community."
  },
  {
    role: "Asesor de Carrera y Orientador profesional (empleo y autoempleo)",
    company: "Consejería de Economía, Empresas y Empleo CLM",
    period: "Marzo de 2021 - Febrero de 2025 (4 años)",
    location: "Ciudad Real",
    desc: "Asesoramiento personalizado e individualizado en búsqueda activa de empleo, consultoría en creación de negocios y emprendimiento, y ponencias institucionales."
  },
  {
    role: "Formador de RR. HH. - Módulo de Habilidades Directivas",
    company: "Universidad Europea de Valencia",
    period: "Febrero de 2019 - Junio de 2020 (1 año 5 meses)",
    location: "Valencia y alrededores, España",
    desc: "Docencia en el Máster Universitario en Gestión de Proyectos - Project Management."
  },
  {
    role: "Adjunto Secretaría de Empleo y Técnico de Empleo",
    company: "CCOO",
    period: "Septiembre de 2010 - Marzo de 2017 (6 años 10 meses)",
    location: "Toledo y Ciudad Real, España",
    desc: "Diseño y seguimiento de políticas activas de empleo. Participación en comités de seguimiento de fondos europeos (FSE y FEDER 2007-2013 y 2014-2020) y comisiones tripartitas de inspección laboral."
  },
  {
    role: "Orientador Profesional",
    company: "FOREM CLM",
    period: "Septiembre de 2009 - Mayo de 2010 (9 meses)",
    location: "Ciudad Real, España",
    desc: "Asesoramiento individualizado en búsqueda activa de empleo y talleres sobre preparación de entrevistas de trabajo."
  },
  {
    role: "Área de Recursos Humanos y Desarrollo de Personal",
    company: "DIMAE Dielectro Manchego",
    period: "Febrero de 2008 - Mayo de 2009 (1 año 4 meses)",
    location: "Ciudad Real, España",
    desc: "Evaluación del desempeño, plan de formación, procesos de selección e implantación del módulo R3 de SAP."
  },
  {
    role: "Consultor Freelance de Recursos Humanos",
    company: "Consultor Freelance",
    period: "Marzo de 2006 - Mayo de 2009 (3 años 3 meses)",
    location: "Granada, España",
    desc: "Consultoría de RR.HH. a PYMES, análisis de puestos, clima laboral y formación en desarrollo de habilidades directivas y MS Project."
  },
  {
    role: "Técnico de RR.HH., Selección y Orientador Profesional",
    company: "Cámara de Comercio de Granada",
    period: "Mayo de 2002 - Febrero de 2006 (3 años 10 meses)",
    location: "Granada, España",
    desc: "Agencia de Colocación, programa Andalucía Orienta y Servicio de Integración Activa en la PYME (SIAP - INEM)."
  },
  {
    role: "Director Docente (Máster Recursos Humanos y Gestión Laboral)",
    company: "Centro de Estudios Jurídicos Granada",
    period: "2003 - 2004 (1 año)",
    location: "Granada, Andalucía, España",
    desc: "Dirección docente del máster e impartición de módulos de Planificación Estratégica, Selección de Talento y Calidad Total."
  }
];

export default function Experience() {
  return (
    <AnimatedPage>
      <div className="max-w-container-max mx-auto px-gutter py-section-desktop">
        <h1 className="font-display-lg-mobile md:font-display-lg text-primary mb-unit-lg">Trayectoria Profesional</h1>
        <p className="font-body-lg text-on-surface-variant max-w-3xl mb-12">
          Más de 27 años de experiencia transformando organizaciones, liderando áreas de personas y guiando a profesionales hacia su siguiente nivel de liderazgo y rendimiento.
        </p>
        
        <div className="relative border-l border-outline-variant/30 ml-4 md:ml-0">
          {experiences.map((exp, index) => (
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              key={index} 
              className="mb-10 ml-6 md:ml-12"
            >
              <div className="absolute w-3 h-3 bg-secondary rounded-full -left-[6.5px] mt-2 border-2 border-background"></div>
              
              <div className="bg-surface-container-lowest border border-outline-variant/30 p-6 rounded hover:border-secondary transition-colors duration-300">
                <h3 className="font-body-lg text-secondary font-bold mb-1">{exp.role}</h3>
                <h4 className="font-headline-sm text-headline-sm text-primary mb-2">{exp.company}</h4>
                <div className="flex flex-col md:flex-row md:items-center gap-2 font-label-sm text-on-surface-variant tracking-wider mb-4">
                  <span>{exp.period}</span>
                  {exp.location && (
                    <>
                      <span className="hidden md:inline">•</span>
                      <span>{exp.location}</span>
                    </>
                  )}
                </div>
                {exp.desc && (
                  <p className="font-body-md text-on-surface-variant">{exp.desc}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedPage>
  );
}
