import { Link, useNavigate } from "react-router-dom";
import BtnLoader from "../../Utility/Loader/BtnLoader";
import toast from "react-hot-toast";
import axios from "axios";
import { useContext, useState } from "react";
import { UserContext } from "../../Providers/UserProvider/UserProvider";


const Login = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const {setUserCall} = useContext(UserContext);
  
    const handleLogin = async (e) => {
      e.preventDefault();
      setLoading(true)
      const phone = e.target.phone.value;
      const password = e.target.password.value;
      const userInfo = {
        mobile: phone,
        password,
      };
  
      try {
        const res = await axios.post("https://redinvoice.com/api/login", userInfo);
        if (res.data.message === "Login successfully") {
          setUserCall(true)
          toast.success(res.data.message);
          e.target.reset();
          localStorage.setItem("token", res.data.access_token);
          localStorage.setItem('access', JSON.stringify(res.data.userPermissionData))
          setLoading(false)
          navigate("/");
        }
      } catch (error) {
        setLoading(false)
        setError(error.response.data.message);
      }
    };
    return (
        <div className="flex flex-col max-w-xl p-6  rounded-md sm:p-10 bg-white border shadow-lg text-black my-10 mx-auto">
        <div className="mb-3 text-center">
          <h1 className="mb-3 text-4xl font-bold">Admin Login</h1>
          <p className="text-sm text-black">Log in to access your account</p>
        </div>
        <form onSubmit={handleLogin} className="space-y-12">
          <div className="space-y-4">
            <div>
              <label className="block mb-2 text-lg">Phone Number</label>
              <input
                type="number"
                name="phone"
                id="phone"
                placeholder="0170000000"
                className="w-full px-3 text-lg py-2 border rounded-md border-black bg-transparent text-black"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-lg">Password</label>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-lg hover:underline text-gray-400"
                >
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 text-lg border rounded-md border-black bg-transparent text-black"
              />
            </div>
            {error && <p className="text-red-400 text-sm font-semibold">{error}</p>}
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                className="w-full px-8 py-2 text-lg h-12 font-semibold rounded-md bg-blue-400 text-black hover:bg-blue-600 duration-300"
              >
                {loading ? <BtnLoader/> : "Log In"}
              </button>
            </div>
            <p className="px-6 text-sm text-center text-gray-400">
              {"Don't have an account yet?"}
              <Link to="/signUp" className="hover:underline text-black ml-2">
                Sign up
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
    );
};

export default Login;