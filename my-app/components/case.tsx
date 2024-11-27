"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

// Add an array of case study images
const caseImages = [
  "/images/case1.jpg",
  "/images/case2.jpg",
  "/images/case3.jpg",
  "/images/case4.jpg",
  "/images/case5.jpg",
  "/images/case6.jpg",
  "/images/case7.jpg",
  "/images/case8.jpg",
  "/images/case9.jpg",
  "/images/case10.jpg",
  "/images/case11.jpg",
  "/images/case12.jpg",
  // Add more image paths as needed
];

export const Case1 = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 1000);
  }, [api, current]);

  return (
    <div className="w-full py-10">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {caseImages.map((image, index) => (
                <CarouselItem className="basis-1/4 lg:basis-1/6" key={index}>
                  <div className="flex rounded-md aspect-square bg-muted items-center justify-center p-2">
                    <Image
                      src={image}
                      alt={`Case study ${index + 1}`}
                      width={200}
                      height={200}
                      className="object-cover rounded-md"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};
