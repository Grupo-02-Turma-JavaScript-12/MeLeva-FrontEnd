import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { useAuth } from "../contexts/useAuth";
import type { Carona } from "../models/Carona";

export function ReservarCarona() {
  const { id } = useParams<{ id: string }>();
  const { usuario, token, isLogado } = useAuth();
  const navigate = useNavigate();

  const [carona, setCarona] = useState<Carona | null>(null);
  const [carregando, setCarregando] = useState(true);
  const [processando, setProcessando] = useState(false);

  useEffect(() => {
    if (!isLogado || !usuario) {
      alert("Você precisa fazer login para reservar uma carona.");
      navigate("/login");
      return;
    }

    async function buscarDetalhesCarona() {
      try {
        const resposta = await api.get(`/caronas/${id}`);
        setCarona(resposta.data);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        alert("Erro ao carregar detalhes da carona.");
        navigate("/");
      } finally {
        setCarregando(false);
      }
    }

    buscarDetalhesCarona();
  }, [id, isLogado, navigate, usuario]);

  const handleConfirmarReserva = async () => {
    if (!usuario || !carona) return;

    setProcessando(true);
    try {
      const payloadReserva = {
        status: "Pendente",
        passageiro: {
          id: usuario.id,
        },
        carona: {
          id: carona.id,
        },
      };

      await api.post("/reservas", payloadReserva, {
        headers: { Authorization: `Bearer ${token}` },
      });

      alert("Reserva efetuada com sucesso! O motorista será notificado.");
      navigate("/perfil");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error(error);
      alert("Erro ao confirmar a reserva. Tente novamente.");
    } finally {
      setProcessando(false);
    }
  };

  if (carregando) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Carregando informações da carona...
      </div>
    );
  }

  if (!carona) return null;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-lg w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 p-8">
        <h2 className="text-3xl font-extrabold text-cyan-900 text-center mb-6">
          Confirmar Reserva
        </h2>

        <div className="bg-gray-100 rounded-2xl p-6 mb-8 space-y-4">
          <div className="flex justify-between items-center border-b border-gray-300 pb-4">
            <span className="text-gray-500 font-semibold uppercase text-xs">
              Origem
            </span>
            <span className="font-bold text-lg text-slate-800">
              {carona.origem}
            </span>
          </div>

          <div className="flex justify-between items-center border-b border-gray-300 pb-4">
            <span className="text-gray-500 font-semibold uppercase text-xs">
              Destino
            </span>
            <span className="font-bold text-lg text-slate-800">
              {carona.destino}
            </span>
          </div>

          <div className="flex justify-between items-center border-b border-gray-300 pb-4">
            <span className="text-gray-500 font-semibold uppercase text-xs">
              Motorista
            </span>
            <span className="font-bold text-slate-800">
              {carona.motorista?.nome || "Não informado"}
            </span>
          </div>

          <div className="flex justify-between items-center border-b border-gray-300 pb-4">
            <span className="text-gray-500 font-semibold uppercase text-xs">
              Vagas Disponíveis
            </span>
            <span className="font-bold text-slate-800">
              {carona.vagas_disponiveis}
            </span>
          </div>

          <div className="flex justify-between items-center pt-2">
            <span className="text-gray-500 font-semibold uppercase text-xs">
              Total a pagar
            </span>
            <span className="font-extrabold text-3xl text-orange-500">
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(Number(carona.valor) || 0)}
            </span>
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => navigate(-1)}
            className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-4 rounded-xl transition cursor-pointer"
          >
            Voltar
          </button>
          <button
            onClick={handleConfirmarReserva}
            disabled={processando}
            className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg transition cursor-pointer disabled:opacity-50"
          >
            {processando ? "Processando..." : "Confirmar"}
          </button>
        </div>
      </div>
    </div>
  );
}
