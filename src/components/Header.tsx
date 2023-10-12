'use client';
import { useState } from 'react';
import DrawerMenu from './DrawerMenu';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <header className="flex flex-row justify-between items-center bg-blue-700 px-4 text-white h-16">
        <Link href="/" className="text-lg text-white no-underline hover:underline">
          Scanner App
        </Link>

        <IconButton onClick={() => setIsDrawerOpen(true)}>
          <MenuIcon color="action" />
        </IconButton>
      </header>

      <DrawerMenu isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen}></DrawerMenu>
    </>
  );
}
