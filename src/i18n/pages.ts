import type { CompareKey, Lang } from './routes';

/* ---------------- Planes ---------------- */
export const pricing = {
  es: {
    metaTitle: 'Planes y evaluación', metaDesc: 'Conocé Centro Distribución y conversemos sobre el alcance adecuado para tu operación.',
    eyebrow: 'Planes', h1: 'Una solución para la complejidad de tu operación.',
    lead: 'El alcance, la implementación y las integraciones dependen de cada red de distribución. Hablemos de tu contexto antes de definir un plan.',
    free: { name: 'Evaluación inicial', price: 'A medida', period: 'Conversación con el equipo', desc: 'Revisemos juntos los procesos, depósitos y sistemas que forman parte de tu operación.', cta: 'Solicitar una conversación', items: ['Contexto de la operación', 'Procesos y ubicaciones involucradas', 'Necesidades de catálogo e inventario', 'Sistemas e integraciones a considerar'] },
    teams: { name: 'Implementación empresarial', price: 'A definir', period: '', desc: 'Alcance y acompañamiento por definir de acuerdo con la organización y sus requisitos.', cta: 'Consultar por una implementación', items: ['Estructura de organizaciones y depósitos', 'Módulos requeridos', 'Migración e integraciones', 'Roles, permisos y acompañamiento'] },
    faqTitle: 'Preguntas sobre el producto',
    faq: [
      ['¿Cuánto cuesta la plataforma?', 'Los planes y precios todavía no están publicados. El alcance se debe conversar con el equipo.'],
      ['¿Puedo contratar una implementación?', 'La modalidad de contratación y el proceso de implementación están pendientes de definición. Contactanos para conversar sobre tu caso.'],
      ['¿Qué incluye el producto hoy?', 'El desarrollo avanza por módulos. Podemos confirmar alcance y disponibilidad durante una conversación con el equipo.'],
      ['¿Cómo se gestionan los datos?', 'Consultá la política de privacidad y solicitá información sobre el entorno de implementación antes de compartir datos operativos.'],
    ],
  },
  en: {
    metaTitle: 'Plans and evaluation', metaDesc: 'Explore Centro Distribución and discuss the right scope for your operation.',
    eyebrow: 'Plans', h1: 'A solution for the complexity of your operation.',
    lead: 'Scope, implementation and integrations depend on each distribution network. Let’s discuss your context before defining a plan.',
    free: { name: 'Initial evaluation', price: 'By scope', period: 'Conversation with our team', desc: 'Let’s review the processes, warehouses and systems involved in your operation.', cta: 'Request a conversation', items: ['Operational context', 'Processes and locations involved', 'Catalog and inventory needs', 'Systems and integrations to consider'] },
    teams: { name: 'Enterprise implementation', price: 'To be defined', period: '', desc: 'Scope and support to be defined around your organization and requirements.', cta: 'Ask about implementation', items: ['Organization and warehouse structure', 'Required modules', 'Migration and integrations', 'Roles, permissions and support'] },
    faqTitle: 'Product questions',
    faq: [
      ['How much does the platform cost?', 'Plans and pricing have not been published yet. Scope should be discussed with the team.'],
      ['Can I purchase an implementation?', 'Commercial terms and implementation process are still to be defined. Contact us to discuss your case.'],
      ['What is available today?', 'Development is progressing by module. The team can confirm scope and availability in a conversation.'],
      ['How is data handled?', 'Review the privacy policy and request information about the implementation environment before sharing operational data.'],
    ],
  },
} as const;

/* ---------------- Soluciones por operación ---------------- */
interface SolutionCopy {
  metaTitle: string; metaDesc: string; h1: string; lead: string;
  quick: { fb: string; other: string };
  chooseFb: string[]; chooseOther: string[]; faq: [string, string][];
}
const names = {
  'cmp-jira': 'Distribución mayorista', 'cmp-clickup': 'Retail multisucursal',
  'cmp-linear': 'Operadores logísticos', 'cmp-trello': 'Fulfillment ecommerce',
} as const;

