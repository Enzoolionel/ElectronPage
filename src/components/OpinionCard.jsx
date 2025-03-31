import unamed from "../../public/img/unnamed.png";
/* eslint-disable react/prop-types */
const OpinionCard = ({ alt, title, time, coment }) => {
  return (
    <article className="h-60 w-72 m-auto bg-white px-4 rounded-lg border-2 shadow-custom flex flex-col gap-4 items-center">
      <img
        className="bg-slate-100 h-14 w-14 rounded-full bottom-7 relative shadow-lg"
        src={unamed}
        alt={alt}
      />
      <h1 className="font-bold text-blue-900">{title}</h1>
      <div className="flex items-center">
        <h3>
          ⭐⭐⭐⭐⭐ <span className="text-xs text-gray-500">{time}</span>
        </h3>
      </div>
      <p className="text-center text-slate-700">{coment}</p>
    </article>
  );
};

export default OpinionCard;
