"use client";

import { urlForImage } from "@/lib/image";
import Image from "next/image";
import { useState } from "react";

interface appProps {
  images: any;
}

function ImageGallery({ images }: appProps) {
  const [bigImage, setBigImage] = useState(images[0]);
  const handleClick = (image:any) => {
    setBigImage(image)
  }
  return (
    <div className="grid gap-4 lg:grid-cols-5">
      <div className="order-last flex gap-4 col-span-5">
        {images.map((image: any, idx: any) => (
          <div key={idx} className="overflow-hidden rounded-lg h-[200px] bg-gray-100">
            <Image
              src={urlForImage(image).url()}
              width={200}
              height={200}
              alt="photo"
              // className="h-full w-full object-cover object-center cursor-pointer"
              onClick={() => handleClick(image)}
            />
          </div>
        ))}

       
      </div>
      <div className="relative overflow-hidden rounded-lg h-[500px] bg-gray-100 lg:col-span-5">
          <Image
            src={urlForImage(bigImage).url()}
            width={500}
            height={500}
            alt="photo"
            className="h-full w-full object-cover object-center"
          />
        </div>
    </div>
  );
}

export default ImageGallery;
