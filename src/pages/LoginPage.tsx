import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("admin@resetstudio.com");
  const [password, setPassword] = useState("admin123");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple validation matching demo credentials
    if (email === "admin@resetstudio.com" && password === "admin123") {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 font-sans">
      <div className="bg-[#fcfbf9] w-full max-w-[480px] rounded-2xl shadow-2xl p-8 relative border border-[#e8e4dc]">
        {/* Close / Exit Button */}
        <button
          onClick={() => alert("Portal access required.")}
          className="absolute top-6 right-6 text-[#8c857b] hover:text-[#1a1816] transition-colors cursor-pointer text-lg font-light"
        >
          ✕
        </button>

        {/* Title & Subtitle */}
        <h2 className="font-['Playfair_Display'] text-[26px] font-bold text-[#1a1816] mb-1">
          Staff Login
        </h2>
        <p className="text-[13px] text-[#7a7469] mb-6">
          Admin Portal access — Reset Studio staff only.
        </p>

        {error && (
          <div className="mb-4 p-3 bg-[#fce8e6] text-[#c5221f] text-[12px] rounded-md font-medium">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-[11px] font-bold tracking-wider text-[#7a7469] uppercase mb-1.5">
              EMAIL
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@resetstudio.com"
              required
              className="w-full bg-white border border-[#e5e2db] rounded-lg px-3.5 py-3 text-[13px] text-[#1a1816] focus:outline-none focus:border-[#606c38] transition-colors shadow-2xs"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold tracking-wider text-[#7a7469] uppercase mb-1.5">
              PASSWORD
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full bg-white border border-[#e5e2db] rounded-lg px-3.5 py-3 text-[13px] text-[#1a1816] focus:outline-none focus:border-[#606c38] transition-colors shadow-2xs"
            />
          </div>

          <div className="text-[12px] text-[#8c857b] pt-1">
            Demo: admin@resetstudio.com / admin123
          </div>

          <button
            type="submit"
            className="w-full mt-2 bg-[#606c38] hover:bg-[#525d30] text-white font-medium text-[13px] py-3.5 rounded-lg transition-colors shadow-sm cursor-pointer"
          >
            Log In to Admin
          </button>
        </form>
      </div>
    </div>
  );
};
