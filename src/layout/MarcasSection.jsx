import { motion } from "framer-motion";

import Marca from "../components/Marca.jsx";
import apple from "../../public/img/apple.png";
import hp from "../../public/img/HP.png";
import lg from "../../public/img/LG.png";
import motorola from "../../public/img/Motorola.png";
import philips from "../../public/img/Philips.png";
import nintendo from "../../public/img/Nintendo.png";
import samsung from "../../public/img/Samsung.png";
import lenovo from "../../public/img/Lenovo.png";
import xbox from "../../public/img/Xbox.png";
import huawei from "../../public/img/Huawei.png";
import asus from "../../public/img/Asus.png";
import hisense from "../../public/icons/hisense.png";
import sony from "../../public/img/Sony_Log.png";

const MarcasSection = () => {
  return (
    <motion.section
      initial={{ opacity: 5 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 2 }}
      className="flex flex-col text-center mt-20 items-center p-6 bg-slate-50"
    >
      <h1 className="text-3xl mb-2">Trabajamos con todas las marcas</h1>
      <h2 className="text-lg mb-10 text-gray-700">
        Las mejores marcas a tu servicio
      </h2>
      <section className="grid grid-cols-3 gap-4 p-2">
        <Marca src={apple} />
        <Marca src={hp} />
        <Marca src={lg} />
        <Marca src={motorola} />
        <Marca src={philips} />
        <Marca src={nintendo} />
        <Marca src={lenovo} />
        <Marca src={xbox} />
        <Marca src={hisense} />
        <Marca src={huawei} />
        <Marca src={asus} />
        <Marca src={sony} />
        <Marca src={samsung} />
      </section>
    </motion.section>
  );
};

export default MarcasSection;
