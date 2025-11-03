import { Bell, Sun, Mail } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import avatarImage from "figma:asset/5166a0b5ca2bb80e52133d147d62411628d9837a.png";

interface DashboardHeaderProps {
  userName: string;
  userRole: string;
  onLogout: () => void;
}

export function DashboardHeader({ userName, userRole, onLogout }: DashboardHeaderProps) {
  const currentDate = new Date().toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="bg-white border-b border-gray-200 px-8 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[#1a1f4d]">Olá, {userName}!</h1>
          <p className="text-gray-500 capitalize">{currentDate}</p>
        </div>

        <div className="flex items-center space-x-4">
          {/* Icons */}
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Bell className="h-5 w-5 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Sun className="h-5 w-5 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Mail className="h-5 w-5 text-gray-600" />
          </button>

          {/* User Info */}
          <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
            <div className="text-right">
              <p className="text-[#1a1f4d]">{userName}</p>
              <p className="text-gray-500">{userRole}</p>
            </div>
            <Avatar className="h-10 w-10">
              <AvatarImage src={avatarImage} alt={userName} />
              <AvatarFallback className="bg-[#1a1f4d] text-white">
                {userName
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  );
}
