// components/Home.tsx

import Image from 'next/image';
import Navbar from './Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      
      <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4 bg-white">
        <div className="text-center">
          <Image
            src="/feb.jpg" // Pastikan gambar ini ada di folder public
            alt="Foto Feby"
            width={256}
            height={256}
            className="rounded-full object-cover mx-auto mb-4"
          />
          <h1 className="text-4xl font-bold text-black mb-2">I&apos;am Febyyy</h1>
          <p className="font marker: text-ellipsis text-2xl text-gray-700 mb-4">
          Halo, saya Diva Feby Aulia Putri, pelajar SMK Negeri 21 Jakarta. Saya antusias mengembangkan diri dalam berbagai bidang, terutama melalui olahraga seperti basket, badminton, dan bersepeda. Di waktu luang, saya juga senang membuat sketsa untuk menyalurkan kreativitas dan menjaga keseimbangan diri.
          </p>
          <a href="/about"
            className="px-6 py-2 text-white bg-blue-800 rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-blue-300">
            Contact me
          </a>
        </div>
      </main>
    </div>
  );
};

export default Home;
