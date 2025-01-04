import { Head, useForm } from "@inertiajs/react";

export default function ForgotPassword() {
  const { data, setData, post, processing } = useForm({
    email_address: "",
  });

  const submit = (e) => {
    e.preventDefault();
    post("/password");
  };

  return (
    <>
      <Head title="Forgot Password" />
      <div className="mx-auto mt-10 max-w-md">
        <h1 className="mb-6 text-2xl font-bold">Forgot Password</h1>

        <form onSubmit={submit} className="space-y-6">
          <div>
            <label
              htmlFor="email_address"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              id="email_address"
              type="email"
              value={data.email_address}
              onChange={(e) => setData("email_address", e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              autoComplete="email"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={processing}
              className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              {processing ? "Sending..." : "Send Reset Instructions"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
