import React from 'react';

function WhyChooseUs() {
  return (
    <section id="why-choose-us" className={`py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white transition-colors duration-300 min-h-screen flex items-center`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 scroll-animate">
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 animate-fade-in-up px-2">
            <span className={'text-[#040404]'}>Why Homeschooling Educators</span>
            <br />
            <span className={"text-[#3D67FF]"}>
              Love Dumroo AI
            </span>
          </h2>
          <p className={`text-sm xs:text-base sm:text-lg md:text-xl text-[#02060d] max-w-4xl mx-auto animate-fade-in-up animation-delay-200 px-4`}>
            See the impact our platform has on homeschooling success
          </p>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          <div className={`text-center bg-white/70 border-gray-200 hover:border-gray-300 backdrop-blur-sm rounded-xl p-4 sm:p-6 lg:p-8 border transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:-translate-y-2 group scroll-animate`}>
            <div className="mb-4 sm:mb-6">
              <div className={`text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300 text-[#070808]`}>
                50%
              </div>
              <div className={`text-base sm:text-lg lg:text-xl font-semibold text-[#3D67FF] mb-1 sm:mb-2 group-hover:text-blue-600 transition-colors duration-300`}>
                Time Saved
              </div>
              <p className={`text-xs sm:text-sm lg:text-base text-gray-600`}>
                Reduce planning time by up to 50%
              </p>
            </div>
            <div className="w-8 sm:w-12 lg:w-16 h-0.5 sm:h-1 bg-gradient-to-r from-blue-500 to-blue-500 mx-auto rounded-full group-hover:w-12 sm:group-hover:w-16 lg:group-hover:w-20 transition-all duration-300"></div>
          </div>

          <div className={`text-center bg-white/70 border-gray-200 hover:border-gray-300 backdrop-blur-sm rounded-xl p-4 sm:p-6 lg:p-8 border transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:-translate-y-2 group scroll-animate animation-delay-100`}>
            <div className="mb-4 sm:mb-6">
              <div className={`text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300 text-[#08090b]`}>
                85%
              </div>
              <div className={`text-base sm:text-lg lg:text-xl font-semibold text-[#3D67FF] mb-1 sm:mb-2 group-hover:text-blue-600 transition-colors duration-300`}>
                Better Outcomes
              </div>
              <p className={`text-xs sm:text-sm lg:text-base text-gray-600`}>
                Improved learning results
              </p>
            </div>
            <div className="w-8 sm:w-12 lg:w-16 h-0.5 sm:h-1 bg-gradient-to-r from-blue-500 to-blue-500 mx-auto rounded-full group-hover:w-12 sm:group-hover:w-16 lg:group-hover:w-20 transition-all duration-300"></div>
          </div>

          <div className={`text-center bg-white/70 border-gray-200 hover:border-gray-300 backdrop-blur-sm rounded-xl p-4 sm:p-6 lg:p-8 border transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:-translate-y-2 group scroll-animate animation-delay-200`}>
            <div className="mb-4 sm:mb-6">
              <div className={`text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300 text-[#0b0c0f]`}>
                90%
              </div>
              <div className={`text-base sm:text-lg lg:text-xl font-semibold text-[#3D67FF] mb-1 sm:mb-2 group-hover:text-blue-600 transition-colors duration-300`}>
                Engagement
              </div>
              <p className={`text-xs sm:text-sm lg:text-base text-gray-600`}>
                Increased student engagement
              </p>
            </div>
            <div className="w-8 sm:w-12 lg:w-16 h-0.5 sm:h-1 bg-gradient-to-r from-blue-500 to-blue-500 mx-auto rounded-full group-hover:w-12 sm:group-hover:w-16 lg:group-hover:w-20 transition-all duration-300"></div>
          </div>

          <div className={`text-center bg-white/70 border-gray-200 hover:border-gray-300 backdrop-blur-sm rounded-xl p-4 sm:p-6 lg:p-8 border transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:-translate-y-2 group scroll-animate animation-delay-300`}>
            <div className="mb-4 sm:mb-6">
              <div className={`text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300 text-[#090a0c]`}>
                100%
              </div>
              <div className={`text-base sm:text-lg lg:text-xl font-semibold text-[#3D67FF] mb-1 sm:mb-2 group-hover:text-blue-600 transition-colors duration-300`}>
                Personalization
              </div>
              <p className={`text-xs sm:text-sm lg:text-base text-gray-600`}>
                Tailored learning experiences
              </p>
            </div>
            <div className="w-8 sm:w-12 lg:w-16 h-0.5 sm:h-1 bg-gradient-to-r from-blue-500 to-blue-500 mx-auto rounded-full group-hover:w-12 sm:group-hover:w-16 lg:group-hover:w-20 transition-all duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
