// import { useState } from "react";
// import { motion } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const projects = [
//   {
//     title: "Meslova Systems Private Limited",
//     images: ["meslova1.jpg", "meslova2.jpg", "meslova3.jpg", "meslova4.png"],
//     description:
//       "Meslova designs, develops and delivers domain specific products and applications using Artificial Intelligence to some of the largest government and enterprise customers worldwide. All of Meslova Products and platforms are designed ground up with highest level of quality.",
//     year: "2024",
//   },
//   {
//     title: "VALUE CREED",
//     images: [
//       "VALUE CREED1.png",
//       "VALUE CREED2.png",
//       "VALUE CREED3.png",
//       "VALUE CREED4.png",
//     ],
//     description:
//       "Value Creed is at the forefront of innovation, providing cutting-edge solutions to energy markets worldwide. With a strong global presence, we combine industry expertise with a commitment to driving efficiency and growth. Explore our journey through mission, vision, and the milestones that define our success.",
//     year: "2023",
//   },
//   {
//     title: "ASSET TELEMATICS",
//     images: [
//       "ASSET TELEMATICS1.jpg",
//       "ASSET TELEMATICS2.jpg",
//       "ASSET TELEMATICS3.jpg",
//       "ASSET TELEMATICS4.jpg",
//     ],
//     description:
//       "Your reliable partner for robust, scalable and innovative software. With more than 13 years of working on IoT and web based solutions, we assure that your needs will be met. Starting off as a GPS-tracking and Fleet Management provider, we have evolved over the years to meet industry demands - MEAN stack(Angular, NodeJS, Mongodb), Java full stack, Android and iOS technologies. Our priority is forming long-standing, reliable relationships. Focus on your business’ and let us take care of the tech!",
//     year: "2024",
//   },
//   {
//     title: "AMAZON",
//     images: [
//       "projects/amazon1.jpg",
//       "projects/amazon2.jpg",
//       "projects/amazon3.jpg",
//     ],
//     description:
//       "Amazon is an American multinational technology company which focuses on e-commerce, cloud computing, and digital streaming. It has been referred to as <strong> one of the most influential economic and cultural forces in the world<strong>, and is one of the world's most valuable brands.",
//     year: "2025",
//   },
// ];

// // Sample client logos (Replace with real ones)
// const clientLogos = [
//   "/client-logos/client1.jpg",
//   "/client-logos/client2.png",
//   "/client-logos/client3.jpg",
//   "/client-logos/client4.png",
//   "/client-logos/client5.png",
//   "/client-logos/client6.jpg",
//   "/client-logos/client7.png",
//   "/client-logos/client8.png",
// ];

// export default function Projects() {
//   return (
//     <div className="pt-16 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h1 className="text-4xl font-bold text-navy-900 mb-4">
//             Our Projects
//           </h1>
//           <p className="text-white-600 max-w-2xl mx-auto mb-8">
//             Explore our latest projects showcasing innovation and excellence.
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-1 lg:grid-cols-4 gap-8">
//           {projects.map((project, index) => (
//             <ProjectCard key={index} project={project} />
//           ))}
//         </div>
//       </div>

//       {/* Client Logos Section */}
//       <div className="py-12 mt-12">
//         <h2 className="text-center text-3xl font-bold text-gray-800 mb-6">
//           Designed for Success
//         </h2>

