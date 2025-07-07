import { useState } from "react";

interface AuthFormProps {
  onSubmit: (data: { email: string; password: string }) => void;
  type?: "login" | "signup";
}

export default function AuthForm({ onSubmit, type = "login" }: AuthFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-6 bg-white rounded-xl shadow-md max-w-md w-full"
    >
      <h2 className="text-xl font-bold text-center">
        {type === "signup" ? "Create Account" : "Welcome Back"}
      </h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-3 border rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        required
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-3 border rounded"
      />
      <button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded w-full"
      >
        {type === "signup" ? "Sign Up" : "Login"}
      </button>
    </form>
  );
}
