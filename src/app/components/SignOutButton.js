"use client";
import { signOut } from "next-auth/react";
import React from "react";

const SignOutButton = ({ user }) => {
  return (
    <div className="flex justify-end pr-4 pb-4">
      <button
        className="px-6 py-2 text-sm text-white bg-gray-800 rounded-lg hover:bg-red-600 transition-colors duration-200"
        onClick={() => {
          signOut();
        }}
      >
        <span>Log Out</span>
      </button>
    </div>
  );
};

export default SignOutButton;
