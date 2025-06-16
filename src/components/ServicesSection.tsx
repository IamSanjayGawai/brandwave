
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const ServicesSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [expandedService, setExpandedService] = useState<number | null>(null);

  const services = [
    {
      title: 'The Spectrum',
      description: 'A holistic approach to brand transformation',
      icon: '🌈',
      subServices: [
        'Brand Strategy',
        'Brand Architecture',
        'Brand Identity Development',
        'Brand Positioning',
        'Brand Equity Management',
        'Brand Analysis',
      ],
      gradient: 'from-red-500 to-pink-600'
    },
     {
      title: 'Design',
      description: 'Creative design that captivates',
      icon: '🎨',
      subServices: [
        'Brochure(Corporate, Product)',
        'Cofee Table Book',
        'Print Advertising',
        'Hoarding and Outdoor Brading',
        'Sales and Marketing Collateral',
        'Merchandising',
        'Stationary - Letterhead, Business Cards, Envelopes',
        'Exibition Panels',

      ],
      gradient: 'from-green-500 to-teal-600'
    },
    {
      title: 'Digital',
      description: 'Digital experiences that engage',
      icon: '💻',
      subServices: [
      'Website Design & Development',
      'SEO(Search Engine Optimization)',
      'Social Media Management',
      'Search ENgine Marketing',
      'Social Media Optimization',
      'Google Ads',
      'Google Analytics',
      'Blog Management',
      ],
      gradient: 'from-blue-500 to-purple-600'
    },
   
    {
      title: '360 Media, Planning & Buying',
      description: 'Strategic media placement and optimization',
      icon: '📊',
      subServices: [
         'TVC',
        'Radio Jingles',
        'Outdoor Advertising',
        'Print Media',
        'In Store',
        'Digital',
        'BTL',
        'Events & Exhibitions',
      ],
      gradient: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <section ref={ref} className="py-24 md:py-32 bg-gradient-to-b from-gray-900 to-brandwave-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-sora mb-6">
            What We{' '}
            <span className="gradient-text">Do</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive solutions that elevate your brand across every touchpoint
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative cursor-pointer"
              onClick={() => setExpandedService(expandedService === index ? null : index)}
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-brandwave-red transition-all duration-500">
                {/* Main Service Card */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="text-5xl transform group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <motion.div
                      animate={{ rotate: expandedService === index ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-8 h-8 border-2 border-brandwave-red rounded-full flex items-center justify-center"
                    >
                      <div className="w-4 h-0.5 bg-brandwave-red" />
                      <div className="w-0.5 h-4 bg-brandwave-red absolute" />
                    </motion.div>
                  </div>

                  <h3 className="text-3xl font-bold text-brandwave-white mb-4 font-sora">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-lg">
                    {service.description}
                  </p>
                </div>

                {/* Expanded Content */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: expandedService === index ? 'auto' : 0,
                    opacity: expandedService === index ? 1 : 0
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-8 border-t border-gray-700">
                    <div className="pt-6 space-y-3">
                      {service.subServices.map((subService, subIndex) => (
                        <motion.div
                          key={subIndex}
                          initial={{ x: -20, opacity: 0 }}
                          animate={expandedService === index ? { x: 0, opacity: 1 } : {}}
                          transition={{ duration: 0.3, delay: subIndex * 0.1 }}
                          className="flex items-center space-x-3 text-gray-300 hover:text-brandwave-red transition-colors duration-200"
                        >
                          <div className="w-2 h-2 bg-brandwave-red rounded-full" />
                          <span>{subService}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Hover Gradient Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />
                
                {/* Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-brandwave-red to-pink-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
