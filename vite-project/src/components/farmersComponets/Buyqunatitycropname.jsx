import axios from 'axios';
import React, { useState } from 'react';
import img from './HD-wallpaper-farmers-agriculture-field-harvesting-farm-farmer-hard-working-workers-cultivation.jpg';

const Buyqunatitycropname = () => {
  const [cropName, setCropName] = useState('');
  const [cropQuantity, setCropQuantity] = useState(0);
  const [arrayget, setarrayget] = useState([]);
  const [buyerArray, setBuyerArray] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:9808/api/sell/farmer/data/cropname/cropQunatuty',
        {
          cropName: cropName,
          cropQuantity: cropQuantity,
        },
        { withCredentials: true }
      );

      if (response && response.status === 200) {
        alert(response.data.message);
        console.log(response);
        setarrayget(response.data.datafindquantity);
      }
    } catch (e) {
      if(e.response&&e.response.status==400)
      {
        alert(e.response.data.message)
      }
      console.log(e);
    }
  }

  async function handleClick(userId) {
    try {
      const response = await axios.post(
        `http://localhost:9808/api/sell/farmer/data/details/buyers/${userId}`,
        {},
        { withCredentials: true }
      );

      if (response && response.status === 200) {
        alert(response.data.message);
        setBuyerArray(response.data.findbuyerId);
      }
    } catch (e) {
     
      if (e.response && e.response.status === 400) {
        alert("cookies expired");
        
      }
        console.log(e);
    }
  }

  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen p-4"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="w-full min-h-screen p-6 bg-opacity-90 rounded-xl shadow-xl">
        <h1 className="text-4xl font-bold text-center text-green-700 mb-8">
          🌾 Search Crops by Name & Minimum Quantity
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row flex-wrap gap-4 items-center justify-center mb-10"
        >
          <input
            type="text"
            placeholder="Enter crop name"
            value={cropName}
            onChange={(e) => setCropName(e.target.value)}
            required
            className="border border-gray-400 rounded-lg px-6 py-3 w-full sm:w-80 text-lg"
          />
          <input
            type="number"
            placeholder="Enter minimum quantity (kg)"
            value={cropQuantity}
            onChange={(e) => setCropQuantity(e.target.value)}
            min="1"
            required
            className="border border-gray-400 rounded-lg px-6 py-3 w-full sm:w-80 text-lg"
          />
          <button
            type="submit"
            className="bg-green-700 text-white px-8 py-3 text-lg rounded-lg hover:bg-green-800 transition"
          >
            Submit
          </button>
        </form>

        {/* Scrollable Table */}
        <div className="max-h-[500px] overflow-y-auto rounded-lg shadow-inner">
          <table className="w-full min-w-[800px] text-left border-collapse">
            <thead className="bg-green-600 text-white sticky top-0 z-10 text-xl">
              <tr>
                <th className="px-8 py-4">Crop Name</th>
                <th className="px-8 py-4">Location</th>
                <th className="px-8 py-4">Price</th>
                <th className="px-8 py-4">Quantity</th>
                <th className="px-8 py-4">Phone Number Buyer</th>
                <th className="px-8 py-4">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white text-lg">
              {arrayget.length > 0 ? (
                arrayget.map((value, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-green-50 text-gray-800"
                  >
                    <td className="px-8 py-4 font-medium">{value.cropName}</td>
                    <td className="px-8 py-4">{value.Location_Buyer}</td>
                    <td className="px-8 py-4">₹{value.cropPrice}</td>
                    <td className="px-8 py-4">{value.cropQuantity} kg</td>
                    <td className="px-8 py-4">{value.phoneNumber}</td>
                    <td className="px-8 py-4">
                      <button
                        onClick={() => handleClick(value.User_Id)}
                        className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200"
                      >
                        Buyer Info
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="px-8 py-8 text-center text-gray-500">
                    No data found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Buyer Info Modal */}
        {buyerArray && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-xl shadow-2xl w-[90%] max-w-md relative">
              <button
                onClick={() => setBuyerArray('')}
                className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-2xl"
              >
                &times;
              </button>
              <h2 className="text-2xl font-bold mb-4 text-green-700">Buyer Information</h2>
              <p className="mb-2"><span className="font-semibold">Full Name:</span> {buyerArray.fullName}</p>
              <p className="mb-2"><span className="font-semibold">Age:</span> {buyerArray.age}</p>
              <p className="mb-2"><span className="font-semibold">Email:</span> {buyerArray.email}</p>
              <p className="mb-2"><span className="font-semibold">Phone Number:</span> {buyerArray.phoneNumber}</p>
              <p className="mb-2"><span className="font-semibold">Address:</span> {buyerArray.address}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Buyqunatitycropname;
