import React from 'react';
import MarkedBlog from '../MarkedBlog/MarkedBlog';

const Bookmark = ({markedBlog}) => {
    return (
        <div className='bg-[#6047ec23] my-4 p-4 rounded-md'>
            <h1 className='text-lg font-bold'>Bookmarked Blog: {markedBlog.length}</h1>
            {
                markedBlog.map((blog, idx) => (
                    <MarkedBlog key={idx} blog={blog}></MarkedBlog>
                   ))
            }
        </div>
    );
};

export default Bookmark;