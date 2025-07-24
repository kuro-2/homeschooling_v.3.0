import React from 'react';
import { ArrowRight } from 'lucide-react';

function CtaSection() {
  return (
    <section className={`py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-[#385cfc] via-[#385cfc] to-[#385cfc] transition-colors duration-300`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center scroll-animate">
        <h2 className={`text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-[#e6e7eb] animate-fade-in-up px-2`}>
          Ready to Transform Your
          <br />
          <span className={"text-[#dedfe4]"}>
            Homeschooling Journey?
          </span>
        </h2>
        
        <p className={`text-sm xs:text-base sm:text-lg md:text-xl text-[#e6e7eb] mb-6 sm:mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-200 px-4`}>
          Join thousands of families who've already discovered the power of AI-assisted homeschooling. Start your free trial today.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-fade-in-up animation-delay-400 px-4">
          <a href="https://homeschooling.dumroo.ai/" className="w-full xs:w-auto sm:w-auto bg-gradient-to-r from-yellow-400 to-yellow-400 hover:from-yellow-500 hover:to-yellow-600 px-4 xs:px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-[#385cfc] text-sm xs:text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 group min-w-[140px]">
            Get Started
            <ArrowRight className="w-3 xs:w-4 sm:w-5 h-3 xs:h-4 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          <a href="https://dumroo.ai/contact" className={`w-full xs:w-auto sm:w-auto border border-[#f7f8fc] hover:border-[#ecedf1] hover:bg-gray-0 px-4 xs:px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-[#e6e8f0] text-sm xs:text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:-translate-y-0.5 min-w-[140px]`}>
            Schedule Demo
          </a>
        </div>
        
        <p className={`text-white mt-4 sm:mt-6 text-xs sm:text-sm animate-fade-in-up animation-delay-600 px-4`}>
          No credit card required • Free to start • Cancel anytime
        </p>
      </div>
    </section>
  );
}

export default CtaSection;
