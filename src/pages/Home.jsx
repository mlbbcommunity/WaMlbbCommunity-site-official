import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="pt-20 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold text-cyan-400"
      >
        Welcome to WaMLBB〽️
      </motion.h1>
      <p className="mt-4 text-lg text-gray-300">
        Your ultimate MLBB WhatsApp community hub for bots, builds, heroes & more.
      </p>

      <div className="mt-8 flex justify-center gap-6 flex-wrap">
        <Link
          to="/bots"
          className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-xl shadow-lg"
        >
          Explore Bots
        </Link>
        <Link
          to="/builds"
          className="px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-xl shadow-lg"
        >
          Browse Builds
        </Link>
        <Link
          to="/heroes"
          className="px-6 py-3 bg-pink-500 hover:bg-pink-600 rounded-xl shadow-lg"
        >
          Discover Heroes
        </Link>
      </div>
    </div>
  );
}