const es: Record<CompareKey, SolutionCopy> = {
  'cmp-jira': {
    metaTitle: 'Centro Distribución para mayoristas', metaDesc: 'Una base para conectar catálogo, inventario y tareas de depósito en operaciones mayoristas.',
    h1: 'Visibilidad para distribuir con más control.', lead: 'Conectá productos, existencias y depósitos para dar contexto a la recepción, el almacenamiento y los movimientos de mercadería.',
    quick: { fb: 'Centro Distribución está diseñado alrededor de inventario trazable, ubicaciones y tareas operativas relacionadas.', other: 'En operaciones mayoristas, los datos suelen repartirse entre sistemas, planillas y procesos de cada depósito.' },
    chooseFb: ['Necesitás conocer el stock por producto y ubicación.', 'Querés conservar el historial de movimientos y ajustes.', 'Tu operación incluye recepción, guardado y conteos físicos.', 'Trabajás con más de un depósito o entidad.'],
    chooseOther: ['Acordar qué sistemas serán la fuente oficial de catálogo y compras.', 'Validar qué procesos están disponibles en la etapa actual del producto.', 'Definir integraciones y el alcance de implementación.'],
    faq: [['¿Está pensado para distribuidores mayoristas?', 'La plataforma se orienta a operaciones de abastecimiento y distribución. El encaje depende de los procesos y la etapa del producto.'], ['¿Soporta múltiples depósitos?', 'La arquitectura contempla múltiples depósitos, zonas y ubicaciones por organización.'], ['¿Reemplaza mi sistema de compras?', 'La interoperabilidad debe evaluarse según los sistemas existentes y las integraciones disponibles.']],
  },
  'cmp-clickup': {
    metaTitle: 'Centro Distribución para retail multisucursal', metaDesc: 'Organizá catálogo e inventario con contexto de depósitos y sucursales en una red de retail.',
    h1: 'Una vista compartida para depósitos y sucursales.', lead: 'Representá productos, ubicaciones y organizaciones para coordinar la información de inventario en redes con múltiples puntos de operación.',
    quick: { fb: 'El modelo contempla organizaciones, depósitos, sucursales, ubicaciones y registros de inventario con alcance por tenant.', other: 'Las redes de retail necesitan acordar cómo se comparte el catálogo y quién puede consultar o modificar el stock de cada sede.' },
    chooseFb: ['Administrás varias sucursales o depósitos.', 'Necesitás definir permisos según la ubicación y el rol.', 'Querés relacionar existencias con ubicaciones específicas.', 'Buscás una base común para información de productos.'],
    chooseOther: ['Definir políticas de reposición entre sedes.', 'Confirmar flujos de POS y ecommerce requeridos.', 'Acordar disponibilidad de tableros consolidados y analítica.'],
    faq: [['¿El producto incluye POS?', 'El documento maestro contempla operaciones de tiendas y POS dentro de la visión del ecosistema; la disponibilidad debe confirmarse.'], ['¿Se puede administrar stock por sucursal?', 'El modelo organizacional contempla sucursales y nodos logísticos. Los flujos disponibles dependen del estado de implementación.'], ['¿Hay reposición automática?', 'La reposición automatizada está en la visión del producto y no se presenta aquí como capacidad confirmada.']],
  },
  'cmp-linear': {
    metaTitle: 'Centro Distribución para operadores logísticos', metaDesc: 'Conocé cómo una plataforma de inventario y depósito puede dar trazabilidad a operaciones logísticas.',
    h1: 'Trazabilidad operativa para cada cliente.', lead: 'Representá clientes, depósitos y tareas con límites de acceso acordes a una operación que presta servicios logísticos a terceros.',
    quick: { fb: 'La arquitectura considera operaciones multiempresa, depósitos tercerizados, clientes y permisos controlados por tenant.', other: 'Cada operación 3PL requiere acordar propiedad del inventario, visibilidad del cliente, evidencias y responsabilidades de servicio.' },
    chooseFb: ['Operás inventario para más de una organización.', 'Necesitás relacionar mercadería con ubicaciones y movimientos.', 'Querés delimitar el acceso de cada usuario y cliente.', 'Buscás evaluar una base común para recepción y depósito.'],
    chooseOther: ['Definir SLA, mediciones y reportes contractuales.', 'Confirmar portales externos y flujos de colaboración.', 'Validar integraciones con clientes y transportistas.'],
    faq: [['¿Admite depósitos de terceros?', 'El modelo de producto contempla instalaciones de operadores logísticos externos. El alcance operativo debe validarse.'], ['¿Cada cliente tiene datos aislados?', 'El diseño es multi-tenant y requiere validar aislamiento y permisos en cada implementación.'], ['¿Incluye gestión de flota y rutas?', 'El TMS forma parte de la visión integral. No lo presentamos como una capacidad disponible confirmada.']],
  },
  'cmp-trello': {
    metaTitle: 'Centro Distribución para fulfillment ecommerce', metaDesc: 'Conectá catálogo, existencias y tareas de depósito para operaciones de preparación y despacho de pedidos.',
    h1: 'Más contexto entre el inventario y el despacho.', lead: 'Prepará una operación en la que los productos y ubicaciones tengan un historial que ayude a coordinar recepción, almacenamiento y salida de mercadería.',
    quick: { fb: 'El núcleo de inventario registra movimientos trazables y relaciona cantidades con productos, ubicaciones y estados.', other: 'El fulfillment exige sincronizar pedidos, reservas, picking, packing, transportistas y confirmaciones de entrega.' },
    chooseFb: ['Querés organizar catálogo y existencias por ubicación.', 'Necesitás identificar lotes o números de serie.', 'Buscás registrar movimientos con origen, destino y motivo.', 'Querés evaluar procesos de depósito en una plataforma modular.'],
    chooseOther: ['Acordar integración con la plataforma de ecommerce.', 'Confirmar el alcance de órdenes, picking, packing y despacho.', 'Definir sincronización de stock y estados de entrega.'],
    faq: [['¿Se integra con plataformas de ecommerce?', 'La arquitectura contempla integraciones con ecommerce y marketplaces; las conexiones disponibles deben confirmarse.'], ['¿Incluye picking y packing?', 'Son parte del alcance de WMS documentado. La disponibilidad debe validarse según la etapa de implementación.'], ['¿Puedo consultar los movimientos de stock?', 'El ledger de inventario se diseña para conservar registros trazables de los movimientos.']],
  },
};

