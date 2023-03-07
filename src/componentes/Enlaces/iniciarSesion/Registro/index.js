import React from "react";
import "./registro.css";
import { NavLink } from "react-router-dom";

export default function Reg() {
  return (
    <div className="login-box">
      <h1>Registrarme</h1>
      <form>
        <label for="usuario"> Nombre y Apellidos </label>
        <input type="text" placeholder="Introduzca su nombre" />

        <label for="Correo"> Correo electrónico </label>
        <input type="text" placeholder="Introduzca su correo" />

        <label for="contraseña">Contraseña</label>
        <input type="password" placeholder="Introduzca su contraseña" />

        <input type="submit" value="Registrarme" />

        <NavLink to="/iniciarSesion">Iniciar sesion</NavLink>
      </form>
    </div>
  );
}
