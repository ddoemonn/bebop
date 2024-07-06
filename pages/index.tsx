import { useState, useEffect } from 'react';

import Image from 'next/image';

import { Navbar } from '@/components';
import { useGetBooksQuery } from '@/services/bookApi';
import { useGetPopularMoviesQuery, useGetPopularTVShowsQuery } from '@/services/mediaApi';
import { useGetPlaylistQuery } from '@/services/musicApi';

import Layout from './layout';

export default function Home() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [hoverType, setHoverType] = useState<string | null>(null);
  const [currenColor, setCurrentColor] = useState<string | null>(null);

  const { data: popularTVShowsData } = useGetPopularTVShowsQuery({ page: 1 });
  const { data: popularMoviesData } = useGetPopularMoviesQuery({ page: 1 });
  const { data: booksData } = useGetBooksQuery();
  const { data: musicData } = useGetPlaylistQuery();

  console.log(musicData?.tracks.items[0]);

  const getImages = () => {
    if (hoverType === 'movie') {
      return popularMoviesData?.results.slice(0, 4).map(movie => `https://image.tmdb.org/t/p/w500/${movie.poster_path}`);
    } else if (hoverType === 'tvshow') {
      return popularTVShowsData?.results.slice(0, 4).map(show => `https://image.tmdb.org/t/p/w500/${show.poster_path}`);
    } else if (hoverType === 'book' && booksData) {
      return booksData.items.slice(0, 4).map(book => `${book.volumeInfo.imageLinks.thumbnail}&fife=w500-h750`);
    } else {
      return musicData?.tracks.items.slice(0, 4).map(item => item.track.album.images[0].url);
    }
  };

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

  const images = getImages();

  return (
    <Layout>
      <Navbar isActive="home" />
      <section className="flex flex-col justify-center items-center flex-1 w-full relative">
        <div
          className={`absolute z-0 transform transition-all duration-500 text-4xl flex items-center justify-center ${
            !isHovered ? 'top-[30%] left-[20%] rotate-12 opacity-100 visible' : 'top-0 left-0 rotate-0 opacity-0 '
          }`}
        >
          📺
        </div>
        <div
          className={`absolute z-0 transform transition-all duration-500 text-4xl flex items-center justify-center ${
            !isHovered ? 'top-[30%] right-[20%] -rotate-12 opacity-100 visible' : 'top-0 right-0 rotate-0 opacity-0 '
          }`}
        >
          🎬
        </div>
        <div
          className={`absolute z-0 transform transition-all duration-500 text-4xl flex items-center justify-center ${
            !isHovered ? 'bottom-[30%] left-[20%] -rotate-12  opacity-100 visible' : 'bottom-0 left-0 rotate-0 opacity-0'
          }`}
        >
          📚
        </div>
        <div
          className={`absolute z-0 transform transition-all duration-500 text-4xl flex items-center justify-center ${
            !isHovered ? 'bottom-[30%] right-[20%] rotate-12 opacity-100 visible' : 'bottom-0 right-0 rotate-0 opacity-0'
          }`}
        >
          🎵
        </div>

        {images?.map((image, index) => (
          <div
            key={index}
            className={`absolute z-0 transform transition-all duration-500 text-4xl flex items-center justify-center ${
              isHovered
                ? index === 0
                  ? 'top-[20%] left-[10%] rotate-12 opacity-100 visible'
                  : index === 1
                    ? 'top-[20%] right-[10%] -rotate-12 opacity-100 visible'
                    : index === 2
                      ? 'bottom-[20%] left-[10%] -rotate-12 opacity-100 visible'
                      : 'bottom-[20%] right-[10%] rotate-12 opacity-100 visible'
                : index === 0
                  ? 'top-[20%] left-[10%] rotate-0 opacity-0'
                  : index === 1
                    ? 'top-[20%] right-[10%] rotate-0 opacity-0'
                    : index === 2
                      ? 'bottom-[20%] left-[10%] rotate-0 opacity-0'
                      : 'bottom-[20%] right-[10%] rotate-0 opacity-0'
            }`}
          >
            <Image
              src={image}
              alt="poster"
              width={150}
              height={190}
              className={`w-8/12 rounded-xl shadow-sm shadow-${currenColor}-500`}
            />
          </div>
        ))}

        <div className="relative flex flex-col justify-center items-center w-1/2">
          <input
            placeholder="Search for your favorite media..."
            type="text"
            className="shadow-md w-11/12 m-5 p-2 rounded-xl focus:outline-double outline-emerald-600 relative z-10"
          />
          <div className="text-2xl text-center [word-spacing:0.2rem] relative z-10">
            Dive into a world where you can rate and explore the best{' '}
            <span
              className="[word-spacing:0] inline underline font-semibold decoration-blue-500 hover:text-blue-500 hover:decoration-black decoration-wavy hover:cursor-pointer"
              onMouseEnter={() => {
                setHoveredIndex(0);
                setHoverType('movie');
                setCurrentColor('blue');
              }}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              films
            </span>
            ,{' '}
            <span
              className="[word-spacing:0] inline underline font-semibold decoration-indigo-500 hover:text-indigo-500 hover:decoration-black decoration-wavy  hover:cursor-pointer"
              onMouseEnter={() => {
                setHoveredIndex(1);
                setHoverType('tvshow');
                setCurrentColor('indigo');
              }}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              series
            </span>
            ,{' '}
            <span
              className="[word-spacing:0] inline underline font-semibold decoration-emerald-500 hover:text-emerald-500 hover:decoration-black decoration-wavy hover:cursor-pointer"
              onMouseEnter={() => {
                setHoveredIndex(2);
                setHoverType('book');
                setCurrentColor('emerald');
              }}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              books
            </span>{' '}
            and{' '}
            <span
              className="[word-spacing:0] inline underline font-semibold decoration-rose-500 hover:text-rose-500 hover:decoration-black decoration-wavy hover:cursor-pointer"
              onMouseEnter={() => {
                setHoveredIndex(3);
                setHoverType('music');
                setCurrentColor('rose');
              }}
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

const emerald500 = 'shadow-emerald-500';
const blue500 = 'shadow-blue-500';
const indigo500 = 'shadow-indigo-500';
const rose500 = 'shadow-rose-500';
