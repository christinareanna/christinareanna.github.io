import React from 'react';
import museum from '/assets/photography/museum-1.jpg';
import march from '/assets/photography/protest-1.jpg';
import phone from '/assets/photography/phone-1.jpg';


export default function Photos() {

    return (
        <>
            <h1 className='text-3xl font-bold m-4'>Photography</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-4'>
                <img src={museum} alt='museum' className="rounded-lg shadow-md w-full max-w-md" />
                <img src={march} alt='protest' className="rounded-lg shadow-md w-full max-w-md" />
                <img src={phone} alt='phone' className="rounded-lg shadow-md w-80 max-w-md" />
            </div>
        </>
    )
}

