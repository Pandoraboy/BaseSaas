export default function Navbar({ onToggleSidebar, sidebarOpen }) {
  return (
    <header className="navbar-custom">
      <div className="navbar-start">
        <button 
          className="navbar-toggle"
          onClick={onToggleSidebar}
          title="Abrir menú"
        >
          <i className={`bi ${sidebarOpen ? 'bi-x' : 'bi-list'}`}></i>
        </button>
        <h1 className="navbar-title">Dashboard Comercial</h1>
      </div>

      <div className="navbar-end">
        <button className="navbar-icon-btn" title="Buscar">
          <i className="bi bi-search"></i>
        </button>

        <button className="navbar-icon-btn" title="Notificaciones">
          <i className="bi bi-bell"></i>
          <span className="navbar-badge">3</span>
        </button>

        <button className="navbar-icon-btn" title="Mensajes">
          <i className="bi bi-chat-dots"></i>
          <span className="navbar-badge">2</span>
        </button>

        <div style={{ borderLeft: '1px solid var(--dp-border)', paddingLeft: 'var(--spacing-lg)' }}>
          <div className="navbar-avatar" title="Perfil">JP</div>
        </div>
      </div>
    </header>
  );
}
