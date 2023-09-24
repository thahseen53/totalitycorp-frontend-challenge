import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"


const Header = () => {
  const {cartList} = useCart()
  return (
    <div className="flex flex-row justify-around p-5 items-center md:justify-between shadow-lg">
      <div>
        <h1 className="font-bold text-2xl md:text-3xl">TOTALITY CORP</h1>
      </div>
      <div className="flex md:text-1xl md:font-semibold">
        <span><Link to="cart">Cart</Link></span>
        <div className="rounded-full bg-red-500 text-center ml-1 px-2"><span className="text-white">{cartList.length}</span></div>
      </div>
    </div>
  )
}

export default Header
