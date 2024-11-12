import { useState } from 'react'
import './App.css'
import Header from './components/header/header'
import Blogs from './components/Blogs/Blogs'
import Bookmark from './components/Bookmark/Bookmark'
import ReadingTime from './components/ReadingTime/ReadingTime'

function App() {
  const [readingTime, setReadingTime] = useState(0)
  const [markedBlog, setMarkedBlog] = useState([])

  let handleMarkBlog = (blog) => {
    if (markedBlog.includes(blog)) {
      console.log('already added...')
    } else {
      console.log('added successfully')
      const newMarkedBlog = [...markedBlog, blog]
      setMarkedBlog(newMarkedBlog)
    }
  };

  let handleReadingTime = (time) => {
    setReadingTime(readingTime+time)
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex mt-10'>
        <div className='md:w-2/3 px-4'>
          <Blogs  handleMarkBlog={handleMarkBlog} handleReadingTime= {handleReadingTime}></Blogs>
        </div>
        <div className='md:w-1/3 px-4'>
          <ReadingTime totalReadingTime={readingTime}></ReadingTime>
          <Bookmark markedBlog={markedBlog}></Bookmark>
        </div>
      </div>
    </>
  )
}

export default App