const en: Record<CompareKey, SolutionCopy> = {
  'cmp-jira': {
    metaTitle: 'Centro Distribución for wholesale', metaDesc: 'Connect catalog, inventory and warehouse tasks for wholesale distribution operations.',
    h1: 'More visibility for controlled distribution.', lead: 'Connect products, stock and warehouses to add context to receiving, storage and goods movements.',
    quick: { fb: 'Centro Distribución is designed around traceable inventory, locations and related operational tasks.', other: 'In wholesale operations, data is often split across systems, spreadsheets and processes in each warehouse.' },
    chooseFb: ['You need to know stock by product and location.', 'You want to retain movement and adjustment history.', 'Your operation includes receiving, putaway and physical counts.', 'You work across multiple warehouses or entities.'],
    chooseOther: ['Agree on the source of truth for catalog and purchasing.', 'Validate which processes are available at the current product stage.', 'Define integrations and implementation scope.'],
    faq: [['Is it designed for wholesale distributors?', 'The platform targets supply and distribution operations. Fit depends on your processes and the product stage.'], ['Does it support multiple warehouses?', 'The architecture accounts for multiple warehouses, zones and locations per organization.'], ['Does it replace my purchasing system?', 'Interoperability should be evaluated against existing systems and available integrations.']],
  },
  'cmp-clickup': {
    metaTitle: 'Centro Distribución for multi-location retail', metaDesc: 'Organize catalog and inventory with warehouse and branch context across a retail network.',
    h1: 'A shared view across warehouses and stores.', lead: 'Represent products, locations and organizations to coordinate inventory information across multiple operating sites.',
    quick: { fb: 'The model accounts for organizations, warehouses, branches, locations and tenant-scoped inventory records.', other: 'Retail networks need clear rules for sharing catalogs and deciding who can view or change stock at each site.' },
    chooseFb: ['You manage multiple stores or warehouses.', 'You need permissions based on location and role.', 'You want to relate stock to specific locations.', 'You need a shared foundation for product information.'],
    chooseOther: ['Define replenishment policies between locations.', 'Confirm required POS and ecommerce flows.', 'Agree on availability of consolidated dashboards and analytics.'],
    faq: [['Does the product include POS?', 'The master plan includes store operations and POS in the ecosystem vision; availability should be confirmed.'], ['Can stock be managed by store?', 'The organizational model accounts for branches and logistics nodes. Available workflows depend on implementation status.'], ['Is replenishment automated?', 'Automated replenishment is part of the product vision and is not presented as a confirmed capability.']],
  },
  'cmp-linear': {
    metaTitle: 'Centro Distribución for logistics operators', metaDesc: 'Explore how an inventory and warehouse platform can add traceability to logistics operations.',
    h1: 'Operational traceability for every client.', lead: 'Represent customers, warehouses and tasks with access boundaries that fit a logistics operation serving third parties.',
    quick: { fb: 'The architecture accounts for multi-company operations, third-party warehouses, customers and tenant-controlled permissions.', other: 'Each 3PL operation needs clear ownership of inventory, customer visibility, evidence and service responsibilities.' },
    chooseFb: ['You handle inventory for more than one organization.', 'You need to link goods to locations and movements.', 'You want to scope access for each user and customer.', 'You want to evaluate a shared foundation for receiving and warehousing.'],
    chooseOther: ['Define SLAs, measurement and contractual reporting.', 'Confirm external portals and collaboration flows.', 'Validate integrations with customers and carriers.'],
    faq: [['Does it support third-party warehouses?', 'The product model accounts for external logistics facilities. Operational scope should be validated.'], ['Is each customer’s data isolated?', 'The design is multi-tenant; isolation and permissions need to be validated for each implementation.'], ['Does it include fleet and route management?', 'TMS is part of the broader product vision. We do not present it as a confirmed available capability.']],
  },
  'cmp-trello': {
    metaTitle: 'Centro Distribución for ecommerce fulfillment', metaDesc: 'Connect catalog, stock and warehouse tasks for order preparation and goods dispatch operations.',
    h1: 'More context between inventory and dispatch.', lead: 'Build an operation where products and locations have a history that helps coordinate receiving, storage and goods issue.',
    quick: { fb: 'The inventory core records traceable movements and relates quantities to products, locations and states.', other: 'Fulfillment requires coordination across orders, reservations, picking, packing, carriers and delivery confirmation.' },
    chooseFb: ['You want to organize catalog and stock by location.', 'You need to identify lots or serial numbers.', 'You want to record movements with source, destination and reason.', 'You want to evaluate a modular warehouse platform.'],
    chooseOther: ['Agree on integration with your ecommerce platform.', 'Confirm the scope of orders, picking, packing and dispatch.', 'Define stock and delivery status synchronization.'],
    faq: [['Does it integrate with ecommerce platforms?', 'The architecture accounts for ecommerce and marketplace integrations; available connections should be confirmed.'], ['Does it include picking and packing?', 'They are part of the documented WMS scope. Availability should be confirmed for the current implementation stage.'], ['Can I review stock movements?', 'The inventory ledger is designed to retain traceable movement records.']],
  },
};

