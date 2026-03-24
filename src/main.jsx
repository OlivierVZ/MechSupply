import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import {CartProvider} from "./context/CartContext.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <CartProvider>
              <App />
          </CartProvider>

      </BrowserRouter>

  </StrictMode>,
)
