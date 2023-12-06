import React from 'react'
import { FaRegUserCircle,FaShoppingCart } from "react-icons/fa";
import DropDown from './DropDown';
import { Link } from 'react-router-dom';



function NavBar() {
  return (
    <div className=' flex w-full justify-between shadow-md p-4 px-24 bg-gray-50 z-10'>
        <ul className='flex gap-10 text-lg'>
            <li className='text-xl font-bold p-1'>Fake Market</li>
            <li className='nav-link px-2'> <Link to={'/'}> Home </Link> </li>
            <li className='nav-link px-2'><Link to={'/products'} >All Products </Link> </li>
            <li className='nav-link px-2'> <DropDown /> </li>     
        </ul>

        <ul className='flex gap-8'>
            {/* <li className='nav-link'><FaRegUserCircle size={28}/></li> */}
            <li className='nav-link rounded-full p-2'> <Link to={'/cart'}> <FaShoppingCart size={28} /> </Link>  </li>
        </ul>
    </div>
  )
}

export default NavBar