//         <div className="relative overflow-hidden">
//           <motion.div
//             className="flex space-x-16"
//             initial={{ x: "100%" }}
//             animate={{ x: "-100%" }}
//             transition={{
//               ease: "linear",
//               duration: 15,
//               repeat: Infinity,
//             }}
//           >
//             {[...clientLogos, ...clientLogos].map((logo, index) => (
//               <img
//                 key={index}
//                 src={logo}
//                 alt={`Client ${index + 1}`}
//                 className="h-16 object-contain mb-10"
//               />
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function ProjectCard({ project }: any) {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevSlide = () =>
//     setCurrentIndex((prev) =>
//       prev === 0 ? project.images.length - 1 : prev - 1
//     );
//   const nextSlide = () =>
//     setCurrentIndex((prev) =>
//       prev === project.images.length - 1 ? 0 : prev + 1
//     );

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="group relative overflow-hidden rounded-lg shadow-lg bg-white"
//     >
//       <div className="relative h-64 overflow-hidden">
//         <img
//           src={project.images[currentIndex]}
//           alt={project.title}
//           className="w-full h-full object-cover transition-transform duration-300"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//       </div>
//       <div className="absolute inset-y-0 left-0 flex items-center pl-3">
//         <button
//           onClick={prevSlide}
//           className="bg-gray-700/60 p-2 rounded-full text-white"
//         >
//           <ChevronLeft size={20} />
//         </button>
//       </div>
//       <div className="absolute inset-y-0 right-0 flex items-center pr-3">
//         <button
//           onClick={nextSlide}
//           className="bg-gray-700/60 p-2 rounded-full text-white"
//         >
//           <ChevronRight size={20} />
//         </button>
//       </div>
//       <div className="p-6">
//         <h3 className="text-xl font-bold text-navy-900 mb-2">
//           {project.title}
//         </h3>
//         <span className="text-sm text-gray-500 mb-3 block">{project.year}</span>
//         <p className="text-gray-600">{project.description}</p>
//       </div>
//     </motion.div>
//   );
// }
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "MESLOVA SYSTEMS PRIVATE LIMITED",
    images: ["meslova1.jpg", "meslova2.jpg", "meslova3.jpg", "meslova4.png"],
    description:
      "Meslova designs, develops and delivers domain specific products and applications using Artificial Intelligence to some of the largest government and enterprise customers worldwide. All of Meslova Products and platforms are designed ground up with highest level of quality.",
    year: "2024",
  },
  {
    title: "VALUE CREED",
    images: [
      "VALUE CREED1.png",
      "VALUE CREED2.png",
      "VALUE CREED3.png",
      "VALUE CREED4.png",
    ],
    description:
      "Value Creed is at the forefront of innovation, providing cutting-edge solutions to energy markets worldwide. With a strong global presence, we combine industry expertise with a commitment to driving efficiency and growth. Explore our journey through mission, vision, and the milestones that define our success.",
    year: "2023",
  },
  {
    title: "ASSET TELEMATICS",
    images: [
      "ASSET TELEMATICS1.jpg",
      "ASSET TELEMATICS2.jpg",
      "ASSET TELEMATICS3.jpg",
      "ASSET TELEMATICS4.jpg",
    ],
    description:
      "Your reliable partner for robust, scalable and innovative software. With more than 13 years of working on IoT and web based solutions, we assure that your needs will be met. Starting off as a GPS-tracking and Fleet Management provider, we have evolved over the years to meet industry demands - MEAN stack(Angular, NodeJS, Mongodb), Java full stack, Android and iOS technologies. Our priority is forming long-standing, reliable relationships. Focus on your business’ and let us take care of the tech!",
    year: "2024",
  },
  {
    title: "AMAZON",
    images: [
      "projects/amazon1.jpg",
      "projects/amazon2.jpg",
      "projects/amazon3.jpg",
    ],
    description:
      "Amazon is an American multinational technology company which focuses on e-commerce, cloud computing, and digital streaming. It has been referred to as one of the most influential economic and cultural forces in the world, and is one of the world's most valuable brands.",
    year: "2025",
  },
];

const clientLogos = [
  { src: "/client-logos/client1.jpg", size: "h-12" },
  { src: "/client-logos/client2.png", size: "h-12" },
  { src: "/client-logos/client3.jpg", size: "h-20" }, // Increased size
  { src: "/client-logos/client4.png", size: "h-10" },
  { src: "/client-logos/client5.png", size: "h-40" },
  // { src: "/client-logos/client6.jpg", size: "h-50" },
  { src: "/client-logos/client7.png", size: "h-20" },
  { src: "/client-logos/client8.png", size: "h-12" },
];

export default function Projects() {
  return (
    <div className="min-h-screen  bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-navy-900 ">
            Our Projects
          </h1>
          <p className="mt-4 text-lg md:text-xl text-black-600 max-w-3xl mx-auto">
            Discover our innovative projects that redefine excellence and push
            the boundaries of technology.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 ">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>

      {/* Client Logos Section */}
      <div className="py-12 mt-12 bg-white">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-6">
          Designed for Success
        </h2>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex space-x-20 items-center" // Increased space between logos
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{
              ease: "linear",
              duration: 15,
              repeat: Infinity,
            }}
          >
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt={`Client ${index + 1}`}
                className={`object-contain mb-10 ${logo.size}`}
                style={{ maxHeight: "120px", width: "auto" }} // Increased max height
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }: any) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const prevSlide = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  const nextSlide = () =>
    setCurrentIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.03 }}
      className="relative group overflow-hidden rounded-xl shadow-2xl bg-white/10 backdrop-blur-lg border border-white/20"
    >
      {/* Image Carousel */}
      <div className="relative h-72 overflow-hidden">
        <motion.img
          key={currentIndex}
          src={project.images[currentIndex]}
          alt={project.title}
          className="w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 group-hover:from-black/50 transition-all duration-300" />
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 p-2 rounded-full text-white hover:bg-white/40 transition-all duration-300"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 p-2 rounded-full text-white hover:bg-white/40 transition-all duration-300"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-black mb-2 group-hover:text-black transition-colors duration-300">
          {project.title}
        </h3>
        {/* <span className="text-sm text-black mb-3 block">{project.year}</span> */}
        <p className="text-black text-sm leading-relaxed">
          {showFullDescription
            ? project.description
            : `${project.description.substring(0, 100)}...`}
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowFullDescription(!showFullDescription)}
          className="mt-4 inline-block text-black font-semibold hover:text-black transition-colors duration-300"
        >
          {showFullDescription ? "Show Less" : "Learn More"}
        </motion.button>
      </div>
    </motion.div>
  );
}
