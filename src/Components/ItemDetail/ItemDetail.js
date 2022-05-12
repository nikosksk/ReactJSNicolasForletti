
import React from 'react'

const ItemDetail = ({data}) => {
  return (
    <div className='container'>
        <div className='detail'>
            <img className='detail_image' src="*" alt="*">
                <div className='container'>
                    <h1>{data.title}</h1>
                </div>
            </img>
        </div>
    </div>
  )
}

export default ItemDetail