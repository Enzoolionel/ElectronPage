import { motion } from "framer-motion";

import MainSection from "./main";
import ServiceSection from "./ServiceSection";
import NavBar from "./NavBar";
import MarcasSection from "./MarcasSection";
import OpinionsSection from "./OpinionsSection";
import Footer from "./Footer";

const Home = () => {
  return (
    <motion.main initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <NavBar />
      <MainSection />
      <ServiceSection />
      <MarcasSection />
      <OpinionsSection />
      <Footer />
    </motion.main>
  );
};

export default Home;
