export default function Sidebar({ isOpen, onClose }) {
  const menuItems = [
    { id: 1, icon: 'bi-house-door', label: 'Dashboard', active: true },
    { id: 2, icon: 'bi-graph-up', label: 'Estadísticas', active: false },
    { id: 3, icon: 'bi-people', label: 'Clientes', active: false },
    { id: 4, icon: 'bi-bag-check', label: 'Servicios', active: false },
    { id: 5, icon: 'bi-receipt', label: 'Facturación', active: false },
    { id: 6, icon: 'bi-calendar-event', label: 'Calendario', active: false },
    { id: 7, icon: 'bi-file-text', label: 'Reportes', active: false },
  ];

  return (
    <aside className={`sidebar ${isOpen ? '' : 'closed'}`}>
      <div className="sidebar-brand">
        <i className="bi bi-panda"></i>
        <span>Don Pandora</span>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <li key={item.id} className="sidebar-nav-item">
            <a 
              href="#" 
              className={`sidebar-nav-link ${item.active ? 'active' : ''}`}
              onClick={(e) => e.preventDefault()}
            >
              <i className={`bi ${item.icon}`}></i>
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </nav>

      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 'var(--spacing-lg)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      }}>
        <a 
          href="#" 
          className="sidebar-nav-link"
          onClick={(e) => e.preventDefault()}
          style={{ marginTop: 0 }}
        >
          <i className="bi bi-box-arrow-left"></i>
          <span>Cerrar sesión</span>
        </a>
      </div>
    </aside>
  );
}
