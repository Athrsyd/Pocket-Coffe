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
import CoffeeBean from "./Components/BijiKopi/BijiKopi";

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
  if (window.innerWidth >= 768 && window.innerWidth < 1024) {
    return (
      <div
        id="home"
        className="bg-primary overflow-hidden pt-10  min-h-screen flex justify-between items-center flex-col  "
      >
        <CoffeeBean className="hidden sm:block absolute w-12 sm:w-16 lg:w-20 text-white/10 top-10 sm:top-20 left-5 sm:left-10 rotate-12 animate-float" />
        <CoffeeBean className="hidden sm:block absolute w-10 sm:w-14 lg:w-16 text-white/10 bottom-10 sm:bottom-20 right-5 sm:right-20 -rotate-45 animate-floatSlow" />
        <CoffeeBean className="hidden md:block absolute w-16 sm:w-20 lg:w-24 text-white/10 top-1/2 left-1/4 rotate-45 animate-float" />
        <CoffeeBean className="hidden sm:block absolute w-10 sm:w-12 lg:w-14 text-white/10 bottom-5 sm:bottom-10 left-1/4 sm:left-1/3 rotate-12 animate-floatSlow" />

        <div  
        className=" absolute top-5 h-auto w-9/10 hidden md:block">
          <h1 className="absolute font-comic text-center top-45 xl:top-25 font-black text-accent text-9xl left-10 xl:left-35">POCKET COFFE</h1>
          <h1 className="absolute font-comic text-center top-45 xl:top-25 font-black text-transparent [-webkit-text-stroke:1px_#F7D08A] xl:[-webkit-text-stroke:3px_#F7D08A] text-9xl left-10 xl:left-35 z-999"
          >POCKET COFFE</h1>
        </div>


        {/* Kanan - Slider */}
        <div className="kanan w-full z-40 max-w-xs relative mt-3 pt-40 " data-aos="fade-left">
          <div className="w-full">
            <Slider {...settings}>
              {listGambar.map((item, idx) => (
                <div
                  key={item.id}
                  className="px-1 outline-none focus:outline-none"
                  data-aos="zoom-in"
                  data-aos-delay={idx * 100}
                >
                  <img
                    src={item.gambar}
                    alt={`Produk ${item.id}`}
                    className="w-full h-auto rounded-lg sm:rounded-xl z-20"
                  />
                </div>
              ))}
            </Slider>
          </div>
          {/* <div className="relative top-50 right-2 sm:right-5 bg-primary text-xs sm:text-sm rounded-md sm:rounded-lg px-2 sm:px-4 py-1 sm:py-2 text-accent font-bold animate-bounce-soft shadow-lg" data-aos="fade-down" data-aos-delay="200">
            Sederhana
          </div> */}
          {/* <div className="absolute bottom-40  left-2 sm:left-5 bg-accent text-[8px] sm:text-[10px] rounded-md sm:rounded-lg px-2 sm:px-4 py-1 sm:py-2 text-primary font-bold animate-bounce-soft-delayed shadow-lg" data-aos="fade-up" data-aos-delay="400">
            lezat & Mantap
          </div> */}
        </div>
        <div className="kiri w-full sm:w-1/2 pb-40 flex flex-col justify-center gap-3 sm:gap-5 items-center sm:items-start animate-fade-slide-up">
          <h1
            className="text-2xl text-center font-bold text-putih leading-snug "
            data-aos="fade-up" data-aos-delay="400"
          >Selamat Datang di <br />
            <span className="text-accent font-comic" data-aos="zoom-in" data-aos-delay="200">
              Pocket Coffee Official Web{" "}
            </span>
            Nikmati Kopi Berkualitas di Mana Saja dengan praktis!
          </h1>

          <div className="buttons w-full flex flex-row justify-center sm:justify-start items-center" data-aos="fade-up" data-aos-delay="600">
            <a href="#menu">
              <button className="ml-0 sm:ml-10 lg:ml-20 bg-primary/70 hover:bg-accent hover:text-primary hover:scale-110 hover:shadow-xl hover:shadow-accent/30 hover:border-accent transition-all ease-in-out duration-300 text-putih font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-full mt-3 sm:mt-5 border border-accent/50 text-xs sm:text-sm lg:text-base">
                Rekomendasi kami
              </button>
            </a>
            <a href="#about">
              <button className="bg-secondary hover:bg-accent hover:text-primary hover:scale-110 hover:shadow-xl hover:shadow-accent/30 transition-all ease-in-out duration-300 text-putih font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-full mt-3 sm:mt-5 mr-3 sm:mr-5 animate-pulse-glow text-xs sm:text-sm lg:text-base">
                Siapa Kami?
              </button>
            </a>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div
      id="home"
      className="bg-primary overflow-hidden py-20  md:pt-29 min-h-screen flex sm:flex-row justify-between items-center  flex-col-reverse px-5 sm:px-5 lg:px-10"
    >

      <CoffeeBean className="hidden sm:block absolute w-12 sm:w-16 lg:w-20 text-white/10 top-10 sm:top-20 left-5 sm:left-10 rotate-12 animate-float" />
      <CoffeeBean className="hidden sm:block absolute w-10 sm:w-14 lg:w-16 text-white/10 bottom-10 sm:bottom-20 right-5 sm:right-20 -rotate-45 animate-floatSlow" />
      <CoffeeBean className="hidden md:block absolute w-16 sm:w-20 lg:w-24 text-white/10 top-1/2 left-1/4 rotate-45 animate-float" />
      <CoffeeBean className="hidden sm:block absolute w-10 sm:w-12 lg:w-14 text-white/10 bottom-5 sm:bottom-10 left-1/4 sm:left-1/3 rotate-12 animate-floatSlow" />

      <div  className=" absolute italic top-5 h-auto w-9/10 hidden md:block">
        <h1 className="absolute font-comic text-center top-30 font-black text-accent text-9xl left-10 xl:left-25">POCKET COFFE</h1>
        <h1 className="absolute font-comic text-center top-30 font-black text-transparent [-webkit-text-stroke:1px_#F7D08A] xl:[-webkit-text-stroke:3px_#F7D08A] text-9xl left-10 xl:left-25 z-999"
        >POCKET COFFE</h1>
      </div>
      {/* Kiri - Text */}
      <div className="kiri w-full order-1 md:order-0 sm:w-1/2 p-3 sm:p-5 lg:p-10 flex flex-col justify-center gap-3 sm:gap-5 items-center sm:items-start animate-fade-slide-up">
        <h1
          className="text-lg sm:text-xl lg:text-2xl text-center font-bold text-putih leading-snug sm:text-start"
          data-aos="fade-right"
        >
          Selamat Datang di <br />
          <span className="text-accent font-comic" data-aos="zoom-in" data-aos-delay="200">
            Pocket Coffee Official Web{" "}
          </span>
        </h1>

        <div className="buttons w-full flex flex-row justify-center sm:justify-start items-center" data-aos="fade-up" data-aos-delay="600">
          <a href="#about">
            <button className="bg-secondary hover:bg-accent hover:text-primary hover:scale-110 hover:shadow-xl hover:shadow-accent/30 transition-all ease-in-out duration-300 text-putih font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-full mt-3 sm:mt-5 mr-3 sm:mr-5 animate-pulse-glow text-xs sm:text-sm lg:text-base">
              Siapa Kami?
            </button>
          </a>
        </div>
      </div>

      {/* Kanan - Slider */}
      <div className="kanan w-full order-2 md:order-1 z-40 sm:w-1/2 max-w-xs sm:max-w-md relative mt-3 sm:mt-5 px-2 sm:px-4" data-aos="fade-left">
        <div className="w-full">
          <Slider {...settings}>
            {listGambar.map((item, idx) => (
              <div
                key={item.id}
                className="px-1 sm:px-2 pb-0 sm:pb-25 outline-none focus:outline-none"
                data-aos="zoom-in"
                data-aos-delay={idx * 100}
              >
                <img
                  src={item.gambar}
                  alt={`Produk ${item.id}`}
                  className="w-7/10 ml-10 lg:ml-0 lg:w-full h-auto rounded-lg sm:rounded-xl z-20"
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="absolute top-16 sm:top-40 right-2 sm:right-5 bg-primary text-xs sm:text-sm rounded-md sm:rounded-lg px-2 sm:px-4 py-1 sm:py-2 text-accent font-bold animate-bounce-soft shadow-lg" data-aos="fade-down" data-aos-delay="200">
          Sederhana
        </div>
        <div className="absolute bottom-16 sm:bottom-40 left-2 sm:left-5 bg-accent text-[8px] sm:text-[10px] rounded-md sm:rounded-lg px-2 sm:px-4 py-1 sm:py-2 text-primary font-bold animate-bounce-soft-delayed shadow-lg" data-aos="fade-up" data-aos-delay="400">
          lezat & Mantap
        </div>
      </div>
      <div className="kiri w-full md:order-2 sm:w-1/2 p-3 sm:p-5 lg:p-10 flex flex-col justify-center gap-3 sm:gap-5 items-center sm:items-start animate-fade-slide-up">
        <h1
          className="text-lg sm:text-xl lg:text-2xl text-center font-bold text-putih leading-snug sm:text-start"
          data-aos="fade-up" data-aos-delay="400"
        >
          Nikmati Kopi Berkualitas di Mana Saja dengan praktis!
        </h1>

        <div className="buttons w-full flex flex-row justify-center sm:justify-start items-center" data-aos="fade-up" data-aos-delay="600">
          <a href="#menu">
            <button className="ml-0 sm:ml-10 lg:ml-20 bg-primary/70 hover:bg-accent hover:text-primary hover:scale-110 hover:shadow-xl hover:shadow-accent/30 hover:border-accent transition-all ease-in-out duration-300 text-putih font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-full mt-3 sm:mt-5 border border-accent/50 text-xs sm:text-sm lg:text-base">
              Rekomendasi kami
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
