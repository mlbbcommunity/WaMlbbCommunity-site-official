import { useParams } from "react-router-dom";

const botData = {
  bot1: {
    name: "AlphaBot",
    commands: [
      { command: "!help", desc: "Shows all commands" },
      { command: "!kick", desc: "Kick a user" }
    ]
  },
  bot2: {
    name: "BetaBot",
    commands: [
      { command: "!play", desc: "Play music" },
      { command: "!stop", desc: "Stop music" }
    ]
  }
};

export default function BotDetails() {
  const { id } = useParams();
  const bot = botData[id];

  if (!bot) return <p className="pt-20">Bot not found</p>;

  return (
    <div className="pt-20">
      <h1 className="text-3xl font-bold mb-4">{bot.name}</h1>
      <ul className="space-y-3">
        {bot.commands.map((cmd, i) => (
          <li key={i} className="bg-gray-800/40 p-3 rounded-lg">
            <span className="text-cyan-400 font-mono">{cmd.command}</span> - {cmd.desc}
          </li>
        ))}
      </ul>
    </div>
  );
}
