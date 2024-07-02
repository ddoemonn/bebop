import Image from 'next/image';

import { Dosis } from 'next/font/google';

import { Navbar } from '@/components';
import image from '@/public/image.png';
const inter = Dosis({ subsets: ['latin'] });

export default function Home() {
  return (
    <main
      className={` min-h-screen flex flex-col items-center ${inter.className} bg-gradient-to-r from-indigo-300 from-10% via-sky-300 via-50% to-emerald-300 to-90%`}
    >
      <Navbar />
      <section className="flex flex-col justify-center items-center flex-1 w-1/2">
        <input
          placeholder="Search for your favorite media..."
          type="text"
          className="shadow-md w-full m-5 p-2 rounded-xl focus:outline-double outline-emerald-600"
        />
        <p className="text-2xl text-center">
          Dive into a world where you can rate and explore the best <strong className="italic"> films </strong>, <strong className="italic"> series </strong>,{' '}
          <strong className="italic"> books </strong> and
          <strong className="italic"> music </strong>. Connect with like-minded enthusiasts, share your reviews, and discover new favorites together!
        </p>
      </section>
    </main>
  );
}
