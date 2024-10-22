import { Link } from "react-router-dom";
import secureIcon from "../../public/img/secure.png";
import afipIcon from "../../public/img/DATAWEB.jpg";
import house from "../../public/icons/house.svg";
const Footer = () => {
  return (
    <footer className="flex flex-col gap-4 items-center bg-gray-700 text-slate-200 p-10">
      <img className="h20 w-20 " src={house} alt="#" />
      <div className="flex gap-2">
        <img className="h-7 w-5 bg-cover" src={afipIcon} alt="#" />
        <img className="h-8 w-8 bg-cover" src={secureIcon} alt="#" />
      </div>
      <div className="flex w-screen justify-center items-center gap-1">
        <p className="text-xs font-bold">©️ 2024</p>
        <p>|</p>
        <Link className="text-xs font-bold underline">
          Términos y Condiciones
        </Link>
        <p>|</p>
        <Link className="text-xs font-bold underline">Privacidad</Link>
      </div>
      <p className="text-xs text-center">
        Todos los derechos reservados Electron. CUIT: 20-00000000-1 Buenos Aires
        | Argentina.
      </p>
      <p className="text-xs text-center">
        Los precios online y los planes de financiación para los productos
        presentados/publicados en Electron.com son válidos exclusivamente para
        la compra vía internet. La venta de cualquier producto o servicio
        publicado está sujeta a la verificación de stock y/o disponibilidad.
      </p>
      <h3 className="w-full relative top-10 text-end text-sm">
        🦆Desarrollado por <span className="hover:underline">_EnzooLionel</span>
      </h3>
    </footer>
  );
};

export default Footer;
