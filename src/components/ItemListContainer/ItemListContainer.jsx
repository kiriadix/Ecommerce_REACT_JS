import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react";


const ItemListContainer = () => {
  const [contador, setContador] = useState(1);
  const onAdd = (p) =>{
    setContador(contador + p)
  }

  return (
    <>

      <ItemCount stock={5} initial={contador} onAdd={onAdd} />

    </>
  )
}

export default ItemListContainer