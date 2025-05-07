 
                import React, { useState } from 'react';
                import { Link } from 'react-router-dom';
                
                const Header = () => {
                  const [Showfarmers, setShowfarmers] = useState(false);
                  const [Showbuyers, setShowbuyers] = useState(false);
                
                  const linkClasses =
                  "px-4 py-2 text-sm md:text-base font-medium bg-gradient-to-r from-black to-gray-800 text-white rounded-lg shadow-md hover:from-gray-800 hover:to-black hover:shadow-lg transition duration-300";
                
                
                  return (
                    <div className="bg-gradient-to-r from-green-900 via-green-700 to-green-900 p-6 shadow-lg">
                      {(Showfarmers || Showbuyers) && (
                        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center p-6 rounded-3xl bg-[#102c42] shadow-2xl border border-green-700">
                          <h1 className="text-green-300 text-3xl font-extrabold mb-4 md:mb-0 tracking-wide">
                            {Showfarmers ? "🌾 Farmer Portal" : "🛒 Buyer Portal"}
                          </h1>
                          <nav className="flex flex-wrap justify-center md:justify-end gap-3 md:gap-4">
                            <Link to="/" className={linkClasses}>
                              Home
                            </Link>
                
                            {Showfarmers && (
                              <>
                                <Link to="/login" className={linkClasses}>Login</Link>
                                <Link to="/sign" className={linkClasses}>Sign Up</Link>
                                <Link to="/addcrops" className={linkClasses}>Add Crop</Link>
                                <Link to="/sellingcrops" className={linkClasses}>Your Selling Crops</Link>
                                <Link to="/getcropdetails" className={linkClasses}>Crop Details</Link>
                                <Link to="/getalldata" className={linkClasses}>All Crop Data</Link>
                                <Link to="/userInfo" className={linkClasses}>User Info</Link>
                                <Link to="/upadtecrop" className={linkClasses}>Update Crop</Link>
                                <Link to="/farmersbuyerdata" className={linkClasses}>All Buyers Data</Link>
                                <Link to="/buyercropnamebid" className={linkClasses}>Buy CropName place Quantity</Link>
                                <Link to="/buyercropnamelocation" className={linkClasses}>Buyer Crop Location</Link>
                                <Link to="/buyercropnamequantity" className={linkClasses}>Buyer Crop Quantity</Link>
                                
                                <Link to="/logout" className={linkClasses}>Logout</Link>
                              </>
                            )}
                
                            {Showbuyers && (
                              <>
                                <Link to="/loginbuyers" className={linkClasses}>Login</Link>
                                <Link to="/signupbuyers" className={linkClasses}>Sign Up</Link>
                                <Link to="/buycroponly" className={linkClasses}>Buy Crop</Link>
                                <Link to="/buycropnamelocation" className={linkClasses}>By Location</Link>
                                <Link to="/buycropnamequantity" className={linkClasses}>By Quantity</Link>
                                <Link to="/buylocationquantity" className={linkClasses}>Location & Quantity</Link>
                                <Link to="/buyerinfo" className={linkClasses}>Buyer Info</Link>
                                <Link to="/buyerbid" className={linkClasses}>Place a Bid</Link>
                                <Link to="/buyerallbisds" className={linkClasses}>Your Bids</Link>
                                <Link to="/allthebuyersBids" className={linkClasses}>All Bids</Link>
                                <Link to="/buyerbidscropwise" className={linkClasses}>Cropwise Bids</Link>
                                <Link to="/buyerlogout" className={linkClasses}>Logout</Link>
                              </>
                            )}
                          </nav>
                        </div>
                      )}
                
                      {/* Toggle Buttons */}
                      <div className="flex justify-center gap-6 mt-8">
                        <button
                          onClick={() => {
                            setShowfarmers(true);
                            setShowbuyers(false);
                          }}
                          className="px-6 py-2 bg-yellow-400 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-500 hover:text-white transition duration-300"
                        >
                          🌾 Farmer Account
                        </button>
                        <button
                          onClick={() => {
                            setShowbuyers(true);
                            setShowfarmers(false);
                          }}
                          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
                        >
                          🛒 Buyer Account
                        </button>
                      </div>
                    </div>
                  );
                };
                
                export default Header;
                