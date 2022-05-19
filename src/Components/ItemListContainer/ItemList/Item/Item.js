import React from 'react'
import {Link} from 'react-router-dom'


const Item = (props) => {
  return (
      
      <div className=''>
        <Link to={"/producto/" + props.productos.id}>
        <div className='text-2x1'>{props.productos.name}</div>
        <div className='text-2x1'>{props.productos.price}</div>
        <div>
          <img className="h-44 w-full object-cover" src={props.productos.imagen} alt="#"/>
        </div>
        <div className=' bg-blue-400 p-5 cursor-pointer rounded-xl overflow-hidden py-4'>Comprar</div>
        </Link>
    </div>
  )
}

export default Item