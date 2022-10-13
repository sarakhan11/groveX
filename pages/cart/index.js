import { useEffect, useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import React from 'react';const Index = () => {
  const [showMenu, setShowMenu] = useState(false);
  

    return (
      <>

    <div className="container xl:flex hidden mx-auto justify-between items-center my-auto z-30 pt-9 pb-16 w-[80%] ">
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
        <div className="flex items-center my-auto space-x-6">
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



      <div className='' id=''>
                <main>
                  <div class="container w-[80%] mx-auto mb-20" >
                    <div class="flex items-center my-auto pb-2">
                    <Image className="cursor-pointer" src="/icons8-back-24.png" width={12} height={12} alt=""/>
                      <p class="text-sm text-gray-600 pl-2">
                        Back
                      </p>
                    </div>
                    <p class="text-4xl font-semibold text-gray-900 pb-12">
                      Bag
                    </p>
                    <div class="flex space-x-8">
                      <div class="py-8 border-t border-gray-100 w-[848px] border-b">
                        <div class="flex justify-between items-start mx-auto">
                          <div class="flex space-x-6 pb-16">
                          <Image className="cursor-pointer" src="/unsplash_ZB4eQcNqVUs.png" width={164} height={166} alt=""/>
                            <div>
                              <p class="text-xs text-gray-900">RF293</p>
                              <p class="font-semibold text-gray-800 pt-2 text-gray-900 pb-6">Apple Watch Series 7</p>
                              <p class="text-gray-600 text-xs pb-4">Height: 10 inches</p>
                              <p class="text-gray-600 text-xs pb-4">Color: Black</p>
                              <p class="text-gray-600 text-xs pb-6">Composition: 100% calf leather</p>
                              <div>
                                <button class="text-sm text-gray-900 pr-6 underline">
                                  Add to favorites
                                </button>
                                <button class="text-sm text-red-500 underline">
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                          <div class="flex flex-col justify-between items-center py-8">
                            <div class="flex items-center my-auto space-x-4 p-2 border relative">
                              <select type="text" name="language" required="" id="language" class="bg-white w-full appearance-none pr-6 pl-2 text-sm border border-transparent focus:outline-none text-gray-900 rounded">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                              <div class="z-30 cursor-pointer pointer-events-none absolute right-4">
                              <Image className="cursor-pointer" src="/akar-icons_chevron-left.svg" width={16} height={16} alt=""/>
                              </div>
                            </div>
                            <p class="font-semibold text-gray-900 mb-auto mt-24">$9,000</p>
                          </div>
                        </div>
                        <div class="flex justify-between items-start mx-auto py-8 border-t border-gray-100">
                          <div class="flex space-x-6 ">
                          <Image className="cursor-pointer" src="/unsplash_ZB4eQcNqVUs.png" width={164} height={166} alt=""/>
                          <div>
                            <p class="text-xs text-gray-900">RF293</p>
                            <p class="font-semibold text-gray-800 pt-2 text-gray-900 pb-6">Apple Watch Series 7</p>
                            <p class="text-gray-600 text-xs pb-4">Height: 10 inches</p>
                            <p class="text-gray-600 text-xs pb-4">Color: Black</p>
                            <p class="text-gray-600 text-xs pb-6">Composition: 100% calf leather</p>
                            <div>
                              <button class="text-sm text-gray-900 pr-6 underline">Add to favorites</button>
                              <button class="text-sm text-red-500 underline">Remove</button>
                            </div>
                          </div>
                        </div>
                        <div class="flex flex-col justify-between items-center">
                          <div class="flex items-center my-auto space-x-4 p-2 border relative">
                            <select type="text" name="language" required="" id="language" class="bg-white w-full appearance-none pr-6 pl-2 text-sm border border-transparent focus:outline-none text-gray-900 rounded">
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                            </select>
                            <div class="z-30 cursor-pointer pointer-events-none absolute right-4">
                            <Image className="cursor-pointer" src="/akar-icons_chevron-left.svg" width={16} height={16} alt=""/>
                            </div>
                          </div>
                          <p class="font-semibold text-gray-900 mb-auto mt-24">$9,000</p>
                        </div>
                      </div>
                      <div class="flex justify-between items-start mx-auto py-8 border-gray-100 border-t">
                        <div class="flex space-x-6 ">
                        <Image className="cursor-pointer" src="/unsplash_ZB4eQcNqVUs.png" width={164} height={166} alt=""/>
                          <div>
                          <p class="text-xs text-gray-900">RF293</p>
                          <p class="font-semibold text-gray-800 pt-2 text-gray-900 pb-6">Apple Watch Series 7</p>
                          <p class="text-gray-600 text-xs pb-4">Height: 10 inches</p>
                          <p class="text-gray-600 text-xs pb-4">Color: Black</p>
                          <p class="text-gray-600 text-xs pb-6">Composition: 100% calf leather</p>
                          <div>
                            <button class="text-sm text-gray-900 pr-6 underline">Add to favorites</button>
                            <button class="text-sm text-red-500 underline ">Remove</button>
                          </div>
                        </div>
                      </div>
                      <div class="flex flex-col justify-between items-center">
                        <div class="flex items-center my-auto space-x-4 p-2 border relative">
                          <select type="text" name="language" required="" id="language" class="bg-white w-full appearance-none pr-6 pl-2 text-sm border border-transparent focus:outline-none text-gray-900 rounded">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                          </select>
                          <div class="z-30 cursor-pointer pointer-events-none absolute right-4">
                          <Image className="cursor-pointer" src="/akar-icons_chevron-left.svg" width={16} height={16} alt=""/>
                          </div>
                        </div>
                        <p class="font-semibold text-gray-900 mb-auto mt-24 ">$9,000</p>
                      </div>
                    </div>
                  </div>
                  <div class="bg-gray-50 w-[400px] p-8 flex flex-col justify-between">
                    <div>
                      <p class="text-gray-900 text-4xl font-semibold pb-16">Summary</p>
                      <div class="grid grid-cols-2 gap-y-5 items-end w-[246px]">
                        <p class="text-gray-900">Subtotal</p><p class="text-gray-900 text-right"> $9,000</p>
                        <p class="text-gray-900">Shipping</p><p class="text-gray-900 text-right"> $30</p>
                        <p class="text-gray-900">Tax</p><p class="text-gray-900 text-right"> $39</p>
                      </div>
                    </div>
                    <div class="flex flex-col">
                      <div class="flex justify-between pb-6">
                        <p class="text-gray-900 text-2xl">Total</p>
                        <p class="font-semibold text-2xl text-gray-900">$10,240</p>
                      </div>
                      <link href='/checkout'>
                        <button class="bg-gray-900 text-white py-5">
                            Checkout
                        </button>
                      </link>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>



          

          <div className="py-12 container w-[80%] mx-auto">
              <div className="py-14 border-t border-b mb-12 border-gray-200 grid grid-cols-4">
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
  
  export default Index;
