import React, { useState } from 'react';

const Formulario = () => {
    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [fecha, setFecha] = useState('')
    const [sintomas, setSintomas] = useState('')

    const [error, setError] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault()

        if ([nombre, propietario, email, fecha, sintomas].includes('')){
            setError(true)
            return
        }
        setError(false)
    }


    return (
        <div className='md:w-1/2 lg:w-2/5'>
            <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
            <p className='text-xl mt-5 text-center mb-10'>
                Añade Pacientes y {''}
            <span className=' text-indigo-600 font-bold text-xl'>Administralos</span>
            </p>

            <form onSubmit={handleSubmit} className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
                { error &&
                    <div className=' bg-red-700 text-center font-bold text-white p-3 uppercase mb-3 rounded-md'>
                        <p>Todos los campos son Obligatorios</p>
                    </div>
                }
                <div className='mb-5'>
                    <label className='block font-bold text-gray-700 uppercase' htmlFor='mascota'>Nombre Mascota</label>
                    <input className='border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md'
                     type="text" name="" 
                     id='mascota' 
                     placeholder='Nombre de la mascota'
                     value={nombre}
                     onChange={(e)=>setNombre(e.target.value)} />
                </div>
                <div className='mb-5'>
                    <label className='block font-bold text-gray-700 uppercase' htmlFor='propietario'>Nombre Propietario</label>
                    <input className='border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md'
                        type="text" name=""
                        id='propietario'
                        placeholder='Nombre del Propietario'
                        value={propietario}
                        onChange={(e)=>setPropietario(e.target.value)} /> 
                </div>
                <div className='mb-5'>
                    <label className='block font-bold text-gray-700 uppercase' htmlFor='email'>Email</label>
                    <input className='border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md'
                        type="email" name=""
                        id='email' 
                        placeholder='Email contacto Propietario'
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)} /> 
                </div>
                <div className='mb-5'>
                    <label className='block font-bold text-gray-700 uppercase' htmlFor='alta'>Alta</label>
                    <input className='border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md' 
                        type="date" name="" 
                        id='alta'
                        value={fecha}
                        onChange={(e)=>setFecha(e.target.value)} /> 
                </div>
                <div className='mb-5'>
                    <label className='block font-bold text-gray-700 uppercase' htmlFor='sintomas'>Sintomas</label>
                    <textarea className='border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md' 
                        name="" id='sintomas' 
                        placeholder='Describe los Sintomas'
                        value={sintomas}
                        onChange={(e)=>setSintomas(e.target.value)} />
                </div>
                <input className=' bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all' type="submit" name="" value={'Agregar Paciente'} />
            </form>
        </div>
    );
}

export default Formulario;
