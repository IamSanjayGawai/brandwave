import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, ThumbsUp, Twitter, Instagram, Play, MessageCircle, Search, Globe, Youtube, MapPin } from 'lucide-react';

const SocialMediaPackage = () => {
  const [hoveredRow, setHoveredRow] = useState(null);
  
  const services = [
    { service: "Organic Post", deliverable: "150" },
    { service: "Motion Video", deliverable: "25" },
    { service: "Video Post Uploading", deliverable: "Yes" },
    { service: "Social Media Mgt", deliverable: "Yes" },
    { service: "Copy Writing", deliverable: "Yes" },
    { service: "Facebook Post Boost", deliverable: "15 Post" },
    { service: "Facebook Paid Campaign", deliverable: "45 Days" },
    { service: "Instagram Post Boost", deliverable: "15 Post" },
    { service: "Instagram Paid Campaign", deliverable: "30 Days" },
    { service: "Reels", deliverable: "10" },
    { service: "Google Ads Words", deliverable: "Yes" },
    { service: "SEO", deliverable: "No" },
    { service: "Google My Business", deliverable: "Yes" },
    { service: "Keyword Research", deliverable: "Yes" },
    { service: "YouTube - Ads", deliverable: "Yes" },
    { service: "WhatsApp Marketing", deliverable: "No" },
    { service: "Landing Page Design & Dev", deliverable: "Yes" }
  ];

  const socialIcons = [
    { icon: Heart, color: "text-red-500" },
    { icon: ThumbsUp, color: "text-blue-500" },
    { icon: Twitter, color: "text-sky-400" },
    { icon: Instagram, color: "text-pink-500" },
    { icon: Play, color: "text-red-600" }
  ];

  return (
    <div className="min-h-screen  flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl w-full bg-gradient-to-r rounded-3xl shadow-2xl overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[700px]">
          {/* Left Section */}
          <div className="bg-gradient-to-br from-red-500 to-red-600 p-8 lg:p-16 flex flex-col justify-center relative">
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black/10 to-transparent"></div>
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-white text-xl lg:text-2xl font-light mb-6 opacity-90">
                Driving Growth through
              </p>
              <h1 className="text-white text-4xl lg:text-6xl font-bold leading-tight mb-12 drop-shadow-lg">
                Innovative digital<br />
                <span className="text-red-100">Strategies...</span>
              </h1>

              
            </motion.div>

       
          </div>

          {/* Right Section */}
          <div className="bg-white p-6 lg:p-12 text-black">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p className="text-center text-lg font-extrabold lg:text-xl mb-8 text-red-500">
                Exclusive Social Media Packages
              </p>
          <div className="text-center mb-8">
                <span className="bg-black text-white px-8 py-4 rounded-full text-2xl lg:text-3xl font-bold inline-block">
                  DIGI SUITE
                </span>
                <span className="bg-gray-800 text-white px-6 py-2 rounded-full text-lg ml-4 inline-block">
                  180 DAYS
                </span>
              </div>
    

              {/* Services Table */}
              <div className="bg-white/10 rounded-2xl overflow-hidden backdrop-blur-sm">
                <div className="grid grid-cols-2 bg-black/30">
                  <div className="p-4 text-center font-bold text-lg">SERVICES</div>
                  <div className="p-4 text-center font-bold text-lg">DELIVERABLES</div>
                </div>
                
                <div className=" ">
                  {services.map((item, index) => (
                    <motion.div
                      key={index}
                      className={`grid grid-cols-2 border-b border-black/50 hover:bg-red-500/20 transition-all duration-200 ${
                        hoveredRow === index ? 'scale-105 bg-white/20' : ''
                      }`}
                      onMouseEnter={() => setHoveredRow(index)}
                      onMouseLeave={() => setHoveredRow(null)}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="p-3 text-sm lg:text-base">{item.service}</div>
                      <div className="p-3 text-center text-sm lg:text-base font-semibold">
                        {item.deliverable}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(239, 68, 68, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-4 px-8 rounded-full text-lg font-bold mt-8 shadow-xl hover:from-red-600 hover:to-red-700 transition-all duration-300"
              >
                Get Started Now
              </motion.button>

              <p className="text-center text-sm mt-6 opacity-80">
                Note: (*) Indicates that this services are subject to{' '}
                <span className="font-bold text-red-500">Existence!</span>
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SocialMediaPackage;