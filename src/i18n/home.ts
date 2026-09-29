import type { Lang } from './routes';

type Tag = 'plan' | 'design' | 'back' | 'front' | 'infra';

export interface HomeCopy {
  hero: { badge: string; badgeText: string; l1: string; l2: string; l3: string; lead: string; cta1: string; cta2: string; note: string; aria: string };
  board: {
    nav: string[]; ws: string; project: string; sprintSub: string; tabs: string[]; progress: string; url: string; preview: string; cursor1: string; cursor2: string;
    cols: string[]; tags: Record<Tag, string>;
    cards: Record<string, { key: string; title: string; tag: Tag; who: string; p: number; col: number }>;
  };
  marquee: [string, string][];
  showcase: {
    eyebrow: string; h2a: string; h2b: string; label: string;
    steps: { icon: string; title: string; text: string }[];
    boardCols: [string, string, [string, Tag][]][];
    listHead: string; listCount: string; rows: [string, Tag, string, string, string, string][];
    weeks: string[]; today: string; bars: [string, number, number, string][];
    sprint: { name: string; goal: string; badge: string; done: string; progress: string; days: string; real: string; ideal: string };
    status: Record<string, string>;
  };
  bento: {
    eyebrow: string; h2: string; lead: string;
    ai: { tag: string; h: string; p: string; prompt: string; n: number; tickets: [string, string, string][] };
    okr: { tag: string; h: string; p: string; krs: [string, number, string][] };
    git: { tag: string; h: string; p: string; commit: string; task: string };
    time: { tag: string; h: string; p: string; days: string };
    pf: { tag: string; h: string; p: string; items: [string, number, string][] };
  };
  flow: { eyebrow: string; h2: string; steps: [string, string, string][] };
  details: { eyebrow: string; h2: string; lead: string; items: [string, string, string][] };
  cta: { h2: string; lead: string; primary: string; secondary: string };
}

const tagColors: Record<Tag, string> = { plan: '#9b8bff', design: '#f472b6', back: '#38bdf8', front: '#34d399', infra: '#fbbf24' };
export const tagColor = (t: Tag) => tagColors[t];

