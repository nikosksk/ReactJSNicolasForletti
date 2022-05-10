import React from 'react'
import Item from './Item/Item'

const ItemList = (props) => {
    const products = props.productos
  return (
    <div className=' grid grid-cols-3 gap-3 bg-red-500'>{products.map((i)=><Item productos={i}/>)}</div>
  )
}

export default ItemList