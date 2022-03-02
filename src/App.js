import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Main from './components/Main'
import Card from './components/card'

export default function App(){
  return(
    <div className='container'>
      <Navbar />
      <Main />
      <Card />
      {/* <Footer /> */}
    </div>
  )
}




