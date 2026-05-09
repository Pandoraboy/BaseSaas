/**
 * Constantes y datos mockeados para el dashboard
 * Preparado para reemplazar con Prisma + Supabase en el futuro
 */

export const MOCK_STATISTICS = [
  {
    id: 1,
    title: 'Ingresos',
    value: '$24,580',
    icon: 'bi-cash-coin',
    change: '+12.5%',
    trend: 'up',
  },
  {
    id: 2,
    title: 'Clientes',
    value: '1,248',
    icon: 'bi-people',
    change: '+8.2%',
    trend: 'up',
  },
  {
    id: 3,
    title: 'Órdenes',
    value: '382',
    icon: 'bi-bag-check',
    change: '-3.1%',
    trend: 'down',
  },
  {
    id: 4,
    title: 'Proyectos',
    value: '45',
    icon: 'bi-briefcase',
    change: '+5.4%',
    trend: 'up',
  },
]

export const MOCK_SERVICES = [
  {
    id: 1,
    icon: 'bi-envelope',
    title: 'Gestión de Email',
    subtitle: 'CRM integrado',
    description: 'Automatiza campañas de email, gestiona contactos y mejora tu comunicación con clientes.',
    status: 'active',
  },
  {
    id: 2,
    icon: 'bi-calendar-check',
    title: 'Agendar Citas',
    subtitle: 'Calendario inteligente',
    description: 'Sistema de reservas automático que sincroniza tu disponibilidad y evita conflictos.',
    status: 'active',
  },
  {
    id: 3,
    icon: 'bi-file-earmark-pdf',
    title: 'Facturación Digital',
    subtitle: 'Documentos legales',
    description: 'Genera facturas, cotizaciones y recibos con un clic. Cumple normas tributarias.',
    status: 'active',
  },
  {
    id: 4,
    icon: 'bi-graph-up-arrow',
    title: 'Análisis de Ventas',
    subtitle: 'Reportes en tiempo real',
    description: 'Visualiza tus métricas clave, seguimiento de metas y análisis de desempeño.',
    status: 'active',
  },
  {
    id: 5,
    icon: 'bi-people-fill',
    title: 'Gestión de Equipo',
    subtitle: 'Productividad del equipo',
    description: 'Asigna tareas, monitorea proyectos y colabora en tiempo real con tu equipo.',
    status: 'inactive',
  },
  {
    id: 6,
    icon: 'bi-credit-card',
    title: 'Pagos Online',
    subtitle: 'Integración de pasarelas',
    description: 'Recibe pagos directamente. Soporta todas las tarjetas y billeteras digitales.',
    status: 'inactive',
  },
]

/**
 * PRÓXIMAS INTEGRACIONES
 * Cuando se configure Prisma + Supabase, estos datos vendrán de la BD:
 *
 * import { prisma } from './prisma.js'
 *
 * export async function getStatistics() {
 *   return await prisma.statistic.findMany()
 * }
 */
