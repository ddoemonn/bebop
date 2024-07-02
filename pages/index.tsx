import { Navbar } from '@/components';

import Layout from './layout';

export default function Home() {
  return (
    <Layout>
      <Navbar isActive="home" />
      <section className="flex flex-col justify-center items-center flex-1 w-1/2">
        <input
          placeholder="Search for your favorite media..."
          type="text"
          className="shadow-md w-full m-5 p-2 rounded-xl focus:outline-double outline-emerald-600"
        />
        <p className="text-2xl text-center">
          Dive into a world where you can rate and explore the best
          <div className=" ml-2 inline-flex font-semibold justify-center gap-3">
            <p> films 📽️</p> <p> series 🍿</p> <p>books 📚</p> and <p>music 🎧</p>
          </div>
          Connect with like-minded enthusiasts, share your reviews, and discover new favorites together!
        </p>
      </section>
    </Layout>
  );
}
