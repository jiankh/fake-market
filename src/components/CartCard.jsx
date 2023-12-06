
function CartCard({id, quantity, title, image, price}) {

  return (
    <div className='flex justify-start items-center p-10 shadow-md ml-5 w-full'>
        <img className='h-36 w-48 object-contain' src={image} alt="item image" />
        
        <div className="ml-5 w-full">
            <div className='flex gap-10 justify-between '>
                <div>{title} </div>
                <div className="font-bold">${price}</div>
            </div>

            <div>Qty:  <button>-</button> {quantity} <button>+</button> </div>
            <button className="border-2 rounded-lg px-2 mt-2 align-middle hover:bg-red-400">Remove</button>
            
        </div>

    </div>
  )
}





export default CartCard