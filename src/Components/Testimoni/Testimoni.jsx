
import Trans3 from "../Trans/Trans3.jsx";
import Slider from "react-slick";
import { FaQuoteRight } from "react-icons/fa";
import Foto1 from "../../assets/Testimonial/Foto1.jpeg";
import Foto2 from "../../assets/Testimonial/Foto2.jpeg";
import Foto3 from "../../assets/Testimonial/Foto3.jpeg";
import Foto4 from "../../assets/Testimonial/Foto4.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Trans4 from "../Trans/Trans4.jsx";


const testimoniData = [
  {
    id: 1,
    name: "@vioochxsa",
    image: Foto3,
  },
  {
    id: 2,
    name: "@ztafy",
    image: Foto1,
  },
  {
    id: 3,
    name: "@yahyaaa_ar",
    image: Foto2,
  },
  {
    id: 4,
    name: "@rap.bzr",
    image: Foto4,
  },
];

const Testimoni = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          padding: 0,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          padding: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          padding: 0,
        },
      },
    ],
  };

  return (
    <>
      <Trans3 />
      <div id="testimonial" className="bg-secondary py-10 sm:py-15">
        <h1
          className="font-comic font-bold text-2xl sm:text-3xl text-center text-putih px-4"
          data-aos="fade-up"
        >
          Apa Kata Mereka tentang Pocket Coffee
        </h1>
        <div className="mt-6 sm:mt-10 px-3 sm:px-10 relative">
          {/* Gradient kiri */}
          <div
            className="absolute left-0 top-0 hidden sm:block bottom-0 w-16 md:w-25 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, #E5890A 0%, #E5890A 20%, rgba(229, 137, 10, 0.8) 40%, rgba(229, 137, 10, 0.4) 70%, transparent 100%)",
            }}
          ></div>
          {/* Gradient kanan */}
          <div
            className="absolute right-0 top-0 hidden sm:block bottom-0 w-16 md:w-25 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(to left, #E5890A 0%, #E5890A 20%, rgba(229, 137, 10, 0.8) 40%, rgba(229, 137, 10, 0.4) 70%, transparent 100%)",
            }}
          ></div>

          <Slider {...settings}>
            {testimoniData.map((item, idx) => (
              <div
                key={item.id}
                className="px-2 sm:px-4 md:px-6 h-full mb-3 sm:mb-5 outline-none focus:outline-none"
                data-aos="zoom-in-up"
                data-aos-delay={idx * 100}
              >
                <div className="bg-putih rounded-2xl p-4 sm:p-6 shadow-lg h-full flex flex-col justify-center items-center">
                  {/* Testimonial Image */}
                  <div className="w-full mb-3 sm:mb-4 rounded-xl overflow-hidden border-3 sm:border-4 border-accent">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-auto object-cover aspect-square"
                    />
                  </div>
                  {/* Name */}
                  <h3
                    className="text-primary text-center font-comic font-bold text-base sm:text-lg italic"
                    data-aos="fade-up"
                  >
                    {item.name}
                  </h3>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
        <Trans4 />
    </>
  );
};

export default Testimoni;
