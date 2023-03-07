import React from "react";
import "./formulario.css";
import { NavLink } from "react-router-dom";

export default function Admin() {
    return (
        <div className="login-box">
        <h1> Administrador de productos </h1>
        <form>
          <label for="username">Nombre del producto</label>
          <input type="text" placeholder="Introduzca el nombre del producto"/>  
          <label for="number">Precio</label>
          <input type="number" placeholder="Introduzca el precio"/>  
          <label for="text">URL</label>
          <input type="text" placeholder="Introduzca la URL"/>          
          <input type="submit" value="Agregar producto"/>
          <input type="submit" value="Editar"/>
          <input type="submit" value="Borrar"/>
          <input type="submit" value="Guardar"/>
        </form>
      </div>
    );
  }
  
