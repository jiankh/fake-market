import React, { useState, useEffect } from 'react'
import CartCard from './CartCard'
import Loading from './Loading';
import { useShoppingCart } from '../ShoppingCartContext';

function ShoppingCart() {
    const { items, error, loading } = itemList()
    if (error) return <p>A network error was encountered</p>;
    if (loading) return <Loading />;

    const { cartItems, getItemQuantity } = useShoppingCart()

    const fullDetailsCart = cartItems.map(item2 => {
        const item1 = items.find(item => item.id === parseInt(item2.id, 10 ))
        if (item1) {
            return {
                ...item1,
                quantity:item2.quantity
            }
        }
        return null
    })

    return (
        <div className='flex justify-around h-full py-4'>
            <div>
                <div className='text-4xl p-10 font-bold'>Shopping Cart</div>
                {fullDetailsCart.map((item) => (

                    <CartCard
                        key={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        id={item.id}
                    />
  
                ))}
            </div>

            <div className='mt-32 text-3xl flex flex-col justify-center border-l-4 pl-5 aspect-square h-64'>
                <div>Total: ${calculateTotalPrice(cartItems, items)}</div>
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