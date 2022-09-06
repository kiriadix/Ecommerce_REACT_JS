import data from "./data";
import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";


const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);

  const traerData = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  })

  useEffect(() => {
    traerData.then((result) => {
      setProductos(result);
    })
  }, [])
  

  return (
    <>

      {<ItemList items={productos} />}

    </>
  )
}

export default ItemListContainer