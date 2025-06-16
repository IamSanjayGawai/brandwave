
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WhoWeAreSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const teamMembers = [
    {
      name: 'Listens to Your Needs',
      description: 'We hear you, we understand you',
      icon: '👂'
    },
    {
      name: 'Understands  Vision',
      description: 'We see your dreams clearly',
      icon: '👁️'
    },
    {
      name: 'Reaseacrh for You',
      description: 'We dig deep to find the best solutions',
      icon: '🔎'

    },
    {
      name: 'Think Creative Ideas',
      description: 'We innovate to bring your brand to life',
      icon: '💡'
    },
        {
      name: 'Implements Your Ideas',
      description: 'We turn your concepts into reality',
      icon: '🔧'
    },
        {
      name: 'Bussiness Growth',
      description: 'We identify and seize growth opportunities',
      icon: '📈'
    },
        {
      name: 'Timely Delievery',
      description: 'We respect your time and deliver on schedule',
      icon: '⏰'
    },
        {
      name: 'Helps You Stand Out',
      description: 'We make your brand unforgettable',
      icon: '🌟'
    }
  ];

  return (
    <section ref={ref} className="py-24 md:py-32 bg-brandwave-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #FF2C2C 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-6xl font-bold font-sora mb-6">
                We Are{' '}
                <span className="gradient-text">BrandWave</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                A collective of creative minds, strategic thinkers, and digital artisans united by our passion for transforming brands into cultural phenomena.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                We don't just create brands—we craft movements. Every pixel, every word, every interaction is designed to make waves in your industry.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center space-x-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-brandwave-red font-sora">150+</div>
                <div className="text-sm text-gray-400">Brands Transformed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brandwave-red font-sora">15+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brandwave-red font-sora">25+</div>
                <div className="text-sm text-gray-400">Awards Won</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Team Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  z: 50
                }}
                className="group relative perspective-1000"
              >
                <div className="relative p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 hover:border-brandwave-red transition-all duration-500 transform-gpu">
                  {/* Icon */}
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {member.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-brandwave-white mb-2 font-sora">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {member.description}
                  </p>

                  {/* Magnetic Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-brandwave-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                  
                  {/* Glow Effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-brandwave-red to-pink-600 rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-500" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
