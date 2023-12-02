import React from 'react'

function Footer() {
    return (
        <footer className=''>
            <div className='flex justify-between w-full px-24 py-10'>
                <div className=' max-w-xl'>
                    <div className='text-2xl'>FAKE MARKET LOGO</div>
                    <div className='py-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit tenetur quidem doloremque, officiis dolorem facilis optio rerum exercitationem repellat minus cupiditate. Sed repudiandae omnis ex provident libero doloremque quia hic? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque autem tempore debitis dolorum animi ex ducimus ipsa saepe quam iusto praesentium sequi vitae consequuntur obcaecati, recusandae, libero nisi ad beatae.</div>

                </div>

                <div className='flex gap-10'>
                    <div>
                        <span className='text-xl font-bold'>Shop</span>
                        <ul className='py-3'>
                            <li>Men's Clothing</li>
                            <li>Women's Clothing</li>
                            <li>Jewelery</li>
                            <li>Electronics</li>
                        </ul>
                    </div>

                    <div>
                        <span className='text-xl font-bold'>Useful Links</span>
                        <ul className='py-3'>
                            <li>Shop All</li>
                            <li>Repository</li>
                            <li>Github</li>
                            <li>FakeStore API docs</li>
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