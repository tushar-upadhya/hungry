import "./App.css";
import Cards from "./components/Cards";
import Category from "./components/Category";
import Food from "./components/Food";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

import Navbar from "./components/Navbar";

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <Cards />
            <Food />
            <Category />
            <Footer />
        </>
    );
}

export default App;
