import type Carona from "../../../models/Carona";

interface CardCaronaProps {
  carona: Carona;
}

function CardCarona({ carona }: CardCaronaProps) {
  return (
    <div className="flex flex-col w-[20rem] mx-auto justify-center  shadow-md rounded-2xl overflow-hidden pb-4">
      {/* Imagem destino */}
      <div className="">
        {/* Implementar foto do destino na model e na entity do backend */}
        <img className="flex justify-center shadow" src={carona.Foto_destino} alt="recife" />
      </div>
      <div className="px-4 flex gap-2">
        <div className="mt-1 flex flex-col justify-center items-center ">
          <div className="border rounded-full p-1"></div>
          <div className=" h-4 w-1 bg-slate-800"></div>
          <div className="border rounded-full p-1"></div>
        </div>
        <div className="py-2 font-bold text-slate-900">
          {/* Origem */}
          <h1>{carona.origem}</h1>

          {/* Destino */}
          <h1>{carona.destino}</h1>
        </div>
      </div>
      <div className="px-4 font-bold text-slate-900">
        <p className="text-center mb-2 pb-[.2rem] items-center rounded-[.5rem] w-25  bg-green-800 text-white ">
          Promoção
        </p>
        <div className="flex ">
          <div className="flex flex-col">
            <p>A partir de</p>
            <h1 className="text-3xl">R$:{carona.valor}</h1>
          </div>
          <div>
            <button>seta</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardCarona;
