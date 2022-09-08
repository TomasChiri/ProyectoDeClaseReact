import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detalle from "./components/Detalle";
import Productos from "./components/Productos";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
       <Route exact path="/" element={<Productos />} />
       <Route exact path="/categoria/:genero" element={<Productos />} />
       <Route exact path="/productos/:id" element={<Detalle />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
