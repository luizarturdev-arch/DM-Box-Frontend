import { useState } from "react";
import { Checkbox } from "./ui/checkbox";
import { Badge } from "./ui/badge";
import { ChevronLeft, ChevronRight, MoreVertical } from "lucide-react";

interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: "Ativo" | "Arquivado";
  lastActivity: string;
}

const mockClients: Client[] = [
  {
    id: "1",
    name: "Luiz Artur de Lima e Silva",
    email: "luiz.artur.dlmadvocacia@gmail.com",
    phone: "(81)4002-8922",
    status: "Ativo",
    lastActivity: "PROCESSO INDEFERIDO JUD -19",
  },
  {
    id: "2",
    name: "José da Silva",
    email: "josedasilva@hotmail.com",
    phone: "(81)4002-8922",
    status: "Ativo",
    lastActivity: "PROCESSO INDEFERIDO JUD -19",
  },
  {
    id: "3",
    name: "Luiz Artur de Lima e Silva",
    email: "luiz.artur.dlmadvocacia@gmail.com",
    phone: "(81)99215-2212",
    status: "Ativo",
    lastActivity: "PROCESSO INDEFERIDO JUD -19",
  },
  {
    id: "4",
    name: "Luiz Artur de Lima e Silva",
    email: "luiz.artur.dlmadvocacia@gmail.com",
    phone: "(81)99215-2212",
    status: "Ativo",
    lastActivity: "PROCESSO INDEFERIDO JUD -19",
  },
  {
    id: "5",
    name: "Luiz Artur de Lima e Silva",
    email: "luiz.artur.dlmadvocacia@gmail.com",
    phone: "(81)99215-2212",
    status: "Arquivado",
    lastActivity: "PROCESSO INDEFERIDO JUD -19",
  },
  {
    id: "6",
    name: "Luiz Artur de Lima e Silva",
    email: "luiz.artur.dlmadvocacia@gmail.com",
    phone: "(81)99215-2212",
    status: "Ativo",
    lastActivity: "PROCESSO INDEFERIDO JUD -19",
  },
  {
    id: "7",
    name: "Luiz Artur de Lima e Silva",
    email: "luiz.artur.dlmadvocacia@gmail.com",
    phone: "(81)99215-2212",
    status: "Arquivado",
    lastActivity: "PROCESSO INDEFERIDO JUD -19",
  },
];

export function ClientsTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedClients, setSelectedClients] = useState<string[]>([]);
  const totalPages = 10;

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedClients(mockClients.map(client => client.id));
    } else {
      setSelectedClients([]);
    }
  };

  const handleSelectClient = (clientId: string, checked: boolean) => {
    if (checked) {
      setSelectedClients([...selectedClients, clientId]);
    } else {
      setSelectedClients(selectedClients.filter(id => id !== clientId));
    }
  };

  const isAllSelected = selectedClients.length === mockClients.length;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-100 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-left w-12">
                <Checkbox 
                  checked={isAllSelected}
                  onCheckedChange={handleSelectAll}
                />
              </th>
              <th className="px-6 py-4 text-left text-gray-600">Nome</th>
              <th className="px-6 py-4 text-left text-gray-600">Email</th>
              <th className="px-6 py-4 text-left text-gray-600">Telefone</th>
              <th className="px-6 py-4 text-left text-gray-600">Status</th>
              <th className="px-6 py-4 text-left text-gray-600">Última movimentação</th>
              <th className="px-6 py-4 w-12"></th>
            </tr>
          </thead>
          <tbody>
            {mockClients.map((client) => (
              <tr 
                key={client.id} 
                className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
              >
                <td className="px-6 py-4">
                  <Checkbox 
                    checked={selectedClients.includes(client.id)}
                    onCheckedChange={(checked) => handleSelectClient(client.id, checked as boolean)}
                  />
                </td>
                <td className="px-6 py-4">
                  <p className="text-[#1a1f4d]">{client.name}</p>
                </td>
                <td className="px-6 py-4 text-gray-600">{client.email}</td>
                <td className="px-6 py-4 text-gray-600">{client.phone}</td>
                <td className="px-6 py-4">
                  <Badge 
                    className={`${
                      client.status === "Ativo" 
                        ? "bg-green-100 text-green-700 border-0" 
                        : "bg-gray-100 text-gray-700 border-0"
                    }`}
                  >
                    {client.status}
                  </Badge>
                </td>
                <td className="px-6 py-4 text-gray-600">{client.lastActivity}</td>
                <td className="px-6 py-4">
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreVertical className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100">
        <button 
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="h-5 w-5 text-gray-600" />
        </button>

        <div className="flex items-center space-x-2">
          {[1, 2, 3, "...", 8, 9, 10].map((page, index) => (
            <button
              key={index}
              onClick={() => typeof page === "number" && setCurrentPage(page)}
              disabled={page === "..."}
              className={`px-3 py-1 rounded-lg transition-colors ${
                currentPage === page
                  ? "bg-[#1a1f4d] text-white"
                  : "text-gray-600 hover:bg-gray-100"
              } ${page === "..." ? "cursor-default" : ""}`}
            >
              {page}
            </button>
          ))}
        </div>

        <button 
          onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight className="h-5 w-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
}
