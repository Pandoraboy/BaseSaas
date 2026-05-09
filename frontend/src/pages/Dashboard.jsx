import { useState, useEffect } from 'react'
import StatisticsCard from '../components/dashboard/StatisticsCard'
import ServicesSection from '../components/dashboard/ServicesSection'
import { api } from '../services/api'

export default function Dashboard() {
  const [statistics, setStatistics] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Obtener estadísticas al montar el componente
  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        setLoading(true)
        setError(null)
        const response = await api.dashboard.getStats()
        
        if (response.ok && response.data) {
          setStatistics(response.data)
        } else {
          setError('No se pudieron cargar las estadísticas')
        }
      } catch (err) {
        console.error('Error fetching statistics:', err)
        setError('Error al conectar con el servidor')
      } finally {
        setLoading(false)
      }
    }

    fetchStatistics()
  }, [])

  // Render con estados de carga y error
  if (error) {
    return (
      <div className="dashboard">
        <div className="dashboard-header">
          <h1 className="dashboard-title">Bienvenido a Don Pandora</h1>
          <p className="dashboard-subtitle">Automatiza tu negocio y optimiza tus procesos</p>
        </div>
        <div style={{ 
          padding: '2rem', 
          backgroundColor: '#fee2e2', 
          borderRadius: '0.75rem',
          color: '#991b1b',
          marginTop: '2rem'
        }}>
          ⚠️ {error}
        </div>
      </div>
    )
  }

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Bienvenido a Don Pandora</h1>
        <p className="dashboard-subtitle">Automatiza tu negocio y optimiza tus procesos</p>
      </div>

      <section className="statistics-section">
        <div className="statistics-grid">
          {loading ? (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '3rem' }}>
              <p style={{ color: 'var(--dp-text-light)', fontSize: '1rem' }}>
                <i className="bi bi-hourglass-split" style={{ marginRight: '0.5rem' }}></i>
                Cargando estadísticas...
              </p>
            </div>
          ) : statistics.length > 0 ? (
            statistics.map((stat) => (
              <StatisticsCard
                key={stat.id}
                title={stat.title}
                value={stat.value}
                icon={stat.icon}
                change={stat.change}
                trend={stat.trend}
              />
            ))
          ) : (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '3rem' }}>
              <p style={{ color: 'var(--dp-text-light)', fontSize: '1rem' }}>
                No hay datos disponibles
              </p>
            </div>
          )}
        </div>
      </section>

      <ServicesSection />
    </div>
  )
}
