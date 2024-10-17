/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Nav = ({ isActive }) => {
  return (
    <ul
      className={`transition-all flex gap-8 flex-col h-screen items-center px-6 py-12 ${
        isActive ? " static" : "-translate-x-full"
      } top-20 absolute left-0 w-screen bg-neutral-100 bg-opacity-95 border-t-2 border-gray-400 h-screen`}
    >
      <button className={`px-20 py-3 bg-orange-500 text-zinc-100 rounded-xl`}>
        Cotizar ahora!
      </button>
      <ul className="border shadow-custom h-44 w-full flex flex-col p-2 justify-center gap-4">
        <Link
          className="font-bold text-lg border-b-2 ml-3 pb-1 text-gray-700"
          to="/servicios"
        >
          ❓Servicio
        </Link>
        <Link
          className="font-bold text-lg border-b-2 ml-3 pb-1 text-gray-700"
          to="/nosotros"
        >
          🙋‍♂️Nosotros
        </Link>
        <Link
          className="font-bold text-lg border-b-2 ml-3 pb-1 text-gray-700"
          to="/contacto"
        >
          📞Contacto
        </Link>
      </ul>
    </ul>
  );
};

export default Nav;
