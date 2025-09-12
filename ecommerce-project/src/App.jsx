import { Routes, Route } from "react-router"
import './App.css'
import HomePage from './pages/home/HomePage'
import CheckoutPage from "./pages/checkout/CheckoutPage"
import TrackingPage from "./pages/tracking/TrackingPage"
import OrdersPage from "./pages/orders/OrdersPage"

function App() {


  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="orders" element={<OrdersPage />} />
      <Route path="tracking" element={<TrackingPage />} />
    </Routes>
  )
}

export default App
