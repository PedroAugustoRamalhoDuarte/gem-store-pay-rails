import { useState } from "react";

const maskCPF = (value) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
};

export const CheckoutForm = ({ price }) => {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");

  const handleCpfChange = (e) => {
    setCpf(maskCPF(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle PIX payment
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-md rounded-lg bg-white p-6 shadow-md"
    >
      <h2 className="mb-4 text-xl font-semibold">Checkout</h2>
      <div className="mb-4">
        <label className="mb-2 block text-gray-700">Full Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="mb-2 block text-gray-700">CPF</label>
        <input
          type="text"
          value={cpf}
          onChange={handleCpfChange}
          maxLength={14}
          className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="000.000.000-00"
          required
        />
      </div>
      <div className="mb-4">
        <label className="mb-2 block text-gray-700">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <p className="text-gray-700">Total: ${price.toLocaleString()}</p>
      </div>
      <button
        type="submit"
        className="w-full rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
      >
        Pay with PIX
      </button>
    </form>
  );
};
