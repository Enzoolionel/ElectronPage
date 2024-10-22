import { motion } from "framer-motion";

import MainSection from "./main.jsx";
import ServiceSection from "./ServiceSection.jsx";
import NavBar from "./NavBar.jsx";
import MarcasSection from "./MarcasSection.jsx";
import OpinionsSection from "./OpinionsSection.jsx";
import Footer from "./Footer.jsx";

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
