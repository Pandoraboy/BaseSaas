import { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="layout-container">
      <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
      <div className={`main-content ${!sidebarOpen ? '' : ''}`}>
        <Navbar onToggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
        <div className="content">
          {children}
        </div>
      </div>
    </div>
  );
}
