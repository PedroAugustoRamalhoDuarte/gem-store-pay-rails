import { Head, Link, useForm } from "@inertiajs/react";

export default function Login({ error }) {
  const { data, setData, post, processing, errors } = useForm({
    email: "",
    password: "",
  });

  const submit = (e) => {
    e.preventDefault();
    post("/session");
  };

  return (
    <>
      <Head title="Login" />
      <div className="max-w-md mx-auto mt-10">
        <h1 className="text-2xl font-bold mb-6">Login</h1>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-4 rounded">
            {error}
          </div>
        )}

        <form onSubmit={submit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={data.email}
              onChange={(e) => setData("email", e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              autoComplete="email"
              required
            />
            {errors.email && (
              <p className="mt-2 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={data.password}
              onChange={(e) => setData("password", e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              autoComplete="current-password"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={processing}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {processing ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <Link
            href="/password/new"
            className="text-indigo-600 hover:text-indigo-500"
          >
            Forgot your password?
          </Link>
        </div>
      </div>
    </>
  );
}
