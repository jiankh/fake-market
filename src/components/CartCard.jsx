import { useShoppingCart } from "../ShoppingCartContext"

const f = new Intl.NumberFormat("en-us", {
    currency: "USD",
    style: "currency"
})

function CartCard({id, title, image, price}) {
    const { getItemQuantity, decreaseCartQuantity, increaseCartQuantity, removeFromCart } = useShoppingCart()
    console.log(`id: ${id} typeof: ${typeof(id)}`)
    console.log( `qty: ${parseInt(getItemQuantity(id))}`)
    console.log(`item qty: ${getItemQuantity(`${id}`)}`)

  return (
    <div className='flex justify-start items-center p-10 shadow-md ml-5 w-full'>
        <img className='h-36 w-48 object-contain' src={image} alt="item image" />
        
        <div className="ml-5 w-full">
            <div className='flex gap-10 justify-between text-lg font-bold'>
                <div>{title} </div>
                <div className="font-bold">{f.format(price)}</div>
            </div>

            <div className="flex gap-4 ">Qty:  
                <button onClick={()=> decreaseCartQuantity(id)}>-</button> 
                {  getItemQuantity(id) } 
                <button onClick={()=> increaseCartQuantity(id)} >+</button>  
            </div>
            <button onClick={()=> removeFromCart(id)} className="border-2 rounded-lg px-2 mt-2 align-middle hover:bg-red-400">Remove</button>
            
        </div>

    </div>
  )
}



export default CartCard