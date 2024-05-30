/* React IMPORTS */ 

/* STYLE IMPORTS */
import style from "./home.module.css"

/* COMPONENT IMPORTS */
import Header from "../../components/header/Header.jsx"
import Footer from "../../components/footer/Footer.jsx"


function Home() {
    return (
        <>
            <Header />
            <h1>Home</h1>
            <Footer />
        </>
    )
}

export default Home