import { useState } from 'react';
import Post from './Post';
import Navbar from './Navbar';


function Blog() {
  




  return (
    <>
      <Navbar />

      {/* Body Section */}
<section className="w-full bg-gradient-to-br from-gray-50 mt-10 via-blue-50 to-indigo-50">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16 py-12 sm:py-16 lg:py-20">
      {/* Text column */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-xs sm:text-sm font-medium tracking-wide text-blue-700 ring-1 ring-blue-200 shadow-sm">
           Featured Post
        </span>

        <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight text-gray-900">
          How AI Will
          <br className="hidden sm:block" /> 
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Change the Future
          </span>
        </h1>

        <p className="mt-6 text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
          Discover how artificial intelligence is revolutionizing industries, 
          transforming the way we work, and shaping tomorrow's world. Join us 
          on this fascinating journey into the future of technology.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <span
            className="group cursor-pointer inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
            aria-label="Read more about how AI will change the future"
          >
            Read Full Article
            <svg
              className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1"
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
          
          <span
            className="cursor-pointer inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-gray-700 shadow-md ring-1 ring-gray-200 hover:bg-gray-50 hover:shadow-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500"
          >
            <svg className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 24 24" fill="none">
              <path
                d="M3 18v-6a9 9 0 0 1 18 0v6M3 18a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3M3 18l3-3m15 3l-3-3"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Save for Later
          </span>
        </div>

        {/* Stats section */}
        <div className="mt-10 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8">
            <div className="text-center lg:text-left">
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">50K+</div>
              <div className="text-sm text-gray-600">Readers</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">1.2K</div>
              <div className="text-sm text-gray-600">Comments</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">4.9★</div>
              <div className="text-sm text-gray-600">Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Image column */}
      <div className="w-full lg:w-1/2">
        <div className="relative">
          {/* Decorative background elements */}
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-200 rounded-full opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-purple-200 rounded-full opacity-40 animate-pulse delay-1000"></div>
          
          {/* Main image container */}
          <div className="relative overflow-hidden rounded-2xl bg-white p-4 sm:p-6 shadow-2xl ring-1 ring-gray-200">
            <div className="aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] overflow-hidden rounded-xl bg-gradient-to-br from-gray-100 to-gray-200">
              <img
                src="/Container.png"
                alt="AI concept illustration showing futuristic technology and innovation"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            
            {/* Image overlay info */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">AI Technology</p>
                    <p className="text-xs text-gray-600">Future Innovation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
          alt="VR and AI technology showcase" 
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

    <Post />
      
    </>
  );
}

export default Blog;
