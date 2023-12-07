import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import DropDown from './dropdown';
import { Link } from 'react-router-dom';
import { useShoppingCart } from '../ShoppingCartContext';



function NavBar() {

    const cartItems = useShoppingCart()

    const numberOfItemsInCart = cartItems.cartItems.reduce((qty, item) => {
        return item.quantity + qty
    },0)

    



  return (
    <div className=' flex w-full justify-between shadow-md p-4 px-24 bg-gray-50 z-10 '>
        <ul className='flex gap-10 text-lg self-center'>
            <li className='text-2xl font-bold p-1'>Fake Market</li>
            <li className='nav-link px-3'> <Link to={'/'}> Home </Link> </li>
            <li className='nav-link px-3'><Link to={'/products'} >All Products </Link> </li>
            <li className='nav-link px-3'> <DropDown /> </li>     
        </ul>

        <ul className='flex gap-8'>
            <li className='nav-link rounded-full p-2 relative'> <Link to={'/cart'}> <FaShoppingCart size={28} className='opacity-50' /> </Link>  
                <div className='absolute right-0 bottom-0 text-red-600 font-bold'>
                    {numberOfItemsInCart !== 0 && numberOfItemsInCart}
                </div>
            </li>

        </ul>
    </div>
  )
}

export default NavBar