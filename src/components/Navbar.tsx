import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Our Process', href: '#process' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Package', href: '#package' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-brandwave-black/95 backdrop-blur-md border-b border-brandwave-red/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 "
          >
            <img
              src="/logo.png"
              alt="Brandwave Logo"
              className="h-20 w-full object-contain"
            />
   
           
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-brandwave-white hover:text-brandwave-red transition-colors duration-300 font-inter font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brandwave-red transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
            
            <a  href='#contact'><motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brandwave-red text-brandwave-white px-6 py-2 rounded-full font-inter font-medium hover:bg-brandwave-red/90 transition-colors duration-300"
            >
              Get Started
            </motion.button></a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-brandwave-white hover:text-brandwave-red transition-colors duration-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-brandwave-black/95 backdrop-blur-md"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-brandwave-white hover:text-brandwave-red transition-colors duration-300 font-inter font-medium"
              >
                {item.name}
              </a>
            ))}
              <a  href='#contact'><button className="w-full mt-4 bg-brandwave-red text-brandwave-white px-6 py-3 rounded-full font-inter font-medium hover:bg-brandwave-red/90 transition-colors duration-300">
              Get Started
            </button></a>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;