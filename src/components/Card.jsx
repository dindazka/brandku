import { useState, useEffect } from "react";

const Card = ({ id, icon, tittle, subtitle }) => {

  const [jumlahSuka, setJumlahSuka] = useState(() => {
    const saved = localStorage.getItem(`suka-${id}`);
    return saved ? parseInt(saved) : 0;
  });

  useEffect(() => {
    localStorage.setItem(`suka-${id}`, jumlahSuka);
  }, [jumlahSuka, id]);

  return (
    <article className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
      
      <div className="text-3xl mb-4 text-black">{icon}</div>

      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        {tittle}
      </h3>

      <p className="text-gray-500 text-sm leading-relaxed">
        {subtitle}
      </p>

      <button
        className="mt-4 px-4 py-2 bg-pink-100 text-pink-600 rounded-lg hover:bg-pink-200"
        onClick={() => setJumlahSuka(jumlahSuka => jumlahSuka + 1)}
      >
        ❤️ Suka ({jumlahSuka})
      </button>

    </article>
  );
};

export default Card;