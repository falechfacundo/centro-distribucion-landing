import type { CompareKey, Lang } from './routes';

/* ---------------- Precios ---------------- */
export const pricing = {
  es: {
    metaTitle: 'Precios',
    metaDesc: 'FlowBoard tiene un plan gratuito para empezar: Kanban, sprints, timeline, OKRs, time tracking e integración con Git. Sin tarjeta de crédito.',
    eyebrow: 'Precios', h1: 'Empezá gratis. Crecé a tu ritmo.',
    lead: 'Un plan gratuito para poner a tu equipo en flujo hoy mismo. Sin tarjeta de crédito.',
    free: { name: 'Gratis', price: '$0', period: 'para empezar', desc: 'Todo lo necesario para organizar proyectos y equipos.', cta: 'Crear cuenta gratis',
      items: ['Tableros Kanban con drag & drop', 'Vistas de lista y timeline', 'Sprints, epics y backlog', 'OKRs y portfolios', 'Time tracking y reportes', 'Integración con GitHub', 'Generación de tickets con IA', 'Subida de archivos (hasta 50 MB)', 'Invitación de miembros y roles'] },
    teams: { name: 'Equipos', price: 'Próximamente', period: '', desc: 'Estamos definiendo planes para equipos más grandes. Contanos qué necesitás y lo tenemos en cuenta.', cta: 'Contanos qué necesitás', items: ['Todo lo del plan Gratis', 'Más capacidad y controles avanzados', 'Soporte prioritario'] },
    faqTitle: 'Preguntas sobre precios',
    faq: [
      ['¿Necesito tarjeta de crédito para empezar?', 'No. Podés registrarte y usar FlowBoard sin cargar ningún medio de pago.'],
      ['¿Qué incluye el plan gratuito?', 'Las funciones principales del producto: tableros, vistas de lista y timeline, sprints, OKRs, portfolios, time tracking, reportes e integración con Git.'],
      ['¿Van a cobrar en el futuro?', 'Estamos definiendo planes para equipos más grandes. Si tu equipo tiene necesidades específicas, escribinos.'],
      ['¿Dónde están mis datos?', 'Podés leer los detalles en nuestra política de privacidad.'],
    ],
  },
  en: {
    metaTitle: 'Pricing',
    metaDesc: 'FlowBoard has a free plan to get started: Kanban, sprints, timeline, OKRs, time tracking and Git integration. No credit card required.',
    eyebrow: 'Pricing', h1: 'Start free. Grow at your pace.',
    lead: 'A free plan to put your team in flow today. No credit card required.',
    free: { name: 'Free', price: '$0', period: 'to get started', desc: 'Everything you need to organize projects and teams.', cta: 'Create a free account',
      items: ['Kanban boards with drag & drop', 'List and timeline views', 'Sprints, epics and backlog', 'OKRs and portfolios', 'Time tracking and reports', 'GitHub integration', 'AI ticket generation', 'File uploads (up to 50 MB)', 'Member invitations and roles'] },
    teams: { name: 'Teams', price: 'Coming soon', period: '', desc: 'We are defining plans for larger teams. Tell us what you need and we will take it into account.', cta: 'Tell us what you need', items: ['Everything in the Free plan', 'More capacity and advanced controls', 'Priority support'] },
    faqTitle: 'Pricing questions',
    faq: [
      ['Do I need a credit card to start?', 'No. You can sign up and use FlowBoard without adding any payment method.'],
      ['What does the free plan include?', 'The core features of the product: boards, list and timeline views, sprints, OKRs, portfolios, time tracking, reports and Git integration.'],
      ['Will you charge in the future?', 'We are defining plans for larger teams. If your team has specific needs, write to us.'],
      ['Where is my data?', 'You can read the details in our privacy policy.'],
    ],
  },
} as const;

/* ---------------- Comparativas ---------------- */
interface CompareCopy {
  metaTitle: string; metaDesc: string; h1: string; lead: string;
  quick: { fb: string; other: string };
  chooseFb: string[]; chooseOther: string[]; faq: [string, string][];
}
const names = { 'cmp-jira': 'Jira', 'cmp-clickup': 'ClickUp', 'cmp-linear': 'Linear', 'cmp-trello': 'Trello' } as const;

