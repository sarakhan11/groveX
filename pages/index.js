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

    <div className='mt-20'>
      <div className="pt-2 container mx-auto flex flex-col xl:flex-row lg:flex-row md:flex-cols sm:flex-cols justify-between w-[80%] space-x-8">
        <div className="w-full xl:w-1/2 lg:w-1/2 md:w-11/12 sm:w-11/12 pb-4">
          <p className="font-bold text-3xl xl:text-6xl lg:text-6xl md:text-5xl sm:text-4xl text-gray-800 pb-12">
            Keep life organized and all in one place.
          </p>
          <p className="font-normal text-base font-[Work+Sans] text-gray-600 pb-10 pr-1 xl:pr-12 lg:pr-12 md:pr-12 sm:pr-2 mx-auto">
            Design made-to-order for private clients, with one or more fittings. 
            Have a workshop (atelier) in Paris. Deliver Friction-Free Customer Service. 
            Try Kayako free for 14 days.
          </p>
          <Link href='/discription'>
            <button className="px-12 py-4 bg-gray-800 hover:bg-gray-700 text-white font-medium">
                See More
            </button>
          </Link>
        </div>
          <Image className="cursor-pointer" src="/photo-1.png" width={594} height={404} alt=""/>
        </div>
      </div>


      <div className="pt-12 container mx-auto grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 pb-24 xl:w-[80%] lg:w-[90%] md:w-[80%] sm:w-[80%] w-[80%]">
        <div className="xl:mb-4 lg:mb-4 md:mb-4 sm:mb-4 mb-4 justify-center mx-auto flex flex-col border-2 border-gray-300 py-6 px-4 w-[260px] xl:w-[290px] lg:w-[300px] md:w-[280px] sm:w-[280px] text-center">
        <Image className="cursor-pointer" src="/vector (6).svg" width={24} height={24} alt=""/>
          <p className="font-medium text-sm pt-4">
            Interior minimalism for your property
          </p>
        </div>
        <div className="xl:mb-4 lg:mb-4 md:mb-4 sm:mb-4 mb-4 justify-center mx-auto flex flex-col border-2 border-gray-300 py-6 px-4 w-[260px] xl:w-[290px] lg:w-[300px] md:w-[280px] sm:w-[280px]  text-center">
        <Image className="cursor-pointer" src="/Group (1).svg" width={24} height={24} alt=""/>
          <p className="font-medium text-sm pt-4">
            Furniture minimalism for your property
          </p>
        </div>
        <div className="xl:mb-4 lg:mb-4 md:mb-4 sm:mb-4 mb-4 justify-center mx-auto flex flex-col border-2 border-gray-300 py-6 px-4 w-[260px] xl:w-[290px] lg:w-[300px] md:w-[280px] sm:w-[280px]  text-center">
        <Image className="cursor-pointer" src="/Group (2).svg" width={24} height={24} alt=""/>
          <p className="font-medium text-sm pt-4">
            Durability for your property
          </p>
        </div>
        <div className="xl:mb-4 lg:mb-4 md:mb-4 sm:mb-4 mb-4 justify-center mx-auto flex flex-col border-2 border-gray-300 py-6 px-4 w-[260px] xl:w-[290px] lg:w-[300px] md:w-[280px] sm:w-[280px]  text-center">
        <Image className="cursor-pointer" src="/like-svgrepo-com 1.svg" width={24} height={24} alt=""/>
            <p className="font-medium text-sm pt-4">
              Durability for your property
            </p>
          </div>
        </div>

        
        <div className="py-12 container mx-auto text-center w-9/12">
          <p className="text-4xl font-semibold text-gray-800">
            Grove X Collection
          </p>
          <div className="flex gap-x-8 items-start pt-10">
            <div className="flex flex-col">
              <div className="gap-y-4 mx-auto flex flex-col xl:flex-row lg:flex-row md:flex-col sm:flex-col gap-x-14 pb-10">
              <Image className="cursor-pointer" src="/image 237.png" width={296} height={345} alt=""/>
              <Image className="cursor-pointer" src="/image 238.png" width={296} height={345} alt=""/>
              <Image className="cursor-pointer" src="/image 239.png" width={296} height={345} alt=""/>
              </div>
              <div>
                <div className="flex flex-col xl:flex-row lg:flex-row md:flex-col sm:flex-col justify-between pb-12 text-left">
                  <p className=" text-gray-600 w-full xl:w-1/2 lg:w-1/2 md:w-10/12 sm:w-11/12">
                    Take a peek at our newly added dresses for winters! 
                    Get in quic as these hot items are sure to move fast.
                  </p>

                  <div className="gap-x-14 flex flex-col xl:flex-row lg:flex-row md:flex-col sm:flex-col items-left xl:items-center lg:items-center md:items-left sm:items-left xl:pt-0 lg:pt-0 md:pt-4 sm:pt-4 pt-4 my-auto">
                    <div className="flex gap-x-1 my-auto"> 
                      <Image className="cursor-pointer" src="/star (5) 1.svg" width={22} height={22} alt=""/>
                      <Image className="cursor-pointer" src="/star (5) 1.svg" width={22} height={22} alt=""/>
                      <Image className="cursor-pointer" src="/star (5) 1.svg" width={22} height={22} alt=""/>
                      <Image className="cursor-pointer" src="/star (5) 1.svg" width={22} height={22} alt=""/>
                      <Image className="cursor-pointer" src="/star (5) 1.svg" width={22} height={22} alt=""/>
                    </div>
                    <p className="text-sm text-gray-600 my-auto">
                      See all 18 reviews
                    </p>
                  </div>

                </div>
                <div className="flex flex-col xl:flex-row lg:flex-row md:flex-col sm:flex-col gap-x-4 ">
                  <input placeholder="Full Name" className="placeholder-gray-600 border-2 border-gray-200 p-4"/>
                    <input placeholder="Email Address" className="placeholder-gray-600 border-2 border-gray-200 p-4"/>
                      <Link href="/cart">
                        <button class="bg-gray-800 hover:bg-gray-700 font-medium text-white py-4 px-14">
                              Join Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                  <Image className="cursor-pointer" src="/image 240.png" width={296} height={529} alt=""/>
                </div>
              </div>


              <div className='pl-6 gap-y-8 grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-x-8 mt-24 mb-24 w-[95%]'>
                <h1 className='text-4xl font-semibold text-center my-auto'>
                  New Arrival
                </h1>
                <Image className='' src="/photo-1596451984027-a127248221e1.png" width={322} height={380} alt=""/> 
                <Image className='' src="/photo-1596451984032-aee3a42eb723.png" width={322} height={380} alt=""/> 
                <Image className='' src="/photo-1596451984287-7a274406cbca.png" width={322} height={380} alt=""/> 
              </div>



            <div className="py-12 container mx-auto text-center">
              <p className="text-4xl font-semibold text-gray-800 pb-12">
                Shop By Category
              </p>
              <div className="mx-auto justify-center items-center grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-8 gap-y-8">
                <div className="bg-gray-100 w-[380px] py-4 px-4">
                  Men
                </div>
                <div className="bg-gray-100 w-[380px] py-4 px-4">
                  Women
                </div>
                <div className="bg-gray-100 w-[380px] py-4 px-4">
                  Shoes
                </div>
                <div className="bg-gray-100 w-[380px] py-5 px-4">
                  Accossries
                </div>
                <div className="bg-gray-100 w-[380px] py-5 px-4">
                  Bags
                </div>
                <div className="bg-gray-100 w-[380px] py-5 px-4">
                  <Link href='/product'>
                      Watches
                  </Link>
                </div>
              </div>
            </div>


            <div className='py-20 mx-auto container justify-center ml-10'>
              <h1 className='text-4xl font-semibold text-gray-800 text-center'>
                Comfiest Sofa Seats
              </h1>
              <p className='text-base font-normal text-center lg:w-[624px] xl:w-[624px] md:w-[624px] sm:w-[424px] w-[324px] mx-auto mt-4'>
              It is a long established fact that a reader will be distracted 
              by the readable content of a page when looking at its layout. 
              </p>
              <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 mt-24 gap-x-8'>

                  <div className=''>
                    <div className=''>
                      <div className='flex'>
                        <Image className="cursor-pointer" src="/frame 811347.png" width={22} height={22} alt=""/>
                        <h1 className='ml-4'>
                          Plush Cushions
                        </h1>
                      </div>
                      <p className='mt-4 text-grau-800 text-base'>
                        It is a long established fact that a reader will be distracted 
                        by the readable content.
                      </p>
                    </div>

                    <div className='mt-20'>
                      <div className='flex'>
                        <Image className="cursor-pointer" src="/frame 811347.png" width={22} height={22} alt=""/>
                        <h1 className='ml-4'>
                          Plush Cushions
                        </h1>
                      </div>
                      <p className='mt-4 text-grau-800 text-base'>
                        It is a long established fact that a reader will be distracted 
                        by the readable content.
                      </p>
                    </div>

                    <div className='mt-20'>
                      <div className='flex'>
                        <Image className="cursor-pointer" src="/frame 811347.png" width={22} height={22} alt=""/>
                        <h1 className='ml-4'>
                          Plush Cushions
                        </h1>
                      </div>
                      <p className='mt-4 text-grau-800 text-base'>
                        It is a long established fact that a reader will be distracted 
                        by the readable content.
                      </p>
                    </div>
                  </div>

                  <Image className='' src="/arno-senoner-HFE2RyC76tw-unsplash-removebg-preview 1 (1).png" width={366} height={393} alt=""/> 

                  <div className=''>
                    <div>
                      <div className='flex'>
                        <Image className="cursor-pointer" src="/frame 811347.png" width={22} height={22} alt=""/>
                        <h1 className='ml-4'>
                          Plush Cushions
                        </h1>
                      </div>
                      <p className='mt-4 text-grau-800 text-base'>
                        It is a long established fact that a reader will be distracted 
                        by the readable content.
                      </p>
                    </div>

                    <div className='mt-20'>
                      <div className='flex'>
                        <Image className="cursor-pointer" src="/frame 811347.png" width={22} height={22} alt=""/>
                        <h1 className='ml-4'>
                          Plush Cushions
                        </h1>
                      </div>
                      <p className='mt-4 text-grau-800 text-base'>
                        It is a long established fact that a reader will be distracted 
                        by the readable content.
                      </p>
                    </div>

                    <div className='mt-20'>
                      <div className='flex'>
                        <Image className="cursor-pointer" src="/frame 811347.png" width={22} height={22} alt=""/>
                        <h1 className='ml-4'>
                          Plush Cushions
                        </h1>
                      </div>
                      <p className='mt-4 text-grau-800 text-base'>
                        It is a long established fact that a reader will be distracted 
                        by the readable content.
                      </p>
                    </div>
                  </div>

                </div>
              </div>



              <div className="py-12 container mx-auto w-[80%]">
                <p className="text-gray-600 text-sm pb-2">
                  Home - Men
                </p>
                <p className="text-4xl text-gray-800 font-semibold pb-10">
                  Watches
                </p>
                <div className="pt-8 border-t border-gray-200 flex justify-between">
                  <p className="text-xl text-gray-600 ">
                    485 Results
                  </p>
                  <div className="relative border border-gray-200 w-[194px] mb-14">
                    <select type="text" name="language" required="" id="language" className="font-medium appearance-none text-gray-600 pr-14 pt-2 pl-2 pb-3 focus:outline-none">
                      <option value="Switzerland">Recommended</option>
                      <option value="America">Premium</option>
                      <option value="Australia">Golden</option>
                    </select>
                  </div>
                </div>
                

               <div className='flex flex-col xl:flex-row lg:flex-row md:flex-col sm:flex-col'>

                <div className="w-3/12 border-t mr-8">
                  <div className="flex border-b py-3"> 
                    <div className="">
                      <h1 className="text-gray-800 font-bold">
                        Catagory
                      </h1>
                      <h1>
                        Premium
                      </h1>
                    </div>
                    <div className="ml-auto mt-3">
                    <Image className="cursor-pointer" src="/akar-icons_chevron-left.svg" width={16} height={16} alt=""/>
                    </div>
                  </div>
                  <div className="flex border-b py-3">
                    <div className="">
                      <h1 className="text-gray-800 font-bold">
                        Designer
                      </h1>
                      <h1>
                        Jackson James
                      </h1>
                    </div>
                    <div className="ml-auto mt-3">
                    <Image className="cursor-pointer" src="/akar-icons_chevron-left.svg" width={16} height={16} alt=""/>
                    </div>
                  </div>
                  <div className="flex border-b py-3">
                    <div className="">
                      <h1 className="text-gray-800 font-bold">
                        Color
                      </h1>
                      <h1>
                        All
                      </h1>
                    </div>
                    <div className="ml-auto mt-3">
                    <Image className="cursor-pointer" src="/akar-icons_chevron-left.svg" width={16} height={16} alt=""/>
                    </div>
                  </div>
                </div>
                
                <div className='flex flex-col'>
                  
                  <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-auto gap-x-14'>

                    <div>
                    <Image className='' src="/4R_WEmhx8og.png" width={322} height={380} alt=""/>
                      <p className="pt-4 font-semibold text-gray-800 text-2xl pb-2">
                        Luxe Collection
                      </p>
                      <p className="text-gray-600 pb-6 w-[297px]">
                        “Now is the winter of our discontent Made glorious summer by this sun of York”
                      </p>
                      <p className="text-gray-800 text-xl">
                        $ 55
                      </p>
                    </div>

                    <div>
                    <Image className='' src="/4R_WEmhx8og (2).png" width={322} height={380} alt=""/> 
                      <p className="pt-4 font-semibold text-gray-800 text-2xl pb-2">
                        Luxe Collection
                      </p>
                      <p className="text-gray-600 pb-6 w-[297px]">
                        “Now is the winter of our discontent Made glorious summer by this sun of York”
                      </p>
                      <p className="text-gray-800 text-xl">
                        $ 55
                      </p>
                    </div>


                    <div>
                      <Image className='' src="/4R_WEmhx8og (3).png" width={322} height={380} alt=""/> 
                      <p className="pt-4 font-semibold text-gray-800 text-2xl pb-2"> 
                        Omega Permium
                      </p>
                      <p className="text-gray-600 pb-6 w-[297px]">
                        “Now is the winter of our discontent Made glorious summer by this sun of York”
                      </p>
                      <p className="text-gray-800 text-xl">
                        $ 55
                      </p>
                    </div>
                  </div>

                  <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-9 mx-auto gap-x-14'>
                    <div>
                      <Image className='' src="/4R_WEmhx8og (3).png" width={322} height={380} alt=""/> 
                      <p className="pt-4 font-semibold text-gray-800 text-2xl pb-2">
                        Rolex Premium
                      </p>
                      <p className="text-gray-600 pb-6 w-[297px]">
                        “Now is the winter of our discontent Made glorious summer by this sun of York”
                      </p>
                      <p className="text-gray-800 text-xl">
                        $ 55
                      </p>
                    </div>

                    <div>
                      <Image className='' src="/4R_WEmhx8og (4).png" width={322} height={380} alt=""/> 
                      <p className="pt-4 font-semibold text-gray-800 text-2xl pb-2">
                        Galaxy 3 Premium
                      </p>
                      <p className="text-gray-600 pb-6 w-[297px]">
                        “Now is the winter of our discontent Made glorious summer by this sun of York”
                      </p>
                      <p className="text-gray-800 text-xl">
                        $ 55
                      </p>
                    </div>

                    <div>
                      <Image className='' src="/4R_WEmhx8og (5).png" width={322} height={380} alt=""/> 
                      <p className="pt-4 font-semibold text-gray-800 text-2xl pb-2">
                        Apple watch
                      </p>
                      <p className="text-gray-600 pb-6 w-[297px]">
                        “Now is the winter of our discontent Made glorious summer by this sun of York”
                      </p>
                      <p className="text-gray-800 text-xl">
                        $ 55
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              </div> 
            
        
       

              <div className="mt-12 py-12 container mx-auto w-[80%]">
                <p className="text-4xl font-semibold text-gray-800 pb-12 ">
                  Our Partners
                </p>
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-y-8 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-x-8">
                  <div className="flex space-x-6 items-start"> 
                  <Image className="cursor-pointer" src="/frame 2089.png" width={86} height={24} alt=""/>
                    <p className="text-gray-600 w-[295px]">
                      “ It was an absolute pleasure working with them. They are the best, Highly Recommended! ”
                    </p>
                  </div>
                  <div className="flex space-x-6 items-start"> 
                  <Image className="cursor-pointer" src="/bbc logo.png" width={84} height={24} alt=""/>
                    <p className="text-gray-600 w-[295px]">
                      “Love this! Does exactly what it is supposed to do and so far without any real issues.”
                    </p>
                  </div>
                  <div className="flex space-x-6 items-start"> 
                  <Image className="cursor-pointer" src="/british GQ logo.png" width={48} height={24} alt=""/>
                    <p className="text-gray-600 w-[295px]">
                      “Thanks. I am fully satisfied and would recommend buying from them as they have made my life so much easier :) ”
                    </p>
                  </div>
                </div>
              </div>


              <div className="pt-12 pb-10 grid gap-y-6 grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-x-8 container mx-auto w-[80%]">
                <Image className="cursor-pointer" src="/image 13.png" width={405} height={380} alt=""/>
                <Image className="cursor-pointer" src="/image 15.png" width={405} height={380} alt=""/>
                <Image className="cursor-pointer" src="/image 14.png" width={405} height={380} alt=""/>
              </div>


              <div className=" container mx-auto w-[80%] pb-12 my-10">
                <p className="text-4xl font-semibold text-gray-800 pb-6 text-center ">
                  Follow Us On Instagram
                </p>
                <p className="text-gray-600 pb-10 text-center">
                  Follow Us on Instagram @ourinstagramname and tag us to get Featured on our timeline
                </p>
                <button className="bg-gray-800 py-5 px-10 flex gap-x-4 items-center my-auto justify-center mx-auto mb-10">
                  <Image className="cursor-pointer" src="/logo-instagram.png" width={24} height={24} alt=""/>
                  <p className="text-white font-medium">
                    Follow Us On Instagram
                  </p>
                </button>
                <div className="pt-12 pb-10 grid gap-y-8 grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-x-8 container mx-auto">
                <Image className="cursor-pointer" src="/image 16.png" width={405} height={380} alt=""/>
                <Image className="cursor-pointer" src="/image 17.png" width={405} height={380} alt=""/>
                <Image className="cursor-pointer" src="/image 18.png" width={405} height={380} alt=""/>
              </div>
            </div>


            <div className="py-12 container w-[80%] mx-auto">
              <div className="py-14 border-t border-b mb-12 border-gray-200 grid  grid-cols-1 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 gap-y-4 sm:grid-cols-1 ">
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