// import React, { useState } from 'react';
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
// import images from './constant/images';

// const Home = () => {
//     const [current, setCurrent] = useState(0);

//     const prevSlide = () => {
//         setCurrent(current === 0 ? 2 : current - 1);
//     };

//     const nextSlide = () => {
//         setCurrent(current === 2 ? 0 : current + 1);
//     };

//     return (
//         <div className="relative  w-full mx-auto overflow-hidden">
//             {current === 0 && (
//                 <div className="relative">
//                     <img
//                         src={images.carousel1}
//                         alt="Slide 1"
//                         className="w-full h-64 md:h-96 object-cover"
//                     />
//                     <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-50 text-white p-4 text-center">
//                         <p className="p-2 max-w-xl text-[18px]">
//                             Women Collection 2018
//                         </p>
//                         <h2 className="text-[60px] font-[600] pb-5">
//                             New arrivals
//                         </h2>

//                         <button className='rounded-[50px] w-[161px] h-[46px] bg-white text-black'>
//                             Shop Now
//                         </button>
//                     </div>
//                 </div>
//             )}

//             {current === 1 && (
//                 <div className="relative">
//                     <img
//                         src={images.carousel2}
//                         alt="Slide 2"
//                         className="w-full h-64 md:h-96 object-cover"
//                     />
//                     <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-50 text-white p-4 text-center">
//                        <p className="p-2 max-w-xl text-[18px]">
//                             Women Collection 2018
//                         </p>
//                         <h2 className="text-[60px] font-[600] pb-5">
//                             New arrivals
//                         </h2>

//                         <button className='rounded-[50px] w-[161px] h-[46px] bg-white text-black'>
//                             Shop Now
//                         </button>
//                     </div>
//                 </div>
//             )}

//             {current === 2 && (
//                 <div className="relative">
//                     <img
//                         src={images.carousel3}
//                         alt="Slide 3"
//                         className="w-full h-64 md:h-96 object-cover"
//                     />
//                     <div className="absolute inset-0 flex flex-col justify-center items-center  bg-opacity-50 text-white p-4 text-center">
//                        <p className="p-2 max-w-xl text-[18px]">
//                             Women Collection 2018
//                         </p>
//                         <h2 className="text-[60px] font-[600] pb-5">
//                             New arrivals
//                         </h2>

//                         <button className='rounded-[50px] w-[161px] h-[46px] bg-white text-black'>
//                             Shop Now
//                         </button>
//                     </div>
//                 </div>
//             )}

//             <button
//                 onClick={prevSlide}
//                 className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/60 rounded-full p-2 hover:bg-opacity-90 hover:bg-[#e65540] transition"
//                 aria-label="Previous Slide"
//             >
//                 <FaChevronLeft color="white" />
//             </button>
//             <button
//                 onClick={nextSlide}
//                 className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/60 rounded-full p-2 hover:bg-opacity-90 hover:bg-[#e65540] transition"
//                 aria-label="Next Slide"
//             >
//                 <FaChevronRight color="white" />
//             </button>
//         </div>
//     );
// };

// export default Home;
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import images from './constant/images';

const Home = () => {
    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        setCurrent(current === 0 ? 2 : current - 1);
    };

    const nextSlide = () => {
        setCurrent(current === 2 ? 0 : current + 1);
    };

    return (
        <><div className="relative w-full mx-auto overflow-hidden">
            {current === 0 && (
                <div className="relative h-[70vh]">
                    <img
                        src={images.carousel1}
                        alt="Slide 1"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-50 text-white p-4 text-center">
                        <p className="p-2 max-w-xl text-[18px]">
                            Women Collection 2018
                        </p>
                        <h2 className="text-[60px] font-[600] pb-5">
                            New arrivals
                        </h2>

                        <button className="rounded-[50px] w-[161px] h-[46px] bg-white text-black">
                            Shop Now
                        </button>
                    </div>
                </div>
            )}

            {current === 1 && (
                <div className="relative h-[70vh]">
                    <img
                        src={images.carousel2}
                        alt="Slide 2"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center  bg-opacity-50 text-white p-4 text-center">
                        <p className="p-2 max-w-xl text-[18px]">
                            Women Collection 2018
                        </p>
                        <h2 className="text-[60px] font-[600] pb-5">
                            New arrivals
                        </h2>

                        <button className="rounded-[50px] w-[161px] h-[46px] bg-white text-black">
                            Shop Now
                        </button>
                    </div>
                </div>
            )}

            {current === 2 && (
                <div className="relative h-[70vh]">
                    <img
                        src={images.carousel3}
                        alt="Slide 3"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center  bg-opacity-50 text-white p-4 text-center">
                        <p className="p-2 max-w-xl text-[18px]">
                            Women Collection 2018
                        </p>
                        <h2 className="text-[60px] font-[600] pb-5">
                            New arrivals
                        </h2>

                        <button className="rounded-[50px] w-[161px] h-[46px] bg-white text-black">
                            Shop Now
                        </button>
                    </div>
                </div>
            )}

            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-2 transform -translate-y-1/2  rounded-full p-2 hover:bg-opacity-90 hover:bg-[#e65540] transition"
                aria-label="Previous Slide"
            >
                <FaChevronLeft color="white" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-2 transform -translate-y-1/2  rounded-full p-2 hover:bg-opacity-90 hover:bg-[#e65540] transition"
                aria-label="Next Slide"
            >
                <FaChevronRight color="white" />
            </button>
        </div>

        {/* mt9isschdb */}
            {/* <div>

               

            </div> */}
        </>
    );
};

export default Home;
