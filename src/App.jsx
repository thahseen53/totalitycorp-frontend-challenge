
import { Route, Routes } from "react-router-dom"
import Header from "./Components/Header"
import ProductPage from "./Pages/producPages/ProductPage"
import MainLayout from "./Components/MainLayout"
import CartPage from "./Pages/cartPage/CartPage"
import { OrderSuccess } from "./Pages/OrderSuccess"

function App() {


  return (
    <Routes>
      <Route path="/" element={<MainLayout/>}>
      <Route index element={<ProductPage/>}/>
      <Route path="cart" element={<CartPage/>}/>
      <Route path="order-summary" element={<OrderSuccess/>}/>
      </Route>
    </Routes>
    
    )

}

export default App
