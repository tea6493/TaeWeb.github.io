
/* React Imports */
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Page Imports */
import Home from './pages/home/Home.jsx';
import About from './pages/about/About.jsx';
import Projects from "./pages/projects/Projects.jsx";
import Blogs from './pages/blogs/Blogs.jsx';
import NoPage from './pages/NoPage.jsx';

/* Component Imports */
import Header from './components/header/Header.jsx';
import Footer from "./components/footer/Footer.jsx";


function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header style={{position: "sticky"}}/>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ div>
  );
}

export default App;
