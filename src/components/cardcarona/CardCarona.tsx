export function CardCarona() {
  return (
    <div className="flex flex-col w-[20rem] justify-center mx-auto shadow-2xl rounded-2xl overflow-hidden pb-4">
      <div className="">
        <img
          className="flex justify-center"
          src="https://www.direcional.com.br/wp-content/uploads/2023/06/Boa-Viagem-Recife.webp"
          alt="recife"
        />
      </div>
      <div className="px-4 flex gap-2">
        <div className="mt-1 flex flex-col justify-center items-center ">
          <div className="border rounded-full p-1"></div>
          <div className=" h-4 w-1 bg-slate-800"></div>
          <div className="border rounded-full p-1"></div>
        </div>
        <div className="py-2 font-bold text-slate-900">
          <h1>João Pessoa</h1>
          <h1>Recife</h1>
        </div>
      </div>
      <div className="px-4 font-bold text-slate-900">
        <p className="text-center mb-2 pb-[.2rem] items-center rounded-lg w-25  bg-green-800 text-white ">
          Promoção
        </p>
        <p>A partir de</p>
        <h1 className="text-3xl">
          R$:23<span className="pt-2 text-sm">,75</span>
        </h1>
      </div>
    </div>
  );
}