const cmpEs: Record<CompareKey, CompareCopy> = {
  'cmp-jira': {
    metaTitle: 'FlowBoard vs Jira', metaDesc: 'Comparación entre FlowBoard y Jira: enfoque, complejidad y para qué tipo de equipo conviene cada uno. Alternativa simple a Jira.',
    h1: 'FlowBoard vs Jira', lead: 'Jira es una plataforma muy configurable con un gran ecosistema. FlowBoard apunta a lo opuesto: dejar a tu equipo trabajando rápido, con lo esencial bien resuelto.',
    quick: { fb: 'FlowBoard prioriza la simplicidad: tableros, sprints, timeline, OKRs y time tracking listos para usar, sin armar flujos de trabajo complejos antes de empezar.', other: 'Jira ofrece flujos de trabajo altamente personalizables, gran cantidad de integraciones y un ecosistema pensado para organizaciones grandes.' },
    chooseFb: ['Querés empezar a trabajar hoy, sin semanas de configuración.', 'Tu equipo es chico o mediano y no necesita workflows muy personalizados.', 'Preferís tener OKRs, time tracking y reportes en la misma herramienta.', 'Valorás una interfaz liviana y rápida.'],
    chooseOther: ['Necesitás flujos de trabajo y permisos muy granulares.', 'Tu organización ya usa el ecosistema de Atlassian.', 'Dependés de integraciones o extensiones específicas del marketplace.'],
    faq: [['¿FlowBoard es una alternativa a Jira?', 'Para equipos que buscan una herramienta más simple con Kanban, sprints y OKRs, sí. Si necesitás la personalización profunda de Jira, quizás Jira siga siendo la mejor opción.'], ['¿Puedo migrar desde Jira?', 'FlowBoard permite importar proyectos desde JSON con vista previa antes de confirmar.']],
  },
  'cmp-clickup': {
    metaTitle: 'FlowBoard vs ClickUp', metaDesc: 'Comparación entre FlowBoard y ClickUp: qué ofrece cada uno y para qué equipos conviene. Una alternativa enfocada a ClickUp.',
    h1: 'FlowBoard vs ClickUp', lead: 'ClickUp busca cubrir casi todo en una sola plataforma. FlowBoard se concentra en gestión de proyectos y la hace liviana.',
    quick: { fb: 'FlowBoard se enfoca en proyectos, sprints, objetivos y tiempo. Menos superficie, menos ruido, más foco en mover el trabajo.', other: 'ClickUp ofrece una superficie muy amplia de funciones: tareas, documentos, vistas y más, con mucha configuración disponible.' },
    chooseFb: ['Querés una herramienta enfocada en proyectos, sin abrumarte con opciones.', 'Priorizás velocidad y claridad sobre amplitud de funciones.', 'Buscás OKRs, sprints y time tracking integrados al tablero.'],
    chooseOther: ['Querés concentrar documentos, tareas y otras herramientas en una sola plataforma.', 'Tu equipo disfruta configurar y personalizar mucho su espacio.'],
    faq: [['¿FlowBoard es más simple que ClickUp?', 'FlowBoard tiene un alcance más acotado a propósito: gestión de proyectos, objetivos y tiempo, con una interfaz liviana.'], ['¿Qué vistas tiene FlowBoard?', 'Tablero Kanban, lista, timeline y sprints, además de reportes.']],
  },
  'cmp-linear': {
    metaTitle: 'FlowBoard vs Linear', metaDesc: 'Comparación entre FlowBoard y Linear: enfoque, tipo de equipo y funciones. Elegí la herramienta que mejor encaja con tu forma de trabajar.',
    h1: 'FlowBoard vs Linear', lead: 'Linear es una herramienta muy enfocada en equipos de producto y software. FlowBoard suma OKRs, portfolios y time tracking para equipos más variados.',
    quick: { fb: 'FlowBoard combina tablero, sprints, OKRs, portfolios y time tracking, útil también para equipos que no son solo de ingeniería.', other: 'Linear tiene una propuesta muy opinada y ágil, pensada principalmente para equipos de software.' },
    chooseFb: ['Tu equipo mezcla perfiles (diseño, marketing, operaciones, desarrollo).', 'Querés medir tiempo y facturación junto a las tareas.', 'Necesitás agrupar proyectos en portfolios y seguir OKRs.'],
    chooseOther: ['Sos un equipo de software que quiere un flujo muy opinado y centrado en ingeniería.', 'Ya tenés procesos armados alrededor de sus convenciones.'],
    faq: [['¿FlowBoard sirve para equipos de desarrollo?', 'Sí: tiene sprints, epics, integración con GitHub y vinculación de commits a tareas.'], ['¿Tiene time tracking?', 'Sí, con timer por tarea, horas facturables y reportes.']],
  },
  'cmp-trello': {
    metaTitle: 'FlowBoard vs Trello', metaDesc: 'Comparación entre FlowBoard y Trello: cuándo alcanza con tarjetas simples y cuándo conviene pasar a sprints, OKRs y reportes.',
    h1: 'FlowBoard vs Trello', lead: 'Trello es ideal para tableros simples. FlowBoard mantiene esa simpleza y suma lo que suele faltar al crecer: sprints, timeline, OKRs, tiempo y reportes.',
    quick: { fb: 'FlowBoard te da un tablero Kanban familiar y, cuando lo necesitás, sprints, timeline, objetivos y reportes en el mismo lugar.', other: 'Trello se destaca por su simplicidad: tableros, listas y tarjetas fáciles de entender para cualquiera.' },
    chooseFb: ['Tu equipo creció y necesita sprints, fechas y reportes.', 'Querés seguir objetivos y medir tiempo sin sumar otra herramienta.', 'Buscás vinculación con commits de GitHub.'],
    chooseOther: ['Solo necesitás listas y tarjetas simples.', 'Usás Trello para organización personal o proyectos muy chicos.'],
    faq: [['¿Puedo pasar de Trello a FlowBoard?', 'Podés importar proyectos desde JSON con vista previa antes de confirmar.'], ['¿FlowBoard tiene tablero Kanban?', 'Sí, con drag & drop, columnas personalizables y filtros que se recuerdan.']],
  },
};

