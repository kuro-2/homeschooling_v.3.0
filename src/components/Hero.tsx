import React from 'react';
import { ArrowRight } from 'lucide-react';

function Hero({ handleNavLinkClick }) {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-20 sm:py-24">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white/40 to-blue-50/30"></div>
      
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-30"></div>
      
      {/* Decorative Geometric Shapes */}
      {/* Shapes are hidden on smaller screens to reduce clutter and improve performance */}
      <div className="hidden md:block">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-teal-200/20 rounded-full blur-xl animate-float animation-delay-300"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-teal-200/20 rounded-full blur-xl animate-float animation-delay-500"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto text-center w-full">
        <div className="space-y-6 md:space-y-8 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight px-2">
            <span className="text-black block mb-2">
              Empower Your
            </span>
            <span className="text-[#385cfc]">
              Homeschooling Journey
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-800 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200 px-4">
            Transform your homeschooling experience with AI-powered tools designed for educators. From personalized curricula to adaptive lesson plans, we make quality education accessible and engaging.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 animate-fade-in-up animation-delay-400">
            <a 
              href="https://homeschooling.dumroo.ai/" 
              className="w-full sm:w-auto bg-[#385cfc] hover:bg-[#3252e0] px-6 py-3 rounded-lg font-semibold text-white text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 group"
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a 
              href="https://youtu.be/U1lwAlcKvWY?list=TLGGoNCTjh5KNEUyNDA3MjAyNQ" 
              className="w-full sm:w-auto border border-[#385cfc] hover:bg-blue-500/10 px-6 py-3 rounded-lg font-semibold text-[#385cfc] text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Watch Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;