/* REACT IMPORTS */ 
import { BrowserRouter, Routes, Route } from "react-router-dom"

/* PAGE IMPORTS */ 
import Home from "../../Tae Web/src/pages/home/Home.jsx"
import NoPage from "../../Tae Web/src/pages/NoPage.jsx"

function App() {
  return(
    <>
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
