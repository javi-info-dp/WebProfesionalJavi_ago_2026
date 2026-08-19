---
name: app-architecture
description: Define la estructura, arquitectura de páginas y modelo de monetización de BlackBox90app. Úsala para conocer las secciones clave (Career Stack, Dashboard, Market Radar) al generar código o diseñar flujos de usuario.
---

# Arquitectura de BlackBox90app

Esta skill define la estructura oficial de la aplicación web, el modelo de monetización y la funcionalidad de cada página. Debe ser la guía principal a la hora de estructurar el frontend y la base de datos.

## Naming Oficial
- **Nombre de la App:** BlackBox90app
- **Toolbox:** Career Stack
- **Dashboard:** Dashboard
- **Alertas:** Market Radar

## Modelo de Monetización (Paywall)
- **Freemium (LITE):** Acceso gratuito al Onboarding (Scorecard) y a las herramientas base del Career Stack (CV Builder y Optimizador de LinkedIn). *Nota UI:* El CV Builder genera un CTA con un link bloqueado hacia el PLD como gancho comercial, pero permite al usuario crear un "PLD Lite" (1 solo caso de éxito).
- **Premium (FULL):** Acceso total. Desbloquea el núcleo de valor diferencial: CRM, métricas/KPIs del Dashboard, Simulador de Entrevistas, Portfolio/PLD completo y el Playbook de Contacto.

---

## 1. Página Home (Landing Pública)
*Objetivo: Conversión y onboarding hacia la sesión de diagnóstico.*
- **Elementos clave:**
  - Propuesta de valor: "Transición de carrera para marketers".
  - Tour de la App (snippets en video mostrando el Career Stack y el Dashboard).
  - El Método BlackBox90© (explicación del mercado oculto).
  - Social Proof (casos de éxito basados en métricas).
  - Catálogo de Servicios (enlace a LITE/PREMIUM y Scorecard).
  - FAQs.
  - CTA Principal: Agendar sesión gratuita (60 minutos).

## 2. Career Stack (Toolbox Privada)
*El copiloto de carrera del usuario, impulsado por IA.*
- **CV Builder:** Escaneo de CV por IA, generación de viñetas de impacto (métricas como CAC, ROAS), y agrupación de CVs por "ángulos" (ej. Branding, Performance).
- **Optimizador de LinkedIn:** Generación de Titular y About enfocados en valor ("Ayudo a X a lograr Y mediante Z").
- **Portfolio / Business Cases:** Uso del método STAR, exportable a PDF/Notion.
- **Playbook de Contacto:** Cadencias B2B con plantillas personalizables por IA según el perfil objetivo.
- **Content Engine (LinkedIn):** Extracción de "voz" de posts anteriores, generación de ideas y calendario editorial Kanban.
- **Training Center:** Videos de BlackBox90©, simulador de IA para entrevistas (salario, cultural fit) y upsell a Simulación Real 1:1.

## 3. Dashboard
*Panel de mando y CRM de búsqueda.*
- **Setup de Campaña:** Definición del ICP y KPIs semanales.
- **CRM Kanban:** Pipeline de carrera (Targeting -> Contactado -> 1ra Entrevista -> Business Case -> Oferta).
- **Métricas:** Tasas de respuesta y conversión a entrevista.
- **Data Input (Extensión de Chrome):** Captura de leads (ofertas, empresas, decisores) y extracción automática (scraping pasivo no-baneable) de analíticas de visualizaciones del perfil del usuario para alimentar el Dashboard sin fricción manual.

## 4. Market Radar (Alertas)
*Monitoreo inteligente del mercado.*
- **Filtros Avanzados:** Roles, modalidad (Remoto/Híbrido), rangos salariales y skills.
- **Señales de Intención (Intent Data):** Detección de "señales" (ej. rondas de financiación) que predicen contrataciones.
- **Delivery:** Resumen automático enviado al correo electrónico según la frecuencia elegida.
