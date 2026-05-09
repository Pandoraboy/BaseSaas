import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

/* Bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

/* Custom Styles */
import './styles/variables.css'
import './styles/layout.css'
import './styles/dashboard.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)