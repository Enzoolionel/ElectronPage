/* eslint-disable react/prop-types */
const Card = ({ img, titulo, text }) => {
  return (
    <section className="h-64 w-72 m-auto p-4 py-8 rounded-md border-2 shadow-custom flex flex-col gap-4 items-center">
      <img src={img} className="h-14" alt="#" />
      <h1 className="text-2xl">{titulo}</h1>
      <p className="text-center text-lg tracking-tight text-slate-600">
        {text}
      </p>
    </section>
  );
};

export default Card;
