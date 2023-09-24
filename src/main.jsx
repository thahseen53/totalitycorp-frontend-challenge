import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FilterContextProvider } from './context/FilterContext.jsx'
import { CartContextProvider } from './context/CartContext.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FilterContextProvider>
      <CartContextProvider>
        <BrowserRouter>  <App /></BrowserRouter>
  
    </CartContextProvider>
    </FilterContextProvider>
    
  </React.StrictMode>,
)
