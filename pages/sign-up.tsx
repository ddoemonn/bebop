import React from 'react';

import { Navbar } from '@/components';

import Layout from './layout';

export default function SignUp() {
  return (
    <Layout>
      <Navbar isActive="sign-up" />
      Sign up
    </Layout>
  );
}
