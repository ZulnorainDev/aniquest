import React, { useContext, useState } from "react";
import { FaTwitter, FaGoogle, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";


const Login = () => {

  const [state, setstate] = useState("Sign In")
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('')
  const [repeatPassword, setrepeatPassword] = useState('')

  const { auth, setauth } = useContext(AppContext);

  const [error, seterror] = useState('')

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    if (state === "Sign Up") {
      if (password === repeatPassword) {
        toast.success("Welcome, Your account created ");
        setauth(true);
      }
      else {
        seterror("Passwords do not match.");
        return;
      }

    }
    else if (state === "Sign In") {
      toast.success("Welcome Back");
      setauth(true);
    }
    else {
      toast.error("Some Error Occured")
    }

    navigate('/')
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <section className="container mx-auto w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        {/* Form Header */}
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">{state}</h1>
        </header>

        {/* Main Signup Form */}
        <form onSubmit={handleSubmit} className="space-y-4" aria-label="Signup form">

          <input
            type="email"
            required
            placeholder="Email Address"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            required
            placeholder="Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {
            state === "Sign Up"
              ? <input
                type="password"
                required
                placeholder="Repeat Password"
                value={repeatPassword}
                onChange={(e) => setrepeatPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              : <></>
          }
          {/* error message */}

          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}



          {/* Submit Button */}
          {
            state === "Sign Up"
              ? <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition-colors"
              >
                Create Account
              </button>
              : <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition-colors"
              >
                Sign In
              </button>
          }

        </form>

        {/* Sign In Redirect */}
        {state === 'Sign Up'
          ? <p className="flex items-center justify-center gap-1 text-xs sm:text-sm mt-4 text-center text-gray-600">
            Already have an account?
            <span onClick={() => setstate('Sign In')} className="text-blue-500 hover:underline cursor-pointer">
              Login
            </span>
          </p>
          : <p className="flex items-center justify-start gap-1 text-[8px] sm:text-[10px] md:text-sm mt-4 text-center text-gray-600">
            Don't have an account?
            <span onClick={() => setstate('Sign Up')} className="text-blue-500 hover:underline text-[8px] sm:text-[10px] md:text-sm cursor-pointer">
              Sign Up
            </span>
            or
            <Link to='/forget' className="text-blue-500 hover:underline text-[8px] sm:text-[10px] md:text-sm cursor-pointer">
              Forgot Password
            </Link>
          </p>
        }


        {/* Divider with label */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-blue-300" />
          <span className="px-3 text-sm text-blue-500">or {state ? "Sign Up" : "Sign In"} with</span>
          <hr className="flex-grow border-blue-300" />
        </div>

        {/* Social Sign Up Buttons */}
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <button
              type="button"
              className="w-[46%] flex items-center justify-start gap-1 border rounded-md pl-2 py-2 text-[6px] xs:text-[8px] sm:text-xs text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <FaTwitter className="text-[#1DA1F3] text-lg" />
              Sign Up with Twitter
            </button>
            {/* b2 */}
            <button
              type="button"
              className="w-[46%] flex items-center justify-start gap-[2px] border rounded-md pl-2 py-2 text-[6px] xs:text-[8px] sm:text-xs text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <FaInstagram className="text-purple-500  text-lg" />
              Sign Up with Instagram
            </button>
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              className="w-[46%] flex items-center justify-start gap-1 border rounded-md pl-2 py-2 text-[6px] xs:text-[8px] sm:text-xs text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <FcGoogle className="text-lg" />
              Sign Up with Google
            </button>
            {/* b2 */}
            <button
              type="button"
              className="w-[46%] flex items-center justify-start gap-1 border rounded-md pl-2 py-2 text-[6px] xs:text-[8px] sm:text-xs text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <FaGithub className="text-black text-lg" />
              Sign Up with Github
            </button>
          </div>
        </div>

      </section>
    </main>
  );
};

export default Login;
