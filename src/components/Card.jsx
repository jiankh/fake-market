import { Link } from "react-router-dom"

const f = new Intl.NumberFormat("en-us", {
    currency: "USD",
    style: "currency"
})

function Card({image, title, price, id, rating, count}) {

  return (
    <div className='w-64 pt-10 mb-20 flex flex-col justify-between'>
        <Link to={`/products/${id}`}>
            <img className='w-64 h-64 object-contain' src={image} />
            <div className=' text-xl text-center font-bold p-4'>
                {title}
            </div>
        </Link>

        <div className='flex justify-between text-xl '>
            <div className="font-bold">{f.format(price)}</div>
            
            <div className="text-sm flex self-center text-gray-500 italic">Rating: {rating}/5 ({count})</div>
            
        </div>


    </div>
  )
}

export default Card