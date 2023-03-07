import React, {useContext} from "react";
import { DataContext } from "../../context/Dataprovider";

export const ProductItem = ({ 
        id, 
        title, 
        price, 
        img 
  }) => {

    const value = useContext(DataContext);
    const addCart = value.addCart;

  return (
    <div className="producto">
      <a href="#">
        <div className="imgprod">
          <img src={img} alt={title} />
        </div>
      </a>
      <div className="pfoot">
        <h1>{title}</h1>
        <p className="price">${price}</p>
      </div>
      <div className="button">
        <button className="btn" onClick={() => addCart(id)}>Agregar al carrito</button>
      </div>
    </div>
  );
};
