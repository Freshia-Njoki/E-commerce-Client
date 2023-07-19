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
import Dashboard from './components/Dashboard/Dashboard';
import PlaceOrder from './components/placeorder/PlaceOrder';
import AdminDashboard from './pages/Admin/Dashboard/AdminDashboard';
import Completion from './components/Stripe/Completion';
// import BarChart from './components/Charts/BarChart';
// import { useState } from 'react';
// import { UserData } from './Data';


function App() {
  // const [UserData, setUserData] = useState({
  //   label: UserData.map((data) => data.year),
  //   datasets: [{
  //     label: "USers Gained",
  //     data: UserData.map((data) => data.userGain),
  //   }]
  // })


  return (
    <>
      {/* <BarChart chartData={UserData} /> */}

      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/completion" element={<Completion />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/adminsignup' element={<AdminSignup />} />
          <Route path='/adminlogin' element={<LoginForm />} />
          <Route path='/dashboard' element={<Dashboard />} />

          <Route path='/placeorder' element={<PlaceOrder />} />
          <Route path='/admindashboard' element={<AdminDashboard />} />

          <Route path='*' element={<NotFound />} />
        </Routes>

        <Footer />
      </BrowserRouter>


    </>
  )
}

export default App
