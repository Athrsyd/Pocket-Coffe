import Gambar1 from "../../assets/About1.jpeg";
import Gambar2 from "../../assets/Ab3.png";
import Logo from "../../assets/LogoPC.jpeg";
import Trans1 from "../Trans/Trans1.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  return (
    <>
      <Trans1 />
      <div id="about" className="bg-accent">
        <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-16 xl:px-40">
          {/* Header Section */}
          <div className="text-center mb-8 lg:mb-12">
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-comic font-bold text-primary mb-4"
              data-aos="fade-down"
            >
              About Us
            </h1>
            <div className="w-20 sm:w-24 h-1 bg-secondary mx-auto rounded-full" data-aos="fade-up"></div>
          </div>

          {/* Image Section - Mobile/Tablet (di bawah title) */}
          <div className="lg:hidden flex flex-row gap-3 sm:gap-4 items-center justify-center flex-wrap mb-8">
            <img
              src={Gambar1}
              alt="Gambar About Us 1"
              className="w-24 sm:w-32 md:w-36 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-3 border-white"
              data-aos="fade-right"
            />
            <img
              src={Logo}
              alt="Logo Pocket Coffee"
              className="w-20 sm:w-28 md:w-32 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-3 border-secondary"
              data-aos="zoom-in"
            />
            <img
              src={Gambar2}
              alt="Gambar About Us 2"
              className="w-24 sm:w-32 md:w-36 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-3 border-white"
              data-aos="fade-left"
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 items-start">
            {/* Text Section */}
            <div className="lg:w-2/3 space-y-5">
              <p className="text-primary text-justify font-medium text-sm sm:text-base lg:text-lg leading-relaxed" data-aos="fade-up">
                Setiap orang punya momen ketika mereka butuh kopi: sebelum mulai
                aktivitas, saat mengantuk tiba-tiba, atau ketika butuh jeda
                sejenak dari dunia. Dari kebutuhan sederhana itulah{" "}
                <span className="font-bold text-secondary font-comic">
                  Pocket Coffee
                </span>{" "}
                lahir - sebuah cara baru menikmati kopi yang selalu siap
                menemani, kapan pun kamu butuh.
              </p>
              <p className="text-primary text-justify font-medium text-sm sm:text-base lg:text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="100">
                <span className="font-bold text-secondary font-comic">
                  Pocket Coffee
                </span>{" "}
                hadir dari satu pemikiran sederhana: kopi harusnya bisa
                dinikmati kapan pun dan di mana pun, tanpa ribet. Kami percaya
                setiap orang berhak punya "kantong energi" yang selalu siap
                menemani - entah saat lagi di jalan, kerja, kuliah, atau sekadar
                butuh dorongan kecil di tengah hari.
              </p>
              <p className="text-primary text-justify font-medium text-sm sm:text-base lg:text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="200">
                Nama{" "}
                <span className="font-bold text-secondary font-comic">
                  Pocket Coffee
                </span>{" "}
                menggambarkan visi kami: kopi yang mudah dibawa, mudah
                dinikmati, dan selalu ada di "saku" harianmu. Sesederhana
                mengambil sesuatu dari kantong, begitulah kami ingin kamu
                merasakan kepraktisan produk kami.
              </p>
              <p className="text-primary text-justify font-medium text-sm sm:text-base lg:text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="300">
                Dengan rasa yang dibuat konsisten dan kualitas yang dijaga,{" "}
                <span className="font-bold text-secondary font-comic">
                  Pocket Coffee
                </span>{" "}
                hadir untuk membuat hidup sedikit lebih ringan. Kopi yang tidak
                hanya mengisi tenaga, tapi juga memberi rasa nyaman bahwa ada
                sesuatu yang bisa kamu andalkan setiap hari.
              </p>

              {/* Taglines */}
              <div className="mt-6 lg:mt-8 bg-primary/10 p-4 sm:p-6 rounded-xl lg:rounded-2xl border-l-4 border-secondary" data-aos="zoom-in-up">
                <p className="text-primary font-semibold font-family-comic italic text-sm sm:text-base lg:text-lg">
                  "Kopi di saku, siap temani langkahmu."
                </p>
                <p className="text-primary font-semibold font-family-comic italic text-sm sm:text-base lg:text-lg mt-2">
                  "Cukup buka saku, nikmati kopi tanpa ragu."
                </p>
                <p className="text-primary font-semibold font-family-comic italic text-sm sm:text-base lg:text-lg mt-2">
                  "Kecil di saku, besar rasanya untukmu."
                </p>
                <p className="text-primary font-semibold font-family-comic italic text-sm sm:text-base lg:text-lg mt-2">
                  "Kopi praktis di saku, selalu siap tiap waktu."
                </p>
              </div>
            </div>

            {/* Image Section - Desktop (di samping text) */}
            <div className="hidden lg:flex lg:w-1/3 flex-col gap-6 items-center justify-start">
              <div className="relative group">
                <img
                  src={Gambar1}
                  alt="Gambar About Us 1"
                  className="w-40 xl:w-48 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border-3 border-white"
                  data-aos="fade-right"
                />
              </div>
              <div className="relative group">
                <img
                  src={Logo}
                  alt="Logo Pocket Coffee"
                  className="w-32 xl:w-40 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border-3 border-secondary"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                />
              </div>
              <div className="relative group">
                <img
                  src={Gambar2}
                  alt="Gambar About Us 2"
                  className="w-40 xl:w-48 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border-3 border-white"
                  data-aos="fade-left"
                  data-aos-delay="400"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
