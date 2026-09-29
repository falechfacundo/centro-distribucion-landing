import type { FeatureKey, Lang } from './routes';

export interface FeatureCopy {
  metaTitle: string;
  metaDesc: string;
  eyebrow: string;
  h1: string;
  lead: string;
  caps: [icon: string, title: string, text: string][];
  steps: [string, string][];
  faq: [q: string, a: string][];
}

const es: Record<FeatureKey, FeatureCopy> = {
  'feat-board': {
    metaTitle: 'Tablero Kanban online con drag & drop',
    metaDesc: 'Un tablero Kanban rápido y ordenado: arrastrá tareas entre columnas, personalizalas, filtrá por prioridad o asignado y guardá vistas. Probalo gratis.',
    eyebrow: 'Tablero Kanban',
    h1: 'Un tablero Kanban que se siente liviano.',
    lead: 'Visualizá el trabajo en columnas, arrastrá las tareas entre etapas y mantené a todo el equipo mirando lo mismo, sin configuraciones interminables.',
    caps: [
      ['square-kanban', 'Drag & drop fluido', 'Mové tareas entre columnas con el mouse y el estado se actualiza al instante.'],
      ['layers', 'Columnas a tu medida', 'Creá, renombrá y coloreá las columnas para reflejar cómo trabaja tu equipo de verdad.'],
      ['filter', 'Filtros que se recuerdan', 'Filtrá por prioridad, asignado, tipo, epic o texto. Tus filtros se quedan aunque recargues.'],
      ['bookmark', 'Vistas guardadas', 'Guardá combinaciones de filtros por proyecto y volvé a ellas en un clic.'],
      ['link', 'Dependencias visibles', 'Marcá qué tarea bloquea a otra y mirá el indicador de bloqueo en la tarjeta.'],
      ['command', 'Paleta de comandos', 'Navegá y ejecutá acciones desde el teclado sin despegar las manos.'],
    ],
    steps: [['Creá tu proyecto', 'Empezá desde cero o importá tu trabajo desde un JSON con vista previa.'], ['Armá tus columnas', 'Definí las etapas de tu proceso y asignales un color.'], ['Mové el trabajo', 'Arrastrá tareas, asigná personas y abrí cada tarea para ver el detalle completo.']],
    faq: [
      ['¿Qué es un tablero Kanban?', 'Es un método visual para gestionar trabajo: cada tarea es una tarjeta que avanza por columnas que representan las etapas de tu proceso, por ejemplo Por hacer, En progreso y Hecho.'],
      ['¿Puedo personalizar las columnas?', 'Sí. Podés crear columnas nuevas, renombrarlas y asignarles un color desde el propio tablero.'],
      ['¿Los filtros se pierden al recargar?', 'No. Los filtros del tablero se guardan en tu navegador y además podés guardar vistas por proyecto.'],
      ['¿Puedo usar FlowBoard gratis?', 'Sí, hay un plan gratuito para empezar. Registrate en un minuto y armá tu primer tablero.'],
    ],
  },
  'feat-sprints': {
    metaTitle: 'Gestión de sprints ágiles',
    metaDesc: 'Planificá, iniciá y cerrá sprints con FlowBoard: asigná el backlog, seguí el progreso real y medí con reportes. Ideal para equipos ágiles.',
    eyebrow: 'Sprints',
    h1: 'Sprints claros, de la planificación al cierre.',
    lead: 'Armá el sprint desde el backlog, iniciá el ciclo y seguí el avance con métricas reales para saber en todo momento si vas a llegar.',
    caps: [
      ['rocket', 'Ciclo completo', 'Creá un sprint, iniciá y cerralo cuando termina el ciclo, todo desde el mismo lugar.'],
      ['list-checks', 'Backlog a sprint', 'Asigná tareas del backlog a un sprint en planificación con pocos clics.'],
      ['chart-column', 'Progreso real', 'Las métricas de avance se calculan con las tareas reales del sprint, sin planillas aparte.'],
      ['layers', 'Epics', 'Agrupá el trabajo en epics para mantener la visión de conjunto.'],
      ['chart-line', 'Burndown', 'Mirá el burndown en la sección de reportes para detectar desvíos a tiempo.'],
      ['list', 'Vista de lista por sprint', 'Revisá el backlog agrupado por sprint y editá estado o prioridad por fila.'],
    ],
    steps: [['Planificá', 'Creá el sprint y sumá tareas del backlog.'], ['Ejecutá', 'Iniciá el sprint y mové las tareas por el tablero.'], ['Cerrá y medí', 'Completá el sprint y revisá el progreso en los reportes.']],
    faq: [
      ['¿Qué es un sprint?', 'Es un ciclo de trabajo de duración fija, típicamente de una a cuatro semanas, en el que el equipo se compromete a completar un conjunto de tareas.'],
      ['¿Puedo trabajar con Scrum en FlowBoard?', 'Sí: podés planificar sprints, mantener un backlog, agrupar en epics y medir el avance. También podés usar solo Kanban si preferís.'],
      ['¿Cómo veo cuánto avanzó el sprint?', 'Cada sprint muestra su progreso calculado con las tareas reales, y en reportes tenés una vista de burndown.'],
    ],
  },
  'feat-timeline': {
    metaTitle: 'Timeline de proyectos',
    metaDesc: 'Visualizá tus tareas en el tiempo con una vista timeline: escala por día, semana, mes o trimestre y marcador de hoy. Planificá con claridad.',
    eyebrow: 'Timeline',
    h1: 'Tu proyecto, visto en el tiempo.',
    lead: 'Una línea de tiempo con las tareas ubicadas por sus fechas reales de inicio y vencimiento, para planificar con perspectiva y detectar solapamientos.',
    caps: [
      ['chart-gantt', 'Fechas reales', 'Cada tarea se ubica según sus fechas de inicio y vencimiento.'],
      ['calendar-range', 'Cuatro escalas', 'Cambiá entre día, semana, mes y trimestre según el horizonte que necesites.'],
      ['flag', 'Marcador de hoy', 'Ubicá al instante dónde estás parado respecto de tu plan.'],
      ['filter', 'Filtros compartidos', 'Usá los mismos filtros del tablero para enfocarte en lo que importa.'],
      ['square-kanban', 'Abrí el detalle', 'Hacé clic en una barra para abrir la tarea y editarla sin salir de la vista.'],
    ],
    steps: [['Asigná fechas', 'Cargá inicio y vencimiento en cada tarea.'], ['Elegí la escala', 'Ajustá el zoom de la línea de tiempo.'], ['Compartí el plan', 'Mostrale al equipo o a tu cliente el cronograma.']],
    faq: [
      ['¿Qué necesito para que una tarea aparezca en el timeline?', 'Que tenga fecha de inicio y de vencimiento. Las tareas con esas fechas se ubican automáticamente.'],
      ['¿Puedo cambiar la escala de tiempo?', 'Sí, podés alternar entre día, semana, mes y trimestre.'],
      ['¿Es un diagrama de Gantt?', 'Es una vista de barras en el tiempo similar a un Gantt, pensada para leer el plan de un vistazo.'],
    ],
  },
  'feat-okrs': {
    metaTitle: 'OKRs y objetivos para equipos',
    metaDesc: 'Definí objetivos y resultados clave, vinculalos a proyectos y seguí el progreso del equipo. Gestión de OKRs integrada al trabajo diario.',
    eyebrow: 'OKRs',
    h1: 'Objetivos conectados con el trabajo real.',
    lead: 'Definí objetivos, medí resultados clave y vinculalos a los proyectos donde realmente se hace el trabajo, para que la estrategia no viva en otra herramienta.',
    caps: [
      ['target', 'Objetivos y resultados clave', 'Estructurá lo que querés lograr y cómo vas a medirlo.'],
      ['link', 'Vinculados a proyectos', 'Asociá cada objetivo a uno o varios proyectos y mirá la relación en las tarjetas.'],
      ['chart-column', 'Analítica de OKRs', 'Reportes con filtros por trimestre, estado y portfolio.'],
      ['briefcase', 'Portfolios', 'Agrupá proyectos en portfolios para ver el avance a nivel de programa.'],
      ['users', 'Visibles para todos', 'El progreso está a la vista de todo el equipo, no encerrado en una planilla.'],
    ],
    steps: [['Definí el objetivo', 'Escribí qué querés lograr en el período.'], ['Sumá resultados clave', 'Elegí las métricas que indican el avance.'], ['Vinculá proyectos', 'Conectá el objetivo con el trabajo que lo hace posible.']],
    faq: [
      ['¿Qué son los OKRs?', 'Objectives and Key Results: un método para fijar objetivos ambiciosos y medir su avance con resultados clave cuantificables.'],
      ['¿Puedo vincular un objetivo a un proyecto?', 'Sí, un objetivo puede vincularse a uno o varios proyectos.'],
      ['¿Hay reportes de OKRs?', 'Sí, hay una vista de analítica con filtros por trimestre, estado y portfolio.'],
    ],
  },
  'feat-time': {
    metaTitle: 'Time tracking por tarea',
    metaDesc: 'Medí el tiempo de trabajo directamente en cada tarea: timer integrado, horas facturables y reportes por usuario y proyecto.',
    eyebrow: 'Time tracking',
    h1: 'Medí el tiempo sin salir de la tarea.',
    lead: 'Iniciá el timer donde trabajás, marcá horas facturables y obtené reportes por persona, proyecto y período para entender a dónde va el tiempo del equipo.',
    caps: [
      ['timer', 'Timer en cada tarea', 'Iniciá y detené el cronómetro desde la propia tarea o desde Mis tareas.'],
      ['clock', 'Horas facturables', 'Marcá qué tiempo es facturable y separalo en los reportes.'],
      ['chart-column', 'Reportes de tiempo', 'Totales, distribución por proyecto y por persona, con filtros por fecha.'],
      ['shield-check', 'Timers recuperables', 'Si dejás un timer abierto, un aviso en Mis tareas te permite detenerlo o ir a la tarea.'],
      ['filter', 'Filtros flexibles', 'Filtrá por rango de fechas, usuario, proyecto y facturable.'],
    ],
    steps: [['Iniciá el timer', 'Desde cualquier tarea asignada a vos.'], ['Trabajá', 'El tiempo se registra mientras avanzás.'], ['Revisá los reportes', 'Mirá totales y distribución por proyecto y persona.']],
    faq: [
      ['¿Puedo marcar horas como facturables?', 'Sí, cada registro de tiempo puede ser facturable o no, y los reportes lo distinguen.'],
      ['¿Qué pasa si me olvido un timer abierto?', 'Al volver, un aviso en Mis tareas te muestra los timers abiertos para que los detengas o vayas a la tarea.'],
      ['¿Puedo ver el tiempo por proyecto?', 'Sí, los reportes de tiempo muestran la distribución por proyecto y por usuario.'],
    ],
  },
  'feat-git': {
    metaTitle: 'Integración con GitHub y Git',
    metaDesc: 'Vinculá repositorios de GitHub a tus proyectos: los commits se asocian a las tareas por su clave y quedan a la vista en cada ticket.',
    eyebrow: 'Integración Git',
    h1: 'Tus commits, en cada tarea.',
    lead: 'Conectá un repositorio de GitHub a tu proyecto. Al mencionar la clave de una tarea en el mensaje del commit, queda vinculado automáticamente.',
    caps: [
      ['git-branch', 'Repos por proyecto', 'Vinculá repositorios con owner/repo o pegando la URL.'],
      ['git-commit-horizontal', 'Vinculación por clave', 'Escribí la clave de la tarea con # en el mensaje del commit y se asocia sola.'],
      ['shield-check', 'Webhook firmado', 'Los eventos de GitHub se validan con firma HMAC por repositorio.'],
      ['link', 'Vinculación manual', 'También podés vincular un commit a una tarea pegando su URL.'],
      ['list', 'Feed de commits', 'Mirá los commits del proyecto y los de cada tarea, con archivos y ramas.'],
    ],
    steps: [['Vinculá el repo', 'Desde la pestaña Git del proyecto.'], ['Configurá el webhook', 'Copiá el secreto y agregalo en GitHub.'], ['Commiteá con la clave', 'Incluí la clave de la tarea en el mensaje.']],
    faq: [
      ['¿Qué repositorios puedo conectar?', 'Repositorios de GitHub, indicando owner/repo o su URL.'],
      ['¿Cómo se asocia un commit a una tarea?', 'Incluyendo la clave de la tarea precedida por # en el mensaje del commit. También podés vincularlo manualmente por URL.'],
      ['¿Se importan commits anteriores?', 'Se registran los pushes a partir del momento en que el webhook está activo. Para commits previos podés vincularlos manualmente.'],
    ],
  },
  'feat-ai': {
    metaTitle: 'Generá tickets y backlogs con IA',
    metaDesc: 'Describí una idea y FlowBoard genera epics, historias y tareas listas para tu tablero. Ahorrá horas de planificación con IA.',
    eyebrow: 'Tickets con IA',
    h1: 'De una idea a un backlog, en segundos.',
    lead: 'Describí lo que necesitás construir y dejá que la IA proponga epics, historias y tareas. Revisalas, ajustalas y llevalas al tablero.',
    caps: [
      ['sparkles', 'Generación de tickets', 'Convertí una descripción en tareas listas desde el propio tablero.'],
      ['layers', 'Estructura de proyecto', 'Un asistente propone la estructura completa: epics, sprints y tareas.'],
      ['rocket', 'Sprints sugeridos', 'Organizá el trabajo generado en sprints con un paso guiado.'],
      ['list-checks', 'Expandí epics', 'Desglosá un epic en tareas más pequeñas cuando lo necesites.'],
      ['users', 'Vos decidís', 'Revisás y confirmás todo antes de que se cree en tu proyecto.'],
    ],
    steps: [['Describí la idea', 'Escribí en lenguaje natural qué querés construir.'], ['Revisá la propuesta', 'Ajustá epics, historias y tareas.'], ['Confirmá', 'Los tickets se crean en tu tablero.']],
    faq: [
      ['¿La IA crea tareas sin que yo las revise?', 'No. Siempre revisás y confirmás la propuesta antes de que se cree en tu proyecto.'],
      ['¿Qué puedo generar?', 'Tickets desde una descripción, la estructura completa de un proyecto, sprints y el desglose de un epic.'],
      ['¿Necesito escribir en un formato especial?', 'No, alcanza con describir la idea en lenguaje natural.'],
    ],
  },
};

