import { useEffect, useState } from "react";
import {
  FaAdjust,
  FaBus,
  FaCalendarAlt,
  FaCar,
  FaTrain,
  FaUser,
} from "react-icons/fa";
import { FaVanShuttle } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { CarrosselCaronas } from "../components/carona/carrosselcaronas/CarrosselCaronas";
import { TempoViagem } from "../components/tempoviagem/TempoViagem";

export function Home() {
  const [cidades, setCidades] = useState<string[]>([]);
  const [origem, setOrigem] = useState("");
  const [destino, setDestino] = useState("");
  const [focoOrigem, setFocoOrigem] = useState(false);
  const [focoDestino, setFocoDestino] = useState(false);

  useEffect(() => {
    async function buscarCidades() {
      try {
        const resposta = await fetch(
          "https://servicodados.ibge.gov.br/api/v1/localidades/municipios?view=nivelado",
        );
        const dados = await resposta.json();

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const cidadesFormatadas = dados.map((m: any) => {
          return `${m["municipio-nome"]}, ${m["UF-sigla"]}`;
        });

        const cidadesUnicas = Array.from(new Set(cidadesFormatadas)).sort();
        setCidades(cidadesUnicas as string[]);
      } catch (error) {
        console.error("Erro ao buscar cidades do IBGE:", error);
        setCidades([
          "São Paulo, SP",
          "Rio de Janeiro, RJ",
          "Belo Horizonte, MG",
          "Salvador, BA",
          "Recife, PE",
          "João Pessoa, PB",
          "Fortaleza, CE",
          "Brasília, DF",
          "Curitiba, PR",
          "Manaus, AM",
        ]);
      }
    }

    buscarCidades();
  }, []);

  const filtroOrigem = origem
    ? cidades
        .filter((c) =>
          c
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .includes(
              origem
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, ""),
            ),
        )
        .slice(0, 6)
    : [];

  const navigate = useNavigate();

  const filtroDestino = destino
    ? cidades
        .filter((c) =>
          c
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .includes(
              destino
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, ""),
            ),
        )
        .slice(0, 6)
    : [];

  return (
    <div className="container w-4/5 mx-auto">
      <div className="flex justify-between gap-3 my-6">
        <div className="py-6 flex flex-col justify-center ">
          <h2 className="text-cyan-900 font-bold text-5xl">
            Viaje de forma inteligente:
          </h2>
          <h3 className="text-cyan-900 font-bold text-5xl">
            Divida os custos,
            <br /> multiplique as histórias.
          </h3>

          <div className="flex justify-around mt-20">
            <div className="p-3 border-2 border-orange-500 rounded-full">
              <FaCar size={30} className="text-orange-500" />
            </div>
            <div className="p-3 border-2 border-orange-500 rounded-full">
              <FaBus size={30} className="text-orange-500" />
            </div>
            <div className="p-3 border-2 border-orange-500 rounded-full">
              <FaVanShuttle size={30} className="text-orange-500" />
            </div>
            <div className="p-3 border-2 border-orange-500 rounded-full">
              <FaTrain size={30} className="text-orange-500" />
            </div>
          </div>
        </div>

        <img
          className="w-[35vw] rounded-2xl"
          src="/img/banner/aly.png"
          alt="Homem com mala sorrindo"
        />
      </div>

      <div className="sticky top-20 z-8 border-2 border-orange-500 rounded-2xl flex items-stretch mb-10 bg-white shadow-sm h-14 ">
        {/* Campo: Origem */}
        <div className="flex flex-1 items-center gap-2 px-4 relative">
          <FaAdjust className="text-gray-500 shrink-0" />
          <input
            type="text"
            value={origem}
            onChange={(e) => setOrigem(e.target.value)}
            onFocus={() => setFocoOrigem(true)}
            onBlur={() => setTimeout(() => setFocoOrigem(false), 200)}
            className="text-gray-800 w-full outline-none bg-transparent"
            placeholder={cidades.length === 0 ? "Carregando..." : "Saindo de"}
            disabled={cidades.length === 0}
          />
          {focoOrigem && origem && (
            <ul className="absolute top-[110%] left-0 w-full bg-white border border-gray-200 shadow-xl rounded-xl overflow-hidden flex flex-col">
              {filtroOrigem.length > 0 ? (
                filtroOrigem.map((cidade) => (
                  <li
                    key={`origem-${cidade}`}
                    onMouseDown={() => setOrigem(cidade)}
                    className="px-4 py-3 hover:bg-orange-50 cursor-pointer text-gray-700 transition"
                  >
                    {cidade}
                  </li>
                ))
              ) : (
                <li className="px-4 py-3 text-gray-500 text-sm">
                  Nenhuma cidade encontrada
                </li>
              )}
            </ul>
          )}
        </div>

        <div className="w-px bg-gray-300 my-2"></div>

        {/* Campo: Destino */}
        <div className="flex flex-1 items-center gap-2 px-4 relative">
          <FaAdjust className="text-gray-500 shrink-0" />
          <input
            type="text"
            value={destino}
            onChange={(e) => setDestino(e.target.value)}
            onFocus={() => setFocoDestino(true)}
            onBlur={() => setTimeout(() => setFocoDestino(false), 200)}
            className="text-gray-800 w-full outline-none bg-transparent"
            placeholder={cidades.length === 0 ? "Carregando..." : "Indo para"}
            disabled={cidades.length === 0}
          />
          {focoDestino && destino && (
            <ul className="absolute top-[110%] left-0 w-full bg-white border border-gray-200 shadow-xl rounded-xl overflow-hidden flex flex-col">
              {filtroDestino.length > 0 ? (
                filtroDestino.map((cidade) => (
                  <li
                    key={`destino-${cidade}`}
                    onMouseDown={() => setDestino(cidade)}
                    className="px-4 py-3 hover:bg-orange-50 cursor-pointer text-gray-700 transition"
                  >
                    {cidade}
                  </li>
                ))
              ) : (
                <li className="px-4 py-3 text-gray-500 text-sm">
                  Nenhuma cidade encontrada
                </li>
              )}
            </ul>
          )}
        </div>

        <div className="w-px bg-gray-300 my-2"></div>

        {/* Campo: Data */}
        <div className="flex flex-1 items-center gap-2 px-4 cursor-text">
          <FaCalendarAlt className="text-gray-500 shrink-0" />
          <input
            type="date"
            className="text-gray-800 w-full outline-none bg-transparent cursor-pointer"
          />
        </div>

        <div className="w-px bg-gray-300 my-2"></div>

        {/* Campo: Passageiro */}
        <div className="flex flex-1 items-center gap-2 px-4">
          <FaUser className="text-gray-500 shrink-0" />
          <input
            type="text"
            className="text-gray-800 w-full outline-none bg-transparent"
            placeholder="1 Passageiro"
          />
        </div>

        {/* Botão Pesquisar */}
        <button
          onClick={() => navigate("/carona")}
          className="bg-orange-500 text-white font-bold h-full px-8 hover:bg-orange-600 transition cursor-pointer flex items-center justify-center rounded-r-[14px]"
        >
          Pesquisar
        </button>
      </div>
      <CarrosselCaronas />
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
      <div className="pt-[1.1rem]">
        <TempoViagem />
      </div>
      {/* <TempoViagem /> */}
      <div className="flex flex-col items-center my-12 gap-12">
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
              sobrou muito mais dinheiro para aproveitar o destino! Além de ser
              super barato, a viagem foi leve e divertida. Fomos curtindo a
              paisagem pela janela, batendo papo e sem aquele estresse de
              dirigir por horas. Recomendo demais para quem quer viajar com os
              amigos e economizar de verdade. Nota 10!"
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
