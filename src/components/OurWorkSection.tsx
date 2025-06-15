
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const OurWorkSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'TechFlow Revolution',
      category: 'Digital Transformation',
      description: 'Complete brand overhaul for a fintech startup, including logo design, web platform, and mobile app interface.',
      tags: ['Branding', 'UI/UX', 'Development'],
    
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 2,
      title: 'EcoGreen Campaign',
      category: 'Sustainability Brand',
      description: 'Environmental awareness campaign with immersive storytelling and interactive digital experiences.',
      tags: ['Campaign', '360 Media', 'Interactive'],
      color: 'from-green-500 to-teal-600'
    },
    {
      id: 3,
      title: 'Luxury Retail Experience',
      category: 'Premium Fashion',
      description: 'High-end fashion brand identity with sophisticated visual systems and e-commerce platform.',
      tags: ['Luxury', 'E-commerce', 'Fashion'],
      color: 'from-pink-500 to-rose-600'
    },
    {
      id: 4,
      title: 'Food Delivery Platform',
      category: 'Mobile App Design',
      description: 'User-centered design for a food delivery app with seamless ordering experience and real-time tracking.',
      tags: ['Mobile', 'UX', 'Food Tech'],
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 5,
      title: 'Corporate Rebranding',
      category: 'B2B Enterprise',
      description: 'Complete visual identity transformation for a multinational corporation with global presence.',
      tags: ['Corporate', 'Global', 'Strategy'],
      color: 'from-gray-600 to-gray-800'
    },
    {
      id: 6,
      title: 'Creative Agency Portfolio',
      category: 'Creative Showcase',
      description: 'Portfolio website with stunning animations and interactive case studies for a creative agency.',
      tags: ['Portfolio', 'Animation', 'Creative'],
      color: 'from-purple-500 to-indigo-600'
    }
  ];

  return (
    <section ref={ref} className="py-24 md:py-32 bg-gradient-to-b from-brandwave-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-sora mb-6">
            Our{' '}
            <span className="gradient-text">Work</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transforming brands through strategic design and innovative digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative cursor-pointer"
              onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-brandwave-red transition-all duration-500 h-96">
                {/* Project Image/Icon */}
                <div className={`absolute inset-x-0 top-0 h-60 bg-gradient-to-r ${project.color} flex items-center justify-center`}>
                  <div className="text-6xl transform group-hover:scale-110 transition-transform duration-500">
                    {project.image}
                  </div>
                  
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-brandwave-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="w-16 h-16 bg-brandwave-red rounded-full flex items-center justify-center"
                    >
                      <span className="text-white font-bold">VIEW</span>
                    </motion.div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gray-900 to-transparent">
                  <div className="space-y-3">
                    <div className="text-sm text-brandwave-red font-semibold">
                      {project.category}
                    </div>
                    <h3 className="text-xl font-bold text-brandwave-white font-sora">
                      {project.title}
                    </h3>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap space-x-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-brandwave-red to-pink-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500" />
              </div>

              {/* Expanded Description */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: selectedProject === project.id ? 'auto' : 0,
                  opacity: selectedProject === project.id ? 1 : 0
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden mt-4"
              >
                <div className="p-6 bg-gray-800 rounded-xl border border-gray-700">
                  <p className="text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 px-6 py-2 bg-brandwave-red text-white rounded-full text-sm font-semibold hover:bg-red-600 transition-colors duration-200"
                  >
                    View Case Study
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          <p className="text-lg text-gray-300 mb-8">
            Ready to see your brand transform?
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px #FF2C2C" }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 bg-brandwave-red text-brandwave-white font-semibold text-lg rounded-full transition-all duration-300 hover:bg-red-600"
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default OurWorkSection;
