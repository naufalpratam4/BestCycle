const AnjemSection = () => {
  return (
    <>
      <div className="min-h-screen " id="anjem">
        <section className="bg-white dark:bg-gray-900">
          <div className=" px-4 mx-auto max-w-screen-xl pt-5 lg:px-6 ">
            <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Introduction Our Driver
              </h2>
              <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
                Dengan mengutamakan keselamatan dan kenyamanan pengguna, kami
                siap mengantarkan anda ke tujuan yang diinginkan.
              </p>
            </div>
            <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
              <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                    alt="Bonnie Avatar"
                  />
                </a>
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="#">Naufal Darma</a>
                  </h3>
                  <span className="text-gray-500 dark:text-gray-400">
                    <i class="fa-solid fa-motorcycle"></i> Beat
                  </span>
                  <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                    Driver Cowo
                  </p>
                  <ul className="flex space-x-4 sm:mt-0">
                    <li>
                      <a
                        href="#"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      >
                        <i class="fa-brands fa-instagram"></i>
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      >
                        <i class="fa-brands fa-github"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      >
                        <i class="fa-brands fa-whatsapp"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                    alt="Jese Avatar"
                  />
                </a>
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="#">Roihanah Distya Pramesthi</a>
                  </h3>
                  <span className="text-gray-500 dark:text-gray-400">CTO</span>
                  <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                    Driver Cewe
                  </p>
                  <ul className="flex space-x-4 sm:mt-0">
                    <li>
                      <a
                        href="#"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      >
                        <i class="fa-brands fa-instagram"></i>
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      >
                        <i class="fa-brands fa-github"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      >
                        <i class="fa-brands fa-whatsapp"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default AnjemSection;
