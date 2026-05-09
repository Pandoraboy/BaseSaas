import { useState, useEffect } from 'react'
import ServiceCard from './ServiceCard'
import { api } from '../../services/api'

export default function ServicesSection() {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Obtener servicios al montar el componente
  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true)
        setError(null)
        const response = await api.dashboard.getServices()
        
        if (response.ok && response.data) {
          setServices(response.data)
        } else {
          setError('No se pudieron cargar los servicios')
        }
      } catch (err) {
        console.error('Error fetching services:', err)
        setError('Error al conectar con el servidor')
      } finally {
        setLoading(false)
      }
    }

    fetchServices()
  }, [])

  return (
    <section className="services-section">
      <h2 className="section-title">
        <i className="bi bi-lightning"></i>
        Servicios Disponibles
      </h2>

      <div className="services-grid">
        {loading ? (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '3rem' }}>
            <p style={{ color: 'var(--dp-text-light)', fontSize: '1rem' }}>
              <i className="bi bi-hourglass-split" style={{ marginRight: '0.5rem' }}></i>
              Cargando servicios...
            </p>
          </div>
        ) : error ? (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '3rem' }}>
            <p style={{ color: 'var(--dp-text-light)', fontSize: '1rem' }}>
              ⚠️ {error}
            </p>
          </div>
        ) : services.length > 0 ? (
          services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              subtitle={service.subtitle}
              description={service.description}
              status={service.status}
            />
          ))
        ) : (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '3rem' }}>
            <p style={{ color: 'var(--dp-text-light)', fontSize: '1rem' }}>
              No hay servicios disponibles
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
