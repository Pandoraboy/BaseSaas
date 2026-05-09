/**
 * Controlador de Dashboard
 * Maneja las peticiones HTTP y respuestas
 */

import * as dashboardService from '../services/dashboardService.js'

/**
 * GET /api/dashboard/stats
 * Obtiene las estadísticas del dashboard
 */
export async function getStats(req, res) {
  try {
    const statistics = await dashboardService.getStatistics()

    res.json({
      ok: true,
      message: 'Estadísticas obtenidas correctamente',
      data: statistics,
    })
  } catch (error) {
    console.error('Error en getStats:', error)
    res.status(500).json({
      ok: false,
      message: 'Error al obtener estadísticas',
      error: error.message,
    })
  }
}

/**
 * GET /api/dashboard/services
 * Obtiene los servicios disponibles
 */
export async function getServices(req, res) {
  try {
    const services = await dashboardService.getServices()

    res.json({
      ok: true,
      message: 'Servicios obtenidos correctamente',
      data: services,
    })
  } catch (error) {
    console.error('Error en getServices:', error)
    res.status(500).json({
      ok: false,
      message: 'Error al obtener servicios',
      error: error.message,
    })
  }
}

/**
 * GET /api/dashboard/stats/:id
 * Obtiene una estadística específica
 */
export async function getStatById(req, res) {
  try {
    const { id } = req.params
    const statistic = await dashboardService.getStatisticById(parseInt(id))

    if (!statistic) {
      return res.status(404).json({
        ok: false,
        message: 'Estadística no encontrada',
      })
    }

    res.json({
      ok: true,
      data: statistic,
    })
  } catch (error) {
    console.error('Error en getStatById:', error)
    res.status(500).json({
      ok: false,
      message: 'Error al obtener estadística',
      error: error.message,
    })
  }
}

/**
 * GET /api/dashboard/services/:id
 * Obtiene un servicio específico
 */
export async function getServiceById(req, res) {
  try {
    const { id } = req.params
    const service = await dashboardService.getServiceById(parseInt(id))

    if (!service) {
      return res.status(404).json({
        ok: false,
        message: 'Servicio no encontrado',
      })
    }

    res.json({
      ok: true,
      data: service,
    })
  } catch (error) {
    console.error('Error en getServiceById:', error)
    res.status(500).json({
      ok: false,
      message: 'Error al obtener servicio',
      error: error.message,
    })
  }
}
