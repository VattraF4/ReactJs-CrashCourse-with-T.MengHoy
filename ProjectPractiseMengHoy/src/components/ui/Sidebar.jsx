import React from 'react';
// import { Home, Layers, BarChart3, Settings, ChevronLeft } from 'lucide-react';
import { Home, Layers, ChartBarBig, Settings, ChevronLeft } from "lucide-react";


const navItems = [
  { label: 'Dashboard', icon: Home, active: true },
  { label: 'Projects', icon: Layers, active: false },
  { label: 'Analytics', icon: ChartBarBig, active: false },
  { label: 'Settings', icon: Settings, active: false },
];
 function Sidebar({ isOpen, setIsOpen }) {
  return (
    <aside
      className={`relative flex flex-col border-r border-slate-800 bg-slate-950/80 backdrop-blur-xl transition-all duration-300 ease-in-out ${
        isOpen ? 'w-64' : 'w-20'
      }`}
    >
      {/* Brand Header */}
      <div className="flex items-center justify-between h-16 px-4 border-b border-slate-800/80">
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="h-9 w-9 rounded-xl bg-linear-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/20 shrink-0">
            A
          </div>
          {isOpen && (
            <span className="font-semibold tracking-tight text-white whitespace-nowrap">
              Platform
            </span>
          )}
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors opacity-5 group-hover:opacity-100"
        >
          <ChevronLeft
            className={`w-5 h-5 transition-transform duration-300 ${
              !isOpen ? 'rotate-180' : ''
            }`}
          />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.label}
              href="#"
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                item.active
                  ? 'bg-indigo-600/10 text-indigo-400 border border-indigo-500/20 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              <Icon className="w-5 h-5 shrink-0" />
              {isOpen && <span className="truncate">{item.label}</span>}
            </a>
          );
        })}
      </nav>

      {/* User / Footer */}
      <div className="p-4 border-t border-slate-800/80">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 shrink-0" />
          {isOpen && (
            <div className="truncate text-xs">
              <p className="font-medium text-slate-200">Admin User</p>
              <p className="text-slate-500 truncate">admin@system.dev</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;