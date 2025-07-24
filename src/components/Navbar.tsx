import React from 'react';
import { Menu, X, BarChart3, Activity, DollarSign } from 'lucide-react';

function Navbar({ isMenuOpen, setIsMenuOpen, handleNavLinkClick }) {
  return (
    <nav className={`fixed top-0 w-full bg-[#3D67FF]/95 border-[#3D67FF] backdrop-blur-sm z-50 border-b transition-all duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-2">
            <img 
              src="/logo.png" // Path to your logo image
              alt="Dumroo AI Logo" 
              className="h-8 sm:h-10 w-auto cursor-pointer transition-transform duration-300 hover:scale-105" 
              onClick={() => handleNavLinkClick('home')}
            />
          </div>
          
          {/* Desktop Navigation Links */}
          {/* Hidden on medium screens and below, flex on large screens and up */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <button onClick={() => handleNavLinkClick('home', 'about')} className={`text-white hover:text-yellow-400 transition-all duration-300 hover:scale-105 relative group text-sm xl:text-base`}>
              About Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button onClick={() => handleNavLinkClick('home', 'how-it-works')} className={`text-white hover:text-yellow-400 transition-all duration-300 hover:scale-105 relative group text-sm xl:text-base`}>
              How It Works
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button onClick={() => handleNavLinkClick('home', 'ai-tools')} className={`text-white hover:text-yellow-400 transition-all duration-300 hover:scale-105 relative group text-sm xl:text-base`}>
              AI Tools
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button onClick={() => handleNavLinkClick('home', 'why-choose-us')} className={`text-white hover:text-yellow-400 transition-all duration-300 hover:scale-105 relative group text-sm xl:text-base`}>
              Why Choose Us?
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button onClick={() => handleNavLinkClick('home', 'testimonials')} className={`text-white hover:text-yellow-400 transition-all duration-300 hover:scale-105 relative group text-sm xl:text-base`}>
              Testimonials
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button onClick={() => handleNavLinkClick('dashboard')} className={`text-white hover:text-yellow-400 transition-all duration-300 hover:scale-105 relative group text-sm xl:text-base`}>
              Dashboard
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button onClick={() => handleNavLinkClick('recent-activity')} className={`text-white hover:text-yellow-400 transition-all duration-300 hover:scale-105 relative group text-sm xl:text-base`}>
              Activity
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button onClick={() => handleNavLinkClick('pricing')} className={`text-white hover:text-yellow-400 transition-all duration-300 hover:scale-105 relative group text-sm xl:text-base`}>
              Pricing
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
            </button>
            <a href="https://homeschooling.dumroo.ai/" className={`bg-yellow-400 hover:bg-yellow-500 text-[#385cfc] px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:-translate-y-0.5`}>
              Get Started
            </a>
          </div>

          {/* Hamburger Menu Icon */}
          {/* Hidden on large screens and up */}
          <button 
            className="lg:hidden text-white" // Use text-white to ensure icon color
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu" // Added for accessibility
          >
            {isMenuOpen ? <X className="w-6 h-6 transform rotate-90 transition-transform duration-300" /> : <Menu className="w-6 h-6 transform hover:scale-110 transition-all duration-300" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Slides down when isMenuOpen is true */}
      {isMenuOpen && (
        <div className={`lg:hidden bg-[#3D67FF] border-[#3D67FF] border-t transition-all duration-300 animate-slide-down`}>
          <div className="px-4 pt-2 pb-4 space-y-2">
            <button onClick={() => handleNavLinkClick('home', 'about')} className={`block w-full text-left p-2 rounded-md text-white hover:bg-blue-700/50 hover:text-yellow-400 transition-all duration-300`}>About Us</button>
            <button onClick={() => handleNavLinkClick('home', 'how-it-works')} className={`block w-full text-left p-2 rounded-md text-white hover:bg-blue-700/50 hover:text-yellow-400 transition-all duration-300`}>How It Works</button>
            <button onClick={() => handleNavLinkClick('home', 'ai-tools')} className={`block w-full text-left p-2 rounded-md text-white hover:bg-blue-700/50 hover:text-yellow-200 transition-all duration-300`}>AI Tools</button>
            <button onClick={() => handleNavLinkClick('home', 'why-choose-us')} className={`block w-full text-left p-2 rounded-md text-white hover:bg-blue-700/50 hover:text-yellow-400 transition-all duration-300`}>Why Choose Us?</button>
            <button onClick={() => handleNavLinkClick('home', 'testimonials')} className={`block w-full text-left p-2 rounded-md text-white hover:bg-blue-700/50 hover:text-yellow-400 transition-all duration-300`}>Testimonials</button>
            <button onClick={() => handleNavLinkClick('dashboard')} className={`flex items-center gap-2 w-full text-left p-2 rounded-md text-white hover:bg-blue-700/50 hover:text-yellow-400 transition-all duration-300`}>
              <BarChart3 className="w-5 h-5" />
              Dashboard
            </button>
            <button onClick={() => handleNavLinkClick('recent-activity')} className={`flex items-center gap-2 w-full text-left p-2 rounded-md text-white hover:bg-blue-700/50 hover:text-yellow-400 transition-all duration-300`}>
              <Activity className="w-5 h-5" />
              Recent Activity
            </button>
            <button onClick={() => handleNavLinkClick('pricing')} className={`flex items-center gap-2 w-full text-left p-2 rounded-md text-white hover:bg-blue-700/50 hover:text-yellow-400 transition-all duration-300`}>
              <DollarSign className="w-5 h-5" />
              Pricing
            </button>
            <div className="pt-2">
              <a href="https://homeschooling.dumroo.ai/" className="block w-full bg-yellow-400 hover:bg-yellow-500 px-6 py-3 rounded-lg font-medium transition-all duration-300 text-center transform hover:scale-105 hover:shadow-lg text-[#385cfc]">
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;