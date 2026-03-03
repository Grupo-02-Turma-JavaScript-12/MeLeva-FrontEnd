import { useNavigate } from "react-router-dom";
import type { Carona } from "../../../models/Carona";

export interface CardCaronaProps {
  carona: Carona;
}

export function CardCarona({ carona }: CardCaronaProps) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-[20rem] mx-auto justify-center shadow-md rounded-2xl overflow-hidden pb-4 border border-gray-100 bg-white">
      <div className="w-full h-40 bg-gray-200 overflow-hidden shadow-sm">
        <img
          className="w-full h-full object-cover"
          src={
            carona.Foto_destino ||
            "https://www.direcional.com.br/wp-content/uploads/2023/06/Boa-Viagem-Recife.webp"
          }
          alt="Destino"
        />
      </div>
      <div className="px-4 flex gap-2 mt-2">
        <div className="mt-1 flex flex-col justify-center items-center">
          <div className="border border-gray-400 rounded-full p-1"></div>
          <div className="h-6 w-0.5 bg-slate-800"></div>
          <div className="border border-gray-400 rounded-full p-1"></div>
        </div>
        <div className="py-2 font-bold text-slate-900 flex flex-col justify-between">
          <h1>{carona.origem}</h1>
          <h1>{carona.destino}</h1>
        </div>
      </div>
      <div className="px-4 font-bold text-slate-900 mt-2">
        <p className="text-center mb-2 pb-[.2rem] items-center rounded-lg w-25 bg-green-800 text-white text-sm">
          Promoção
        </p>
        <div className="flex justify-between items-end mt-2">
          <div className="flex flex-col">
            <p className="text-sm font-normal text-gray-500">A partir de</p>
            <h1 className="text-3xl text-slate-900 font-bold">
              {(() => {
                const valorFormatado = new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(Number(carona.valor) || 0);

                const [inteiro, decimal] = valorFormatado.split(",");

                return (
                  <>
                    {inteiro}
                    <span className="text-xl align-top">,{decimal}</span>
                  </>
                );
              })()}
            </h1>
          </div>

          <button
            onClick={() => navigate(`/reservar/${carona.id}`)}
            className="bg-orange-500 text-white px-5 py-2 rounded-xl font-bold hover:bg-orange-600 transition cursor-pointer shadow-sm"
          >
            Reservar
          </button>
        </div>
      </div>
    </div>
  );
}
