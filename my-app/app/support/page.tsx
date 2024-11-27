import { Badge } from "@/components/ui/badge";
import { Contact1 } from "@/components/contact";

export default function SupportPage() {
  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto space-y-16">
        {/* Header Section */}
        <section className="text-center space-y-4">
          <Badge className="bg-[#7EB9B2] text-white hover:bg-[#7EB9B2]/90">
            Support
          </Badge>
          <h1 className="text-4xl font-semibold tracking-tight">
            How Can We Help?
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get the support you need to make your PupStrings journey successful
          </p>
        </section>

        {/* Contact Section */}
        <section>
          <Contact1 />
        </section>

        {/* FAQ Section */}
        <section className="space-y-8">
          <h2 className="text-2xl font-medium">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-medium">How long is battery life?</h3>
              <p className="text-muted-foreground">
                PupStrings provides up to 8 hours of continuous play on a single
                charge. Charging time is approximately 2 hours.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-medium">
                Is it suitable for all dog breeds?
              </h3>
              <p className="text-muted-foreground">
                Yes! PupStrings is designed to accommodate dogs of all sizes.
                The adjustable settings allow for customization based on your
                dog's size and play style.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
