import './App.css'
import NavBar from "./components/core/Header.jsx"
import Footer from './components/core/Footer.jsx'
import { Outlet } from "react-router";

function App() {
  return (
    <div className="flex min-h-svh flex-col">
      <NavBar />
      <main className="flex flex-1 flex-col">
        <Outlet /> {/* Renders whatever page the user is on */}
      </main>
      <Footer />
    </div>
  )
}

export default App
