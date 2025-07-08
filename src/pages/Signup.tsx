import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase";
import AuthForm from "../components/AuthForm";

export default function Signup() {
  const navigate = useNavigate();

  const handleSignup = async ({ email, password }: { email: string; password: string }) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (error) {
      alert("Email already in use");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <AuthForm onSubmit={handleSignup} type="signup" />
    </div>
  );
}
