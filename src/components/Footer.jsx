import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className='shadow-inner bg-gray-100'>
            <div className='flex justify-between w-full px-24 py-10'>
                <div className=' max-w-xl'>
                    <div className='text-2xl'>FAKE MARKET LOGO</div>
                    <div className='py-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit tenetur quidem doloremque, officiis dolorem facilis optio rerum exercitationem repellat minus cupiditate. Sed repudiandae omnis ex provident libero doloremque quia hic? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque autem tempore debitis dolorum animi ex ducimus ipsa saepe quam iusto praesentium sequi vitae consequuntur obcaecati, recusandae, libero nisi ad beatae.</div>

                </div>

                <div className='flex gap-20'>
                    <div>
                        <span className='text-xl font-bold'>Shop</span>
                        <ul className='py-3 flex flex-col gap-2'>
                            <li> <Link to={`/products/mens`}>Men's Clothing </Link> </li>
                            <li><Link to={`/products/womens`}>Women's Clothing </Link></li>
                            <li><Link to={`/products/jewelery`}>Jewelery </Link></li>
                            <li><Link to={`/products/electronics`}> Electronics </Link></li>
                        </ul>
                    </div>

                    <div>
                        <span className='text-xl font-bold'>Useful Links</span>
                        <ul className='py-3 flex flex-col gap-2'>
                            <li> <Link to={`/products`}>Shop All</Link> </li>
                            <li> <Link to={`https://github.com/jiankh/mark-market`}> Repository </Link> </li>
                            <li><Link to={`https://github.com/jiankh`}> Github </Link> </li>
                            <li><Link to={`https://fakestoreapi.com/`}> FakeStore API </Link></li>
                        </ul>
                    </div>


                </div>
            </div>

            <div className='bg-zinc-950 text-white text-center py-3'>
               Jean Huang 2023 GitHub@JIANKH
            </div>
        </footer>
    )
}

export default Footer