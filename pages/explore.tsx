import React from 'react';

import { Navbar } from '@/components';

import Layout from './layout';

export default function App() {
  return (
    <Layout>
      <Navbar isActive="explore" />
      Explore
    </Layout>
  );
}