const es: HomeCopy = {
  hero: {
    badge: 'Nuevo', badgeText: 'Integración con Git y tickets generados con IA',
    l1: 'Convertí trabajo', l2: 'complejo en un', l3: 'flujo claro.',
    lead: 'FlowBoard une proyectos, equipos y progreso en un solo lugar: tableros Kanban, sprints, timeline, OKRs y time tracking. Rápido, ordenado y hecho para que el trabajo avance.',
    cta1: 'Empezar gratis', cta2: 'Ver cómo funciona', note: 'Plan gratuito · Registro en 1 minuto',
    aria: 'Convertí trabajo complejo en un flujo claro.',
  },
  board: {
    nav: ['Dashboard', 'Mis tareas', 'Proyectos', 'Objetivos', 'Reportes', 'Equipo'], ws: 'Workspace · Estudio Norte',
    project: 'Lanzamiento v2', sprintSub: 'Sprint 12 · 8 días restantes', tabs: ['Tablero', 'Lista', 'Timeline', 'Sprints'], progress: 'Progreso',
    url: 'flowboard.vercel.app/projects/lanzamiento-v2/board', preview: 'Vista previa animada del tablero de FlowBoard', cursor1: 'Sofía', cursor2: 'Lucía',
    cols: ['Por hacer', 'En progreso', 'En revisión', 'Hecho'],
    tags: { plan: 'Planificación', design: 'Diseño', back: 'Backend', front: 'Frontend', infra: 'Infra' },
    cards: {
      scope: { key: 'FLW-142', title: 'Definir alcance del release', tag: 'plan', who: 'SM', p: 3, col: 0 },
      onb: { key: 'FLW-139', title: 'Diseñar el onboarding de equipos', tag: 'design', who: 'LV', p: 2, col: 0 },
      authz: { key: 'FLW-137', title: 'Auditar permisos de la API', tag: 'back', who: 'DP', p: 3, col: 0 },
      gh: { key: 'FLW-131', title: 'Integración con GitHub por webhook', tag: 'back', who: 'MR', p: 3, col: 1 },
      tl: { key: 'FLW-128', title: 'Timeline con dependencias', tag: 'front', who: 'SM', p: 2, col: 1 },
      rep: { key: 'FLW-124', title: 'Reportes de tiempo por proyecto', tag: 'front', who: 'LV', p: 2, col: 2 },
      auth: { key: 'FLW-118', title: 'Verificación de email al registrarse', tag: 'back', who: 'DP', p: 2, col: 3 },
      dnd: { key: 'FLW-112', title: 'Tablero con drag & drop', tag: 'front', who: 'MR', p: 1, col: 3 },
    },
  },
  marquee: [
    ['square-kanban', 'Tableros Kanban'], ['list-checks', 'Vistas de lista'], ['chart-gantt', 'Timeline'], ['rocket', 'Sprints'], ['layers', 'Epics'], ['target', 'OKRs'],
    ['briefcase', 'Portfolios'], ['timer', 'Time tracking'], ['git-branch', 'Integración Git'], ['sparkles', 'Tickets con IA'], ['folder', 'Archivos'], ['chart-column', 'Reportes'],
  ],
  showcase: {
    eyebrow: 'Un producto, todas las vistas', h2a: 'Cada equipo trabaja distinto.', h2b: 'FlowBoard se adapta a todos.', label: 'Lanzamiento v2',
    steps: [
      { icon: 'square-kanban', title: 'Tablero', text: 'Kanban con drag & drop. Creá, renombrá y coloreá tus columnas, y filtrá por prioridad, asignado, tipo o epic: los filtros se quedan donde los dejaste.' },
      { icon: 'list-checks', title: 'Lista', text: 'Todo el backlog en una tabla agrupada por sprint. Editá estado, prioridad y asignados por fila, o aplicá acciones en lote a decenas de tareas.' },
      { icon: 'chart-gantt', title: 'Timeline', text: 'Mirá el trabajo en el tiempo. Cambiá la escala entre día, semana, mes y trimestre, con marcador de hoy y tareas ubicadas por sus fechas reales.' },
      { icon: 'rocket', title: 'Sprints', text: 'Planificá el backlog, iniciá el sprint y cerralo con métricas de progreso reales. Sabés en todo momento si vas a llegar.' },
    ],
    boardCols: [
      ['Por hacer', '#6b6a7d', [['Definir alcance del release', 'plan'], ['Diseñar el onboarding', 'design'], ['Auditar permisos', 'back']]],
      ['En progreso', '#38bdf8', [['Webhook de GitHub', 'back'], ['Timeline con dependencias', 'front']]],
      ['Hecho', '#34d399', [['Verificación de email', 'back'], ['Drag & drop', 'front'], ['Vistas guardadas', 'front']]],
    ],
    listHead: 'Sprint 12', listCount: '· 6 tareas',
    rows: [
      ['Definir alcance del release', 'plan', 'SM', 'todo', '12 oct', ''], ['Integración con GitHub por webhook', 'back', 'MR', 'prog', '14 oct', ''],
      ['Timeline con dependencias', 'front', 'SM', 'prog', '16 oct', ''], ['Reportes de tiempo por proyecto', 'front', 'LV', 'rev', '17 oct', ''],
      ['Verificación de email', 'back', 'DP', 'done', '08 oct', ''], ['Tablero con drag & drop', 'front', 'MR', 'done', '05 oct', ''],
    ],
    weeks: ['Sem 41', 'Sem 42', 'Sem 43', 'Sem 44'], today: 'Hoy',
    bars: [['Definir alcance', 0, 22, '#9b8bff'], ['Diseño del onboarding', 12, 28, '#f472b6'], ['Webhook de GitHub', 20, 34, '#38bdf8'], ['Timeline', 30, 30, '#34d399'], ['Reportes de tiempo', 42, 26, '#fbbf24'], ['QA y release', 60, 30, '#6e5cf5']],
    sprint: { name: 'Sprint 12', goal: 'Objetivo: liberar integraciones y reportes', badge: 'Activo', done: 'Tareas completadas', progress: 'Progreso', days: 'Días restantes', real: 'Real', ideal: 'Ideal' },
    status: { todo: 'Por hacer', prog: 'En progreso', rev: 'En revisión', done: 'Hecho' },
  },
  bento: {
    eyebrow: 'Funciones', h2: 'Mucho más que un tablero de tareas.', lead: 'Objetivos, tiempo, código y portfolios conectados al trabajo diario, sin saltar entre cinco herramientas.',
    ai: { tag: 'IA', h: 'Describí la idea. FlowBoard arma los tickets.', p: 'Pasá de un párrafo a epics, historias y tareas listas para el board, en segundos.', prompt: 'Necesitamos un checkout con pagos y emails', n: 43,
      tickets: [['Epic', '#9b8bff', 'Checkout con pagos y confirmación por email'], ['Historia', '#38bdf8', 'Como cliente, quiero pagar con tarjeta'], ['Tarea', '#34d399', 'Crear endpoint de creación de orden'], ['Tarea', '#34d399', 'Plantilla de email de confirmación']] },
    okr: { tag: 'OKRs', h: 'Objetivos que se conectan con el trabajo real.', p: 'Vinculá objetivos a proyectos y seguí los resultados clave con progreso visible para todo el equipo.',
      krs: [['Activar 500 equipos', 72, '#9b8bff'], ['Reducir tiempo de onboarding a 5 min', 48, '#38bdf8'], ['NPS mayor a 50', 91, '#34d399']] },
    git: { tag: 'Git', h: 'Tus commits, en cada tarea.', p: 'Mencioná la clave de la tarea en el commit y queda vinculado solo.', commit: 'feat: exporta reportes', task: 'Reportes de tiempo por proyecto' },
    time: { tag: 'Tiempo', h: 'Time tracking sin salir de la tarea.', p: 'Iniciá el timer, marcá horas facturables y mirá los reportes.', days: 'LMXJVSD' },
    pf: { tag: 'Portfolios', h: 'Todos tus proyectos, de un vistazo.', p: 'Agrupá proyectos en portfolios y seguí el avance general.', items: [['Lanzamiento v2', 68, '#6e5cf5'], ['App móvil', 34, '#38bdf8'], ['Rediseño de marca', 87, '#ec4899']] },
  },
  flow: {
    eyebrow: 'El flujo completo', h2: 'De la idea al release, sin perder el hilo.',
    steps: [
      ['layers', 'Planificá', 'Organizá el trabajo en epics, sprints y backlog. Definí prioridades y objetivos antes de arrancar.'],
      ['square-kanban', 'Ejecutá', 'Mové tareas por el tablero, asigná al equipo y medí el tiempo dedicado a cada una.'],
      ['git-branch', 'Conectá', 'El código llega solo: los commits de GitHub se vinculan a cada tarea por su clave.'],
      ['chart-column', 'Medí', 'Reportes de tiempo, progreso por proyecto y OKRs para saber qué se logró de verdad.'],
    ],
  },
  details: {
    eyebrow: 'Los detalles', h2: 'Pensado hasta el último píxel.', lead: 'Las pequeñas cosas que hacen que usar FlowBoard todos los días se sienta liviano.',
    items: [
      ['command', 'Paleta de comandos', 'Navegá y ejecutá acciones desde el teclado, sin despegar las manos.'],
      ['bookmark', 'Vistas guardadas', 'Guardá tus combinaciones de filtros y volvé a ellas en un clic.'],
      ['link', 'Dependencias', 'Marcá qué tarea bloquea a cuál y mirá el bloqueo directo en la tarjeta.'],
      ['upload', 'Archivos', 'Subí archivos por drag & drop, de hasta 50 MB, directo al almacenamiento.'],
      ['users', 'Equipos y roles', 'Invitá gente a tu workspace y controlá qué puede hacer cada rol.'],
      ['import', 'Importá tu trabajo', 'Traé proyectos desde JSON con vista previa antes de confirmar.'],
    ],
  },
  cta: { h2: 'Poné a tu equipo en flujo.', lead: 'Creá tu workspace gratis y armá tu primer tablero en minutos.', primary: 'Crear cuenta gratis', secondary: 'Ya tengo cuenta' },
};

