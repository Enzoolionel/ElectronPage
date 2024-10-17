import { motion } from "framer-motion";

import Marca from "../components/Marca";
import apple from "../../public/img/apple.png";
import hp from "../../public/img/HP.png";
import lg from "../../public/img/LG.png";
import motorola from "../../public/img/motorola.png";
import philips from "../../public/img/philips.png";
import nintendo from "../../public/img/nintendo.png";
import samsung from "../../public/img/samsung.png";
import lenovo from "../../public/img/lenovo.png";
import xbox from "../../public/img/xbox.png";
import huawei from "../../public/img/huawei.png";
import asus from "../../public/img/asus.png";
import hisense from "../../public/img/hisense.png";
import sony from "../../public/img/sony_log.png";

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
