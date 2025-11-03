import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { DashboardHeader } from "./DashboardHeader";
import { MetricCard } from "./MetricCard";
import { EventCard } from "./EventCard";
import { TaskTable } from "./TaskTable";
import { ClientsPage } from "./ClientsPage";
import { Calendar } from "./ui/calendar";
import { FileText, Calendar as CalendarIcon, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "./ui/card";

interface DashboardProps {
  onLogout: () => void;
}

export function Dashboard({ onLogout }: DashboardProps) {
  const [activeTab, setActiveTab] = useState("home");
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedDate, setSelectedDate] = useState(20);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  const agendaDays = [
    { day: 18, label: "Sáb" },
    { day: 19, label: "Dom" },
    { day: 20, label: "Seg" },
    { day: 21, label: "Ter" },
    { day: 22, label: "Qua" },
  ];

  const agendaItems = [
    {
      title: "Prazo - Exigência",
      date: "20 de Outubro",
      time: "15:00 - 18:00",
      type: "Prazo",
      creator: "Davi Marinho",
      status: "completed" as const,
      description: "DESPACHO PARA SE MANIFESTAR QTO ACEITO A CERTIDÃO DA DPU INFORMANDO QUE SE MANIFESTAR EM 5 DIAS SOBRE A EXIGÊNCIA, PRAZO FATAL IMPRETÉRIÚVEL.",
      participants: ["João Silva", "Maria Santos", "Pedro Costa"],
    },
    {
      title: "Prazo - Exigência",
      date: "20 de Outubro",
      time: "15:00 - 18:00",
      type: "Prazo",
      creator: "Davi Marinho",
      status: "completed" as const,
      description: "DESPACHO PARA SE MANIFESTAR QTO ACEITO A CERTIDÃO DA DPU INFORMANDO QUE SE MANIFESTAR EM 5 DIAS SOBRE A EXIGÊNCIA, PRAZO FATAL IMPRETÉRIÚVEL.",
      participants: ["João Silva", "Maria Santos"],
    },
    {
      title: "Prazo - Exigência",
      date: "20 de Outubro",
      time: "15:00 - 18:00",
      type: "Prazo",
      creator: "Davi Marinho",
      status: "completed" as const,
      description: "DESPACHO PARA SE MANIFESTAR QTO ACEITO A CERTIDÃO DA DPU INFORMANDO QUE SE MANIFESTAR EM 5 DIAS SOBRE A EXIGÊNCIA, PRAZO FATAL IMPRETÉRIÚVEL.",
      participants: ["João Silva", "Maria Santos", "Pedro Costa"],
    },
  ];

  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar 
        activeTab={activeTab} 
        onTabChange={setActiveTab}
        isExpanded={isSidebarExpanded}
        onToggle={() => setIsSidebarExpanded(!isSidebarExpanded)}
      />

      <div className="flex-1 flex flex-col">
        <DashboardHeader 
          userName="Dr. Davi Marinho" 
          userRole="Advogado"
          onLogout={onLogout}
        />

        {activeTab === "clients" ? (
          <ClientsPage />
        ) : (
          <main className="flex-1 p-8 overflow-auto">
          {/* Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <MetricCard
              title="Processos"
              value={35}
              icon={FileText}
              color="bg-[#1a1f4d]"
            />
            <MetricCard
              title="Prazos"
              value={21}
              icon={CalendarIcon}
              color="bg-[#e97d3c]"
            />
            <MetricCard
              title="Concluídos"
              value={9}
              icon={CheckCircle}
              color="bg-[#4caf50]"
            />
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="xl:col-span-2 space-y-8">
              {/* Calendar and Next Event */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Calendar */}
                <Card className="p-6">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md"
                  />
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-gray-600">Time</p>
                    <p className="text-[#1a1f4d]">9:41 AM</p>
                  </div>
                </Card>

                {/* Next Event */}
                <Card className="p-6">
                  <h3 className="text-[#1a1f4d] mb-4">Próximo evento</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-10 h-10 rounded-full bg-[#1a1f4d] flex items-center justify-center text-white">
                        C
                      </div>
                      <div>
                        <p className="text-[#1a1f4d]">Compromisso</p>
                        <p className="text-gray-500">Próximo</p>
                      </div>
                    </div>
                    <div className="text-gray-600">
                      <p>14:00 - 16:00</p>
                      <p>Prazo</p>
                    </div>
                    <div>
                      <p className="text-gray-700 mb-2">Descrição</p>
                      <p className="text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique autem
                        recusandae et quasi dolor, eos qui...
                      </p>
                    </div>
                    <div className="flex items-center space-x-2 pt-2">
                      <div className="flex -space-x-2">
                        {["João", "Maria", "Pedro"].map((name, i) => (
                          <div
                            key={i}
                            className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center"
                          >
                            <span className="text-gray-700">{name[0]}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Tasks Table */}
              <TaskTable />
            </div>

            {/* Right Column - Agendas */}
            <div>
              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-[#1a1f4d]">Agendas do dia</h3>
                  <button className="text-gray-600 hover:text-[#1a1f4d]">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </button>
                </div>

                <p className="text-gray-500 mb-4">Seus compromissos agora hoje</p>

                {/* Date Selector */}
                <div className="flex items-center justify-between mb-6 bg-[#1a1f4d] rounded-lg p-3">
                  <button className="text-white">
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <span className="text-white">20 de Outubro</span>
                  <button className="text-white">
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>

                {/* Day Selector */}
                <div className="flex justify-between mb-6">
                  {agendaDays.map((day) => (
                    <button
                      key={day.day}
                      onClick={() => setSelectedDate(day.day)}
                      className={`flex flex-col items-center p-3 rounded-lg transition-colors ${
                        selectedDate === day.day
                          ? "bg-[#1a1f4d] text-white"
                          : "bg-white text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      <span>{day.day}</span>
                      <span className="text-sm">{day.label}</span>
                    </button>
                  ))}
                </div>

                {/* Agenda Items */}
                <div className="space-y-4">
                  {agendaItems.map((item, index) => (
                    <EventCard key={index} {...item} />
                  ))}
                </div>
              </Card>
            </div>
          </div>
          </main>
        )}
      </div>
    </div>
  );
}
