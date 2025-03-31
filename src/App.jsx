import { Routes, Route } from "react-router-dom";
import Home from "./layout/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/servicios" element={<h2>servicios</h2>} />
      <Route path="/nosotros" element={<h2>Nosotros</h2>} />
      <Route path="/contacto" element={<h2>Contacto</h2>} />
      <Route path="/*" element={<h2>not found</h2>} />
    </Routes>
  );
};

export default App;
