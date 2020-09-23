export default function Home() {
  return (
    <div>
      <header className="border-b">
        <div className="flex items-center justify-start text-gray-900">
          <p className="p-4 text-2xl font-bold text-blue-500">Posko</p>
        </div>
      </header>
      <main>
        <div className="p-4 space-y-20">
          <div className="space-y-2">
            <div className="py-2">
              <h1 className="text-4xl font-bold text-gray-800">
                Cakupan bantuan di posko saat ini
              </h1>
            </div>
            <div>
              <section className="text-gray-700 body-font">
                <div className="container px-5 py-8 mx-auto">
                  <div className="flex flex-wrap -m-4">
                    <div className="p-4 md:w-1/3">
                      <div className="flex flex-col h-full p-8 bg-gray-100 rounded-lg">
                        <div className="flex items-center mb-3">
                          <h2 className="text-2xl font-medium text-gray-900 title-font">
                            Erupsi Merapi 27 Mei 2010
                          </h2>
                        </div>
                        <div className="flex-grow mt-2">
                          <p className="inline-flex items-baseline">
                            <span className="text-xl font-semibold">27</span>
                            <span className="ml-2">Posko</span>
                          </p>
                          <p className="inline-flex items-baseline mt-2">
                            <span className="text-xl font-semibold text-red-500">
                              20%
                            </span>
                            <span className="ml-2">Bantuan terpenuhi</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 md:w-1/3">
                      <div className="flex flex-col h-full p-8 bg-gray-100 rounded-lg">
                        <div className="flex items-center mb-3">
                          <h2 className="text-2xl font-medium text-gray-900 title-font">
                            Anim tempor ut excepteur non 27 Mei 2010
                          </h2>
                        </div>
                        <div className="flex-grow mt-2">
                          <p className="inline-flex items-baseline">
                            <span className="text-xl font-semibold">27</span>
                            <span className="ml-2">Posko</span>
                          </p>
                          <p className="inline-flex items-baseline mt-2">
                            <span className="text-xl font-semibold text-yellow-500">
                              60%
                            </span>
                            <span className="ml-2">Bantuan terpenuhi</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 md:w-1/3">
                      <div className="flex flex-col h-full p-8 bg-gray-100 rounded-lg">
                        <div className="flex items-center mb-3">
                          <h2 className="text-2xl font-medium text-gray-900 title-font">
                            Sint nulla nulla qui tempor occaecat 27 Mei 2010
                          </h2>
                        </div>
                        <div className="flex-grow mt-2">
                          <p className="inline-flex items-baseline">
                            <span className="text-xl font-semibold">27</span>
                            <span className="ml-2">Posko</span>
                          </p>
                          <p className="inline-flex items-baseline mt-2">
                            <span className="text-xl font-semibold text-green-500">
                              90%
                            </span>
                            <span className="ml-2">Bantuan terpenuhi</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <footer className="text-gray-700 body-font">
        <div className="border-t border-gray-200">
          <div className="container flex flex-wrap items-center px-5 py-8 mx-auto">
            <div className="flex flex-wrap justify-center md:flex-no-wrap md:justify-start">
              <p className="mt-2 text-sm text-center text-gray-500 md:ml-6 md:mt-0 sm:text-left">
                Bitters chicharrones fanny pack
                <br className="hidden lg:block" />
                waistcoat green juice
              </p>
            </div>
            <span className="inline-flex justify-center w-full mt-6 lg:ml-auto lg:mt-0 md:justify-start md:w-auto">
              <a className="text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
        <div className="bg-gray-200">
          <div className="container flex flex-col flex-wrap px-5 py-4 mx-auto sm:flex-row">
            <p className="text-sm text-center text-gray-500 sm:text-left">
              © 2020 tailblocks —
              <a
                href="https://twitter.com/knyttneve"
                className="ml-1 text-gray-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                @knyttneve
              </a>
            </p>
            <span className="w-full mt-2 text-sm text-center text-gray-500 sm:ml-auto sm:mt-0 sm:w-auto sm:text-left">
              Enamel pin tousled raclette tacos irony
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
