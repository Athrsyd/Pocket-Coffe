import Gambar1 from "../../assets/About1.jpeg";
import Gambar2 from "../../assets/About2.jpeg";
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
        <div className="py-16 px-5 sm:px-20 lg:px-40 flex flex-col justify-center items-center gap-8">
          {/* Header Section */}
          <div className="text-center mb-6">
            <h1
              className="text-4xl sm:text-5xl font-comic font-bold text-primary mb-4"
              data-aos="fade-down"
            >
              About Us
            </h1>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full" data-aos="fade-up"></div>
          </div>

          {/* Image Section - Mobile/Tablet (di bawah title) */}
          <div className="lg:hidden flex flex-row gap-4 items-center justify-center flex-wrap">
            <img
              src={Gambar1}
              alt="Gambar About Us 1"
              className="w-28 sm:w-36 rounded-2xl shadow-xl border-4 border-white"
              data-aos="fade-right"
            />
            <img
              src={Logo}
              alt="Logo Pocket Coffee"
              className="w-24 sm:w-32 rounded-2xl shadow-xl border-4 border-secondary"
              data-aos="zoom-in"
            />
            <img
              src={Gambar2}
              alt="Gambar About Us 2"
              className="w-28 sm:w-36 rounded-2xl shadow-xl border-4 border-white"
              data-aos="fade-left"
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-10 items-center">
            {/* Text Section */}
            <div className="lg:w-2/3">
              <p className="text-primary text-justify font-medium text-md sm:text-lg leading-relaxed" data-aos="fade-up">
                Setiap orang punya momen ketika mereka butuh kopi: sebelum mulai
                aktivitas, saat mengantuk tiba-tiba, atau ketika butuh jeda
                sejenak dari dunia. Dari kebutuhan sederhana itulah{" "}
                <span className="font-bold text-secondary font-comic">
                  Pocket Coffee
                </span>{" "}
                lahir - sebuah cara baru menikmati kopi yang selalu siap
                menemani, kapan pun kamu butuh.
              </p>
              <p className="text-primary text-justify font-medium text-md sm:text-lg leading-relaxed mt-4" data-aos="fade-up" data-aos-delay="100">
                <span className="font-bold text-secondary font-comic">
                  Pocket Coffee
                </span>{" "}
                hadir dari satu pemikiran sederhana: kopi harusnya bisa
                dinikmati kapan pun dan di mana pun, tanpa ribet. Kami percaya
                setiap orang berhak punya "kantong energi" yang selalu siap
                menemani - entah saat lagi di jalan, kerja, kuliah, atau sekadar
                butuh dorongan kecil di tengah hari.
              </p>
              <p className="text-primary text-justify font-medium text-md sm:text-lg leading-relaxed mt-4" data-aos="fade-up" data-aos-delay="200">
                Nama{" "}
                <span className="font-bold text-secondary font-comic">
                  Pocket Coffee
                </span>{" "}
                menggambarkan visi kami: kopi yang mudah dibawa, mudah
                dinikmati, dan selalu ada di "saku" harianmu. Sesederhana
                mengambil sesuatu dari kantong, begitulah kami ingin kamu
                merasakan kepraktisan produk kami.
              </p>
              <p className="text-primary text-justify font-medium text-md sm:text-lg leading-relaxed mt-4" data-aos="fade-up" data-aos-delay="300">
                Dengan rasa yang dibuat konsisten dan kualitas yang dijaga,{" "}
                <span className="font-bold text-secondary font-comic">
                  Pocket Coffee
                </span>{" "}
                hadir untuk membuat hidup sedikit lebih ringan. Kopi yang tidak
                hanya mengisi tenaga, tapi juga memberi rasa nyaman bahwa ada
                sesuatu yang bisa kamu andalkan setiap hari.
              </p>

              {/* Taglines */}
              <div className="mt-8 bg-primary/10 p-6 rounded-2xl border-l-4 border-secondary" data-aos="zoom-in-up">
                <p className="text-primary font-semibold font-family-comic italic text-md sm:text-lg">
                  "Kopi di saku, siap temani langkahmu."
                </p>
                <p className="text-primary font-semibold font-family-comic italic text-md sm:text-lg mt-2">
                  "Cukup buka saku, nikmati kopi tanpa ragu."
                </p>
                <p className="text-primary font-semibold font-family-comic italic text-md sm:text-lg mt-2">
                  "Kecil di saku, besar rasanya untukmu."
                </p>
                <p className="text-primary font-semibold font-family-comic italic text-md sm:text-lg mt-2">
                  "Kopi praktis di saku, selalu siap tiap waktu."
                </p>
              </div>
            </div>

            {/* Image Section - Desktop (di samping text) */}
            <div className="hidden lg:flex lg:w-1/3 flex-col gap-5 items-center">
              <div className="relative group">
                <img
                  src={Gambar1}
                  alt="Gambar About Us 1"
                  className="w-48 sm:w-56 lg:w-64 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-4 border-white"
                  data-aos="fade-right"
                />
              </div>
              <div className="relative group -mt-8 ml-10">
                <img
                  src={Logo}
                  alt="Logo Pocket Coffee"
                  className="w-40 sm:w-48 lg:w-56 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-4 border-secondary"
                  data-aos="zoom-in"
                />
              </div>
              <div className="relative group -mt-8 -ml-5">
                <img
                  src={Gambar2}
                  alt="Gambar About Us 2"
                  className="w-48 sm:w-56 lg:w-64 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-4 border-white"
                  data-aos="fade-left"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
