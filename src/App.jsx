import { useState } from 'react'
import './App.css'
import Header from './components/header/header'
import Blogs from './components/Blogs/Blogs'
import Bookmark from './components/Bookmark/Bookmark'
import ReadingTime from './components/ReadingTime/ReadingTime'

function App() {
  const [readingTime, setReadingTime] = useState(0)

  let handleReadingTime = (time) => {
    setReadingTime(readingTime+time)
  }

  return (
    <>
      <Header></Header>
      <div className='flex mt-10'>
        <div className='w-2/3 px-4'>
          <Blogs handleReadingTime= {handleReadingTime}></Blogs>
        </div>
        <div className='w-1/3 px-4'>
          <ReadingTime totalReadingTime={readingTime}></ReadingTime>
          <Bookmark></Bookmark>
        </div>
      </div>
    </>
  )
}

export default App
