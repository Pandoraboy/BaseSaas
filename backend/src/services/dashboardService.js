/**
 * Servicio de Dashboard
 * Lógica centralizada para obtener datos del dashboard
 *
 * FUTURO: Reemplazar MOCK_* con llamadas a Prisma
 * export async function getStatistics() {
 *   return await prisma.statistic.findMany()
 * }
 */

import { MOCK_STATISTICS, MOCK_SERVICES } from '../config/constants.js'

/**
 * Obtiene las estadísticas del dashboard
 * @returns {Promise<Array>} Array de estadísticas
 */
export async function getStatistics() {
  // SIMULACIÓN: En producción, esto vendrá de Prisma
  // await new Promise(resolve => setTimeout(resolve, 500)) // Simular delay
  return MOCK_STATISTICS
}

/**
 * Obtiene los servicios disponibles del dashboard
 * @returns {Promise<Array>} Array de servicios
 */
export async function getServices() {
  // SIMULACIÓN: En producción, esto vendrá de Prisma
  // await new Promise(resolve => setTimeout(resolve, 500)) // Simular delay
  return MOCK_SERVICES
}

/**
 * Obtiene una estadística por ID
 * @param {number} id - ID de la estadística
 * @returns {Promise<Object|null>} Estadística o null
 */
export async function getStatisticById(id) {
  return MOCK_STATISTICS.find((stat) => stat.id === id) || null
}

/**
 * Obtiene un servicio por ID
 * @param {number} id - ID del servicio
 * @returns {Promise<Object|null>} Servicio o null
 */
export async function getServiceById(id) {
  return MOCK_SERVICES.find((service) => service.id === id) || null
}
