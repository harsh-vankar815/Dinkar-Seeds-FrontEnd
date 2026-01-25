import { useState } from "react";
import { GoSignIn } from "react-icons/go";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCon, setPasswordCon] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordCon, setShowPasswordCon] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const isSubmit =
      [email, password, passwordCon, first, last].every(Boolean) === true;
    const confirmPassword = password === passwordCon;
    console.log(isSubmit, confirmPassword);
    if (isSubmit && confirmPassword) {
      console.log(
        `First name: ${first}\n
        Last name: ${last}\n
        email: ${email}\n
        Password: ${password}\n
        Confirm password: ${passwordCon}`
      );
      console.log("credentials saved in DB");

      setEmail("");
      setFirst("");
      setLast("");
      setPassword("");
      setPasswordCon("");
      alert("Signup Successfully");
      navigate("/login");
    }
  };

  const isPassSame = passwordCon === password;

  return (
    <div className="min-h-[90vh] flex justify-center items-center flex-col px-4 ">
      <div className="logo">
        <GoSignIn size={70} />
      </div>
      <div className="head text-center m-5 p-2 space-y-1">
        <h1 className="text-3xl">Create your account</h1>
        <p>
          Or{" "}
          <span className="cursor-pointer text-md text-green-600 font-semibold">
            sign in to your existing account
          </span>
        </p>
      </div>

      <form
        className="w-full max-w-md space-y-4"
        action=""
        onSubmit={handleSubmit}
      >
        <div className="inputs flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/2">
              <label htmlFor="first"></label>
              <input
                type="text"
                value={first}
                onChange={(e) => setFirst(e.target.value)}
                name="first"
                id="first"
                placeholder="First name"
                className="border w-full hover:bg-gray-100 focus:bg-white focus:outline-green-700 placeholder:text-gray-400 h-10 p-4 rounded-lg border-slate-400"
              />
            </div>
            <div className="w-full md:w-1/2">
              <label htmlFor="last"></label>
              <input
                type="text"
                value={last}
                onChange={(e) => setLast(e.target.value)}
                name="last"
                id="last"
                placeholder="Last name"
                className="border w-full focus:bg-white focus:outline-green-700 hover:bg-gray-100 placeholder:text-gray-400 h-10 p-4 rounded-lg border-slate-400"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <label htmlFor="email"></label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              id="email"
              placeholder="Email Address"
              className="border w-full hover:bg-gray-100 focus:bg-white focus:outline-green-700 placeholder:text-gray-400 h-10 p-4 rounded-lg border-slate-400"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative">
              <label htmlFor="password"></label>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                id="password"
                minLength={6}
                placeholder="Password"
                className="border w-full md:1/2 hover:bg-gray-100 focus:bg-white focus:outline-green-700 placeholder:text-gray-400 h-10 p-4 pr-10 rounded-lg border-slate-400"
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
            {!isPassSame && password && passwordCon && (
              <span className="text-xs text-red-700 p-0 m-0">
                Password not match
              </span>
            )}
            <div className="relative">
              <input
                type={showPasswordCon ? "text" : "password"}
                value={passwordCon}
                onChange={(e) => setPasswordCon(e.target.value)}
                name="password"
                id="confirmPassword"
                minLength={8}
                placeholder="Confirm password"
                className="border w-full md:1/2 hover:bg-gray-100 focus:bg-white focus:outline-green-700 placeholder:text-gray-400 h-10 p-4 pr-10 rounded-lg border-slate-400"
              />
              <div
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                onClick={() => setShowPasswordCon(!showPasswordCon)}
              >
                {showPasswordCon ? (
                  <HiEyeOff className="h-5 w-5" />
                ) : (
                  <HiEye className="h-5 w-5" />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="my-1">
          <span className="text-md cursor-pointer text-green-600 hover:text-green-500 font-semibold">
            Forgot your password?
          </span>
        </div>
        <button
          type="submit"
          className="w-full sm:w-[24rem] md:w-[28rem] flex items-center justify-center h-12 border rounded-lg hover:bg-zinc-100 transition cursor-pointer"
        >
          <p className="text-base sm:text-lg">Create account</p>
        </button>
        <div className="relative text-center">
          <div className="absolute inset-0 flex items-center ">
            <div className="w-full border-t border-slate-300"></div>
          </div>
          <span className="text-sm text-slate-500 m-1 bg-white relative px-3">
            or continue with
          </span>
        </div>
        <div className="googleBtn w-full sm:w-[24rem] md:w-[28rem] flex justify-center h-12 items-center border gap-3 rounded-lg hover:bg-zinc-100 transition cursor-pointer">
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
          <p className="text-base sm:text-lg">Sign up with google</p>
        </div>
      </form>

      <div className="text-xs p-2">
        By creating an account, you agree to our{" "}
        <span className="text-green-600 cursor-pointer">Terms of Service</span>{" "}
        and{" "}
        <span className="text-green-600 cursor-pointer">Privacy Policy</span>
      </div>
    </div>
  );
};

export default Register;