const cmpEn: Record<CompareKey, CompareCopy> = {
  'cmp-jira': {
    metaTitle: 'FlowBoard vs Jira', metaDesc: 'FlowBoard vs Jira compared: approach, complexity and which kind of team each one suits. A simple alternative to Jira.',
    h1: 'FlowBoard vs Jira', lead: 'Jira is a highly configurable platform with a large ecosystem. FlowBoard aims for the opposite: get your team working fast, with the essentials done well.',
    quick: { fb: 'FlowBoard prioritizes simplicity: boards, sprints, timeline, OKRs and time tracking ready to use, without building complex workflows before you start.', other: 'Jira offers highly customizable workflows, many integrations and an ecosystem built for large organizations.' },
    chooseFb: ['You want to start working today, without weeks of setup.', 'Your team is small or mid-sized and does not need heavily customized workflows.', 'You prefer OKRs, time tracking and reports in the same tool.', 'You value a light, fast interface.'],
    chooseOther: ['You need very granular workflows and permissions.', 'Your organization already uses the Atlassian ecosystem.', 'You depend on specific marketplace integrations or extensions.'],
    faq: [['Is FlowBoard an alternative to Jira?', 'For teams looking for a simpler tool with Kanban, sprints and OKRs, yes. If you need Jira’s deep customization, Jira may still be the better choice.'], ['Can I migrate from Jira?', 'FlowBoard lets you import projects from JSON with a preview before confirming.']],
  },
  'cmp-clickup': {
    metaTitle: 'FlowBoard vs ClickUp', metaDesc: 'FlowBoard vs ClickUp compared: what each one offers and which teams they fit. A focused alternative to ClickUp.',
    h1: 'FlowBoard vs ClickUp', lead: 'ClickUp aims to cover almost everything in one platform. FlowBoard concentrates on project management and keeps it light.',
    quick: { fb: 'FlowBoard focuses on projects, sprints, goals and time. Less surface, less noise, more focus on moving work.', other: 'ClickUp offers a very wide surface of features: tasks, docs, views and more, with plenty of configuration available.' },
    chooseFb: ['You want a tool focused on projects, without being overwhelmed by options.', 'You prioritize speed and clarity over breadth of features.', 'You want OKRs, sprints and time tracking integrated into the board.'],
    chooseOther: ['You want to consolidate docs, tasks and other tools in a single platform.', 'Your team enjoys configuring and customizing its space a lot.'],
    faq: [['Is FlowBoard simpler than ClickUp?', 'FlowBoard has a deliberately narrower scope: project management, goals and time, with a light interface.'], ['What views does FlowBoard have?', 'Kanban board, list, timeline and sprints, plus reports.']],
  },
  'cmp-linear': {
    metaTitle: 'FlowBoard vs Linear', metaDesc: 'FlowBoard vs Linear compared: focus, team type and features. Pick the tool that best fits how you work.',
    h1: 'FlowBoard vs Linear', lead: 'Linear is a tool strongly focused on product and software teams. FlowBoard adds OKRs, portfolios and time tracking for more varied teams.',
    quick: { fb: 'FlowBoard combines board, sprints, OKRs, portfolios and time tracking, useful for teams that are not only engineering.', other: 'Linear has a very opinionated and agile proposition, mainly designed for software teams.' },
    chooseFb: ['Your team mixes profiles (design, marketing, operations, development).', 'You want to track time and billing next to tasks.', 'You need to group projects into portfolios and follow OKRs.'],
    chooseOther: ['You are a software team that wants a very opinionated, engineering-centered flow.', 'You already have processes built around its conventions.'],
    faq: [['Does FlowBoard work for development teams?', 'Yes: it has sprints, epics, GitHub integration and commit-to-task linking.'], ['Does it have time tracking?', 'Yes, with a per-task timer, billable hours and reports.']],
  },
  'cmp-trello': {
    metaTitle: 'FlowBoard vs Trello', metaDesc: 'FlowBoard vs Trello compared: when simple cards are enough and when it is time to move to sprints, OKRs and reports.',
    h1: 'FlowBoard vs Trello', lead: 'Trello is great for simple boards. FlowBoard keeps that simplicity and adds what usually goes missing as you grow: sprints, timeline, OKRs, time and reports.',
    quick: { fb: 'FlowBoard gives you a familiar Kanban board and, when you need it, sprints, timeline, goals and reports in the same place.', other: 'Trello stands out for its simplicity: boards, lists and cards that anyone can understand.' },
    chooseFb: ['Your team has grown and needs sprints, dates and reports.', 'You want to follow goals and track time without adding another tool.', 'You want to link GitHub commits.'],
    chooseOther: ['You only need simple lists and cards.', 'You use Trello for personal organization or very small projects.'],
    faq: [['Can I move from Trello to FlowBoard?', 'You can import projects from JSON with a preview before confirming.'], ['Does FlowBoard have a Kanban board?', 'Yes, with drag & drop, customizable columns and filters that stick.']],
  },
};

