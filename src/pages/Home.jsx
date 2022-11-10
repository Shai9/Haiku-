import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <NavBar />
      <section id="hero">
      <div
        className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
       
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
          <h1
            className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left"
          >
             Giving poets the perfect opportunity to write short poems.
          </h1>
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
          Haikus are a favorite among poets for their challenge to paint a vivid picture in just a few words. A practice of artistic discipline, the haiku’s minimal nature requires poets to pare down to only the essentials—making each word, or even syllable, count.
          </p>
    
          <div className="space-x-2 justify-center">
              <a href='/signup'>
                <button type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium  leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out text-base">Get Started</button>
              </a>
          </div>
        </div>
      </div>
    </section>
      <Footer/>
    </>
  )
}

export default Home