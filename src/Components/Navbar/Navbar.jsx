import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/Pocket Coffe Logo Hor.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
<header className="fixed w-screen flex justify-center rounded-full pt-2 top-2 left-0 z-50">
    <nav className="bg-primary/70 w-[95vw] backdrop-blur-sm shadow-lg px-5 sm:px-15 py-5 flex justify-between
    items-center m-2 rounded-full border border-accent/30">
        <div className="logo">
            <a href="#home"><img src={logo} alt="Pocket Coffee Logo" className="h-8"/></a>
        </div>
        
        {/* Desktop Menu */}
        <div className="navMenu">
            <ul className="hidden sm:flex flex-row text-center md:gap-3 justify-between 
            items-center sm:gap-8">
                <li><a href="#home" className="text-putih/70 hover:text-putih font-semibold text-md sm:text-lg transition-all ease-in-out duration-300 hover:bg-secondary/40 px-3 py-1 rounded-full">
                    Home</a></li>
                <li><a href="#about" className="text-putih/70 hover:text-putih font-semibold text-md sm:text-lg transition-all ease-in-out duration-300 hover:bg-secondary/40 px-3 py-1 rounded-full">
                    About</a></li>
                <li><a href="#menu" className="text-putih/70 hover:text-putih font-semibold text-md sm:text-lg transition-all ease-in-out duration-300 hover:bg-secondary/40 px-3 py-1 rounded-full">
                    Menu</a></li>
                <li><a href="#testimonial" className="text-putih/70 hover:text-putih font-semibold text-md sm:text-lg transition-all ease-in-out duration-300 hover:bg-secondary/40 px-3 py-1 rounded-full">
                    Testimonial</a></li>
            </ul>
        </div>

        {/* Hamburger Button - Mobile */}
        <button 
          onClick={toggleMenu}
          className="sm:hidden text-putih text-2xl p-2 hover:bg-secondary/40 rounded-full transition-all duration-300"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
    </nav>

    {/* Mobile Menu */}
    {isMenuOpen && (
      <div 
        className="sm:hidden fixed inset-0 top-20 bg-black/50 backdrop-blur-sm z-40"
        onClick={closeMenu}
      >
        <div 
          className="bg-primary/95 mx-4 mt-2 rounded-2xl shadow-xl border border-accent/30 animate-zoom-in"
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="flex flex-col py-4">
            <li>
              <a 
                href="#home" 
                onClick={closeMenu}
                className="block text-putih/70 hover:text-putih hover:bg-secondary/40 font-semibold text-lg px-6 py-3 transition-all ease-in-out duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                onClick={closeMenu}
                className="block text-putih/70 hover:text-putih hover:bg-secondary/40 font-semibold text-lg px-6 py-3 transition-all ease-in-out duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#menu" 
                onClick={closeMenu}
                className="block text-putih/70 hover:text-putih hover:bg-secondary/40 font-semibold text-lg px-6 py-3 transition-all ease-in-out duration-300"
              >
                Menu
              </a>
            </li>
            <li>
              <a 
                href="#testimonial" 
                onClick={closeMenu}
                className="block text-putih/70 hover:text-putih hover:bg-secondary/40 font-semibold text-lg px-6 py-3 transition-all ease-in-out duration-300"
              >
                Testimonial
              </a>
            </li>
          </ul>
        </div>
      </div>
    )}
</header>
  )
}

export default Navbar