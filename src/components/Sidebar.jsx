import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='w-1/5 p-14 border-r-2 bg-gray-100 border-t-2 hidden lg:block px-0 xl:px-14'>
        <span className='text-2xl font-bold'>Products</span>
        <ul className='py-6 text-lg'>
            <li className='py-1 hover:bg-gray-200 pl-2 rounded-md'> <Link to={'/products'}> All Products </Link> </li>
            <li className='py-1 hover:bg-gray-200 pl-2 rounded-md'> <Link to={'/products/mens'}> Men's Clothing </Link> </li>
            <li className='py-1 hover:bg-gray-200 pl-2 rounded-md'> <Link to={'/products/womens'}>Women's Clothing </Link></li>
            <li className='py-1 hover:bg-gray-200 pl-2 rounded-md'> <Link to={'/products/jewelery'}>Jewelry </Link> </li>
            <li className='py-1 hover:bg-gray-200 pl-2 rounded-md'> <Link to={'/products/electronics'}> Electronics </Link> </li>
        </ul>
        
    </div>
  )
}

export default Sidebar