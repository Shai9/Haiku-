import React from "react";

export default function Form() {
  return (
    <div>
      <h1 className="text-4xl font-semibold">Welcome Back</h1>
      <p className="font-medium text-lg mt-4">Enter your details below</p>
      <div className="mt-8">
        <div>
          <label className='text-lg font-medium' htmlFor="email">Email</label>
          <input 
            className="w-full rounded-xl p-2 mt-1 "
            placeholder="Enter your Email"
          />
        </div>
        <div>
        <label className='text-lg font-medium' htmlFor="password">Password</label>
          <input 
            className="w-full rounded-xl p-2 mt-1 "
            placeholder="Enter your password"
          />
        </div>
        <div className="mt-8 flex justify-between items-center">
          <div>
            <input type="checkbox"
            id="remember"
            />
            <label className="ml-2 font-medium text-base" htmlFor="remember">Remember for 30 days</label>
          </div>
          <button className="font-medium pl-3 text-base text-blue-700">Forgot password</button>
        </div>
        <div className="mt-8 flex flex-col gap-y-4">
          <button className="active:scale-[.98] py-3 rounded-xl bg-blue-700 text-lg font-bold">Sign In</button>
        </div>
        <div className="mt-8 flex justify-center items-center">
          <p className="font-medium text-base">Don't Have an account?</p>
          <a href="/signup">
            <button  className="text-blue-700 text-base font-medium ml-2">SignUp
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}