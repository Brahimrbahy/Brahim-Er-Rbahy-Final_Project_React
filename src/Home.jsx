import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Database from './constant/data';
import images from './constant/images';

const Home = () => {
    const DataCarousel = Database.DataCarousel;
    const mainSlidesCount = 3;

    const [currentMain, setCurrentMain] = useState(0);

    const itemsPerPage = 4;
    const totalPages = Math.ceil(DataCarousel.length / itemsPerPage);
    const [currentFeaturedIndex, setCurrentFeaturedIndex] = useState(0);

    const prevMainSlide = () => {
        setCurrentMain(currentMain === 0 ? mainSlidesCount - 1 : currentMain - 1);
    };

    const nextMainSlide = () => {
        setCurrentMain(currentMain === mainSlidesCount - 1 ? 0 : currentMain + 1);
    };

    const prevFeaturedSlide = () => {
        setCurrentFeaturedIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
    };

    const nextFeaturedSlide = () => {
        setCurrentFeaturedIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
    };

    return (
        <>
            <div className="relative w-full mx-auto overflow-hidden">
                {currentMain === 0 && (
                    <div className="relative h-[70vh]">
                        <img
                            src={images.carousel1}
                            alt="Slide 1"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-50 text-white p-4 text-center">
                            <p className="p-2 max-w-xl text-[18px]">Women Collection 2025</p>
                            <h2 className="text-[60px] font-[600] pb-5">New arrivals</h2>
                            <button className="rounded-[50px] w-[161px] h-[46px] bg-white text-black">
                                Shop Now
                            </button>
                        </div>
                    </div>
                )}
                {currentMain === 1 && (
                    <div className="relative h-[70vh]">
                        <img
                            src={images.carousel2}
                            alt="Slide 2"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-50 text-white p-4 text-center">
                            <p className="p-2 max-w-xl text-[18px]">Women Collection 2025</p>
                            <h2 className="text-[60px] font-[600] pb-5">New arrivals</h2>
                            <button className="rounded-[50px] w-[161px] h-[46px] bg-white text-black">
                                Shop Now
                            </button>
                        </div>
                    </div>
                )}
                {currentMain === 2 && (
                    <div className="relative h-[70vh]">
                        <img
                            src={images.carousel3}
                            alt="Slide 3"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-50 text-white p-4 text-center">
                            <p className="p-2 max-w-xl text-[18px]">Women Collection 2025</p>
                            <h2 className="text-[60px] font-[600] pb-5">New arrivals</h2>
                            <button className="rounded-[50px] w-[161px] h-[46px] bg-white text-black">
                                Shop Now
                            </button>
                        </div>
                    </div>
                )}

                <button
                    onClick={prevMainSlide}
                    className="absolute top-1/2 left-2 transform -translate-y-1/2 rounded-full p-2 hover:bg-opacity-90 hover:bg-[#e65540] transition"
                    aria-label="Previous Slide"
                >
                    <FaChevronLeft color="white" />
                </button>
                <button
                    onClick={nextMainSlide}
                    className="absolute top-1/2 right-5 transform -translate-y-1/2 rounded-full p-2 hover:bg-opacity-90 hover:bg-[#e65540] transition"
                    aria-label="Next Slide"
                >
                    <FaChevronRight color="white" />
                </button>
            </div>

            <div className="py-20 ">
                <h3 className="text-4xl font-semibold pb-4 text-center">FEATURED PRODUCTS</h3>
                <div className="relative w-4/5 max-w-6xl  overflow-hidden  mx-auto">
                    <div
                        className="flex transition-transform duration-500 ease-in-out   "
                        style={{ transform: `translateX(-${currentFeaturedIndex * 100}%)` }}
                    >
                        {DataCarousel.map((item, i) => (
                            <div
                                key={item.id || i}
                                className="flex-shrink-0 p-2 w-full lg:w-1/4"
                            >
                                <img
                                    src={images[item.img]}
                                    alt={item.title || `Featured ${i + 1}`}
                                    className="rounded-lg w-full"
                                />
                                <div className="pt-2 ">
                                    <p className="text-sm text-gray-600 font-medium">{item.description}</p>
                                    <p className="text-xl font-bold text-gray-600"> {item.price}$</p>
                                    <p className="text-sm text-gray-600 line-through">{item.sold}</p>
                                </div>
                            </div>

                        ))}
                    </div>

                    <button
                        onClick={prevFeaturedSlide}
                        className="absolute top-1/2 left-1 -translate-y-1/2  bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-80"
                        aria-label="Previous Featured Slide"
                    >
                        <FaChevronLeft color='gery' size={24} />

                    </button>
                    <button
                        onClick={nextFeaturedSlide}
                        className="absolute top-1/2 right-1 -translate-y-1/2  bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-80"
                        aria-label="Next Featured Slide"
                    >
                        <FaChevronRight color='gery' size={24} />
                    </button>
                </div>
            </div>
            <div className="bg-[#f2f2f2] h-[540px] flex gap-5 p-5">
                <div className="h-[400px] flex-shrink-0 w-[40%] Relative">
                    <img
                        src={images.bn8}
                        alt="Banner"
                        className="h-full w-auto object-contain"
                    />
                    <div className='Absolute bottom-10'>
                        <p>The Beauty</p>
                        <h3>Lookbook</h3>
                        <p>View Collection</p>

                    </div>
                </div>
                <div className=" w-[40%] flex-1 h-[400px] bg-white flex flex-col justify-center items-center ">
                    <img src={images.gls} alt="" className="w-100 h-auto object-contain" />
                    <p className="text-lg font-semibold">Boxy2 T-Shirt with Roll Sleeve</p>
                    <p className="text-xl  font-bold">$20.00</p>
                    <div className="flex space-x-1">
                        <div className="w-4 h-4 bg-yellow-400  "></div>
                        <div className="w-4 h-4 bg-yellow-400  "></div>
                        <div className="w-4 h-4 bg-yellow-400  "></div>
                        <div className="w-4 h-4 bg-yellow-400  "></div>
                    </div>
                </div>

            </div>

        </>
    );
};

export default Home;
