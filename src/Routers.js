import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import VolopayCard from './components/VolopayCard'

const Routers = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path = "*" element = {<VolopayCard />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Routers