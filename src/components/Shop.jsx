import React, { useEffect, useState } from 'react'

function Shop() {
    const {items, error, loading} = itemList()
    if (error) return <p>A network error was encountered</p>;
    if (loading) return <p>Loading...</p>;

    return (
        <div>

        </div>
    )
}







function itemList() {
    const [items, setItems] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("https://fakestoreapi.com/products", {mode: "cors"})
            .then((response) => {
                if (response.status >= 400) {
                    throw new Error("Server Error")
                }
                return response.json()
            })
            .then((response) => setItems(response))
            .catch((error) => SpeechSynthesisErrorEvent(error))
            .finally(() => setLoading(false))
    }, [])

    return { items, error, loading }
}

export default Shop