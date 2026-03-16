import Home from "../pages/Home";
import FAQs from "../pages/FAQs";
import T65 from "../pages/T65";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Options from "../pages/Options";
import { useLocation } from 'react-router'

const Body = () => {
  const path = useLocation().pathname
  if (path === "/about") return <About />
  if (path == "/medicare-faqs") return <FAQs />
  if (path == "/turning-65") return <T65 />
  if (path == "/contact") return <Contact />
  if (path == "/medicare-options") return <Options />
  return <Home />
}

export default Body;