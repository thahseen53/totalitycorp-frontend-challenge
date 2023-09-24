import { Link } from "react-router-dom"

export const OrderSuccess = () => {
    return (
      <section className="text-xl text-center max-w-4xl mx-auto my-10 py-5  rounded">
          <div className="my-5">
              <p className="bi bi-check-circle text-green-600 text-7xl mb-5"></p>
              <p>Thank you  for the order!</p>
              <p>Your Order ID: 56772729</p>          
          </div>
          <div className="my-5">
              <p>Your order is confirmed.</p>
              <p>Please check your mail </p>
              
          </div>
          <Link to="/" type="button" className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 focus:outline-none">Continue Shopping <i className="ml-2 bi bi-cart"></i></Link>
      </section>
    )
  }