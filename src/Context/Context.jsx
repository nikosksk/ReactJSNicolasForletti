import { Children, createContext, useEffect, useState } from "react";

const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState(()=> {
        try{
            const prodcutosLocalStorage = localStorage.getItem('cartProductos')
            return prodcutosLocalStorage ? JSON.parse(prodcutosLocalStorage) : [];
        } catch (err){
            return [];
        }
    })
}

useEffect(()=> {
    localStorage.setItem('cartProductos', JSON.stringify(cartItems));
}, [cartItems]);

const addItemToCart = (product) => {
    const inCart = cartItems.find((productInCart)=> productInCart.id === product.id);

}
if(inCart){
    setCartItem(
        cartItems.map((productInCart)=> {
            if(productInCart.id === product.id) {
                return {...inCart, amount: inCart.amount + 1};
            } else return productInCart;
        })
    )
} else {
    setCartItems([...cartItems, {...product, amount: 1}])

const deleteItemCart = (product) => {
    const inCart = cartItems.find((productInCart)=> productInCart.id === product.id);
    if(inCart.amount === 1){
        setCartItems.filter(productInCart => productInCart.id !== product.id)
    } else {
        setCartItems((productInCart) => {
            if(productInCart.id === product.id){
                return {...inCart, amount: inCart.amount - 1}
            } else return productInCart
        })
}
}
return (
    <CartContext.Provider value={(cartItems, addItemCart, deleteItemCart)}>
        {children}
    </CartContext.Provider>
)
}
}


