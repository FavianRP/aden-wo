import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <h1 className="logo">Kreasiku Decoration</h1>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Layanan</a></li>
        <li><a href="#gallery">Galeri</a></li>
        <li><a href="#packages">Paket</a></li>
        <li><a href="#contact">Kontak</a></li>
      </ul>
    </nav>
  );
}
