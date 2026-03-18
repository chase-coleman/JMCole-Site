import { useState } from 'react'
import './App.css'
import NavBar from "./components/core/Header.jsx"
import Body from './components/core/Body.jsx'
import Footer from './components/core/Footer.jsx'
import { Outlet } from "react-router";

function App() {

  return (
    <>
    <div className='flex flex-col items-center'>
    <NavBar /> {/* Navbar */}
    <Outlet /> {/* Renders whatever page the user is on*/}
    <Footer /> {/* Disclaimers*/}
    </div>
    </>
  )
}

export default App
