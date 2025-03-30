import { motion } from "framer-motion";

import Marca from "../components/Marca.jsx";
import apple from "/img/apple.png";
import hp from "/img/HP.png";
import lg from "/img/LG.png";
import motorola from "/img/Motorola.png";
import philips from "/img/Philips.png";
import nintendo from "/img/Nintendo.png";
import samsung from "/img/Samsung.png";
import lenovo from "/img/Lenovo.png";
import xbox from "/img/Xbox.png";
import huawei from "/img/Huawei.png";
import asus from "/img/Asus.png";
import sony from "/img/Sony_Log.png";

const MarcasSection = () => {
  return (
    <motion.section
      initial={{ opacity: 5 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 2 }}
      className="flex flex-col text-center mt-10 items-center p-6 bg-slate-50"
    >
      <h1 className="text-3xl mb-2">Trabajamos con todas las marcas</h1>
      <h2 className="text-lg mb-10 text-gray-700">
        Las mejores marcas a tu servicio
      </h2>
      <section className="grid grid-cols-3 sm:grid-cols-6 gap-4 p-2">
        <Marca src={apple} />
        <Marca src={hp} />
        <Marca src={lg} />
        <Marca src={motorola} />
        <Marca src={philips} />
        <Marca src={nintendo} />
        <Marca src={lenovo} />
        <Marca src={xbox} />
        <Marca src={huawei} />
        <Marca src={asus} />
        <Marca src={sony} />
        <Marca src={samsung} />
      </section>
    </motion.section>
  );
};

export default MarcasSection;
