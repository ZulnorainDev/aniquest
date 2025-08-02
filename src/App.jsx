import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '././pages/RegisterUser/Login'
import Home from './pages/Home'
import ResetPassword from './pages/ForgetPage/ResetPassword'
import Otp from './pages/ForgetPage/Otp'
import NewPassword from './pages/ForgetPage/NewPassword'
import Price from './pages/Price'
import AboutUs from './pages/AboutUs'
import Solution from './pages/Solution'



const App = () => {
  return (
    <div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forget' element={<ResetPassword />} />
        <Route path='/otp' element={<Otp />} />
        <Route path='/new_password' element={<NewPassword />} />
        <Route path='/price' element={<Price />} />
        <Route path='/aboutUs' element={<AboutUs />} />
        <Route path='/solution' element={<Solution />} />



      </Routes>
    </div>
  )
}

export default App