import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark as faRegularBookmark } from '@fortawesome/free-regular-svg-icons';
import { faBookmark as faSolidBookmark } from '@fortawesome/free-solid-svg-icons';

const Blog = ({blog, handleMarkBlog, handleReadingTime}) => {
    const [isBookmarked, setIsBookmarked] = useState(false);
    const MarkBlog = () => {
      setIsBookmarked(true);
      handleMarkBlog(blog)
    };
    const {title, cover,author_name, author_img, publish_date, reading_time, hash_tags} = blog
    return (
        <div className='my-10 first:my-0 border-b pb-10 last:border-0'>
            <div className='my-2'>
                <img className='rounded-md' src={cover} alt="" />
            </div>
            <div className='flex justify-between my-4'>
                <div className='flex gap-4'>
                    <img className='w-[55px]' src={author_img} alt="" />
                    <div>
                        <h1 className='text-xl font-medium'>{author_name}</h1>
                        <span className='opacity-[0.9]'>{publish_date}</span>
                    </div>
                </div>
                <div className='flex gap-3 items-center opacity-[0.9]'>
                    <span>{reading_time} min read</span>
                    <FontAwesomeIcon onClick={() => MarkBlog()} icon={isBookmarked ? faSolidBookmark : faRegularBookmark} />
                </div>
            </div>
            <div>
                <h1 className='text-3xl font-bold'>{title}</h1>
            </div>
            <div className='flex gap-2 my-2'>
                {
                    hash_tags.map((hash, idx) => (
                    <span key={idx}>{hash}</span>
                    ))
                }
            </div>
            <button onClick={() => handleReadingTime(reading_time)} className='text-blue-600 underline'>Mark as read</button>
        </div>
    );
};

export default Blog;