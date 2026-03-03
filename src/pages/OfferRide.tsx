import { MapPin } from "lucide-react";
import { useEffect, useState, type ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { useAuth } from "../contexts/useAuth";

export function OfferRide() {
  const navigate = useNavigate();

  const { usuario, token } = useAuth();

  const [carregando, setCarregando] = useState(false);
  const [tempoEstimado, setTempoEstimado] = useState("");

  const [formData, setFormData] = useState({
    origem: "",
    destino: "",
    distancia: "",
    vagas_disponiveis: 1,
    Foto_destino: "",
    valor: "",
  });

  useEffect(() => {
    if (!usuario) {
      alert("Você precisa fazer login para oferecer uma carona.");
      navigate("/login");
    }
  }, [usuario, navigate]);

  useEffect(() => {
    const calcularTempo = async () => {
      const dist = Number(formData.distancia);
      if (dist > 0) {
        try {
          const { data } = await api.get(`/caronas/calcular/tempo`, {
            params: { distancia: dist, velocidade: 60 },
          });
          setTempoEstimado(data.tempo_estimado);
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (e) {
          setTempoEstimado("");
        }
      } else {
        setTempoEstimado("");
      }
    };
    const timer = setTimeout(calcularTempo, 500);
    return () => clearTimeout(timer);
  }, [formData.distancia]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!usuario) return;

    try {
      const payload = {
        origem: formData.origem,
        destino: formData.destino,
        Foto_destino:
          formData.Foto_destino ||
          "https://www.direcional.com.br/wp-content/uploads/2023/06/Boa-Viagem-Recife.webp",
        valor: Number(formData.valor),
        vagas_disponiveis: formData.vagas_disponiveis,
        motorista: {
          id: usuario.id,
        },
      };

      setCarregando(true);

      await api.post("/caronas", payload, {
        headers: { Authorization: `Bearer ${token}` },
      });

      alert("Carona publicada com sucesso! 🚗");
      navigate("/");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error(error);
      alert("Erro ao publicar carona. Verifique se os dados estão corretos.");
    } finally {
      setCarregando(false);
    }
  };

  if (!usuario) return null;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4 font-['Poppins']">
      <div className="max-w-xl w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
        <form onSubmit={handleSubmit} className="p-8 space-y-5">
          <h2 className="text-2xl font-extrabold text-[#342d70] text-center mb-6">
            Oferecer Carona
          </h2>

          <div className="space-y-4">
            <div>
              <label className="text-xs font-bold text-gray-500 uppercase">
                Origem
              </label>
              <div className="mt-1 flex items-center bg-gray-100 rounded-xl px-4 py-3">
                <MapPin className="text-orange-500 mr-3" size={18} />
                <input
                  type="text"
                  name="origem"
                  className="bg-transparent w-full outline-none"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-gray-500 uppercase">
                Destino
              </label>
              <div className="mt-1 flex items-center bg-gray-100 rounded-xl px-4 py-3">
                <MapPin className="text-[#342d70] mr-3" size={18} />
                <input
                  type="text"
                  name="destino"
                  className="bg-transparent w-full outline-none"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase">
                  Km
                </label>
                <input
                  type="number"
                  name="distancia"
                  className="mt-1 w-full bg-gray-100 rounded-xl px-4 py-3 outline-none"
                  onChange={handleChange}
                  required
                />
                {tempoEstimado && (
                  <p className="text-[10px] text-orange-600 font-bold mt-1">
                    ⏱ {tempoEstimado}
                  </p>
                )}
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase">
                  Preço
                </label>
                <input
                  type="number"
                  step="0.01"
                  name="valor"
                  className="mt-1 w-full bg-gray-100 rounded-xl px-4 py-3 outline-none"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-gray-500 uppercase">
                Vagas
              </label>
              <div className="mt-1 flex items-center justify-between bg-gray-100 rounded-xl px-6 py-3">
                <span className="font-bold">{formData.vagas_disponiveis}</span>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      setFormData((p) => ({
                        ...p,
                        vagas_disponiveis: Math.max(1, p.vagas_disponiveis - 1),
                      }))
                    }
                    className="w-8 h-8 bg-white rounded shadow cursor-pointer hover:bg-gray-50"
                  >
                    -
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setFormData((p) => ({
                        ...p,
                        vagas_disponiveis: Math.min(8, p.vagas_disponiveis + 1),
                      }))
                    }
                    className="w-8 h-8 bg-white rounded shadow cursor-pointer hover:bg-gray-50"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={carregando}
            className="w-full bg-[#342d70] hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg transition-all disabled:opacity-50 cursor-pointer"
          >
            {carregando ? "ENVIANDO..." : "PUBLICAR CARONA"}
          </button>
        </form>
      </div>
    </div>
  );
}
