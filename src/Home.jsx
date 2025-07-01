// import React, { useState } from 'react';
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
// import Database from './constant/data';
// import images from './constant/images';
// import blogData from './json/blog.json';

// const Home = () => {
//     const DataCarousel = Database.DataCarousel;
//     const mainSlidesCount = 3;
//     const [seconds, setSeconds] = useState(59);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setSeconds(prev => (prev > 0 ? prev - 1 : 59));
//         }, 1000);
//         return () => clearInterval(interval);
//     }, []);


//     const [currentMain, setCurrentMain] = useState(0);

//     const itemsPerPage = 4;
//     const totalPages = Math.ceil(DataCarousel.length / itemsPerPage);
//     const [currentFeaturedIndex, setCurrentFeaturedIndex] = useState(0);

//     const prevMainSlide = () => {
//         setCurrentMain(currentMain === 0 ? mainSlidesCount - 1 : currentMain - 1);
//     };

//     const nextMainSlide = () => {
//         setCurrentMain(currentMain === mainSlidesCount - 1 ? 0 : currentMain + 1);
//     };

//     const prevFeaturedSlide = () => {
//         setCurrentFeaturedIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
//     };

//     const nextFeaturedSlide = () => {
//         setCurrentFeaturedIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
//     };

//     return (
//         <>
//             <div className="relative w-full mx-auto overflow-hidden">
//                 {currentMain === 0 && (
//                     <div className="relative h-[70vh]">
//                         <img
//                             src={images.carousel1}
//                             alt="Slide 1"
//                             className="w-full h-full object-cover"
//                         />
//                         <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-50 text-white p-4 text-center">
//                             <p className="p-2 max-w-xl text-[18px]">Women Collection 2025</p>
//                             <h2 className="text-[60px] font-[600] pb-5">New arrivals</h2>
//                             <button className="rounded-[50px] w-[161px] h-[46px] bg-white text-black">
//                                 Shop Now
//                             </button>
//                         </div>
//                     </div>
//                 )}
//                 {currentMain === 1 && (
//                     <div className="relative h-[70vh]">
//                         <img
//                             src={images.carousel2}
//                             alt="Slide 2"
//                             className="w-full h-full object-cover"
//                         />
//                         <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-50 text-white p-4 text-center">
//                             <p className="p-2 max-w-xl text-[18px]">Women Collection 2025</p>
//                             <h2 className="text-[60px] font-[600] pb-5">New arrivals</h2>
//                             <button className="rounded-[50px] w-[161px] h-[46px] bg-white text-black">
//                                 Shop Now
//                             </button>
//                         </div>
//                     </div>
//                 )}
//                 {currentMain === 2 && (
//                     <div className="relative h-[70vh]">
//                         <img
//                             src={images.carousel3}
//                             alt="Slide 3"
//                             className="w-full h-full object-cover"
//                         />
//                         <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-50 text-white p-4 text-center">
//                             <p className="p-2 max-w-xl text-[18px]">Women Collection 2025</p>
//                             <h2 className="text-[60px] font-[600] pb-5">New arrivals</h2>
//                             <button className="rounded-[50px] w-[161px] h-[46px] bg-white text-black">
//                                 Shop Now
//                             </button>
//                         </div>
//                     </div>
//                 )}

//                 <button
//                     onClick={prevMainSlide}
//                     className="absolute top-1/2 left-2 transform -translate-y-1/2 rounded-full p-2 hover:bg-opacity-90 hover:bg-[#e65540] transition"
//                     aria-label="Previous Slide"
//                 >
//                     <FaChevronLeft color="white" />
//                 </button>
//                 <button
//                     onClick={nextMainSlide}
//                     className="absolute top-1/2 right-5 transform -translate-y-1/2 rounded-full p-2 hover:bg-opacity-90 hover:bg-[#e65540] transition"
//                     aria-label="Next Slide"
//                 >
//                     <FaChevronRight color="white" />
//                 </button>
//             </div>

