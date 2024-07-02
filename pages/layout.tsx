import { Dosis } from 'next/font/google';

import { Navbar } from '@/components';
const dosis = Dosis({ subsets: ['latin'] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={` min-h-screen flex flex-col items-center ${dosis.className} bg-gradient-to-r from-indigo-100 from-10% via-sky-100 via-50% to-emerald-100 to-90%`}
    >
      <Navbar />
      {children}
    </div>
  );
}
