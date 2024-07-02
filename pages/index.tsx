import { Navbar } from '@/components';

import Layout from './layout';

export default function Home() {
  return (
    <Layout>
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
    </Layout>
  );
}
