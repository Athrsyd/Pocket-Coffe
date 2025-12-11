import bg from "../../assets/FooterBg.jpg";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import logo from "../../assets/Pocket Coffe Logo Hor.svg";


const Footer = () => {
  return (
    <footer className="relative text-putih overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        // style={{ backgroundImage: `url(${bg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#5D4037]/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 lg:px-20 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            
            {/* Brand Section */}
            <div className="flex flex-col gap-4">
              <img src={logo} alt="Pocket Coffee Logo" />
              <p className="text-sm text-gray-200 leading-relaxed">
                  Pocket Coffee hadir untuk memberikan pengalaman kopi terbaik dalam genggaman Anda.
              </p>
              <a 
                href="https://www.instagram.com/pocketcoffe_?igsh=MTh5cmFrZ2lqem9tYQ==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-2 inline-block bg-transparent border border-white text-white px-5 py-2 rounded-full text-sm hover:bg-white hover:text-[#5D4037] transition-all duration-300 w-fit"
              >
                Visit our Instagram Account
              </a>
            </div>

            {/* Footer Links */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-semibold text-white">Footer Links</h3>
              <ul className="flex flex-col gap-2 text-gray-200">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#menu" className="hover:text-white transition-colors">Menu</a></li>
                <li><a href="#testimonial" className="hover:text-white transition-colors">Testimonial</a></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-semibold text-white">Quick Links</h3>
              <ul className="flex flex-col gap-2 text-gray-200">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#menu" className="hover:text-white transition-colors">Menu</a></li>
                <li><a href="#testimonial" className="hover:text-white transition-colors">Testimonial</a></li>
              </ul>
            </div>

            {/* Address */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-semibold text-white">Address</h3>
              <div className="flex flex-col gap-2 text-gray-200">
                <p>Jakarta, Indonesia</p>
                <p>+62 88211971675</p>
              </div>
              {/* Social Icons */}
              <div className="flex gap-4 mt-2">
                <a href="https://www.instagram.com/pocketcoffe_?igsh=MTh5cmFrZ2lqem9tYQ==" className="text-white text-2xl hover:text-accent transition-colors">
                  <FaInstagram />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Coffee Beans Decoration - Bottom */}
        {/* <div 
          className="h-32 bg-cover bg-bottom bg-no-repeat"
          style={{ backgroundImage: `url(${bg})` }}
        ></div> */}

        {/* Copyright */}
        <div className="bg-[#3E2723] py-4">
          <div className="container mx-auto text-center">
            <p className="text-sm text-gray-300">
              &copy; {new Date().getFullYear()} Pocket Coffee. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer