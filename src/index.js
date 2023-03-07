import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { DataProvider } from "./context/Dataprovider";
import { Cart } from "./componentes/Carrito";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DataProvider>
      <BrowserRouter>
        <App />
        <Cart />
      </BrowserRouter>
    </DataProvider>
  </React.StrictMode>
);
