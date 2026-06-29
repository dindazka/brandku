import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative flex justify-between items-center py-4 px-8 bg-white border-b border-gray-100 shadow-sm">
      <span className="text-xl font-bold text-blue-600">BrandKu</span>

      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center gap-8">
        <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">
          Beranda
        </Link>

        <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
          About
        </Link>

        <Link to="/piercing" className="text-gray-600 hover:text-blue-600 transition-colors">
          Piercing
        </Link>
      </nav>

      {/* Tombol Menu Mobile */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col p-4 gap-4 md:hidden">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            Beranda
          </Link>

          <Link to="/about" onClick={() => setIsMenuOpen(false)}>
            About
          </Link>

          <Link to="/piercing" onClick={() => setIsMenuOpen(false)}>
            Piercing
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;