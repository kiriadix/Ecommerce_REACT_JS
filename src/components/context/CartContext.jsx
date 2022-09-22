import React, {useState} from 'react'

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
        for (let i = 0; i < items.length; i++) {
            let actual = items[i];
            if (actual.id == item.id) {
                items[i].quantity += quantity;
            }
        }
    } else {
        item.quantity=quantity;
        items.push(item);
    }

    setItems(items);
  }

  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
  }
  
  const clear = () => {
    setItems([]);
  }

  const isInCart = (itemId) =>{
    const newItems = items.filter((item) => item.id === itemId);
    if (newItems.length > 0) {
        return true;
    } else {
        return false;
    }
  }
  
  return (
    <CartContext.Provider value={{items, addItem, removeItem, clear, totalItems:items.length }}>
        {children}
    </CartContext.Provider>
  )
}