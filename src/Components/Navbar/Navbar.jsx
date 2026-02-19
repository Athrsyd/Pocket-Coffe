import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/NewLogoPC.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuAktif, setMenuAktif] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setIsScrolled(true);
      }
      else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const testScroll = () => {
    const scrollTop = window.scrollY;
    console.log("Scroll position:", scrollTop);
  }
  //HASIL TEST SCROLl Laptop
  //Home : 0 - 901
  //About : 902 - 2084
  //Menu : 2085 - 3084
  //Testimonial : 3094 - seterusnya

  //HASIL TEST SCROLl Tablet
  //Home : 0 - 1104
  //About : 1105 - 2287
  //Menu : 2288 - 2780
  //Testimonial : 2781 - seterusnya

  const updateMenuAktif = () => {
    const scrollPosition = window.scrollY;
    if(window.innerWidth >= 1000) {
    if (scrollPosition >= 0 && scrollPosition < 889) {
      setMenuAktif("home");
    }
    else if (scrollPosition >= 889 && scrollPosition < 2050) {
      setMenuAktif("about");
    }
    else if (scrollPosition >= 2050 && scrollPosition < 3085) {
      setMenuAktif("menu");
    }
    else {
      setMenuAktif("testimonial");
    }
  }
  else {
    if (scrollPosition >= 0 && scrollPosition < 683) {
      setMenuAktif("home");
    }
    else if (scrollPosition >= 683 && scrollPosition < 1611) {
      setMenuAktif("about");
    }
    else if (scrollPosition >= 1611 && scrollPosition < 4047) {
      setMenuAktif("menu");
    }
    else {
      setMenuAktif("testimonial");
    }
  }
  };

  window.addEventListener("scroll", updateMenuAktif);
  // updateMenuAktif();

  // const toggleIcon = () => {
  //   return (
  //     isMenuOpen ? <>
  //       <span className="bg-white h-0.5 w-5 block"></span>
  //       <span className="bg-white h-0.5 w-5 block"></span>
  //     </> : <div div className="flex flex-col gap-1">
  //       <span className="bg-white h-0.5 w-5 block"></span>
  //       <span className="bg-white h-0.5 w-5 block"></span>
  //       <span className="bg-white h-0.5 w-5 block"></span>
  //     </div>
  //   )
  // };


  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed w-screen flex justify-center rounded-full top-2 left-0 z-50">
      <nav className={`backdrop-blur-sm z-order-last shadow-lg px-3 sm:px-10 py-3 flex justify-between
        items-center border border-accent/50  transition-all duration-700 ease-in-out
        ${isScrolled ? "w-full bg-accent/70 shadow-xl -mt-2" : "w-9/10 rounded-3xl m-2 bg-accent/70"}`}>
        <div className="logo">
          <a href=""><img src={logo} alt="Pocket Coffee Logo" className="h-10" /></a>
        </div>

        {/* Desktop Menu */}
        <div className="navMenu">
          <ul className="hidden sm:flex flex-row text-center md:gap-3 justify-between 
            items-center sm:gap-8">
            {/* <li onClick={() =>  testScroll()}><a href="#iugf" className={`text-putih/70  font-semibold text-md sm:text-lg transition-all ease-in-out duration-300 hover:bg-secondary/40 hover:text-putih px-3 py-1 rounded-full ${menuAktif === "" ? "bg-secondary/40 text-white" : ""}`}>Test</a></li> */}
            <li ><a href="#home" className={`text-putih/70  font-semibold text-md sm:text-lg transition-all ease-in-out duration-300 hover:bg-secondary/40 hover:text-putih px-3 py-1 rounded-full ${menuAktif === "home" ? "bg-secondary/40 text-white" : ""}`}>Home</a></li>
            <li ><a href="#about" className={`text-putih/70  font-semibold text-md sm:text-lg transition-all ease-in-out duration-300 hover:bg-secondary/40 hover:text-putih px-3 py-1 rounded-full ${menuAktif === "about" ? "bg-secondary/40 text-white" : ""}`}>About</a></li>
            <li ><a href="#menu" className={`text-putih/70  font-semibold text-md sm:text-lg transition-all ease-in-out duration-300 hover:bg-secondary/40 hover:text-putih px-3 py-1 rounded-full ${menuAktif === "menu" ? "bg-secondary/40 text-white" : ""}`}>Menu</a></li>
            <li ><a href="#testimonial" className={`text-putih/70  font-semibold text-md sm:text-lg transition-all ease-in-out duration-300 hover:bg-secondary/40 hover:text-putih px-3 py-1 rounded-full ${menuAktif === "testimonial" ? "bg-secondary/40 text-white" : ""}`}>Testimonial</a></li>
          </ul>
        </div>

        {/* Hamburger Button - Mobile */}
        <button
          onClick={toggleMenu}
          className="sm:hidden text-putih text-2xl p-2 hover:bg-secondary/40 rounded-full transition-all duration-300"
        >
          <div className="flex flex-col gap-1">
            <span
              className={`bg-white transition-all duration-300 ease-in-out block
                ${isMenuOpen
                  ? "rotate-45 h-0.5 w-9 rounded-full translate-y-1"
                  : "h-0.5 w-7"
                }`}
            ></span>
            <span
              className={`bg-white transition-all duration-300 ease-in-out block
                ${isMenuOpen
                  ? "opacity-0"
                  : "h-0.5 w-7"
                }`}
            ></span>
            <span
              className={`bg-white transition-all duration-300 ease-in-out block
                ${isMenuOpen
                  ? "-rotate-45 h-0.5 w-9 rounded-full -translate-y-1"
                  : "h-0.5 w-7"
                }`}
            ></span>
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="sm:hidden fixed inset-0 top-0 "
          onClick={closeMenu}
        >
          <div
            className={`bg-primary/95 mx-4 mt-2 rounded-2xl shadow-xl border
            border-accent/30 transition-all duration-300 ease-in-out
            absolute  w-1/2 h-9/10 ${isScrolled ? 'top-14' : 'top-18'} py-4 ${isMenuOpen ? "left-55" : "-right-50"}`}
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="flex flex-col py-4 z-50">
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