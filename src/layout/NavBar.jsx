import { useState } from "react";
import { Menu, X, Wrench, Users, Phone } from "lucide-react"; // Iconos modernos
import Nav from "../components/Nav.jsx";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.documentElement.style.overflow = isOpen ? "auto" : "hidden";
  };

  return (
    <nav className="fixed flex sm:px-8 w-full bg-slate-50 text-slate-800 shadow-md z-20">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h2 className="text-2xl font-bold tracking-wide">Electron</h2>

        {/* Botón hamburguesa */}
        <button className="sm:hidden" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menú principal */}
        <div
          className={`sm:flex absolute sm:static top-16 left-0 w-full sm:w-auto sm:bg-transparent transition-all ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <Nav isActive={isOpen} />
        </div>
      </div>

      {/* Iconos fuera del nav, visibles en tamaños lg y mayores */}
      <div className="hidden md:flex items-center justify-center gap-4">
        {" "}
        <Link
          className="font-bold text-sm ml-3 pb-1 hover:text-[#003e4f] transition flex items-center gap-2"
          to="/servicios"
        >
          <Wrench size={20} /> Servicio
        </Link>{" "}
        <Link
          className="font-bold text-sm ml-3 pb-1 hover:text-[#003e4f] transition flex items-center gap-2"
          to="/nosotros"
        >
          <Users size={20} /> Nosotros
        </Link>{" "}
        <Link
          className="font-bold text-sm ml-3 pb-1 hover:text-[#003e4f] transition flex items-center gap-2"
          to="/contacto"
        >
          <Phone size={20} /> Contacto
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
