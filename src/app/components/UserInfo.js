'use client';
import React, { useState, useEffect, useRef } from 'react';
import SignOutButton from "@/app/components/SignOutButton";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const UserAvatar = ({ session }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleAvatarClick = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {session?.user ? (
        <div>
          <Stack direction="row" spacing={2}>
            <Avatar
              alt={session.user.name}
              src={session.user.image || "https://via.placeholder.com/150"}
              className="cursor-pointer hover:z-10 focus:z-10"
              onClick={handleAvatarClick}
            />
          </Stack>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-black bg-opacity-80 border border-gray-700 rounded-lg shadow-lg z-20">
              <div className="p-4">
                <p className="text-lg font-medium text-white mb-1">{session.user.name}</p>
                <p className="text-sm text-gray-300">{session.user.email}</p>
              </div>
                <SignOutButton />
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default UserAvatar;
