import { Routes, Route } from "react-router-dom";
import Home from "./layout/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/servicios" exact element={<h2>servicios</h2>} />
      <Route path="/nosotros" exact element={<h2>Nosotros</h2>} />
      <Route path="/contacto" exact element={<h2>Contacto</h2>} />
      <Route path="/*" exact element={<h2>not found</h2>} />
    </Routes>
  );
};

export default App;
