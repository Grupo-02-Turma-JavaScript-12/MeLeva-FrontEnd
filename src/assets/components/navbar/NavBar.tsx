import { CiSearch } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { GoQuestion } from "react-icons/go";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div className="flex container justify-around mx-auto items-center px-4 py-2 shadow top-0 fixed z-10 bg-white">
      <img src="/img/logo.png" alt="logo" className="w-35 items-center" />

      <div className="flex justify-between gap-8">
        <Link
          className="font-bold  text-orange-500 px-3 py-1 text-center rounded-3xl hover:bg-orange-50"
          to="#"
        >
          Carona
        </Link>
        <Link
          className="font-bold text-orange-500 px-3 py-1 text-center rounded-3xl hover:bg-orange-50"
          to="#"
        >
          Sobre
        </Link>
        <Link
          className="font-bold text-orange-500 px-3 py-1 text-center rounded-3xl hover:bg-orange-50"
          to="#"
        >
          Contato
        </Link>
      </div>

      <div className="flex justify-between gap-4 items-center">
        <a className="rounded-full hover:bg-amber-50 p-2" href="#">
          <CiSearch className="text-orange-500 " size={24} />
        </a>

        <a className="rounded-full hover:bg-amber-50 p-2" href="#">
          <GoQuestion className="text-orange-500" size={24} />
        </a>

        <button className="rounded-3xl text-orange-500 border-2 font-bold border-orange-500 p-2 cursor-pointer hover:bg-orange-50">
          Oferecer carona
        </button>

        <Link className="rounded-full hover:bg-amber-50 p-2" to="/login">
  <FaUserCircle className="text-orange-500" size={38} />
</Link>

      </div>
    </div>
  );
}
