import ItemDetail from "../ItemDetail/ItemDetail"
import data from "../ItemListContainer/data"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

  const {id} = useParams();

  const [producto, setProducto] = useState({});

  const getItem = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  })

  useEffect(() => {
    getItem.then((result) => {
      const newResult = result.filter(r=>r.id === parseInt(id));
      setProducto(newResult[0]);
    })
  }, [id])

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