import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import produk1 from "./assets/produk/Americano.png";
import produk2 from "./assets/produk/cookiesLatte.png";
import produk3 from "./assets/produk/Ice Latte.png";
import produk4 from "./assets/produk/PT Aren.png";
import produk5 from "./assets/produk/Cappucino.png";
import produk6 from "./assets/produk/Dalgona.png";
import produk7 from "./assets/produk/Spanish.png";
import produk8 from "./assets/produk/Butterscotch.png";
import produk9 from "./assets/produk/Hazelnut.png";
import produk10 from "./assets/produk/Pandan Latte.png";
import produk11 from "./assets/produk/Caramel Latte.png";
import produk12 from "./assets/produk/V60.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const listGambar = [
  {
    id: 1,
    gambar: produk1,
  },
  {
    id: 2,
    gambar: produk2,
  },
  {
    id: 3,
    gambar: produk3,
  },
  {
    id: 4,
    gambar: produk4,
  },
  {
    id: 5,
    gambar: produk5,
  },
  {
    id: 6,
    gambar: produk6,
  },
  {
    id: 7,
    gambar: produk7,
  },
  {
    id: 8,
    gambar: produk8,
  },
  {
    id: 9,
    gambar: produk9,
  },
  {
    id: 10,
    gambar: produk10,
  },
  {
    id: 11,
    gambar: produk11,
  },
  {
    id: 12,
    gambar: produk12,
  },
];

// import Gambar from "./assets/produk/PT Aren.png";
import "./Components/LandingPage/LandingPage.css";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <div
      id="home"
      className="bg-primary overflow-hidden pt-29 min-h-screen flex sm:flex-row justify-between items-center gap-0 sm:gap-10 flex-col-reverse px-5 sm:px-10"
    >
      <div className="hiasan absolute hidden sm:block -top-80 left-100 rotate-30 z-20 rounded-2xl bg-accent w-3xl h-[500px]"></div>
      {/* Kiri - Text */}
      <div className="kiri sm:w-1/2 p-5 sm:p-10 flex flex-col justify-center gap-10 items-start animate-fade-slide-up">
        <h1
          className="text-2xl text-center font-bold text-putih leading-snug md:text-3xl sm:text-2xl sm:text-start"
          data-aos="fade-right"
        >
          Selamat Datang di <br />
          <span className="text-accent font-comic" data-aos="zoom-in" data-aos-delay="200">
            Pocket Coffee Official Web{" "}
          </span>
          <span data-aos="fade-up" data-aos-delay="400">
            Nikmati Kopi Berkualitas di Mana Saja dengan praktis!
          </span>
        </h1>

        <div className="buttons w-full flex flex-row justify-center sm:justify-start items-center" data-aos="fade-up" data-aos-delay="600">
          <a href="#about">
            <button className="bg-secondary hover:bg-accent hover:text-primary hover:scale-110 hover:shadow-xl hover:shadow-accent/30 transition-all ease-in-out duration-300 text-putih font-semibold px-6 py-3 rounded-full mt-5 mr-5 animate-pulse-glow text-sm sm:text-base">
              Siapa Kami?
            </button>
          </a>
          <a href="#menu">
            <button className="bg-primary/70 hover:bg-accent hover:text-primary hover:scale-110 hover:shadow-xl hover:shadow-accent/30 hover:border-accent transition-all ease-in-out duration-300 text-putih font-semibold px-6 py-3 rounded-full mt-5 border border-accent/50 text-sm sm:text-base">
              Rekomendasi kami
            </button>
          </a>
        </div>
      </div>

      {/* Kanan - Slider */}
      <div className="kanan w-full z-40 sm:w-1/2 max-w-md relative mt-5 px-4" data-aos="fade-left">
        <div className="w-full">
          <Slider {...settings}>
            {listGambar.map((item, idx) => (
              <div
                key={item.id}
                className="px-2 outline-none focus:outline-none"
                data-aos="zoom-in"
                data-aos-delay={idx * 100}
              >
                <img
                  src={item.gambar}
                  alt={`Produk ${item.id}`}
                  className="w-full h-auto rounded-xl"
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="absolute top-3 right-5 bg-primary text-sm rounded-lg px-4 py-2 text-accent font-bold animate-bounce-soft shadow-lg" data-aos="fade-down" data-aos-delay="200">
          Sederhana
        </div>
        <div className="absolute bottom-10 left-5 bg-accent text-[10px] rounded-lg px-4 py-2 text-primary font-bold animate-bounce-soft-delayed shadow-lg" data-aos="fade-up" data-aos-delay="400">
          lezat & Mantap
        </div>
      </div>
    </div>
  );
};

export default App;
