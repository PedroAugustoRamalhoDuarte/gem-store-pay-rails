import { Head, useForm } from "@inertiajs/react";

export default function ResetPassword({ token }) {
  const { data, setData, put, processing, errors } = useForm({
    token: token,
    password: "",
    password_confirmation: "",
  });

  const submit = (e) => {
    e.preventDefault();
    put(`/password/${token}`);
  };

  return (
    <>
      <Head title="Reset Password" />
      <div className="max-w-md mx-auto mt-10">
        <h1 className="text-2xl font-bold mb-6">Reset Password</h1>

        <form onSubmit={submit} className="space-y-6">
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              New Password
            </label>
            <input
              id="password"
              type="password"
              value={data.password}
              onChange={(e) => setData("password", e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password_confirmation"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm New Password
            </label>
            <input
              id="password_confirmation"
              type="password"
              value={data.password_confirmation}
              onChange={(e) => setData("password_confirmation", e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={processing}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {processing ? "Resetting..." : "Reset Password"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}