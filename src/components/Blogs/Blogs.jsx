import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({handleReadingTime}) => {
    const [blogs, setBlogs] = useState([])
  
    useEffect(() => {
        fetch('blogs.json')
        .then(response => response.json())
        .then(json => setBlogs(json))
    }, [])
    return (
        <div>
            {
                blogs.map((blog, idx) => (
                    <Blog handleReadingTime={handleReadingTime} key={idx} blog={blog}></Blog>
                ))
            }
        </div>
    );
};

export default Blogs;