//             <div className="py-20 ">
//                 <h3 className="text-4xl font-semibold pb-4 text-center">FEATURED PRODUCTS</h3>
//                 <div className="relative w-4/5 max-w-6xl  overflow-hidden  mx-auto">
//                     <div
//                         className="flex transition-transform duration-500 ease-in-out   "
//                         style={{ transform: `translateX(-${currentFeaturedIndex * 100}%)` }}
//                     >
//                         {DataCarousel.map((item, i) => (
//                             <div
//                                 key={item.id || i}
//                                 className="flex-shrink-0 p-2 w-full lg:w-1/4"
//                             >
//                                 <img
//                                     src={images[item.img]}
//                                     alt={item.title || `Featured ${i + 1}`}
//                                     className="rounded-lg w-full"
//                                 />
//                                 <div className="pt-2 ">
//                                     <p className="text-sm text-gray-600 font-medium">{item.description}</p>
//                                     <p className="text-xl font-bold text-gray-600"> {item.price}$</p>
//                                     <p className="text-sm text-gray-600 line-through">{item.sold}</p>
//                                 </div>
//                             </div>

//                         ))}
//                     </div>

//                     <button
//                         onClick={prevFeaturedSlide}
//                         className="absolute top-1/2 left-1 -translate-y-1/2  bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-80"
//                         aria-label="Previous Featured Slide"
//                     >
//                         <FaChevronLeft color='gery' size={24} />

//                     </button>
//                     <button
//                         onClick={nextFeaturedSlide}
//                         className="absolute top-1/2 right-1 -translate-y-1/2  bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-80"
//                         aria-label="Next Featured Slide"
//                     >
//                         <FaChevronRight color='gery' size={24} />
//                     </button>
//                 </div>
//             </div>
//             <div id="countdown" className="bg-[#f2f2f2] min-h-[480px] sm:min-h-[580px] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
//                 <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
//                     <div className="relative bg-white overflow-hidden flex items-center justify-center h-[350px] sm:h-[430px]">
//                         <div className="absolute inset-0">
//                             <img
//                                 src={images.bn8}
//                                 alt="Lookbook"
//                                 className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
//                             />
//                         </div>
//                         <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center">
//                             <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2 sm:mb-3 drop-shadow-lg">The Beauty</h2>
//                             <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold mb-3 sm:mb-4 tracking-wide drop-shadow-lg">LOOKBOOK</h1>
//                             <a
//                                 href='/shop'
//                                 className="text-white text-base sm:text-lg tracking-widest drop-shadow-lg border-b-2 border-transparent hover:border-white transition-all duration-300"
//                             >
//                                 VIEW COLLECTION
//                             </a>
//                         </div>
//                     </div>

//                     <div className="bg-white flex flex-col items-center justify-center h-[350px] sm:h-[430px] p-6 sm:p-8 relative overflow-hidden">
//                         <div
//                             className="absolute inset-0 bg-center bg-no-repeat bg-contain transition-transform duration-300 hover:scale-105"
//                             style={{ backgroundImage: `url(${images.gls})`, zIndex: 1 }}
//                         />
//                         <div className="absolute inset-0 flex flex-col items-center justify-end z-10 w-full h-full text-center pb-20 sm:pb-24">
//                             <div>
//                                 <div className="text-gray-700 text-sm sm:text-base mb-1">Boxy2 T-Shirt with Roll Sleeve</div>
//                                 <div className="text-gray-700 text-base sm:text-lg mb-6 sm:mb-9">$20.00</div>
//                             </div>
//                         </div>
//                         <div className="relative z-20 flex gap-3 sm:gap-4 mt-auto w-full justify-center">
//                             <div className="flex flex-col items-center justify-center border px-4 sm:px-6 py-2 rounded shadow-sm bg-white/90">
//                                 <span className="text-gray-500 text-base sm:text-lg">2</span>
//                                 <span className="text-xs sm:text-sm text-gray-400 mt-1">days</span>
//                             </div>
//                             <div className="flex flex-col items-center justify-center border px-4 sm:px-6 py-2 rounded shadow-sm bg-white/90">
//                                 <span className="text-gray-500 text-base sm:text-lg">8</span>
//                                 <span className="text-xs sm:text-sm text-gray-400 mt-1">hrs</span>
//                             </div>
//                             <div className="flex flex-col items-center justify-center border px-4 sm:px-6 py-2 rounded shadow-sm bg-white/90">
//                                 <span className="text-gray-500 text-base sm:text-lg">6</span>
//                                 <span className="text-xs sm:text-sm text-gray-400 mt-1">mins</span>
//                             </div>
//                             <div className="flex flex-col items-center justify-center border px-4 sm:px-6 py-2 rounded shadow-sm bg-white/90">
//                                 <span className="text-gray-500 text-base sm:text-lg">{seconds < 10 ? `0${seconds}` : seconds}</span>
//                                 <span className="text-xs sm:text-sm text-gray-400 mt-1">secs</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="container mx-auto py-12">
//                 <div className="px-16">
//                     <h2 className="text-2xl font-bold text-center uppercase mb-8">Our Blog</h2>

