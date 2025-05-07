import React, { useState } from "react";
import axios from "axios";
import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaHome,
  FaBirthdayCake,
  FaTimes,
} from "react-icons/fa";
import img from "./HD-wallpaper-farmers-agriculture-field-harvesting-farm-farmer-hard-working-workers-cultivation.jpg"
const Info = () => {
  const [user_data, set_Userdata] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  async function handleClick() {
    try {
      const response = await axios.get("http://localhost:9808/api/sell/detailsuser", {
        withCredentials: true,
      });

      if (response) {
        set_Userdata(response.data.user);
        setIsOpen(true); // Open sidebar
      }
    } catch (e) {
      if (e.response && e.response.status === 400) {
        alert("Cookies are expired. Please re-login.");
      }
      console.log("Error:", e);
    }
  }

  return (
    <div
              className="bg-cover bg-center bg-no-repeat flex flex-col md:flex-row items-center justify-center h-screen p-4"
              style={{ backgroundImage: `url(${img})` }}
            >
    <div className="min-h-screen flex items-center justify-center  ">
      <button
        onClick={handleClick}
        className="px-6 py-3 bg-gradient-to-r from-green-500 to-lime-500 text-white font-semibold rounded-xl shadow-lg hover:opacity-90 transition"
      >
        View Seller Info
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-20 right-10 bg-gray-900 text-white rounded-2xl shadow-2xl p-6 w-80 z-50 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 text-gray-400 hover:text-red-500"
        >
          <FaTimes size={22} />
        </button>

        <h2 className="text-2xl font-bold text-green-400 mb-6">Seller Profile</h2>

        <div className="space-y-5">
          <div className="flex items-center">
            <FaUser className="text-green-400 mr-3" />
            <span>{user_data.fullName || "N/A"}</span>
          </div>

          <div className="flex items-center">
            <FaBirthdayCake className="text-yellow-400 mr-3" />
            <span>{user_data.age || "N/A"}</span>
          </div>

          <div className="flex items-center">
            <FaPhone className="text-blue-400 mr-3" />
            <span>{user_data.phoneNumber || "N/A"}</span>
          </div>

          <div className="flex items-center">
            <FaEnvelope className="text-pink-400 mr-3" />
            <span>{user_data.email || "N/A"}</span>
          </div>

          <div className="flex items-center">
            <FaHome className="text-purple-400 mr-3" />
            <span>{user_data.address || "N/A"}</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Info;