export const compare = {
  es: { data: cmpEs, names, h: { quick: 'En pocas palabras', fb: 'Cuándo elegir FlowBoard', other: (n: string) => `Cuándo elegir ${n}`, includes: 'Qué incluye FlowBoard', disclaimer: 'Comparación basada en información pública y en el enfoque general de cada producto; las funciones pueden cambiar. Todas las marcas pertenecen a sus respectivos dueños.', ctaH: 'Probá FlowBoard gratis', ctaP: 'Armá tu primer tablero en minutos y decidí por vos mismo.', includesList: ['Tableros Kanban con drag & drop', 'Sprints, epics y backlog', 'Timeline y vista de lista', 'OKRs y portfolios', 'Time tracking y reportes', 'Integración con GitHub'] } },
  en: { data: cmpEn, names, h: { quick: 'In a nutshell', fb: 'When to choose FlowBoard', other: (n: string) => `When to choose ${n}`, includes: 'What FlowBoard includes', disclaimer: 'Comparison based on public information and each product’s general approach; features may change. All trademarks belong to their respective owners.', ctaH: 'Try FlowBoard for free', ctaP: 'Build your first board in minutes and decide for yourself.', includesList: ['Kanban boards with drag & drop', 'Sprints, epics and backlog', 'Timeline and list view', 'OKRs and portfolios', 'Time tracking and reports', 'GitHub integration'] } },
} as const;

