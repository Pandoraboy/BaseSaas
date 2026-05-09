# 📊 Documentación - Dashboard Comercial Don Pandora

## 📋 Tabla de Contenidos
1. [Resumen Ejecutivo](#resumen-ejecutivo)
2. [Decisiones Arquitectónicas](#decisiones-arquitectónicas)
3. [Estructura de Archivos](#estructura-de-archivos)
4. [Componentes Detallados](#componentes-detallados)
5. [Sistema de Estilos](#sistema-de-estilos)
6. [Guía de Uso](#guía-de-uso)
7. [Convenciones de Código](#convenciones-de-código)

---

## 🎯 Resumen Ejecutivo

Se ha desarrollado un **dashboard comercial profesional y responsive** para la plataforma Don Pandora con arquitectura modular escalable. El proyecto sigue las convenciones establecidas (JavaScript puro, Bootstrap 5, sin Tailwind) y está preparado para convertirse en un SaaS modular.

### Características Principales
- ✅ Diseño responsivo (desktop, tablet, mobile)
- ✅ Interfaz profesional con la paleta de Don Pandora
- ✅ Componentes reutilizables y modular
- ✅ Estructura escalable para SaaS
- ✅ Bootstrap 5 + Bootstrap Icons
- ✅ Sin dependencias innecesarias

---

## 🏗️ Decisiones Arquitectónicas

### 1. **Estructura Componental (Component-Based)**
**Decisión**: Dividir la interfaz en componentes pequeños, reutilizables e independientes.

**Justificación**:
- Facilita el mantenimiento y debugging
- Permite reutilización en otras páginas
- Escalabilidad para agregar nuevas funcionalidades
- Mejor legibilidad del código

**Ejemplo**:
```
Layout (contenedor principal)
  ├── Sidebar (navegación)
  ├── Navbar (encabezado)
  └── Dashboard (contenedor de página)
      ├── StatisticsCard (cards de métrica)
      └── ServicesSection
          └── ServiceCard (cards de servicio)
```

### 2. **Separación de Estilos CSS**
**Decisión**: Crear múltiples archivos CSS organizados por funcionalidad.

**Justificación**:
- Fácil mantenimiento y búsqueda de estilos
- Variables centralizadas (colores, espacios, sombras)
- Escalabilidad para nuevas funcionalidades
- Mejor rendimiento (estilos solo cuando se necesitan)

**Estructura**:
```
styles/
  ├── variables.css    (colores y espacios)
  ├── layout.css       (sidebar, navbar)
  └── dashboard.css    (cards y secciones)
```

### 3. **Sistema de Propiedades CSS Variables**
**Decisión**: Usar `:root` con variables CSS para temas y constantes.

**Justificación**:
- Paleta de Don Pandora centralizada
- Fácil cambio de temas futuro
- Reutilización de valores
- Consistencia visual

**Ejemplo**:
```css
:root {
  --dp-primary-dark: #0B1F3A;
  --dp-primary: #1570EF;
  --dp-background: #F3F4F6;
}
```

### 4. **Componentes de Presentación (Presentational)**
**Decisión**: Componentes sin estado que reciben `props`.

**Justificación**:
- Fácil de testear
- Reutilizables en distintos contextos
- Controlables desde el padre
- Enfoque en presentación visual

---

## 📁 Estructura de Archivos

```
frontend/src/
├── components/
│   ├── Layout.jsx                    (contenedor principal)
│   ├── Sidebar.jsx                   (navegación lateral)
│   ├── Navbar.jsx                    (barra superior)
│   └── dashboard/
│       ├── StatisticsCard.jsx        (card de estadística)
│       ├── ServiceCard.jsx           (card de servicio)
│       └── ServicesSection.jsx       (grid de servicios)
├── pages/
│   └── Dashboard.jsx                 (página principal)
├── styles/
│   ├── variables.css                 (colores y variables)
│   ├── layout.css                    (estilos de layout)
│   └── dashboard.css                 (estilos de dashboard)
├── App.jsx                           (componente raíz)
├── App.css                           (estilos de App)
├── main.jsx                          (punto de entrada)
└── index.css                         (estilos globales)
```

---

## 🧩 Componentes Detallados

### 1. **Layout.jsx**
**Ubicación**: `src/components/Layout.jsx`

**Propósito**: Contenedor principal que envuelve toda la aplicación con Sidebar y Navbar.

**Props Recibidas**:
```javascript
{
  children: ReactNode  // Contenido principal a renderizar
}
```

**Estado Interno**:
- `sidebarOpen`: boolean (estado del sidebar en mobile)

**Funcionalidades**:
- Gestiona apertura/cierre del sidebar
- Proporciona layout 2-columnas (sidebar + content)
- Responsive automático

**Uso**:
```javascript
<Layout>
  <Dashboard />
</Layout>
```

**Estructura HTML Generada**:
```html
<div class="layout-container">
  <aside class="sidebar"></aside>
  <div class="main-content">
    <header class="navbar-custom"></header>
    <div class="content">
      {children}
    </div>
  </div>
</div>
```

---

### 2. **Sidebar.jsx**
**Ubicación**: `src/components/Sidebar.jsx`

**Propósito**: Navegación lateral con menú y opciones.

**Props Recibidas**:
```javascript
{
  isOpen: boolean,           // Si el sidebar está abierto
  onClose: function          // Callback para cerrar
}
```

**Funcionalidades**:
- Menú con 7 opciones principales
- Icono activo para Dashboard
- Opción "Cerrar sesión" al pie
- Responsive (se oculta en mobile)

**Menú Items**:
| ID | Icono | Etiqueta | Activo |
|----|-------|----------|--------|
| 1 | bi-house-door | Dashboard | ✅ Sí |
| 2 | bi-graph-up | Estadísticas | ❌ No |
| 3 | bi-people | Clientes | ❌ No |
| 4 | bi-bag-check | Servicios | ❌ No |
| 5 | bi-receipt | Facturación | ❌ No |
| 6 | bi-calendar-event | Calendario | ❌ No |
| 7 | bi-file-text | Reportes | ❌ No |

**Uso**:
```javascript
<Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
```

**Estilos CSS**:
- `.sidebar` - Contenedor principal
- `.sidebar-brand` - Logo y título
- `.sidebar-nav` - Lista de navegación
- `.sidebar-nav-link` - Enlace individual
- `.sidebar-nav-link.active` - Enlace activo

---

### 3. **Navbar.jsx**
**Ubicación**: `src/components/Navbar.jsx`

**Propósito**: Barra superior con título, búsqueda, notificaciones y perfil.

**Props Recibidas**:
```javascript
{
  onToggleSidebar: function,  // Callback para toggle del sidebar
  sidebarOpen: boolean        // Estado del sidebar
}
```

**Elementos**:
1. **Botón Toggle** - Abre/cierra sidebar en mobile
2. **Título** - "Dashboard Comercial"
3. **Búsqueda** - Icono (funcionalidad futura)
4. **Notificaciones** - Badge con contador (3)
5. **Mensajes** - Badge con contador (2)
6. **Perfil** - Avatar circular con iniciales (JP)

**Uso**:
```javascript
<Navbar onToggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
```

**Estilos CSS**:
- `.navbar-custom` - Contenedor principal
- `.navbar-icon-btn` - Botones de iconos
- `.navbar-badge` - Badge de notificaciones
- `.navbar-avatar` - Avatar circular

---

### 4. **StatisticsCard.jsx**
**Ubicación**: `src/components/dashboard/StatisticsCard.jsx`

**Propósito**: Card que muestra una métrica con valor, icono y tendencia.

**Props Recibidas**:
```javascript
{
  title: string,              // Título de la métrica
  value: string,              // Valor a mostrar (ej: "$24,580")
  icon: string,               // Ícono Bootstrap (ej: "bi-cash-coin")
  change: string,             // Cambio porcentual (ej: "+12.5%")
  trend: 'up' | 'down',       // Dirección de la tendencia
  bgGradient: string          // (Opcional) Clase de gradiente
}
```

**Estructura Visual**:
```
┌─────────────────────────┐
│ INGRESOS          [💰]  │
├─────────────────────────┤
│ $24,580                 │
│ ↑ +12.5% vs mes anterior│
└─────────────────────────┘
```

**Uso**:
```javascript
<StatisticsCard
  title="Ingresos"
  value="$24,580"
  icon="bi-cash-coin"
  change="+12.5%"
  trend="up"
/>
```

**Estilos CSS**:
- `.statistics-card` - Contenedor con hover effect
- `.card-title` - Título pequeño
- `.card-icon` - Icono en gradiente
- `.card-value` - Número grande
- `.card-change` - Indicador de tendencia

---

### 5. **ServiceCard.jsx**
**Ubicación**: `src/components/dashboard/ServiceCard.jsx`

**Propósito**: Card que presenta un servicio disponible con descripción y estado.

**Props Recibidas**:
```javascript
{
  icon: string,           // Ícono Bootstrap (ej: "bi-envelope")
  title: string,          // Nombre del servicio
  subtitle: string,       // Subtítulo/categoría
  description: string,    // Descripción del servicio
  status: 'active' | 'inactive'  // Estado actual
}
```

**Estructura Visual**:
```
┌────────────────────────────────┐
│ [📧] Gestión de Email         │
│      CRM integrado             │
├────────────────────────────────┤
│ Automatiza campañas de email,  │
│ gestiona contactos...          │
├────────────────────────────────┤
│ ● Activo                   [→] │
└────────────────────────────────┘
```

**Uso**:
```javascript
<ServiceCard
  icon="bi-envelope"
  title="Gestión de Email"
  subtitle="CRM integrado"
  description="Automatiza campañas de email..."
  status="active"
/>
```

**Características**:
- Icono con gradiente aleatorio (primary, secondary, tertiary)
- Status badge con color (verde/rojo)
- Flecha animada en hover
- Efecto de elevación

**Estilos CSS**:
- `.service-card` - Contenedor principal
- `.service-icon-box` - Caja del icono
- `.service-title` - Título del servicio
- `.status-badge` - Badge de estado
- `.service-arrow` - Flecha animada

---

### 6. **ServicesSection.jsx**
**Ubicación**: `src/components/dashboard/ServicesSection.jsx`

**Propósito**: Sección que muestra grid de 6 servicios disponibles.

**Servicios Incluidos**:
1. **Gestión de Email** - CRM integrado (Activo)
2. **Agendar Citas** - Calendario inteligente (Activo)
3. **Facturación Digital** - Documentos legales (Activo)
4. **Análisis de Ventas** - Reportes en tiempo real (Activo)
5. **Gestión de Equipo** - Productividad del equipo (Inactivo)
6. **Pagos Online** - Integración de pasarelas (Inactivo)

**Props Recibidas**: Ninguno (datos internos)

**Uso**:
```javascript
<ServicesSection />
```

**Grid Responsivo**:
- **Desktop**: 3-4 columnas
- **Tablet**: 2-3 columnas
- **Mobile**: 1 columna

**Estilos CSS**:
- `.services-section` - Contenedor principal
- `.section-title` - Título con icono
- `.services-grid` - Grid CSS

---

### 7. **Dashboard.jsx**
**Ubicación**: `src/pages/Dashboard.jsx`

**Propósito**: Página principal que integra estadísticas y servicios.

**Estructura**:
```
Dashboard
├── Header
│   ├── Título: "Bienvenido a Don Pandora"
│   └── Subtítulo: "Automatiza tu negocio..."
├── Sección Estadísticas
│   └── Grid de 4 StatisticsCard
└── Sección Servicios
    └── ServicesSection (6 ServiceCards)
```

**Datos de Ejemplo**:
```javascript
const statistics = [
  { id: 1, title: 'Ingresos', value: '$24,580', icon: 'bi-cash-coin', change: '+12.5%', trend: 'up' },
  { id: 2, title: 'Clientes', value: '1,248', icon: 'bi-people', change: '+8.2%', trend: 'up' },
  { id: 3, title: 'Órdenes', value: '382', icon: 'bi-bag-check', change: '-3.1%', trend: 'down' },
  { id: 4, title: 'Proyectos', value: '45', icon: 'bi-briefcase', change: '+5.4%', trend: 'up' },
]
```

**Uso**:
```javascript
<Dashboard />
```

---

## 🎨 Sistema de Estilos

### variables.css
Define todas las constantes visuales de Don Pandora.

**Colores Corporativos**:
```css
--dp-primary-dark: #0B1F3A;      /* Azul oscuro */
--dp-primary: #1570EF;           /* Azul brillante */
--dp-primary-light: #4DA3FF;     /* Azul claro */
--dp-background: #F3F4F6;        /* Gris muy claro */
--dp-text-dark: #1F2937;         /* Gris oscuro */
--dp-text-light: #6B7280;        /* Gris medio */
--dp-white: #FFFFFF;             /* Blanco */
```

**Espaciado**:
```css
--spacing-xs: 0.25rem;    /* 4px */
--spacing-sm: 0.5rem;     /* 8px */
--spacing-md: 1rem;       /* 16px */
--spacing-lg: 1.5rem;     /* 24px */
--spacing-xl: 2rem;       /* 32px */
--spacing-2xl: 3rem;      /* 48px */
```

**Bordes y Sombras**:
```css
--radius-sm: 0.25rem;
--radius-md: 0.5rem;
--radius-lg: 0.75rem;
--radius-xl: 1rem;

--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
```

**Transiciones**:
```css
--transition-fast: 150ms ease-in-out;
--transition-base: 300ms ease-in-out;
--transition-slow: 500ms ease-in-out;
```

### layout.css
Estilos para Sidebar, Navbar y contenedor principal.

**Características**:
- Layout flex 2-columnas (sidebar + content)
- Sidebar fijo con scroll interno
- Navbar con flex layout
- Responsive con breakpoints
- Transiciones suaves

### dashboard.css
Estilos para StatisticsCard, ServiceCard y grid.

**Características**:
- Cards con hover effects
- Gradientes en iconos
- Badges de estado
- Grids responsivas
- Animaciones sutiles

---

## 🚀 Guía de Uso

### Instalación y Setup

```bash
# Navegar al proyecto frontend
cd frontend

# Instalar dependencias (ya están instaladas)
npm install

# Iniciar servidor de desarrollo
npm run dev

# Acceder a http://localhost:5173
```

### Agregar Nueva Página

```javascript
// 1. Crear archivo en src/pages/NewPage.jsx
export default function NewPage() {
  return (
    <div>
      {/* Contenido */}
    </div>
  )
}

// 2. Actualizar App.jsx
import NewPage from './pages/NewPage'

function App() {
  return (
    <Layout>
      <NewPage />
    </Layout>
  )
}
```

### Agregar Nuevo Servicio

```javascript
// En ServicesSection.jsx
const services = [
  // ...servicios existentes
  {
    id: 7,
    icon: 'bi-new-icon',
    title: 'Nuevo Servicio',
    subtitle: 'Categoría',
    description: 'Descripción del servicio...',
    status: 'active',
  },
]
```

### Personalizar Colores

Actualizar en `styles/variables.css`:
```css
:root {
  --dp-primary: #NUEVOR-HEX;
  --dp-primary-light: #NUEVO-HEX;
  /* ... */
}
```

Todos los componentes se actualizarán automáticamente.

### Modificar Espaciado

```css
/* En variables.css */
--spacing-lg: 2rem;  /* Aumentar espaciado */
```

---

## 📝 Convenciones de Código

### Nombrado de Componentes
- **PascalCase**: Nombres de componentes (Dashboard.jsx)
- **camelCase**: Props y funciones
- **kebab-case**: Clases CSS

### Estructura de Componentes
```javascript
// Imports
import React from 'react'

// Componente funcional
export default function ComponentName({ prop1, prop2 }) {
  // Estado (si es necesario)
  const [state, setState] = useState()

  // Métodos
  const handleClick = () => {}

  // Render
  return (
    <div className="component-class">
      {/* JSX */}
    </div>
  )
}
```

### Props Pattern
```javascript
// Componente siempre recibe objeto de props
export default function Card({ title, description, icon }) {
  // ...
}

// Uso con destructuring
<Card title="..." description="..." icon="..." />
```

### CSS Naming
```css
/* Block */
.statistics-card { }

/* Element */
.statistics-card__title { } /* O .card-title */

/* Modifier */
.statistics-card--active { } /* O .card.active */
```

---

## 🔄 Flujo de Datos

```
App.jsx
  └─ Layout.jsx
      ├─ Sidebar.jsx (props: isOpen, onClose)
      ├─ Navbar.jsx (props: onToggleSidebar)
      └─ Dashboard.jsx (page)
          ├─ StatisticsCard[] (props: title, value, icon, change, trend)
          └─ ServicesSection.jsx
              └─ ServiceCard[] (props: icon, title, description, status)
```

---

## 📊 Responsividad

### Breakpoints utilizados
- **Desktop**: > 768px
- **Tablet**: 576px - 768px
- **Mobile**: < 576px

### Cambios responsivos
1. **Sidebar**: Se oculta y aparece con toggle
2. **Grid Estadísticas**: De 4 columnas a 1
3. **Grid Servicios**: De 3-4 a 1 columna
4. **Padding**: Se reduce en mobile
5. **Navbar**: Íconos más pequeños

---

## 🎯 Próximos Pasos Sugeridos

1. **Autenticación**: Integrar Supabase Auth
2. **Routing**: Agregar React Router para navegación
3. **API Integration**: Conectar con backend
4. **Datos Dinámicos**: Reemplazar datos estáticos por APIs
5. **Temas**: Implementar modo oscuro
6. **Mobile Optimization**: Pulir detalles en dispositivos pequeños
7. **Análitica**: Agregar tracking de usuario
8. **Testing**: Añadir tests unitarios

---

## 📌 Checklist de Calidad

- ✅ Código modular y reutilizable
- ✅ Sin TypeScript (JavaScript puro)
- ✅ Bootstrap 5 (sin Tailwind)
- ✅ Responsivo
- ✅ Paleta Don Pandora implementada
- ✅ Sin dependencias innecesarias
- ✅ Preparado para SaaS
- ✅ Portfolio ready

---

**Versión**: 1.0
**Fecha**: Mayo 2026
**Proyecto**: Pandora Base - Don Pandora
**Stack**: React 19 + Vite + Bootstrap 5
