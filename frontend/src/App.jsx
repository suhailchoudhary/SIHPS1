import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import Content1 from './Home/Content1'
import Output1 from './Output/Output1'
import Dataset from './Home/Dataset'
import GetStarted from './Home/GetStarted'
import Faq from './Home/Faq'
import References from './Home/References'
import Login from './Pages/Login'
import ProtectedRoute from './ProtectedRoute'
import Dashboard from './Dashboard/Dashboard'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Content1/>}></Route>
          <Route path='/output' element={<Output1/>}></Route> 
          <Route path='/dataset' element={<Dataset/>}></Route> 
          <Route path='/getstarted' element={<GetStarted/>}></Route>
          <Route path='/faq' element={<Faq/>}></Route>
          <Route path='/references' element={<References/>}></Route>
          <Route path='/output' element={<Output1/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
