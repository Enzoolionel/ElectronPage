import Card from "../components/Card.jsx";
import store from "/icons/store.svg";
import house from "/icons/house.svg";
import truck from "/icons/truck.svg";

const ServiceSection = () => {
  return (
    <section className="flex flex-col mt-[100px] gap-10 bg-slate-50 p-10">
      <h1 className="text-4xl text-center font-medium mb-10">
        Servicios de Reparacion
      </h1>
      <div className="flex justify-center items-center flex-wrap flex-col sm:flex-row gap-10">
        <Card
          titulo="Visítanos"
          text="Trae tu electrodoméstico a nuestro local para un servicio más rápido."
          img={store}
        />
        <Card
          titulo="Envialo por Correo"
          text="Envía tu equipo por correo a nuestra dirección por Andreani o Correo Argentino"
          img={truck}
        />
        <Card
          titulo="Retiro a Domicilio"
          text="Podemos recoger el equipo en tu domicilio, sujeto a disponibilidad según tu ubicación."
          img={house}
        />
      </div>
    </section>
  );
};

export default ServiceSection;
