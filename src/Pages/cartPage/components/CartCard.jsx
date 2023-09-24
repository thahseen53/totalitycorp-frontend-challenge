import { Link } from "react-router-dom"
import { useCart } from "../../../context/CartContext"


export const CartCard = ({product}) => {
  const {removeFromCart} = useCart()

    return (
      <div className="flex flex-wrap justify-between border-b  max-w-4xl m-auto p-2 mb-5 w-full">
        <div className="flex">
            <Link href="">
              <img className="w-32 rounded" src={product.image} alt={product.title} />
            </Link>
            <div className="">
              <Link href="">
                <p className="text-lg ml-2">{product.title}</p>
              </Link>            
              <button onClick={()=>removeFromCart(product)} className="text-base ml-2 text-red-400">Remove</button>
            </div>
        </div>
        <div className="text-lg m-2">
          <span>Rs {product.price}</span>
        </div>
      </div>
    )
  }