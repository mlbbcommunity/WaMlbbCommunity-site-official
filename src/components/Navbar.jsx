import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-black/40 backdrop-blur-md fixed w-full top-0 left-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-3 px-6">
        <Link to="/" className="text-2xl font-bold text-cyan-400">
          WaMLBB〽️
        </Link>
        <div className="space-x-6">
          <Link to="/bots" className="hover:text-cyan-300">Community Bots</Link>
          <Link to="/faq" className="hover:text-cyan-300">FAQ</Link>
          <Link to="/builds" className="hover:text-cyan-300">Builds</Link>
          <Link to="/heroes" className="hover:text-cyan-300">Heroes</Link>
        </div>
      </div>
    </nav>
  );
}
