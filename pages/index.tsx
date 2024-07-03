import { useState, useEffect } from 'react';

import Image from 'next/image';

import { Navbar } from '@/components';
import { useGetPopularTVShowsQuery } from '@/services/mediaApi';

import Layout from './layout';

export default function Home() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const { data } = useGetPopularTVShowsQuery({
    page: 2,
  });

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

      <section className="flex flex-col justify-center items-center flex-1 w-full relative ">
        <div
          className={`absolute z-0 transform transition-all duration-500 text-4xl flex items-center justify-center ${
            isHovered ? 'top-[20%] left-[10%] rotate-12 opacity-100 visible' : 'top-0 left-0 rotate-0 opacity-0 '
          }`}
        >
          <Image
            src={`https://image.tmdb.org/t/p/w500/${data?.results[0]?.poster_path}`}
            alt="poster"
            width={200}
            height={200}
            className="w-1/2 rounded-xl shadow-md shadow-purple-500"
          />
        </div>
        <div
          className={`absolute z-0 transform transition-all duration-500 text-4xl flex items-center justify-center ${
            isHovered ? 'top-[20%] right-[10%] -rotate-12 opacity-100 visible' : 'top-0 right-0 rotate-0 opacity-0 '
          }`}
        >
          <Image
            src={`https://image.tmdb.org/t/p/w500/${data?.results[1]?.poster_path}`}
            alt="poster"
            width={200}
            height={200}
            className="w-1/2 rounded-xl shadow-md shadow-purple-500"
          />
        </div>
        <div
          className={`absolute z-0 transform transition-all duration-500 text-4xl flex items-center justify-center ${
            isHovered ? 'bottom-[20%] left-[10%] -rotate-12  opacity-100 visible' : 'bottom-0 left-0 rotate-0 opacity-0'
          }`}
        >
          <Image
            src={`https://image.tmdb.org/t/p/w500/${data?.results[2]?.poster_path}`}
            alt="poster"
            width={200}
            height={200}
            className="w-1/2 rounded-xl shadow-md shadow-purple-500"
          />
        </div>
        <div
          className={`absolute z-0 transform transition-all duration-500 text-4xl flex items-center justify-center ${
            isHovered ? 'bottom-[20%] right-[10%] rotate-12 opacity-100 visible' : 'bottom-0 right-0 rotate-0 opacity-0'
          }`}
        >
          <Image
            src={`https://image.tmdb.org/t/p/w500/${data?.results[3]?.poster_path}`}
            alt="poster"
            width={200}
            height={200}
            className="w-1/2 rounded-xl shadow-md shadow-purple-500"
          />
        </div>

        <div className="relative flex flex-col justify-center items-center w-1/2 ">
          <input
            placeholder="Search for your favorite media..."
            type="text"
            className="shadow-md w-11/12 m-5 p-2 rounded-xl focus:outline-double outline-emerald-600 relative z-10"
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
