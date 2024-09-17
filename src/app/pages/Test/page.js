import React from "react";
import { getAuthSession } from "@/app/utils/auth";
import SignInButton from "@/app/components/SignInButton";
import SignOutButton from "@/app/components/SignOutButton";

async function Test() {
  const session = await getAuthSession();

  return (
    <div className="">
      <p>Test</p>
      {session?.user ? (
        <>
          <p>{session.user.email}</p> {/* Displaying user name */}
          <SignOutButton />
        </>
      ) : (
        <SignInButton />
      )}
    </div>
  );
}

export default Test;
