import { useState } from "react";
import listProductCoffe from "../BFY/listProductCoffe.js";
import listProductNonCoffe from "../BFY/listProductNonCoffe.js";
import { FaSearch, FaTimes } from "react-icons/fa";
import HowToBuy from "../HowToBuy/HowToBuy.jsx";
import AOS from "aos";

const Product = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCoffe, setFilteredCoffe] = useState(listProductCoffe);
  const [filteredNonCoffe, setFilteredNonCoffe] = useState(listProductNonCoffe);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const handleSearch = () => {
    if (searchTerm.trim() === "") return;

    const term = searchTerm.toLowerCase();

    const coffeeResults = listProductCoffe.filter((item) =>
      item.nama.toLowerCase().includes(term)
    );
    const nonCoffeeResults = listProductNonCoffe.filter((item) =>
      item.nama.toLowerCase().includes(term)
    );

    setFilteredCoffe(coffeeResults);
    setFilteredNonCoffe(nonCoffeeResults);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Reset filter ketika input kosong
    if (value === "") {
      setFilteredCoffe(listProductCoffe);
      setFilteredNonCoffe(listProductNonCoffe);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && searchTerm.trim() !== "") {
      handleSearch();
    }
  };

  const clearSearch = () => {
    setSearchTerm("");
    setFilteredCoffe(listProductCoffe);
    setFilteredNonCoffe(listProductNonCoffe);
  };

  return (
    <>
      <div className="homeButton fixed top-0 left-0 z-50">
        <a
          href="/"
          className="mt-5 ml-5 text-putih hover:scale-105 transition-all ease-in-out duration-500 bg-primary/90 backdrop-blur-sm shadow-lg px-4 py-2 flex justify-center rounded-full"
        >
          Home
        </a>
      </div>
      <div className="py-10 bg-putih min-h-screen px-10">
        <h1
          id="product"
          className="text-center text-3xl font-comic text-primary mb-10"
        >
          Our Products
        </h1>
        <div className="flex flex-col md:flex-row justify-center gap-5 items-center mb-10">
          <div className="searchBar flex flex-row w-full sm:w-auto items-center gap-2">
            <input
              id="search"
              type="text"
              value={searchTerm}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              placeholder="Search..."
              autoComplete="off"
              className="bg-secondary hover:bg-primary transition-all ease-in-out duration-300 border-2 border-accent/50 rounded-full w-full sm:w-60 px-4 py-2 font-semibold text-putih placeholder-putih/50 focus:outline-0 focus:border-accent"
            />
            <button
              onClick={handleSearch}
              disabled={searchTerm.trim() === ""}
              className={`p-2 px-3 rounded-full transition-all ease-in-out duration-300 ${
                searchTerm.trim() === ""
                  ? "bg-gray-300 cursor-not-allowed opacity-50"
                  : "bg-accent/20 hover:bg-accent/40 cursor-pointer"
              }`}
            >
              <FaSearch
                className={`text-lg font-semibold ${
                  searchTerm.trim() === "" ? "text-gray-400" : "text-accent"
                }`}
              />
            </button>
            <button
              onClick={clearSearch}
              disabled={searchTerm.trim() === ""}
              className={`p-2 px-3 rounded-full transition-all ease-in-out duration-300 ${
                searchTerm.trim() === ""
                  ? "bg-gray-300 cursor-not-allowed opacity-50"
                  : "bg-red-100 hover:bg-red-200 cursor-pointer"
              }`}
            >
              <FaTimes
                className={`text-lg font-semibold ${
                  searchTerm.trim() === "" ? "text-gray-400" : "text-red-500"
                }`}
              />
            </button>
          </div>
          <a href="/PriceList.jpeg" download="PriceList-PocketCoffee.jpeg">
            <button className="w-60 bg-secondary hover:bg-primary text-putih font-semibold py-2 rounded-full transition-all ease-in-out duration-300 px-6">
              Download Price List Kami
            </button>
          </a>
        </div>
        <h2 className="text-2xl text-primary mb-5 font-bold">Coffee</h2>
        <div className="grid grid-cols-2 md:flex md:flex-row md:flex-wrap gap-7 md:gap-20 my-10 md:my-25 justify-center">
          {filteredCoffe.length > 0 ? (
            filteredCoffe.map((item) => (
              <div
                key={item.id}
                className="card bg-putih hover:bg-accent relative group rounded-2xl mb-8 md:mb-25 pt-24 md:pt-40 shadow-lg p-3 md:p-5 w-full md:w-[280px] border border-accent/30 transition-all ease-in-out duration-300"
              >
                <div className="gambar">
                  <img
                    src={item.gambar}
                    alt={item.nama}
                    className="rounded-xl absolute bottom-[65%] md:bottom-60 left-2 md:left-10 w-[85%] md:w-[225px] group-hover:scale-110 group-hover:rotate-3 transition-all ease-in-out duration-500"
                  />
                </div>
                <h3 className="text-sm md:text-lg text-primary font-bold">
                  {item.nama}
                </h3>
                <p className="text-xs md:text-base text-secondary font-semibold">
                  {item.harga}
                </p>
                <p className="text-[8px] md:text-[12px] text-black mt-1 md:mt-2 font-semibold hidden md:block">
                  {item.deskripsi}
                </p>
                <p className="text-[7px] md:text-[12px] text-start group-hover:bg-primary bg-accent py-1.5 md:py-3 px-2 md:px-5 rounded-full font-semibold group-hover:text-accent text-primary mt-1 md:mt-2 transition-all ease-in-out duration-500">
                  {item.untuk}
                </p>
                <button
                  onClick={openPopup}
                  className="w-full bg-secondary hover:bg-primary text-putih font-semibold text-xs md:text-base py-1.5 md:py-2 rounded-full mt-2 md:mt-4 transition-all ease-in-out duration-300"
                >
                  Order Now
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center w-full">
              Tidak ada produk coffee ditemukan
            </p>
          )}
        </div>

        <h2 className="text-2xl text-primary mb-30 font-bold">Non-Coffee</h2>
        <div className="grid grid-cols-2 md:flex md:flex-row md:flex-wrap gap-3 md:gap-20 my-10 md:my-25 justify-center">
          {filteredNonCoffe.length > 0 ? (
            filteredNonCoffe.map((item) => (
              <div
                key={item.id}
                className="card bg-putih hover:bg-accent relative group rounded-2xl mb-8 md:mb-30 pt-24 md:pt-40 shadow-lg p-3 md:p-5 w-full md:w-[280px] border border-accent/30 transition-all ease-in-out duration-300"
              >
                <div className="gambar">
                  <img
                    src={item.gambar}
                    alt={item.nama}
                    className="rounded-xl absolute bottom-[65%] md:bottom-60 left-2 md:left-10 w-[85%] md:w-[225px] group-hover:scale-110 group-hover:rotate-3 transition-all ease-in-out duration-500"
                  />
                </div>
                <h3 className="text-sm md:text-lg text-primary font-bold">
                  {item.nama}
                </h3>
                <p className="text-xs md:text-base text-secondary font-semibold">
                  {item.harga}
                </p>
                <p className="text-[10px] md:text-[12px] text-black mt-1 md:mt-2 font-semibold hidden md:block">
                  {item.deskripsi}
                </p>
                <p className="text-[8px] md:text-[12px] text-start group-hover:bg-primary bg-accent py-1.5 md:py-3 px-2 md:px-5 rounded-full font-semibold group-hover:text-accent text-primary mt-1 md:mt-2 transition-all ease-in-out duration-500">
                  {item.untuk}
                </p>
                <button
                  onClick={openPopup}
                  className="w-full bg-secondary hover:bg-primary text-putih font-semibold text-xs md:text-base py-1.5 md:py-2 rounded-full mt-2 md:mt-4 transition-all ease-in-out duration-300"
                >
                  Order Now
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center w-full">
              Tidak ada produk non-coffee ditemukan
            </p>
          )}
        </div>
      </div>

      {/* Popup HowToBuy */}
      <HowToBuy isOpen={isPopupOpen} onClose={closePopup} />
    </>
  );
};

export default Product;
