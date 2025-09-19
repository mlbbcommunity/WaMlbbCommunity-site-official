import { motion } from "framer-motion";

const heroes = [
  { id: 1, name: "Lancelot", role: "Assassin", image: "/lancelot.png" },
  { id: 2, name: "Tigreal", role: "Tank", image: "/tigreal.png" },
  { id: 3, name: "Layla", role: "Marksman", image: "/layla.png" }
];

export default function Heroes() {
  return (
    <div className="pt-20">
      <h1 className="text-3xl font-bold mb-6">MLBB Heroes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {heroes.map((hero) => (
          <motion.div
            key={hero.id}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800/50 rounded-xl p-4 shadow-lg text-center"
          >
            <img
              src={hero.image}
              alt={hero.name}
              className="w-32 h-32 mx-auto rounded-full border-2 border-cyan-400"
            />
            <h2 className="text-xl font-semibold mt-3">{hero.name}</h2>
            <p className="text-gray-400">{hero.role}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
