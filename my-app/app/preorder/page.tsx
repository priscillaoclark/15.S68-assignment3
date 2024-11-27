import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, MoveRight } from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const productImages = [
  {
    src: "/images/product_image.jpg",
    alt: "PupStrings Canine Guitar Kit - Main View",
  },
  {
    src: "/images/product_detail1.jpg",
    alt: "PupStrings LED Learning System",
  },
  {
    src: "/images/product_detail2.jpg",
    alt: "PupStrings Paw Picks",
  },
  {
    src: "/images/product_detail3.jpg",
    alt: "PupStrings Training Guide",
  },
];

export default function PreorderPage() {
  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto space-y-16">
        {/* Header Section */}
        <section className="text-center space-y-4">
          <Badge className="bg-[#7EB9B2] text-white hover:bg-[#7EB9B2]/90">
            Pre-order Now
          </Badge>
          <h1 className="text-4xl font-semibold tracking-tight">
            PupStrings Canine Guitar Kit
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Be among the first to introduce your dog to the world of music
          </p>
        </section>

        {/* Product Section */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Image Carousel */}
          <div className="relative">
            <Carousel className="w-full">
              <CarouselContent>
                {productImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative aspect-square rounded-lg overflow-hidden">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={index === 0}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {productImages.map((_, index) => (
                <div
                  key={index}
                  className="h-2 w-2 rounded-full bg-[#7EB9B2]/50"
                />
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold">$199.99 USD</h2>
              <p className="text-muted-foreground">
                Special pre-order price - Limited time offer
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">What's Included:</h3>
              <div className="space-y-2">
                {[
                  "Pet-friendly guitar with durable strings",
                  "Interactive LED learning system",
                  "Comfortable paw picks",
                  "Training guide and app access",
                  "1-year warranty",
                  "30-day money-back guarantee",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#7EB9B2]" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pre-order Button */}
            <div className="space-y-4">
              <Button
                size="lg"
                className="w-full gap-2 bg-[#7EB9B2] hover:bg-[#7EB9B2]/90"
              >
                Complete Pre-order <MoveRight className="w-4 h-4" />
              </Button>
              <p className="text-sm text-center text-muted-foreground">
                Expected shipping: Within 4-6 weeks
              </p>
            </div>

            {/* Additional Information */}
            <div className="space-y-4 pt-8 border-t">
              <h3 className="text-xl font-semibold">Why Pre-order?</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ Guaranteed first batch delivery</li>
                <li>✓ Exclusive early-bird pricing</li>
                <li>✓ Free premium carrying case ($49 value)</li>
                <li>✓ Priority customer support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
