import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import Snippest from './components/Snippets'
import Access from './components/Access'
import Supercharge from './components/Supercharge'
import ForIosAndMac from './components/ForIosAndMac'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Hero/>
    <Snippest/>
    <Access/>
    <Supercharge/>
    <ForIosAndMac/>
    <Footer/>
    </>
  )
}

export default App
