import React from 'react'
import {Link} from 'react-router-dom'
import Boton from "BottomNav/BottnCarr"


const Item = (props) => {

  const manejarClick = () => {
    console.log("click")
  }
  const reiniciarContador = () => {
    console.log("reiniciar")
  }

  return (
      
      <div className=''>
        <Link to={"/producto/" + props.productos.id}>
        <div className='text-2x1'>{props.productos.name}</div>
        <div className='text-2x1'>{props.productos.price}</div>
        <div>
          <img className="h-44 w-full object-cover" src={props.productos.imagen} alt="#"/>
        </div>
        <div className=' bg-blue-400 p-5 cursor-pointer rounded-xl overflow-hidden py-4'>Comprar</div>
        <Boton texto="click" esBoton={true} manejarClick={manejarClick}/>
        <Boton texto="reiniciar" esBoton={false} manejarClick={reiniciarContador}/>
        </Link>
    </div>
  )
}

export default Item