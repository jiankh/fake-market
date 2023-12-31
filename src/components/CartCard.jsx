import { useShoppingCart } from "../ShoppingCartContext"

const f = new Intl.NumberFormat("en-us", {
    currency: "USD",
    style: "currency"
})

function CartCard({id, title, image, price}) {
    const { getItemQuantity, decreaseCartQuantity, increaseCartQuantity, removeFromCart } = useShoppingCart()

  return (
    <div className='flex justify-start items-center p-10 shadow-lg ml-5 w-full'>
        <img className='h-36 w-48 object-contain' src={image} alt="item image" />
        
        <div className="ml-5 w-full">
            <div className='flex gap-10 justify-between text-lg font-bold'>
                <div>{title} </div>
                <div className="font-bold">{f.format(price)}</div>
            </div>

            <div className="flex gap-4 font-bold"><i>Qty:  </i>
                <button onClick={()=> decreaseCartQuantity(id)}>-</button> 
                {  getItemQuantity(id) } 
                <button onClick={()=> increaseCartQuantity(id)} >+</button>  
            </div>
            <button onClick={()=> removeFromCart(id)} className="border-2 rounded-lg px-2 mt-2 align-middle hover:bg-red-600 hover:border-red-600 hover:text-white">Remove</button>
            
        </div>

    </div>
  )
}



export default CartCard