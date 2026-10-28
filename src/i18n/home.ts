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
    time: { tag: string; h: string; p: string; days: string[]; state: string };
    pf: { tag: string; h: string; p: string; items: [string, number, string][] };
  };
  flow: { eyebrow: string; h2: string; steps: [string, string, string][] };
  details: { eyebrow: string; h2: string; lead: string; items: [string, string, string][] };
  cta: { h2: string; lead: string; primary: string; secondary: string };
}
const tagColors: Record<Tag, string> = { plan: '#54d6b7', design: '#fbbf24', back: '#38bdf8', front: '#34d399', infra: '#f87171' };
export const tagColor = (t: Tag) => tagColors[t];

const es: HomeCopy = {
  hero: { badge: 'Operación conectada', badgeText: 'Inventario, catálogo y depósito en un mismo lugar', l1: 'Más control para', l2: 'cada movimiento', l3: 'de tu operación.', lead: 'Centro Distribución conecta productos, existencias y tareas de depósito para que tu equipo trabaje con información trazable y un contexto compartido.', cta1: 'Solicitar una demo', cta2: 'Conocer la plataforma', note: 'Diseñada para operaciones de abastecimiento y distribución', aria: 'Más control para cada movimiento de tu operación.' },
  board: {
    nav: ['Resumen', 'Productos', 'Inventario', 'Recepciones', 'Proveedores', 'Ubicaciones'], ws: 'Organización · Depósito central', project: 'Recepción de mercadería', sprintSub: 'Ingreso · Orden OC-2048', tabs: ['Recepción', 'Productos', 'Lotes', 'Movimientos'], progress: 'Unidades recibidas', url: 'Centro Distribución / Recepciones', preview: 'Datos ilustrativos · Vista de operación', cursor1: 'Mara', cursor2: 'Diego', cols: ['Pendiente', 'En recepción', 'Por ubicar', 'Ingresado'],
    tags: { plan: 'Recepción', design: 'Control', back: 'Inventario', front: 'Ubicación', infra: 'Incidencia' },
    cards: { a: { key: 'OC-2048', title: 'Verificar orden de compra', tag: 'plan', who: 'MR', p: 3, col: 0 }, b: { key: 'SKU-0182', title: 'Controlar cajas de aceite', tag: 'design', who: 'DP', p: 2, col: 1 }, c: { key: 'LOT-7721', title: 'Registrar lote y vencimiento', tag: 'back', who: 'LV', p: 2, col: 1 }, d: { key: 'SKU-0440', title: 'Asignar ubicación de guardado', tag: 'front', who: 'MR', p: 1, col: 2 }, e: { key: 'SKU-0315', title: 'Confirmar ingreso de unidades', tag: 'back', who: 'DP', p: 1, col: 3 }, f: { key: 'OC-2039', title: 'Revisar diferencia de cantidades', tag: 'infra', who: 'LV', p: 3, col: 0 } },
  },
  marquee: [['folder', 'Catálogo de productos'], ['layers', 'Inventario por ubicación'], ['git-branch', 'Movimientos trazables'], ['filter', 'Lotes y vencimientos'], ['home', 'Operación de depósito'], ['check-check', 'Conteos de inventario'], ['arrow-right', 'Recepción de mercadería'], ['users', 'Proveedores y clientes'], ['shield-check', 'Permisos por rol'], ['briefcase', 'Múltiples organizaciones'], ['tag', 'Identificación de productos'], ['chart-column', 'Información operativa']],
  showcase: {
    eyebrow: 'Una operación, distintas perspectivas', h2a: 'El dato no se pierde', h2b: 'entre depósito e inventario.', label: 'Depósito central · datos ilustrativos',
    steps: [
      { icon: 'folder', title: 'Catálogo', text: 'Consultá productos y sus datos de identificación desde un catálogo común para la operación.' },
      { icon: 'layers', title: 'Existencias', text: 'Organizá el stock por ubicación y distinguí disponible, comprometido y otros estados operativos.' },
      { icon: 'git-branch', title: 'Movimientos', text: 'Registrá ingresos, egresos, transferencias y ajustes con origen, destino y motivo.' },
      { icon: 'check-check', title: 'Conteos', text: 'Planificá verificaciones físicas y conciliá diferencias con un registro auditable.' },
    ],
    boardCols: [['Por recibir', '#6b6a7d', [['Orden OC-2048', 'plan'], ['Control de cantidades', 'design']]], ['En proceso', '#38bdf8', [['Registrar lote', 'back'], ['Definir ubicación', 'front']]], ['Registrado', '#34d399', [['Ingreso OC-2039', 'back'], ['Conteo zona A', 'front']]]],
    listHead: 'Existencias · Depósito central', listCount: '· vista ilustrativa',
    rows: [['Aceite de girasol 900 ml', 'back', 'SKU-0182', 'done', 'A-01-03', ''], ['Yerba mate 1 kg', 'front', 'SKU-0440', 'prog', 'B-03-02', ''], ['Arroz largo fino 1 kg', 'back', 'SKU-0315', 'todo', 'A-02-01', ''], ['Conserva de tomate 400 g', 'design', 'SKU-0273', 'rev', 'C-01-04', ''], ['Lentejas 500 g', 'front', 'SKU-0391', 'done', 'B-01-06', ''], ['Harina 000 1 kg', 'back', 'SKU-0138', 'prog', 'A-04-02', '']],
    weeks: ['Zona A', 'Zona B', 'Zona C', 'Zona D'], today: 'Ahora', bars: [['Recepción OC-2048', 0, 28, '#54d6b7'], ['Guardado zona A', 12, 28, '#fbbf24'], ['Conteo sector B', 20, 34, '#38bdf8'], ['Reposición interna', 30, 30, '#34d399'], ['Control de lote', 42, 26, '#fbbf24'], ['Despacho OC-2039', 60, 30, '#0f9f8e']],
    sprint: { name: 'Control de inventario', goal: 'Tareas de operación · Depósito central', badge: 'En curso', done: 'Tareas registradas', progress: 'Avance', days: 'Pendientes', real: 'Realizado', ideal: 'Planificado' }, status: { todo: 'Pendiente', prog: 'En curso', rev: 'A revisar', done: 'Registrado' },
  },
  bento: {
    eyebrow: 'Capacidades', h2: 'Información conectada con el trabajo diario.', lead: 'Una base común para identificar productos, registrar movimientos y coordinar tareas de depósito.',
    ai: { tag: 'Catálogo', h: 'Cada producto, con sus datos clave.', p: 'Identificá artículos con códigos, unidades y atributos consistentes para la operación.', prompt: 'Buscar por SKU, descripción o código', n: 4, tickets: [['SKU-0182', '#54d6b7', 'Aceite de girasol · unidad: botella'], ['SKU-0315', '#38bdf8', 'Arroz largo fino · unidad: paquete'], ['SKU-0440', '#34d399', 'Yerba mate · unidad: paquete'], ['SKU-0273', '#fbbf24', 'Conserva de tomate · unidad: lata']] },
    okr: { tag: 'Inventario', h: 'Existencias con contexto.', p: 'Consultá cantidades asociadas a productos, ubicaciones y estados del inventario.', krs: [['Disponible · Zona A', 72, '#54d6b7'], ['Comprometido · Zona B', 48, '#38bdf8'], ['En revisión · Zona C', 31, '#fbbf24']] },
    git: { tag: 'Trazabilidad', h: 'Un registro para cada movimiento.', p: 'Conservá el historial de cambios de stock con referencia, motivo y ubicación.', commit: 'Ingreso de mercadería · OC-2048', task: 'SKU-0182 · Depósito central' },
    time: { tag: 'Conteos', h: 'Compará el stock físico con el registrado.', p: 'Organizá recuentos por ubicación y revisá las diferencias antes de conciliarlas.', days: ['A1','A2','B1','B2','C1','D1','E1'], state: 'Conteo activo · Zona A' },
    pf: { tag: 'Ubicaciones', h: 'La operación organizada por depósito.', p: 'Modelá depósitos y ubicaciones para dar contexto al stock y a las tareas.', items: [['Depósito central · Zona A', 68, '#0f9f8e'], ['Depósito norte · Zona B', 46, '#38bdf8'], ['Depósito sur · Zona C', 82, '#fbbf24']] },
  },
  flow: { eyebrow: 'Del catálogo al movimiento', h2: 'Una secuencia clara para operar.', steps: [['folder', 'Identificá', 'Mantené un catálogo de productos y unidades para reconocer qué entra y qué sale.'], ['arrow-right', 'Recibí', 'Registrá la mercadería recibida y asociá documentos, lotes y cantidades.'], ['home', 'Ubicá', 'Asigná el stock a una ubicación de depósito y mantené el contexto físico.'], ['git-branch', 'Trazá', 'Consultá movimientos y conciliá diferencias con registros auditables.']] },
  details: { eyebrow: 'Diseño operativo', h2: 'Trazabilidad en cada capa.', lead: 'Una plataforma pensada para dar contexto al stock y a las decisiones de operación.', items: [['filter', 'Lotes y vencimientos', 'Asociá la mercadería con lotes y fechas relevantes para su seguimiento.'], ['flag', 'Ubicaciones', 'Organizá depósitos por zonas y posiciones de guardado.'], ['check-check', 'Conteos cíclicos', 'Registrá verificaciones físicas y sus diferencias.'], ['shield-check', 'Permisos por rol', 'Delimitá las acciones de acuerdo con el rol y el contexto de cada usuario.'], ['briefcase', 'Estructura multiempresa', 'El modelo contempla organizaciones, depósitos y sucursales con acceso aislado.'], ['link', 'Integraciones', 'La arquitectura está diseñada para conectarse con sistemas externos mediante interfaces controladas.']] },
  cta: { h2: 'Conocé Centro Distribución.', lead: 'Contanos cómo funciona tu operación y conversemos sobre lo que necesitás.', primary: 'Solicitar una demo', secondary: 'Ver capacidades' },
};

