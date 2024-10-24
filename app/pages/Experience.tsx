const Experience = () => {
    return (
      <section className="container mx-auto p-4 flex flex-col items-center" id="experience">
        <h1 className="text-5xl font-bold text-black mb-10">Experiences</h1>
        
        <div className="relative border-l-4 border-gray-300 max-w-4xl">
            {/* Timeline Item 1 */}
          <div className="mb-12 flex items-center">
            {/* <div className="w-40 text-yellow-500 font-semibold text-2xl text-right pr-4">2017-2018</div>  //opsional mau make tahun atau engga */}
            <div className="ml-10 bg-gray-100 p-6 rounded-lg shadow-lg w-full">
              <h2 className="text-2xl font-bold text-blue-700">Prestasi Akademik</h2>
                <p className="text-lg text-gray-700">Selama masa pendidikan, saya berhasil mencapai prestasi akademik yang luar biasa dengan meraih ranking 1 
                secara konsisten dari kelas 3 hingga kelas 5 SD, serta kembali meraih peringkat 1 di kelas 9 SMP. 
                Penghargaan ini tidak hanya mencerminkan dedikasi saya dalam belajar, tetapi juga menunjukkan kemampuan 
                saya dalam menjaga performa akademik di tengah berbagai aktivitas lainnya.
                </p>
            </div>
            <div className="absolute w-4 h-4 bg-blue-800 rounded-full -left-2.5"></div>
          </div>
  
             {/* Timeline Item 2 */}
          <div className="mb-12 flex items-center">
            {/* <div className="w-40 text-yellow-500 font-semibold text-2xl text-right pr-4">2017-2018</div>  //opsional mau make tahun atau engga */}
            <div className="ml-10 bg-gray-100 p-6 rounded-lg shadow-lg w-full">
              <h2 className="text-2xl font-bold text-blue-700">Prestasi Olahraga</h2>
                <p className="text-lg text-gray-700">Selain prestasi akademik, saya juga aktif dalam kegiatan olahraga. Saya berpartisipasi dalam berbagai kompetisi 
                basket, seperti lomba 3x3 basketball di Lapangan Banteng dan 5x5 basketball di Lapangan BMX. Kegiatan ini mengajarkan 
                saya tentang kerja sama tim, disiplin, dan bagaimana menghadapi tekanan di lapangan.
                </p>
            </div>
            <div className="absolute w-4 h-4 bg-blue-800 rounded-full -left-2.5"></div>
          </div>

            {/* Timeline Item 3 */}
          <div className="mb-12 flex items-center">
            {/* <div className="w-40 text-yellow-500 font-semibold text-2xl text-right pr-4">2017-2018</div>  //opsional mau make tahun atau engga */}
            <div className="ml-10 bg-gray-100 p-6 rounded-lg shadow-lg w-full">
              <h2 className="text-2xl font-bold text-blue-700">Prestasi Organisasi</h2>
                <p className="text-lg text-gray-700">Tidak hanya itu, saya juga aktif dalam kegiatan organisasi. Salah satu pencapaian yang saya banggakan adalah 
                ketika saya meraih juara harapan 1 dalam lomba PMR di Walikota Jakarta Pusat. Pengalaman ini memperkaya kemampuan 
                saya dalam bekerja sama dengan orang lain dan memberikan kontribusi dalam situasi darurat.
                </p>
            </div>
            <div className="absolute w-4 h-4 bg-blue-800 rounded-full -left-2.5"></div>
          </div>

            {/* Timeline Item 4 */}
          <div className="mb-12 flex items-center">
            {/* <div className="w-40 text-yellow-500 font-semibold text-2xl text-right pr-4">2017-2018</div>  //opsional mau make tahun atau engga */}
            <div className="ml-10 bg-gray-100 p-6 rounded-lg shadow-lg w-full">
              <h2 className="text-2xl font-bold text-blue-700">Prestasi Seni</h2>
                <p className="text-lg text-gray-700">Saya pernah ikut lomba nari di TMII, membawakan tari Nirmala. Pengalaman ini memberikan kesempatan untuk mengekspresikan diri 
                melalui seni dan meningkatkan rasa percaya diri saya di depan publik.
                </p>
            </div>
            <div className="absolute w-4 h-4 bg-blue-800 rounded-full -left-2.5"></div>
          </div>

        </div>
      </section>
    );
  };
  
  export default Experience;
  