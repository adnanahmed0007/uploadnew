import React, { useState } from 'react';
import axios from 'axios';
import img from "./HD-wallpaper-farmers-agriculture-field-harvesting-farm-farmer-hard-working-workers-cultivation.jpg"
const UpdateCrop = () => {
  const [cropName, setCropName] = useState('');
  const [cropQuantity, setCropQuantity] = useState('');
  const [cropPrice,setCropPrice]=useState('');
  const [data1, setData1] = useState([]);
   // single object, not array

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:9808/api/sell/crop/update',
        {
          cropName: cropName,
          cropQuantity: cropQuantity,
          cropPrice:cropPrice,
        },
        {
          withCredentials: true,
        }
      );

      if (response) {
        console.log(response.data.findcropName);
        setData1(response.data.findcropName);
      }
    } catch (e) {
      console.log(e);
      if (e.response && e.response.status === 400) {
        alert('Login again or wrong credentials');
      }
      alert('Something went wrong. Please try again');
    }
  };

  return (
<div
          className="bg-cover bg-center bg-no-repeat flex flex-col md:flex-row items-center justify-center h-screen p-4"
          style={{ backgroundImage: `url(${img})` }}
        >
    <div className="min-h-screen p-6">
      <div className="max-w-xl mx-auto  shadow-lg rounded-2xl p-8 ">
        <h2 className="text-2xl font-bold mb-6 text-center text-green-700">
          Update Crop Details
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="cropName" className="block text-gray-700 font-medium mb-1">
              Crop Name:
            </label>
            <input
              onChange={(e) => setCropName(e.target.value)}
              value={cropName}
              type="text"
              id="cropName"
              name="cropName"
              placeholder='enter the cropName to update'
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>

          <div>
            <label htmlFor="cropQuantity" className="block text-gray-700 font-medium mb-1">
              Crop Quantity:
            </label>
            <input
             placeholder='enter the cropQuantity'
              onChange={(e) => setCropQuantity(e.target.value)}
              value={cropQuantity}
              type="number"
              id="cropQuantity"
              name="cropQuantity"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>
          <div>
            <label htmlFor="cropPrice" className="block text-gray-700 font-medium mb-1">
              Crop Price:
            </label>
            <input
              onChange={(e) => setCropPrice(e.target.value)}
              placeholder='enter the cropPrice to Update'
              value={cropPrice}
              type="number"
              id="cropQuantity"
              name="cropQuantity"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>

      {data1 && (
        <div className="max-w-xl mx-auto mt-8 bg-white shadow-lg rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-green-700 mb-4">Updated Crop Info</h3>
          <div className="space-y-2 text-gray-700">
            <p><strong>Crop Name:</strong> {data1.cropName}</p>
            <p><strong>Quantity:</strong> {data1.cropQuantity}</p>
            <p><strong>Pickup Location:</strong> {data1.Pickup_Location}</p>
            <p><strong>Phone Number:</strong> {data1.phoneNumber}</p>
            <p><strong>Crop Price:</strong> {data1.cropPrice}</p>
          </div>
        </div>
      )}
       

    </div>
    </div>
  );
};

export default UpdateCrop;
