/* eslint-disable react/no-string-refs */
"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, } from "./ui/navbar-menu";
import { cn } from ".././utils/cn";

import Link from 'next/link';

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
     
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <><div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <HoveredLink href="./../">Home</HoveredLink>


        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="./../pages/Recipe">Generate a Recipe</HoveredLink>
            <HoveredLink href="./../pages/SearchRecipe">Search Recipe</HoveredLink>
            <HoveredLink href="./../pages/NewsUpdate">Get News Updates</HoveredLink>

          </div>
        </MenuItem>
        <Link href="./../pages/Chatbox">

          <MenuItem setActive={setActive} active={active} item="ChatBox" />

        </Link>
        <Link href="../pages/About">

          <MenuItem setActive={setActive} active={active} item="About us" />

        </Link>




      </Menu>




    </div>

      
      
      </>
  );
}