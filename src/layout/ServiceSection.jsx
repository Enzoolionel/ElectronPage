import Card from "../components/Card";
import store from "../../public/icons/store.svg";
import house from "../../public/icons/house.svg";
import truck from "../../public/icons/truck.svg";

const ServiceSection = () => {
  return (
    <section className="flex flex-col mt-20 gap-10 bg-slate-50 p-10">
      <h1 className="text-4xl text-center font-medium mb-10">
        Servicios de Reparacion
      </h1>
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
    </section>
  );
};

export default ServiceSection;
