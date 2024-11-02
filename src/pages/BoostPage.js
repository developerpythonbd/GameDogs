import React from "react";

const BoostPage = () => {
  // Simulated function to show ads or trigger relevant behavior
  const showAd = () => {
    alert("Ad is being displayed!"); // Replace this with actual ad display logic
  };

  return (
    <div className="boost-page-container flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Boost Your Earnings</h1>
      <p className="text-lg mb-6">
        Click below to watch ads and boost your earnings!
      </p>
      <button
        onClick={showAd}
        className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none"
      >
        Show Ad
      </button>
    </div>
  );
};

export default BoostPage;
