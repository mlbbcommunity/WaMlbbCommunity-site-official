import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function BotCard({ bot }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gray-800/50 rounded-2xl shadow-lg p-4 text-center"
    >
      <img src={bot.image} alt={bot.name} className="w-20 h-20 mx-auto rounded-full border-2 border-cyan-400" />
      <h2 className="text-xl font-bold mt-2">{bot.name}</h2>
      <p className="text-gray-400">{bot.shortDescription}</p>
      <Link to={`/bots/${bot.id}`} className="block mt-3 text-cyan-400 hover:underline">
        View Commands
      </Link>
    </motion.div>
  );
}
