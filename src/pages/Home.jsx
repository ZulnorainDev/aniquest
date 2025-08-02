import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Home/Header'
import Details from '../components/Home/Details'
import Tools from '../components/Home/Tools'
import About from '../components/Home/About'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <>
      <Header />
      <Details />
      <Tools />
      <About />
      <Footer padding="sm:pt-40 md:pt-60" />
    </>
  )
}

export default Home