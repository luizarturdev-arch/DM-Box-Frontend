import { Checkbox } from "./ui/checkbox";
import { Badge } from "./ui/badge";
import { MoreVertical } from "lucide-react";

interface Task {
  id: string;
  client: string;
  date: string;
  priority: "Alto" | "Médio" | "Baixo";
  days: number;
  status: "pending" | "completed" | "urgent";
}

const mockTasks: Task[] = [
  {
    id: "1",
    client: "AYARA LUIZA PEREIRA",
    date: "19/10/2025, 15:45",
    priority: "Alto",
    days: 5,
    status: "completed",
  },
  {
    id: "2",
    client: "MARIA LUIZA SILVA",
    date: "19/10/2025, 10:00",
    priority: "Médio",
    days: 2,
    status: "completed",
  },
  {
    id: "3",
    client: "MARCOS LEONARDO DE LIMA",
    date: "20/10/2025, 16:45",
    priority: "Baixo",
    days: 0,
    status: "completed",
  },
  {
    id: "4",
    client: "BIANCA DE ANDRADE",
    date: "02/10/2025, 15:45",
    priority: "Alto",
    days: 7,
    status: "urgent",
  },
  {
    id: "5",
    client: "THALITA DE LIMA",
    date: "10/10/2025, 15:45",
    priority: "Baixo",
    days: 1,
    status: "completed",
  },
];

export function TaskTable() {
  const priorityColors = {
    Alto: "bg-red-100 text-red-700",
    Médio: "bg-yellow-100 text-yellow-700",
    Baixo: "bg-blue-100 text-blue-700",
  };

  const statusColors = {
    pending: "bg-yellow-500",
    completed: "bg-green-500",
    urgent: "bg-orange-500",
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-100 flex items-center justify-between">
        <div>
          <h3 className="text-[#1a1f4d]">Tarefas</h3>
          <p className="text-gray-500">Suas tarefas do dia</p>
        </div>
        <button className="text-gray-600 hover:text-[#1a1f4d]">
          <MoreVertical className="h-5 w-5" />
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-gray-600 w-12"></th>
              <th className="px-6 py-3 text-left text-gray-600">Dados da certidão</th>
              <th className="px-6 py-3 text-left text-gray-600">Prioridade</th>
              <th className="px-6 py-3 text-left text-gray-600">Dias restante</th>
              <th className="px-6 py-3 text-left text-gray-600">Status</th>
            </tr>
          </thead>
          <tbody>
            {mockTasks.map((task) => (
              <tr key={task.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-6 py-4">
                  <Checkbox />
                </td>
                <td className="px-6 py-4">
                  <p className="text-[#1a1f4d]">{task.client}</p>
                  <p className="text-gray-500">{task.date}</p>
                </td>
                <td className="px-6 py-4">
                  <Badge className={`${priorityColors[task.priority]} border-0`}>
                    {task.priority}
                  </Badge>
                </td>
                <td className="px-6 py-4 text-gray-600">{task.days} Dias</td>
                <td className="px-6 py-4">
                  <span className={`inline-block w-3 h-3 rounded-full ${statusColors[task.status]}`} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
