import React, {useState} from 'react'

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
        for (let i = 0; i < items.length; i++) {
            let actual = items[i];
            if (actual.id === item.id) {
                items[i].quantity += quantity;
            }
        }
    } else {
        item.quantity=quantity;
        items.push(item);
    }

    setItems(items);

    GetTotalItems(items);
  }

  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
    GetTotalItems(newItems);
  }
  
  const clear = () => {
    setItems([]);
    setTotalItems(0);
  }

  const isInCart = (itemId) =>{
    return items.some((item) => item.id === itemId);
  }

  const GetTotalPrice = () => {
    const totalPrice = items.reduce((acc, item) => acc + (item.quantity * item.price),0);
    return totalPrice;
  }

  const GetTotalItems = (items) => {
    const totalItems = items.reduce((acc, item) => acc + item.quantity,0);
    setTotalItems(totalItems);
  }
  
  return (
    <CartContext.Provider value={{items, addItem, removeItem, clear, GetTotalPrice, totalItems}}>
        {children}
    </CartContext.Provider>
  )
}