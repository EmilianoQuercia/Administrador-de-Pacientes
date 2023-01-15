import React, { useState, useEffect } from 'react';
import Error from './Error';

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [fecha, setFecha] = useState('')
    const [sintomas, setSintomas] = useState('')

    const [error, setError] = useState(false)

    useEffect(()=>{
        if(Object.keys(paciente).length >0){
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }
    },[paciente])

    const generarId = () =>{
        const random = Math.random().toString(36).substring(2)
        const fecha = Date.now().toString(36)
        return random + fecha
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        //validacion del formulario
        if ([nombre, propietario, email, fecha, sintomas].includes('')){
            setError(true)
            return
        }
        setError(false)

        //objeto de paciente
        const objetoPaciente = {
            email,
            nombre,
            propietario,
            sintomas,
            fecha,
        }

        //vamos a chequear si es un nuevo registro o si es una edicion
        if (paciente.id){
            //editando el registro
            objetoPaciente.id = paciente.id
            const pacienteActualizado = pacientes.map(pacienteState =>
                pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
            setPacientes(pacienteActualizado)
            setPaciente({})
        }else{
            //Nuevo registro
            objetoPaciente.id = generarId()
            setPacientes([...pacientes, objetoPaciente])
        }
        

        //reiniciar el formulario

        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')
    


    }


    return (
        <div className='md:w-1/2 lg:w-2/5'>
            <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
            <p className='text-xl mt-5 text-center mb-10'>
                Añade Pacientes y {''}
            <span className=' text-indigo-600 font-bold text-xl'>Administralos</span>
            </p>

            <form onSubmit={handleSubmit} className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
                { error && <Error mensaje='Todos los campos son Obligatorios'/> }
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
                <input className=' bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all' 
                    type="submit" name="" 
                    value={ paciente.id ? 'Editar Paciente' : 'Agregar Paciente'} />
            </form>
        </div>
    );
}

export default Formulario;
