import React from "react";

export default function Form() {
  return (
    <div>
      <h1 className="text-4xl font-semibold">Create an account</h1>
      <p className="font-medium text-lg mt-4">Fill in the form below</p>
      <div className="mt-8">
        <div>
          <label className='text-lg font-medium' htmlFor="email">Email</label>
          <input 
            className="w-full rounded-xl p-2 mt-1 text-black"
            placeholder="Enter your Email"
          />
        </div>
        <div>
          <label className='text-lg font-medium' htmlFor="username">Username</label>
          <input 
            className="w-full rounded-xl p-2 mt-1 text-black"
            placeholder="Enter your username"
          />
        </div>
        <div>
          <label className='text-lg font-medium' htmlFor="password">Password</label>
          <input 
            type='password'
            className="w-full rounded-xl p-2 mt-1 text-black"
            placeholder="Enter your password"
          />
        </div>
        <div>
        <label className='text-lg font-medium' htmlFor="password confirmation">Password confirmation</label>
          <input 
            type='password'
            className="w-full rounded-xl p-2 mt-1 text-black"
            placeholder="Retype your password"
          />
        </div>
        <div className="mt-8 flex flex-col gap-y-4">
          <button className="active:scale-[.98] py-3 rounded-xl bg-blue-700 text-lg font-bold">Sign Up</button>
        </div>
        <div className="mt-8 flex justify-center items-center">
          <p className="font-medium text-base">Already have an account?</p>
          <a href="/login">
            <button  className="text-blue-700 text-base font-medium ml-2">Login
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}