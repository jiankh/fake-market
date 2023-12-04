import React, { useEffect, useState } from 'react'
import Card from './Card';
import Loading from './Loading';


function Shop({category}) {
    const {items, error, loading} = itemList(category)
    if (error) return <p>A network error was encountered</p>;
    if (loading) return <Loading />;

    return (
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-5 w-4/5 justify-items-center mx-auto p-10 min-w- '>
            {items.map((item) => (
                <Card
                    key={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    id={item.id}

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
        setLoading(true)
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