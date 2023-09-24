import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

const star = (ratings) => {
  let stars = "";
  for (let i = 0; i < ratings; i++) {
    stars += "⭐";
  }
  return stars;
};

const Card = ({ product }) => {
  const { cartList, addToCart, removeFromCart } = useCart();
  const [itemInCart, setItemInCart] = useState(false);
  useEffect(() => {
    const cartProduct = cartList.find((item) => item.id === product.id);
    if (cartProduct) {
      setItemInCart(true);
    } else {
      setItemInCart(false);
    }
  }, [cartList, product.id]);
  return (
    <div className="flex flex-col p-5 items-center shadow-lg w-8/12 mx-auto my-2 md:m-0 md:w-[15.2%] bg-white">
      <img className="w-9/12 rounded-lg" src={product.image} alt="item image" />
      <div className="flex flex-col w-3/2 items-center m-2">
        <span className="text-1xl font-bold">{product.title}</span>
        <span className="font-semibold text-gray-400">
          Price : ₹ {product.price}
        </span>
        <span>
          {star(product.ratings)} {product.ratings}/5
        </span>
      </div>
      {  !itemInCart && <button
        className="bg-[#333333] text-white w-full py-2 rounded-lg"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>}
      {  itemInCart && <button
        className="bg-red-500 text-white w-full py-2 rounded-lg"
        onClick={() => removeFromCart(product)}
      >
        Remove Item from Cart
      </button>}
      
    </div>
  );
};

export default Card;
