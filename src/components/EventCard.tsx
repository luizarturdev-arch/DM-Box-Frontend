import { Calendar, Clock, User, Users } from "lucide-react";
import { Avatar, AvatarFallback } from "./ui/avatar";

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  type: string;
  creator: string;
  participants?: string[];
  description?: string;
  status: "pending" | "completed" | "urgent";
}

export function EventCard({ title, date, time, type, creator, participants, description, status }: EventCardProps) {
  const statusColors = {
    pending: "bg-yellow-500",
    completed: "bg-green-500",
    urgent: "bg-red-500",
  };

  const statusLabels = {
    pending: "Pendente",
    completed: "Concluído",
    urgent: "Urgente",
  };

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-2">
          <div className={`w-3 h-3 rounded-full ${statusColors[status]}`} />
          <h3 className="text-[#1a1f4d]">{title}</h3>
        </div>
        <span className={`px-2 py-1 rounded text-white ${statusColors[status]}`}>
          {type}
        </span>
      </div>

      <div className="space-y-2 mb-3">
        <div className="flex items-center space-x-2 text-gray-600">
          <Calendar className="h-4 w-4" />
          <span>{date}</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-600">
          <Clock className="h-4 w-4" />
          <span>{time}</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-600">
          <User className="h-4 w-4" />
          <span>Criador: {creator}</span>
        </div>
      </div>

      {description && (
        <div className="mb-3">
          <p className="text-gray-700">Descrição</p>
          <p className="text-gray-600">{description}</p>
        </div>
      )}

      {participants && participants.length > 0 && (
        <div className="flex items-center space-x-2">
          <Users className="h-4 w-4 text-gray-600" />
          <div className="flex -space-x-2">
            {participants.map((participant, index) => (
              <Avatar key={index} className="h-8 w-8 border-2 border-white">
                <AvatarFallback className="bg-[#1a1f4d] text-white">
                  {participant.split(" ").map((n) => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
            ))}
          </div>
          <span className="text-gray-600">+{participants.length}</span>
        </div>
      )}
    </div>
  );
}
