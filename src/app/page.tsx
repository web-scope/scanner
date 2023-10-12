import { Typography } from '@mui/material';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <Typography variant="h4">Scanner app</Typography>

      <div>
        <Link href="/login" className="rounded-sm bg-blue-500 px-4 py-2 text-white">
          Login
        </Link>
      </div>
    </div>
  );
}
