import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='w-1/6 p-14 border-r-2 bg-gray-50 border-t-2'>
        <span className='text-2xl font-bold'>Products</span>
        <ul className='py-6 text-lg'>
            <li className='py-1 hover:bg-gray-100 pl-2'> <Link to={'/products'}> All Products </Link> </li>
            <li className='py-1 hover:bg-gray-100 pl-2'> <Link to={'/products/mens'}> Men's Clothing </Link> </li>
            <li className='py-1 hover:bg-gray-100 pl-2'> <Link to={'/products/womens'}>Women's Clothing </Link></li>
            <li className='py-1 hover:bg-gray-100 pl-2'> <Link to={'/products/jewelery'}>Jewelery </Link> </li>
            <li className='py-1 hover:bg-gray-100 pl-2'> <Link to={'/products/electronics'}> Electronics </Link> </li>
        </ul>
        
    </div>
  )
}

export default Sidebar