import { useState } from 'react'
import Nav from './Nav'
import './reset.css'
import './general.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Nav />
    </>
  )
}

export default App
