import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blogs.json')
        .then(response => response.json())
        .then(json => setBlogs(json))
    }, [])
    return (
        <div className='w-2/3'>
            {
                blogs.map((blog, idx) => (
                    <Blog key={idx} blog={blog}></Blog>
                ))
            }
        </div>
    );
};

export default Blogs;