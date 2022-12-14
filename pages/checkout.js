import { useEffect, useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import React from 'react';const Checkout = () => {
  const [showMenu, setShowMenu] = useState(false);
  

    return (
      <>

<div className='overflow-x-hidden border-b border-gray-100'>
        <div className='container '>
      <div className=" justify-center mx-auto ">
        <div className="">
          <div className="flex items-center">
            <button
          className=" block xl:hidden text-gray pt-10 px-6"
          onClick={() => setShowMenu(!showMenu)}
        >
           <svg
                fill="#000000"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
                width="30px"
                height="30px"
              >
                <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z" />
              </svg>
        </button>

       
        <div className="xl:flex hidden pl-20 mx-auto justify-between items-center my-auto z-30 pt-9 pb-16 w-[90%] container">
          <div className="flex gap-x-10 items-center my-auto ">
            <Image className="cursor-pointer" src="/icons8-search.svg" width={24} height={24} alt=""/>
              <a className=" font-normal cursor-pointer z-30 text-gray-800 font-[Work+Sans]">
                Men
              </a>
              <a className=" font-normal cursor-pointer z-30 text-gray-800 font-[Work+Sans]">
                Women
              </a>
              <a className=" font-normal cursor-pointer z-30 text-gray-800 font-[Work+Sans]">
                Kids
              </a>
            </div>
            <div className="my-auto">
              <Image className="cursor-pointer" src="/AnitaJane.svg" width={115} height={24} alt=""/>
            </div>
            <div className="flex items-center my-auto space-x-6 -mr-36 ">
              <a className=" font-normal cursor-pointer z-30 text-gray-800 font-[Work+Sans]">
                Join Newsletter
              </a>
              <a className=" font-normal cursor-pointer z-30 text-gray-800 font-[Work+Sans]">
                Blogs
              </a>
              <a className=" font-normal cursor-pointer z-30 text-gray-800 font-[Work+Sans]">
                About
              </a>
            </div>
          </div>

            <nav
        className={showMenu
            ? "absolute top-0 xl:hidden w-full h-full transform -translate-x-0 z-40 transition duration-700"
            : "absolute top-0 xl:hidden w-full h-full transform -translate-x-full z-40 transition duration-700"} id="mobile-nav">
               <div className=" items-right justify-center flex absolute right-8 p-4 -top-0  text-white z-40 cursor-pointer">
              <Image
                src="/icons8-multiply-50.png"
                width={40}
                height={40}
                alt=""
                onClick={() => setShowMenu(!showMenu)}
                />
            </div>
            
            <div className="container xl:flex xl:hidden block bg-gray-100 w-full mx-auto justify-between items-center my-auto z-30 pt-9 pb-16 w-[80%] ">
              <div className="flex flex-col gap-x-10 items-center my-auto">
                <Image className="cursor-pointer" src="/icons8-search.svg" width={24} height={24} alt=""/>
                  <a className=" font-normal cursor-pointer z-30 text-gray-800 font-[Work+Sans]">
                    Men
                  </a>
                  <a className=" font-normal cursor-pointer z-30 text-gray-800 font-[Work+Sans]">
                    Women
                  </a>
                  <a className=" font-normal cursor-pointer z-30 text-gray-800 font-[Work+Sans]">
                    Kids
                  </a>
                </div>
          
                <div className="flex flex-col items-center my-auto space-x-6">
                  <a className=" font-normal cursor-pointer z-30 text-gray-800 font-[Work+Sans]">
                    Join Newsletter
                  </a>
                  <a className=" font-normal cursor-pointer z-30 text-gray-800 font-[Work+Sans]">
                    Blogs
                  </a>
                  <a className=" font-normal cursor-pointer z-30 text-gray-800 font-[Work+Sans]">
                    About
                  </a>
                </div>
              </div>
          </nav>
        </div>
      </div>
    </div>
</div>
</div>

    
        <div className="container w-[842px] mx-auto justify-center">
            <p className="text-4xl font-semibold text-gray-800 pb-12">
                Check out
            </p>
            <p className="text-xl font-semibold text-gray-800 w-[50%] pb-6">
                Contact Information
            </p>
            <p className="text-gray-600 pb-4 border-b border-gray-200 mb-6">
                Email
            </p>
            <div className="flex pb-7">
                <div className="bg-white dark:bg-gray-800 border rounded-sm border-gray-400 dark:border-gray-700 mr-2 w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                    <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full"/>
                    <div className="check-icon hidden bg-gray-800 text-white rounded-sm">
                    <svg className="icon icon-tabler icon-tabler-check"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        stroke-width="1.5" 
                        stroke="currentColor" 
                        fill="none" 
                        stroke-linecap="round" 
                        stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z"></path>
                        <path d="M5 12l5 5l10 -10"></path>
                    </svg>
                </div>
            </div>
            <p className="text-sm text-gray-600">
                Email me with news and offers.
            </p>
        </div>
        <div>
            <p className="text-xl font-semibold text-gray-800 pb-6">
                Shipping Details
            </p>
            <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-y-6 gap-x-8">
                <input placeholder="First Name" className="border-b border-gray-200 pb-4 placeholder-gray-600"/>
                <input placeholder="Last Name" className="border-b border-gray-200 pb-4 placeholder-gray-600"/>
                <input placeholder="Address" className="border-b border-gray-200 pb-4 placeholder-gray-600 col-span-2"/>
                <input placeholder="Address (Line 02)" className="border-b border-gray-200 pb-4 placeholder-gray-600 col-span-2"/>
                <div className="relative">
                    <select aria-label="select a city" type="text" name="city" required="" id="City" className="bg-white appearance-none -z-10 text-gray-600 w-full border-b border-gray-200 pb-4 text-black-primary invalid:text-gray-600 rounded focus:outline-none">
                        <option value="" disabled="">Town / City</option>
                        <option value="Switzerland">Faisalabad</option>
                        <option value="America">Lahore</option>
                        <option value="Australia">Islamabad</option>
                    </select>
                    <div className="z-30 cursor-pointer absolute top-0 right-4 ">
                        <Image className="cursor-pointer" src="/vector (8).svg" width={14} height={14} alt=""/>
                    </div>
                </div>
                <div className="relative">
                    <select aria-label="select a city" type="text" name="region" required="" id="region" className="bg-white appearance-none -z-10 text-gray-600 w-full border-b border-gray-200 pb-4 text-black-primary invalid:text-gray-600 rounded focus:outline-none">
                        <option value="" disabled="">Region (Optional)</option>
                        <option value="Switzerland">California</option>
                        <option value="America">Africa</option>
                        <option value="Australia">India</option>
                    </select>
                    <div className="z-30 cursor-pointer absolute top-0 right-4 ">
                        <Image className="cursor-pointer" src="/vector (8).svg" width={14} height={14} alt=""/>
                    </div>
                </div>
                <div className="relative">
                    <select aria-label="select a city" type="text" name="region" required="" id="region" className="bg-white appearance-none -z-10 text-gray-600 w-full border-b border-gray-200 pb-4 text-black-primary invalid:text-gray-600 rounded focus:outline-none">
                        <option value="" disabled="">Country / Region</option>
                        <option value="Switzerland">California</option>
                        <option value="America">Africa</option>
                        <option value="Australia">India</option>
                    </select>
                    <div class="z-30 cursor-pointer absolute top-0 right-4 ">
                        <Image className="cursor-pointer" src="/vector (8).svg" width={14} height={14} alt=""/>
                    </div>
                </div>
                <div className="relative">
                    <select aria-label="select a city" type="text" name="region" required="" id="region" className="bg-white appearance-none -z-10 text-gray-600 w-full border-b border-gray-200 pb-4 text-black-primary invalid:text-gray-600 rounded focus:outline-none">
                        <option value="" disabled="">Zip Code</option>
                        <option value="90321">90321</option>
                        <option value="29000">29000</option>
                        <option value="72500">72500</option>
                    </select>
                    <div className="z-30 cursor-pointer absolute top-0 right-4 ">
                        <Image className="cursor-pointer" src="/vector (8).svg" width={14} height={14} alt=""/>
                    </div>
                </div>
                <input placeholder="Phone Number" class="border-b border-gray-200 pb-4 placeholder-gray-600"/>
            </div>
        </div>
        <div className="flex pt-6 pb-12">
            <div className="bg-white dark:bg-gray-800 border rounded-sm border-gray-400 dark:border-gray-700 mr-2 w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                <input type="checkbox" className="checkbox opacity-0 absolute cursor-pointer w-full h-full"/>
                    <div className="check-icon hidden bg-gray-800 text-white rounded-sm">
                        <svg className="icon icon-tabler icon-tabler-check" 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="20" 
                            height="20" 
                            viewBox="0 0 24 24" 
                            stroke-width="1.5" 
                            stroke="currentColor" 
                            fill="none" 
                            stroke-linecap="round" 
                            stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z"></path>
                            <path d="M5 12l5 5l10 -10"></path>
                        </svg>
                    </div>
                </div>
                <p className="text-sm text-gray-600">
                    Save this information for next time.
                </p>
            </div>
            <p className="text-gray-800 font-semibold text-xl pb-6">
                Order Summary
            </p>
            <div className="flex flex-col pb-20">
                <div className="flex space-x-8 w-full pb-8">
                <Image className="cursor-pointer" src="/rectangle 193.png" width={186} height={150} alt=""/>
                    <div className="w-full">
                        <div className="flex justify-between mx-auto">
                            <p className="text-gray-800 font-medium text-lg pb-4">
                                Apple Watch 1
                            </p>
                            <p className="text-gray-800 font-semibold text-lg ml-auto">
                                $20
                            </p>
                        </div>
                        <p className="text-gray-600 pb-4">
                            White
                        </p>
                        <p className="text-gray-600 pb-4">
                            Small
                        </p>
                        <p className="text-gray-600 pb-4">
                            Quantity: 1
                        </p>
                    </div>
                </div>
                <div className="flex space-x-8 w-full pb-8">
                <Image className="cursor-pointer" src="/rectangle 194.png" width={186} height={150} alt=""/>
                    <div className="w-full">
                        <div className="flex justify-between mx-auto">
                            <p className="text-gray-800 font-medium text-lg pb-4">
                                Apple Watch 2
                            </p>
                            <p className="text-gray-800 font-semibold text-lg ml-auto">
                                $40
                            </p>
                        </div>
                        <p className="text-gray-600 pb-4">
                            Black &amp; Orange
                        </p>
                        <p className="text-gray-600 pb-4">
                            Size: 41
                        </p>
                        <p className="text-gray-600 pb-4">
                            Quantity: 2
                        </p>
                    </div>
                </div>
                <div className="flex space-x-8 w-full pb-8">
                <Image className="cursor-pointer" src="/rectangle 193.png" width={186} height={150} alt=""/>
                    <div className="w-full">
                        <div className="flex justify-between mx-auto">
                            <p className="text-gray-800 font-medium text-lg pb-4">
                                Apple Watch 3
                            </p>
                            <p className="text-gray-800 font-semibold text-lg ml-auto">
                                $70
                            </p>
                        </div>
                        <p className="text-gray-600 pb-4">
                        Blue, Gray, Black
                        </p>
                        <p className="text-gray-600 pb-4">
                            Size: 41
                        </p>
                        <p className="text-gray-600 pb-4">
                            Quantity: 1
                        </p>
                    </div>
                </div>
                
                <div className="flex justify-between">
                    <p className="text-lg text-gray-600">
                        Total items
                    </p>
                    <p className="text-gray-600 font-semibold text-lg pb-6">
                        03
                    </p>
                </div>
                <div className="flex justify-between">
                    <p className="text-lg text-gray-600">
                        Total Charges
                    </p>
                    <p className="text-gray-600 font-semibold text-lg pb-6">
                        $80
                    </p>
                </div>
                <div className="flex justify-between pb-6">
                    <p className="text-lg text-gray-600">
                        Shipping charges
                    </p>
                    <p className="text-gray-600 font-semibold text-lg pb-6">
                        $90
                    </p>
                </div>
                <div className="flex justify-between py-4 border-t border-b border-gray-200 mb-12">
                    <p className="text-lg text-gray-800 font-medium">
                        Total 
                    </p>
                    <p className="text-gray-800 font-semibold text-lg ">
                        $170
                    </p>
                </div>
                <p className="font-semibold text-gray-800 text-xl pb-6">
                    Payment Method
                </p>
                <div className="grid grid-cols-2 gap-x-6 gap-y-6 pb-12">
                    <input placeholder="Name of Card" className="border-b border-gray-200 pb-4 placeholder-gray-600"/>
                    <input placeholder="Card Number" className="border-b border-gray-200 pb-4 placeholder-gray-600"/>
                    <div class="relative">
                        <select aria-label="select a city" type="text" name="region" required="" id="region" className="bg-white appearance-none -z-10 w-full text-gray-600 border-b border-gray-200 pb-4 text-black-primary invalid:text-gray-600 rounded focus:outline-none">
                            <option value="" disabled="">Expiry Date</option>
                            <option value="90321">2023</option>
                            <option value="29000">2024</option>
                            <option value="72500">2025</option>
                        </select>
                        <div className="z-30 cursor-pointer absolute top-0 right-4 ">
                            <Image className="cursor-pointer" src="/vector (8).svg" width={14} height={14} alt=""/>
                        </div>
                    </div>
                    <input placeholder="CVC" className="border-b border-gray-200 pb-4 placeholder-gray-600"/>
                </div>
                <button className="bg-gray-800 text-white font-medium py-4 hover:bg-gray-600 transition duration-700">
                    Complete Purchase
                </button>
            </div>
        </div>



      <div className="py-12 container w-[80%] mx-auto">
              <div className="py-14 border-t border-b mb-12 border-gray-200 grid grid  grid-cols-1 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 gap-y-4 sm:grid-cols-1 ">
                <div>
                  <p className="text-xl font-semibold text-gray-600 pb-8">
                    Customer services
                  </p>
                  <div className="grid grid-cols-1 gap-y-6">
                    <a className=" transition duration-300 text-gray-600 cursor-pointer">
                      Contact
                    </a>
                    <a className=" transition duration-300 text-gray-600 cursor-pointer">
                      Track Order
                    </a>
                    <a className=" transition duration-300 text-gray-600 cursor-pointer">
                      Delivery &amp; returns
                    </a>
                    <a className=" transition duration-300 text-gray-600 cursor-pointer">
                      Return policy
                    </a>
                    <a className=" transition duration-300 text-gray-600 cursor-pointer">
                      Sitemap
                    </a>
                  </div>
                </div>
                <div>
                  <p className="text-xl font-semibold text-gray-600 pb-8">
                    Online services</p>
                    <div className="grid grid-cols-1 gap-y-6">
                      <a className=" transition duration-300 text-gray-600 cursor-pointer">
                        Payment methods
                      </a>
                      <a className=" transition duration-300 text-gray-600 cursor-pointer">
                        Shipping options
                      </a>
                      <a className=" transition duration-300 text-gray-600 cursor-pointer">
                        My account
                      </a>
                      <a className=" transition duration-300 text-gray-600 cursor-pointer">
                        E-services
                      </a>
                      <a className=" transition duration-300 text-gray-600 cursor-pointer">
                        Frequently asked questions
                      </a>
                    </div>
                  </div>
                  <div>
                    <p className="text-xl font-semibold text-gray-600 pb-8">
                      Privacy &amp; legal
                    </p>
                    <div className="grid grid-cols-1 gap-y-6">
                      <a className=" transition duration-300 text-gray-600 cursor-pointer">
                        Cookies
                      </a>
                      <a className=" transition duration-300 text-gray-600 cursor-pointer">
                        Privacy policy
                      </a>
                      <a className=" transition duration-300 text-gray-600 cursor-pointer">
                        Terms &amp; conditions
                      </a>
                    </div>
                  </div>
                  <div>
                    <p className="text-xl font-semibold text-gray-600 pb-8">
                      More from luxe
                    </p>
                    <div className="grid grid-cols-1 gap-y-6">
                      <a className=" transition duration-300 text-gray-600 cursor-pointer">
                        Luxe app for iOS &amp; Android
                      </a>
                      <a className=" transition duration-300 text-gray-600 cursor-pointer">
                        The company
                      </a>
                      <a className=" transition duration-300 text-gray-600 cursor-pointer">
                        Media publications
                      </a>
                      <a className=" transition duration-300 text-gray-600 cursor-pointer">
                        Careers at luxe
                      </a>
                      <a className=" transition duration-300 text-gray-600 cursor-pointer">
                        luxe &amp; CSR
                      </a>
                    </div>
                  </div>
                </div>
              </div>



              <div className="container mx-auto justify-center flex flex-col text-center pb-12 mb-52">
                <div className="pb-3">
                <Image className="cursor-pointer" src="/luxe.png" width={57} height={30} alt=""/>
                </div>
                <p className="text-sm">
                  ?? 2021 Luxe Inc. All rights reserved.
                </p>
              </div>



      </>
    );
  };
  
  export default Checkout;
