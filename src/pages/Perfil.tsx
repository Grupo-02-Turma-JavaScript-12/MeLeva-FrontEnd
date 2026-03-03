import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/useAuth";
import { useEffect } from "react";

export function Perfil() {
  const { usuario, logout, isLogado } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogado) navigate("/login");
  }, [isLogado, navigate]);

  function handleLogout() {
    logout();
    navigate("/login");
  }

  if (!usuario) return null;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm text-center">
        <div className="flex flex-col items-center mb-4">
          <span className="text-2xl font-extrabold text-orange-500">
            🚗 MeLeva
          </span>
          <p className="text-gray-400 text-sm">Meu Perfil</p>
        </div>

        <div className="flex justify-center mb-4">
          {usuario.foto ? (
            <img
              src={usuario.foto}
              alt={usuario.nome}
              className="w-24 h-24 rounded-full object-cover border-4 border-orange-400"
            />
          ) : (
            <div className="w-24 h-24 rounded-full bg-orange-100 flex items-center justify-center text-4xl border-4 border-orange-400">
              👤
            </div>
          )}
        </div>

        <h2 className="text-2xl font-bold text-gray-800">{usuario.nome}</h2>

        <p className="text-gray-500 mt-1">{usuario.usuario}</p>

        <div className="mt-6 flex flex-col gap-3">
          <button
            onClick={() => navigate("/perfil/editar")}
            className="bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition font-medium cursor-pointer"
          >
            ✏️ Editar Perfil
          </button>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition font-medium cursor-pointer"
          >
            🚪 Sair
          </button>
        </div>
      </div>
    </div>
  );
}
