import { useLogin } from "../hooks/useLogin";

const LoginDemo = () => {
  const { user, loading, login } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    login({
      email: formData.get("email"),
      password: formData.get("password"),
    });
  };

  return (
    <>
      <h2 className="text-xl font-bold text-slate-800 mb-6 text-center">
        Demo Login
      </h2>

      {!user ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-700 mb-1"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="contoh@brandku.com"
              className="w-full px-4 py-2.5 border border-slate-200 rounded-lg"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-slate-700 mb-1"
            >
              Password
            </label>

            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder="••••••••"
              className="w-full px-4 py-2.5 border border-slate-200 rounded-lg"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2.5 rounded-lg font-semibold text-white ${
              loading
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Memproses..." : "Masuk"}
          </button>
        </form>
      ) : (
        <div className="text-center py-6">
          <div className="w-16 h-16 bg-gradient-to-tr from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-lg">
              {user.name.charAt(0)}
            </span>
          </div>

          <h3 className="text-lg font-bold">Halo, {user.name}!</h3>

          <p className="text-slate-600">{user.email}</p>

          <p className="text-xs text-slate-500 mt-4">
            ✅ Login berhasil
          </p>
        </div>
      )}
    </>
  );
};

export default LoginDemo;