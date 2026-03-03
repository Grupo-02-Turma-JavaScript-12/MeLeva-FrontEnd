import { useEffect, useState } from "react";
import type { Carona } from "../../../models/Carona";
import { buscar } from "../../../services/services";
import { CardCarona } from "../cardcarona/CardCarona";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface CarrosselProps {
  filtros?: { origem: string; destino: string };
}

export function CarrosselCaronas({ filtros }: CarrosselProps) {
  const [caronas, setCaronas] = useState<Carona[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    buscarCaronas();
  }, []);

  async function buscarCaronas() {
    try {
      setLoading(true);
      await buscar("/caronas", setCaronas);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  const normalizarTexto = (texto: string) =>
    texto
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

  const caronasFiltradas = caronas.filter((c) => {
    const matchOrigem = filtros?.origem
      ? normalizarTexto(c.origem).includes(normalizarTexto(filtros.origem))
      : true;
    const matchDestino = filtros?.destino
      ? normalizarTexto(c.destino).includes(normalizarTexto(filtros.destino))
      : true;
    return matchOrigem && matchDestino;
  });

  return (
    <div className="flex flex-col gap-2 overflow-hidden">
      <h1 className="text-center text-slate-800 font-bold mb-4 text-[2rem]">
        {filtros?.origem || filtros?.destino
          ? "Resultados da sua pesquisa"
          : "Sua próxima carona pelo melhor preço."}
      </h1>
      <div>
        {loading ? (
          <h2 className="text-center text-xl font-semibold">
            Carregando caronas...
          </h2>
        ) : caronasFiltradas.length > 0 ? (
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            slidesPerView={3}
          >
            {caronasFiltradas.map((carona) => (
              <SwiperSlide
                key={carona.id}
                className="flex pb-20 justify-center overflow-hidden px-4"
              >
                <CardCarona carona={carona} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <h1 className="text-center mb-5 font-semibold text-gray-500">
            Nenhuma carona encontrada para esta rota.
          </h1>
        )}
      </div>
    </div>
  );
}
