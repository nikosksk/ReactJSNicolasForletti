import React,{useState} from 'react'

const ItemListContainer = (props) => {
    const [contador, setContador] = useState(1)
    const [stock, setStock] = useState(props.stock - 1)
    const [outStock, setOutStock] = useState(false)
    const [exceedStock, setExceedStock] = useState(false)
  return (
    <div>
        <button disabled={outStock} 
                onClick={()=>{
          if(stock <= 1){
            setOutStock(true)
            setExceedStock(false)
          }else{
            setOutStock(false)
          }
           setContador(contador + 1)
           setStock(stock - 1)
        }}>+</button>
        <p>Unidades: {contador}</p>
        <p>El stock es: {stock}</p>
        <button disabled={exceedStock} onClick={()=>{
          if(stock >= props.stock - 1){
            setExceedStock(true)
          } else {
            setOutStock(false)
          }
          setContador(contador - 1)
          setStock(stock + 1)
        }}>-</button>
        <div onClick={()=>alert("has agregado " + contador + " unidad/es")}>Agregar al carrito</div>
    </div>
  )
}

export default ItemListContainer