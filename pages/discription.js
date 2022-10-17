import { useEffect, useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import React from 'react';const discription = () => {
  const [showMenu, setShowMenu] = useState(false);
  

    return (
      <>

<div className='overflow-x-hidden'>
        <div className='container'>
      <div className=" justify-center mx-auto border-b">
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

    



        
        
        <div>
            <main>
                <div className="container mx-auto justify-center ">
                    <div className="flex flex-col xl:flex-row lg:flex-row md:flex-col sm:flex-col justify-center space-x-8">
                    <div className="container mx-auto pt-32 pb-32" id='contact-section'>
                <div className=" mt-12">
                    <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={100}
                    totalSlides={6}
                    visibleSlides={1}
                    className="lg:pr-80 md:pr-0"
                    infinite={true}
                    step={1}
                  >
                    {" "}
                    <div className="">
                      <div className="flex justify-between items-center " >
                        <ButtonNext>
                          {" "}
                          <Image className="cursor-pointer absolute top-[36%] px-[11px] py-[7.5px] bg-gray-200 z-30 left-7" src="/chevron-back (1).png" width={22} height={22} alt=""/>
                          <Image className="absolute top-[36%] px-[11px] py-[7.5px] bg-gray-200 z-30 right-7 cursor-pointer" src="/chevron-back.png" width={22} height={22} alt=""/>
                        </ButtonNext>
                      </div>
                      <Slider>
                        <div className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                          <Slide index={0}>
                            {" "}
                            <Image
                              src="/apple-1500849 1.png"
                              width="624"
                              height="536"
                              className="my-auto "
                            />
                          </Slide>
                          <Slide index={1}>
                            {" "}
                            <Image
                              src="/apple-1500849 1.png"
                              width="624"
                              height="536"
                              className="my-auto px-8"
                            />
                          </Slide>
                          <Slide index={2}>
                            {" "}
                            <Image
                              src="/apple-1500849 1.png"
                              width="624"
                              height="536"
                              className="my-auto"
                            />
                          </Slide>
                          <Slide index={3}>
                            {" "}
                            <Image
                              src="/apple-1500849 1.png"
                              width="624"
                              height="536"
                              className="my-auto"
                            />
                          </Slide>
                          <Slide index={4}>
                            {" "}
                            <Image
                              src="/apple-1500849 1.png"
                              width="624"
                              height="536"
                              className="my-auto px-8"
                            />
                          </Slide>
                          <Slide index={5}>
                            {" "}
                            <Image
                              src="/apple-1500849 1.png"
                              width="624"
                              height="536"
                              className="my-auto"
                            />
                          </Slide>
                        </div>
                      </Slider>
                    </div>
                  </CarouselProvider>
                        
                  </div>            
                </div>



                <div className="lg:w-[624px] w-full">
                    <p className="lg:text-2xl md:text-xl text-lg font-semibold text-gray-800 lg:pb-4 pb-2">
                        Apple Watch Series 7
                    </p>
                    <div className="lg:pb-6 pb-4 flex space-x-2">
                        <p className=" text-gray-600 lg:text-base text-sm">
                            by 
                        </p>
                        <p className="font-medium font-gray-800 lg:text-base text-sm">
                            Apple
                        </p>
                    </div>
                    <div className="flex space-x-8 lg:pb-6 pb-4">
                        <p className="lg:text-2xl md:text-xl text-lg text-gray-800 font-semibold pr-8 border-r border-gray-900">
                            $400
                        </p>
                        <div className="grid gap-x-4 grid-cols-5">
                            <Image className="cursor-pointer" src="/star (5) 1.svg" width={22} height={22} alt=""/>
                            <Image className="cursor-pointer" src="/star (5) 1.svg" width={22} height={22} alt=""/>
                            <Image className="cursor-pointer" src="/star (5) 1.svg" width={22} height={22} alt=""/>
                            <Image className="cursor-pointer" src="/star (5) 1.svg" width={22} height={22} alt=""/>
                            <Image className="cursor-pointer" src="/star (5) 1.svg" width={22} height={22} alt=""/>
                        </div>
                    </div>
                    <div className="pb-6 flex space-x-2 lg:pb-8 md:pb-6 pb-4">
                        <p className=" text-gray-600 lg:text-base text-sm">
                            Availability -
                        </p>
                        <p className="font-medium font-gray-800 lg:text-base text-sm">
                            In stock
                        </p>
                    </div>
                    <div>
                        <div className="pb-6 grid lg:grid-cols-4 grid-cols-3 pb-8 lg:gap-y-4 gap-y-2 justify-center mx-auto">
                            <p className="font-medium font-gray-800">
                                Dimensions:
                            </p>
                            <p className=" text-gray-600 col-span-3 ">
                                45 x 38 x 10.7 mm (1.77 x 1.50 x 0.42 in)
                            </p>
                            <p className="font-medium font-gray-800">
                                Weight:
                            </p>
                            <p className=" text-gray-600 col-span-3 ">
                                32 g (41mm), 38.8 g (45mm) (1.13 oz)
                            </p>
                            <p className="font-medium font-gray-800">
                                Body:
                            </p>
                            <p className=" text-gray-600 col-span-3 ">
                                Glass front, ceramic/sapphire crystal back, aluminum frame
                            </p>
                            <p Nameclass="font-medium font-gray-800">
                                Display:
                            </p>
                            <p className=" text-gray-600 col-span-3 ">
                                Retina LTPO OL
                            </p>
                            <p className="font-medium font-gray-800">
                                CPU:
                            </p>
                            <p className=" text-gray-600 col-span-3 ">
                                Dual-core
                            </p>
                            <p className="font-medium font-gray-800">
                                GPU:
                            </p>
                            <p className=" text-gray-600 col-span-3 ">
                                PowerVR
                            </p>
                            <p className="font-medium font-gray-800">
                                Sensors:
                            </p>
                            <div className=" text-gray-600 flex flex-col col-span-3 ">
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
                    <div className="lg:pb-8 pb-4">
                        <div className="flex space-x-5 items-center my-auto lg:pb-4 pb-2">
                        <Image className="cursor-pointer" src="/checkmark.svg" width={20} height={20} alt=""/>
                            <p className="font-medium text-gray-800">
                                Free Shipping
                            </p>
                        </div>
                        <div className="flex space-x-5 items-center my-auto">
                        <Image className="cursor-pointer" src="/checkmark.svg" width={20} height={20} alt=""/>
                            <p className="font-medium text-gray-800">
                                EMI Options Available
                            </p>
                        </div>
                    </div>
                </div>
          </div>



          <div className="flex flex-col xl:flex:row lg:flex-row md:flex-col sm:flex-col space-x-8 items-center xl:items-end lg:items-end md:items-start sm:items-start justify-between pb-[88px] ">
            <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-x-8">
                <div className="flex flex-col justify-center mx-auto w-[187px] space-y-6">
                <Image className="cursor-pointer" src="/vector (7).svg" width={22} height={22} alt=""/>
                    <p className="text-gray-600 font-sm text-center">
                        Get free delivery, or pick up available items at an Apple Store
                    </p>
                </div>
                <div className="flex flex-col justify-center mx-auto w-[187px] space-y-6">
                <Image className="cursor-pointer" src="/fitness.svg" width={22} height={22} alt=""/>
                    <p className="text-gray-600 font-sm text-center">
                        Get 3 months of Apple Fitness+ with an Apple Watch
                    </p>
                </div>
                <div className="flex flex-col justify-center mx-auto w-[187px] space-y-6">
                <Image className="cursor-pointer" src="/vector (7).svg" width={22} height={22} alt=""/>
                    <p className="text-gray-600 font-sm text-center">
                        14 calendar days to return an item from the date you received it.
                    </p>
                </div>
            </div>
            <div classnam="">
                <div classnam="flex flex-col xl:flex-row lg:flex-row md:flex-col sm:flex-col space-x-8 items-center border-t border-gray-400 border-b py-6 w-[624px]">
                    <p className="font-medium text-gray-800">
                        Band colors
                    </p>
                    <div class="grid grid-cols-4 gap-x-2 my-4">
                        <Image className="cursor-pointer" src="/ellipse 94.svg" width={20} height={20} alt=""/>
                        <Image className="cursor-pointer" src="/ellipse 94.svg" width={20} height={20} alt=""/>
                        <Image className="cursor-pointer" src="/ellipse 94.svg" width={20} height={20} alt=""/>
                        <Image className="cursor-pointer" src="/ellipse 94.svg" width={20} height={20} alt=""/>
                    </div>
                </div>
                <div className="flex flex-col xl:flex-row lg:flex-row md:flex-col sm:flex-col gap-y-8 space-x-6 items-center mt-8 ">
                    <button className="text-white bg-gray-800 py-[18px] hover:bg-gray-700 transition duration-300 font-medium relative px-9 flex space-x-2 items-center my-auto gap-x-2 ">
                    <Image className="cursor-pointer" src="/cart.svg" width={20} height={20} alt=""/>
                        <p>
                            View in cart
                        </p>
                    </button>
                    <button className="text-gray-800 bg-white hover:bg-gray-50 border border-gray-600 transition duration-300 py-4 font-medium relative px-9 w-[186px] flex space-x-2 items-center my-auto gap-x-2">
                    <Image className="cursor-pointer" src="/heart.svg" width={20} height={20} alt=""/>
                        <p>
                            Wishlist
                        </p>
                    </button>
                    <button className="py-[19px] px-7 bg-gray-100">
                    <Image className="cursor-pointer" src="/share-social.svg" width={20} height={20} alt=""/>
                    </button>
                </div>
            </div>
        </div>

            <div className="my-20 flex flex-col xl:flex-row lg:flex-row md:flex-col sm:flex-col items-center my-auto bg-gray-50 ml-4 mx-auto">
              <Image className="cursor-pointer" src="/nathan-oakley--o3qNM4D994-unsplash 1 (1).png" width={845} height={644} alt=""/>
              <div className="py-14 px-10 flex flex-col lg:-ml-20 ml-0 z-40 lg:h-[364px] bg-white lg:w-[380px] ">
                <p className="text-4xl font-semibold text-gray-800 lg:pb-4 pb-2">
                  Join us!
                </p>
                <p className="text-gray-600 lg:pb-8 pb-4">
                  Subscribe to our newsletter, receive the latest updates and exclusive promotions just into your inbox
                </p>
                <input placeholder="Your email address" className="pb-4 border-b border-gray-400 placeholder-gray-700 lg:mb-4 mb-2"/>
                <button className="text-white font-semibold bg-gray-800 py-4 hover:bg-gray-700 transition duration-300">
                  Sign Up
                </button>
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
  
  export default discription;
