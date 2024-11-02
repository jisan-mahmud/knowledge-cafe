import { useState } from 'react'
import './App.css'
import Header from './components/header/header'
import Blogs from './components/Blogs.jsx/Blogs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>

      <Blogs></Blogs>
    </>
  )
}

export default App
