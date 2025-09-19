import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Bots from "./pages/Bots";
import BotDetails from "./pages/BotDetails";
import FAQ from "./pages/FAQ";
import Builds from "./pages/Builds";
import Heroes from "./pages/Heroes";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bots" element={<Bots />} />
            <Route path="/bots/:id" element={<BotDetails />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/builds" element={<Builds />} />
            <Route path="/heroes" element={<Heroes />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
