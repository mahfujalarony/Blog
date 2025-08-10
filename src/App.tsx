import { useState, useEffect, useRef } from 'react';

interface Article {
  title: string;
  urlToImage: string;
  description: string;
  url: string;
  publishedAt: string;
  source: {
    name: string;
  };
}

// Mock data for fallback
const mockArticles: Article[] = [
  {
    title: "Artificial Intelligence: The Future of Technology",
    description: "How artificial intelligence is transforming our daily lives and what impact it will have in the future.",
    urlToImage: "/p1.jpg",
    url: "#",
    publishedAt: "2025-08-10T10:00:00Z",
    source: { name: "Tech News" }
  },
  {
    title: "Virtual Reality Gaming: New Horizons",
    description: "How VR technology has revolutionized the gaming industry and created new experiences.",
    urlToImage: "/p2.jpg",
    url: "#",
    publishedAt: "2025-08-09T15:30:00Z",
    source: { name: "Gaming World" }
  },
  {
    title: "Cloud Computing: Business Solutions",
    description: "Benefits of cloud technology for small to large businesses and future possibilities.",
    urlToImage: "/p3.jpg",
    url: "#",
    publishedAt: "2025-08-08T12:45:00Z",
    source: { name: "Business Tech" }
  },
  {
    title: "Cybersecurity: Digital Age Challenges",
    description: "The importance of internet security and how to keep yourself protected online.",
    urlToImage: "/p4.jpg",
    url: "#",
    publishedAt: "2025-08-07T08:20:00Z",
    source: { name: "Security Update" }
  },
  {
    title: "Mobile App Development Trends 2025",
    description: "Latest trends and technologies in mobile app development for the new year.",
    urlToImage: "/p5.jpg",
    url: "#",
    publishedAt: "2025-08-06T14:15:00Z",
    source: { name: "Mobile Dev" }
  },
  {
    title: "The Future of Blockchain Technology",
    description: "Other uses and possibilities of blockchain technology beyond cryptocurrency.",
    urlToImage: "/p6.jpg",
    url: "#",
    publishedAt: "2025-08-05T11:30:00Z",
    source: { name: "Blockchain News" }
  },
  {
    title: "Machine Learning in Healthcare",
    description: "How machine learning algorithms are revolutionizing medical diagnosis and treatment.",
    urlToImage: "/p7.jpg",
    url: "#",
    publishedAt: "2025-08-04T09:10:00Z",
    source: { name: "Health Tech" }
  },
  {
    title: "5G Technology and IoT Integration",
    description: "The impact of 5G networks on Internet of Things and smart city development.",
    urlToImage: "/p8.jpg",
    url: "#",
    publishedAt: "2025-08-03T16:25:00Z",
    source: { name: "Network News" }
  },
  {
    title: "Sustainable Technology Solutions",
    description: "Green technology innovations that are helping to combat climate change.",
    urlToImage: "/p9.jpg",
    url: "#",
    publishedAt: "2025-08-02T13:40:00Z",
    source: { name: "Green Tech" }
  }
];

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('Blog');
  const [articles, setArticles] = useState<Article[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [usingMockData, setUsingMockData] = useState(false);
  const articlesRef = useRef<HTMLDivElement>(null);

  const API_KEY = '3c4683ac42f7468aa3aa2c65262a96f9';

  const loadMockArticles = (page: number = 1, isLoadMore: boolean = false) => {
    const startIndex = (page - 1) * 6;
    const endIndex = startIndex + 6;
    const pageArticles = mockArticles.slice(startIndex, endIndex);
    
    if (isLoadMore) {
      setArticles(prev => [...prev, ...pageArticles]);
    } else {
      setArticles(pageArticles);
    }
    
    if (endIndex >= mockArticles.length) {
      setHasMore(false);
    }
    
    setUsingMockData(true);
  };

  const loadArticles = async (page: number = 1, isLoadMore: boolean = false) => {
    setLoading(true);
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout
      
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&pageSize=6&page=${page}&apiKey=${API_KEY}`,
        { signal: controller.signal }
      );
      
      clearTimeout(timeoutId);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.status === "ok" && data.articles && data.articles.length > 0) {
        if (isLoadMore) {
          setArticles(prev => [...prev, ...data.articles]);
          // Smooth scroll to new content after a short delay
          setTimeout(() => {
            if (articlesRef.current) {
              const newArticles = articlesRef.current.children;
              const firstNewArticle = newArticles[newArticles.length - data.articles.length];
              if (firstNewArticle) {
                firstNewArticle.scrollIntoView({ 
                  behavior: 'smooth', 
                  block: 'start' 
                });
              }
            }
          }, 100);
        } else {
          setArticles(data.articles);
        }
        
        // Check if there are more articles
        if (data.articles.length < 6 || page >= 5) {
          setHasMore(false);
        }
        setUsingMockData(false);
      } else {
        throw new Error('No articles found');
      }
    } catch (error) {
      console.error("Error loading articles:", error);
      // Fallback to mock data
      loadMockArticles(page, isLoadMore);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadArticles(1);
  }, []);

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    loadArticles(nextPage, true);
  };

  const handleSelect = (item: string) => {
    setSelected(item);
    setIsOpen(false);
  };

  return (
    <div className="">
    
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

      {/* Mock Data Notification */}
      {usingMockData && (
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 text-center">
          <p className="text-sm">
            <span className="font-medium">Demo Mode:</span> Showing sample articles as news API is unavailable.
          </p>
        </div>
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


    <section className="min-h-screen xl:mt-32 bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-10 text-center">
          Our Recent Posts
        </h1>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="md:w-1/2">
            <img
              src="/img.png"
              alt="post"
              className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
            />
          </div>
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <span className="text-sm text-purple-600 font-semibold mb-2 uppercase tracking-wide">
              Development
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              How to make a Game look more attractive with New VR & AI Technology
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="w-max px-6 py-3 border border-purple-600 text-purple-600 rounded hover:bg-purple-600 hover:text-white transition">
              Read More
            </button>
          </div>
        </div>

        <div ref={articlesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {articles.map((article, index) => (
            <div key={`${article.url}-${index}`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              {article.urlToImage && (
                <img 
                  src={article.urlToImage} 
                  alt={article.title} 
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2 line-clamp-2 hover:text-purple-600 transition-colors duration-200">{article.title}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-3">{article.description}</p>
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <span className="font-medium">{article.source.name}</span>
                  <span>{new Date(article.publishedAt).toLocaleDateString('en-US')}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center mt-12">
          {loading ? (
            <div className="flex flex-col items-center space-y-3">
              <div className="flex items-center space-x-2 text-purple-600">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
                <span className="text-lg font-medium">Loading...</span>
              </div>
              <div className="w-32 bg-gray-200 rounded-full h-1.5">
                <div className="bg-purple-600 h-1.5 rounded-full animate-pulse" style={{width: '70%'}}></div>
              </div>
            </div>
          ) : hasMore ? (
            <button 
              onClick={handleLoadMore}
              className="group px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 font-semibold text-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2"
            >
              <span>See more posts</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          ) : (
            <div className="text-center">
              <p className="text-gray-500 text-lg font-medium"> All posts loaded! </p>
              <p className="text-gray-400 text-sm mt-1">Refresh the page for new content</p>
            </div>
          )}
        </div>
      </div>
    </section>


      
    </div>
  );
}

export default App;
