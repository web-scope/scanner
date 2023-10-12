import { Typography } from '@mui/material';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <Typography variant='h4'>Scanner app</Typography>

      <div>
        <Link href="/login" className="bg-blue-500 text-white rounded-sm px-4 py-2">
          Login
        </Link>
      </div>
    </div>
  );
}