/* ---------------- Contacto ---------------- */
export const contact = {
  es: { metaTitle: 'Contacto', metaDesc: 'Escribinos: consultas sobre FlowBoard, soporte, planes para equipos y prensa.', h1: 'Hablemos.', lead: 'Contanos qué necesitás y te respondemos por email.',
    topics: [['life-buoy', 'Soporte', 'Ayuda con tu cuenta o con el uso del producto.'], ['users', 'Equipos', 'Necesidades de un equipo grande o requisitos específicos.'], ['message-square', 'Feedback', 'Ideas y sugerencias para mejorar FlowBoard.']], email: 'Escribinos a', hint: 'Solemos responder en uno o dos días hábiles.' },
  en: { metaTitle: 'Contact', metaDesc: 'Write to us: questions about FlowBoard, support, team plans and press.', h1: 'Let’s talk.', lead: 'Tell us what you need and we will reply by email.',
    topics: [['life-buoy', 'Support', 'Help with your account or using the product.'], ['users', 'Teams', 'Needs of a larger team or specific requirements.'], ['message-square', 'Feedback', 'Ideas and suggestions to improve FlowBoard.']], email: 'Write to us at', hint: 'We usually reply within one or two business days.' },
} as const;

/* ---------------- Legales ---------------- */
type Section = [string, string[]];
export interface LegalDoc { metaTitle: string; metaDesc: string; h1: string; updated: string; sections: Section[] }

