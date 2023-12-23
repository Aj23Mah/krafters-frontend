import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import signImg from "../../assets/images/login-img.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  function onChange(error: any) {
    setFormData((prevState) => ({
      ...prevState,
      [error.target.id]: error.target.value,
    }));
  }

  return (
    <div className="flex justify-center flex-wrap items-center py-xl max-w-[70%] mx-auto">  {/* px-md max-w-6xl mx-auto */}
      <div className="md:w-[67%] lg:w-[40%] mb-xl md:mb-md lg:mr-xxl">
        <img src={signImg} alt="Key" className="w-full rounded-2xl" />
      </div>
      <div className="lg:mr-xxl">
        <h1 className="text-3xl text-center mb-md font-bold">Log In</h1>
        <form
        // onSubmit={onSubmit}
        >
          <input
            type="email"
            id="email"
            value={email}
            onChange={onChange}
            placeholder="Email address"
            className="mb-md w-full px-sm py-xs text-xl text-gray-700 bg-white border border-gray-300 outline-none rounded transition ease-in-out"
          />
          <div className="relative mb-md">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={onChange}
              placeholder="Password"
              className="w-full px-sm py-xs text-xl text-gray-700 bg-white border border-gray-300 outline-none rounded transition ease-in-out"
            />
            {showPassword ? (
              <AiFillEyeInvisible
                className="absolute right-[12px] top-[12px] text-xl cursor-pointer"
                onClick={() => setShowPassword((prevState) => !prevState)}
              />
            ) : (
              <AiFillEye
                className="absolute right-[12px] top-[12px] text-xl cursor-pointer"
                onClick={() => setShowPassword((prevState) => !prevState)}
              />
            )}
          </div>

          <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
            <p className="mb-md">
              Don't have a account?
              <Link
                to="/sign-up"
                className="text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-xs"
              >
                Register
              </Link>
            </p>
            <p>
              <Link
                to="/forget-password"
                className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out ml-md"
              >
                Forgot Password
              </Link>
            </p>
          </div>

          <button
            className="w-full bg-blue-600 text-white py-xs text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800"
            type="submit"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
