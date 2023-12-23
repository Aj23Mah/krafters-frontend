import { useState } from "react";
import { Link } from "react-router-dom";
import ForgetpasswordImg from "../../assets/images/Forget-password.png";
// import { Button } from '@mantine/core';

const Forgetpassword = () => {
  const [email, setEmail] = useState("");

  function onChange(error: any) {
    setEmail(error.target.value);
  }
  
  return (
      <div className="flex justify-center flex-wrap items-center py-xl max-w-[70%] mx-auto">
        <div className="md:w-[67%] lg:w-[40%] mb-xl md:mb-md lg:mr-xxl">
          <img src={ForgetpasswordImg} alt="Key" className="w-full rounded-2xl" />
        </div>
        <div className="lg:mr-xxl">
          <h1 className="text-3xl text-center mb-md font-bold">
            Forget Password
          </h1>
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
                  to="/log-in"
                  className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out ml-md"
                >
                  Sign in instead
                </Link>
              </p>
            </div>

            <button
            className="w-full bg-blue-600 text-white py-xs text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800"
            type="submit"
          >
              send reset password
            </button>
            {/* <Button fullWidth>Full width button</Button> */}
          </form>
        </div>
      </div>
  );
};

export default Forgetpassword;
