import BotCard from "../components/BotCard";

const bots = [
  { id: "bot1", name: "AlphaBot", shortDescription: "Moderation & fun", image: "/bot1.png" },
  { id: "bot2", name: "BetaBot", shortDescription: "Music & memes", image: "/bot2.png" }
];

export default function Bots() {
  return (
    <div className="pt-20">
      <h1 className="text-3xl font-bold mb-6">Community Bots</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} />
        ))}
      </div>
    </div>
  );
}
