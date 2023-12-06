import React, { useContext, useState, useEffect } from 'react'
import CartCard from './CartCard'
import Loading from './Loading';
import { useShoppingCart } from '../ShoppingCartContext';

function ShoppingCart() {
    const { items, error, loading } = itemList()
    if (error) return <p>A network error was encountered</p>;
    if (loading) return <Loading />;

    const { cartItems, getItemQuantity } = useShoppingCart()


    return (
        <div className='flex justify-around h-90vh'>
            <div>
                <div className='text-4xl p-10 font-bold'>Shopping Cart</div>
                {cartItems.map((item) => {
                    const itemFound = items.find((i) => i.id === item.id);

                    return (
                        <CartCard
                            quantity={getItemQuantity(item.id)}
                            key={item.id}
                            title={itemFound.title}
                            image={itemFound.image}
                            price={itemFound.price}
                            id={item.id}
                        />
                    );
                })}
            </div>

            <div className='mt-32 text-3xl flex flex-col'>
                Total: ${calculateTotalPrice(cartItems, items)}
                <button className='text-xl bg-yellow-300 rounded-lg p-2 mt-5 hover:bg-yellow-200'>Checkout</button>
            </div>
        </div>
    )
}

function itemList() {
    const [items, setItems] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        fetch(`https://fakestoreapi.com/products/`, { mode: "cors" })
            .then((response) => {
                if (response.status >= 400) {
                    throw new Error("Server Error")
                }
                return response.json()
            })
            .then((response) => setItems(response))
            .catch((error) => setError(error))
            .finally(() => setLoading(false))
    }, [])

    return { items, error, loading }
}


function calculateTotalPrice(cartItems, items) {
    return cartItems.reduce((total, cartItem) => {
      const itemFound = items.find((item) => item.id === cartItem.id);
  
      if (itemFound) {
        total += itemFound.price * cartItem.quantity;
      }
  
      return total;
    }, 0);
}


export default ShoppingCart