import React, { useState } from 'react';

import Image from 'next/image';

import { Navbar } from '@/components';
import Layout from '@/pages/layout';
import { useGetPopularMoviesQuery } from '@/services/mediaApi';

export default function App() {
  const { data: popularMoviesData } = useGetPopularMoviesQuery({ page: 1 });
  const [startIndex, setStartIndex] = useState(0);

  return (
    <Layout>
      <Navbar isActive="explore" />
      <main>
        <section>
          <h1 className="ml-10">Popular Movies</h1>
          <div className="flex flex-wrap justify-center">
            {popularMoviesData?.results.slice(startIndex, startIndex + 10).map(movie => (
              <div
                key={movie.id}
                className="m-3 rounded-lg"
              >
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.original_name}
                  width={150}
                  height={200}
                  className="rounded-lg"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setStartIndex(prevIndex => prevIndex - 1)}
              disabled={startIndex === 0}
              className="bg-gray-800 text-white px-4 py-2 rounded-md mr-2"
            >
              Previous
            </button>
            <button
              onClick={() => setStartIndex(prevIndex => prevIndex + 1)}
              disabled={!popularMoviesData || !popularMoviesData.results || startIndex + 10 >= popularMoviesData.results.length}
              className="bg-gray-800 text-white px-4 py-2 rounded-md"
            >
              Next
            </button>
          </div>
        </section>
      </main>
    </Layout>
  );
}
