import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Paintbrush, Lightbulb, Target, ArrowRight } from "lucide-react";
import { CheckCircle } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Marquee from "react-fast-marquee";
import "swiper/css";
import "swiper/css/effect-fade";

export default function Services() {
  // const [showPopup, setShowPopup] = useState(false);

  const services = [
    {
      icon: <Paintbrush className="w-10 h-10 text-white" />,
      title: "Interior Design",
      description:
        "Transform your space into a beautiful, functional environment.",
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-white" />,
      title: "MEP Development",
      description: "Rapid prototyping and validation of design concepts.",
    },
    {
      icon: <Target className="w-10 h-10 text-white" />,
      title: "Planning & Execution",
      description: "Comprehensive project management from start to finish.",
    },
  ];

  const data = [
    {
      imgSrc: "/home/Hani1.jpeg",
      title: "Modern Interiors",
      description: "Transforming spaces with elegant and modern designs.",
    },
    {
      imgSrc: "/home/Hani2.jpeg",
      title: "Luxury Living",
      description: "Exclusive designs for premium living experiences.",
    },
    {
      imgSrc: "/home/Hani3.jpeg",
      title: "Office Spaces",
      description: "Enhancing productivity with stylish office interiors.",
    },
    {
      imgSrc: "/home/Hani4.jpeg",
      title: "Custom Designs",
      description: "Tailor-made interiors to match your vision and style.",
    },
  ];

  const whyChooseUs = [
    "Years of industry experience",
    "Innovative and client-focused approach",
    "High-quality materials and workmanship",
    "On-time project delivery",
    "Sustainable and eco-friendly solutions",
    "Customer satisfaction is our priority",
  ];

  const images = ["/home4.jpg", "/home1.jpg", "/home2.jpg", "/home3.jpg"];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* BuildingAnimation / */}
      <section>
        <div className="relative h-screen w-full overflow-hidden">
          {/* Background Image Carousel */}
          <Swiper
            modules={[Autoplay, EffectFade]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            effect="fade"
            loop
            className="absolute inset-0 w-full h-full"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                {index === 0 ? (
                  <motion.img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 2 }}
                  />
                ) : (
                  <img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Overlay for Better Readability */}
          <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

          {/* Content */}
          <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
            {/* Marquee Text */}
            <Marquee
              speed={50}
              gradient={false}
              className="text-medium md:text-1xl  mb-16 text-[#fbd8b6] uppercase tracking-wide>
              Transforming Spaces uppercase tracking-wide"
              style={{
                fontFamily: "'Space Mono', monospace",
                letterSpacing: "0.3em",
                marginTop: "-100px",
              }}
            >
              D&N CRAFT{" "}
              <span className="mx-6 border-l-2 border-[#fbd8b6] h-full"></span>
              Transforming Spaces{" "}
              <span className="mx-6 border-l-2 border-[#fbd8b6] h-full"></span>
              Inspired Interiors
            </Marquee>

            {/* Logo */}
            <motion.img
              src="/logomain.png"
              alt="D&N Craft"
              className="mx-auto mb-6 h-32 md:h-40 w-auto md:ml-26"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            />

            {/* Heading */}
            <h1 className="text-5xl md:text-5xl font-bold mb-4 text-[#fbd8b6]">
              TRANSFORMING SPACES
            </h1>

            {/* Subtext */}
            <p
              className="text-medium md:text-1xl mb-12 text-[#fbd8b6]"
              style={{
                fontFamily: "'Space Mono', monospace",
                letterSpacing: "0.3em",
              }}
            >
              INNOVATIVE INTERIORS FOR INSPIRED WORKPLACES
            </p>

            {/* Button */}
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[#fbd8b6] text-[#2a2a2a] rounded-md font-light hover:bg-[#e4c49a] transition"
              >
                Get Started
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive design solutions tailored to your needs.
            </p>
          </motion.div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="p-6 rounded-lg bg-white shadow-lg hover:shadow-2xl transition-all duration-300 
                 hover:bg-[#001f3f] group"
              >
                {/* Icon Container */}
                <div
                  className="flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 
                      transition-all duration-300"
                >
                  <span className="text-white transition-all duration-300 group-hover:text-[#001f3f]">
                    {service.icon}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-semibold text-gray-900 mb-2 text-center 
                     transition-all duration-300 group-hover:text-white"
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-center transition-all duration-300 group-hover:text-white">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <div className="mt-4 text-center">
                  <Link
                    to="/services"
                    className="inline-flex items-center text-blue-600 font-medium transition-transform hover:translate-x-1 
                     group-hover:text-white"
                  >
                    Learn More{" "}
                    <ArrowRight className="ml-2 w-4 h-4 transition-all duration-300 group-hover:text-white" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Video Section After Services */}
      <section className="relative w-full h-[70vh] overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/hanividfinal.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Animated Overlay for a Stylish Effect */}
        <div className="absolute inset-0 bg-black/30 animate-fadeIn"></div>
      </section>
      {/* Why Choose Us Section */}
      <section className="relative bg-[#EDF7ED] text-navy-900 py-16">
        {/* Zigzag Mountain Shape at the Top */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="block w-full h-[180px]" // Increased height for better peak visibility
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 150"
            preserveAspectRatio="none"
          >
            <path
              d="M0,150 L100,90 L250,120 L350,50 L500,140 L650,60 L800,130 L950,40 L1100,150 L1200,20 V0 H0 Z"
              fill="white" // Background color
              stroke="white"
              strokeWidth="3"
            ></path>
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-16 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold leading-none tracking-tight text-navy-900"
          >
            Why Choose Us?
          </motion.h2>
          <p className="text-lg text-navy-300 mt-4">
            We take pride in delivering exceptional quality and innovative
            solutions.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                className="flex items-center space-x-4"
              >
                <CheckCircle className="w-8 h-8 text-yellow-500" />
                <p className="text-lg">{point}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="p-8 bg-white">
        <div className="grid grid-cols-2 gap-8">
          {data.map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-md shadow-xl"
            >
              {/* Full-Size Image (Always Visible) */}
              <img
                src={item.imgSrc}
                alt={item.title}
                className="w-full h-96 object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
              />

              {/* Paper Folding Overlay */}
              <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                {/* Left Fold */}
                <div
                  className="absolute inset-y-0 left-0 w-1/2 bg-blue-900 bg-opacity-80 text-white p-6
              flex flex-col justify-center items-end transform origin-left -translate-x-full 
              group-hover:translate-x-0 transition-transform duration-700 ease-in-out"
                >
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                </div>

                {/* Right Fold */}
                <div
                  className="absolute inset-y-0 right-0 w-1/2 bg-blue-900 bg-opacity-80 text-white p-6
              flex flex-col justify-center items-start transform origin-right translate-x-full 
              group-hover:translate-x-0 transition-transform duration-700 ease-in-out delay-200"
                >
                  {item.description && (
                    <p className="text-lg">{item.description}</p>
                  )}
                </div>
              </div>

              {/* Title Bar (Always Visible) */}
              <div className="absolute bottom-0 left-0 w-full bg-blue-900 px-6 py-4 text-white font-semibold text-lg">
                / {item.title}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
