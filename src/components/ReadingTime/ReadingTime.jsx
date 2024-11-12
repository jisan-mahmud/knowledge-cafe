import React from 'react';

const ReadingTime = ({totalReadingTime}) => {
    return (
        <div className='py-2 text-center bg-[#6047ec23] rounded-md border border-[#6047EC]'>
            <h1 className='text-[#6047EC] text-lg font-medium'>Spent time on read : {totalReadingTime}</h1>
        </div>
    );
};

export default ReadingTime;