export const legal: Record<'terms' | 'privacy', Record<Lang, LegalDoc>> = {
  terms: {
    es: {
      metaTitle: 'Términos y condiciones', metaDesc: 'Términos y condiciones de uso del servicio FlowBoard.', h1: 'Términos y condiciones', updated: '29 de septiembre de 2026',
      sections: [
        ['1. Aceptación', ['Al crear una cuenta o usar FlowBoard aceptás estos términos. Si no estás de acuerdo, no uses el servicio.']],
        ['2. El servicio', ['FlowBoard es una herramienta web de gestión de proyectos que incluye tableros, sprints, objetivos, seguimiento de tiempo e integraciones. Podemos modificar, agregar o retirar funciones para mejorar el servicio.']],
        ['3. Tu cuenta', ['Sos responsable de la información que cargás al registrarte, de mantener la confidencialidad de tu contraseña y de la actividad realizada desde tu cuenta. Debés verificar tu email para usar el servicio.']],
        ['4. Uso aceptable', ['No podés usar FlowBoard para actividades ilegales, para vulnerar derechos de terceros, para intentar acceder sin autorización a datos de otros usuarios ni para interferir con el funcionamiento del servicio.']],
        ['5. Tu contenido', ['Conservás todos los derechos sobre el contenido que cargás (proyectos, tareas, archivos). Nos otorgás el permiso necesario para almacenarlo y procesarlo con el único fin de prestarte el servicio.']],
        ['6. Disponibilidad', ['Trabajamos para que el servicio esté disponible de forma continua, pero no garantizamos que funcione sin interrupciones ni errores. Podemos realizar mantenimientos o cambios.']],
        ['7. Limitación de responsabilidad', ['En la máxima medida permitida por la ley, FlowBoard no será responsable por daños indirectos o pérdida de datos o beneficios derivados del uso del servicio. Te recomendamos mantener copias de la información importante.']],
        ['8. Terminación', ['Podés dejar de usar el servicio en cualquier momento. Podemos suspender cuentas que incumplan estos términos.']],
        ['9. Cambios', ['Podemos actualizar estos términos. Publicaremos la versión vigente en esta página con su fecha de actualización.']],
        ['10. Contacto', ['Para consultas sobre estos términos, escribinos desde la página de contacto.']],
      ],
    },
    en: {
      metaTitle: 'Terms and conditions', metaDesc: 'Terms and conditions for using the FlowBoard service.', h1: 'Terms and conditions', updated: 'September 29, 2026',
      sections: [
        ['1. Acceptance', ['By creating an account or using FlowBoard you accept these terms. If you do not agree, do not use the service.']],
        ['2. The service', ['FlowBoard is a web project management tool that includes boards, sprints, goals, time tracking and integrations. We may modify, add or remove features to improve the service.']],
        ['3. Your account', ['You are responsible for the information you provide when signing up, for keeping your password confidential and for the activity carried out from your account. You must verify your email to use the service.']],
        ['4. Acceptable use', ['You may not use FlowBoard for illegal activities, to infringe third-party rights, to attempt unauthorized access to other users’ data or to interfere with the operation of the service.']],
        ['5. Your content', ['You keep all rights to the content you upload (projects, tasks, files). You grant us the permission needed to store and process it solely to provide the service to you.']],
        ['6. Availability', ['We work to keep the service continuously available, but we do not guarantee it will run without interruptions or errors. We may perform maintenance or changes.']],
        ['7. Limitation of liability', ['To the maximum extent permitted by law, FlowBoard will not be liable for indirect damages or loss of data or profits arising from use of the service. We recommend keeping copies of important information.']],
        ['8. Termination', ['You can stop using the service at any time. We may suspend accounts that breach these terms.']],
        ['9. Changes', ['We may update these terms. We will publish the current version on this page with its update date.']],
        ['10. Contact', ['For questions about these terms, write to us from the contact page.']],
      ],
    },
  },
  privacy: {
    es: {
      metaTitle: 'Política de privacidad', metaDesc: 'Cómo FlowBoard recopila, usa y protege tus datos personales.', h1: 'Política de privacidad', updated: '29 de septiembre de 2026',
      sections: [
        ['1. Qué datos recopilamos', ['Datos de cuenta: nombre, email y contraseña (almacenada de forma cifrada con hash).', 'Contenido que cargás: proyectos, tareas, comentarios, archivos, registros de tiempo y objetivos.', 'Datos de uso y técnicos necesarios para operar y proteger el servicio.']],
        ['2. Para qué los usamos', ['Para prestar el servicio, autenticarte, enviarte emails transaccionales (verificación de cuenta, restablecimiento de contraseña, invitaciones) y mantener la seguridad y el rendimiento.']],
        ['3. Proveedores que procesan datos', ['Usamos proveedores de infraestructura para operar FlowBoard, por ejemplo hosting de la aplicación, base de datos PostgreSQL, almacenamiento de archivos y envío de emails. Estos proveedores procesan datos únicamente para prestarnos sus servicios.']],
        ['4. Conservación', ['Conservamos tus datos mientras tu cuenta esté activa o sea necesario para prestar el servicio. Podés solicitar la eliminación de tu cuenta y datos.']],
        ['5. Seguridad', ['Aplicamos medidas técnicas y organizativas razonables, como contraseñas con hash, verificación de email y controles de acceso por workspace. Ningún sistema es completamente infalible.']],
        ['6. Tus derechos', ['Podés acceder, rectificar y solicitar la eliminación de tus datos personales. Para ejercer estos derechos, escribinos desde la página de contacto.']],
        ['7. Cookies', ['Usamos cookies estrictamente necesarias para mantener tu sesión iniciada. Este sitio de presentación no utiliza cookies de publicidad.']],
        ['8. Cambios', ['Podemos actualizar esta política. Publicaremos la versión vigente aquí con su fecha de actualización.']],
      ],
    },
    en: {
      metaTitle: 'Privacy policy', metaDesc: 'How FlowBoard collects, uses and protects your personal data.', h1: 'Privacy policy', updated: 'September 29, 2026',
      sections: [
        ['1. Data we collect', ['Account data: name, email and password (stored as a secure hash).', 'Content you upload: projects, tasks, comments, files, time entries and goals.', 'Usage and technical data needed to operate and protect the service.']],
        ['2. What we use it for', ['To provide the service, authenticate you, send transactional emails (account verification, password reset, invitations) and maintain security and performance.']],
        ['3. Providers that process data', ['We use infrastructure providers to operate FlowBoard, for example application hosting, a PostgreSQL database, file storage and email delivery. These providers process data only to provide their services to us.']],
        ['4. Retention', ['We keep your data while your account is active or as needed to provide the service. You can request deletion of your account and data.']],
        ['5. Security', ['We apply reasonable technical and organizational measures, such as hashed passwords, email verification and workspace-level access controls. No system is completely infallible.']],
        ['6. Your rights', ['You can access, correct and request deletion of your personal data. To exercise these rights, write to us from the contact page.']],
        ['7. Cookies', ['We use strictly necessary cookies to keep you signed in. This marketing site does not use advertising cookies.']],
        ['8. Changes', ['We may update this policy. We will publish the current version here with its update date.']],
      ],
    },
  },
};

