import BtnCotizar from "../components/BtnCotizar.jsx";
import iconLi from "../../public/icons/circle-check-solid.svg";

const classItem = {
  p: "text-sm",
  h3: "font-bold text-cyan-900",
};

const MainSection = () => {
  return (
    <section className="xl:max-w-[80%] bg-cover border-t-2 border-gray-200 relative top-20">
      <article className="xl:max-w-full fondo py-10 w-screen h-72 flex flex-col gap-12 bg-center bg-cover ">
        <div className="w-screen p-5 h-44 bg-white bg-opacity-80 rounded-md">
          <h2 className="text-3xl font-bold">
            Reparacion de Electrodomesticos
          </h2>
          <h3 className="text-2xl">Electrónica en línea blanca</h3>
          <h4 className="text-gray-600">¿Se rompio tu equipo?</h4>
        </div>
        <BtnCotizar className="m-auto flex px-28 sm:relative sm:top-10 rounded-full" />
      </article>
      <ul className="bg-slate-50 rounded-md sm:w-[90%] m-auto flex flex-wrap gap-5 justify-evenly p-6 mt-5">
        <li className="w-40 flex items-center justify-center gap-2">
          <img src={iconLi} className="h-6" alt="icono" />
          <div>
            <p className={classItem.p}>Envios en</p>
            <h3 className={classItem.h3}>Todo el país</h3>
          </div>
        </li>
        <li className="w-40 flex items-center justify-center gap-2">
          <img src={iconLi} className="h-6" alt="icono" />
          <div>
            <p className={classItem.p}>Cuotas</p>
            <h3 className={classItem.h3}>Sin interés</h3>
          </div>
        </li>
        <li className="w-40 flex items-center justify-center gap-2">
          <img src={iconLi} className="h-6" alt="icono" />
          <div>
            <p className={classItem.p}>Garantia</p>
            <h3 className={classItem.h3}>Por 90 días</h3>
          </div>
        </li>
        <li className="w-40 flex items-center justify-center gap-2">
          <img src={iconLi} className="h-6" alt="icono" />
          <div>
            <p className={classItem.p}>Diagnostico</p>
            <h3 className={classItem.h3}>Gratis</h3>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default MainSection;
