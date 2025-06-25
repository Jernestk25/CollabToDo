// src/pages/Signup.jsx
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase";
import AuthForm from "../components/AuthForm";

export default function Signup() {
  const navigate = useNavigate();

  const handleSignup = async ({ email, password }) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err) {
      console.error("Signup error:", err.message);
      alert("Sign up failed. Maybe the email is already used.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <AuthForm onSubmit={handleSignup} type="signup" />
    </div>
  );
}
