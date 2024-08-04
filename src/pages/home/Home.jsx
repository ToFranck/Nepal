import React from 'react'
import Header from '../../components/header/Header'
import Albums from '../../components/albums/Albums'
import Footer from '../../components/footer/Footer'
import Bg from '../../components/bg1/Bg'


export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <Albums />
      <Bg />
      <Footer />
    </>
  )
}
