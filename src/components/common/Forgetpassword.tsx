import { useState } from "react";
import { Link } from "react-router-dom";
import signImg from "../../assets/images/login-img.png";

const Forgetpassword = () => {
  const [email, setEmail] = useState("");

  function onChange(error: any) {
    setEmail(error.target.value);
  }

  // async function onSubmit(error){
  //   error.preventDefault()
  //   try {
  //     const auth = getAuth()
  //     await sendPasswordResetEmail(auth, email)
  //     toast.success("Email was sent");
  //   } catch (error) {
  //     toast.error("COuld not send reset password");
  //   }
  // }
  return (
    <section className="pt-24">
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[40%] mb-12 md:mb-6 lg:mr-10">
          <img src={signImg} alt="Key" className="w-full rounded-2xl" />
        </div>
        <div className="lg:mr-10">
          <h1 className="text-3xl text-center mb-6 font-bold">
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
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 outline-none rounded transition ease-in-out"
            />

            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
              <p className="mb-6">
                Don't have a account?
                <Link
                  to="/sign-up"
                  className="text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1"
                >
                  Register
                </Link>
              </p>
              <p>
                <Link
                  to="/log-in"
                  className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out ml-1"
                >
                  Sign in instead
                </Link>
              </p>
            </div>

            <button
              className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800"
              type="submit"
            >
              send reset password
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Forgetpassword;
