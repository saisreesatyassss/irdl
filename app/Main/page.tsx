// import React from 'react';
// import Image from 'next/image'; // Import the Image component 

 
// function Main() { 
//     const buttonStyle = {
//     backgroundColor: '#294DFA',
//     color: 'white',
//     padding: '10px 20px',
//     borderRadius: '12px',
//     marginTop: '16px',
//   };

//   return (
//     <section id="about" className="text-white h-screen   bg-transparent text-center flex flex-col justify-center items-start px-10  md:px-20  ">
//       {/* <h1 className="m-auto  font-waterfall text-7xl text-black font-bold">
//         About
//       </h1> */}
//         <h1 className="font-waterfall text-2xl  md:text-6xl text-black font-extrabold   ">
//        UNMASK IDENTITY
//       </h1>
//         <h1 className="font-waterfall text-2xl md:text-6xl text-black  font-extrabold">
//              THREATS   </h1>
//       <p className="text-lg text-black mt-4  text-left  font-bold">
//         Surface and Eradicate Risks Lurking Within  <br /> Your Identities
//       </p>
//       <p className="text-lg text-black   font-bold ">
//       </p> 

//            <button style={buttonStyle}>See IRDL in Action</button>

//       <p className="text-gray-700 mt-4 max-w-lg text-left">
//         Gain a 360-degree view over all identities, privileges, and access to illuminate blind spots, remediate gaps, and shut down attack pathways across your entire identity estate.
//       </p>
//       {/* Image at the bottom right */}
//       <div className="absolute bottom-0 right-0  ">
//         <Image
//           src="/MainImage.png"
//           width={450}  
//           height={450}  
//           alt="logo"
//           className="focus:border-none active:border-none"
//         />
//       </div>
//     </section>
//   );
// }

// export default Main;



"use client";
import React from 'react';
import Image from 'next/image';

function Main() {
  const buttonStyle = {
    backgroundColor: '#294DFA',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '12px',
    marginTop: '16px',
  };

  return (
    <section className="text-white h-screen bg-transparent text-center flex flex-col justify-center items-start px-10 md:px-20 relative" style={{
      background: `linear-gradient(to bottom, transparent, rgb(var(--background-end-rgb))) rgb(var(--background-start-rgb))`
    }}>
      <h1 className="font-waterfall text-2xl md:text-6xl text-black font-extrabold">
        UNMASK IDENTITY
      </h1>
      <h1 className="font-waterfall text-2xl md:text-6xl text-black font-extrabold">
        THREATS
      </h1>
      <p className="text-lg text-black mt-4 text-left font-bold">
        Surface and Eradicate Risks Lurking Within Your Identities
      </p>
      <p className="text-lg text-black font-bold"></p>

      <button style={buttonStyle}>See IRDL in Action</button>

      <p className="text-gray-700 mt-4 max-w-lg text-left">
        Gain a 360-degree view over all identities, privileges, and access to illuminate blind spots, remediate gaps, and shut down attack pathways across your entire identity estate.
      </p>

      {/* Image at the bottom right */}
      <div className="absolute right-0 bottom-1/8 image-container">
        <Image
          src="/MainImage.png"
          width={500}
          height={500}
          alt="logo"
          className="focus:border-none active:border-none"
        />
      </div>

      <style jsx>{`
  

  @media (max-width: 768px) {
    .image-container {
      display: none; /* Hide on screens smaller than 768px (tablet and mobile) */
    }
  }

  @media (min-width: 769px) and (max-width: 958px) {
    .image-container {
      opacity: 0.5; /* Set the opacity to 0.5 for screens between 769px and 958px */
    }
  }
  @media (max-width: 844px) {
    .image-container {
      opacity: 0.5; /* Set the opacity to 0.5 for screens between 769px and 958px */
    }
    .image-container {
      display: none; /* Hide on screens smaller than 768px (tablet and mobile) */
    }
  }

`}</style>
    </section>
  );
}

export default Main;

