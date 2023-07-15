import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Logout from './pages/Logout/Logout'
import Signup from './pages/Signup/Signup'
import NotFound from './pages/NotFound/NotFound'
import Login from './pages/Login/Login'
import AdminSignup from './components/adminsignup/AdminSignup'
import LoginForm from './pages/Admin/LoginForm';
import Footer from './components/Footer/Footer'
import Dashboard from './pages/Dashboard/Dashboard';
import Categories from './components/Categories/Categories';
import Order from './pages/order/order'
import Cart from './pages/cart/Cart';
import PlaceOrder from './components/placeorder/PlaceOrder';
import AdminLogout from './pages/Admin/AdminLogout/AdminLogout';
import Marketing from './pages/Admin/Marketing/Marketing'
import Orders from './pages/Admin/Orders/Orders'
import Products from './pages/Admin/Products/Products'
import Rates from './pages/Admin/Rates/Rates'
import Report from './pages/Admin/Report/Report'
import AdminDashboard from './pages/Admin/Dashboard/AdminDashboard';

function App() {

  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/adminsignup' element={<AdminSignup />} />
          <Route path='/adminlogin' element={<LoginForm />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/order' element={<Order />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/placeorder' element={<PlaceOrder />} />
          <Route path='/admindashboard' element={<AdminDashboard />} />
          <Route path='/adminlogout' element={<AdminLogout />} />
          <Route path='/marketing' element={<Marketing />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/products' element={<Products />} />
          <Route path='/rates' element={<Rates />} />
          <Route path='/report' element={<Report />} />

          <Route path='' element={<NotFound />} />
        </Routes>

        <Footer />
      </BrowserRouter>


    </>
  )
}

export default App
