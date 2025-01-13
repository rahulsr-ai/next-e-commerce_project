"use client";

import React, { useReducer, useState } from "react";
import { Mail, Lock, User, ArrowRight, ShoppingBag } from "lucide-react";
import axios from "axios";

const SignIn = () => {
  const [email,setEmail]= useState("")
  const [password,setPassword]= useState("")

  const handleform = async (e) => {
    e.prevetDefault();
    try {
      const { data } = await axios.post("/api/auth/sign-in");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative">
      <div className="pt-16 pb-12 flex flex-col justify-center min-h-[calc(100vh-64px)]">
        <div className="sm:mx-auto sm:w-full sm:max-w-md mb-8 mt-8">
          <div className="flex justify-center">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="text-[#f5deb3]" size={32} />
              <span className="text-2xl font-bold text-white">StoreX</span>
            </div>
          </div>
        </div>

        <div className="sm:mx-auto sm:w-full sm:max-w-md px-4">
          <div className="bg-black py-8 px-4 shadow-2xl rounded-2xl sm:px-10 border border-white/10">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-white">Welcome Back</h2>
              <p className="mt-1 text-sm text-white/60">
                Sign in to your account
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleform}>
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white/80"
                >
                  Email address
                </label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-white/40" />
                  </div>
                  <input
                    onChange={(e) => {
                      const { name, value } = e.target;
                      dispatch({
                        ...state,
                        [name]: value,
                      });
                    }}
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none block w-full pl-10 pr-3 py-2.5 bg-black border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-white/80"
                >
                  Password
                </label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-white/40" />
                  </div>
                  <input
                    onChange={(e) => {
                      const { name, value } = e.target;
                      dispatch({
                        ...state,
                        [name]: value,
                      });
                    }}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full pl-10 pr-3 py-2.5 bg-black border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              {/* Remember me & Forgot password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-white/20 rounded bg-black"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-white/80"
                  >
                    Remember me
                  </label>
                </div>

                <a
                  href="#"
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-500 transition-colors duration-200"
                >
                  Forgot password?
                </a>
              </div>

              {/* Sign in button */}
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-indigo-500 transition-all duration-200"
              >
                <span className="absolute right-4 flex items-center">
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
                Sign in
              </button>

              {/* Sign up link */}
              <p className="mt-4 text-center text-sm text-white/60">
                Don't have an account?{" "}
                <a
                  href="/signup"
                  className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors duration-200"
                >
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;