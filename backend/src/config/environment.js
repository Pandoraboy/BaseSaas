/**
 * Configuración de entorno
 * Preparado para variables de entorno con dotenv
 */

import dotenv from 'dotenv'

dotenv.config()

export const config = {
  // Servidor
  PORT: process.env.PORT || 3000,
  NODE_ENV: process.env.NODE_ENV || 'development',

  // CORS - Permitir frontend
  CORS_ORIGIN: process.env.CORS_ORIGIN || 'http://localhost:5173',

  // Base de datos (Supabase)
  DATABASE_URL: process.env.DATABASE_URL || '',

  // Autenticación (Supabase)
  SUPABASE_URL: process.env.SUPABASE_URL || '',
  SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY || '',

  // Mensajes
  API_NAME: 'Don Pandora API',
  API_VERSION: '1.0.0',
}

export default config
