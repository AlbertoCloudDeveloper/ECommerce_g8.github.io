import React from "react";
import "boxicons";
import { Routes, Route } from "react-router-dom";
import { Header } from "./componentes/Header";
//En esta parte voy a importar las páginas que se verán cuando se cree la navegación
import Start from "./componentes/main";
import Quien from "./componentes/Enlaces/quienes_somos";
import Ayuda from "./componentes/Enlaces/ayuda";
import Politi from "./componentes/Enlaces/politicas";
import Sesion from "./componentes/Enlaces/iniciarSesion";
import Reg from "./componentes/Enlaces/iniciarSesion/Registro";
import Admin from "./componentes/Enlaces/iniciarSesion/Admin";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/quienes_somos" element={<Quien />} />
        <Route path="/ayuda" element={<Ayuda />} />
        <Route path="/politicas" element={<Politi />} />
        <Route path="/iniciarSesion" element={<Sesion />} />
        <Route path="/Registro" element={<Reg />} />
        <Route path="/Admin" element={<Admin />} />
      </Routes>
    </div>
  );
}
export default App;
