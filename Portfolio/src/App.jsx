import { useState } from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'
import Achivments from './components/Achivments'
import Contact from './components/Contact'
import Footer from './components/Footer'



function App() {
  const [count, setCount] = useState(0)

  return (
   <main>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Achivments />
      <About />
      <Contact />
      <Footer />
   </main>
  )
}

export default App
