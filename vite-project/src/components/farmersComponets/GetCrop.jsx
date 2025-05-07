 
  import React, { useState } from 'react';
  import axios from 'axios';
  import img from "./HD-wallpaper-farmers-agriculture-field-harvesting-farm-farmer-hard-working-workers-cultivation.jpg";
  
  const GetCrop = () => {
    const [cropName, setCropName] = useState("");
    const [array, setArray] = useState([]);
  
    async function handleClick() {
      try {
        if (cropName) {
          const response = await axios.post(
            "http://localhost:9808/api/sell/dtacrop",
            { cropName: cropName.trim().toLowerCase() },
            { withCredentials: true }
          );
  
          if (response) {
            console.log(response);
            setArray(response.data.find_Crop);
          }
        } else {
          alert("Enter the crop name");
        }
      } catch (e) {
        if (e.response && e.response.status === 400) {
          alert("Crop is not there");
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
          <h1 className="text-3xl font-bold text-center text-green-800 mb-6">
            🌾 Search for a Crop
          </h1>
  
          {/* Input & Button */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
            <input
              onChange={(e) => setCropName(e.target.value)}
              type="text"
              placeholder="Enter the crop name"
              className="px-4 py-2 border border-green-500 rounded-md focus:ring-2 focus:ring-green-600 outline-none w-72"
            />
            <button
              onClick={handleClick}
              className="bg-black text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-900 transition"
            >
              Submit
            </button>
          </div>
  
          {/* Result Table */}
          {array.length > 0 && (
            <div className="max-h-[500px] overflow-y-auto rounded-lg shadow-inner">
              <table className="w-full min-w-[800px] text-left border-collapse">
                <thead className="bg-green-600 text-white sticky top-0 z-10">
                  <tr>
                    <th className="px-6 py-3">Crop Name</th>
                    <th className="px-6 py-3">Pickup Location</th>
                    <th className="px-6 py-3">Price</th>
                    <th className="px-6 py-3">Quantity</th>
                    <th className="px-6 py-3">Phone Number Farmer</th>
                  </tr>
                </thead>
                <tbody>
                  {array.map((value, index) => (
                    <tr
                      key={index}
                      className="border-b hover:bg-green-50 text-gray-800"
                    >
                      <td className="px-6 py-4">{value.cropName}</td>
                      <td className="px-6 py-4">{value.Pickup_Location}</td>
                      <td className="px-6 py-4">₹{value.cropPrice}</td>
                      <td className="px-6 py-4">{value.cropQuantity} kg</td>
                      <td className="px-6 py-4">{value.phoneNumber}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default GetCrop;
  