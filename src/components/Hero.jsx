function Hero({ onLogin }) {
  return (
    <section className="flex flex-col items-center text-center py-24 px-8 bg-blue-50">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
        Solusi Terbaik untuk Bisnismu
      </h1>

      <p className="text-lg text-gray-500 mb-8 max-w-xl">
        Platform all-in-one untuk manajemen, pemasaran,
        dan pertumbuhan bisnis kecil.
      </p>

      <button
        onClick={onLogin}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition"
      >
        Mulai Gratis
      </button>
    </section>
  );
}

export default Hero;