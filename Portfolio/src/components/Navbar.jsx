import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Determine which section is currently in view
      const sections = ['home', 'projects', 'skills', 'about', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add hamburger menu toggle
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="fixed top-4 left-0 right-0 flex justify-center z-50">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`relative w-[95%] md:w-auto rounded-full px-4 md:px-8 py-3 ${
          scrolled ? 'bg-black/75' : 'bg-black/60'
        } backdrop-blur-md`}
      >
        {/* Mobile hamburger button */}
        <button
          className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 text-white z-50"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center justify-center space-x-12">
          {['Home', 'Projects', 'Skills', 'About', 'Contact'].map((item) => (
            <motion.a
              key={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById(item.toLowerCase());
                if (element) {
                  const offset = 100; // Add some offset from the top
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                }
              }}
              className={`text-sm font-medium tracking-wide font-['Montserrat'] 
                ${activeSection === item.toLowerCase() 
                  ? 'bg-white text-black px-5 py-1.5 rounded-full hover:bg-opacity-90 hover:text-black' 
                  : 'text-gray-300 hover:text-white'} 
                transition-colors`}
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden fixed top-[80px] left-4 right-4 bg-black/90 backdrop-blur-md rounded-3xl p-4 border border-white/10">
            {['Home', 'Projects', 'Skills', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => {
                  document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                  setIsOpen(false);
                }}
                className="block text-center text-white text-lg font-['Montserrat'] py-4 
                  hover:bg-white/10 rounded-xl transition-all"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </motion.nav>
    </div>
  );
};

export default Navbar;
