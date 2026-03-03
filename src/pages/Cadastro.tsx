import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../services/api";

export function Cadastro() {
  const [form, setForm] = useState({
    nome: "",
    cpf: "",
    usuario: "",
    telefone: "",
    senha: "",
    nota_avaliacao: 5,
  });
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  const navigate = useNavigate();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleCadastro(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErro("");

    if (
      !form.nome ||
      !form.cpf ||
      !form.usuario ||
      !form.telefone ||
      !form.senha
    ) {
      setErro("Preencha todos os campos.");
      return;
    }

    try {
      setCarregando(true);
      await api.post("/usuarios/cadastrar", form);
      alert("Cadastro realizado com sucesso! Faça seu login.");
      navigate("/login");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.response?.status === 400) {
        setErro("Dados inválidos ou e-mail já cadastrado.");
      } else {
        setErro(
          "Erro ao cadastrar. Tente novamente ou verifique se o servidor está online.",
        );
      }
    } finally {
      setCarregando(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md mt-10">
        <div className="flex flex-col items-center mb-6">
          <img src="/img/logo.png" alt="logo" className="w-35 mb-2" />
          <p className="text-gray-400 text-sm mt-1">Crie sua conta</p>
        </div>

        <form onSubmit={handleCadastro} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Nome completo
            </label>
            <input
              type="text"
              name="nome"
              value={form.nome}
              onChange={handleChange}
              placeholder="Seu nome"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              CPF
            </label>
            <input
              type="text"
              name="cpf"
              value={form.cpf}
              onChange={handleChange}
              placeholder="000.000.000-00"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              E-mail
            </label>
            <input
              type="email"
              name="usuario"
              value={form.usuario}
              onChange={handleChange}
              placeholder="email@email.com.br"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Telefone
            </label>
            <input
              type="text"
              name="telefone"
              value={form.telefone}
              onChange={handleChange}
              placeholder="(00) 00000-0000"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Senha
            </label>
            <input
              type="password"
              name="senha"
              value={form.senha}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {erro && <p className="text-red-500 text-sm text-center">{erro}</p>}

          <button
            type="submit"
            disabled={carregando}
            className="bg-orange-500 text-white font-semibold py-2 rounded-lg hover:bg-orange-600 transition disabled:opacity-50 cursor-pointer mt-2"
          >
            {carregando ? "Cadastrando..." : "Cadastrar"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-4">
          Já tem conta?{" "}
          <Link
            to="/login"
            className="text-orange-500 hover:underline font-medium"
          >
            Entrar
          </Link>
        </p>
      </div>
    </div>
  );
}
