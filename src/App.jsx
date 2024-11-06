import { useState } from 'react'
import './App.css'
import Header from './components/header/header'
import Blogs from './components/Blogs/Blogs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <div className='flex'>
        <Blogs></Blogs>
        <div className='w-5/12'>
          <h1>Bookmark</h1>
        </div>
      </div>
    </>
  )
}

export default App
