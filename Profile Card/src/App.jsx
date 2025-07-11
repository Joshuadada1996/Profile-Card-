import { useState } from 'react'
import reactLogo from '/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Info from '../components/info'
import About from '../components/about'
import Interest from '../components/interest'
import Footer from '../components/footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Info />
      <About />
      <Interest />
      <Footer />
    </>
  )
}

export default App
