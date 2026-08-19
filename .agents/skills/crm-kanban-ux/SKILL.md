---
name: crm-kanban-ux
description: Define las pautas de diseño visual, interfaz y experiencia de usuario (UX) para el módulo del CRM Personal y el Tablero Kanban del Dashboard en BlackBox90app.
---

# Guía de UX/UI para CRM Personal y Kanban (BlackBox90app)

Esta skill establece las directrices de diseño y comportamiento interactivo para el **CRM de Carrera** y el **Tablero Kanban**. Su objetivo es que el candidato visualice su búsqueda laboral como un funnel comercial C-Level altamente profesional, rápido e integrado.

---

## 1. Estructura y Navegación del CRM

Para evitar la rigidez y emular un CRM de ventas B2B moderno (ej. HubSpot o Salesforce):

- **Navegación Paralela:** Evita obligar al usuario a seguir un stepper o flujo lineal rígido. Permite la libre navegación entre vistas paralelas:
  - **Pipeline (Tablero Kanban):** Estado general de las candidaturas.
  - **Contactos (Decisores / Antenas):** Lista de personas clave (headhunters, directivos).
  - **Empresas Target (ICP):** Empresas prioritarias en el radar.
- **Registros Cruzados (Relaciones):** Todo registro debe estar interconectado. Al hacer clic en un contacto en el Kanban o lista, debe abrirse un panel lateral (*slide-over*) o ficha de perfil del contacto que muestre la empresa asociada, el estado actual de la negociación, las notas y las tareas de seguimiento asociadas.

---

## 2. El Tablero Kanban (Pipeline de Carrera)

El Kanban es el corazón operativo del Dashboard:

- **Las 5 Columnas Oficiales:**
  1. `Targeting` (Identificadas / En investigación).
  2. `Contactado` (Primer mensaje enviado / Prospección fría).
  3. `1ra Entrevista` (Conversación inicial / Filtro).
  4. `Business Case` (Fase de defensa de caso estratégico / PLD).
  5. `Oferta` (Propuesta de contratación recibida / Cierre).
- **Tarjetas del Tablero (Cards):** Cada tarjeta representa una oportunidad activa y debe contener:
  - Logotipo y Nombre de la Empresa.
  - Rol de la oportunidad (ej. *VP of Marketing*).
  - Avatar o nombre del decisor clave.
  - Badge de Prioridad calculada por la fórmula de Lead Scoring: `Fit * Engagement`.
  - Fecha del último contacto y fecha prevista de seguimiento.
  - Indicador visual de alerta en rojo/naranja si la tarjeta lleva más de 7 días estancada en la misma columna.

---

## 3. Priorización y Lead Scoring

El CRM debe ayudar proactivamente a que el directivo focalice sus esfuerzos diarios en las cuentas Tier 1:

- **Fórmula de Lead Scoring:**
  - `Fit (1-25):` Puntuación de idoneidad estratégica del puesto/empresa.
  - `Engagement (1-25):` Nivel de calidez o respuesta de la relación con el decisor.
  - `Prioridad = Fit * Engagement` (Máximo 625 puntos).
- **UI del Lead Scoring:** Las tarjetas del Kanban o listas deben ordenarse por este valor de prioridad de forma predeterminada para que el directivo dedique el 80% de su tiempo diario al Tier 1.

---

## 4. Estética Visual Premium (Glassmorphism & Dark Mode)

Para mantener la coherencia con `brand-identity`:

- **Bordes Finos y Profundidad:** Las tarjetas y las columnas del Kanban deben tener bordes muy finos (`1px border`) semitransparentes (ej. `#333333` o `rgba(255,255,255,0.05)`) y un fondo sutil con desenfoque (`backdrop-filter: blur(8px)`) sobre el lienzo oscuro `#1a1a1a`.
- **Esquinas Redondeadas:** Aplica un radio de borde uniforme (`border-radius: 12px` a `16px`) en todas las tarjetas del Kanban y paneles de detalle.
- **Micro-interacciones:** Agrega transiciones suaves (`transition: all 0.2s ease`) al arrastrar y soltar tarjetas (*drag and drop*) y al pasar el cursor sobre ellas (efecto hover de elevación o cambio de color del borde).
- **Sprint Pulse (Métricas en Tiempo Real):** Incorpora en la parte superior del tablero o en un panel flotante el "pulso del sprint" que muestra el avance semanal de las métricas (ej. *20 acciones de red/semana alcanzadas* o *tasa de respuesta inbound*).
