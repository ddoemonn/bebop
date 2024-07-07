import React from 'react';

import { Navbar } from '@/components';
import Row from '@/components/Row';
import Layout from '@/pages/layout';
import { useGetPopularMoviesQuery } from '@/services/mediaApi';

export default function App() {
  const { data: popularMoviesData } = useGetPopularMoviesQuery({ page: 1 });

  return (
    <Layout>
      <Navbar isActive="explore" />

      <main className="relative pb-24 lg:space-y-24 px-8">
        <section className="md:space-y-24">
          <Row
            title="Trending Now"
            movies={popularMoviesData?.results || []}
          />
        </section>
      </main>
    </Layout>
  );
}
