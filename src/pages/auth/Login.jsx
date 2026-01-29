import { useState } from "react";
import { GoSignIn } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { loginUser } from "../../services/userApi";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const isSubmit = [email, password].every(Boolean) === true;
    if (isSubmit) {
      try {
        setLoading(true);
        setError("");

        const res = await loginUser({ email, password });

        // storing accessToken in frontend
        localStorage.setItem("accessToken", res.data.accessToken);
        localStorage.setItem("user", JSON.stringify(res.data.user));

        alert("Login User Successfull");
        navigate("/profile");
      } catch (err) {
        setError(err.response?.data?.message || "Login failed");
      } finally {
        setLoading(false);
      }
    }
  };

  const googleLogin = () => {
    window.location.href = "http://localhost:5000/api/auth/google";
  };

  return (
    <div className="min-h-[90vh] flex justify-center items-center flex-col px-4 ">
      <div className="logo">
        <GoSignIn size={70} />
      </div>
      <div className="head text-center m-5 p-2 space-y-1">
        <h1 className="text-3xl">Sign in to your account</h1>
        <p>
          Or{" "}
          <span
            onClick={() => navigate("/signup")}
            className="cursor-pointer text-md text-green-600 font-semibold"
          >
            create a new account
          </span>
        </p>
      </div>

      <form className="w-full max-w-md space-y-4" onSubmit={handleLogin}>
        <div className="inputs flex flex-col space-y-2 mb-4">
          <label htmlFor="email"></label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            id="email"
            placeholder="Email Address"
            className="border  focus:bg-white focus:outline-green-700 hover:bg-gray-100  transition placeholder:text-gray-400 h-10 p-4 rounded-lg border-slate-400"
          />
          <div className="relative">
            <label htmlFor="password"></label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              id="password"
              placeholder="Password"
              className="border w-full focus:bg-white focus:outline-green-700 hover:bg-gray-100 transition placeholder:text-gray-400 h-10 p-4 rounded-lg border-slate-400"
            />
            <div
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <HiEyeOff className="h-5 w-5" />
              ) : (
                <HiEye className="h-5 w-5" />
              )}
            </div>
          </div>
        </div>
        {error && <p className="text-red-600 text-sm text-center">{error}</p>}
        <div className="my-1">
          <span className="cursor-pointer text-md text-green-600 hover:text-green-500 font-semibold">
            Forgot your password?
          </span>
        </div>
        <button
          type="submit"
          className="w-full flex items-center justify-center h-12 space-x-2 border px-16 py-3 rounded-lg hover:bg-zinc-100 transition cursor-pointer"
        >
          <p className="text-base sm:text-lg">Sign in</p>
        </button>
        <div className="relative text-center z-0">
          <div className="absolute inset-0 flex items-center ">
            <div className="w-full border-t border-slate-300"></div>
          </div>
          <span className="text-sm text-slate-500 m-1 bg-white relative px-3">
            or continue with
          </span>
        </div>
        <div
          onClick={googleLogin}
          className="googleBtn w-full sm:w-[24rem] md:w-[28rem] flex justify-center h-12 gap-3 items-center border rounded-lg hover:bg-zinc-100 transition cursor-pointer"
        >
          <span>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 48 48"
              enableBackground="new 0 0 48 48"
              className="h-8 w-8 mr-2"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              ></path>
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              ></path>
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
            </svg>
          </span>
          <p className="text-base sm:text-lg">Sign in with google</p>
        </div>
      </form>
    </div>
  );
};

export default Login;
