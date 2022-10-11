
import Image from "next/image";
import React, { useState } from "react";
const Index = () => {
  const [showMenu, setShowMenu] = useState(false);

    return (
      <>
        <div class=" mx-auto pt-12 ">
            <div class="container mx-auto">
                <p class="cursor-pointer text-gray-600 text-sm pb-2">
                    Home - Men - Products - Filters
                </p>
                <div class="flex justify-between mx-auto items-center my-auto pb-12">
                    <div>
                        <p class="font-semibold text-gray-800 text-4xl pb-4">
                            Watches
                        </p>
                        <p class="font-medium text-gray-600">
                            09 products
                        </p>
                    </div>
                    <button class="px-6 py-4 bg-gray-800 text-white flex space-x-2 transition duration-300 hover:bg-gray-700">
                    <Image className="cursor-pointer" src="/frame.svg" width={24} height={24} alt=""/>
                        <p>
                            Filters
                        </p>
                    </button>
                </div>
            </div>
            <div class="py-12 bg-gray-50 ">
                <div class="flex justify-between container mx-auto ">
                    <div class="grid grid-cols-4 w-full gap-x-44">
                        <div>
                            <div class="flex space-x-2 pb-8"> 
                            <Image className="cursor-pointer" src="/frame (3).svg" width={24} height={24} alt=""/>
                            <p class="text-2xl font-medium text-gray-800">
                                Colors
                            </p>
                        </div>
                        <div class="flex flex-col space-y-8">
                            <div class="flex space-x-2 items-center my-auto">
                                <div class="w-4 h-4 rounded-full bg-white">
                                </div>
                                <p class="text-gray-600">
                                    White
                                </p>
                            </div>
                            <div class="flex space-x-2 items-center my-auto">
                                <div class="w-4 h-4 rounded-full bg-red-600">
                                </div>
                                <p class="text-gray-600">
                                    Red
                                </p>
                            </div>
                            <div class="flex space-x-2 items-center my-auto">
                                <div class="w-4 h-4 rounded-full bg-indigo-600">
                                </div>
                                <p class="text-gray-600">
                                    Indigo
                                </p>
                            </div>
                            <div class="flex space-x-2 items-center my-auto">
                                <div class="w-4 h-4 rounded-full bg-black">
                                </div>
                                <p class="text-gray-600">
                                    Black
                                </p>
                            </div>
                            <div class="flex space-x-2 items-center my-auto">
                                <div class="w-4 h-4 rounded-full bg-purple-600">
                                </div>
                                <p class="text-gray-600">
                                    Purple
                                </p>
                            </div>
                            <div class="flex space-x-2 items-center my-auto">
                                <div class="w-4 h-4 rounded-full bg-gray-600">
                                </div>
                                <p class="text-gray-600">
                                    Grey
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="flex space-x-2 pb-8">
                        <Image className="cursor-pointer" src="/frame (4).svg" width={24} height={24} alt=""/>
                            <p class="text-2xl font-medium text-gray-800">
                                Material
                            </p>
                        </div>
                        <div class="flex gap-x-2 items-center pb-8">
                            <div class="bg-white dark:bg-gray-800 border rounded-sm border-gray-400 dark:border-gray-700 mr-2 w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                <input type="checkbox" class="checkbox opacity-0 absolute cursor-pointer w-full h-full"/>
                                    <div class="check-icon hidden bg-gray-800 text-white rounded-sm">
                                        <svg class="icon icon-tabler icon-tabler-check" 
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
                                <p class="text-gray-600">
                                    Leather band
                                </p>
                            </div>
                        <div class="flex gap-x-2 items-center">
                            <div class="bg-white dark:bg-gray-800 border rounded-sm border-gray-400 dark:border-gray-700 mr-2 w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                <input type="checkbox" class="checkbox opacity-0 absolute cursor-pointer w-full h-full"/>
                                    <div class="check-icon hidden bg-gray-800 text-white rounded-sm">
                                        <svg class="icon icon-tabler icon-tabler-check" 
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
                                <p class="text-gray-600">
                                    Metal band
                                </p>
                            </div>
                        </div>
                    <div>
                        <div class="flex space-x-2 pb-8">
                        <Image className="cursor-pointer" src="/frame (5).svg" width={24} height={24} alt=""/>
                            <p class="text-2xl font-medium text-gray-800">
                                Size
                            </p>
                        </div>
                        <div class="flex flex-col gap-y-8">
                            <div class="flex gap-x-2 items-center ">
                                <div class="bg-white dark:bg-gray-800 border rounded-sm border-gray-400 dark:border-gray-700 mr-2 w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                    <input type="checkbox" class="checkbox opacity-0 absolute cursor-pointer w-full h-full"/>
                                        <div class="check-icon hidden bg-gray-800 text-white rounded-sm">
                                            <svg class="icon icon-tabler icon-tabler-check" 
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
                                    <p class="text-gray-600">
                                        Large
                                    </p>
                                </div>
                            <div class="flex gap-x-2 items-center">
                                <div class="bg-white dark:bg-gray-800 border rounded-sm border-gray-400 dark:border-gray-700 mr-2 w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                    <input type="checkbox" class="checkbox opacity-0 absolute cursor-pointer w-full h-full"/>
                                        <div class="check-icon hidden bg-gray-800 text-white rounded-sm">
                                            <svg class="icon icon-tabler icon-tabler-check" 
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
                                    <p class="text-gray-600">
                                        Medium
                                    </p>
                                </div>
                                <div class="flex gap-x-2 items-center">
                                    <div class="bg-white dark:bg-gray-800 border rounded-sm border-gray-400 dark:border-gray-700 mr-2 w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                        <input type="checkbox" class="checkbox opacity-0 absolute cursor-pointer w-full h-full"/>
                                            <div class="check-icon hidden bg-gray-800 text-white rounded-sm">
                                                <svg class="icon icon-tabler icon-tabler-check" 
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
                                        <p class="text-gray-600">
                                            Small
                                        </p>
                                    </div>
                                    <div class="flex gap-x-2 items-center ">
                                        <div class="bg-white dark:bg-gray-800 border rounded-sm border-gray-400 dark:border-gray-700 mr-2 w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                            <input type="checkbox" class="checkbox opacity-0 absolute cursor-pointer w-full h-full"/>
                                                <div class="check-icon hidden bg-gray-800 text-white rounded-sm">
                                                    <svg class="icon icon-tabler icon-tabler-check" 
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
                                            <p class="text-gray-600">
                                                Mini
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                        <div class="flex space-x-2 pb-8">
                                        <Image className="cursor-pointer" src="/frame (7).svg" width={24} height={24} alt=""/>
                                            <p class="text-2xl font-medium text-gray-800">
                                                Collection
                                            </p>
                                        </div>
                                        <div class="flex gap-x-2 items-center pb-8">
                                            <div class="bg-white dark:bg-gray-800 border rounded-sm border-gray-400 dark:border-gray-700 mr-2 w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                            <input type="checkbox" class="checkbox opacity-0 absolute cursor-pointer w-full h-full"/>
                                                <div class="check-icon hidden bg-gray-800 text-white rounded-sm">
                                                    <svg class="icon icon-tabler icon-tabler-check" 
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
                                            <p class="text-gray-600">
                                                Luxe signature
                                            </p>
                                        </div>
                                        <div class="flex gap-x-2 items-center">
                                            <div class="bg-white dark:bg-gray-800 border rounded-sm border-gray-400 dark:border-gray-700 mr-2 w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                                <input type="checkbox" class="checkbox opacity-0 absolute cursor-pointer w-full h-full"/>
                                                <div class="check-icon hidden bg-gray-800 text-white rounded-sm">
                                                    <svg class="icon icon-tabler icon-tabler-check" 
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
                                            <p class="text-gray-600">
                                                Luxe x London
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                <Image className="cursor-pointer" src="/frame 5.svg" width={24} height={24} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div class="container w-full">
                            <button class="mt-12 justify-right flex ml-auto px-6 py-[18px] bg-gray-800 font-medium text-white hover:bg-gray-700 transition duration-300">
                                Apply Filters
                            </button>
                        </div>
                    </div>

    </>
    );
    };
        
    export default Index;
