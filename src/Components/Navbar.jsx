import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='h-20 w-full px-5 bg-blue-600 flex justify-between items-center '>
        <h1 className='text-2xl text-white'>Titulo</h1>
        <ul className='flex text-white text-xl gap-4 '>
            <Link to="/">Inicio</Link>
            <Link to="/productos">Productos</Link>
            <Link to="/">Ingresar</Link>
            <Link to="/">Contacto</Link>
        </ul>
    </div>
  )
}

export default Navbar