import { createContext, useContext, useReducer } from "react"
import { cartReducer } from "./cartReducer"

const initialState ={
    cartList:[],
    total:0,
}
 const CartContext = createContext(initialState)
export const CartContextProvider = ({children})=>{
    const [state,dispatch] = useReducer(cartReducer,initialState)

    const addToCart = (product)=>{
        let updatedList = state.cartList.concat(product)
        let updatedTotal = state.total + product.price

        dispatch({
            type:"ADD_TO_CART",
            payload:{
                products:updatedList,
                total:updatedTotal
            }
        })
        
    }

    const removeFromCart= (product) => {
        const updatedList = state.cartList.filter(item => item.id !== product.id)
        const updatedTotal = state.total - product.price
        dispatch({
            type:"REMOVE_FROM_CART",
            payload:{
                products:updatedList,
                total:updatedTotal
            }
        })
    }
    const clearCart = ()=>{
        dispatch({
            type:"CLEAR_CART"
        })
    }
    const  value ={
        cartList:state.cartList,
        total:state.total,
        addToCart,
        removeFromCart,
        clearCart
    }
    return(
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}