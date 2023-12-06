import React from 'react'
import NavBar from '../components/NavBar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import Item from '../components/Item'
import { useParams } from 'react-router-dom'


function Details() {
    const {id} = useParams()
  return (
    <>  
        <NavBar />
        <div className='flex'>
            <Sidebar />
            <Item id={id} />

        </div>

        <Footer />
        
        
    </>
  )
}

export default Details