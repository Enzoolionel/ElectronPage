/* eslint-disable react/prop-types */
const Marca = ({ alt, src }) => {
  return (
    <article className="h-20 w-20 p-2 bg-white shadow-lg flex justify-center items-center rounded-lg">
      <img src={src} alt={alt} />
    </article>
  );
};

export default Marca;
