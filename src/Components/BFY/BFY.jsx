import { Link } from "react-router-dom";
import dataBfy from "./dataBfy.js";
import V60 from "../../assets/produk/V60.png";
import { FaCrown, FaMugHot, FaStar } from "react-icons/fa";
import Trans2 from "../Trans/Trans2.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const BFY = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  return (
    <>
    <Trans2 />
      <div id="menu" className="mt-20 py-10 font-bold bg-putih min-h-[700px]">
        <h1
          className="text-center text-5xl font-comic text-primary mb-10"
          data-aos="fade-down"
        >
          Best For You
        </h1>

        <div className="flex mt-28 flex-row justify-center relative items-center gap-[50px] sm:gap-8 px-10 flex-wrap">
          {dataBfy.map((item, idx) => (
            <Link to="/product" key={item.id}>
              <div
                className="bg-accent rounded-2xl shadow-lg p-5 w-[250px] hover:shadow-xl hover:bg-primary group transition-all ease-in-out duration-300 border border-accent/30"
                data-aos="zoom-in-up"
                data-aos-delay={idx * 100}
              >
                <div className="z-10 rounded-xl flex justify-center items-center">
                  <img
                    src={item.gambar}
                    alt={item.nama}
                    className="w-[200px] h-[250px] -mt-24 group-hover:scale-110 group-hover:rotate-3 transition-all ease-in-out duration-500"
                    data-aos="zoom-in"
                  />
                </div>{" "}
                <br />
                <h2 className="text-xl text-primary mt-4 text-center transition-all ease-in-out duration-500 group-hover:text-putih " data-aos="fade-up">
                  {item.nama}
                </h2>
                <p className="text-secondary text-center mt-2 transition-all ease-in-out duration-500 group-hover:text-accent " data-aos="fade-up" data-aos-delay="200">
                  {item.harga}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-10 items-center mt-10">
          <Link to="/product">
            <button className="w-35 bg-secondary hover:bg-primary text-putih font-semibold py-2 rounded-full mt-4 transition-all ease-in-out duration-300 px-6">
              View More
            </button>
          </Link>
          <a href="/PriceList.jpeg" download="PriceList-PocketCoffee.jpeg">
            <button className="w-60 bg-secondary hover:bg-primary text-putih font-semibold py-2 rounded-full mt-4 transition-all ease-in-out duration-300 px-6">
              Download Price List Kami
            </button>
          </a>
        </div>
        <div className="konGaris w-full flex justify-center">
          <div className="garis bg-primary w-[90vw] mt-10 h-1 rounded-full"></div>
        </div>

        {/* Premium Blend Coffee Section */}
        <div className="Special flex flex-col lg:flex-row justify-center items-start gap-10 px-10 lg:px-20 mt-16" data-aos="fade-up">
          {/* Kiri - Gambar Kopi */}
          <div className="w-full lg:w-2/5 flex justify-center items-center">
            <img
              src={V60}
              alt="Premium Coffee"
              className="w-[350px] h-auto animate-float"
              data-aos="zoom-in"
            />
          </div>

          {/* Kanan - Konten */}
          <div className="w-full lg:w-3/5 flex flex-col" data-aos="fade-right">
            {/* Title & Description */}
            <h1 className="text-start text-4xl font-comic text-primary mb-4 italic" data-aos="fade-up">
              Our Premium Drip Coffee
            </h1>
            <p className="text-md font-medium text-gray-600 leading-relaxed mb-8">
              Harga bukanlah segalanya, namun kualitas adalah prioritas utama kami.
              Nikmati cita rasa kopi terbaik yang diseduh dengan penuh perhatian dan
              keahlian, karena setiap tegukan adalah pengalaman istimewa yang
              pantas Anda dapatkan.
            </p>

            {/* Features & Tea Lover */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Features */}
              <div className="features flex flex-col gap-5">
                <div className="flex items-center gap-4">
                  <div className="bg-yellow-100 p-4 rounded-full">
                    <FaCrown className="text-xl text-yellow-600" />
                  </div>
                  <span className="text-lg text-primary font-semibold">
                    Premium Coffee
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-orange-100 p-4 rounded-full">
                    <FaMugHot className="text-xl text-orange-500" />
                  </div>
                  <span className="text-lg text-primary font-semibold">
                    Good Smell
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-amber-100 p-4 rounded-full">
                    <FaStar className="text-xl text-amber-500" />
                  </div>
                  <span className="text-lg text-primary font-semibold">
                    Good Taste
                  </span>
                </div>
              </div>

              {/* Garis Vertikal + Tea Lover */}
              <div className="flex flex-row items-stretch gap-6">
                <div className="w-1 bg-primary/40 rounded-full"></div>
                <div className="flex flex-col justify-center">
                  <h2 className="text-2xl font-comic text-primary mb-3 italic">
                    V60 / Japanese
                  </h2>
                  <p className="text-md font-medium text-gray-500 leading-relaxed max-w-xs">
                    V60 adalah metode seduh kopi tetes yang berasal dari Jepang, dikenal dengan desain corongnya yang unik dan kemampuan untuk menghasilkan cita rasa
                    kopi yang bersih dan jernih. Sehingga menghasilkan secangkir kopi dengan aroma yang kaya dan rasa yang seimbang.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BFY;
