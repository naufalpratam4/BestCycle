import AboutImage from "../../src/assets/about.png";
const AboutSection = () => {
  return (
    <>
      <section
        className="bg-white dark:bg-gray-900  scroll-page md:mt-32"
        id="about"
      >
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto lg:col-span-7 md:order-2">
            <div className="text-red-600 font-semibold">ABOUT US</div>
            <h1 className="max-w-2xl mb-4 text-xl font-extrabold tracking-tight leading-none md:text-2xl xl:text-3xl dark:text-white">
              Best<span className="text-red-600">Cycle </span> Memiliki Beberapa
              pelayanan yang menarik
            </h1>
            <p className="max-w-2xl mb-2 font-light text-gray-500 lg:mb-6 md:text-lg lg:text-md dark:text-gray-400">
              Best<span className="text-red-600">Cycle </span> hadir untuk
              memenuhi kebutuhan mobilitas Anda dengan berbagai layanan menarik
              yang mudah diakses dan terjangkau. Kami menawarkan:
            </p>

            <hr />

            <div className="pt-5 mb-3">
              <a href="#anjem" className="">
                <div className="flex mb-2 hover:bg-gray-100 md:py-2 hover:rounded-md  ">
                  <div>
                    <i class="fa-solid fa-motorcycle bg-red-500 text-red-200 rounded-full p-3 font-bold"></i>
                  </div>
                  <div className=" ms-3">
                    <div className="font-bold text-xl">Antar Jemput</div>
                    <div>
                      Jasa Antar Jemput BestCycle hadir untuk membantu Anda!
                      Kami menyediakan layanan antar jemput untuk berbagai
                      kebutuhan
                    </div>
                    <div className="flex items-center">
                      <div>
                        {" "}
                        <a href="#anjem" className="text-red-500">
                          Lihat Lebih Lengkap
                        </a>
                      </div>
                      <div>
                        <i class="fa-solid text-red-500 fa-angle-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </a>

              {/* Jastip */}
              <a href="#jastip">
                <div className="flex mb-3 hover:bg-gray-100 md:py-2 hover:rounded-md">
                  <div>
                    <i class="fa-solid fa-bowl-food bg-blue-500 text-blue-200 rounded-full p-3 font-bold"></i>
                  </div>
                  <div className=" ms-3">
                    <div className="font-bold text-xl">Jasa Titip</div>
                    <div>
                      Mie Gacoan lagi nge-hits banget ya? Tapi kamu lagi sibuk
                      dan gak sempat ke outletnya? Tenang aja, ada Jasa Titip
                      Mie Gacoan yang siap mengantarkan kelezatan pedasnya
                      sampai ke rumah kamu!
                    </div>
                    <div className="flex items-center">
                      <div>
                        <a href="#jastip" className="text-blue-500">
                          Lihat Lebih Lengkap
                        </a>
                      </div>
                      <div>
                        <i class="fa-solid text-blue-500 fa-angle-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </a>

              {/* Udang Keju */}
              <a href="#udangKeju">
                  <div className="flex hover:bg-gray-100 hover:rounded-md md:py-2">
                <div>
                  <i class="fa-solid fa-cheese bg-yellow-500 text-yellow-200 rounded-full p-3 font-bold"></i>
                </div>
                <div className=" ms-3">
                  <div className="font-bold text-xl">Udang Keju</div>
                  <div>
                    Cemilan gurih dan renyah dengan rasa keju yang lezat? Udang
                    Keju solusinya! Dibuat dari udang segar
                    pilihan dan keju berkualitas, camilan ini siap memanjakan
                    lidah Anda.
                  </div>
                  <div className="flex items-center text-yellow-500">
                    <a href="#udangKeju">Lihat Lebih Lengkap</a>
                    <div>
                      <i class="fa-solid  fa-angle-right"></i>
                    </div>
                  </div>
                </div>
              </div>
              </a>
            
            </div>

            <hr />
          </div>
          <div className="hidden lg:col-span-5 lg:flex md:order-1">
            <img
              src={AboutImage}
              alt="Hero Image"
              class="object-contain h-full w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
