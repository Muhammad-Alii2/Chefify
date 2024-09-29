"use client";
import { signIn } from "next-auth/react";
import React from "react";

const SignInButton = () => {
  return (
    <div>
      <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full hover:bg-green-500"
        onClick={() => {
          signIn("google");
        }}
      >
        <span>Log In</span>
       
      </button>
    </div>
  );
};

export default SignInButton;
