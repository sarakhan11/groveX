import { useEffect, useState } from 'react'
import Image from "next/image";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
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

        <div>
            <main>
                <div class="container mx-auto justify-center w-[80%]">
                    <div class="flex justify-center space-x-8">
                        <div class="carousel relative w-[624PX]">
                            <div class="horizontalSlider___281Ls carousel__slider carousel__slider--horizontal" aria-live="polite" aria-label="slider" tabindex="0" role="listbox">
                                <div class="carousel__slider-tray-wrapper carousel__slider-tray-wrap--horizontal">
                                    <div class="sliderTray___-vHFQ sliderAnimation___300FY carousel__slider-tray carousel__slider-tray--horizontal" style="width: 300%; transform: translateX(0%) translateX(0px); flex-direction: row;">
                                        <div tabindex="0" aria-selected="true" aria-label="slide" role="option" class="slide___3-Nqo slideHorizontal___1NzNV carousel__slide carousel__slide--visible" style="width: 33.3333%; padding-bottom: 33.3333%;"><div class="slideInner___2mfX9 carousel__inner-slide"> 
                                          <Image className="cursor-pointer" src="/apple-1500849 1.png" width={624} height={536} alt=""/>
                                        </div>
                                    </div>
                                    <div tabindex="-1" aria-selected="false" aria-label="slide" role="option" class="slide___3-Nqo slideHorizontal___1NzNV carousel__slide carousel__slide--hidden" style="width: 33.3333%; padding-bottom: 33.3333%;">
                                        <div class="slideInner___2mfX9 carousel__inner-slide">
                                          <Image className="cursor-pointer" src="/apple-1500849 1.png" width={624} height={536} alt=""/>
                                        </div>
                                    </div>
                                    <div tabindex="-1" aria-selected="false" aria-label="slide" role="option" class="slide___3-Nqo slideHorizontal___1NzNV carousel__slide carousel__slide--hidden" style="width: 33.3333%; padding-bottom: 33.3333%;">
                                        <div class="slideInner___2mfX9 carousel__inner-slide">
                                          <Image className="cursor-pointer" src="/apple-1500849 1.png" width={624} height={536} alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="button" aria-label="previous" class="buttonBack___1mlaL carousel__back-button absolute top-[36%] px-[11px] py-[7.5px] bg-gray-200 z-30 left-7">
                          <Image className="cursor-pointer" src="/chevron-back (1).png" width={22} height={22} alt=""/>
                        </button>
                        <button type="button" aria-label="next" class="buttonNext___2mOCa carousel__next-button absolute top-[36%] px-[11px] py-[7.5px] bg-gray-200 z-30 right-7">
                          <Image className="cursor-pointer" src="/chevron-back.png" width={22} height={22} alt=""/>
                        </button>
                    </div>
                    <div class="w-[624px]">
                        <p class="text-2xl font-semibold text-gray-800 pb-4">
                            Apple Watch Series 7
                        </p>
                        <div class="pb-6 flex space-x-2">
                            <p class=" text-gray-600">
                                by 
                            </p>
                            <p class="font-medium font-gray-800">
                                Apple
                            </p>
                        </div>
                        <div class="flex space-x-8 pb-6">
                            <p class="text-2xl text-gray-800 font-semibold pr-8 border-r border-gray-900">
                                $400
                            </p>
                            <div class="grid gap-x-4 grid-cols-5">
                              <Image className="cursor-pointer" src="/star (5) 1.svg" width={22} height={22} alt=""/>
                              <Image className="cursor-pointer" src="/star (5) 1.svg" width={22} height={22} alt=""/>
                              <Image className="cursor-pointer" src="/star (5) 1.svg" width={22} height={22} alt=""/>
                              <Image className="cursor-pointer" src="/star (5) 1.svg" width={22} height={22} alt=""/>
                              <Image className="cursor-pointer" src="/star (5) 1.svg" width={22} height={22} alt=""/>
                            </div>
                        </div>
                        <div class="pb-6 flex space-x-2 pb-8">
                            <p class=" text-gray-600">
                                Availability -
                            </p>
                            <p class="font-medium font-gray-800">
                                In stock
                            </p>
                        </div>
                        <div>
                            <div class="pb-6 grid grid-cols-4 pb-8 gap-y-4 justify-center mx-auto">
                                <p class="font-medium font-gray-800">
                                    Dimensions:
                                </p>
                                <p class=" text-gray-600 col-span-3 ">
                                    45 x 38 x 10.7 mm (1.77 x 1.50 x 0.42 in)
                                </p>
                                <p class="font-medium font-gray-800">
                                    Weight:
                                </p>
                                <p class=" text-gray-600 col-span-3 ">
                                    32 g (41mm), 38.8 g (45mm) (1.13 oz)
                                </p>
                                <p class="font-medium font-gray-800">
                                    Body:
                                </p>
                                <p class=" text-gray-600 col-span-3 ">
                                    Glass front, ceramic/sapphire crystal back, aluminum frame
                                </p>
                                <p class="font-medium font-gray-800">
                                    Display:
                                </p>
                                <p class=" text-gray-600 col-span-3 ">
                                    Retina LTPO OL
                                </p>
                                <p class="font-medium font-gray-800">
                                    CPU:
                                </p>
                                <p class=" text-gray-600 col-span-3 ">
                                    Dual-core
                                </p>
                                <p class="font-medium font-gray-800">
                                    GPU:
                                </p>
                                <p class=" text-gray-600 col-span-3 ">
                                    PowerVR
                                </p>
                                <p class="font-medium font-gray-800">
                                    Sensors:
                                </p>
                                <div class=" text-gray-600 flex flex-col col-span-3 ">
                                    <p>
                                        Accelerometer, gyro, heart rate, barometer, compass
                                    </p>
                                    <p>
                                        Natural language commands &amp; dictation 
                                    </p>
                                    <p> 
                                        Ultra Wideband (UWB) support
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="pb-8">
                            <div class="flex space-x-5 items-center my-auto pb-4">
                            <Image className="cursor-pointer" src="/cheeckmark.svg" width={20} height={20} alt=""/>
                                <p class="font-medium text-gray-800">
                                    Free Shipping
                                </p>
                            </div>
                            <div class="flex space-x-5 items-center my-auto">
                            <Image className="cursor-pointer" src="/checkmark.svg" width={20} height={20} alt=""/>
                                <p class="font-medium text-gray-800">
                                    EMI Options Available
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex space-x-8 items-end justify-between pb-[88px] ">
                    <div class="grid grid-cols-3 gap-x-8">
                        <div class="flex flex-col justify-center mx-auto w-[187px] space-y-6">
                        <Image className="cursor-pointer" src="/vector (7).svg" width={22} height={22} alt=""/>
                            <p class="text-gray-600 font-sm text-center">
                                Get free delivery, or pick up available items at an Apple Store
                            </p>
                        </div>
                        <div class="flex flex-col justify-center mx-auto w-[187px] space-y-6">
                        <Image className="cursor-pointer" src="/fitness.svg" width={22} height={22} alt=""/>
                            <p class="text-gray-600 font-sm text-center">
                                Get 3 months of Apple Fitness+ with an Apple Watch
                            </p>
                        </div>
                        <div class="flex flex-col justify-center mx-auto w-[187px] space-y-6">
                        <Image className="cursor-pointer" src="/vector (7).svg" width={22} height={22} alt=""/>
                            <p class="text-gray-600 font-sm text-center">
                                14 calendar days to return an item from the date you received it.
                            </p>
                        </div>
                    </div>
                    <div class="">
                    <div class="flex space-x-8 items-center border-t border-gray-400 border-b py-6 w-[624px]">
                        <p class="font-medium text-gray-800">
                            Band colors
                        </p>
                        <div class="grid grid-cols-4 gap-x-2">
                          <Image className="cursor-pointer" src="/ellipse 94.svg" width={20} height={20} alt=""/>
                          <Image className="cursor-pointer" src="/ellipse 94.svg" width={20} height={20} alt=""/>
                          <Image className="cursor-pointer" src="/ellipse 94.svg" width={20} height={20} alt=""/>
                          <Image className="cursor-pointer" src="/ellipse 94.svg" width={20} height={20} alt=""/>
                        </div>
                    </div>
                    <div class="flex space-x-6 items-center mt-8 ">
                        <button class="text-white bg-gray-800 py-[18px] hover:bg-gray-700 transition duration-300 font-medium relative px-9 flex space-x-2 items-center my-auto gap-x-2 ">
                        <Image className="cursor-pointer" src="/cart.svg" width={20} height={20} alt=""/>
                            <p>
                                View in cart
                            </p>
                        </button>
                        <button class="text-gray-800 bg-white hover:bg-gray-50 border border-gray-600 transition duration-300 py-4 font-medium relative px-9 w-[186px] flex space-x-2 items-center my-auto gap-x-2">
                        <Image className="cursor-pointer" src="/heart.svg" width={20} height={20} alt=""/>
                            <p>
                                Wishlist
                            </p>
                        </button>
                        <button class="py-[19px] px-7 bg-gray-100">
                        <Image className="cursor-pointer" src="/share-social.svg" width={20} height={20} alt=""/>
                        </button>
                    </div>
                </div>
            </div>
            <div class="my-20 flex items-center my-auto bg-gray-50">
              <Image className="cursor-pointer" src="/nathan-oakley--o3qNM4D994-unsplash 1 (1).png" width={845} height={644} alt=""/>
                <div class="py-14 px-10 flex flex-col -ml-20 z-40 h-[364px] bg-white w-[380px]">
                    <p class="text-4xl font-semibold text-gray-800 pb-4">
                        Join us!
                    </p>
                    <p class="text-gray-600 pb-8">
                        Subscribe to our newsletter, receive the latest updates 
                        and exclusive promotions just into your inbox
                    </p>
                    <input placeholder="Your email address" class="pb-4 border-b border-gray-400 placeholder-gray-700 mb-4"/>
                        <button class="text-white font-semibold bg-gray-800 py-4 hover:bg-gray-700 transition duration-300">
                            Sign Up
                        </button>
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
