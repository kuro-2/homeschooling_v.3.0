import React, { useState, useEffect } from 'react';
import { Users, BookOpen, Calendar, Sparkles, Brain, Target, BarChart3, Library, Wand2, Star, ArrowRight, Activity, DollarSign, Menu, X, UserPlus, FileText, Settings, Award, PieChart, Clock, TrendingUp, MessageCircle, Download, CheckCircle, Headphones, Info } from 'lucide-react';

// Corrected import paths for components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import HowItWorks from './components/HowItWorks';
import AiTools from './components/AiTools';
import WhyChooseUs from './components/WhyChooseUs';
import TestimonialsSection from './components/TestimonialsSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

import Dashboard from './Dashboard';
import RecentActivity from './RecentActivity';
import Pricing from './Pricing';

// Custom hook for scroll-triggered animations
const useScrollAnimation = (currentPage) => {
  React.useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.scroll-animate');

    if (currentPage === 'home') {
      animateElements.forEach((el) => {
        el.classList.remove('animate-in');
        observer.unobserve(el);
        observer.observe(el);
      });
    } else {
      animateElements.forEach((el) => {
        observer.observe(el);
      });
    }

    return () => observer.disconnect();
  }, [currentPage]);
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home'); 
  
  useScrollAnimation(currentPage);


  // Data for various sections (kept in App.tsx to be passed as props)
  const features = [
    {
      icon: Brain,
      title: "AI Curriculum Assistant",
      description: "Get personalized curriculum planning and lesson design assistance",
      gradient: "from-[#385cfc] to-[#385cfc]"
    },
    {
      icon: Target,
      title: "Learning Path Designer",
      description: "Create customized learning paths for each child",
      gradient: "from-[#385cfc] to-[#385cfc]"
    },
    {
      icon: BarChart3,
      title: "Progress Tracking",
      description: "Monitor learning progress with detailed analytics",
      gradient: "from-[#385cfc] to-[#385cfc]"
    },
    {
      icon: Library,
      title: "Resource Library",
      description: "Access curated educational resources and materials",
      gradient: "from-[#385cfc] to-[#385cfc]"
    }
  ];

  const aiTools = [
    {
      title: "Syllabus AI",
      description: "Creates comprehensive curricula tailored to your student's grade level, learning objectives, and interests.",
      image: "/image1.png",
      features: [
        "Grade-appropriate content",
        "Subject integration",
        "Learning objective alignment",
        "Progress tracking"
      ],
      gradient: "from-blue-400 to-blue-400"
    },
    {
      title: "Planning AI",
      description: "Intelligent scheduling and lesson planning that adapts to your family's pace and learning goals.",
      image: "/image2.png",
      features: [
        "Adaptive scheduling",
        "Optimal learning paths",
        "Progress monitoring",
        "Resource suggestions"
      ],
      gradient: "from-blue-400 to-blue-400"
    },
    {
      title: "Personalize AI",
      description: "Customizes content delivery and learning experiences to match each student's unique learning style.",
      image: "/image3.png",
      features: [
        "Learning style adaptation",
        "Interest-based content",
        "Difficulty adjustment",
        "Engagement optimization"
      ],
      gradient: "from-blue-400 to-blue-400"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeschooling Mother of 3",
      content: "Dumroo.AI transformed our homeschooling journey. The AI-powered planning saved me hours every week and my kids are more engaged than ever.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Former Teacher, Now Homeschooling Dad",
      content: "As an educator, I'm impressed by how Dumroo.AI adapts to each child's learning style. It's like having a personal tutor for every subject.",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      role: "Homeschooling Coordinator",
      content: "The syllabus AI is incredible. It created a comprehensive curriculum that would have taken me months to develop on my own.",
      rating: 5
    }
  ];

  const handleNavLinkClick = (pageId, sectionId = null) => {
    setCurrentPage(pageId);
    setIsMenuOpen(false);

    if (pageId === 'home' && sectionId) {
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else if (pageId === 'home' && !sectionId) {
        setTimeout(() => {
            document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    }
  };

  return (
    <div className={`bg-gray-50 text-white overflow-x-hidden transition-colors duration-300`}>
      {/* Custom Scrollbar Styles were moved to index.css */}

      <Navbar 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
        handleNavLinkClick={handleNavLinkClick} 
      />

      {currentPage === 'home' && (
        <>
          <Hero handleNavLinkClick={handleNavLinkClick} />
          <AboutUs features={features} />
          <HowItWorks />
          <AiTools aiTools={aiTools} />
          <WhyChooseUs />
          <TestimonialsSection testimonials={testimonials} />
          <CtaSection />
        </>
      )}

      {currentPage === 'dashboard' && <Dashboard />}
      {currentPage === 'recent-activity' && <RecentActivity />}
      {currentPage === 'pricing' && <Pricing />}

      <Footer />
    </div>
  );
}

export default App;
