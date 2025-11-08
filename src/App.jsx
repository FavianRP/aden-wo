import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Packages from "./components/Packages";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // animasi hanya muncul sekali
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Packages />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
