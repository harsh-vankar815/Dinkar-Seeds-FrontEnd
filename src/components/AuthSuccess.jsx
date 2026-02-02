import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from '../api/axios'

const AuthSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAccessToken = async () => {
      try {
        // backend automatic cookie ko check karega
        const res = await API.post("/auth/refresh-token");
        console.log("AUTH RESPONSE:", res.data);
        localStorage.setItem("accessToken", res.data.accessToken);
        localStorage.setItem("user", JSON.stringify(res.data.user))
        navigate("/profile");
      } catch (err) {
        console.error("Token fetch failed", err);
        navigate("/login");
      }
    };

    fetchAccessToken();
  }, [navigate]);

  return (
    <div className='text-center mt-5 w-screen h-screen'>
      <h2>Logging you in...</h2>
      <p>Please wait while we secure your session.</p>
    </div>
  );
};

export default AuthSuccess;
