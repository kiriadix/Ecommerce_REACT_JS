import data from "./data";
import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {

  const {id} = useParams();

  const [productos, setProductos] = useState([]);

  const traerData = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  })

  useEffect(() => {
    traerData.then((result) => {
      if (id) {
        const newResult = result.filter(r=>r.category === id);
        setProductos(newResult);
      } else {
        setProductos(result);
      }
      
    })
  }, [id])
  

  return (
    <>

      {
        productos.length === 0 ? (<div>Cargando...</div>) : (<ItemList items={productos} />)
      }

    </>
  )
}

export default ItemListContainer