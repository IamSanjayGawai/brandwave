
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TrustedClientsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Mock client logos - in real implementation, these would be actual logo images
  const clients = [
    { name: 'TechCorp', logo: '/clients/1.png' },
    { name: 'InnovateAI', logo: '/clients/2.png' },
    { name: 'GreenEnergy', logo: '/clients/3.png' },
    { name: 'FinanceFlow', logo: '/clients/4.png' },
    { name: 'HealthTech', logo: '/clients/5.png' },
    { name: 'EduSphere', logo: '/clients/6.png' },
    { name: 'RetailMax', logo: '/clients/7.png' },
    { name: 'FoodieHub', logo: '/clients/8.png' },
    { name: 'TravelNow', logo: '/clients/9.png' },
    { name: 'SportsPro', logo: '/clients/10.png' },
    { name: 'MusicWave', logo: '/clients/11.png' },
    { name: 'ArtSpace', logo: '/clients/12.png' },
    { name: 'MediaWorks', logo: '/clients/13.png' },
    { name: 'AutoDrive', logo: '/clients/14.png' },
    { name: 'RealEstateX', logo: '/clients/15.png' },
    { name: 'FashionTrend', logo: '/clients/16.png' },
    { name: 'GamingHub', logo: '/clients/17.png' },
    { name: 'CryptoWorld', logo: '/clients/18.png' },
    { name: 'LogisticsPro', logo: '/clients/19.png' },
    { name: 'ConstructionCo', logo: '/clients/20.png' },
    { name: 'TelecomConnect', logo: '/clients/21.png' },
    { name: 'LegalWise', logo: '/clients/22.png' },
    { name: 'ConsultingGroup', logo: '/clients/23.png' },
    { name: 'NonProfitOrg', logo: '/clients/24.png' },
    { name: 'GovernmentAgency', logo: '/clients/25.png' },
    { name: 'HospitalityChain', logo: '/clients/26.png' },
    { name: 'E-commerceHub', logo: '/clients/27.png' },
    { name: 'BlockchainTech', logo: '/clients/28.png' },
    { name: 'CyberSecurity', logo: '/clients/29.png' },
    { name: 'AI Innovations', logo: '/clients/30.png' }
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
          <h2 className="text-4xl md:text-6xl font-bold font-sora mb-6 ">
            Our {' '}
            <span className="gradient-text mr-2">Clients</span>
            Family
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
                  className="group flex-shrink-0 w-32 h-24 md:w-40 md:h-32 lg:w-48 lg:h-36 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 hover:border-brandwave-red transition-all duration-300 flex items-center justify-center cursor-pointer"
                >
                  <div className="text-center">
                    {/* <div className="text-3xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                      {client.logo}
                    </div>
                    <div className="text-sm font-semibold text-gray-300 group-hover:text-brandwave-white transition-colors duration-300">
                      {client.name}
                    </div> */}
                    <img src={client.logo} alt={client.name} className="w-full h-full mb-2 transform group-hover:scale-110 transition-transform duration-300" />
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
                  className="group flex-shrink-0 w-32 h-24 md:w-40 md:h-32 lg:w-48 lg:h-36 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 hover:border-brandwave-red transition-all duration-300 flex items-center justify-center cursor-pointer"
                >
                  <div className="text-center">
                    {/* <div className="text-3xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                      {client.logo}
                    </div>
                    <div className="text-sm font-semibold text-gray-300 group-hover:text-brandwave-white transition-colors duration-300">
                      {client.name}
                    </div> */}

                      <img src={client.logo} alt={client.name} className="w-full h-full mb-2 transform group-hover:scale-110 transition-transform duration-300" />
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
            <div className="text-3xl font-bold text-brandwave-red font-sora">15+</div>
            <div className="text-sm text-gray-400">Years Experience</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedClientsSection;
