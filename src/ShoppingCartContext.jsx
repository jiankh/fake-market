import { createContext, useContext, useState, useEffect } from "react";

const ShoppingCartContext = createContext([])

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}


export function ShoppingCartProvider({ children }) {
    const [cartItems, setCartItems] = useState(() => {
        // Retrieve cart items from LocalStorage on component mount
        const storedCart = localStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : [];
    });

    // Update LocalStorage whenever cartItems change
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);

    function getItemQuantity(id) {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    function increaseCartQuantity(id) {
        setCartItems(currItems => {
            const itemID = parseInt(id)
            if (currItems.find(item => item.id === itemID) == null) {   
                return [...currItems, { id:itemID , quantity: 1 }]   //if find comes back as null, we dont have the item in cart so we add the new item and set quantity 1
            } else {
                return currItems.map(item => {
                    if (item.id === itemID) {
                        return { ...item, quantity: item.quantity + 1 } //if we do find it in cart, we +1 the quantity
                    } else {
                        return item // idk about this part? why return item?
                    }
                })
            }
        })
    }

    function decreaseCartQuantity(id) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id)?.quantity === 1) {    
                return currItems.filter(item => item.id !== id)  //returns new list of items without the id one
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 } //if we do find it in cart, we -1 the quantity
                    } else {
                        return item // idk about this part? why return item?
                    }
                })
            }
        })
    }

    function removeFromCart(id) {
        setCartItems(currItems => {
            return currItems.filter(item => item.id !==  id)
        })
    }


    return (
        <ShoppingCartContext.Provider value={{cartItems, getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}