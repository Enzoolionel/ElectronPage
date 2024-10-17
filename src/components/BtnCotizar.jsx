/* eslint-disable react/prop-types */
const BtnCotizar = ({ className }) => {
  return (
    <button
      className={`px-20 py-3 bg-orange-500 text-zinc-100 rounded-xl ${className}`}
    >
      Cotizar ahora!
    </button>
  );
};

export default BtnCotizar;
