import  { useState } from 'react';
import Sidebar from '../components/ui/Sidebar';

function MainLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-slate-950 text-slate-100 overflow-hidden font-sans">
      {/* Sidebar Component */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Main View Area */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        {/* Top Navbar */}

        {/* Scrollable Dynamic Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-slate-900/50">
          <div className="max-w-7xl mx-auto">
            {children} {/* Or <Outlet /> if using React Router */}
          </div>
        </main>
      </div>
    </div>
  );
}
export default MainLayout;