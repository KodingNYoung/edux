import React from 'react'

// app components
import Navbar from "../components/navbar"
import Features from "./sections/features"
import Goals from "./sections/goals"
import Hero from "./sections/hero"

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Goals />
    </>
  )
}

export default Home