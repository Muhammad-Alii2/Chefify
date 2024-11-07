import React from "react";
import { cn } from "@/app/utils/cn";
import Link from "next/link";
import SignInButton from "@/app/components/SignInButton";
import SignOutButton from "@/app/components/SignOutButton"; 
import { getAuthSession } from "@/app/utils/auth"; 
import UserInfo from "@/app/components/UserInfo";

export const NavbarDemo = async ({ className }) => {
  // Get the session synchronously
  const session = await getAuthSession();
  const isLoggedIn = !!session; // Check if the session exists

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Contact", link: "../pages/contactus" },
    { name: "About", link: "../pages/About" },
    { name: "Gallery", link: "../pages/Gallery" },
  ];

  return (
    <div
      initial={{ opacity: 1, y: 0 }} // Initial position stays at the top
      className={cn(
        "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4",
        className
      )}
    >
      {navItems.map((navItem, idx) => (
        <Link
          key={`link=${idx}`}
          href={navItem.link}
          className={cn(
            "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
          )}
        >
          <span className="text-sm">{navItem.name}</span>
        </Link>
      ))}
      <div className="flex items-center space-x-2">
        {isLoggedIn ? (
          <>
            <UserInfo session={session} /> {/* Display user info when logged in */}
          </>
        ) : (
          <SignInButton />
        )}
      </div>
    </div>
  );
};
