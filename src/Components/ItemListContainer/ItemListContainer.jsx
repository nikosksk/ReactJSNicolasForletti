import React, {useState} from "react";
import Title from "../Navbar/Title/Title";

export const ItemListContainer = ({texto}) => {
    const [suma, setSuma] = useState(0)
    
    return (
        <div>
        <Title greeting={texto}/>

        <button onClick={()=>{
            setSuma(suma +1)
        }}>+</button>
        {suma}
        <button onClick={()=>{
            setSuma(suma -1)
        }}>-</button>

        </div>
    )
}

export default ItemListContainer;