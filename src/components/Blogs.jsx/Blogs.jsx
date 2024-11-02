import React, { useEffect, useState } from 'react';

const Blogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blogs.json')
        .then(response => response.json())
        .then(json => console.log(json))
    })

    return (
        <div>
            
        </div>
    );
};

export default Blogs;