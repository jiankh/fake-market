import React, { useEffect, useState } from 'react'
import Card from './Card';


function Shop({category}) {
    const {items, error, loading} = itemList(category)
    if (error) return <p>A network error was encountered</p>;
    if (loading) return <p>Loading...</p>;

    return (
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-5 w-4/5 justify-items-center justify-self-center p-10 '>
            {items.map((item) => (
                <Card
                    key={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}

                />
            ))}
        </div>
    )
}



function itemList(category) {
    const [items, setItems] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let urlAttach = category === 'all' ? '' : `category/${category}`;
        fetch(`https://fakestoreapi.com/products/${urlAttach}`, {mode: "cors"})
            .then((response) => {
                if (response.status >= 400) {
                    throw new Error("Server Error")
                }
                return response.json()
            })
            .then((response) => setItems(response))
            .catch((error) => setError(error))
            .finally(() => setLoading(false))
    }, [category])

    return { items, error, loading }
}

export default Shop