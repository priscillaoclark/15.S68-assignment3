import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const Feature2 = () => (
  <div className="w-full py-10">
    <div className="container mx-auto">
      <div className="flex gap-4 flex-col items-start">
        <div>
          <Badge className="bg-[#7EB9B2] text-white hover:bg-[#7EB9B2]/90">
            Features
          </Badge>
        </div>
        <div className="flex gap-2 flex-col">
          <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
            A Complete Musical Experience for Your Dog
          </h2>
          <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
            Discover how PupStrings combines innovation with pet-friendly design
            to create the ultimate canine learning experience.
          </p>
        </div>
        <div className="flex gap-10 pt-12 flex-col w-full">
          <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
            <div className="flex flex-row gap-6 w-full items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Canine-Adapted Design</p>
                <p className="text-muted-foreground text-sm">
                  Specially designed with paw-friendly strumming pads and
                  ergonomic features
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Smart App Integration</p>
                <p className="text-muted-foreground text-sm">
                  AI-powered feedback and progress tracking via our interactive
                  app
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Scent-Enhanced Learning</p>
                <p className="text-muted-foreground text-sm">
                  Innovative scent-emitting fret markers for intuitive learning
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Reward System</p>
                <p className="text-muted-foreground text-sm">
                  Built-in treat dispenser to celebrate your dog's achievements
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Eco-Friendly</p>
                <p className="text-muted-foreground text-sm">
                  Sustainable and durable materials that are safe for your pet
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Community Access</p>
                <p className="text-muted-foreground text-sm">
                  Join a growing community of musical pet owners
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
