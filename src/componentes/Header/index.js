import React, {useContext} from "react";
import Logo from "../../img/LOGO.PNG";
import { NavLink } from "react-router-dom";
import { DataContext } from "../../context/Dataprovider";

export const Header = () => {
  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  const [cart] = value.cart

  const toggleMenu = () => {
    setMenu(!menu)
  }
  return (
    <header>
      <div className="logo">
        <NavLink to="/">
          <img src={Logo} alt="" />
        </NavLink>
        <a1>DOTAZIONI</a1>
      </div>

      <ul>
        <li>
          <NavLink to="/">Inicio</NavLink>
        </li>
        <li>
          <NavLink to="/quienes_somos">Quienes somos</NavLink>
        </li>
        <li>
          <NavLink to="/ayuda">Ayuda</NavLink>
        </li>
        <li>
          <NavLink to="/politicas">Politicas de la tienda</NavLink>
        </li>
        <li>
          <NavLink to="/iniciarSesion">Iniciar sesion</NavLink>
        </li>
      </ul>
      <div className="car" onClick={toggleMenu}>
        <box-icon type="solid" name="cart"></box-icon>
        <span className="total">{cart.length}</span>
      </div>
    </header>
  );
};
