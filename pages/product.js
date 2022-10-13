import { useEffect, useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import React from 'react';const Product = () => {
  const [showMenu, setShowMenu] = useState(false);

    return (
      <>
        <div className=" mx-auto pt-12 container pb-14">
            <div className="flex justify-between mx-auto items-center my-auto pb-12">
                <p className="text-4xl text-gray-800 font-semibold">
                    The latest and greatest
                </p>
                <Link href='/filter'>
                    <Image className="cursor-pointer" src="/frame.svg" width={24} height={24} alt="" />
                </Link>
            </div>
            <div className="grid grid-cols-2 gap-x-8 pb-14">
                <div className="flex flex-col">
                <Image className="cursor-pointer" src="/apple-1500849 1 (1).png" width={624} height={590} alt=""/>
                    <div className="flex justify-between pb-2 pt-4">
                        <p className="text-gray-800 font-semibold">
                            Chanel
                        </p>
                        <p className="text-gray-800 font-semibold">
                            $175.00
                        </p>
                    </div>
                    <p className="text-gray-600">
                        Coco Nior 100ml
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                    <div className="flex flex-col"> 
                        <Image className="cursor-pointer" src="/photo-1610113774353-3c9ad8631abd.png" width={296} height={239} alt=""/>
                    <div className="pb-2 flex justify-between pt-4">
                        <p className="text-gray-800 font-semibold">
                            YSL
                        </p>
                        <p className="text-gray-800 font-semibold">
                            $140.00
                        </p>
                    </div>
                    <p className="text-gray-600">
                        Saint Laurnt 35ml
                    </p>
                </div>
                <div className="flex flex-col"> 
                    <Image className="cursor-pointer" src="/photo-1588436980006-0901cc8790d1.png" width={296} height={239} alt=""/>
                    <div className="pb-2 flex justify-between pt-4">
                        <p className="text-gray-800 font-semibold">
                            Calvin Klein
                        </p>
                        <p className="text-gray-800 font-semibold">
                            $40.00
                        </p>
                    </div>
                    <p className="text-gray-600">
                        CK one 135ml
                    </p>
                </div>
                <div className="flex flex-col"> 
                    <Image className="cursor-pointer" src="/photo-1592842125302-53494d164c90.png" width={296} height={239} alt=""/>
                    <div className="pb-2 flex justify-between pt-4">
                        <p className="text-gray-800 font-semibold"> 
                            Acqua Di Gio
                        </p>
                        <p className="text-gray-800 font-semibold">
                            $29.00
                        </p>
                    </div>
                    <p className="text-gray-600">
                        laurissi 85ml
                    </p>
                </div>
            <div className="flex flex-col"> 
                <Image className="cursor-pointer" src="/photo-1514348871858-1d3c20902571.png" width={296} height={239} alt=""/>
                <div className="pb-2 flex justify-between">
                    <p className="text-gray-800 font-semibold pt-4">
                        Acqua Di Gio
                    </p>
                    <p className="text-gray-800 font-semibold">
                        $85.00
                    </p>
                </div>
                <p className="text-gray-600">
                    Giorgio Armani 85ML
                </p>
            </div>
        </div>
        </div>
        <div>
            <div className="grid grid-cols-2 gap-x-8">
                <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                    <div className="flex flex-col"> 
                    <Image className="cursor-pointer" src="/photo-1592842414859-bca1263fabc2.png" width={296} height={239} alt=""/>
                    <div className="pb-2 flex justify-between pt-4">
                        <p className="text-gray-800 font-semibold">
                            D&amp;G
                        </p>
                        <p className="text-gray-800 font-semibold">
                            $29.00
                        </p>
                    </div>
                    <p className="text-gray-600">
                        Saint Laurnt 35ml
                    </p>
                </div>
                <div className="flex flex-col"> 
                <Image className="cursor-pointer" src="/photo-1600612156191-12fedf6117f9.png" width={296} height={239} alt=""/>
                    <div className="pb-2 flex justify-between pt-4">
                        <p className="text-gray-800 font-semibold">
                            Evlgari 
                        </p>
                        <p className="text-gray-800 font-semibold">
                            $49.00
                        </p>
                    </div>
                    <p className="text-gray-600">
                        CK one 135ml
                    </p>
                </div>
                <div className="flex flex-col"> 
                <Image className="cursor-pointer" src="/photo-1563170352-ba54fb431add.png" width={296} height={239} alt=""/>
                    <div className="pb-2 flex justify-between pt-4">
                        <p className="text-gray-800 font-semibold">
                            Chanel
                        </p>
                        <p className="text-gray-800 font-semibold">
                            $129.00
                        </p>
                    </div>
                    <p className="text-gray-600">
                        laurissi 85ml
                    </p>
                </div>
                <div className="flex flex-col"> 
                <Image className="cursor-pointer" src="/photo-1506915925765-ed31516b9080.png" width={296} height={239} alt=""/>
                <div className="pb-2 flex justify-between">
                    <p className="text-gray-800 font-semibold pt-4">
                        Chanel D&amp;G Acqua Di Gio
                    </p>
                    <p className="text-gray-800 font-semibold">
                        $59.00
                    </p>
                </div>
                <p className="text-gray-600">
                    Giorgio Armani 85ML
                </p>
            </div>
            </div>
            <div className="flex flex-col">
            <Image className="cursor-pointer" src="/photo-1582623082006-16d6ac6632ee.png" width={624} height={590} alt=""/>
                <div className="flex justify-between pb-2 pt-4">
                    <p className="text-gray-800 font-semibold">
                        Linterdit
                    </p>
                    <p className="text-gray-800 font-semibold">
                        $195.00
                    </p>
                </div>
                <p className="text-gray-600">
                    Coco Nior 100ml
                </p>
            </div>
        </div>
    </div>
</div>
</>
);
};
    
export default Product;