const en: HomeCopy = {
  hero: {
    badge: 'New', badgeText: 'Git integration and AI-generated tickets',
    l1: 'Turn complex', l2: 'work into a', l3: 'clear flow.',
    lead: 'FlowBoard brings projects, teams and progress together: Kanban boards, sprints, timeline, OKRs and time tracking. Fast, organized and built to keep work moving.',
    cta1: 'Get started free', cta2: 'See how it works', note: 'Free plan · Sign up in 1 minute',
    aria: 'Turn complex work into a clear flow.',
  },
  board: {
    nav: ['Dashboard', 'My tasks', 'Projects', 'Goals', 'Reports', 'Team'], ws: 'Workspace · Northwind Studio',
    project: 'Launch v2', sprintSub: 'Sprint 12 · 8 days left', tabs: ['Board', 'List', 'Timeline', 'Sprints'], progress: 'Progress',
    url: 'flowboard.vercel.app/projects/launch-v2/board', preview: 'Animated preview of the FlowBoard board', cursor1: 'Sofia', cursor2: 'Lucy',
    cols: ['To do', 'In progress', 'In review', 'Done'],
    tags: { plan: 'Planning', design: 'Design', back: 'Backend', front: 'Frontend', infra: 'Infra' },
    cards: {
      scope: { key: 'FLW-142', title: 'Define the release scope', tag: 'plan', who: 'SM', p: 3, col: 0 },
      onb: { key: 'FLW-139', title: 'Design team onboarding', tag: 'design', who: 'LV', p: 2, col: 0 },
      authz: { key: 'FLW-137', title: 'Audit API permissions', tag: 'back', who: 'DP', p: 3, col: 0 },
      gh: { key: 'FLW-131', title: 'GitHub webhook integration', tag: 'back', who: 'MR', p: 3, col: 1 },
      tl: { key: 'FLW-128', title: 'Timeline with dependencies', tag: 'front', who: 'SM', p: 2, col: 1 },
      rep: { key: 'FLW-124', title: 'Time reports per project', tag: 'front', who: 'LV', p: 2, col: 2 },
      auth: { key: 'FLW-118', title: 'Email verification on sign-up', tag: 'back', who: 'DP', p: 2, col: 3 },
      dnd: { key: 'FLW-112', title: 'Drag & drop board', tag: 'front', who: 'MR', p: 1, col: 3 },
    },
  },
  marquee: [
    ['square-kanban', 'Kanban boards'], ['list-checks', 'List views'], ['chart-gantt', 'Timeline'], ['rocket', 'Sprints'], ['layers', 'Epics'], ['target', 'OKRs'],
    ['briefcase', 'Portfolios'], ['timer', 'Time tracking'], ['git-branch', 'Git integration'], ['sparkles', 'AI tickets'], ['folder', 'Files'], ['chart-column', 'Reports'],
  ],
  showcase: {
    eyebrow: 'One product, every view', h2a: 'Every team works differently.', h2b: 'FlowBoard adapts to all of them.', label: 'Launch v2',
    steps: [
      { icon: 'square-kanban', title: 'Board', text: 'Kanban with drag & drop. Create, rename and color your columns, and filter by priority, assignee, type or epic: filters stay where you left them.' },
      { icon: 'list-checks', title: 'List', text: 'The whole backlog in a table grouped by sprint. Edit status, priority and assignees per row, or run bulk actions on dozens of tasks.' },
      { icon: 'chart-gantt', title: 'Timeline', text: 'See work across time. Switch the scale between day, week, month and quarter, with a today marker and tasks placed by their real dates.' },
      { icon: 'rocket', title: 'Sprints', text: 'Plan the backlog, start the sprint and close it with real progress metrics. Know at every moment whether you will make it.' },
    ],
    boardCols: [
      ['To do', '#6b6a7d', [['Define the release scope', 'plan'], ['Design onboarding', 'design'], ['Audit permissions', 'back']]],
      ['In progress', '#38bdf8', [['GitHub webhook', 'back'], ['Timeline with dependencies', 'front']]],
      ['Done', '#34d399', [['Email verification', 'back'], ['Drag & drop', 'front'], ['Saved views', 'front']]],
    ],
    listHead: 'Sprint 12', listCount: '· 6 tasks',
    rows: [
      ['Define the release scope', 'plan', 'SM', 'todo', 'Oct 12', ''], ['GitHub webhook integration', 'back', 'MR', 'prog', 'Oct 14', ''],
      ['Timeline with dependencies', 'front', 'SM', 'prog', 'Oct 16', ''], ['Time reports per project', 'front', 'LV', 'rev', 'Oct 17', ''],
      ['Email verification', 'back', 'DP', 'done', 'Oct 8', ''], ['Drag & drop board', 'front', 'MR', 'done', 'Oct 5', ''],
    ],
    weeks: ['Wk 41', 'Wk 42', 'Wk 43', 'Wk 44'], today: 'Today',
    bars: [['Define scope', 0, 22, '#9b8bff'], ['Onboarding design', 12, 28, '#f472b6'], ['GitHub webhook', 20, 34, '#38bdf8'], ['Timeline', 30, 30, '#34d399'], ['Time reports', 42, 26, '#fbbf24'], ['QA and release', 60, 30, '#6e5cf5']],
    sprint: { name: 'Sprint 12', goal: 'Goal: ship integrations and reports', badge: 'Active', done: 'Tasks completed', progress: 'Progress', days: 'Days left', real: 'Actual', ideal: 'Ideal' },
    status: { todo: 'To do', prog: 'In progress', rev: 'In review', done: 'Done' },
  },
  bento: {
    eyebrow: 'Features', h2: 'Much more than a task board.', lead: 'Goals, time, code and portfolios connected to daily work, without hopping between five tools.',
    ai: { tag: 'AI', h: 'Describe the idea. FlowBoard drafts the tickets.', p: 'Go from a paragraph to epics, stories and tasks ready for the board, in seconds.', prompt: 'We need a checkout with payments and emails', n: 42,
      tickets: [['Epic', '#9b8bff', 'Checkout with payments and email confirmation'], ['Story', '#38bdf8', 'As a customer, I want to pay by card'], ['Task', '#34d399', 'Build the create-order endpoint'], ['Task', '#34d399', 'Confirmation email template']] },
    okr: { tag: 'OKRs', h: 'Goals connected to the real work.', p: 'Link goals to projects and follow key results with progress visible to the whole team.',
      krs: [['Activate 500 teams', 72, '#9b8bff'], ['Cut onboarding time to 5 min', 48, '#38bdf8'], ['NPS above 50', 91, '#34d399']] },
    git: { tag: 'Git', h: 'Your commits, on every task.', p: 'Mention the task key in the commit and it links itself.', commit: 'feat: export reports', task: 'Time reports per project' },
    time: { tag: 'Time', h: 'Time tracking without leaving the task.', p: 'Start the timer, mark billable hours and check the reports.', days: 'MTWTFSS' },
    pf: { tag: 'Portfolios', h: 'All your projects, at a glance.', p: 'Group projects into portfolios and follow overall progress.', items: [['Launch v2', 68, '#6e5cf5'], ['Mobile app', 34, '#38bdf8'], ['Brand redesign', 87, '#ec4899']] },
  },
  flow: {
    eyebrow: 'The full flow', h2: 'From idea to release, without losing the thread.',
    steps: [
      ['layers', 'Plan', 'Organize work into epics, sprints and backlog. Set priorities and goals before you start.'],
      ['square-kanban', 'Execute', 'Move tasks across the board, assign the team and track the time spent on each one.'],
      ['git-branch', 'Connect', 'Code arrives on its own: GitHub commits link to each task by its key.'],
      ['chart-column', 'Measure', 'Time reports, progress per project and OKRs to know what was really achieved.'],
    ],
  },
  details: {
    eyebrow: 'The details', h2: 'Crafted down to the last pixel.', lead: 'The small things that make using FlowBoard every day feel light.',
    items: [
      ['command', 'Command palette', 'Navigate and run actions from the keyboard without lifting your hands.'],
      ['bookmark', 'Saved views', 'Save your filter combinations and get back to them in one click.'],
      ['link', 'Dependencies', 'Mark which task blocks which and see the block right on the card.'],
      ['upload', 'Files', 'Upload files by drag & drop, up to 50 MB, straight to storage.'],
      ['users', 'Teams and roles', 'Invite people to your workspace and control what each role can do.'],
      ['import', 'Import your work', 'Bring projects in from JSON with a preview before you confirm.'],
    ],
  },
  cta: { h2: 'Put your team in flow.', lead: 'Create your workspace for free and build your first board in minutes.', primary: 'Create a free account', secondary: 'I already have an account' },
};

export const home: Record<Lang, HomeCopy> = { es, en };
