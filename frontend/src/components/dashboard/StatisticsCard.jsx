export default function StatisticsCard({ title, value, icon, change, trend, bgGradient = 'primary' }) {
  return (
    <div className="statistics-card">
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
        <div className="card-icon">
          <i className={`bi ${icon}`}></i>
        </div>
      </div>

      <div>
        <div className="card-value">{value}</div>

        <div className="card-footer">
          <span className={`card-change ${trend === 'up' ? 'positive' : 'negative'}`}>
            <i className={`bi ${trend === 'up' ? 'bi-graph-up' : 'bi-graph-down'} card-change-icon`}></i>
            <span>{change}</span>
          </span>
          <span className="card-change-text">vs mes anterior</span>
        </div>
      </div>
    </div>
  );
}
