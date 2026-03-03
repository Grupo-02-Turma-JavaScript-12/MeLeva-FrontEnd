export function Sobre() {
  return (
    <div className="container w-4/5 mx-auto py-12">
      <div className="bg-cyan-950 text-white rounded-3xl p-12 text-center mb-12">
        <h1 className="text-5xl font-bold mb-6">Sobre o MeLeva Carona</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Nascemos da vontade de conectar pessoas, reduzir custos de viagem e
          ajudar o meio ambiente. Acreditamos que cada assento vazio em um carro
          é uma oportunidade para uma nova história.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold text-cyan-900 mb-6">
            Nossa Missão
          </h2>
          <p className="text-gray-700 text-lg mb-4">
            Transformar a mobilidade intermunicipal e interestadual, tornando-a
            mais acessível, sustentável e colaborativa. Queremos que você viaje
            mais, gastando menos e fazendo novas amizades pelo caminho.
          </p>
          <p className="text-gray-700 text-lg">
            Garantimos segurança com nosso sistema de avaliações rigorosas e
            verificação de motoristas e passageiros, para que sua única
            preocupação seja aproveitar a viagem.
          </p>
        </div>
        <div>
          <img
            src="/img/banner/time.png"
            alt="Nossa missão"
            className="rounded-3xl shadow-lg w-full"
          />
        </div>
      </div>
    </div>
  );
}
