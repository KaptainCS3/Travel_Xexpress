import React from 'react'
import Nav from './components/Nav'
import './App.css'
import Hero from './components/Hero'
import BookTravel from './components/BookTravel'
import Tourist from './components/Tourist'
import About from './components/About'
import Budget from './components/Budget'
const App = () => {
  return (
    <>
      <div className="bg-[#F3F3F3]">
        <Nav />
        <Hero />
        <BookTravel />
        <Tourist />
        <About />
        <Budget />
      </div>
    </>
  );
}

export default App