const en: Record<FeatureKey, FeatureCopy> = {
  'feat-board': {
    metaTitle: 'Online Kanban board with drag & drop',
    metaDesc: 'A fast, tidy Kanban board: drag tasks between columns, customize them, filter by priority or assignee and save views. Try it free.',
    eyebrow: 'Kanban board',
    h1: 'A Kanban board that feels light.',
    lead: 'See work in columns, drag tasks between stages and keep the whole team looking at the same thing, with no endless configuration.',
    caps: [
      ['square-kanban', 'Smooth drag & drop', 'Move tasks between columns with your mouse and the status updates instantly.'],
      ['layers', 'Columns your way', 'Create, rename and color columns to reflect how your team really works.'],
      ['filter', 'Filters that stick', 'Filter by priority, assignee, type, epic or text. Your filters stay even after a reload.'],
      ['bookmark', 'Saved views', 'Save filter combinations per project and get back to them in one click.'],
      ['link', 'Visible dependencies', 'Mark which task blocks another and see the block indicator on the card.'],
      ['command', 'Command palette', 'Navigate and run actions from the keyboard without lifting your hands.'],
    ],
    steps: [['Create your project', 'Start from scratch or import your work from JSON with a preview.'], ['Set up your columns', 'Define the stages of your process and give them a color.'], ['Move the work', 'Drag tasks, assign people and open each task to see the full detail.']],
    faq: [
      ['What is a Kanban board?', 'A visual method for managing work: each task is a card that moves through columns representing the stages of your process, such as To do, In progress and Done.'],
      ['Can I customize the columns?', 'Yes. You can create new columns, rename them and give them a color right from the board.'],
      ['Do filters reset when I reload?', 'No. Board filters are saved in your browser and you can also save views per project.'],
      ['Can I use FlowBoard for free?', 'Yes, there is a free plan to get started. Sign up in a minute and build your first board.'],
    ],
  },
  'feat-sprints': {
    metaTitle: 'Agile sprint management',
    metaDesc: 'Plan, start and close sprints with FlowBoard: assign the backlog, follow real progress and measure with reports. Ideal for agile teams.',
    eyebrow: 'Sprints',
    h1: 'Clear sprints, from planning to close.',
    lead: 'Build the sprint from the backlog, start the cycle and follow progress with real metrics so you always know whether you will make it.',
    caps: [
      ['rocket', 'Full cycle', 'Create a sprint, start it and close it when the cycle ends, all in one place.'],
      ['list-checks', 'Backlog to sprint', 'Assign backlog tasks to a planning sprint in a few clicks.'],
      ['chart-column', 'Real progress', 'Progress metrics are computed from the actual sprint tasks, no separate spreadsheets.'],
      ['layers', 'Epics', 'Group work into epics to keep the big picture.'],
      ['chart-line', 'Burndown', 'Check the burndown in reports to spot deviations early.'],
      ['list', 'List view by sprint', 'Review the backlog grouped by sprint and edit status or priority per row.'],
    ],
    steps: [['Plan', 'Create the sprint and add backlog tasks.'], ['Execute', 'Start the sprint and move tasks across the board.'], ['Close and measure', 'Complete the sprint and review progress in reports.']],
    faq: [
      ['What is a sprint?', 'A fixed-length work cycle, typically one to four weeks, in which the team commits to completing a set of tasks.'],
      ['Can I run Scrum in FlowBoard?', 'Yes: you can plan sprints, keep a backlog, group into epics and measure progress. You can also use plain Kanban if you prefer.'],
      ['How do I see how far the sprint has come?', 'Each sprint shows progress computed from real tasks, and reports include a burndown view.'],
    ],
  },
  'feat-timeline': {
    metaTitle: 'Project timeline',
    metaDesc: 'See your tasks across time with a timeline view: day, week, month or quarter scale and a today marker. Plan with clarity.',
    eyebrow: 'Timeline',
    h1: 'Your project, seen across time.',
    lead: 'A timeline with tasks placed by their real start and due dates, so you can plan with perspective and spot overlaps.',
    caps: [
      ['chart-gantt', 'Real dates', 'Each task is placed according to its start and due dates.'],
      ['calendar-range', 'Four scales', 'Switch between day, week, month and quarter depending on the horizon you need.'],
      ['flag', 'Today marker', 'Instantly see where you stand against your plan.'],
      ['filter', 'Shared filters', 'Use the same filters as the board to focus on what matters.'],
      ['square-kanban', 'Open the detail', 'Click a bar to open the task and edit it without leaving the view.'],
    ],
    steps: [['Set dates', 'Add a start and due date to each task.'], ['Pick the scale', 'Adjust the zoom of the timeline.'], ['Share the plan', 'Show the schedule to your team or client.']],
    faq: [
      ['What does a task need to show on the timeline?', 'A start date and a due date. Tasks with those dates are placed automatically.'],
      ['Can I change the time scale?', 'Yes, you can switch between day, week, month and quarter.'],
      ['Is it a Gantt chart?', 'It is a bar view across time similar to a Gantt, designed to read the plan at a glance.'],
    ],
  },
  'feat-okrs': {
    metaTitle: 'OKRs and goals for teams',
    metaDesc: 'Define goals and key results, link them to projects and follow team progress. OKR management built into daily work.',
    eyebrow: 'OKRs',
    h1: 'Goals connected to the real work.',
    lead: 'Define goals, measure key results and link them to the projects where the work actually happens, so strategy does not live in another tool.',
    caps: [
      ['target', 'Goals and key results', 'Structure what you want to achieve and how you will measure it.'],
      ['link', 'Linked to projects', 'Associate each goal with one or more projects and see the relation on cards.'],
      ['chart-column', 'OKR analytics', 'Reports with filters by quarter, status and portfolio.'],
      ['briefcase', 'Portfolios', 'Group projects into portfolios to see progress at program level.'],
      ['users', 'Visible to everyone', 'Progress is in plain sight of the whole team, not locked in a spreadsheet.'],
    ],
    steps: [['Define the goal', 'Write what you want to achieve in the period.'], ['Add key results', 'Choose the metrics that show progress.'], ['Link projects', 'Connect the goal with the work that makes it possible.']],
    faq: [
      ['What are OKRs?', 'Objectives and Key Results: a method for setting ambitious goals and measuring progress with quantifiable key results.'],
      ['Can I link a goal to a project?', 'Yes, a goal can be linked to one or more projects.'],
      ['Are there OKR reports?', 'Yes, there is an analytics view with filters by quarter, status and portfolio.'],
    ],
  },
  'feat-time': {
    metaTitle: 'Time tracking per task',
    metaDesc: 'Track work time right inside each task: built-in timer, billable hours and reports by user and project.',
    eyebrow: 'Time tracking',
    h1: 'Track time without leaving the task.',
    lead: 'Start the timer where you work, mark billable hours and get reports by person, project and period to understand where your team’s time goes.',
    caps: [
      ['timer', 'A timer on every task', 'Start and stop the stopwatch from the task itself or from My tasks.'],
      ['clock', 'Billable hours', 'Mark which time is billable and separate it in reports.'],
      ['chart-column', 'Time reports', 'Totals, distribution by project and by person, with date filters.'],
      ['shield-check', 'Recoverable timers', 'If you leave a timer running, a notice in My tasks lets you stop it or jump to the task.'],
      ['filter', 'Flexible filters', 'Filter by date range, user, project and billable.'],
    ],
    steps: [['Start the timer', 'From any task assigned to you.'], ['Do the work', 'Time is recorded while you progress.'], ['Review the reports', 'See totals and distribution by project and person.']],
    faq: [
      ['Can I mark hours as billable?', 'Yes, each time entry can be billable or not, and reports tell them apart.'],
      ['What if I forget an open timer?', 'When you come back, a notice in My tasks shows your open timers so you can stop them or go to the task.'],
      ['Can I see time per project?', 'Yes, time reports show distribution by project and by user.'],
    ],
  },
  'feat-git': {
    metaTitle: 'GitHub and Git integration',
    metaDesc: 'Link GitHub repositories to your projects: commits are associated with tasks by their key and show up on every ticket.',
    eyebrow: 'Git integration',
    h1: 'Your commits, on every task.',
    lead: 'Connect a GitHub repository to your project. Mention a task key in the commit message and it links automatically.',
    caps: [
      ['git-branch', 'Repos per project', 'Link repositories with owner/repo or by pasting the URL.'],
      ['git-commit-horizontal', 'Link by key', 'Write the task key with # in the commit message and it associates itself.'],
      ['shield-check', 'Signed webhook', 'GitHub events are validated with an HMAC signature per repository.'],
      ['link', 'Manual linking', 'You can also link a commit to a task by pasting its URL.'],
      ['list', 'Commit feed', 'See the project’s commits and each task’s commits, with files and branches.'],
    ],
    steps: [['Link the repo', 'From the project’s Git tab.'], ['Set up the webhook', 'Copy the secret and add it in GitHub.'], ['Commit with the key', 'Include the task key in the message.']],
    faq: [
      ['Which repositories can I connect?', 'GitHub repositories, by owner/repo or URL.'],
      ['How is a commit associated with a task?', 'By including the task key preceded by # in the commit message. You can also link it manually by URL.'],
      ['Are earlier commits imported?', 'Pushes are recorded from the moment the webhook is active. For earlier commits you can link them manually.'],
    ],
  },
  'feat-ai': {
    metaTitle: 'Generate tickets and backlogs with AI',
    metaDesc: 'Describe an idea and FlowBoard generates epics, stories and tasks ready for your board. Save hours of planning with AI.',
    eyebrow: 'AI tickets',
    h1: 'From an idea to a backlog, in seconds.',
    lead: 'Describe what you need to build and let AI propose epics, stories and tasks. Review them, tweak them and bring them to the board.',
    caps: [
      ['sparkles', 'Ticket generation', 'Turn a description into ready-made tasks from the board itself.'],
      ['layers', 'Project structure', 'A wizard proposes the full structure: epics, sprints and tasks.'],
      ['rocket', 'Suggested sprints', 'Organize the generated work into sprints with a guided step.'],
      ['list-checks', 'Expand epics', 'Break an epic into smaller tasks whenever you need.'],
      ['users', 'You decide', 'You review and confirm everything before it is created in your project.'],
    ],
    steps: [['Describe the idea', 'Write what you want to build in plain language.'], ['Review the proposal', 'Adjust epics, stories and tasks.'], ['Confirm', 'Tickets are created on your board.']],
    faq: [
      ['Does AI create tasks without my review?', 'No. You always review and confirm the proposal before it is created in your project.'],
      ['What can I generate?', 'Tickets from a description, a full project structure, sprints and an epic breakdown.'],
      ['Do I need a special format?', 'No, just describe the idea in plain language.'],
    ],
  },
};

export const features: Record<Lang, Record<FeatureKey, FeatureCopy>> = { es, en };
