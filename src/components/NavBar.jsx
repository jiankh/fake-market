import React from 'react'
import { FaRegUserCircle,FaShoppingCart } from "react-icons/fa";
import DropDown from './DropDown';


function NavBar() {
  return (
    <div className=' flex w-full justify-between shadow-md p-4 px-16 z-2 bg-white'>
        <ul className='flex gap-10 text-lg'>
            <li className='text-xl font-bold p-1'>Fake Market</li>
            <li className='nav-link px-2'>Home</li>
            <li className='nav-link px-2'>All Products</li>
            <li className='nav-link px-2'> <DropDown /> </li>     
        </ul>

        <ul className='flex gap-8'>
            <li className='nav-link'><FaRegUserCircle size={30}/></li>
            <li className='nav-link'><FaShoppingCart size={30} /></li>
        </ul>
    </div>
  )
}


export default NavBar