const en: HomeCopy = {
  hero: { badge: 'Connected operations', badgeText: 'Inventory, catalog and warehouse in one place', l1: 'More control for', l2: 'every movement', l3: 'in your operation.', lead: 'Centro Distribución connects products, stock and warehouse tasks so your team can work with traceable information and shared context.', cta1: 'Request a demo', cta2: 'Explore the platform', note: 'Designed for supply and distribution operations', aria: 'More control for every movement in your operation.' },
  board: {
    nav: ['Overview', 'Products', 'Inventory', 'Receiving', 'Suppliers', 'Locations'], ws: 'Organization · Central warehouse', project: 'Goods receiving', sprintSub: 'Inbound · PO-2048', tabs: ['Receiving', 'Products', 'Lots', 'Movements'], progress: 'Units received', url: 'Centro Distribución / Receiving', preview: 'Illustrative data · Operations view', cursor1: 'Mara', cursor2: 'Diego', cols: ['Pending', 'Receiving', 'To put away', 'Recorded'],
    tags: { plan: 'Receiving', design: 'Check', back: 'Inventory', front: 'Put away', infra: 'Exception' },
    cards: { a: { key: 'PO-2048', title: 'Verify purchase order', tag: 'plan', who: 'MR', p: 3, col: 0 }, b: { key: 'SKU-0182', title: 'Check oil cartons', tag: 'design', who: 'DP', p: 2, col: 1 }, c: { key: 'LOT-7721', title: 'Record lot and expiry date', tag: 'back', who: 'LV', p: 2, col: 1 }, d: { key: 'SKU-0440', title: 'Assign storage location', tag: 'front', who: 'MR', p: 1, col: 2 }, e: { key: 'SKU-0315', title: 'Confirm units received', tag: 'back', who: 'DP', p: 1, col: 3 }, f: { key: 'PO-2039', title: 'Review quantity discrepancy', tag: 'infra', who: 'LV', p: 3, col: 0 } },
  },
  marquee: [['folder', 'Product catalog'], ['layers', 'Inventory by location'], ['git-branch', 'Traceable movements'], ['filter', 'Lots and expiry dates'], ['home', 'Warehouse operations'], ['check-check', 'Inventory counts'], ['arrow-right', 'Goods receiving'], ['users', 'Suppliers and customers'], ['shield-check', 'Role-based permissions'], ['briefcase', 'Multiple organizations'], ['tag', 'Product identification'], ['chart-column', 'Operational information']],
  showcase: {
    eyebrow: 'One operation, different views', h2a: 'Data stays connected', h2b: 'across warehouse and inventory.', label: 'Central warehouse · illustrative data',
    steps: [
      { icon: 'folder', title: 'Catalog', text: 'Look up products and their identification details in a shared operational catalog.' },
      { icon: 'layers', title: 'Stock', text: 'Organize stock by location and distinguish available, committed and other operational states.' },
      { icon: 'git-branch', title: 'Movements', text: 'Record receipts, issues, transfers and adjustments with source, destination and reason.' },
      { icon: 'check-check', title: 'Counts', text: 'Plan physical checks and reconcile discrepancies with an auditable record.' },
    ],
    boardCols: [['To receive', '#6b6a7d', [['Purchase order PO-2048', 'plan'], ['Quantity check', 'design']]], ['In progress', '#38bdf8', [['Record lot', 'back'], ['Assign location', 'front']]], ['Recorded', '#34d399', [['Receipt PO-2039', 'back'], ['Count zone A', 'front']]]],
    listHead: 'Stock · Central warehouse', listCount: '· illustrative view',
    rows: [['Sunflower oil 900 ml', 'back', 'SKU-0182', 'done', 'A-01-03', ''], ['Yerba mate 1 kg', 'front', 'SKU-0440', 'prog', 'B-03-02', ''], ['Long-grain rice 1 kg', 'back', 'SKU-0315', 'todo', 'A-02-01', ''], ['Canned tomato 400 g', 'design', 'SKU-0273', 'rev', 'C-01-04', ''], ['Lentils 500 g', 'front', 'SKU-0391', 'done', 'B-01-06', ''], ['Flour 1 kg', 'back', 'SKU-0138', 'prog', 'A-04-02', '']],
    weeks: ['Zone A', 'Zone B', 'Zone C', 'Zone D'], today: 'Now', bars: [['Receipt PO-2048', 0, 28, '#54d6b7'], ['Put away zone A', 12, 28, '#fbbf24'], ['Count sector B', 20, 34, '#38bdf8'], ['Internal replenishment', 30, 30, '#34d399'], ['Lot check', 42, 26, '#fbbf24'], ['Issue PO-2039', 60, 30, '#0f9f8e']],
    sprint: { name: 'Inventory control', goal: 'Warehouse tasks · Central warehouse', badge: 'In progress', done: 'Tasks recorded', progress: 'Progress', days: 'Remaining', real: 'Recorded', ideal: 'Planned' }, status: { todo: 'Pending', prog: 'In progress', rev: 'Review', done: 'Recorded' },
  },
  bento: {
    eyebrow: 'Capabilities', h2: 'Information connected to daily work.', lead: 'A shared foundation to identify products, record movements and coordinate warehouse tasks.',
    ai: { tag: 'Catalog', h: 'Key information for every product.', p: 'Identify items with consistent codes, units and attributes for operations.', prompt: 'Search by SKU, description or barcode', n: 4, tickets: [['SKU-0182', '#54d6b7', 'Sunflower oil · unit: bottle'], ['SKU-0315', '#38bdf8', 'Long-grain rice · unit: pack'], ['SKU-0440', '#34d399', 'Yerba mate · unit: pack'], ['SKU-0273', '#fbbf24', 'Canned tomato · unit: can']] },
    okr: { tag: 'Inventory', h: 'Stock with context.', p: 'Review quantities associated with products, locations and inventory states.', krs: [['Available · Zone A', 72, '#54d6b7'], ['Committed · Zone B', 48, '#38bdf8'], ['Under review · Zone C', 31, '#fbbf24']] },
    git: { tag: 'Traceability', h: 'A record for every movement.', p: 'Keep stock changes with their reference, reason and location.', commit: 'Goods receipt · PO-2048', task: 'SKU-0182 · Central warehouse' },
    time: { tag: 'Counts', h: 'Compare physical and recorded stock.', p: 'Organize checks by location and review discrepancies before reconciling them.', days: ['A1','A2','B1','B2','C1','D1','E1'], state: 'Count in progress · Zone A' },
    pf: { tag: 'Locations', h: 'Operations organized by warehouse.', p: 'Model warehouses and locations to give stock and tasks their physical context.', items: [['Central warehouse · Zone A', 68, '#0f9f8e'], ['North warehouse · Zone B', 46, '#38bdf8'], ['South warehouse · Zone C', 82, '#fbbf24']] },
  },
  flow: { eyebrow: 'From catalog to movement', h2: 'A clear sequence for operations.', steps: [['folder', 'Identify', 'Maintain a product and unit catalog to recognize what comes in and goes out.'], ['arrow-right', 'Receive', 'Record incoming goods and link documents, lots and quantities.'], ['home', 'Locate', 'Assign stock to a warehouse location and keep its physical context.'], ['git-branch', 'Trace', 'Review movements and reconcile discrepancies with auditable records.']] },
  details: { eyebrow: 'Operational design', h2: 'Traceability at every layer.', lead: 'A platform designed to add context to stock and operational decisions.', items: [['filter', 'Lots and expiry dates', 'Associate goods with lots and relevant dates for tracking.'], ['flag', 'Locations', 'Organize warehouses by zones and storage positions.'], ['check-check', 'Cycle counts', 'Record physical checks and discrepancies.'], ['shield-check', 'Role permissions', 'Scope actions according to user roles and context.'], ['briefcase', 'Multi-company structure', 'The model accounts for organizations, warehouses and branches with isolated access.'], ['link', 'Integrations', 'The architecture is designed to connect to external systems through controlled interfaces.']] },
  cta: { h2: 'Discover Centro Distribución.', lead: 'Tell us how your operation works and let’s discuss what you need.', primary: 'Request a demo', secondary: 'Explore capabilities' },
};

export const home: Record<Lang, HomeCopy> = { es, en };
