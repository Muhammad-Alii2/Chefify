'use client';  // This marks the file as a Client Component
import React from 'react';
import { signOut } from 'next-auth/react';  // Import signOut function from next-auth
import SignInButton from '../components/SignInButton';

const UserInfo: React.FC<{ session: any }> = ({ session }) => {
  return (
    <div>
      {session?.user ? (   // Check if the user is signed in
        <div>
          <p>Welcome, {session.user.name}</p>  {/* Display user name */}
          <p>Email: {session.user.email}</p>     {/* Display user email */}
          
          {/* Sign Out Button */}
          <button
            onClick={() => signOut()}   // Trigger sign out
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <SignInButton />  // Show the sign-in button if no user is signed in
      )}
    </div>
  );
};

export default UserInfo;
