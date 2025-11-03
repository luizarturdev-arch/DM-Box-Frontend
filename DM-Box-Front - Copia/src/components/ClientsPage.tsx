import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Search, Filter } from "lucide-react";
import { StatCard } from "./StatCard";
import { ClientsTable } from "./ClientsTable";

export function ClientsPage() {
  const [searchType, setSearchType] = useState("nome");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex-1 p-8 overflow-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-[#1a1f4d]">Clientes</h1>
        <Button className="bg-[#1a1f4d] hover:bg-[#252b63] text-white">
          Novo cliente
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          value="5.417"
          label="Total de clientes"
          trend="up"
          percentage="8.5%"
        />
        <StatCard
          value="2.708"
          label="Clientes ativos"
          trend="down"
          percentage="4.3%"
        />
        <StatCard
          value="1.354"
          label="Novos este mês"
          trend="up"
          percentage="12.5%"
        />
        <StatCard
          value="1.354"
          label="Arquivados"
          trend="down"
          percentage="2.4%"
        />
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
        <div className="flex flex-col lg:flex-row lg:items-end gap-6">
          {/* Radio Group */}
          <div className="flex-shrink-0">
            <Label className="text-gray-600 mb-3 block">Pesquisar por</Label>
            <RadioGroup
              value={searchType}
              onValueChange={setSearchType}
              className="flex gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="nome" id="nome" />
                <Label htmlFor="nome" className="cursor-pointer text-gray-700">
                  Nome
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="cpf" id="cpf" />
                <Label htmlFor="cpf" className="cursor-pointer text-gray-700">
                  CPF
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="pis" id="pis" />
                <Label htmlFor="pis" className="cursor-pointer text-gray-700">
                  PIS
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Search Input */}
          <div className="flex-1 flex gap-3">
            <div className="flex-1 relative">
              <Input
                type="text"
                placeholder={`Pesquisar pelo ${searchType}`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full border-gray-300 focus:border-[#c8a871] focus:ring-[#c8a871]"
              />
            </div>
            <Button 
              variant="outline" 
              size="icon"
              className="border-gray-300 hover:bg-gray-50"
            >
              <Search className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              className="border-gray-300 hover:bg-gray-50"
            >
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Clients List Header */}
      <div className="mb-4">
        <h2 className="text-[#1a1f4d]">Listagem de clientes</h2>
        <p className="text-gray-500">Resultado da pesquisa e listagem</p>
      </div>

      {/* Clients Table */}
      <ClientsTable />
    </div>
  );
}
