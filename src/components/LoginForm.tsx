import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import api from "../../src/service/api";

interface LoginFormProps {
  onLogin: (user: any) => void; // A prop onLogin agora pode receber o usuário
}

export function LoginForm({ onLogin }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Estado de loading

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    // Aqui você adicionaria a lógica de autenticação
    try {
      // 1. Chamar seu backend Node.js
      const response = await api.post('/login', { email, password });

      // 2. Se o login der certo (status 200)
      const { session, user } = response.data;

      // 3. Salvar o token de acesso (IMPORTANTE)
      // Você usará esse token para fazer chamadas autenticadas
      localStorage.setItem('authToken', session.access_token);

      // 4. Atualizar o header 'Authorization' do Axios para futuras requisições
      api.defaults.headers.common['Authorization'] = `Bearer ${session.access_token}`;

      // 5. Chamar a função onLogin (passada pelo App.tsx?) com dados do usuário
      onLogin(user);

    } catch (err: any) {
      // 5. Se o login der errado (backend retornou 401 ou 500)
      if (err.response && err.response.data && err.response.data.error) {
        setError(err.response.data.error); // Mostra o erro vindo do Supabase
      } else {
        setError('Erro ao tentar fazer login. Tente novamente.');
      }
      setIsLoading(false);
    }
    // O setIsLoading(false) só é necessário no 'catch'
    // porque o 'onLogin' provavelmente vai desmontar este componente
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="email" className="text-[#1a1f4d]">
          E-mail
        </Label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input
            id="email"
            type="email"
            placeholder="seu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-10 border-gray-300 focus:border-[#c8a871] focus:ring-[#c8a871]"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="password" className="text-[#1a1f4d]">
          Senha
        </Label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input
            id="password"
            type={null ? "text" : "password"}
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="pl-10 pr-10 border-gray-300 focus:border-[#c8a871] focus:ring-[#c8a871]"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!null)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="remember"
            checked={null}
            onCheckedChange={(checked) => setRememberMe(checked as boolean)}
            className="border-gray-300"
          />
          <Label
            htmlFor="remember"
            className="cursor-pointer text-gray-600"
          >
            Lembrar-me
          </Label>
        </div>
        <a
          href="#"
          className="text-[#c8a871] hover:text-[#b39761] transition-colors"
        >
          Esqueceu a senha?
        </a>
      </div>

      <Button
        type="submit"
        className="w-full bg-[#1a1f4d] hover:bg-[#252b63] text-white h-12"
      >
        Entrar
      </Button>

      <div className="text-center">
        <p className="text-gray-600">
          Não tem uma conta?{" "}
          <a
            href="#"
            className="text-[#c8a871] hover:text-[#b39761] transition-colors"
          >
            Solicite acesso
          </a>
        </p>
      </div>
    </form>
  );
}
