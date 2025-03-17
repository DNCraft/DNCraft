"use client";
import { motion } from "framer-motion";

export default function LoadingPage({
  setUnlocked,
}: {
  setUnlocked: (value: boolean) => void;
}) {
  const handleUnlock = () => {
    setUnlocked(true);
  };

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-black">
      {/* Flip Animation Wrapper */}
      <motion.div
        className="relative w-[450px] h-[450px] flex items-center justify-center"
        animate={{ rotateY: [0, 180, 360] }} // Smooth infinite flip
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        style={{
          transformStyle: "preserve-3d",
          position: "relative",
        }}
      >
        {/* Front Side */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          <img
            src="public/careers/careers1.png"
            alt="Front Side"
            className="w-full h-full object-cover rounded-lg shadow-xl"
          />
        </div>

        {/* Back Side */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          <img
            src="public/careers/careers2.png"
            alt="Back Side"
            className="w-full h-full object-cover rounded-lg shadow-xl"
          />
        </div>
      </motion.div>

      {/* Tagline */}
      <p className="text-white text-2xl font-bold mt-6">
        Your Dream Space is Just a Click Away! 🏡
      </p>

      {/* Tap to Explore Button */}
      <button
        className="absolute bottom-10 px-5 py-2 bg-white  text-black  text-base font-semibold rounded-full transition-all duration-300"
        onClick={handleUnlock}
      >
        Tap to Explore →
      </button>
    </section>
  );
}
