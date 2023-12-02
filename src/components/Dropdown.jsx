import { useState } from "react"

function DropDown() {

    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='relative flex flex-col items-center rounded-lg z-10'>
        <button onClick={ () => setIsOpen((prev) => !prev) }>Categories</button>
        
        {isOpen && (
            <ul className="absolute top-10 flex flex-col items-start bg-gray-100 px-6 py-2 gap-2 rounded-md w-60 ">
                <li className="hover:border-l-4  border-gray-500 pl-1"> Electronics</li>
                <li className="hover:border-l-4  border-gray-500 pl-1"> Jewelery</li>
                <li className="hover:border-l-4  border-gray-500 pl-1"> Men's Clothing</li>
                <li className="hover:border-l-4  border-gray-500 pl-1"> Women's Clothing</li>
            </ul>
        )}
    </div>
  )
}

export default DropDown