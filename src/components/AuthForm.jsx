import { useState } from "react";

export default function AuthForm({ onSubmit, type = "login" }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-bold">{type === "signup" ? "Sign Up" : "Sign In"}</h2>
      <input
        className="w-full p-2 border rounded"
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        className="w-full p-2 border rounded"
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
        {type === "signup" ? "Create Account" : "Log In"}
      </button>
    </form>
  );
}
