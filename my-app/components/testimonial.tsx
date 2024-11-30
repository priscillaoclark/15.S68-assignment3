"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Dog Trainer",
    message:
      "PupStrings has revolutionized my training sessions. My clients' dogs are more engaged than ever, and the treat dispenser feature is genius!",
    avatar: "/avatars/sarah.jpg",
    initials: "SJ",
  },
  {
    name: "Mike Peterson",
    role: "Pet Parent",
    message:
      "My Golden Retriever, Max, went from chasing his tail to strumming tunes! The scent-enhanced learning really works - he picked it up in days.",
    avatar: "/avatars/mike.jpg",
    initials: "MP",
  },
  {
    name: "Dr. Emily Chen",
    role: "Veterinary Behaviorist",
    message:
      "As a vet, I'm impressed by how PupStrings combines mental stimulation with physical activity. It's perfect for high-energy breeds.",
    avatar: "/avatars/emily.jpg",
    initials: "EC",
  },
  {
    name: "Tom Wilson",
    role: "Professional Dog Walker",
    message:
      "The app integration is fantastic! My pack of dogs loves their musical playtime, and the progress tracking keeps their owners engaged.",
    avatar: "/avatars/tom.jpg",
    initials: "TW",
  },
  {
    name: "Lisa Martinez",
    role: "Agility Trainer",
    message:
      "PupStrings has become an essential part of our cool-down routine. The paw-friendly design is perfect for dogs of all sizes.",
    avatar: "/avatars/lisa.jpg",
    initials: "LM",
  },
];

export const Testimonials1 = () => {
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
    }, 4000);
  }, [api, current]);

  return (
    <div className="w-full py-10">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <div>
            <Badge className="bg-[#7EB9B2] text-white hover:bg-[#7EB9B2]/90">
              Testimonials
            </Badge>
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left mt-4">
              Loved by dogs and their humans alike
            </h2>
          </div>
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem className="lg:basis-1/2" key={index}>
                  <div className="bg-muted rounded-md h-full lg:col-span-2 p-6 aspect-video flex justify-between flex-col">
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col">
                        <p className="text-muted-foreground max-w-xs text-base">
                          "{testimonial.message}"
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex flex-col">
                          <p className="text-sm font-medium">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
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
