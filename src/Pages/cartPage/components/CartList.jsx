import { useState } from "react"

import { useCart } from "../../../context/CartContext"
import { CartCard } from "./CartCard"
import Checkout from "./Checkout"


const CartList = () => {
  const {cartList,total} = useCart()
  const [order,setOrder] = useState(false)
  return (
    <>
    <section>
    <p className="text-2xl text-center font-semibold my-10 underline underline-offset-8">
      My Cart 
    </p>
  </section>
  
  <section>
      {cartList.map(product=>(
          <CartCard key={product.id}  product={product}/>
      ))}
  </section>

  <section className="max-w-4xl m-auto">
    <div className="flex flex-col p-2 border-b text-lg">
      <p className="flex justify-between my-2">
        <span className="font-semibold">Total Amount:</span>
        <span>${total}</span>
      </p>
    </div>
    <div className="text-right my-5">
      <button onClick={()=> setOrder(true)} type="button" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-base px-7 py-2.5 mr-2 mb-2">
        PLACE ORDER <i className="ml-2 bi bi-arrow-right"></i>
      </button>
    </div>
  </section>
  {order && <Checkout setOrder={setOrder}/>}
</>
  )
}

export default CartList
