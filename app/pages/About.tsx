// pages/about.tsx

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      
      <main className="container mx-auto p-6">
        <h1 id="about" className="text-4xl font-bold text-black text-center mt-20">About Me</h1>
        <p className="mt-6 text-lg text-gray-700 text-center max-w-2xl mx-auto">
        Saya adalah anak pertama dari dua bersaudara. Saya sangat menyukai makanan pedas dan manis, kombinasi yang selalu membuat hari saya lebih berwarna. Saya juga memiliki seorang sahabat dekat yang saat ini sedang menimba ilmu di pondok pesantren, meskipun jauh, kami tetap menjaga hubungan baik.
        </p>
        <p className="mt-4 text-lg text-gray-700 text-center max-w-2xl mx-auto">
        Saya juga menyukai permainan basket di waktu luang, yang membantu menjaga keseimbangan fisik dan mental saya. Ketika saya tidak sedang bermain basket, saya biasanya menghabiskan waktu dengan menonton film, bermain video game, atau merapikan barang-barang yang menurut saya berantakan dan membuat saya merasa stres.
        </p>
        {/* Interests Section */}
        <div>
          <h2 className="text-4xl font-bold text-black text-center mt-10">Things I Like To Do</h2>
          <div className="flex flex-wrap justify-center gap-10 mt-6">
            <div className="flex flex-col items-center text-center">
              <span role="img" aria-label="basketball" className="text-4xl">🏀</span>
              <p className="text-lg">Playing Basketball</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <span role="img" aria-label="travelling" className="text-4xl">✈️</span>
              <p className="text-lg">Travelling</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <span role="img" aria-label="music" className="text-4xl">🎶</span>
              <p className="text-lg">Listen To Music</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <span role="img" aria-label="movies" className="text-4xl">🎬</span>
              <p className="text-lg">Watch Movies</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <span role="img" aria-label="reading" className="text-4xl">📖</span>
              <p className="text-lg">Read The Novel</p>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
};

export default AboutPage;
