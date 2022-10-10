import React from 'react'

// app components
import Navbar from "../components/navbar"
import Features from "./sections/features"
import Goals from "./sections/goals"
import Hero from "./sections/hero"
import Partners from "./sections/partners"

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Partners />
      <Goals />
    </>
  )
}

export default Home