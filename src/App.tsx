function App() {
  return (
    <div className="">
      {/* Navbar */}
      <nav className="flex justify-around bg-gray-100 items-center h-16 ">
        <div className="flex space-x-2 cursor-pointer hover:scale-105  items-center">
          <img src="https://img.icons8.com/color/48/dynamics-365.png" alt="logo"  className="w-8 h-8"/>
          <span className="font-bold text-xl md:text-2xl">Zarrin</span>
        </div>
        <div className="flex space-x-4 items-center">
          <span className="cursor-pointer text-xl hover:text-blue-500">Blog</span>
          <span className="cursor-pointer text-xl hover:text-blue-500">About</span>
          <img src="https://img.icons8.com/glyph-neue/50/search.png" alt="search" className="w-8 h-8 cursor-pointer hover:scale-90 transition-transform duration-200" />
          <span className="px-4 py-2 bg-green-300 hover:bg-green-400 transition-colors duration-200 cursor-pointer hover:text-accent-500 rounded-lg">Contact Us</span>
        </div>
      </nav>

      {/* Body Section */}
      <section className="w-full bg-blue-600 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12 py-10 md:py-16">
          {/* Text column */}
          <div className="w-full md:w-1/2">
            <span className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-medium tracking-wide ring-1 ring-white/25 backdrop-blur">
              Featured Post
            </span>

            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              How AI Will
              <br className="hidden sm:block" /> Change the Future
            </h1>

            <p className="mt-4 text-white/90 text-base sm:text-lg leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              obcaecati officiis nemo aperiam adipisci hic, doloremque qui
              quis! Itaque veniam aspernatur atque, ut sit quo consequuntur
              blanditiis at illum sapiente.
            </p>

            <div className="mt-6">
              <span
                className="cursor-pointer inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm sm:text-base font-semibold text-blue-600 shadow-lg shadow-black/10 ring-1 ring-white/60 transition hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent focus-visible:ring-white"
                aria-label="Read more about how AI will change the future"
              >
                Read More
                <svg
                  className="h-4 w-4 sm:h-5 sm:w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M5 12h14M13 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </div>

          {/* Image column */}
          <div className="w-full md:w-1/2">
            <div className="relative overflow-hidden rounded-xl bg-white/5 p-3 ring-1 ring-white/20">
              <img
                src="/Container.png"
                alt="AI concept illustration"
                loading="lazy"
                className="w-full h-auto max-h-[460px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
      
    </div>
  );
}

export default App;
