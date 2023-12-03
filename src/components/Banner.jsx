import bgBanner from '../assets/bannerMarket.jpg'
import { Link } from 'react-router-dom'

function Banner() {
    return (
        <>
            

            <div className="flex justify-center gap-40 items-center h-90vh z-0"
                style= {{ backgroundImage: `url(${bgBanner})`,
                          backgroundSize: `cover`,
                          opacity: 0.8,
                          textShadow: '4px 4px 4px rgba(0, 0, 0)'
                }} 
            >
                <div className='text-9xl text-white flex flex-col'>
                    <span className=''>Savings</span>
                    <span className='ml-20'>Start</span>
                    <span className='ml-40'>Now!</span>
                </div>

                <div className='flex flex-col text-3xl text-white max-w-lg gap-10'>
                    Browse our wide variety of fake items from FakeStore API!

                    <Link to={'/products'}><button className='text-xl border w-56 h-10 rounded-md hover:bg-black hover:border-none'>Shop now!</button></Link>
                </div>
                


            </div>
        </>


    )
}

export default Banner

