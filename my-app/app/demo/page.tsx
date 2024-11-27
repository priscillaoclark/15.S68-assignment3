import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";

export default function DemoPage() {
  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto space-y-16">
        {/* Header Section */}
        <section className="text-center space-y-4">
          <Badge className="bg-[#7EB9B2] text-white hover:bg-[#7EB9B2]/90">
            Product Demo
          </Badge>
          <h1 className="text-4xl font-semibold tracking-tight">
            See PupStrings in Action
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Watch how dogs of all breeds discover the joy of making music
          </p>
        </section>

        {/* Video Embed Section */}
        <section className="space-y-8">
          <div className="aspect-video w-full bg-muted rounded-lg overflow-hidden relative">
            {/* Placeholder for video embed */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-muted-foreground">Video Demo Coming Soon</p>
            </div>
          </div>
          <div className="flex justify-center">
            <Link href="/preorder">
              <Button
                size="lg"
                className="gap-4 bg-[#7EB9B2] hover:bg-[#7EB9B2]/90"
              >
                Pre-order Now <MoveRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Rest of the content remains the same */}
        {/* ... */}
      </div>
    </main>
  );
}
