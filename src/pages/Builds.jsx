import { motion } from "framer-motion";

const builds = [
  {
    id: 1,
    name: "Assassin Burst",
    hero: "Lancelot",
    items: ["Blade of Despair", "Endless Battle", "Malefic Roar"],
    image: "/lancelot-build.png"
  },
  {
    id: 2,
    name: "Tank Sustain",
    hero: "Tigreal",
    items: ["Dominance Ice", "Antique Cuirass", "Immortality"],
    image: "/tigreal-build.png"
  }
];

export default function Builds() {
  return (
    <div className="pt-20">
      <h1 className="text-3xl font-bold mb-6">MLBB Builds</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {builds.map((build) => (
          <motion.div
            key={build.id}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800/50 rounded-xl p-4 shadow-lg"
          >
            <img
              src={build.image}
              alt={build.name}
              className="w-full h-40 object-cover rounded-lg"
            />
            <h2 className="text-xl font-semibold mt-3">{build.name}</h2>
            <p className="text-gray-400">Hero: {build.hero}</p>
            <ul className="mt-2 text-gray-300 space-y-1">
              {build.items.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
