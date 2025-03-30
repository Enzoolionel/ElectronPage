import OpinionCard from "../components/OpinionCard.jsx";

const OpinionsSection = () => {
  return (
    <section className="flex flex-col bg-slate-50 mt-10 p-10 items-center">
      <h1 className="text-3xl text-center mb-5">
        Opiniones de nuestros clientes
      </h1>
      <h2 className="text-sm text-slate-500 mb-5 text-center">
        Guido 1068 B1878, Quilmes, Provincia de Buenos Aires
      </h2>
      <h3 className="mb-14">4.7 ⭐⭐⭐⭐⭐ 2115 opiniones</h3>
      <div className="w-[80%] flex flex-wrap flex-col sm:flex-row gap-10">
        <OpinionCard
          src={""}
          alt={""}
          title="Daniel Petrone"
          time="hace un mes"
          coment="Exelente atencion , muy buen trabajo y rapido, todo perfecto , muy recomendable"
        />
        <OpinionCard
          src={""}
          alt={""}
          title="Daniel Petrone"
          time="hace un mes"
          coment="Exelente atencion , muy buen trabajo y rapido, todo perfecto , muy recomendable"
        />
        <OpinionCard
          src={""}
          alt={""}
          title="Daniel Petrone"
          time="hace un mes"
          coment="Exelente atencion , muy buen trabajo y rapido, todo perfecto , muy recomendable"
        />
        <OpinionCard
          src={""}
          alt={""}
          title="Daniel Petrone"
          time="hace un mes"
          coment="Exelente atencion , muy buen trabajo y rapido, todo perfecto , muy recomendable"
        />
        <OpinionCard
          src={""}
          alt={""}
          title="Daniel Petrone"
          time="hace un mes"
          coment="Exelente atencion , muy buen trabajo y rapido, todo perfecto , muy recomendable"
        />
      </div>
    </section>
  );
};

export default OpinionsSection;
