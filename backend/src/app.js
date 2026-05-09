import express from 'express'
import cors from 'cors'
import dashboardRoutes from './routes/dashboard.js'

const app = express()

app.use(cors())
app.use(express.json())

/**
 * Rutas públicas
 */
app.get('/api/health', (req, res) => {
  res.json({
    ok: true,
    message: 'API Don Pandora funcionando'
  })
})

/**
 * Rutas de Dashboard
 */
app.use('/api/dashboard', dashboardRoutes)

/**
 * Ruta raíz (legacy)
 */
app.get('/', (req, res) => {
  res.json({
    ok: true,
    message: 'API Don Pandora funcionando',
    version: '1.0.0',
    endpoints: [
      'GET /api/health',
      'GET /api/dashboard/stats',
      'GET /api/dashboard/services',
      'GET /api/dashboard/stats/:id',
      'GET /api/dashboard/services/:id'
    ]
  })
})

export default app