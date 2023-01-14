import React from 'react';

const Pacientes = () => {
    return (
        <div className=' m-3 bg-white shadow-md px-5 py-10 rounded-xl'>
            <p className='font-bold mb-3 text-gray-700 uppercase' >
                Nombre: {''}
                <span className='font-normal normal-case'>Frida</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase' >
                Propietario: {''}
                <span className='font-normal normal-case'>Juan</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase' >
                Email: {''}
                <span className='font-normal normal-case'>emi@emi.com</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase' >
                Fecha Alta: {''}
                <span className='font-normal normal-case'>14/01/2023</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase' >
                Sintomas: {''}
                <span className='font-normal normal-case'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quam. Totam quos cupiditate aspernatur recusandae, ut in veritatis facere quidem magnam aperiam. Quasi ipsa temporibus numquam doloribus eligendi nam officiis!</span>
            </p>
        </div>
    );
}

export default Pacientes;
