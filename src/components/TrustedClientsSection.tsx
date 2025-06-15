
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TrustedClientsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Mock client logos - in real implementation, these would be actual logo images
  const clients = [
    { name: 'TechCorp', logo: '🚀' },
    { name: 'InnovateAI', logo: '🤖' },
    { name: 'GreenEnergy', logo: '🌱' },
    { name: 'FinanceFlow', logo: '💳' },
    { name: 'HealthTech', logo: '⚕️' },
    { name: 'EduSphere', logo: '🎓' },
    { name: 'RetailMax', logo: '🛍️' },
    { name: 'FoodieHub', logo: '🍕' },
    { name: 'TravelNow', logo: '✈️' },
    { name: 'SportsPro', logo: '⚽' },
    { name: 'MusicWave', logo: '🎵' },
    { name: 'ArtSpace', logo: '🎨' }
  ];

  // Duplicate the array for seamless loop
  const duplicatedClients = [...clients, ...clients];

  return (
    <section ref={ref} className="py-24 md:py-32 bg-brandwave-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-sora mb-6">
            Our Trusted{' '}
            <span className="gradient-text">Clients</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Partnering with industry leaders to create brands that make waves
          </p>
        </motion.div>

        {/* Marquee Container */}
        <div className="relative">
          {/* Top Row - Left to Right */}
          <div className="flex overflow-hidden mb-8">
            <motion.div
              animate={{
                x: [0, -1920],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
              className="flex space-x-8 min-w-max"
            >
              {duplicatedClients.map((client, index) => (
                <motion.div
                  key={`top-${index}`}
                  whileHover={{ 
                    scale: 1.1,
                    filter: 'brightness(1.2)',
                  }}
                  className="group flex-shrink-0 w-48 h-24 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 hover:border-brandwave-red transition-all duration-300 flex items-center justify-center cursor-pointer"
                >
                  <div className="text-center">
                    <div className="text-3xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                      {client.logo}
                    </div>
                    <div className="text-sm font-semibold text-gray-300 group-hover:text-brandwave-white transition-colors duration-300">
                      {client.name}
                    </div>
                  </div>
                  
                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-brandwave-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Bottom Row - Right to Left */}
          <div className="flex overflow-hidden">
            <motion.div
              animate={{
                x: [-1920, 0],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 35,
                  ease: "linear",
                },
              }}
              className="flex space-x-8 min-w-max"
            >
              {duplicatedClients.reverse().map((client, index) => (
                <motion.div
                  key={`bottom-${index}`}
                  whileHover={{ 
                    scale: 1.1,
                    filter: 'brightness(1.2)',
                  }}
                  className="group flex-shrink-0 w-48 h-24 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 hover:border-brandwave-red transition-all duration-300 flex items-center justify-center cursor-pointer"
                >
                  <div className="text-center">
                    <div className="text-3xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                      {client.logo}
                    </div>
                    <div className="text-sm font-semibold text-gray-300 group-hover:text-brandwave-white transition-colors duration-300">
                      {client.name}
                    </div>
                  </div>
                  
                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-brandwave-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Gradient Overlays */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-brandwave-black to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-brandwave-black to-transparent z-10 pointer-events-none" />
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <div className="text-3xl font-bold text-brandwave-red font-sora">99%</div>
            <div className="text-sm text-gray-400">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-brandwave-red font-sora">150+</div>
            <div className="text-sm text-gray-400">Projects Delivered</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-brandwave-red font-sora">25+</div>
            <div className="text-sm text-gray-400">Industries Served</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-brandwave-red font-sora">8+</div>
            <div className="text-sm text-gray-400">Years Experience</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedClientsSection;
