import React, { useState } from 'react';
import axios from 'axios';
import img from "./HD-wallpaper-farmers-agriculture-field-harvesting-farm-farmer-hard-working-workers-cultivation.jpg";

const Dta_Cropgetall = () => {
  const [array, setArray] = useState([]);

  async function handleClick() {
    try {
      const response = await axios.get("http://localhost:9808/api/sell/datagett", {
        withCredentials: true,
      });

      if (response) {
        setArray(response.data.datagett);
      }
    } catch (e) {
      console.log(e);
      if (e.response && e.response.status === 400) {
        alert("Cookies expired, re-login or no data to show");
      } else {
        alert("No data to show");
      }
    }
  }

  async function handleClick1(id) {
    const response = await axios.delete(
      `http://localhost:9808/api/sell/deletecrop/${id}`,
      { withCredentials: true }
    );
    if (response) {
      alert("Deleted");
      // Refresh the data after deletion
      handleClick();
    }
  }

  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen p-4"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="bg-white bg-opacity-90 rounded-xl shadow-xl max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center text-green-800 mb-6">
          🌱 Selling Crops Dashboard
        </h1>

        <div className="flex justify-center mb-6">
          <button
            onClick={handleClick}
            className="bg-black text-white px-8 py-3 rounded-lg shadow hover:bg-gray-900 transition text-lg font-semibold"
          >
            Fetch Selling Crops
          </button>
        </div>

        {/* Scrollable Table Container */}
        <div className="max-h-[500px] overflow-y-auto rounded-lg shadow-inner">
          <table className="w-full min-w-[800px] text-left border-collapse">
            <thead className="bg-green-600 text-white sticky top-0 z-10">
              <tr>
                <th className="px-6 py-3">Crop Name</th>
                <th className="px-6 py-3">Quantity</th>
                <th className="px-6 py-3">Pickup Location</th>
                <th className="px-6 py-3">Phone Number</th>
                <th className="px-6 py-3">Price</th>
                <th className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {array.length > 0 ? (
                array.map((value, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-green-50 text-gray-800"
                  >
                    <td className="px-6 py-4">{value.cropName}</td>
                    <td className="px-6 py-4">{value.cropQuantity} kg</td>
                    <td className="px-6 py-4">{value.Pickup_Location}</td>
                    <td className="px-6 py-4">{value.phoneNumber}</td>
                    <td className="px-6 py-4">₹{value.cropPrice}</td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleClick1(value._id)}
                        className="bg-red-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-700 transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="px-6 py-6 text-center text-gray-600"
                  >
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

export default Dta_Cropgetall;
