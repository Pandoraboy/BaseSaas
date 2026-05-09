/**
 * Rutas del Dashboard
 * Endpoints para obtener estadísticas y servicios
 */

import express from 'express'
import * as dashboardController from '../controllers/dashboardController.js'

const router = express.Router()

/**
 * GET /api/dashboard/stats
 * Obtiene todas las estadísticas
 */
router.get('/stats', dashboardController.getStats)

/**
 * GET /api/dashboard/stats/:id
 * Obtiene una estadística específica
 */
router.get('/stats/:id', dashboardController.getStatById)

/**
 * GET /api/dashboard/services
 * Obtiene todos los servicios
 */
router.get('/services', dashboardController.getServices)

/**
 * GET /api/dashboard/services/:id
 * Obtiene un servicio específico
 */
router.get('/services/:id', dashboardController.getServiceById)

export default router
