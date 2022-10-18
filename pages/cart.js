import { useEffect, useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import React from 'react';const Cart = () => {
  const [showMenu, setShowMenu] = useState(false);
  
  

    return (
      <>

<div className='overflow-x-hidden border-b border-gray-200 mb-4'>
        <div className='container'>
      <div className=" justify-center mx-auto">
        <div className="">
          <div className="flex flex-wrap justify-between items-center">
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

       
        <div className="container xl:flex hidden  mx-auto justify-between items-center my-auto z-30 pt-9 pb-16 w-[80%] container">
      <div className="flex gap-x-10 items-center my-auto">
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
        <div className="flex items-center my-auto space-x-6 -mr-36">
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

    




      <div className='' id=''>
                <main>
                  <div className="container w-[80%] mx-auto mb-20" >
                    <div className="flex items-center my-auto pb-2">
                    <Image className="cursor-pointer" src="/icons8-back-24.png" width={12} height={12} alt=""/>
                      <p className="text-sm text-gray-600 pl-2">
                        Back
                      </p>
                    </div>
                    <p className="text-4xl font-semibold text-gray-900 pb-12">
                      Bag
                    </p>
                    <div className="flex flex-col xl:flex-row lg:flex-row md:flex-col sm:flex-col space-x-8 mx-auto">
                      <div className="py-8 border-t border-gray-100 xl:w-[848px] sm:w-[448px] lg:w-[848px]md:w-[848px] w-[348px] border-b">
                        <div className="flex flex-col xl:flex-row lg:flex-row md:flex-row sm:flex-col xl:justify-between lg:justify-between md:justify-between sm:justify-center items-start mx-auto">
                          <div className="flex flex-col xl:flex-row lg:flex-row md:flex-col sm:flex-row space-x-6">
                          <Image className="cursor-pointer" src="/unsplash_ZB4eQcNqVUs.png" width={164} height={166} alt=""/>
                            <div>
                              <p className="text-xs text-gray-900">RF293</p>
                              <p className="font-semibold text-gray-800 pt-2 text-gray-900 pb-6">Apple Watch Series 7</p>
                              <p className="text-gray-600 text-xs pb-4">Height: 10 inches</p>
                              <p className="text-gray-600 text-xs pb-4">Color: Black</p>
                              <p className="text-gray-600 text-xs pb-6">Composition: 100% calf leather</p>
                              <div>
                                <button className="text-sm text-gray-900 pr-6 underline">
                                  Add to favorites
                                </button>
                                <button className="text-sm text-red-500 underline">
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col justify-between items-center py-8">
                            <div className="flex items-center my-auto space-x-4 p-2 border relative">
                              <select type="text" name="language" required="" id="language" className="bg-white w-full appearance-none pr-6 pl-2 text-sm border border-transparent focus:outline-none text-gray-900 rounded">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                              <div className="z-30 cursor-pointer pointer-events-none absolute right-4">
                              <Image className="cursor-pointer" src="/akar-icons_chevron-left.svg" width={16} height={16} alt=""/>
                              </div>
                            </div>
                            <p className="font-semibold text-gray-900 mb-auto mt-24">$9,000</p>
                          </div>
                        </div>
                        <div className="flex mt-4 flex-col xl:flex-row lg:flex-row md:flex-row sm:flex-col xl:justify-between lg:justify-between md:justify-between sm:justify-center items-start mx-auto py-8 border-t border-gray-100">
                          <div className="flex  flex-col xl:flex-row lg:flex-row md:flex-col sm:flex-row space-x-6 ">
                          <Image className="cursor-pointer" src="/unsplash_ZB4eQcNqVUs.png" width={164} height={166} alt=""/>
                          <div>
                            <p className="text-xs text-gray-900">RF293</p>
                            <p className="font-semibold text-gray-800 pt-2 text-gray-900 pb-6">Apple Watch Series 7</p>
                            <p className="text-gray-600 text-xs pb-4">Height: 10 inches</p>
                            <p className="text-gray-600 text-xs pb-4">Color: Black</p>
                            <p className="text-gray-600 text-xs pb-6">Composition: 100% calf leather</p>
                            <div>
                              <button className="text-sm text-gray-900 pr-6 underline">Add to favorites</button>
                              <button className="text-sm text-red-500 underline">Remove</button>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col justify-between items-center">
                          <div className="flex items-center my-auto space-x-4 p-2 border relative">
                            <select type="text" name="language" required="" id="language" className="bg-white w-full appearance-none pr-6 pl-2 text-sm border border-transparent focus:outline-none text-gray-900 rounded">
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                            </select>
                            <div className="z-30 cursor-pointer pointer-events-none absolute right-4">
                            <Image className="cursor-pointer" src="/akar-icons_chevron-left.svg" width={16} height={16} alt=""/>
                            </div>
                          </div>
                          <p className="font-semibold text-gray-900 mb-auto mt-24">$9,000</p>
                        </div>
                      </div>
                      <div className="flex  flex-col xl:flex-row lg:flex-row md:flex-row sm:flex-col xl:justify-between lg:justify-between md:justify-between sm:justify-center items-start mx-auto py-8 border-gray-100 border-t">
                        <div className="flex  flex-col xl:flex-row lg:flex-row md:flex-col sm:flex-row  space-x-6 ">
                        <Image className="cursor-pointer" src="/unsplash_ZB4eQcNqVUs.png" width={164} height={166} alt=""/>
                          <div>
                          <p className="text-xs text-gray-900">RF293</p>
                          <p className="font-semibold text-gray-800 pt-2 text-gray-900 pb-6">Apple Watch Series 7</p>
                          <p className="text-gray-600 text-xs pb-4">Height: 10 inches</p>
                          <p className="text-gray-600 text-xs pb-4">Color: Black</p>
                          <p className="text-gray-600 text-xs pb-6">Composition: 100% calf leather</p>
                          <div>
                            <button className="text-sm text-gray-900 pr-6 underline">Add to favorites</button>
                            <button className="text-sm text-red-500 underline ">Remove</button>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col justify-between items-center">
                        <div className="flex items-center my-auto space-x-4 p-2 border relative">
                          <select type="text" name="language" required="" id="language" className="bg-white w-full appearance-none pr-6 pl-2 text-sm border border-transparent focus:outline-none text-gray-900 rounded">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                          </select>
                          <div className="z-30 cursor-pointer pointer-events-none absolute right-4">
                          <Image className="cursor-pointer" src="/akar-icons_chevron-left.svg" width={16} height={16} alt=""/>
                          </div>
                        </div>
                        <p className="font-semibold text-gray-900 mb-auto mt-24 ">$9,000</p>
                      </div>
                    </div>
                  </div>

                  
                  <div className="bg-gray-50 lg:w-[400px] w-full p-8 flex flex-col justify-between">
                    <div>
                      <p className="text-gray-900 lg:text-4xl md:text-2xl text-lg font-semibold lg:pb-16 md:pb-8 pb-4">
                        Summary
                      </p>
                      <div className="grid grid-cols-2 lg:gap-y-5 gap-y-2 items-end lg:w-[246px] w-full">
                        <p className="text-gray-900">
                          Subtotal
                        </p>
                        <p className="text-gray-900 text-right"> 
                          $9,000
                        </p>
                        <p className="text-gray-900">
                          Shipping
                        </p>
                        <p className="text-gray-900 text-right"> 
                          $30
                        </p>
                        <p className="text-gray-900">
                          Tax
                        </p>
                        <p className="text-gray-900 text-right"> 
                          $39
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex justify-between pb-6">
                        <p className="text-gray-900 lg:text-2xl md:text-xl text-lg">
                          Total
                        </p>
                        <p className="font-semibold lg:text-2xl md:text-xl text-lg text-gray-900">
                          $10,240
                        </p>
                      </div>
                      <Link href="/checkout">
                        <button className="bg-gray-900 text-white py-5 transition duration-300 hover:bg-gray-800">
                          Checkout
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>



          

          <div className="py-12 container w-[80%] mx-auto">
              <div className="py-14 border-t border-b mb-12 border-gray-200 grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 gap-y-4 sm:grid-cols-1 ">
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
                  © 2021 Luxe Inc. All rights reserved.
                </p>
              </div>



      </>
    );
  };
  
  export default Cart;
