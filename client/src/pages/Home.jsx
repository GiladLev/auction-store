import React from 'react'
import Announcement from '../components/Announcement '
import Categories from '../components/Catgories'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'



const Home = () => {
  return (
    <div>
        <Navbar />
        <Announcement />
        <Slider/>
      <Categories />
    </div>
  )
}

export default Home