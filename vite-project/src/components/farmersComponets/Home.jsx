 import React from 'react';
import { Link } from 'react-router-dom';
import img1 from "./HD-wallpaper-farmers-agriculture-field-harvesting-farm-farmer-hard-working-workers-cultivation.jpg";

const Home = () => {
  return (
    <div className="bg-green-50 min-h-screen font-sans">
      {/* Hero Section */}
      <div className="relative">
        <img src={img1} alt="Farmer's Market" className="w-full h-[100vh] object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4 drop-shadow-md">Welcome to Farmer's Market</h1>
          <p className="text-xl mb-6 max-w-xl">Connecting Farmers & Buyers for Fair Crop Trade Across India</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/sign" className="bg-yellow-500 px-6 py-3 text-lg font-semibold rounded-lg hover:bg-yellow-600 transition">
              I'm a Farmer
            </Link>
            <Link to="/signupbuyers" className="bg-blue-500 px-6 py-3 text-lg font-semibold rounded-lg hover:bg-blue-600 transition">
              I'm a Buyer
            </Link>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-4">Why Choose Our Platform?</h2>
        <p className="text-gray-700 max-w-3xl mx-auto text-lg">
          Whether you're a farmer looking to sell your crops directly or a buyer in search of quality produce, our platform provides a seamless and fair environment for agricultural trade.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="container mx-auto py-12 px-4 grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-2xl font-semibold text-green-700 mb-2">No Middlemen</h3>
          <p className="text-gray-600">Farmers get the price they deserve. Buyers get fresh produce straight from the source.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-2xl font-semibold text-green-700 mb-2">Easy Bidding</h3>
          <p className="text-gray-600">Buyers can bid on crops with ease and transparency in every transaction.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-2xl font-semibold text-green-700 mb-2">Trusted Payments</h3>
          <p className="text-gray-600">Secure payments & timely delivery for both farmers and buyers.</p>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-green-700 text-white py-14 text-center">
        <h2 className="text-4xl font-bold mb-4">Get Started with India's Growing Agri-Marketplace</h2>
        <p className="text-lg mb-6">Sign up now and be a part of the transparent crop trading revolution!</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/sign" className="bg-yellow-500 px-6 py-3 text-lg font-semibold rounded-lg hover:bg-yellow-600 transition">
            For Farmers
          </Link>
          <Link to="/signupbuyers" className="bg-blue-500 px-6 py-3 text-lg font-semibold rounded-lg hover:bg-blue-600 transition">
            For Buyers
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
