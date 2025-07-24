import React from 'react';

function AiTools({ aiTools }) {
  return (
    <section id="ai-tools" className={`py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50 transition-colors duration-300 min-h-screen flex items-center`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 scroll-animate">
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 animate-fade-in-up px-2">
            <span className={'text-[#000000]'}>Meet Your AI</span>
            <br />
            <span className={"text-[#3D67FF]"}>
              Teaching Assistants
            </span>
          </h2>
          <p className={`text-sm xs:text-base sm:text-lg md:text-xl text-[#02060d] max-w-4xl mx-auto animate-fade-in-up animation-delay-200 px-4`}>
            Three specialized AI tools working together to create the perfect homeschooling experience for your family
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {aiTools.map((tool, index) => (
            <div key={index} className={`bg-white/70 border-gray-200 hover:border-gray-300 backdrop-blur-sm rounded-xl overflow-hidden border transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:-translate-y-3 group scroll-animate ${index === 2 && 'sm:col-span-2 lg:col-span-1'}`} style={{animationDelay: `${index * 150}ms`}}>
              <div className="relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-r ${tool.gradient} opacity-30`}></div>
                <img 
                  src={tool.image} 
                  alt={tool.title}
                  className="w-full h-32 xs:h-36 sm:h-40 lg:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-2 sm:top-3 lg:top-4 left-2 sm:left-3 lg:left-4">
                  <div className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-gradient-to-r ${tool.gradient} text-white text-xs sm:text-sm font-medium transform group-hover:scale-110 transition-all duration-300`}>
                    {tool.title}
                  </div>
                </div>
              </div>
              
              <div className="p-3 xs:p-4 sm:p-6 lg:p-8">
                <h3 className={`text-base xs:text-lg sm:text-xl lg:text-2xl font-bold text-[#3D67FF] mb-2 sm:mb-3 lg:mb-4 group-hover:[#3D67FF] transition-colors duration-300`}>
                  {tool.title}
                </h3>
                
                <p className={`text-xs xs:text-sm lg:text-base text-gray-600 mb-3 sm:mb-4 lg:mb-6 leading-relaxed`}>
                  {tool.description}
                </p>
                
                <div className="space-y-1.5 sm:space-y-2 lg:space-y-3">
                  <h4 className={`text-sm xs:text-base lg:text-lg font-semibold text-gray-900`}>Key Features:</h4>
                  <ul className="space-y-1 sm:space-y-1.5 lg:space-y-2">
                    {tool.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className={`flex items-center gap-1.5 sm:gap-2 lg:gap-3 text-xs xs:text-sm lg:text-base text-gray-600 group-hover:translate-x-1 transition-transform duration-300`} style={{transitionDelay: `${featureIndex * 50}ms`}}>
                        <div className={`w-1 xs:w-1.5 lg:w-2 h-1 xs:h-1.5 lg:h-2 rounded-full bg-gradient-to-r ${tool.gradient} group-hover:scale-125 transition-transform duration-300 flex-shrink-0`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AiTools;
