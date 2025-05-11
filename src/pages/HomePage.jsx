import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-between bg-gradient-to-b from-gray-900 to-gray-800 p-8 text-white font-sans">
      
      {/* Left Section - GameArena Info */}
      <div className="w-2/3 pr-10">
        <h1 className="text-4xl font-bold text-purple-400 mb-4">Welcome to GameArena</h1>
        <p className="mb-6 text-lg leading-relaxed">
          GameArena is your ultimate destination for competitive gaming. Host and join online tournaments for the most popular titles across age categories, with real-time leaderboards, exciting prize pools, and a vibrant community.
        </p>
        <h2 className="text-2xl font-semibold text-purple-300 mb-2">Why GameArena?</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-300">
          <li>Participate in daily & weekly tournaments.</li>
          <li>Track your performance with global leaderboards.</li>
          <li>Win prizes and exclusive gaming rewards.</li>
          <li>Connect with gamers from all over the country.</li>
        </ul>
      </div>

      {/* Right Section - Login Form */}
      <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-8 w-1/3">
        <div className="flex justify-center mb-4">
          <img src="/gamearena-logo.png" alt="GameArena Logo" className="w-16 h-16" />
        </div>
        <h3 className="text-xl font-semibold text-center mb-6">Sign In to Play</h3>
        <form>
          <label className="block mb-2 text-gray-400">Username*</label>
          <input type="text" className="w-full p-2 bg-gray-700 text-white rounded mb-4" />

          <label className="block mb-2 text-gray-400">Password*</label>
          <input type="password" className="w-full p-2 bg-gray-700 text-white rounded mb-4" />

          <label className="block mb-2 text-gray-400">Captcha*</label>
          <div className="flex items-center mb-4">
            <input type="text" className="w-full p-2 bg-gray-700 text-white rounded" />
            <div className="ml-2 p-2 bg-purple-900 text-lg font-bold tracking-widest text-white rounded">4 1 2 9</div>
          </div>

          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded">
            Sign In
          </button>
          <p className="text-sm mt-4 text-center text-gray-400">
            Forgot Password? <a href="#" className="text-blue-400 hover:underline">Reset here</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
