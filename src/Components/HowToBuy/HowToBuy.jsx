import { FaCoffee, FaComments, FaMoneyBillWave, FaMugHot, FaInstagram, FaWhatsapp, FaTimes } from "react-icons/fa";

const steps = [
  {
    id: 1,
    icon: <FaCoffee />,
    title: "Pilih Kopi Anda",
    description: "Tentukan kopi atau minuman yang Anda inginkan dari menu kami.",
  },
  {
    id: 2,
    icon: <FaComments />,
    title: "Hubungi Kami",
    description: "Hubungi pemilik melalui DM Instagram atau WhatsApp untuk memesan.",
  },
  {
    id: 3,
    icon: <FaMoneyBillWave />,
    title: "Lakukan Pembayaran",
    description: "Bayar pesanan Anda secara Cash atau Cashless sesuai keinginan.",
  },
  {
    id: 4,
    icon: <FaMugHot />,
    title: "Nikmati Minuman",
    description: "Nikmati minuman berkualitas dari Pocket Coffee!",
  },
];


const HowToBuy = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-4 animate-fade-in"
      onClick={onClose}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      
      {/* Modal Content */}
      <div 
        className="relative bg-putih rounded-2xl w-[95vw] max-w-md md:max-w-3xl shadow-2xl animate-zoom-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 z-10 bg-primary/10 hover:bg-primary/20 text-primary p-1.5 rounded-full transition-colors duration-300"
        >
          <FaTimes className="text-base" />
        </button>

        <div className="py-4 px-3 md:py-6 md:px-6">
      {/* Title */}
      <div className="text-center mb-3 md:mb-4">
        <h1 className="text-lg md:text-2xl font-comic font-bold text-primary mb-1">
          Cara Memesan
        </h1>
        <p className="text-gray-600 text-[10px] md:text-sm max-w-xl mx-auto leading-tight">
          Ikuti langkah mudah berikut untuk menikmati kopi terbaik dari Pocket Coffee
        </p>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 max-w-4xl mx-auto">
        {steps.map((step) => (
          <div
            key={step.id}
            className="bg-white rounded-lg md:rounded-xl p-2 md:p-3 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center group"
          >
            {/* Step Number */}
            <div className="w-5 h-5 md:w-6 md:h-6 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-[10px] md:text-xs mb-1 md:mb-2">
              {step.id}
            </div>
            
            {/* Icon */}
            <div className="w-8 h-8 md:w-10 md:h-10 bg-accent/30 rounded-full flex items-center justify-center mb-1 md:mb-2 group-hover:bg-accent transition-colors duration-300">
              <span className="text-base md:text-xl text-primary">{step.icon}</span>
            </div>
            
            {/* Title */}
            <h3 className="text-[11px] md:text-sm font-bold text-primary mb-0.5 md:mb-1 leading-tight">{step.title}</h3>
            
            {/* Description */}
            <p className="text-gray-600 text-[8px] md:text-[10px] leading-tight">{step.description}</p>
          </div>
        ))}
      </div>

      {/* Contact Info */}
      <div className="mt-3 md:mt-4 text-center">
        <h2 className="text-sm md:text-lg font-comic font-bold text-primary mb-2 md:mb-3">
          Hubungi Kami Sekarang
        </h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-1.5 md:gap-2">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/pocketcoffe_?igsh=MTh5cmFrZ2lqem9tYQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 md:gap-2 bg-linear-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full hover:opacity-90 transition-opacity duration-300 shadow-md text-xs md:text-sm"
          >
            <FaInstagram className="text-sm md:text-lg" />
            <span className="font-semibold">@pocketcoffee_</span>
          </a>
          
          {/* WhatsApp */}
          <a
            href="https://wa.me/6288211971675"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 md:gap-2 bg-green-500 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full hover:bg-green-600 transition-colors duration-300 shadow-md text-xs md:text-sm"
          >
            <FaWhatsapp className="text-sm md:text-lg" />
            <span className="font-semibold">+62 812-3456-7890</span>
          </a>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default HowToBuy;
