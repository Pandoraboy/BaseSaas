/**
 * API Service - Don Pandora Frontend
 * Centraliza todas las llamadas fetch al backend
 *
 * USO:
 * import { api } from '@/services/api.js'
 *
 * const stats = await api.dashboard.getStats()
 * const services = await api.dashboard.getServices()
 */

// Configuración base
const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

/**
 * Validar respuesta de la API
 * @param {Response} response - Respuesta fetch
 * @returns {Promise<Object>} JSON o lanza error
 */
async function handleResponse(response) {
  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message || `Error ${response.status}`)
  }

  return data
}

/**
 * Objeto principal de la API
 */
export const api = {
  /**
   * Endpoints de Dashboard
   */
  dashboard: {
    /**
     * GET /api/dashboard/stats
     * Obtiene todas las estadísticas
     * @returns {Promise<Object>} { ok: boolean, data: Array }
     */
    async getStats() {
      const response = await fetch(`${BASE_URL}/api/dashboard/stats`)
      return handleResponse(response)
    },

    /**
     * GET /api/dashboard/stats/:id
     * Obtiene una estadística específica
     * @param {number} id - ID de la estadística
     * @returns {Promise<Object>} { ok: boolean, data: Object }
     */
    async getStat(id) {
      const response = await fetch(`${BASE_URL}/api/dashboard/stats/${id}`)
      return handleResponse(response)
    },

    /**
     * GET /api/dashboard/services
     * Obtiene todos los servicios
     * @returns {Promise<Object>} { ok: boolean, data: Array }
     */
    async getServices() {
      const response = await fetch(`${BASE_URL}/api/dashboard/services`)
      return handleResponse(response)
    },

    /**
     * GET /api/dashboard/services/:id
     * Obtiene un servicio específico
     * @param {number} id - ID del servicio
     * @returns {Promise<Object>} { ok: boolean, data: Object }
     */
    async getService(id) {
      const response = await fetch(`${BASE_URL}/api/dashboard/services/${id}`)
      return handleResponse(response)
    },
  },

  /**
   * PRÓXIMOS MÓDULOS
   * auth: { login, logout, register, ... },
   * users: { getProfile, updateProfile, ... },
   * modules: { getActive, getAll, ... },
   * ... más según crecimiento del proyecto
   */
}

/**
 * Exportar para uso individual si es necesario
 */
export const dashboardApi = api.dashboard

/**
 * Health check (útil para debugging)
 */
export async function checkHealth() {
  try {
    const response = await fetch(`${BASE_URL}/api/health`)
    const data = await response.json()
    return data.ok
  } catch (error) {
    console.error('Health check failed:', error)
    return false
  }
}

export default api
