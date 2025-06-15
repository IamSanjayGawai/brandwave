
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const waveVariants = {
    animate: {
      x: ['-100%', '100%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop" as const,
          duration: 3,
          ease: "easeInOut",
        },
      },
    },
  };

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden wave-bg">
      {/* Animated Wave Background */}
      <div className="absolute inset-0">
        <motion.div
          variants={waveVariants}
          animate="animate"
          className="absolute top-0 left-0 w-full h-full opacity-10"
        >
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-[200%] h-full">
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              fill="#FF2C2C"
              fillOpacity="0.3"
            ></path>
          </svg>
        </motion.div>
        <motion.div
          variants={waveVariants}
          animate="animate"
          style={{ animationDelay: '1s' }}
          className="absolute top-1/4 left-0 w-full h-full opacity-5"
        >
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-[200%] h-full">
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              fill="#FFFFFF"
              fillOpacity="0.1"
            ></path>
          </svg>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-12 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-sora leading-tight"
          >
            Riding the Wave of{' '}
            <span className="gradient-text">Creative Brilliance</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto"
          >
            Designing impact, delivering influence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="pt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px #FF2C2C" }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-12 py-4 bg-brandwave-red text-brandwave-white font-semibold text-lg rounded-full overflow-hidden transition-all duration-300 hover:bg-opacity-90"
            >
              <span className="relative z-10">Explore Our Work</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-brandwave-red to-red-600"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-brandwave-white opacity-60"
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
