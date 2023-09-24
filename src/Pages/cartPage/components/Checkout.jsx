import { useNavigate } from "react-router-dom";
import { useCart } from "../../../context/CartContext";

const Checkout = ({ setOrder }) => {
  const { clearCart, total } = useCart();
  const navigate = useNavigate();
    const handleSubmit = (e)=>{
        e.preventDefault()
     clearCart();
     navigate('/order-summary')
    }
  return (
    <section>
      <div className="fixed top-0 left-0 w-full h-full"></div>
      <div
        id="authentication-modal"
        tabIndex="-1"
        className="mt-5 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex"
        aria-modal="true"
        role="dialog"
      >
        <div className="relative p-4 w-full max-w-md h-full md:h-auto overflow-y-auto">
          <div className="relative bg-[#6CA3BB] rounded-lg shadow">
            <button
              onClick={() => setOrder(false)}
              type="button"
              className="absolute top-3 right-2.5 text-white bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              data-modal-toggle="authentication-modal"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="py-6 px-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-white">
                <i className="bi bi-credit-card mr-2"></i>CARD PAYMENT
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Name:
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-white dark:text-gray-300"
                  >
                    Email:
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="card"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Phone Number:
                  </label>
                  <input
                    type="number"
                    name="card"
                    id="card"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                </div>
                <div>
                  <label
                    htmlFor="code"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Shipping Location
                  </label>
                  <input
                    type="text"
                    name="code"
                    id="code"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                  />
                </div>
                <p className="mb-4 text-2xl font-semibold text-black text-center">
                  Rs {total}
                </p>
                <button
                  type="submit"
                  className="w-full text-white bg-green-400 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  <i className="mr-2 bi bi-lock-fill"></i>Confirm Order
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
