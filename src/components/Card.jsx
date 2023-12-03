
function Card({image, title, price}) {

  return (
    <div className='w-64 pt-7'>
        <img className='w-64 h-64 object-contain' src={image} />
        <div className=' text-xl text-center font-bold p-4'>
            {title}
        </div>
        <div className='flex justify-between'>
            ${price}
            <button className="bg-blue-100 px-2 rounded-md">
                Add to Cart
            </button>
        </div>


    </div>
  )
}

export default Card