/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Wrench, Users, Phone, Home } from "lucide-react";

const Nav = ({ isActive }) => {
  return (
    <ul
      className={`${
        isActive ? "h-screen static" : "hidden"
      } transition-all md:hidden flex gap-8 flex-col items-center px-6 py-12  absolute left-0 w-screen top-0 bg-slate-50 border-t-2 border-gray-400`}
    >
      <button className={`px-20 py-3 bg-orange-500 text-zinc-100 rounded-xl`}>
        Cotizar ahora!
      </button>
      <ul className="shadow-custom h-60 w-full flex flex-col p-2 justify-center gap-4">
        <Link
          className="font-bold text-lg border-b-2 ml-3 pb-1 hover:text-[#003e4f] transition flex items-center gap-2"
          to="/"
        >
          <Home size={20} /> Inicio
        </Link>{" "}
        <Link
          className="font-bold text-lg border-b-2 ml-3 pb-1 hover:text-[#003e4f] transition flex items-center gap-2"
          to="/servicios"
        >
          <Wrench size={20} /> Servicio
        </Link>
        <Link
          className="font-bold text-lg border-b-2 ml-3 pb-1 hover:text-[#003e4f] transition flex items-center gap-2"
          to="/nosotros"
        >
          <Users size={20} />
          Nosotros
        </Link>
        <Link
          className="font-bold text-lg border-b-2 ml-3 pb-1 hover:text-[#003e4f] transition flex items-center gap-2"
          to="/contacto"
        >
          <Phone size={20} />
          Contacto
        </Link>
      </ul>
    </ul>
  );
};

export default Nav;