export const compare = {
  es: { data: es, names, h: { quick: 'En contexto', fb: 'Cómo puede ayudar la plataforma', other: (n: string) => `Qué conviene definir en ${n}`, includes: 'Capacidades relacionadas', disclaimer: 'El alcance y la disponibilidad de cada módulo dependen de la etapa de implementación. Las capacidades futuras se identifican como visión o trabajo pendiente.', ctaH: 'Conversemos sobre tu operación', ctaP: 'Contanos cómo se mueve la mercadería en tu red.', includesList: ['Catálogo de productos', 'Inventario y movimientos trazables', 'Depósitos y ubicaciones', 'Recepción y guardado', 'Lotes y números de serie', 'Proveedores y clientes'] } },
  en: { data: en, names, h: { quick: 'In context', fb: 'How the platform may help', other: (n: string) => `What to define for ${n}`, includes: 'Related capabilities', disclaimer: 'Scope and availability depend on implementation stage. Future capabilities are identified as vision or planned work.', ctaH: 'Let’s discuss your operation', ctaP: 'Tell us how goods move across your network.', includesList: ['Product catalog', 'Inventory and traceable movements', 'Warehouses and locations', 'Receiving and putaway', 'Lots and serial numbers', 'Suppliers and customers'] } },
} as const;

/* ---------------- Contacto ---------------- */
export const contact = {
  es: { metaTitle: 'Contacto', metaDesc: 'Conversemos sobre la operación, los depósitos y los procesos de inventario de tu empresa.', h1: 'Hablemos de tu operación.', lead: 'Contanos cómo recibís, almacenás y distribuís mercadería.',
    topics: [['layers', 'Inventario', 'Productos, existencias, movimientos y trazabilidad.'], ['home', 'Depósitos', 'Recepción, ubicaciones y tareas de operación.'], ['briefcase', 'Implementación', 'Estructura de organizaciones, sistemas e integraciones.']], email: 'Canal de contacto', hint: 'El equipo te responderá cuando el canal comercial esté habilitado.' },
  en: { metaTitle: 'Contact', metaDesc: 'Let’s discuss your company’s operations, warehouses and inventory processes.', h1: 'Let’s talk about your operation.', lead: 'Tell us how you receive, store and distribute goods.',
    topics: [['layers', 'Inventory', 'Products, stock, movements and traceability.'], ['home', 'Warehouses', 'Receiving, locations and operational tasks.'], ['briefcase', 'Implementation', 'Organization structure, systems and integrations.']], email: 'Contact channel', hint: 'Our team will reply when the commercial channel is enabled.' },
} as const;

