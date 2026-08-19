---
name: onboarding-ux-cro
description: Define las mejores prácticas de UX y CRO para optimizar la conversión, retención y reducción de fricción en los formularios y onboarding de BlackBox90app.
---

# Guía de UX/CRO para Onboarding y Formularios (BlackBox90app)

Esta skill documenta las directrices de optimización de conversión (CRO) y experiencia de usuario (UX) para los flujos de bienvenida y de introducción de datos. Su meta es reducir la fricción psicológica del directivo de marketing senior mientras recolectamos información estructurada de alto valor.

---

## 1. Reducción de Fricción en el Registro y Bienvenida

Para guiar rápidamente al directivo hacia su primer momento de revelación (*Aha! moment*):

- **Fase de Registro Simple:** Solicita la mínima información indispensable al inicio (ej. nombre, email, contraseña o Social Login). Pide datos más específicos de forma progresiva.
- **Acceso Sin Bloqueo de Email:** Permite que el usuario experimente la interfaz o visualice su Scorecard preliminar antes de obligarle a validar su correo electrónico.
- **Indicadores de Progreso:** Muestra indicadores de porcentaje o pasos completados (ej. "Paso 2 de 4") que resulten visualmente limpios y animen al usuario a terminar.

---

## 2. Optimización de Formularios Interactivos

La introducción de datos del historial (Anexo A / Workbook) puede ser densa. Para evitar el abandono:

- **Autoguardado Silencioso (Auto-saving):** El sistema debe guardar el progreso de los campos de entrada de forma automática (ej. guardando en localStorage o con un debounce en base de datos cada 2-3 segundos). El usuario debe ver un microindicador sutil que confirme: *"Guardado en la nube"* o *"Borrador guardado"*.
- **Preservación de Entradas (State Recovery):** Si ocurre un error de validación o caída de red, nunca limpies los inputs del formulario. Mantén el texto ingresado por el usuario intacto.
- **Enfoque Automático (Autofocus):** Enfoca automáticamente el primer campo vacío al renderizar un formulario o una sección nueva de onboarding.
- **Desactivación de Doble Clic (Submit Protection):** Deshabilita el botón de envío inmediatamente después del primer clic y muestra un estado de carga (*spinner*) para evitar peticiones duplicadas y desesperación del usuario.

---

## 3. Dinámica del Diagnóstico del Scorecard

El Scorecard es el gancho principal de entrada de leads:

- **Landing del Diagnóstico:** Debe prometer un beneficio claro y establecer una expectativa de tiempo realista (ej. *"Evalúa tu posicionamiento C-Level en 3 minutos. Obtén tu diagnóstico estratégico inmediato"*).
- **Agrupación Temática:** Divide las preguntas en bloques temáticos (ej. Estrategia, Activos, Mercado Oculto) en lugar de una lista interminable de preguntas individuales.
- **CTAs de Upsell No Bloqueantes:** Las sugerencias para contratar sesiones humanas 1:1 o acceder al plan Premium deben presentarse como recomendaciones sutiles al final del diagnóstico, permitiendo al usuario continuar en el plan LITE de manera autónoma sin forzar el pago.

---

## 4. Alertas de Inactividad y Desbloqueo Humano

Para re-enganchar al candidato sin resultar invasivo:

- **Alertas de Estancamiento:** Si el usuario no realiza ninguna acción en una sección durante varios días, envía notificaciones con tono de sparring partner ("hemos detectado un cuello de botella...").
- **Tono tras 3 Alertas:** En la tercera alerta consecutiva, cambia el tono al protocolo de desbloqueo de marca:
  > *"¿Te ocurre algo? Veo que llevas mucho tiempo sin actividad. ¿Quieres una sesión 1:1 y hablamos para que sigas avanzando?"*
