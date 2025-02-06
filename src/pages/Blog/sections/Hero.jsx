import React from 'react';

const Hero = () => {
  return (
    <div className="pt-20 py-10">
      <div 
        className="relative h-[200px] md:h-[300px] w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/profile2.jpg')",  // Ensure this file is in the public folder
          backgroundSize: 'cover',  // Ensures the image covers the container
          backgroundPosition: 'center',  // Centers the image within the container
        }}
      >
        <div className="absolute bg-black bg-opacity-70 top-0 left-0 h-full w-full flex flex-col space-y-6 items-center justify-center px-4">
          <p className="text-white text-4xl md:text-6xl font-extrabold tracking-wide text-center md:w-3/5 leading-tight">
            LATEST INSIGHTS
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;