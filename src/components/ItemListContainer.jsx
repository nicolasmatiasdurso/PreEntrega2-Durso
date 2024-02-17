
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import productosData from "../data/productos";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const [titulo, setTitulo] = useState("Productos");
  const categoria = useParams().categoria;

  useEffect(() => {
    let filteredProductos = productosData;

    if (categoria) {
      filteredProductos = productosData.filter(
        (producto) => producto.categoria === categoria
      );
      setTitulo(categoria);
    } else {
      setTitulo("Productos");
    }

    setProductos(filteredProductos);
  }, [categoria]);

  return (
    <>
      <div className="banner">{greeting}</div>
      <div>
        <ItemList productos={productos} titulo={titulo} />
      </div>
    </>
  );
};

export default ItemListContainer;
