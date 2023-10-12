import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col px-6 py-12 gap-4">
      <h1 className="text-4xl">Scanner app</h1>

      <div>
        <Link href="/login" className="bg-blue-500 text-white rounded-sm px-4 py-2">
          Login
        </Link>
      </div>
    </main>
  );
}
