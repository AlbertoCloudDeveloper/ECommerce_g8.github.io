import React, { useContext } from "react";
import { DataContext } from "../../context/Dataprovider";
import { ProductItem } from "./Productoitem";

export default function Productos() {
  const value = useContext(DataContext);
  const [productos] = value.productos;
  console.log(productos);

  return (
    <>
      <h1 className="title">PRODUCTOS</h1>
      <div className="productos">
        {productos.map((producto) => (
          <ProductItem
            id={producto.id}
            title={producto.title}
            price={producto.price}
            img={producto.img}
            cantidad={producto.cantidad}
          />
        ))}
      </div>
    </>
  );
}
