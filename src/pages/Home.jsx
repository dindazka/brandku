import { useState, useEffect } from "react";
import Hero from "../components/Hero";
import CardGrid from "../components/CardGrid";
import LoginDemo from "../components/LoginDemo";
import { useFeatures } from "../hooks/useFeatures";
import { useLogin } from "../hooks/useLogin";

const Home = () => {
  const { features = [], loading, error } = useFeatures();
  const { user } = useLogin();

  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    const handleOpenModal = () => {
      setShowLoginModal(true);
    };

    window.addEventListener("openLoginModal", handleOpenModal);

    return () => {
      window.removeEventListener("openLoginModal", handleOpenModal);
    };
  }, []);

  return (
    <div className="animate-fadeIn">
      {/* HERO */}
      <Hero
        title="Solusi Terbaik untuk Bisnismu"
        subtitle="Platform all-in-one untuk manajemen, pemasaran, dan pertumbuhan bisnis kecil."
        buttonText={user ? user.name || "Profile" : "Mulai Gratis"}
        currentUser={user}
        onTap={() => {
          if (user) {
            console.log("User already logged in:", user);
          } else {
            setShowLoginModal(true);
          }
        }}
      />

      {/* LOGIN MODAL */}
      <div
        className={`fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 transition-opacity duration-200 ${
          showLoginModal ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-fadeIn">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center">
            <h2 className="text-lg font-bold text-slate-800">
              Masuk ke BrandKu
            </h2>

            <button
              onClick={() => setShowLoginModal(false)}
              className="text-slate-400 hover:text-slate-600 transition"
            >
              ✕
            </button>
          </div>

          <div className="p-6">
            <LoginDemo />
          </div>
        </div>
      </div>

      {/* FEATURES SECTION */}
      {loading ? (
        <section className="py-16 text-center">
          <h2 className="text-3xl font-bold mb-10 text-slate-800">
            Mengapa BrandKu?
          </h2>

          <div className="flex justify-center items-center gap-4">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-600"></div>
            <span className="text-slate-500 font-semibold text-sm">
              Memuat fitur...
            </span>
          </div>
        </section>
      ) : error ? (
        <section className="py-16 text-center">
          <h2 className="text-3xl font-bold mb-6 text-slate-800">
            Mengapa BrandKu?
          </h2>

          <p className="text-rose-500 font-semibold text-sm">
            Gagal memuat data fitur:{" "}
            {error?.message || String(error) || "Kesalahan Sistem"}
          </p>
        </section>
      ) : features.length > 0 ? (
        <CardGrid features={features} />
      ) : (
        <section className="py-16 text-center text-slate-500">
          Tidak ada data fitur
        </section>
      )}
    </div>
  );
};

export default Home;