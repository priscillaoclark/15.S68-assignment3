import { Hero3 } from "@/components/hero";
import { Feature2 } from "@/components/features";
import { Testimonials1 } from "@/components/testimonial";
import { Case1 } from "@/components/case";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="space-y-8">
        <Hero3 />
        <div className="container mx-auto">
          <Separator />
        </div>
        <Feature2 />
        <Case1 />
        <div className="container mx-auto">
          <Separator />
        </div>
        <Testimonials1 />
      </div>
    </main>
  );
}
