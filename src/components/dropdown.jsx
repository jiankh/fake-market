import { useState } from "react"
import { Link } from "react-router-dom"

function DropDown() {

    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='relative flex flex-col items-center rounded-lg z-10'>
        <button onClick={ () => setIsOpen((prev) => !prev) }>Categories</button>
        
        {isOpen && (
            <ul className="absolute top-10 flex flex-col items-start bg-gray-100 px-6 py-2 gap-2 rounded-md w-60 ">
                <li className="hover:border-l-4  border-gray-500 pl-1"> <Link to={`/products/mens`}>Men's Clothing </Link></li>
                <li className="hover:border-l-4  border-gray-500 pl-1"> <Link to={`/products/womens`}>Women's Clothing </Link></li>
                <li className="hover:border-l-4  border-gray-500 pl-1"> <Link to={`/products/jewelery`}>Jewelry </Link></li>
                <li className="hover:border-l-4  border-gray-500 pl-1"> <Link to={`/products/electronics`}> Electronics </Link></li>
            </ul>
        )}
    </div>
  )
}

export default DropDown