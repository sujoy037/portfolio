import React from 'react'
import Header from './components/Header'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Skills from './components/Skills'
import Footer from './components/Footer'
import About from './components/About'

const App = () => {
  return (
    <>
      <Header />
      <div className='bg-light py-5'>
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
      </div>

      <Footer />
    </>
  )
}

export default App
