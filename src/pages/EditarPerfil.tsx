import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/useAuth";
import { api } from "../services/api";
import type { Usuario } from "../models/Usuario";

export function EditarPerfil() {
  const { usuario, login, token, isLogado } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    id: 0,
    nome: "",
    cpf: "",
    usuario: "",
    telefone: "",
    foto: "",
    nota_avaliacao: 5,
  });

  const [carregando, setCarregando] = useState(false);
  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState(false);

  useEffect(() => {
    if (!isLogado || !usuario) {
      navigate("/login");
    } else {
      setForm({
        id: usuario.id,
        nome: usuario.nome || "",
        cpf: usuario.cpf || "",
        usuario: usuario.usuario || "",
        telefone: usuario.telefone || "",
        foto: usuario.foto || "",
        nota_avaliacao: Number(usuario.nota_avaliacao) || 5,
      });
    }
  }, [isLogado, usuario, navigate]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMensagem("");
    setErro(false);

    try {
      setCarregando(true);

      const resposta = await api.put("/usuarios/atualizar", form, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const usuarioAtualizado = resposta.data || form;

      login(usuarioAtualizado as Usuario, token);

      setMensagem("Perfil atualizado com sucesso!");
      setTimeout(() => navigate("/perfil"), 1500);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setErro(true);
      setMensagem("Erro ao atualizar o perfil. Tente novamente.");
    } finally {
      setCarregando(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-cyan-900 mb-6">
          Editar Perfil
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Nome completo
            </label>
            <input
              type="text"
              name="nome"
              value={form.nome}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
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
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              URL da Foto de Perfil (Opcional)
            </label>
            <input
              type="text"
              name="foto"
              value={form.foto}
              onChange={handleChange}
              placeholder="https://link-da-sua-foto.com/foto.jpg"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {mensagem && (
            <p
              className={`text-sm text-center font-medium ${erro ? "text-red-500" : "text-green-600"}`}
            >
              {mensagem}
            </p>
          )}

          <div className="flex gap-4 mt-4">
            <button
              type="button"
              onClick={() => navigate("/perfil")}
              className="flex-1 bg-gray-200 text-gray-700 font-semibold py-2 rounded-lg hover:bg-gray-300 transition cursor-pointer"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={carregando}
              className="flex-1 bg-orange-500 text-white font-semibold py-2 rounded-lg hover:bg-orange-600 transition disabled:opacity-50 cursor-pointer"
            >
              {carregando ? "Salvando..." : "Salvar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
