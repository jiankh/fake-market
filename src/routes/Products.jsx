import React from 'react'
import { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Shop from '../components/Shop'
import Sidebar from '../components/Sidebar'

function Products({ category='all' }) {

    return (
        <>
            <NavBar />

            <div className='flex'>
                <Sidebar />
                <Shop category={category} />
            </div>

            <Footer />
        </>
    )
}

export default Products