//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                         {blogData.map((post) => (
//                             <article key={post.id} className="bg-white max-w-[380px] mx-auto w-full overflow-hidden">
//                                 <div className="relative w-full h-0 pb-[72.3%] overflow-hidden ">
//                                     <img
//                                         src={post.image}
//                                         alt={post.title}
//                                         className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
//                                     />
//                                 </div>

//                                 <div className="pt-4 px-4 pb-6">
//                                     <a
//                                         href="#"
//                                         className="text-[16px] font-bold text-gray-900 hover:text-[#e65540] transition-colors block pb-2"
//                                     >
//                                         {post.title}
//                                     </a>

//                                     <div className="text-[13px] text-gray-500 pb-3">
//                                         by <span>{post.author}</span> on <span>{post.date}</span>
//                                     </div>

//                                     <p className="text-[13px] text-gray-600 leading-relaxed">
//                                         {post.description}
//                                     </p>
//                                 </div>
//                             </article>
//                         ))}
//                     </div>
//                 </div>
//             </div>

//             <div>
//                 <h2 className="text-[30px] font-bold text-black text-center mb-16">
//                     @ FOLLOW US ON INSTAGRAM
//                 </h2>

//                 <div className="container mx-auto px-4">
//                     <div className="flex flex-col md:flex-row justify-between items-start text-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
//                         <div className="w-full md:w-1/3 p-8">
//                             <h3 className="text-[18px] font-semibold text-[#555555] mb-2">
//                                 Free Delivery Worldwide
//                             </h3>
//                             <p className="text-[13px] text-[#888888] italic">
//                                 Mirum est notare quam littera gothica
//                             </p>
//                         </div>

//                         <div className="w-full md:w-1/3 p-8">
//                             <h3 className="text-[18px] font-semibold text-[#555555] mb-2">
//                                 30 Days Return
//                             </h3>
//                             <p className="text-[13px] text-[#888888] italic">
//                                 Simply return it within 30 days for an exchange.
//                             </p>
//                         </div>

//                         <div className="w-full md:w-1/3 p-8">
//                             <h3 className="text-[18px] font-semibold text-[#555555] mb-2">
//                                 Store Opening
//                             </h3>
//                             <p className="text-[13px] text-[#888888] italic">
//                                 Shop open from Monday to Sunday
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </>
//     );
// };

// export default Home;
import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Database from './constant/data';
import images from './constant/images';
import blogData from './json/blog.json';

