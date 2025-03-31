import { motion } from "framer-motion";

import MainSection from "./Main.jsx";
import ServiceSection from "./ServiceSection.jsx";
import NavBar from "./NavBar.jsx";
import MarcasSection from "./MarcasSection.jsx";
import OpinionsSection from "./OpinionsSection.jsx";
import Footer from "./Footer.jsx";

const Home = () => {
  return (
    <motion.main
      className="xl:flex xl:flex-col items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
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
