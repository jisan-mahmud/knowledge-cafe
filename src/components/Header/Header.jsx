import React from 'react';

const Header = () => {
    return (
        <>
            <header className='flex justify-between items-center h-[100%] border-b-2 px-2 py-5'>
                <h1 className='text-3xl font-bold'>Knowledge Cafe</h1>
                <img className='h-[100%]' src="https://i.ibb.co.com/cgNmLZS/profile.png" alt="" />
            </header>
        </>
    );
};

export default Header;