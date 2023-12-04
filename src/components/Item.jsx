import React, {useEffect, useState} from 'react'
import Loading from './Loading';

function Item({id}) {
    const {item,error,loading} = loadItem(id)
    if (error) return <p>A network error was encountered</p>;
    if (loading) return <Loading />;

  return (
    <div className='flex px-20 py-20 justify-center'>
        <div className='flex justify-center w-1/2 '> 
            <img className='h-2/3' src={item.image} alt="item picture" />  
        </div>

        <div className='w-1/3 pr-10'>

            <div className='text-5xl pb-10'>{item.title}</div>
            <div className='text-xl'>{item.description}</div>
            <div className='flex justify-around py-20'>
                <div className='text-lg'>${item.price}</div>
                <button className='border-2 p-1 px-2 rounded-xl hover:bg-slate-200 '> Add To Cart </button>
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