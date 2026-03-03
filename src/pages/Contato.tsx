export function Contato() {
  return (
    <div className="container w-4/5 mx-auto py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-cyan-900 mb-4">Fale Conosco</h1>
        <p className="text-gray-600">
          Dúvidas, sugestões ou problemas? Estamos aqui para ajudar.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-12 bg-white rounded-3xl shadow-lg p-8">
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-cyan-900">
            Informações de Contato
          </h2>
          <div className="text-gray-700">
            <p className="font-bold">E-mail:</p>
            <p>suporte@meleva.com.br</p>
          </div>
          <div className="text-gray-700">
            <p className="font-bold">Telefone:</p>
            <p>(11) 99999-9999</p>
          </div>
          <div className="text-gray-700">
            <p className="font-bold">Endereço:</p>
            <p>Av. Paulista, 1000 - São Paulo, SP</p>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <form className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Nome
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                E-mail
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Mensagem
              </label>
              <textarea
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              ></textarea>
            </div>
            <button
              type="button"
              className="bg-orange-500 text-white font-semibold py-2 rounded-lg hover:bg-orange-600 transition cursor-pointer"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
