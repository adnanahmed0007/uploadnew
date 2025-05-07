import React, { useState } from "react";
import axios from "axios";
import img from "./HD-wallpaper-farmers-agriculture-field-harvesting-farm-farmer-hard-working-workers-cultivation.jpg";

const Alldata = () => {
  const [array, setArray] = useState([]);

  async function handleClick() {
    try {
      const response = await axios.get(
        "http://localhost:9808/api/sell/selldatashow",
        { withCredentials: true }
      );
      if (response) {
        console.log(response.data.getDta);
        setArray(response.data.getDta);
      }
    } catch (e) {
      if (e.response && e.response.status === 400) {
        alert("Cookies expired, please re-login.");
      }
      console.log(e);
    }
  }

  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen p-4"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="bg-white bg-opacity-90 rounded-xl shadow-xl max-w-6xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-green-800 text-center mb-8">
          🌾 Available Crops for Sale
        </h1>

        {/* Fetch Data Button */}
        <div className="flex justify-center mb-6">
          <button
            onClick={handleClick}
            className="bg-green-600 text-white px-8 py-3 rounded-lg shadow hover:bg-green-700 transition text-lg font-semibold"
          >
            Fetch Crop Data
          </button>
        </div>

        {/* Table Container with Scroll */}
        <div className="max-h-[500px] overflow-y-auto rounded-lg shadow-inner">
          <table className="w-full min-w-[800px] text-left border-collapse">
            <thead className="bg-green-600 text-white sticky top-0 z-10">
              <tr>
                <th className="px-6 py-3">Crop Name</th>
                <th className="px-6 py-3">Quantity</th>
                <th className="px-6 py-3">Pickup Location</th>
                <th className="px-6 py-3">Phone Number </th>
                <th className="px-6 py-3">Price</th>
              </tr>
            </thead>
            <tbody>
              {array.length > 0 ? (
                array.map((value, index) => (
                  <tr key={index} className="border-b hover:bg-green-50 text-gray-800">
                    <td className="px-6 py-4">{value.cropName}</td>
                    <td className="px-6 py-4">{value.cropQuantity} kg</td>
                    <td className="px-6 py-4">{value.Pickup_Location}</td>
                    <td className="px-6 py-4">{value.phoneNumber}</td>
                    <td className="px-6 py-4">₹{value.cropPrice}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-6 py-6 text-center text-gray-500">
                    No crop data available. Click the button to fetch.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Alldata;
