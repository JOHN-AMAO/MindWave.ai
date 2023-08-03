"use client";

import { UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <div
      className='fixed w-full flex justify-between
  items-center py-2 px-4 border-b border-primary/10 bg-secondary'
    >
      <div className='flex items-center'>
        <Menu className='block md:hidden' />
      </div>

      <UserButton />
    </div>
  );
};

export default Navbar;
