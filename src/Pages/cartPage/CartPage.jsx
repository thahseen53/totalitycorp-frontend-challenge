
import { useCart } from "../../context/CartContext"
import CartEmpty from "./components/CartEmpty"
import CartList from "./components/CartList"


const CartPage = () => {
    const {cartList} = useCart()
  return (
    <>
    {cartList.length ? <CartList/> : <CartEmpty/>}
    
    </>
  )
}

export default CartPage
