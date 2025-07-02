import React from 'react';
import images from './constant/images';

const About = () => {
    return (
        <div>
            <div className="top-title flex justify-center h-60 items-center" style={{ backgroundImage: `url(${images.topweb})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <h1 className='text-white text-[40px] font-[1000]'>ABOUT</h1>
            </div>
            <div className="flex flex-col justify-center lg:flex-row items-center gap-10 px-6 md:px-16 py-12 bg-white">
                <div className="max-w-[400px] lg:w-1/2">
                    <img
                        src={images.c3}
                        alt=""
                        className="w-full h-auto  object-cover max-h-[500px] "
                    />
                </div>

                <div className="w-full lg:w-1/2 space-y-6">
                    <h2 className="text-3xl font-bold text-[#333333]">Our Story</h2>

                    <p className="text-[#888888] leading-relaxed text-[15px]">
                        Phasellus egestas nisi nisi, lobortis ultricies risus semper nec. Vestibulum pharetra ac ante ut pellentesque.
                        Curabitur fringilla dolor quis lorem accumsan, vitae molestie urna dapibus. Pellentesque porta est ac neque
                        bibendum viverra. Vivamus lobortis magna ut interdum laoreet. Donec gravida lorem elit, quis condimentum ex
                        semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula
                        vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis,
                        eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt
                        erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac
                        ligula. Vivamus tristique vulputate ultricies. Sed vitae ultrices orci.
                    </p>

                    <p className="border-l-2 border-[#e6e6e6]  pl-6 italic text-[#555555] text-[15px] leading-relaxed">
                        “Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty
                        because they didn't really do it, they just saw something. It seemed obvious to them after a while.”
                        <br />
                        <span className="block mt-2 font-semibold">– Steve Jobs</span>
                    </p>
                </div>
            </div>

        </div>
    );
}

export default About;
