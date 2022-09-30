import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../utils/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";


const ItemListContainer = () => {

  const {id} = useParams();

  const [productos, setProductos] = useState([]);

  const traerData = async() => {

    let queryRef;

    if (id) {
      queryRef = query(collection(db, "items"),where("category","==",id));
    } else {
      queryRef = collection(db, "items");
    }
    
    const response = await getDocs(queryRef);

    const newProducts = response.docs.map(doc =>{
      const newProduct = {
        ...doc.data(),
        id: doc.id
      }

      return newProduct;

    })

    setProductos(newProducts);

  }

  useEffect(() => {
    traerData();
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