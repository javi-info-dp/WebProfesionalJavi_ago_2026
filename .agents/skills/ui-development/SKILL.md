---
name: ui-development
description: Define las mejores prácticas de codificación React, Next.js y Vanilla CSS, accesibilidad y diseño técnico para BlackBox90app.
---

# Guía de Desarrollo UI y Estándares Técnicos (BlackBox90app)

Esta skill consolida las directrices técnicas de desarrollo frontend para asegurar que el código React (Next.js) de BlackBox90app sea de calidad de producción, altamente accesible, optimizado en rendimiento y fiel a la estética "Premium Luxury" de la marca.

---

## 1. Composición y Arquitectura React

Para evitar la sobrecarga de propiedades booleanas en los componentes y facilitar su escalabilidad:

- **Estructura de Componentes Compuestos (Compound Components):** Utiliza React Context para compartir estado interno entre componentes estrechamente relacionados (ej: un selector de pestañas o un menú desplegable).
- **Composición sobre Configuración:** Prefiere pasar `children` o componentes estructurados en lugar de múltiples flags booleanos para controlar variaciones visuales (ej. `<Card variant="executive">` en lugar de `<Card isExecutive isDark hasBorder>`).
- **Uso de Referencias en React 19:** Pasa directamente la propiedad `ref` a los componentes hijos como una prop normal (evitando el uso innecesario de `forwardRef`).

---

## 2. Optimización y Rendimiento (Next.js)

Para maximizar la velocidad y la experiencia de usuario del directivo:

- **Eliminación de Waterfalls en Cargas de Datos:**
  - Valida condiciones síncronas antes de ejecutar llamadas `await` asíncronas.
  - Mueve los `await` dentro de las ramas condicionales específicas donde realmente se necesita la variable.
  - En llamadas independientes, utiliza `Promise.all()` para paralelizar las peticiones.
- **Evitar Re-renders Innecesarios:**
  - Evita suscribir componentes a variables de estado complejas si solo se leen en callbacks.
  - Utiliza `useRef` para valores transitorios o frecuentes que no afecten directamente a la representación visual.
  - Utiliza `startTransition` para actualizaciones de estado no urgentes.
- **Listas Largas (>50 elementos):** Utiliza virtualización de listas o `content-visibility: auto` en CSS para evitar degradar el rendimiento del navegador.

---

## 3. Estilado (Vanilla CSS)

En línea con las directrices del proyecto:

- **Uso de Vanilla CSS:** Utiliza CSS puro con Variables de CSS (Custom Properties) declaradas globalmente en `index.css` para el color primario dorado (`#c9a876`), oscuro principal (`#1a1a1a`), etc.
- **Transiciones y Animaciones:**
  - Anima únicamente las propiedades `transform` y `opacity` para evitar disparar recalculaciones de layout del navegador (*reflows*).
  - Nunca utilices `transition: all`. Define explícitamente las propiedades a animar.
  - Respeta siempre la media query `prefers-reduced-motion` para usuarios con sensibilidad visual.

---

## 4. Accesibilidad (A11y) y Semántica

La sofisticación ejecutiva exige excelencia en el acceso técnico:

- **Botones con Iconos:** Cualquier botón que solo contenga un icono visual DEBE incluir obligatoriamente una propiedad `aria-label` descriptiva.
- **Formularios Accesibles:** Todos los campos de entrada (`input`, `textarea`, `select`) deben estar vinculados explícitamente a un elemento `<label>` usando el atributo `htmlFor` o contener un `aria-label` descriptivo si la etiqueta no es visual.
- **Interactividad por Teclado:** Cualquier elemento interactivo personalizado debe soportar navegación por teclado mediante `tabIndex={0}` y controladores de eventos `onKeyDown` (teclas Enter y Espacio).
- **Semántica HTML:** Utiliza elementos semánticos de HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`) antes de recurrir a la sobrecarga de atributos ARIA.
- **Esquema de Enfoque:** Asegura que los elementos enfocados tengan estilos de contorno claros mediante la pseudo-clase `:focus-visible` (ej. `focus-visible:ring-2`). Nunca deshabilites `outline: none` sin proporcionar una alternativa visual clara.

---

## 5. Tipografía, Contenido y Formato de Datos

- **Tipografía Limpia:** Evita textos apelmazados. La tipografía principal (Archia u Outfit) debe estructurarse con una jerarquía clara. Usa `text-wrap: balance` o `text-wrap: pretty` en los encabezados principales (`h1`, `h2`) para evitar saltos de línea antiestéticos de una sola palabra.
- **Tablas y Números:** Usa fuentes con espaciado numérico uniforme (`font-variant-numeric: tabular-nums`) en columnas que contengan métricas y números (ej. porcentajes, presupuestos, CAC, ROAS) para facilitar su escaneo rápido.
- **Clamping de Textos:** Aplica truncamiento de texto (`text-overflow: ellipsis`) o recorte multilínea (`line-clamp`) con `min-w-0` en contenedores Flexbox para prevenir roturas del diseño visual.
