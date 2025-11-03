import { Scale, Home, FileText, Calendar, Users, BarChart3, Settings, Menu } from "lucide-react";

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  isExpanded: boolean;
  onToggle: () => void;
}

export function Sidebar({ activeTab, onTabChange, isExpanded, onToggle }: SidebarProps) {
  const menuItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "agenda", icon: Calendar, label: "Agenda" },
    { id: "clients", icon: Users, label: "Clientes" },
    { id: "processes", icon: FileText, label: "Processos" },
    { id: "dashboard", icon: BarChart3, label: "Dashboard" },
  ];

  return (
    <div 
      className={`bg-[#0c1329] flex flex-col transition-all duration-300 ${
        isExpanded ? "w-64" : "w-20"
      }`}
    >
      {/* Header */}
      <div className="p-6">
        {isExpanded ? (
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-[#c8a871] p-2 rounded-lg">
                <Scale className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-white">DM</h2>
                <p className="text-gray-400">Marinho</p>
              </div>
            </div>
            <button 
              onClick={onToggle}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center space-y-4">
            <div className="bg-[#c8a871] p-2 rounded-lg">
              <Scale className="h-6 w-6 text-white" />
            </div>
            <button 
              onClick={onToggle}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>

      {/* Menu Items */}
      <nav className="flex-1 px-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? "bg-[#1a1f4d] text-white"
                  : "text-gray-400 hover:text-white hover:bg-[#1a1f4d]"
              }`}
              title={item.label}
            >
              <Icon className="h-5 w-5 flex-shrink-0" />
              {isExpanded && <span className="whitespace-nowrap">{item.label}</span>}
            </button>
          );
        })}
      </nav>

      {/* Settings at bottom */}
      <div className="p-4">
        <button 
          className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-400 hover:text-white hover:bg-[#1a1f4d] transition-colors`}
        >
          <Settings className="h-5 w-5 flex-shrink-0" />
          {isExpanded && <span className="whitespace-nowrap">Configurações</span>}
        </button>
      </div>
    </div>
  );
}
