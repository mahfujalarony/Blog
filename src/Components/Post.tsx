import React from 'react'
import initialData from './data'

const Post = () => {
  const data = initialData;
  const [featuredPost, ...otherPosts] = data;
  
  return (
    <div className="bg-gray-50 min-h-screen md:mt-10">
      {/* Featured Post Section */}
      <section className="py-12 xl:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-raleway md:text-4xl font-bold text-gray-900 mb-8 md:mb-12 text-center">
            Our Recent Posts
          </h1>

          <div className="flex flex-col lg:flex-row bg-white shadow-lg rounded-xl overflow-hidden">
            <div className="lg:w-1/2 h-64 md:h-80 lg:h-auto">
              <img
                src={data[2].urlToImage}
                alt={data[2].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:w-1/2 p-6 md:p-8 flex flex-col justify-center">
              <span className="text-sm text-purple-600 font-semibold mb-2 uppercase tracking-wide">
                Development
              </span>
              <h2 className="text-2xl md:text-3xl font-semibold font-karla text-gray-900 mb-4">
                {data[2].title}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6 line-clamp-3">
                {data[2].description}
              </p>
              <button className="self-start px-6 py-2.5 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition-colors duration-300">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Posts Grid Section */}
      <section className="pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            More Articles
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherPosts.map((article, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                <div className="h-48 md:h-56">
                  <img 
                    src={article.urlToImage} 
                    alt={article.title}  
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <p className="text-gray-500 text-sm mb-2">
                    Published at: {new Date(article.publishedAt).toLocaleDateString()}
                  </p>
                  <h3 className="font-semibold text-lg md:text-xl mb-2 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-700 mb-4 line-clamp-3 text-sm md:text-base">
                    {article.description}
                  </p>
                  <p className="text-gray-500 text-xs md:text-sm">
                    Source: {article.source.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Post