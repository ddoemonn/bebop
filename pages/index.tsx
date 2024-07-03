import { useState, useEffect } from 'react';

import { Navbar } from '@/components';

import Layout from './layout';

export default function Home() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (hoveredIndex !== null) {
      timer = setTimeout(() => {
        setIsHovered(true);
      }, 300);
    } else {
      setIsHovered(false);
    }
    return () => clearTimeout(timer);
  }, [hoveredIndex]);

  return (
    <Layout>
      <Navbar isActive="home" />

      <section className="flex flex-col justify-center items-center flex-1 w-1/2 relative">
        <div className="relative p-10">
          <div
            className={`absolute z-0 transform transition-all duration-500 text-4xl ${
              isHovered ? 'top-0 left-0 rotate-12 opacity-100 visible' : 'top-10 left-10 rotate-0 opacity-0 invisible'
            }`}
          >
            🎬
          </div>
          <div
            className={`absolute z-0 transform transition-all duration-500 text-4xl ${
              isHovered ? 'top-0 right-0 rotate-12 opacity-100 visible' : 'top-10 right-10 rotate-0 opacity-0 invisible'
            }`}
          >
            📚
          </div>
          <div
            className={`absolute z-0 transform transition-all duration-500 text-4xl ${
              isHovered ? 'bottom-0 left-0 rotate-12 opacity-100 visible' : 'bottom-10 left-10 rotate-0 opacity-0 invisible'
            }`}
          >
            🎵
          </div>
          <div
            className={`absolute z-0 transform transition-all duration-500 text-4xl ${
              isHovered ? 'bottom-0 right-0 rotate-12 opacity-100 visible' : 'bottom-10 right-10 rotate-0 opacity-0 invisible'
            }`}
          >
            📺
          </div>

          <input
            placeholder="Search for your favorite media..."
            type="text"
            className="shadow-md w-full m-5 p-2 rounded-xl focus:outline-double outline-emerald-600 relative z-10"
          />
          <div className="text-2xl text-center [word-spacing:0.2rem] relative z-10">
            Dive into a world where you can rate and explore the best{' '}
            <span
              className="[word-spacing:0] inline underline font-semibold decoration-blue-500 decoration-wavy hover:cursor-pointer"
              onMouseEnter={() => setHoveredIndex(0)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              films
            </span>
            ,{' '}
            <span
              className="[word-spacing:0] inline underline font-semibold decoration-indigo-500 decoration-wavy hover:cursor-pointer"
              onMouseEnter={() => setHoveredIndex(1)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              series
            </span>
            ,{' '}
            <span
              className="[word-spacing:0] inline underline font-semibold decoration-emerald-500 decoration-wavy hover:cursor-pointer"
              onMouseEnter={() => setHoveredIndex(2)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              books
            </span>{' '}
            and{' '}
            <span
              className="[word-spacing:0] inline underline font-semibold decoration-rose-500 decoration-wavy hover:cursor-pointer"
              onMouseEnter={() => setHoveredIndex(3)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              music
            </span>
            . Connect with like-minded enthusiasts, share your reviews, and discover new favorites together!
          </div>
        </div>
      </section>
    </Layout>
  );
}
