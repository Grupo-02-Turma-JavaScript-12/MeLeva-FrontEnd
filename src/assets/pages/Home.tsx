import {
  FaAdjust,
  FaBus,
  FaCalendarAlt,
  FaCar,
  FaTrain,
  FaUser,
} from "react-icons/fa";
import { FaVanShuttle } from "react-icons/fa6";

export function Home() {
  return (
    <div className="container w-4/5 mx-auto">
      <div className=" flex justify-between gap-3 my-6">
        <div className="py-6 flex flex-col justify-center ">
          <h2 className="text-cyan-900 font-bold text-5xl">
            Viaje de forma inteligente:
          </h2>
          <h3 className="text-cyan-900 font-bold text-5xl">
            Divida os custos,
            <br /> multiplique as histórias.
          </h3>

          <div className="flex justify-around mt-20">
            <div className="p-3  border-2 border-orange-500 rounded-full ">
              <FaCar size={30} className="text-orange-500" />
            </div>

            <div className="p-3  border-2 border-orange-500 rounded-full ">
              <FaBus size={30} className="text-orange-500" />
            </div>

            <div className="p-3  border-2 border-orange-500 rounded-full ">
              <FaVanShuttle size={30} className="text-orange-500" />
            </div>

            <div className="p-3  border-2 border-orange-500 rounded-full ">
              <FaTrain size={30} className="text-orange-500" />
            </div>
          </div>
        </div>

        <img
          className="w-[35vw] rounded-2xl "
          src="/img/banner/aly.png"
          alt=""
        />
      </div>

      <div className="border-2 border-orange-500 rounded-2xl flex justify-between gap-2 items-center pl-3 mb-10">
        <div className="flex items-center gap-2">
          <FaAdjust color="#586680" className="text-gray-800 " />
          <input
            type="text"
            className="text-gray-800 border-none "
            placeholder="Saindo de"
          />
        </div>
        <div className="h-6 w-0.5 bg-gray-200"></div>
        <div className="flex items-center gap-2">
          <FaAdjust color="#586680" className="text-gray-800 " />
          <input
            type="text"
            className="text-gray-800 "
            placeholder="Indo para"
          />
        </div>
        <div className="h-6 w-0.5 bg-gray-200"></div>
        <div className="flex items-center gap-2">
          <FaCalendarAlt color="#586680" className="text-gray-800 " />
          <input type="data" className="text-gray-800 " placeholder="Data" />
        </div>
        <div className="h-6 w-0.5 bg-gray-200"></div>
        <div className="flex items-center gap-2">
          <FaUser color="#586680" className="text-gray-800 " />
          <input
            type="text"
            className="text-gray-800 "
            placeholder="1 Passageiro"
          />
        </div>

        <button className="bg-orange-500 w-1/5 h-full text-white rounded-r-2xl cursor-pointer hover:bg-orange-600 p-3">
          Pesquisar
        </button>
      </div>

      <div className="text-center bg-cyan-950 p-14 rounded-3xl text-white flex flex-col gap-6">
        <h3 className="font-bold text-4xl">
          Ofereça uma carona. Corte seus custos.
        </h3>
        <p>
          Ofereça caronas como condutor e transforme seus lugares vazios em
          menor custo de viagem. É simples: compartilhe sua viagem e encontre
          passageiros para dividir as despesas de combustível e pedágio.
        </p>

        <button className="bg-white rounded-2xl p-4 w-1/3 font-bold text-md mx-auto text-black cursor-pointer hover:bg-cyan-50">
          Oferecer carona
        </button>
      </div>

      <div className="flex-col flex items-center my-45 gap-30 ">
        <div className="flex gap-8">
          <img
            src="/img/banner/app.png"
            className="w-1/2 rounded-3xl"
            alt="foto do app"
          />
          <div className="flex flex-col gap-5">
            <h3 className="font-bold text-4xl text-cyan-900">
              Avaliações Automáticas. Mais viagens confiáveis.
            </h3>

            <p>
              Estamos lançando as Avaliações Automáticas para tornar os perfis
              mais justos e precisos. Se nenhuma avaliação for deixada após 14
              dias, caronas bem sucedidas recebem 5 estrelas para recompensar os
              ótimos membros. Cancelamentos de última hora ou não
              comparecimentos receberão 1 estrela, exceto na primeira vez.
              Assim, os perfis ficam mais precisos para que você possa reservar
              com mais confiança!
            </p>

            <button className="rounded-3xl bg-amber-500 text-white p-4 cursor-pointer w-1/7">
              Partiu!
            </button>
          </div>
        </div>

        <div className="flex flex-row-reverse gap-8">
          <img
            src="/img/banner/onibus.png"
            className="w-1/2 rounded-3xl"
            alt="foto do app"
          />
          <div className="flex flex-col gap-5">
            <h3 className="font-bold text-4xl text-cyan-900">
              Clientes Satisfeitos
            </h3>

            <p>
              "Sempre tive receio de viajar sem ser no meu próprio carro, mas o
              MeLeva mudou totalmente minha visão. A economia foi o ponto alto:
              sobrou muito mais dinheiro para aproveitar o destino! <br />
              Além de ser super barato, a viagem foi leve e divertida. Fomos
              curtindo a paisagem pela janela, batendo papo e sem aquele
              estresse de dirigir por horas. Recomendo demais para quem quer
              viajar com os amigos e economizar de verdade. Nota 10!"
            </p>

            <button className="rounded-3xl bg-amber-500 text-white p-4 cursor-pointer w-1/7">
              Partiu!
            </button>
          </div>
        </div>

        <div className="flex gap-8">
          <img
            src="/img/banner/moto.png"
            className="w-1/2 rounded-3xl"
            alt="foto do app"
          />
          <div className="flex flex-col gap-5">
            <h3 className="font-bold text-4xl text-cyan-900">
              R$ 2000 por ano só de gasolina!
            </h3>

            <p>
              "A MeLeva mudou tudo para mim. Minha viagem de rotina de 180 km
              custava R$95 só de gasolina. Agora, com a BlaBlaCar, eu recupero
              cerca de R$75 em cada viagem. Fazendo isso duas vezes por mês,
              economizo quase R$2000 por ano só de gasolina!"
            </p>

            <button className="rounded-3xl bg-amber-500 text-white p-4 cursor-pointer w-1/7">
              Partiu!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
