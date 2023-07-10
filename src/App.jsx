import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Logout from './pages/Logout/Logout'
import Signup from './pages/Signup/Signup'
import NotFound from './pages/NotFound/NotFound'
import Login from './pages/Login/Login'
import LoginForm from './pages/Admin/LoginForm';
import Footer from './components/Footer/Footer'
import Dashboard from './pages/Dashboard/Dashboard';

function App() {

  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/adminlogin' element={<LoginForm />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='' element={<NotFound />} />
        </Routes>

        <Footer />
      </BrowserRouter>


    </>
  )
}

export default App
