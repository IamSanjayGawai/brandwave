import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const OurWorkSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Brouchure Design",
      category: "Company Name",
      tags: ["Design"],
      image: "/work/brochure-des1.png",
    },
    {
      id: 2,
      title: "Brouchure Design",
      category: "Company Name",
      tags: ["Design"],
      image: "/work/brochure-des2.png",
    },
    {
      id: 3,
      title: "Brouchure Design",
      category: "Company Name",
      tags: ["Design"],
      image: "/work/brochure-des3.png",
    },
    {
      id: 4,
      title: "Brouchure Design",
      category: "Company Name",
      tags: ["Design"],
      image: "/work/brochure-des4.png",
    },
    {
      id: 5,
      title: "Brouchure Design",
      category: "Company Name",
      tags: ["Design"],
      image: "/work/brochure-des5.png",
    },
    {
      id: 6,
      title: "Corporate Stationery",
      category: "Company Name",
      tags: ["Design"],
      image: "/work/coparate-sta1.png",
    },
    {
      id: 7,
      title: "Corporate Stationery",
      category: "Company Name",
      tags: ["Design"],
      image: "/work/coparate-sta2.png",
    },
    {
      id: 8,
      title: "Corporate Stationery",
      category: "Company Name",
      tags: ["Design"],
      image: "/work/coparate-sta3.png",
    },
    {
      id: 9,
      title: "Hoarding Design",
      category: "Company Name",
      tags: ["Design"],
      image: "/work/hoarding-des1.png",
    },
    {
      id: 10,
      title: "Hoarding Design",
      category: "Company Name",
      tags: ["Design"],
      image: "/work/hoarding-des2.png",
    },
    {
      id: 11,
      title: "Hoarding Design",
      category: "Company Name",
      tags: ["Design"],
      image: "/work/hoarding-des3.png",
    },
    {
      id: 12,
      title: "Hoarding Design",
      category: "Company Name",
      tags: ["Design"],
      image: "/work/hoarding-des4.png",
    },
    {
      id: 13,
      title: "Hoarding Design",
      category: "Company Name",
      tags: ["Design"],
      image: "/work/hoarding-des5.png",
    },
    {
      id: 14,
      title: "Hoarding Design",
      category: "Company Name",
      tags: ["Design"],
      image: "/work/hoarding-des6.png",
    },
    {
      id: 15,
      title: "Hoarding Design",
      category: "Company Name",
      tags: ["Design"],
      image: "/work/hoarding-des7.png",
    },
    {
      id: 16,
      title: "Hoarding Design",
      category: "Company Name",
      tags: ["Design"],
      image: "/work/hoarding-des8.png",
    },
    {
      id: 17,
      title: "Hoarding Design",
      category: "Company Name",
      tags: ["Design"],
      image: "/work/hoarding-des9.png",
    },
    {
      id: 18,
      title: "Hoarding Design",
      category: "Company Name",
      tags: ["Design"],
      image: "/work/hoarding-des10.png",
    },
    {
      id: 19,
      title: "Digital Marketing",
      category: "Company Name",
      tags: ["Digital"],
      image: "/work/digitalmark1.png",
    },
    {
      id: 20,
      title: "Digital Marketing",
      category: "Company Name",
      tags: ["Digital"],
      image: "/work/digitalmark2.png",
    },
    {
      id: 21,
      title: "Product Packaging",
      category: "Company Name",
      tags: ["Packaging"],
      image: "/work/prodpack1.png",
    },
    {
      id: 22,
      title: "Product Packaging",
      category: "Company Name",
      tags: ["Packaging"],
      image: "/work/prodpack2.png",
    },
    {
      id: 23,
      title: "Product Packaging",
      category: "Company Name",
      tags: ["Packaging"],
      image: "/work/prodpack3.png",
    },
    {
      id: 24,
      title: "Product Packaging",
      category: "Company Name",
      tags: ["Packaging"],
      image: "/work/prodpack4.png",
    },
    {
      id: 25,
      title: "Product Packaging",
      category: "Company Name",
      tags: ["Packaging"],
      image: "/work/prodpack5.png",
    },
    {
      id: 26,
      title: "Product Packaging",
      category: "Company Name",
      tags: ["Packaging"],
      image: "/work/prodpack6.png",
    },
    {
      id: 27,
      title: "Office Branding",
      category: "Company Name",
      tags: ["Branding"],
      image: "/work/office-brand1.png",
    },
    {
      id: 28,
      title: "Office Branding",
      category: "Company Name",
      tags: "Branding",
      image: "/work/office-brand2.png",
    },
    {
      id: 29,
      title: "Website Development",
      category: "Health Tech",
      tags: ["Development", "Web Design", "Tech"],
      image: "/work/websec.png",
    },
    {
      id: 30,
      title: "Website Development",
      category: "Health Tech",
      tags: ["Development", "Web Design", "Tech"],
      image: "/work/websec2.png",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
   
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Our
            <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent mx-2">
              Creative
            </span>
            Bank
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transforming brands through strategic design and innovative digital
            experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
      
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative cursor-pointer"
              onClick={() =>
                setSelectedProject(
                  selectedProject === project.id ? null : project.id
                )
              }
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-gray-500 transition-all duration-500 h-96">
                {/* Project Image */}
                <div className="absolute inset-x-0 top-0 w-full h-70 bg-gradient-to-r from-gray-700 to-gray-600 flex items-center justify-center overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback if image fails to load
                      e.currentTarget.style.display = "none";
                      e.currentTarget.parentElement.innerHTML = `
                        <div class="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                          ${project.title.charAt(0)}
                        </div>
                      `;
                    }}
                  />
                </div>

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                  >
                    <span className="text-white font-bold text-sm">VIEW</span>
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gray-900 to-transparent">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {Array.isArray(project.tags)
                        ? project.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded-full"
                            >
                              {tag}
                            </span>
                          ))
                        : <span className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded-full">
                            {project.tags}
                          </span>
                      }
                    </div>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-white to-gray-300 rounded-2xl opacity-0 group-hover:opacity-10 transition duration-500" />
              </div>
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
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px #EF4444" }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 bg-red-500 text-white font-semibold text-lg rounded-full transition-all duration-300 hover:bg-red-600"
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default OurWorkSection;
