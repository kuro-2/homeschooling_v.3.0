import React from 'react';
import { UserPlus, FileText, Calendar, Wand2, ArrowRight } from 'lucide-react';

function HowItWorks() {
  return (
    <section id="how-it-works" className={`min-h-screen flex items-center py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-100 to-white transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 scroll-animate">
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-2">
            <span className={'text-[#070707]'}>How It </span>
            <span className={"text-[#3D67FF]"}>
              Works
            </span>
          </h2>
          <p className={`text-sm xs:text-base sm:text-lg md:text-xl text-[#02060d] max-w-4xl mx-auto px-4`}>
            Get started with Dumroo.AI in four simple steps and transform your homeschooling experience
          </p>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Step 1: Add Student */}
          <div className="text-center scroll-animate">
            <div className={`relative mx-auto w-24 xs:w-28 sm:w-32 h-24 xs:h-28 sm:h-32 mb-4 sm:mb-6 bg-white/80 rounded-full flex items-center justify-center border-2 sm:border-4 border-blue-200/30 hover:border-blue-700/50 transition-all duration-300 group`}>
              {/* Animated background circles */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-200/20 to-blue-200/20 animate-pulse-slow"></div>
              <div className="absolute inset-1 sm:inset-2 rounded-full bg-gradient-to-r from-blue-300/10 to-blue-300/10 group-hover:scale-110 transition-transform duration-300"></div>
              
              {/* Icon with number */}
              <div className="relative z-10 flex flex-col items-center">
                <UserPlus className="w-8 xs:w-10 sm:w-12 h-8 xs:h-10 sm:h-12 text-blue-500 mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-xs font-bold bg-gradient-to-r from-blue-400 to-blue-400 text-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">1</span>
              </div>
            </div>
            
            <h3 className={`text-base sm:text-lg lg:text-xl font-bold text-[#3D67FF] mb-2 sm:mb-3 px-2`}>Add Student</h3>
            <p className={`text-xs sm:text-sm text-gray-600 leading-relaxed px-2`}>
              Create a personalized profile for your student with their learning preferences and goals
            </p>
          </div>

          {/* Step 2: Generate Syllabus */}
          <div className="text-center scroll-animate animation-delay-200">
            <div className={`relative mx-auto w-24 xs:w-28 sm:w-32 h-24 xs:h-28 sm:h-32 mb-4 sm:mb-6 bg-white/80 rounded-full flex items-center justify-center border-2 sm:border-4 border-blue-200/30 hover:border-blue-700/50 transition-all duration-300 group`}>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-200/20 to-blue-200/20 animate-pulse-slow animation-delay-100"></div>
              <div className="absolute inset-1 sm:inset-2 rounded-full bg-gradient-to-r from-blue-300/10 to-blue-300/10 group-hover:scale-110 transition-transform duration-300"></div>
              
              <div className="relative z-10 flex flex-col items-center">
                <FileText className="w-8 xs:w-10 sm:w-12 h-8 xs:h-10 sm:h-12 text-blue-500 mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-xs font-bold bg-gradient-to-r from-blue-400 to-blue-400 text-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">2</span>
              </div>                    
            </div>
            
            <h3 className={`text-base sm:text-lg lg:text-xl font-bold text-[#3D67FF] mb-2 sm:mb-3 px-2`}>Generate Syllabus</h3>
            <p className={`text-xs sm:text-sm text-gray-600 leading-relaxed px-2`}>
              AI creates a comprehensive curriculum tailored to your student's grade level and interests
            </p>
          </div>

          {/* Step 3: Plan Lessons */}
          <div className="text-center scroll-animate animation-delay-300">
            <div className={`relative mx-auto w-24 xs:w-28 sm:w-32 h-24 xs:h-28 sm:h-32 mb-4 sm:mb-6 bg-white/80 rounded-full flex items-center justify-center border-2 sm:border-4  border-blue-200/30 hover:border-blue-700/50 transition-all duration-300 group`}>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-200/20 to-blue-200/20 animate-pulse-slow animation-delay-200"></div>
              <div className="absolute inset-1 sm:inset-2 rounded-full bg-gradient-to-r from-blue-300/10 to-blue-300/10 group-hover:scale-110 transition-transform duration-300"></div>
              
              <div className="relative z-10 flex flex-col items-center">
                <Calendar className="w-8 xs:w-10 sm:w-12 h-8 xs:h-10 sm:h-12 text-blue-500 mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-xs font-bold bg-gradient-to-r from-blue-400 to-blue-400 text-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">3</span>
              </div>
          </div>
            
            <h3 className={`text-base sm:text-lg lg:text-xl font-bold text-[#3D67FF] mb-2 sm:mb-3 px-2`}>Plan Lessons</h3>
            <p className={`text-xs sm:text-sm text-gray-600 leading-relaxed px-2`}>
              Smart scheduling creates weekly lesson plans that adapt to your family's rhythm
            </p>
          </div>

          {/* Step 4: Personalize Learning */}
          <div className="text-center scroll-animate animation-delay-400">
            <div className={`relative mx-auto w-24 xs:w-28 sm:w-32 h-24 xs:h-28 sm:h-32 mb-4 sm:mb-6 bg-white/80 rounded-full flex items-center justify-center border-2 sm:border-4 border-blue-200/30 hover:border-blue-700/50 transition-all duration-300 group`}>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-200/20 to-blue-200/20 animate-pulse-slow animation-delay-300"></div>
              <div className="absolute inset-1 sm:inset-2 rounded-full bg-gradient-to-r from-blue-300/10 to-blue-300/10 group-hover:scale-110 transition-transform duration-300"></div>
              
              <div className="relative z-10 flex flex-col items-center">
                <Wand2 className="w-8 xs:w-10 sm:w-12 h-8 xs:h-10 sm:h-12 text-blue-500 mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-xs font-bold bg-gradient-to-r from-blue-400 to-blue-400 text-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">4</span>
              </div>
            </div>
            
            <h3 className={`text-base sm:text-lg lg:text-xl font-bold text-[#3D67FF] mb-2 sm:mb-3 px-2`}>Personalize</h3>
            <p className={`text-xs sm:text-sm text-gray-600 leading-relaxed px-2`}>
              AI continuously adapts content to match your student's learning style and pace
            </p>
          </div>
        </div>

        {/* Call to action for this section */}
        <div className="text-center mt-8 sm:mt-12 lg:mt-16 scroll-animate animation-delay-500">
          <a href="https://homeschooling.dumroo.ai/" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#385cfc] to-[#385cfc] hover:from-[#385cfc] hover:to-[#385cfc] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:-translate-y-1 group">
            Start Your Journey
            <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
