import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/useAuth";
import { api } from "../services/api";

interface Usuario {
  id: number;
  usuario: string; // Este é o campo de email no seu backend
  passageiro: {
    nome: string;
  };
  // adicione outros campos se necessário
}

export function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  const { login, isLogado } = useAuth();
  const navigate = useNavigate();

  // se já estiver com token no localStorage, não precisa ver a tela de login
  useEffect(() => {
    if (isLogado) {
      navigate("/perfil");
    }
  }, [isLogado, navigate]);

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErro("");

    if (!email || !senha) {
      setErro("Preencha todos os campos.");
      return;
    }

    try {
      setCarregando(true);

      const resposta = await api.get<Usuario[]>("/usuarios");
      const usuarios = resposta.data;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const usuario: string | any = usuarios.find((u) => u.usuario === email);

      if (usuario) {
        const tokenFake = "token-" + usuario.id;

        login(usuario, tokenFake);
        navigate("/perfil");
      } else {
        setErro("E-mail ou senha incorretos.");
      }
    } catch (error) {
      console.error("Erro no login:", error);
      setErro("Servidor offline ou erro de conexão.");
    } finally {
      setCarregando(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        <div className="flex flex-col items-center mb-6">
          {/* Logo MeLeva conforme suas imagens anteriores */}
          <img src="/img/logo.png" alt="MeLeva" className="w-40 mb-2" />

          <p className="text-gray-400 text-sm mt-1">Sua carona começa aqui</p>
        </div>

        <h2 className="text-lg font-semibold text-center text-gray-700 mb-4">
          Bem-vindo!
        </h2>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              E-mail
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Senha
            </label>
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="••••••••"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          {erro && (
            <p className="text-red-500 text-sm text-center font-medium">
              {erro}
            </p>
          )}

          {erro && <p className="text-red-500 text-sm text-center">{erro}</p>}

          <button
            type="submit"
            disabled={carregando}
            className="bg-orange-500 text-white font-bold py-3 rounded-lg hover:bg-orange-600 transition disabled:opacity-50 cursor-pointer shadow-md uppercase tracking-wide"
          >
            {carregando ? "Verificando..." : "Entrar"}
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            Ainda não tem conta? <br />
            <Link
              to="/cadastro"
              className="text-orange-600 font-bold hover:underline"
            >
              Cadastre-se agora
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
