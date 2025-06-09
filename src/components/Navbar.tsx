import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // const handleScrollToTop = () => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };

  const navItems = [
    {
      name: "Home",
      path: "/",
      onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
    },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Careers", path: "/careers" },
  ];

  return (
    <nav className="fixed w-full bg-[#fff]/90 backdrop-blur-md z-50 shadow-md h-18 flex items-center mt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between w-full">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="D&N Craft"
              className="h-16 w-auto max-w-[200px] object-contain"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={item.path}
                className="text-gray-800 font-medium   hover:bg-[#01334c]  hover:text-white px-3 py-2 rounded-md transition duration-300"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}

          {/* Get in Touch Animated Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
            <Link
              to="/contact"
              className="relative inline-flex items-center justify-center px-6 py-2 text-sm font-semibold text-white bg-[#01334c] rounded-full shadow-md overflow-hidden transition duration-300 hover:bg-[#01334c] brightness-10"
            >
              {/* Background Animated Glow */}
              <motion.span className="absolute inset-0 bg-#01334c" />

              {/* Animated Paper Plane Icon with Glow */}
              {/* <motion.span
                className="mr-1 inline-block text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.7)]"
                animate={{ x: [0, 5, 0], opacity: [1, 0.8, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                ✈️
              </motion.span> */}

              {/* Text with Brightness & Glow */}
              <span className="text-sm font-bold text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.7)]">
                Contact Us
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-[#FFF9E6] shadow-md absolute w-full left-0 top-20"
        >
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-gray-800 hover:bg-gradient-to-r hover:from-[#004660] hover:to-[#007f99] hover:text-white rounded-md transition duration-300"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}

            {/* Get in Touch Button */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="pt-3"
            >
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block text-center px-6 py-2 font-semibold text-white bg-[#007f99] rounded-md shadow-lg transition duration-300 hover:bg-[#004660]"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
