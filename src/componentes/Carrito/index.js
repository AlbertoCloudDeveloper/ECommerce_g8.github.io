import React, { useContext } from "react";
import { DataContext } from "../../context/Dataprovider";

export const Cart = () => {
  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  const [cart, setCart] = value.cart;
  const [total] = value.total;

  const togglefalse = () => {
    setMenu(false);
  };

  const decrease = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.cantidad === 1 ? (item.cantidad = 1) : (item.cantidad -= 1);
      }
      setCart([...cart]);
    });
  };
  const add = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.cantidad += 1;
      }
      setCart([...cart]);
    });
  };

  const removeProducto = (id) => {
    if (window.confirm("¿Quieres eliminar este producto del carrito?")) {
      cart.forEach((item, index) => {
        if (item.id === id) {
          item.cantidad = 1;
          cart.splice(index, 1);
        }
      });
      setCart([...cart]);
    }
  };

  const show = menu ? "carts show" : "carts";
  const shownt = menu ? "cart show" : "cart";

  return (
    <div className={show}>
      <div className={shownt}>
        <div className="cartclose" onClick={togglefalse}>
          <box-icon name="x"></box-icon>
        </div>
        <h2>Carrito de compras</h2>
        <div className="cartcenter">
          {cart.length === 0 ? (
            <h2 style={{ textAlign: "center", fontSize: "3rem" }}>
              Carrito Vacio
            </h2>
          ) : (
            <>
              {cart.map((producto) => (
                <div className="cartitem" key={producto.id}>
                  <img src={producto.img} alt={producto.title} />
                  <div>
                    <h3>{producto.title}</h3>
                    <p className="price">${producto.price}</p>
                  </div>
                  <div>
                    <box-icon
                      name="up-arrow"
                      type="solid"
                      onClick={() => add(producto.id)}
                    />
                    <p className="cantidad">{producto.cantidad}</p>
                    <box-icon
                      name="down-arrow"
                      type="solid"
                      onClick={() => decrease(producto.id)}
                    />
                  </div>
                  <div
                    className="removeitem"
                    onClick={() => removeProducto(producto.id)}
                  >
                    <box-icon name="trash" type="solid" />
                  </div>
                </div>
              ))}
              
            </>
          )}
        </div>

        <div className="cartf">
          <h3>Total:${total}</h3>
          <button classname="btn">Pagar</button>
        </div>
      </div>
    </div>
  );
};
