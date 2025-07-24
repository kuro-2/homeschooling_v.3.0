import React from 'react';
import { Brain, Target, BarChart3, Library } from 'lucide-react';

function AboutUs({ features }) {
  return (
    <section id="about" className={`py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-gray-100 transition-colors duration-300 min-h-screen flex items-center`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 scroll-animate">
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 animate-fade-in-up px-2">
            <span className={'text-[#3D67FF]'}>Everything You Need to</span>
            <br />
            <span className={"text-[#060606]"}>
              Succeed
            </span>
          </h2>
          <p className={`text-sm xs:text-base sm:text-lg md:text-xl text-[#02060d] max-w-4xl mx-auto animate-fade-in-up animation-delay-200 px-4`}>
            Powerful tools and features designed specifically for homeschooling educators
          </p>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div key={index} className={`bg-white/70 border-gray-200 hover:border-gray-300 backdrop-blur-sm rounded-xl p-4 sm:p-6 lg:p-8 border transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:-translate-y-2 group scroll-animate`} style={{animationDelay: `${index * 100}ms`}}>
              <div className={`p-2 sm:p-3 lg:p-4 rounded-lg bg-gradient-to-r ${feature.gradient} w-fit mb-3 sm:mb-4 lg:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                <feature.icon className="w-5 sm:w-6 lg:w-8 h-5 sm:h-6 lg:h-8 text-white" />
              </div>
              
              <h3 className={`text-base sm:text-lg lg:text-xl font-bold text-[#3D67FF] mb-2 sm:mb-3 lg:mb-4 group-hover:text-[#3D67FF] transition-colors duration-300`}>
                {feature.title}
              </h3>
              
              <p className={`text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
