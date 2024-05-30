/* REACT IMPORTS */ 
import { BrowserRouter, Routes, Route } from "react-router-dom"

/* PAGE IMPORTS */ 
import Home from "./pages/home/Home.jsx"
import NoPage from "./pages/NoPage.jsx"

/* APP COMPONENT */
import Header from "./components/header/Header.jsx"

function App() {
  return(
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