const Home = () => {
    const DataCarousel = Database.DataCarousel;
    const mainSlidesCount = 3;
    const [seconds, setSeconds] = useState(10);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prev => (prev > 0 ? prev - 1 : 59));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

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
                        className="flex transition-transform duration-500 ease-in-out"
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
                        <FaChevronLeft color='gray' size={24} />
                    </button>
                    <button
                        onClick={nextFeaturedSlide}
                        className="absolute top-1/2 right-1 -translate-y-1/2  bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-80"
                        aria-label="Next Featured Slide"
                    >
                        <FaChevronRight color='gray' size={24} />
                    </button>
                </div>
            </div>

            <div id="countdown" className="bg-[#f2f2f2] min-h-[480px] sm:min-h-[580px] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
                <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    <div className="relative bg-white overflow-hidden flex items-center justify-center h-[350px] sm:h-[430px]">
                        <div className="absolute inset-0">
                            <img
                                src={images.bn8}
                                alt="Lookbook"
                                className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                            />
                        </div>
                        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center">
                            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2 sm:mb-3 drop-shadow-lg">The Beauty</h2>
                            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold mb-3 sm:mb-4 tracking-wide drop-shadow-lg">LOOKBOOK</h1>
                            <a
                                href='/shop'
                                className="text-white text-base sm:text-lg tracking-widest drop-shadow-lg border-b-2 border-transparent hover:border-white transition-all duration-300"
                            >
                                VIEW COLLECTION
                            </a>
                        </div>
                    </div>

                    <div className="bg-white flex flex-col items-center justify-center h-[350px] sm:h-[430px] p-6 sm:p-8 relative overflow-hidden">
                        <div
                            className="absolute inset-0 bg-center bg-no-repeat bg-contain transition-transform duration-300 hover:scale-105"
                            style={{ backgroundImage: `url(${images.gls})`, zIndex: 1 }}
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-end z-10 w-full h-full text-center pb-20 sm:pb-24">
                            <div>
                                <div className="text-gray-700 text-sm sm:text-base mb-1">Boxy2 T-Shirt with Roll Sleeve</div>
                                <div className="text-gray-700 text-base sm:text-lg mb-6 sm:mb-9">$20.00</div>
                            </div>
                        </div>
                        <div className="relative z-20 flex gap-3 sm:gap-4 mt-auto w-full justify-center">
                            <div className="flex flex-col items-center justify-center border px-4 sm:px-6 py-3 sm:py-4 rounded-sm text-center">
                                <span className="text-4xl sm:text-5xl font-bold text-gray-800">{seconds}</span>
                                <span className="text-xs sm:text-sm font-light text-gray-600">seconds</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto py-12">
                <div className="px-16">
                    <h2 className="text-2xl font-bold text-center uppercase mb-8">Our Blog</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogData.map((post) => (
                            <article key={post.id} className="bg-white max-w-[380px] mx-auto w-full roverflow-hidden">
                                <div className="relative w-full h-0 pb-[72.3%] overflow-hidden ">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                                    />
                                </div>

                                <div className="pt-4 pb-6">
                                    <a
                                        href="#"
                                        className=" font-normal text-[20px] text-gray-900 hover:text-[#e65540] transition-colors block pb-2"
                                    >
                                        {post.title}
                                    </a>

                                    <div className="text-[13px] text-gray-500 pb-3">
                                        by <span className='font-medium'>{post.author}</span> on <span className='font-medium'>{post.date}</span>
                                    </div>

                                    <p className="text-[13px] text-gray-600 leading-relaxed">
                                        {post.description}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
            <div className="py-16">
                <h2 className="text-[30px] font-bold text-black text-center mb-16">
                    @ FOLLOW US ON INSTAGRAM
                </h2>

                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-start text-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
                        <div className="w-full md:w-1/3 p-8">
                            <h3 className="text-[18px] font-semibold text-[#555555] mb-2">
                                Free Delivery Worldwide
                            </h3>
                            <p className="text-[13px] text-[#888888] italic">
                                Mirum est notare quam littera gothica
                            </p>
                        </div>

                        <div className="w-full md:w-1/3 p-8">
                            <h3 className="text-[18px] font-semibold text-[#555555] mb-2">
                                30 Days Return
                            </h3>
                            <p className="text-[13px] text-[#888888] italic">
                                Simply return it within 30 days for an exchange.
                            </p>
                        </div>

                        <div className="w-full md:w-1/3 p-8">
                            <h3 className="text-[18px] font-semibold text-[#555555] mb-2">
                                Store Opening
                            </h3>
                            <p className="text-[13px] text-[#888888] italic">
                                Shop open from Monday to Sunday
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Home;
