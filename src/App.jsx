import './App.css'
import NavBar from "./components/core/Header.jsx"
import Footer from './components/core/Footer.jsx'
import { Outlet } from "react-router";

function App() {

  return (
    <div className='flex flex-col w-full flex-1'>
      <NavBar /> {/* Navbar */}
      <main className='flex flex-col w-full flex-1'>
        <Outlet /> {/* Renders whatever page the user is on*/}
      </main>
      <Footer /> {/* Disclaimers*/}
    </div>
  )
}

export default App
