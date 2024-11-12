import React from 'react';

const MarkedBlog = ({blog}) => {
    const {title} = blog
    return (
        <div className='bg-white p-3 my-2 rounded-md'>
            <h3>{title}</h3>
        </div>
    );
};

export default MarkedBlog;