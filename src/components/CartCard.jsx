
function CartCard({id, quantity, title, image, price}) {

  return (
    <div className='flex justify-center items-center p-10 shadow-lg ml-5'>
        <img className='h-36' src={image} alt="item image" />
        
        <div className="ml-5">
            <div className='flex gap-10'>
                {title} 
                <span>${price}</span>
            </div>

            <div>Qty:  <button>-</button> {quantity} <button>+</button> </div>
            <button className="border-2 rounded-lg px-2 mt-2 align-middle hover:bg-red-400">Remove</button>
            
        </div>

    </div>
  )
}





export default CartCard