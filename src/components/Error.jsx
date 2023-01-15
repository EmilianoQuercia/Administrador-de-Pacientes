import React from 'react';

const Error = ({mensaje}) => {
    return (
        <div className=' bg-red-700 text-center font-bold text-white p-3 uppercase mb-3 rounded-md'>
            <p>{mensaje}</p>
        </div>
    );
}

export default Error;
