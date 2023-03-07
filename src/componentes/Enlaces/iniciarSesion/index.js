import React from "react";
import "./iniciarsesion.css";
import { NavLink } from "react-router-dom";

export default function Sesion() {
  return (
    <div className="login-box">
      <h1>Iniciar sesion</h1>

      <form>
        <label for="username">Nombre de usuario</label>
        <input type="text" placeholder="Introduzca su usuario" />

        <label for="password">Contraseña</label>
        <input type="password" placeholder="Introduzca su contraseña" />

        <input type="submit" value="Iniciar Sesión" />
        <a>
          <NavLink to="/Registro">¿No tienes usuario? Regístrate</NavLink>
        </a>
        <div>
          <a>
          <NavLink to="/Admin">Administrar inventario</NavLink>
          </a>
        </div>
      </form>
    </div>
  );
}