/* ---------------- Changelog ---------------- */
export const changelog = {
  es: { metaTitle: 'Novedades y changelog', metaDesc: 'Todo lo nuevo en FlowBoard: funciones, mejoras y correcciones, en orden cronológico.', h1: 'Novedades', lead: 'Lo que fuimos construyendo en FlowBoard.',
    entries: [
      { date: '2026-09-27', title: 'Más seguridad y mejor experiencia', items: ['Permisos revisados en toda la API y aislamiento entre workspaces.', 'Vistas guardadas por proyecto y filtros que se recuerdan entre sesiones.', 'Recuperación de timers abiertos desde Mis tareas.', 'Invitación de miembros al workspace desde Equipo.', 'Estados de carga y pantallas vacías más claros.'] },
      { date: '2026-09-17', title: 'Git, archivos e IA', items: ['Integración con GitHub: commits vinculados a tareas por su clave.', 'Generación de tickets con IA desde el tablero.', 'Subida de archivos de hasta 50 MB directo al almacenamiento.', 'Vista de lista agrupada por sprint con edición por fila.', 'Columnas del tablero: crear, renombrar y colorear.', 'Dependencias entre tareas con indicador de bloqueo.', 'Objetivos vinculados a proyectos e iconos personalizados por proyecto.'] },
      { date: '2026-09-16', title: 'Registro y cuentas', items: ['Registro autoservicio con creación de workspace.', 'Verificación de email obligatoria.', 'Restablecimiento de contraseña por email.'] },
    ] },
  en: { metaTitle: 'Changelog and updates', metaDesc: 'Everything new in FlowBoard: features, improvements and fixes, in chronological order.', h1: 'Changelog', lead: 'What we have been building in FlowBoard.',
    entries: [
      { date: '2026-09-27', title: 'More security and a better experience', items: ['Permissions reviewed across the whole API and isolation between workspaces.', 'Saved views per project and filters remembered across sessions.', 'Recovery of open timers from My tasks.', 'Invite members to the workspace from Team.', 'Clearer loading states and empty screens.'] },
      { date: '2026-09-17', title: 'Git, files and AI', items: ['GitHub integration: commits linked to tasks by their key.', 'AI ticket generation from the board.', 'File uploads up to 50 MB straight to storage.', 'List view grouped by sprint with per-row editing.', 'Board columns: create, rename and color.', 'Task dependencies with a block indicator.', 'Goals linked to projects and custom project icons.'] },
      { date: '2026-09-16', title: 'Sign-up and accounts', items: ['Self-serve sign-up with workspace creation.', 'Mandatory email verification.', 'Password reset by email.'] },
    ] },
} as const;
