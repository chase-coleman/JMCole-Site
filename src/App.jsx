import { useState } from 'react'
import './App.css'
import NavBar from "./components/core/Header.jsx"
import Body from './components/core/Body.jsx'
import Footer from './components/core/Footer.jsx'
import { Outlet } from "react-router";

function App() {

  return (
    <>
    <NavBar />
    <Outlet />
    <Footer />
    </>
  )
}

export default App
