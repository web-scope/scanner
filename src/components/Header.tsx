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
      <header className="flex h-16 flex-row items-center justify-between bg-blue-700 px-4 text-white">
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
