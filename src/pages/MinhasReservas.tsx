/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/useAuth";
import { api } from "../services/api";

export function MinhasReservas() {
  const { usuario, token, isLogado } = useAuth();
  const navigate = useNavigate();
  const [reservas, setReservas] = useState<any[]>([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    if (!isLogado || !usuario) {
      navigate("/login");
      return;
    }

    async function buscarReservas() {
      try {
        const resposta = await api.get("/reservas", {
          headers: { Authorization: `Bearer ${token}` },
        });

        const minhasReservas = resposta.data.filter(
          (reserva: any) => reserva.passageiro?.id === usuario?.id,
        );

        setReservas(minhasReservas);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        console.error("Erro ao buscar reservas");
      } finally {
        setCarregando(false);
      }
    }

    buscarReservas();
  }, [isLogado, usuario, navigate, token]);

  if (carregando) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Carregando suas reservas...
      </div>
    );
  }

  return (
    <div className="container w-4/5 mx-auto py-12 min-h-screen">
      <h1 className="text-4xl font-bold text-cyan-900 mb-8 text-center">
        Minhas Reservas
      </h1>

      {reservas.length === 0 ? (
        <div className="bg-white rounded-3xl shadow-md p-12 text-center border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">
            Você ainda não tem reservas.
          </h2>
          <p className="text-gray-500 mb-6">
            Que tal encontrar sua próxima viagem agora mesmo?
          </p>
          <button
            onClick={() => navigate("/")}
            className="bg-orange-500 text-white px-8 py-3 rounded-xl font-bold hover:bg-orange-600 transition cursor-pointer"
          >
            Procurar Caronas
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reservas.map((reserva) => (
            <div
              key={reserva.id}
              className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 flex flex-col gap-4"
            >
              <div className="flex justify-between items-center border-b pb-2">
                <span className="font-bold text-slate-800">
                  Reserva #{reserva.id}
                </span>
                <span
                  className={`text-xs font-bold px-3 py-1 rounded-full ${reserva.status === "Pendente" ? "bg-yellow-100 text-yellow-700" : "bg-green-100 text-green-700"}`}
                >
                  {reserva.status}
                </span>
              </div>

              {reserva.carona ? (
                <>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase">
                      Trajeto
                    </p>
                    <p className="font-medium">
                      {reserva.carona.origem} ➔ {reserva.carona.destino}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase">
                      Motorista
                    </p>
                    <p className="font-medium">
                      {reserva.carona.motorista?.nome || "Não informado"}
                    </p>
                  </div>
                  <div className="flex justify-between items-end mt-2">
                    <p className="text-xs text-gray-500 font-bold uppercase">
                      Valor Pago
                    </p>
                    <p className="font-bold text-xl text-orange-500">
                      {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(Number(reserva.carona.valor) || 0)}
                    </p>
                  </div>
                </>
              ) : (
                <p className="text-gray-500 text-sm">
                  Detalhes da carona indisponíveis.
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
