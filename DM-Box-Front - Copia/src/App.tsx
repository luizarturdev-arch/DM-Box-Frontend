import { useState } from "react";
import { LoginForm } from "./components/LoginForm";
import { Dashboard } from "./components/Dashboard";
import { Scale } from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    return <Dashboard onLogout={handleLogout} />;
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Image */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-[#1a1f4d] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1f4d] via-[#252b63] to-[#1a1f4d] opacity-90 z-10" />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1567973043680-b0b4444a9e94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXclMjBvZmZpY2UlMjBsaWJyYXJ5fGVufDF8fHx8MTc2MjEyMjU1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Biblioteca jurídica"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 flex flex-col justify-between p-12 w-full">
          <div className="flex items-center space-x-3">
            <div className="bg-[#c8a871] p-2.5 rounded-lg">
              <Scale className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-white">DM Box</h1>
              <p className="text-[#c8a871]">Gestão Jurídica</p>
            </div>
          </div>
          
          <div className="text-white space-y-4">
            <h2 className="text-3xl">
              Gestão completa para o seu escritório de advocacia
            </h2>
            <p className="text-gray-300 max-w-md">
              Controle processos, prazos, clientes e documentos em uma única plataforma.
              Otimize seu tempo e foque no que realmente importa.
            </p>
            <div className="flex space-x-6 pt-4">
              <div>
                <div className="text-[#c8a871] mb-1">+5.000</div>
                <div className="text-gray-300">Advogados</div>
              </div>
              <div>
                <div className="text-[#c8a871] mb-1">+1.000</div>
                <div className="text-gray-300">Escritórios</div>
              </div>
              <div>
                <div className="text-[#c8a871] mb-1">+100.000</div>
                <div className="text-gray-300">Processos gerenciados</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 flex items-center justify-center bg-white p-8">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center justify-center space-x-3 mb-8">
            <div className="bg-[#1a1f4d] p-2.5 rounded-lg">
              <Scale className="h-8 w-8 text-[#c8a871]" />
            </div>
            <div>
              <h1 className="text-[#1a1f4d]">DM Box</h1>
              <p className="text-[#c8a871]">Gestão Jurídica</p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-[#1a1f4d] mb-2">Bem-vindo de volta</h2>
            <p className="text-gray-600">
              Entre com suas credenciais para acessar o sistema
            </p>
          </div>

          <LoginForm onLogin={handleLogin} />

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-center text-gray-500">
              © 2025 DM Box. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
