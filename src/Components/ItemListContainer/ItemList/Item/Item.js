import React from 'react'

const Item = (props) => {
  return (
    <div className=' bg-black text-white'>
        <div>{props.productos.name}</div>
        <div>{props.productos.price}</div>
        <div className=' bg blue-400 p-5'>Comprar</div>
    </div>
  )
}

export default Item