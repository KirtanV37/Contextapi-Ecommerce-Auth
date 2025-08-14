import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import PageWrapper from "../utils/PageWrapper";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(email, password);

    if (success) {
      toast.success("Logged in successfully");
      navigate("/");
    } else {
      toast.error("Invalid email or password");
    }
  };

  return (
    <PageWrapper>
      <div className="flex items-center justify-center min-h-[70vh] bg-gray-50 ">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 hover:scale-110 hover:shadow-xl transition-all">
          <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
            Login
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="border border-gray-300 rounded focus-within:ring-2 focus-within:ring-blue-400 flex items-center px-3 py-2">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-transparent w-full outline-none placeholder-gray-400"
              />
            </div>
            <div className="w-full border border-gray-300 rounded focus-within:ring-2 focus-within:ring-blue-400 flex items-center px-3 py-2">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="flex-1 bg-transparent outline-none placeholder-gray-400"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="ml-2 text-gray-500 hover:text-gray-700 cursor-pointer"
              >
                {showPassword ? <IoMdEyeOff size={20} /> : <IoMdEye size={20} />}
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition font-semibold"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Login;
