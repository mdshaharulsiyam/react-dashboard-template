import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import login from "../../../src/assets/login.svg";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
import BtnLoader from "../../Utility/Loader/BtnLoader";
const LoginPage = () => {
  const [passwordShow, setPasswordShow] = useState(false);
  const [loading, setLoading] = useState(false)
  const onChange = (value) => {
    console.log("Captcha value:", value);
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const email = e.target.email.value;
    const password = e.target.password.value;
    const userInfo = {
      email,
      password,
    };
  };
  return (
    <div className="flex justify-center items-center flex-col h-screen max-w-[100rem] mx-auto">
      <div className="flex lg:justify-between  justify-center items-center w-full md:gap-10 pt-4 p-1">
        <div className="lg:block hidden">
          <img src={login} alt="" />
        </div>
        <form
          style={{ boxShadow: "rgba(0, 0, 0, 0.1) 1px 1px 3px 2px" }}
          onSubmit={handleLogin}
          className="lg:w-[45%] w-full flex flex-col h-full rounded-md justify-center p-3 items-center box-border lg:px-10 bgw"
        >
          <h4 className="text-center md:text-left w-full text-[#767577] text-2xl pb-4">
            Login 👋
          </h4>
          <div className="relative z-0 w-full mb-5 group pt-3">
            <input
              type="email"
              name="email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              defaultValue=""
              placeholder=" "
              required
            />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Email address
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group pt-3">
            <input
              type={passwordShow ? "text" : "password"}
              name="password"
              id="floating_password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              defaultValue=""
              placeholder=" "
              required
            />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Password
            </label>
            <button className="text-xs absolute right-0 top-0 text-blue-500">
              Forgot Password?
            </button>
            <button
              className="absolute hover:scale-110 active:scale-95 text-xl right-2 top-5 transition-all"
              onClick={() => setPasswordShow(!passwordShow)}
            >
              {passwordShow ? <FaRegEye /> : <FaRegEyeSlash />}
            </button>
          </div>
          <div className="w-full text-left pb-4">
            <ReCAPTCHA
              sitekey={`${
                import.meta.env.VITE_ReCAPTCHA_KEY
                  ? import.meta.env.VITE_ReCAPTCHA_KEY
                  : "site key"
              }`}
              onChange={onChange}
            />
          </div>
          <button className="text-white bg-[#7367F0] w-full h-[50px] rounded-sm text-xl">
            {loading ? <BtnLoader /> : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};
export default LoginPage;
