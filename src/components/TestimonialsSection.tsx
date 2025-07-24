import React from 'react';
import { Star } from 'lucide-react';

function TestimonialsSection({ testimonials }) {
  return (
    <section id="testimonials" className={`py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50 transition-colors duration-300 min-h-screen flex items-center`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 scroll-animate">
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 animate-fade-in-up px-2">
            <span className={'text-[#02060d]'}>Trusted by</span>
            <br />
            <span className={"text-[#3D67FF]"}>
              Homeschooling Families
            </span>
          </h2>
          <p className={`text-sm xs:text-base sm:text-lg md:text-xl text-[#000000] max-w-4xl mx-auto animate-fade-in-up animation-delay-200 px-4`}>
            See how Dumroo.AI is transforming homeschooling experiences across the country
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`bg-white/70 border-gray-200 hover:border-gray-300 backdrop-blur-sm rounded-xl p-4 sm:p-6 lg:p-8 border transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:-translate-y-2 group scroll-animate ${index === 2 && 'sm:col-span-2 lg:col-span-1'}`} style={{animationDelay: `${index * 150}ms`}}>
              <div className="flex items-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-3 xs:w-4 lg:w-5 h-3 xs:h-4 lg:h-5 text-yellow-400 fill-current hover:scale-125 transition-transform duration-300" style={{transitionDelay: `${i * 50}ms`}} />
                ))}
              </div>
              
              <p className={`text-xs xs:text-sm lg:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed`}>
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
                <div className="w-8 xs:w-10 lg:w-12 h-8 xs:h-10 lg:h-12 bg-gradient-to-r from-blue-500 to-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 flex-shrink-0">
                  <span className="text-white font-bold text-xs xs:text-sm lg:text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className={`text-xs xs:text-sm lg:text-base font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300`}>{testimonial.name}</div>
                  <div className={`text-gray-500 text-xs lg:text-sm`}>{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
