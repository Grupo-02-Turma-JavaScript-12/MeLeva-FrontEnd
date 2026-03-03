import { CiSearch } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { GoQuestion } from "react-icons/go";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/useAuth";

export function Navbar() {
  const { usuario, isLogado } = useAuth();
  const location = useLocation();

  if (location.pathname === "/login" || location.pathname === "/cadastro") {
    return null;
  }

  return (
    <div className="flex w-full justify-around items-center px-4 py-2 shadow top-0 left-0 fixed z-10 bg-white">
      <Link
        className="font-bold text-orange-500 px-3 py-1 text-center rounded-3xl hover:bg-orange-50"
        to="/"
      >
        <img src="/img/logo.png" alt="logo" className="w-35 items-center" />
      </Link>

      <div className="flex justify-between gap-8">
        <Link
          className="font-bold text-orange-500 px-3 py-1 text-center rounded-3xl hover:bg-orange-50"
          to="/"
        >
          Carona
        </Link>
        <Link
          className="font-bold text-orange-500 px-3 py-1 text-center rounded-3xl hover:bg-orange-50"
          to="/sobre"
        >
          Sobre
        </Link>
        <Link
          className="font-bold text-orange-500 px-3 py-1 text-center rounded-3xl hover:bg-orange-50"
          to="/contato"
        >
          Contato
        </Link>

        {isLogado && (
          <Link
            className="font-bold text-orange-500 px-3 py-1 text-center rounded-3xl hover:bg-orange-50"
            to="/minhas-reservas"
          >
            Minhas Reservas
          </Link>
        )}
      </div>

      <div className="flex justify-between gap-4 items-center">
        <a className="rounded-full hover:bg-amber-50 p-2" href="#">
          <CiSearch className="text-orange-500" size={24} />
        </a>
        <a className="rounded-full hover:bg-amber-50 p-2" href="#">
          <GoQuestion className="text-orange-500" size={24} />
        </a>

        <Link to="/oferecercorrida">
          <button className="rounded-3xl text-orange-500 border-2 font-bold border-orange-500 p-2 cursor-pointer hover:bg-orange-50">
            Oferecer carona
          </button>
        </Link>

        {isLogado && usuario ? (
          <Link
            className="rounded-full hover:bg-amber-50 p-2 flex items-center gap-2"
            to="/perfil"
          >
            {usuario.foto ? (
              <img
                src={usuario.foto}
                alt="Perfil"
                className="w-9 h-9 rounded-full object-cover"
              />
            ) : (
              <FaUserCircle className="text-orange-500" size={36} />
            )}
          </Link>
        ) : (
          <Link className="rounded-full hover:bg-amber-50 p-2" to="/login">
            <FaUserCircle className="text-orange-500" size={36} />
          </Link>
        )}
      </div>
    </div>
  );
}
