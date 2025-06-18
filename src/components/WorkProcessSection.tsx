import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useRef } from 'react';

const WorkProcessSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const { ref: inViewRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  // Advanced scroll-based transforms
  const timelineScale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 1]);
  const timelineOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.3]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const titleY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.1, 0.3], [0, 1, 0.8]);

  const steps = [
    {
      number: '01',
      title: 'Brief Objective',
      description: 'Understanding your vision and goals',
      icon: '🎯'
    },
    {
      number: '02',
      title: 'Target Market',
      description: 'Identifying your ideal audience',
      icon: '👥'
    },
    {
      number: '03',
      title: 'Competition Analysis',
      description: 'Analyzing market landscape',
      icon: '🔍'
    },
    {
      number: '04',
      title: 'Brand Strategy',
      description: 'Crafting your unique positioning',
      icon: '💡'
    },
    {
      number: '05',
      title: 'Creative Expression',
      description: 'Bringing ideas to visual life',
      icon: '🎨'
    },
    {
      number: '06',
      title: 'Media Planning',
      description: 'Strategic channel selection',
      icon: '📱'
    },
    {
      number: '07',
      title: 'Implementation & Analysis',
      description: 'Launch and optimize campaigns',
      icon: '📊'
    }
  ];

  const StepCard = ({ step, index, isLeft }) => {
    const cardRef = useRef(null);
    const { scrollYProgress: cardProgress } = useScroll({
      target: cardRef,
      offset: ["start end", "end start"]
    });

    const cardX = useTransform(
      cardProgress, 
      [0, 0.3, 0.7, 1], 
      isLeft ? [-100, 0, 0, -50] : [100, 0, 0, 50]
    );
    const cardY = useTransform(cardProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -30]);
    const cardOpacity = useTransform(cardProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.7]);
    const cardRotate = useTransform(cardProgress, [0, 0.3, 0.7, 1], [5, 0, 0, -2]);
    const cardScale = useTransform(cardProgress, [0, 0.3, 0.5, 0.7, 1], [0.8, 1, 1.02, 1, 0.95]);

    // Individual dot animation
    const dotScale = useTransform(cardProgress, [0.2, 0.4, 0.6, 0.8], [0, 1.2, 1, 1]);
    const dotGlow = useTransform(cardProgress, [0.2, 0.5, 0.8], [0, 20, 10]);

    return (
      <motion.div
        ref={cardRef}
        style={{ 
          x: cardX, 
          y: cardY, 
          opacity: cardOpacity,
          rotate: cardRotate,
          scale: cardScale
        }}
        className={`flex items-center ${
          isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
        }`}
      >
        {/* Step Card */}
        <motion.div
          whileHover={{ 
            scale: 1.05, 
            y: -10,
            rotateY: isLeft ? 5 : -5,
            transition: { duration: 0.3 }
          }}
          whileTap={{ scale: 0.98 }}
          className={`relative group w-full md:w-5/12 ${
            isLeft ? 'md:pr-12' : 'md:pl-12'
          }`}
        >
          <motion.div 
            className="relative p-8 bg-gradient-to-br from-gray-800 via-gray-850 to-gray-900 rounded-2xl border border-gray-700 hover:border-red-500 transition-all duration-500 shadow-2xl hover:shadow-red-500/30 overflow-hidden"
            whileHover={{
              boxShadow: "0 25px 50px -12px rgba(239, 68, 68, 0.25)",
              borderColor: "rgb(239, 68, 68)"
            }}
          >
            {/* Animated Background Pattern */}
            <motion.div
              className="absolute inset-0 opacity-5"
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              style={{
                backgroundImage: "linear-gradient(45deg, #ef4444 25%, transparent 25%, transparent 75%, #ef4444 75%, #ef4444)",
                backgroundSize: "20px 20px"
              }}
            />

            {/* Icon with scroll animation */}
            <motion.div 
              className="text-6xl mb-4"
              whileHover={{ 
                scale: 1.2, 
                rotate: 360,
                transition: { duration: 0.5 }
              }}
              style={{
                filter: `drop-shadow(0 0 ${useTransform(cardProgress, [0.2, 0.5], [0, 10])}px rgba(239, 68, 68, 0.8))`
              }}
            >
              {step.icon}
            </motion.div>
            
            {/* Number with advanced animation */}
            <motion.div 
              className="text-6xl md:text-8xl font-bold text-red-500 opacity- mb-4 font-mono"
              whileHover={{ opacity: 1, scale: 1.1 }}
              animate={{
                textShadow: [
                  "0 0 0px rgba(239, 68, 68, 0)",
                  "0 0 20px rgba(239, 68, 68, 0.3)",
                  "0 0 0px rgba(239, 68, 68, 0)"
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.5
              }}
            >
              {step.number}
            </motion.div>
            
            {/* Title */}
            <motion.h3 
              className="text-xl md:text-2xl font-bold text-white mb-2"
              whileHover={{ color: "#ef4444" }}
            >
              {step.title}
            </motion.h3>

            {/* Description */}
            <motion.p 
              className="text-gray-300 text-sm md:text-base"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              {step.description}
            </motion.p>
            
            {/* Hover Effect */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-red-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
              whileHover={{
                background: "linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(239, 68, 68, 0.05) 50%, transparent 100%)"
              }}
            />
            
            {/* Connection Line with pulse animation */}
            <motion.div 
              className={`hidden md:block absolute top-1/2 ${
                isLeft ? '-right-6' : '-left-6'
              } w-12 h-0.5 bg-gradient-to-r ${
                isLeft ? 'from-red-500 to-transparent' : 'from-transparent to-red-500'
              } transform -translate-y-1/2`}
              animate={{
                opacity: [0.5, 1, 0.5],
                scaleX: [1, 1.1, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.3
              }}
            />

            {/* Progress indicator */}
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-red-500 to-red-400 rounded-full"
              style={{
                width: useTransform(cardProgress, [0.2, 0.8], ["0%", "100%"])
              }}
            />
          </motion.div>
        </motion.div>

        {/* Timeline Dot with advanced animations */}
        <motion.div
          style={{ 
            scale: dotScale,
            filter: `drop-shadow(0 0 ${dotGlow}px rgba(239, 68, 68, 0.8))`
          }}
          className="absolute left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div
            className="w-6 h-6 bg-red-500 rounded-full border-4 border-gray-900 shadow-lg relative"
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(239, 68, 68, 0.7)",
                "0 0 0 10px rgba(239, 68, 68, 0)",
                "0 0 0 0 rgba(239, 68, 68, 0)"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.5
            }}
          >
            {/* Inner pulse */}
            <motion.div
              className="absolute inset-1 bg-white rounded-full"
              animate={{
                scale: [0, 1, 0],
                opacity: [1, 0.5, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.3
              }}
            />
          </motion.div>
        </motion.div>

        {/* Empty space for the other side */}
        <div className="hidden md:block w-5/12" />
      </motion.div>
    );
  };

  return (
    <section 
      ref={sectionRef}
      className="py-24 md:py-32 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-400 rounded-full blur-3xl" />
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10" ref={inViewRef}>
        <motion.div
          style={{ y: titleY, opacity: titleOpacity }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-6"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{
              duration: 5,
              repeat: Infinity
            }}
          >
            How We Create{' '}
            <motion.span 
              className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent"
              style={{
                backgroundSize: "200% 200%"
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 3,
                repeat: Infinity
              }}
            >
              Waves
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Our proven process transforms brands through strategic thinking and creative excellence
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Advanced Center Timeline */}
          <motion.div
            style={{ 
              scaleY: timelineScale, 
              opacity: timelineOpacity 
            }}
            className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 via-red-400 to-red-500 transform -translate-x-1/2 origin-top shadow-lg shadow-red-500/50"
          />

          {/* Flowing particles along timeline */}
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2"
            animate={{
              y: ["0%", "100%", "0%"]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-red-400 rounded-full absolute left-1/2 transform -translate-x-1/2 shadow-lg shadow-red-400/50"
                style={{
                  top: `${i * 33}%`
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.7
                }}
              />
            ))}
          </motion.div>

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => (
              <StepCard
                key={index}
                step={step}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>

          {/* Enhanced Decorative Elements */}
          <motion.div
            style={{ 
              scale: useTransform(scrollYProgress, [0, 0.2], [0, 1]),
              rotate: useTransform(scrollYProgress, [0, 1], [0, 360])
            }}
            className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-3"
          >
            <div className="w-8 h-8 bg-red-500 rounded-full shadow-lg shadow-red-500/50 relative">
              <motion.div
                className="absolute inset-0 border-2 border-red-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
              />
            </div>
          </motion.div>
          
          <motion.div
            style={{ 
              scale: useTransform(scrollYProgress, [0.8, 1], [0, 1]),
              rotate: useTransform(scrollYProgress, [0, 1], [0, -360])
            }}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-3"
          >
            <div className="w-8 h-8 bg-red-500 rounded-full shadow-lg shadow-red-500/50 relative">
              <motion.div
                className="absolute inset-0 border-2 border-red-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.5
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcessSection;