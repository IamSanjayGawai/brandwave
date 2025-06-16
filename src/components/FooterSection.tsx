
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Instagram, Linkedin, Facebook, Youtube, ArrowUp } from 'lucide-react';

const FooterSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
    { icon: Youtube, href: '#', name: 'YouTube' },
    { icon: Mail, href: '#', name: 'Email' }
  ];

  const navigationLinks = [
    { title: 'Services', links: ['Design', 'Digital', '360 Media', 'Planning & Buying'] },
    { title: 'About', links: ['Who We Are', 'Our Process', 'Careers', 'Contact'] },
    { title: 'Work', links: ['Case Studies', 'Portfolio', 'Testimonials', 'Awards'] },
    { title: 'Resources', links: ['Blog', 'Insights', 'Downloads', 'FAQ'] }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer ref={ref} className="relative bg-brandwave-black border-t border-gray-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #FF2C2C 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* CTA Section */}
      <div className="relative z-10 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-bold font-sora">
              Let's Make{' '}
              <span className="gradient-text">Waves Together</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your brand? We're here to create something extraordinary that resonates with your audience and drives real results.
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px #FF2C2C" }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-4 bg-brandwave-red text-brandwave-white font-semibold text-lg rounded-full transition-all duration-300 hover:bg-red-600"
              >
                Start Your Project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-4 border-2 border-brandwave-red text-brandwave-red font-semibold text-lg rounded-full transition-all duration-300 hover:bg-brandwave-red hover:text-white"
              >
                Schedule a Call
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="relative z-10 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 space-y-6"
            >
              <div>
                 <img
              src="/logo.png"
              alt="Brandwave Logo"
              className="h-20 w-40 object-contain "
            />
            <h3 className="text-2xl font-bold text-brandwave-white font-sora mt-4">
                  BrandWave Studio LLP
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  We don't just create brands—we craft movements. Every pixel, every word, every interaction is designed to make waves in your industry.
                </p>
              </div>
              
              <div className="space-y-2">
                <p className="text-gray-300">
                  <span className="text-brandwave-red font-semibold">Email:</span> brandwave49@gmail.com
                </p>
                <p className="text-gray-300">
                  <span className="text-brandwave-red font-semibold">Phone:</span> +91 9579471645 | +91 8380805500
                </p>
                <span className="text-gray-300">Pune | Mumbai | Banglore</span>
                <p className="text-gray-300">
                  <span className="text-brandwave-red font-semibold">Address:</span> Excella Spaces, Elite Brookland, off Balewadi High Street, Balewadi, Pune - 411045, India
                </p>
              </div>
            </motion.div>

            {/* Navigation Links */}
            {navigationLinks.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="space-y-4"
              >
                <h4 className="text-lg font-semibold text-brandwave-white font-sora">
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-brandwave-red transition-colors duration-200 text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0"
          >
            <div className="flex space-x-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 360,
                    color: '#FF2C2C'
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-400 hover:text-brandwave-red transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>

            <div className="text-center md:text-right space-y-2">
              <p className="text-sm text-gray-400">
                © 2025 BrandWave. All rights reserved.
              </p>
              <div className="flex space-x-4 text-sm text-gray-400">
                <a href="#" className="hover:text-brandwave-red transition-colors duration-200">
                  Privacy Policy
                </a>
                <span>•</span>
                <a href="#" className="hover:text-brandwave-red transition-colors duration-200">
                  Terms of Service
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.3, delay: 1 }}
        whileHover={{ scale: 1.1, boxShadow: "0 0 20px #FF2C2C" }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-brandwave-red text-white rounded-full flex items-center justify-center shadow-lg hover:bg-red-600 transition-colors duration-200 z-50"
      >
        <ArrowUp size={20} />
      </motion.button>

      <span>Design And Developed By:  SG</span>
    </footer>
  );
};

export default FooterSection;
