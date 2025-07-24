import React from 'react';

function Footer() {
  return (
    <footer className={`py-8 sm:py-10 lg:py-12 transition-colors duration-300 bg-[#181c24] border-[#181c24]`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-8 gap-x-4 sm:gap-x-6 lg:gap-x-8 mb-6 sm:mb-8">
          {/* Brand Section */}
          <div className="xs:col-span-2 md:col-span-1 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-3 sm:mb-4">
              <img 
                src="/logo.png" // Path to your logo image
                alt="Dumroo AI Logo" 
                className="h-6 sm:h-8 w-auto transition-transform duration-300 hover:scale-105" 
              />
            </div>
            <p className={`text-blue-100 text-xs sm:text-sm leading-relaxed`}>
              Empowering homeschooling families with AI-powered educational tools for personalized learning experiences.
            </p>
          </div>

          {/* Contact Us Section */}
          <div>
            <h3 className={`text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base`}>Contact Us</h3>
            <ul className={`space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-blue-100`}>
              <li>405 Northfield Ave Ste 201,</li>
              <li>West Orange, NJ 07078</li>
              <li>
                <a href="mailto:info@dumroo.ai" className={`hover:text-white transition-all duration-300 hover:translate-x-1`}>
                  info@dumroo.ai
                </a>
              </li>
              <li>
                <a href="tel:1-800-EDU-HELP" className={`hover:text-white transition-all duration-300 hover:translate-x-1`}>
                  1-800-EDU-HELP
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className={`text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base`}>Quick Links</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li><a href="#" className={`text-blue-100 hover:text-white transition-all duration-300 text-xs sm:text-sm hover:translate-x-1`}>About Us</a></li>
              <li><a href="https://dumroo.ai/news" className={`text-blue-100 hover:text-white transition-all duration-300 text-xs sm:text-sm hover:translate-x-1`}>News</a></li>
              <li><a href="https://dumroo.ai/blog" className={`text-blue-100 hover:text-white transition-all duration-300 text-xs sm:text-sm hover:translate-x-1`}>Blog</a></li>
              <li><a href="https://dumroo.ai/gallery" className={`text-blue-100 hover:text-white transition-all duration-300 text-xs sm:text-sm hover:translate-x-1`}>Gallery</a></li>
              <li><a href="https://dumroo.ai/contact" className={`text-blue-100 hover:text-white transition-all duration-300 text-xs sm:text-sm hover:translate-x-1`}>Contact</a></li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className={`text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base`}>Resources</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li><a href="https://dumroo.ai/academy" className={`text-blue-100 hover:text-white transition-all duration-300 text-xs sm:text-sm hover:translate-x-1`}>Dumroo Academy</a></li>
              <li><a href="https://pioneers.dumroo.ai/" className={`text-blue-100 hover:text-white transition-all duration-300 text-xs sm:text-sm hover:translate-x-1`}>Pioneer Teachers</a></li>
              <li><a href="https://dumroo.ai/privacy" className={`text-blue-100 hover:text-white transition-all duration-300 text-xs sm:text-sm hover:translate-x-1`}>Privacy Policy</a></li>
              <li><a href="https://qtiknlfjwgcshfrcqznk.supabase.co/storage/v1/object/sign/companyassets/Terms%20of%20Service%20v1.0.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjb21wYW55YXNzZXRzL1Rlcm1zIG9mIFNlcnZpY2UgdjEuMC5wZGYiLCJpYXQiOjE3NDIyMDAxNTIsImV4cCI6MTgwNTI3MjE1Mn0.X1MgpS7g3Zj1Mpe513as_KMH5ak_pIWBNUQaEcE8aOo" className={`text-blue-100 hover:text-white transition-all duration-300 text-xs sm:text-sm hover:translate-x-1`}>Terms of Service</a></li>
              <li><a href="https://help.dumroo.ai/" className={`text-blue-100 hover:text-white transition-all duration-300 text-xs sm:text-sm hover:translate-x-1`}>Help Center</a></li>
            </ul>
          </div>

          {/* Connect With Us & Newsletter */}
          <div className="lg:col-span-1">
            {/* Connect With Us */}
            <h3 className={`text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base`}>Connect With Us</h3>
            <div className="flex space-x-4 mb-6 sm:mb-8">
              <a href="https://www.facebook.com/people/Dumrooai-AI-Ecosystem-for-Education/61571653776425/" target="_blank" rel="noopener noreferrer" className={`text-blue-100 hover:text-white transition-all duration-300 transform hover:scale-125`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3.208 8.167h-2.125c-.23 0-.417.187-.417.417v1.667h2.5l-.333 2.5h-2.167v6.667h-2.5V12.75h-2.167v-2.5h2.167V8.5c0-1.795 1.455-3.25 3.25-3.25h2.125v2.917z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/dumroo.ai/#" target="_blank" rel="noopener noreferrer" className={`text-blue-100 hover:text-white transition-all duration-300 transform hover:scale-125`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 0C8.74 0 8.333.014 7.053.072 5.775.132 4.905.333 4.043.633c-.878.327-1.745.997-2.484 1.735S.633 3.165.333 4.043C.033 4.905-.167 5.775-.227 7.053-.286 8.333-.3 8.74-.3 12s.014 3.26.072 4.538c.06 1.278.261 2.146.561 3.008.327.878.997 1.745 1.735 2.484s1.597 1.407 2.484 1.735c.862.3 1.73.501 3.008.561C8.74 24.3 9.147 24.3 12 24s3.26-.014 4.538-.072c1.278-.06 2.146-.261 3.008-.561.878-.327 1.745-.997 2.484-1.735s1.407-1.597 1.735-2.484c.3-.862.501-1.73.561-3.008C24.3 15.26 24.3 14.853 24.3 12s-.014-3.26-.072-4.538c-.06-1.278-.261-2.146-.561-3.008-.327-.878-.997-1.745-1.735-2.484S20.835.633 19.957.333C19.095.033 18.225-.167 16.947-.227 15.667-.286 15.26-.3 12-.3zm0 2.167c3.259 0 3.667.014 4.938.072 1.17.058 1.8.245 2.222.406.609.22.969.484 1.34.855.37.37.635.731.855 1.34.161.422.348 1.052.406 2.222.058 1.271.072 1.679.072 4.938s-.014 3.667-.072 4.938c-.058 1.17-.245 1.8-.406 2.222-.22.609-.484.969-.855 1.34-.37.37-.731.635-1.34.855-.422.161-1.052.348-2.222.406-1.271-.058-1.679-.072-4.938-.072s-3.667-.014-4.938-.072c-1.17-.058-1.8-.245-2.222-.406-.609-.22-.969-.484-1.34-.855-.37-.37-.635-.731-.855-1.34-.161-.422-.348-1.052-.406-2.222-.058-1.271-.072-1.679-.072-4.938s.014-3.667.072-4.538c.058-1.17.245-1.8.406-2.222.22-.609.484-.969.855-1.34.37-.37.731-.635 1.34-.855.422-.161 1.052-.348 2.222-.406C8.333 2.167 8.74 2.167 12 2.167zm0 3.667c-3.458 0-6.25 2.792-6.25 6.25s2.792 6.25 6.25 6.25 6.25-2.792 6.25-6.25-2.792-6.25-6.25-6.25zm0 2.167c2.257 0 4.083 1.826 4.083 4.083s-1.826 4.083-4.083 4.083-4.083-1.826-4.083-4.083S9.743 7.917 12 7.917zm6.292-5.75c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1z"/>
                </svg>
              </a>
              <a href="https://x.com/Damroo_AI" target="_blank" rel="noopener noreferrer" className={`text-blue-100 hover:text-white transition-all duration-300 transform hover:scale-125`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M18.901 1.153h3.682l-8.024 9.199L24 22.846h-7.406l-5.874-7.545L4.103 22.846H.337l8.62-9.873L0 1.153h8.21L13.4 8.683l5.501-7.53zM16.92 20.913h2.09L6.219 3.088H4.06L16.92 20.913z"/>
                </svg>
              </a>
            </div>

            {/* Subscribe to Newsletter */}
            <h3 className={`text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base`}>Subscribe to Our Newsletter</h3>
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className={`flex-1 p-2 rounded-md border bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-300 text-sm`}
              />
              <button className=" bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-md font-medium text-[#e2e3e7] text-sm transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={`pt-6 sm:pt-8 border-t border-[#374155] flex flex-col sm:flex-row justify-between items-center gap-4`}>
          <div className={`text-blue-100 text-xs sm:text-sm text-center sm:text-left`}>
            © 2025 Dumroo AI. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-3 sm:space-x-6 text-xs sm:text-sm">
            <a href="https://dumroo.ai/privacy" className={`text-blue-100 hover:text-white transition-all duration-300 hover:scale-105 whitespace-nowrap`}>Privacy Policy</a>
            <a href="https://qtiknlfjwgcshfrcqznk.supabase.co/storage/v1/object/sign/companyassets/Terms%20of%20Service%20v1.0.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjb21wYW55YXNzZXRzL1Rlcm1zIG9mIFNlcnZpY2UgdjEuMC5wZGYiLCJpYXQiOjE3NDIyMDAxNTIsImV4cCI6MTgwNTI3MjE1Mn0.X1MgpS7g3Zj1Mpe513as_KMH5ak_pIWBNUQaEcE8aOo" className={`text-blue-100 hover:text-white transition-all duration-300 hover:scale-105 whitespace-nowrap`}>Terms of Service</a>
            <a href="https://dumroo.ai/sitemap" className={`text-blue-100 hover:text-white transition-all duration-300 hover:scale-105 whitespace-nowrap`}>Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
