import { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('Blog');

  const handleSelect = (item: string) => {
    setSelected(item);
    setIsOpen(false);
  };

  return (
    <div className="">
      {/* Navbar */}
            {/* Navbar */}
      <nav className="flex justify-between items-center bg-gray-100 h-16 px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2 cursor-pointer hover:scale-105">
          <img src="https://img.icons8.com/color/48/dynamics-365.png" alt="logo" className="w-8 h-8" />
          <span className="font-bold text-xl md:text-2xl">Zarrin</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <span className="cursor-pointer text-xl hover:text-blue-500" onClick={() => handleSelect('Blog')}>Blog</span>
          <span className="cursor-pointer text-xl hover:text-blue-500" onClick={() => handleSelect('About')}>About</span>
          <img src="https://img.icons8.com/glyph-neue/50/search.png" alt="search" className="w-8 h-8 cursor-pointer hover:scale-90 transition-transform duration-200" />
          <span className="px-4 py-2 bg-green-300 hover:bg-green-400 transition-colors duration-200 cursor-pointer rounded-lg" onClick={() => handleSelect('Contact Us')}>Contact Us</span>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </div>
      </nav>

      {/* Mobile Menu (Sidebar) with Smooth Animation */}
      <div className={`fixed top-16 right-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-4 flex flex-col space-y-4">
          <span className="cursor-pointer hover:text-blue-500 text-lg p-2" onClick={() => handleSelect('Blog')}>Blog</span>
          <span className="cursor-pointer hover:text-blue-500 text-lg p-2" onClick={() => handleSelect('About')}>About</span>
          <span className="cursor-pointer hover:text-blue-500 text-lg p-2" onClick={() => handleSelect('Contact Us')}>Contact Us</span>
        </div>
      </div>

      {/* Overlay when sidebar is open */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}


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


    <section className="bg-gray-100 relative text-gray-800 py-10 flex flex-col items-center">
  {/* Image */}
  <div className="w-full lg:w-4/5 rounded-lg overflow-hidden shadow-lg">
    <img 
      src="/img.png" 
      alt="photo" 
      className="w-full h-auto object-cover" 
    />
  </div>

  {/* Card */}
  <div className="
    w-full lg:w-4/5 bg-white rounded-lg shadow-lg p-6 mt-6
    xl:absolute xl:right-0 xl:mx-auto  xl:-bottom-20
  ">
    <span className="text-xs uppercase text-gray-500 tracking-wide">Development | 16 March 2023</span>
    <h1 className="mt-2 text-2xl font-semibold leading-tight">
      How to make a Game look more attractive with New VR & AI Technology
    </h1>
    <p className="mt-2 text-gray-600">
      Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it’s publishing state-of-the-art research, building helpful products or developing tools and resources that enable others, we’re committed to making AI accessible to everyone.
    </p>
    <button className="mt-4 px-5 py-2 border border-purple-500 text-purple-500 rounded hover:bg-purple-50 transition">
      Read More
    </button>
  </div>
</section>


    <section className="h-screen">
      
    </section>

      
    </div>
  );
}

export default App;
