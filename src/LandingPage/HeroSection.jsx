import React from 'react';
import HeroImg from '../../public/assets/hero.png';
function HeroSection() {
  return (
    <>
      <section id='#'
        className="bg-white dark:bg-gray-900 md:pt-10 "
        style={{ height: "90vh" }}
      >
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">

          <div className="mr-auto place-self-center lg:col-span-7 order-2 md:order-2 order:2">
            <h1 className="max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-4xl dark:text-white">
              Jangan Buang Waktu Di Jalan, Pesan Best
              <span className="text-red-600">Cycle </span>Sekarang!
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-md dark:text-gray-400">
              Best<span className="text-red-600">Cycle </span> adalah solusi
              mobilitas terpercaya di Semarang. Kami menyediakan berbagai
              layanan ojek motor, antar makanan, Jasa Titip Gacoan dan masih
              banyak lagi. Nikmati tarif murah, promo menarik, dan kemudahan
              pembayaran dengan Best<span className="text-red-600">Cycle </span>
              . Driver kami profesional, ramah, dan selalu siap mengantarkan
              Anda kemanapun Anda pergi.
            </p>

            <a
              href="#"
              className="bg-red-600 inline-flex items-center justify-center md:px-5 md:py-3 px-3 py-2 text-base font-medium text-center text-white border border-gray-300 rounded-lg hover:bg-red-500 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              <div className="flex items-center justify-center">
                <i class="fa-brands fa-whatsapp me-2"></i>
                <div className='text-sm'>Pesan Sekarang</div>
              </div>
            </a>
          </div>
          {/* gambar */}
          <div className="order:1 md:order-1 md:w-8/12 lg:w-full w-10/12  lg:mt-0 lg:col-span-5 lg:flex">
            <img src= {HeroImg} alt="Hero Image" />
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
