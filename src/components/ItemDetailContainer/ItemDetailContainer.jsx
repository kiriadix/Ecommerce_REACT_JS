import ItemDetail from "../ItemDetail/ItemDetail"
import data from "../ItemListContainer/data"
import { useState, useEffect } from "react";

const ItemDetailContainer = () => {

  const [producto, setProducto] = useState({});

  const getItem = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  })

  useEffect(() => {
    getItem.then((result) => {
      setProducto(result[2]);
    })
  }, [])

  return (
    <>
      {
        Object.entries(producto).length === 0 ? (
          <div> Cargando... </div>
        ) : (
          <ItemDetail item={producto}/>
        )
        
      }
    </>
  )
}

export default ItemDetailContainer