/* ---------------- Legales ---------------- */
type Section = [string, string[]];
export interface LegalDoc { metaTitle: string; metaDesc: string; h1: string; updated: string; sections: Section[] }
const legalNoticeEs: Section[] = [
  ['Información del titular', ['Los datos de la persona o entidad responsable, domicilio legal y canal oficial de contacto deben completarse antes de habilitar el servicio.']],
  ['Alcance de estos términos', ['El texto legal definitivo está en preparación. No uses esta página como base para contratar ni cargues información operativa o personal hasta que se publiquen las condiciones aplicables.']],
  ['Consultas', ['Usá el canal comercial cuando se encuentre habilitado para solicitar la versión vigente de los términos.']],
];
const privacyNoticeEs: Section[] = [
  ['Responsable del tratamiento', ['La identidad y los datos de contacto del responsable deben completarse antes de habilitar el servicio.']],
  ['Datos y finalidades', ['La plataforma puede procesar datos de cuenta, organización, catálogo, inventario y actividad operativa para prestar sus funciones. Los datos, finalidades, bases legales, plazos y destinatarios definitivos deben documentarse antes de la puesta en producción.']],
  ['Proveedores y transferencias', ['La infraestructura y los proveedores que podrían procesar datos deben identificarse en la política definitiva.']],
  ['Derechos y consultas', ['El canal para ejercer derechos sobre datos personales debe completarse antes de publicar el servicio.']],
  ['Estado de esta página', ['Esta información es preliminar y no reemplaza una política de privacidad revisada para la jurisdicción y el modelo de operación aplicables.']],
];
const legalNoticeEn: Section[] = [
  ['Service owner', ['The responsible person or entity, legal address and official contact channel must be completed before the service is enabled.']],
  ['Scope of these terms', ['Final legal terms are being prepared. Do not rely on this page to contract or upload operational or personal information until applicable terms are published.']],
  ['Questions', ['Use the commercial channel once available to request the current terms.']],
];
const privacyNoticeEn: Section[] = [
  ['Data controller', ['The identity and contact details of the controller must be completed before the service is enabled.']],
  ['Data and purposes', ['The platform may process account, organization, catalog, inventory and operational activity data to provide its functions. Definitive data categories, purposes, legal bases, retention periods and recipients must be documented before production.']],
  ['Processors and transfers', ['Infrastructure and providers that may process data must be identified in the final policy.']],
  ['Rights and questions', ['The channel to exercise data protection rights must be completed before the service is published.']],
  ['Status of this page', ['This information is preliminary and does not replace a privacy policy reviewed for the applicable jurisdiction and operating model.']],
];
export const legal: Record<'terms' | 'privacy', Record<Lang, LegalDoc>> = {
  terms: {
    es: { metaTitle: 'Términos y condiciones', metaDesc: 'Información preliminar sobre los términos de uso de Centro Distribución.', h1: 'Términos y condiciones', updated: 'En preparación', sections: legalNoticeEs },
    en: { metaTitle: 'Terms and conditions', metaDesc: 'Preliminary information about Centro Distribución terms of use.', h1: 'Terms and conditions', updated: 'In preparation', sections: legalNoticeEn },
  },
  privacy: {
    es: { metaTitle: 'Política de privacidad', metaDesc: 'Información preliminar sobre el tratamiento de datos en Centro Distribución.', h1: 'Política de privacidad', updated: 'En preparación', sections: privacyNoticeEs },
    en: { metaTitle: 'Privacy policy', metaDesc: 'Preliminary information about data processing by Centro Distribución.', h1: 'Privacy policy', updated: 'In preparation', sections: privacyNoticeEn },
  },
};

/* ---------------- Evolución ---------------- */
export const changelog = {
  es: { metaTitle: 'Evolución del producto', metaDesc: 'Conocé el enfoque modular y la evolución de Centro Distribución.', h1: 'Evolución del producto', lead: 'El producto se desarrolla por módulos. Consultanos para conocer el alcance actual.', entries: [] },
  en: { metaTitle: 'Product updates', metaDesc: 'Explore the modular approach and ongoing development of Centro Distribución.', h1: 'Product updates', lead: 'The product is being developed module by module. Contact us to discuss current scope.', entries: [] },
} as const;

