import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../utils/firebase";
import { collection, getDocs } from "firebase/firestore";


const ItemListContainer = () => {

  const {id} = useParams();

  const [productos, setProductos] = useState([]);

  const traerData = async() => {
    const query = collection(db, "items");

    const response = await getDocs(query);

    const newProducts = [];

    response.docs.map(doc =>{
      const newProduct = {
        ...doc.data(),
        id: doc.id
      }

      newProducts.push(newProduct);

    })

    if (id) {
      const newResult = newProducts.filter(r=>r.category === id);
      setProductos(newResult);
    } else {
      setProductos(newProducts);
    }

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