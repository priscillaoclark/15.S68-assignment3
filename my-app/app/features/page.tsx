// app/features/page.tsx
import { Badge } from "@/components/ui/badge";

export default function FeaturesPage() {
  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto space-y-32">
        {/* Canine-Adapted Design Section */}
        <section id="design" className="scroll-mt-20">
          <div className="space-y-6">
            <Badge>Design</Badge>
            <h2 className="text-4xl font-semibold tracking-tight">
              Canine-Adapted Design
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h3 className="text-2xl font-medium">Paw-Friendly Interface</h3>
                <p className="text-muted-foreground">
                  Our specially designed touch-sensitive pads are perfectly
                  sized for dog paws, making it easy and comfortable for your
                  pet to create music. The ergonomic design ensures natural
                  positioning and prevents strain during play.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-medium">Durable Construction</h3>
                <p className="text-muted-foreground">
                  Built with high-grade, chew-resistant materials that can
                  withstand enthusiastic play while maintaining perfect tune and
                  responsiveness.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Smart App Integration Section */}
        <section id="app" className="scroll-mt-20">
          <div className="space-y-6">
            <Badge>Technology</Badge>
            <h2 className="text-4xl font-semibold tracking-tight">
              Smart App Integration
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h3 className="text-2xl font-medium">Real-Time Feedback</h3>
                <p className="text-muted-foreground">
                  Our AI-powered app provides instant feedback on your dog's
                  playing, offering encouragement and guidance through built-in
                  speakers and treat dispensing system.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-medium">Progress Tracking</h3>
                <p className="text-muted-foreground">
                  Monitor your pet's musical journey with detailed analytics,
                  achievement badges, and shareable progress reports perfect for
                  social media.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Training Program Section */}
        <section id="training" className="scroll-mt-20">
          <div className="space-y-6">
            <Badge>Education</Badge>
            <h2 className="text-4xl font-semibold tracking-tight">
              Training Program
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h3 className="text-2xl font-medium">Step-by-Step Learning</h3>
                <p className="text-muted-foreground">
                  Our scientifically designed curriculum gradually introduces
                  musical concepts through play, using positive reinforcement
                  and scent-based learning cues.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-medium">Professional Support</h3>
                <p className="text-muted-foreground">
                  Access to certified pet music trainers through video
                  consultations and weekly interactive online classes for both
                  you and your pet.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section id="stories" className="scroll-mt-20">
          <div className="space-y-6">
            <Badge>Testimonials</Badge>
            <h2 className="text-4xl font-semibold tracking-tight">
              Success Stories
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h3 className="text-2xl font-medium">
                  Max the Musical Mastiff
                </h3>
                <p className="text-muted-foreground">
                  "Max went from barking at guitars to playing simple melodies
                  in just two weeks! The treat-based reward system really helped
                  keep him motivated." - Sarah P., Dog Parent
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-medium">
                  Luna's Learning Journey
                </h3>
                <p className="text-muted-foreground">
                  "Our Border Collie Luna has found her perfect mental
                  stimulation. She now spends hours practicing and has even
                  performed at our local dog park!" - James R., Professional Dog
                  Trainer
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
