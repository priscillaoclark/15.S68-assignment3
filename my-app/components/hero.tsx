import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const Hero3 = () => (
  <div className="w-full pt-20">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
        <div className="flex gap-4 flex-col">
          <div>
            <Badge className="bg-[#7EB9B2] text-white hover:bg-[#7EB9B2]/90">
              Revolutionary Pet Innovation!
            </Badge>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
              Unleash Your Dog's <span className="text-[#7EB9B2]">Musical</span>{" "}
              Talent
            </h1>
            <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
              PupStrings is the world's first canine guitar learning kit,
              combining cutting-edge technology with pet-friendly design to
              teach your dog the joy of making music. Transform playtime into a
              musical adventure!
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <Link href="/demo">
              <Button size="lg" className="gap-4" variant="outline">
                Watch Demo
              </Button>
            </Link>
            <Link href="/preorder">
              <Button
                size="lg"
                className="gap-4 bg-[#7EB9B2] hover:bg-[#7EB9B2]/90"
              >
                Pre-order Now <MoveRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="relative rounded-md aspect-square overflow-hidden">
          <Image
            src="/images/product_image.jpg"
            alt="PupStrings Canine Guitar Kit"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </div>
  </div>
);
