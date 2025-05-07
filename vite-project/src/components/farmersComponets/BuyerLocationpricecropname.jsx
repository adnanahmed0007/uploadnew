import React, { useState } from 'react';
import axios from 'axios';
import img from './HD-wallpaper-farmers-agriculture-field-harvesting-farm-farmer-hard-working-workers-cultivation.jpg';

const BuyerLocationpricecropname = () => {
  const [cropName, setCropName] = useState('');
  const [cropQuantity, setCropQuantity] = useState('');
  const [Location_Buyer, setPickupLocation] = useState('');
  const [arrayget, setArrayget] = useState([]);
  const [buyerArray,setBuyerInfodetail]=useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (cropName && cropQuantity && Location_Buyer) {
        const response = await axios.post(
          'http://localhost:9808/api/sell/farmer/data/cropname/cropQunatuty/place',
          { cropName, cropQuantity, Location_Buyer },
          { withCredentials: true }
        );

        if (response && response.status === 200) {
          alert(response.data.message);
          setArrayget(response.data.response1);
        }
        console.log(response);
      } else {
        alert('Please fill all the details');
      }
    } catch (e) {
       if(e.response&&e.response.status==400)
       {
        alert("enter correct city name or nearby  metro city")
       }
    }
  }
  async function  handleClick(userId) {
    try{
      const findbuyer=await axios.post(`http://localhost:9808/api/sell/farmer/data/details/buyers/${userId}`,{
        withCredentials:true,
      })
      if(findbuyer&&findbuyer.status==200)
      {
        console.log(findbuyer)
        alert(findbuyer.data.message)
        setBuyerInfodetail(findbuyer.data.findbuyerId)
        
        


      }

    }
    catch(e)
    {
      if(e.findbuyer&&e.findbuyer.status==400)
      {
        console.log(e);
        alert(e.findbuyer.data.message)
      }
      else{
        console.log(e)
        alert("server error")
      }
    }
    
  }

  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen p-4"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="w-full min-h-screen p-6  bg-opacity-90 rounded-xl shadow-xl">
        <h1 className="text-4xl font-bold text-center text-green-700 mb-8">
          🌾 Submit Crop Info to View Buyer Matches
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
            className="border border-gray-400 rounded-lg px-6 py-3 w-full sm:w-72 text-lg"
          />
          <input
            type="number"
            placeholder="Enter crop quantity"
            value={cropQuantity}
            onChange={(e) => setCropQuantity(e.target.value)}
            required
            className="border border-gray-400 rounded-lg px-6 py-3 w-full sm:w-72 text-lg"
          />
          <input
            type="text"
            placeholder="Enter buyer location"
            value={Location_Buyer}
            onChange={(e) => setPickupLocation(e.target.value)}
            required
            className="border border-gray-400 rounded-lg px-6 py-3 w-full sm:w-72 text-lg"
          />
          <button
            type="submit"
            className="bg-green-700 text-white px-8 py-3 text-lg rounded-lg hover:bg-green-800 transition"
          >
            Submit
          </button>
        </form>

        {/* Scrollable Table with Sticky Header */}
        <div className="max-h-[500px] overflow-y-auto rounded-lg shadow-inner">
          <table className="w-full min-w-[800px] text-left border-collapse">
            <thead className="bg-green-600 text-white sticky top-0 z-10 text-xl">
              <tr>
                <th className="px-8 py-4">Crop Name</th>
                <th className="px-8 py-4">Quantity</th>
                <th className="px-8 py-4">Price</th>
                <th className="px-8 py-4">Phone</th>
              
                <th className="px-8 py-4">Location</th>
                <th className="px-8 py-4">Buyer INfo</th>
                
              </tr>
            </thead>
            <tbody className="bg-white text-lg">
              {arrayget.length > 0 ? (
                arrayget.map((value, index) => (
                  <tr key={index} className="border-b hover:bg-green-50 text-gray-800">
                    <td className="px-8 py-4 font-medium">{value.cropName}</td>
                    <td className="px-8 py-4">{value.cropQuantity} kg</td>
                    <td className="px-8 py-4">₹{value.cropPrice}</td>
                    <td className="px-8 py-4">{value.phoneNumber}</td>
                    <td className="px-8 py-4">{value.Location_Buyer}</td>
                    <td className="px-8 py-4">
                      <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200" onClick={()=>handleClick(value.User_Id)}>
                        buyerInfo
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-8 py-8 text-center text-gray-500">
                    No crop data found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        {buyerArray && (
  <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
    <div className="bg-white p-6 rounded-xl shadow-2xl w-[90%] max-w-md relative">
      <button
        onClick={() => setBuyerInfodetail("")}
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

export default BuyerLocationpricecropname;
