import React from 'react';

const DetailsInputPage = () => {
  return (
    <section id="DetailsInputPage" className="text-white p-4 min-h-screen bg-blue-700 flex">
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-start text-left">
        <h1 className="font-waterfall text-4xl lg:text-5xl p-4 text-white font-bold">
          Accelerate Your Security Strategy and Success
        </h1>
        <p className="text-lg lg:text-xl text-gray-300">Leave your contact details, and we will contact you</p>
        <div className="m-4">
          <div className="flex flex-col lg:flex-row items-start">
            <label className="block text-white pr-4 lg:pl-0">Name:</label>
            <div className="md:px-24">
            <div className="w-full lg: ">
              <input
                type="text"
                className="w-full bg-blue-800 rounded py-2 px-2"
                placeholder="Enter your name"
              />
            </div>
            </div>
          </div>
        </div>
        <div className="m-4">
          <div className="flex flex-col lg:flex-row items-start">
            <label className="block text-white pr-4 lg:pl-0">Phone Number:</label>
            <div className="  md:pl-0">
            <div className="w-full lg:  md:pl-7">
              <input
                type="text"
                className="w-full bg-blue-800   rounded py-2 px-2"
                placeholder="Enter your phone number"
              />
            </div>
            </div>
          </div>
        </div>
        <div className="m-4">
          <div className="flex flex-col lg:flex-row items-start">
            <label className="block text-white pr-4 lg:pl-0">Email:</label>
            <div className="  md:px-12">
            <div className="w-full   md:pl-12">
              <input
                type="text"
                className="w-full bg-blue-800   rounded py-2 px-2"
                placeholder="Enter your email"
              />
            </div>
            </div>
          </div>
        </div>
       
        <div className="m-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="subscribe"
              className="h-5 w-5 mr-2"
            />
            <label htmlFor="subscribe" className="text-white">Subscribe to our newsletter</label>
          </div>
        </div>
        <div className="m-4">
          <button className="bg-white text-blue-700 py-3 px-8 rounded-lg">
            Submit
          </button>
        </div>
      </div>
      <div className="hidden lg:block lg:w-1/2">
        <img
          src="Detailsinput.png"
          alt="Your Image"
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default DetailsInputPage;
