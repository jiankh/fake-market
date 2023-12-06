import React, {useEffect, useState} from 'react'
import Loading from './Loading';
import { useShoppingCart } from '../ShoppingCartContext';

const f = new Intl.NumberFormat("en-us", {
    currency: "USD",
    style: "currency"
})


function Item({id}) {
    const {item,error,loading} = loadItem(id)
    if (error) return <p>A network error was encountered</p>;
    if (loading) return <Loading />;

    const {increaseCartQuantity, getItemQuantity, decreaseCartQuantity} = useShoppingCart()
    const itemID = parseInt(id) //change the id from string to number

  return (
    <div className='flex w-full px-20 py-20 justify-center'>
        <div className='flex justify-center w-1/2 '> 
            <img className='h-2/5' src={item.image} alt="item picture" />  
        </div>

        <div className='w-1/3 pr-10'>

            <div className='text-4xl pb-10'>{item.title}</div>
            <div className='text-xl'>{item.description}</div>

            <div className="text-lg flex self-center text-gray-500 italic mt-3">Rating: {item.rating.rate}/5 ({item.rating.count})</div>

            <div className='flex justify-between py-10 self-center'>
                <div className='text-2xl p-2 flex self-center font-bold'>{f.format(item.price)}</div>
                
                {(getItemQuantity(itemID) === 0) && <button onClick={ ()=> increaseCartQuantity(id) } className='border-2 p-2 px-4 rounded-xl  hover:bg-slate-200'> Add To Cart </button>}
                {(getItemQuantity(itemID) !== 0) &&
                    <div className='flex gap-3 self-center font-bold text-lg'> 
                        Qty: 
                        <button onClick={()=> decreaseCartQuantity(id)}>-</button> 
                        {getItemQuantity(itemID)} 
                        <button onClick={()=> increaseCartQuantity(id)} >+</button>  
                    </div>
                }

            </div>
        </div>

    </div>
  )
}





function loadItem(id) {
    const [item, setItem] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`, {mode: "cors"})
            .then((response) => {
                if (response.status >= 400) {
                    throw new Error("Server Error")
                }
                return response.json()
            })
            .then((response) => setItem(response))
            .catch((error) => setError(error))
            .finally(() => setLoading(false))
    }, [])

    return { item, error, loading }
}

export default Item