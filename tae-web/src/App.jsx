/* REACT IMPORTS */ 
import { BrowserRouter, Routes, Route } from "react-router-dom"

/* PAGE IMPORTS */ 
import Home from "./pages/home/Home.jsx"
import About from "./pages/about/About.jsx"
import Contact from "./pages/contact/Contact.jsx"
import Projects from "./pages/projects/Projects.jsx"
import NoPage from "./pages/NoPage.jsx"

/* COMPONENT IMPORTS */
import Header from "./components/header/Header.jsx"
import Footer from "./components/footer/Footer.jsx"

function App() {
  return(
    <div className="container">
      <BrowserRouter>
        <Header style={{position: "sticky"}}/>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ div>
  )
}

export default App
