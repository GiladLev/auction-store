import React from 'react'
import Catgories from '../components/Catgories'
import Navbar from '../components/Navbar'
import Products from '../components/Products'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Catgories/>
        <Products/>
    </div>
  )
}

export default Home