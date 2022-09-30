import ItemDetail from "../ItemDetail/ItemDetail"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../utils/firebase";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {

  const {id} = useParams();

  const [producto, setProducto] = useState({});

  const getItem = async() => {
    const query = doc(db, "items", id);

    const response = await getDoc(query);

    const newProduct = {
      ...response.data(),
      id: response.id
    }

    setProducto(newProduct);
  }

  useEffect(() => {
    getItem();
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