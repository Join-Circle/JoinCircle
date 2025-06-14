import React from 'react';

const BackgroundSection = () => {
  return (
    <section
      className="h-screen w-full flex flex-col justify-center items-center px-4 text-center bg-cover bg-bottom bg-no-repeat"
      style={{
        backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.3)), url('/bg2.png')",
      }}
    >
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 z-10">
        Connect. Collaborate. Celebrate Campus Life.
      </h1>
      <h2 className="text-lg md:text-2xl text-white max-w-xl z-10">
        Join communities, share memes, plan outings, or ask for help — all in one place.
      </h2>
    </section>
  );
};

export default BackgroundSection;
