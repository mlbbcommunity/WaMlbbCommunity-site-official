import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black/40 backdrop-blur-md mt-10 border-t border-gray-800">
      <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-cyan-400">WaMLBB〽️</h2>
          <p className="text-sm">© {new Date().getFullYear()} WaMLBB Community. All rights reserved.</p>
        </div>

        {/* Middle Links */}
        <div className="flex gap-6">
          <Link to="/bots" className="hover:text-cyan-300 transition">
            Bots
          </Link>
          <Link to="/faq" className="hover:text-cyan-300 transition">
            FAQ
          </Link>
          <Link to="/builds" className="hover:text-cyan-300 transition">
            Builds
          </Link>
          <Link to="/heroes" className="hover:text-cyan-300 transition">
            Heroes
          </Link>
        </div>

        {/* Right Section */}
        <div className="text-sm text-center md:text-right">
          Built with ❤️ for the <span className="text-cyan-400 font-semibold">WhatsApp MLBB Community</span>
        </div>
      </div>
    </footer>
  );
}
