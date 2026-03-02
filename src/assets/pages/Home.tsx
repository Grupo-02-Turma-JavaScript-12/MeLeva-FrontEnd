import {
  FaAdjust,
  FaBus,
  FaCalendarAlt,
  FaCar,
  FaTrain,
  FaUser,
} from "react-icons/fa";
import { FaVanShuttle } from "react-icons/fa6";

function Home() {
  return (
    <div className="container w-4/5 mx-auto">
      <div className=" flex justify-between gap-3 my-6">
        <div className="py-6 flex flex-col justify-center ">
          <h2 className="text-orange-500 font-bold text-5xl">
            Viaje de forma inteligente:
          </h2>
          <h3 className="text-orange-500 font-bold text-5xl">
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

        <img className=" w-1/2 rounded-2xl " src="/img/banner/aly.png" alt="" />
      </div>

      <div className="border-2 border-orange-500 rounded-2xl flex justify-between gap-2 items-center pl-3 mb-10">
        <div className="flex items-center gap-2">
          <FaAdjust color="#586680" className="text-gray-800 " />
          <input
            type="text"
            className="text-gray-800 "
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
    </div>
  );
}

export default Home;
