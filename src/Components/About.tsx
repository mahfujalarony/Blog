import React, { useRef, useState, useEffect } from 'react';
import Navbar from './Navbar';
import initialData from './data';
import { Article } from './type';

const About: React.FC = () => {
  const pRef = useRef<HTMLParagraphElement | null>(null);
  const [ml, setMl] = useState(0);

  useEffect(() => {
    if (!pRef.current) return;
    const el = pRef.current;
    const style = getComputedStyle(el);
    const lineHeight = parseFloat(style.lineHeight);
    const h = el.clientHeight;
    const lines = Math.max(1, Math.round(h / lineHeight));
    setMl(lines * 8); // 8px per line left offset
  }, []);

  return (
    <>
      <Navbar />
      <main className="w-full mt-10">
        {/* Primary Article */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-karla leading-tight mb-4">
            How to make a Game look more attractive with New VR &amp; AI Technology
          </h1>

          <div className="w-full mb-6 rounded-xl overflow-hidden bg-gray-100 aspect-[16/9]">
            <img
              src="/img.png"
              alt="VR & AI Technology"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              Google has been investing in AI for many years and bringing its benefits...
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              We&apos;re now at a pivotal moment in our AI journey...
            </p>

          <div className="ml-0 mb-8">
            <p
              ref={pRef}
              style={{
                marginLeft: ml,
                transition: 'margin-left .3s ease',
                borderLeft: '4px solid #5b6dff',
                paddingLeft: 12
              }}
              className="italic text-gray-800"
            >
              People worry that computers will get too smart and take over the world, but the real
              problem is that they&apos;re too stupid and they&apos;ve already taken over the world.
            </p>
          </div>

          <h2 className="font-semibold text-xl sm:text-2xl mb-3">Development</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            More than 3 billion people already benefit from AI-powered features in Google Workspace,
            whether it’s using Smart Compose in Gmail or auto-generated summaries in Google Docs.
            Now, we’re excited to take the next step and bring a limited set of trusted testers a new
            set of features that makes the process of writing even easier. In Gmail and Google Docs,
            you can simply type in a topic you’d like to write about, and a draft will be instantly
            generated for you. So if you’re a manager onboarding a new employee, Workspace saves you
            the time and effort involved in writing that first welcome email. From there, you can
            elaborate upon or abbreviate the message or adjust the tone to be more playful or
            professional — all in just a few clicks. We’ll be rolling out these new experiences to
            testers in the coming weeks.
          </p>

          <div className="w-full mb-6 rounded-xl overflow-hidden bg-gray-100 aspect-[16/9]">
            <img
              src="./p9.jpg"
              alt="ChatGPT-5 concept"
              className="w-full h-80 object-cover"
              loading="lazy"
            />
          </div>

          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque non aut, nobis est quas
            voluptatum cum quia voluptatibus voluptatem! Exercitationem soluta possimus optio unde
            aliquam libero placeat sint. Aspernatur, aut?
          </p>
        </article>

        {/* Popular Posts */}
        <section className="px-4">
          <h2 className="text-xl sm:text-2xl font-semibold font-karla text-center  md:text-2xl">Popular Posts</h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {initialData.map((article: Article, index: number) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{article.title}</h3>
                  <p className="text-gray-600">{article.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default About;