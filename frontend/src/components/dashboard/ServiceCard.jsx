export default function ServiceCard({ icon, title, subtitle, description, status = 'active' }) {
  const statusConfig = {
    active: { label: 'Activo', className: 'status-badge active' },
    inactive: { label: 'Inactivo', className: 'status-badge inactive' },
  };

  const iconBoxClasses = ['primary', 'secondary', 'tertiary'];
  const randomClass = iconBoxClasses[Math.floor(Math.random() * iconBoxClasses.length)];

  return (
    <div className="service-card">
      <div className="service-card-header">
        <div className={`service-icon-box ${randomClass}`}>
          <i className={`bi ${icon}`}></i>
        </div>
        <div>
          <h3 className="service-title">{title}</h3>
          <p className="service-subtitle">{subtitle}</p>
        </div>
      </div>

      <p className="service-description">{description}</p>

      <div className="service-footer">
        <div className="service-status">
          <span className={statusConfig[status].className}>
            <i className={`bi bi-circle-fill`} style={{ fontSize: '0.5rem' }}></i>
            {statusConfig[status].label}
          </span>
        </div>
        <i className="bi bi-arrow-right service-arrow"></i>
      </div>
    </div>
  );
}
