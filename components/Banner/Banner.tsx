'use client';
/* eslint-disable @next/next/no-img-element */

import React from 'react';
import Image from 'next/image';

const Banner = () => {
  const imageRef = React.createRef<HTMLImageElement>();

  const rotateImage = () => {
    (imageRef.current as HTMLImageElement).style.transform = 'rotate(360deg)';
  };

  const resetImage = () => {
    (imageRef.current as HTMLImageElement).style.transform = 'rotate(0deg)';
  };

  return (
    <section id="about" className="bg-white min-h-screen">
      <section className="bg-black text-white p-4 md:p-8 m-8 md:m-16 md:my-0 rounded-2xl">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          {/* Left Section */}
          <div className="w-full md:w-1/2">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">
              Identities & Access, Intelligently Secured
            </h1>
            <p className="text-base md:text-lg mb-4">
              Identities and their privileges are at the heart of every attack&apos; and identity threats are hard to detect and increasingly complex. But complexity shouldn&apos;t mean compromise.
            </p>
            <a
              href="#"
              className="bg-blue-900 text-white py-2 px-4 rounded-full text-base md:text-lg hover:bg-blue-600 transition duration-300"
            >
              See the power of the platform
            </a>
          </div>

          {/* Right Section (Image) */}
          <div className="relative w-full md:w-auto">
            <Image
              src="/Banner.png"
              alt="Banner Image"
              height={400}
              width={400}
              ref={imageRef}
              className="transition-transform transform duration-300 hover:rotate-360"
              onMouseEnter={rotateImage}
              onMouseLeave={resetImage}
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Banner;
