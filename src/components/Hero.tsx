
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-purple-50 to-white">
      <div className="relative pt-16 pb-20 sm:pt-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Learn, Grow, and</span>
                <span className="block text-purple-600">Transform</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                Discover curated educational content, health insights, and engaging videos. Join our community of learners and start your journey today.
              </p>
              <div className="mt-8 flex gap-4 sm:justify-center lg:justify-start">
                <Button className="gap-2">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
            <div className="mt-16 sm:mt-24 lg:col-span-6 lg:mt-0">
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                alt="Learning Platform"
                className="rounded-xl shadow-xl ring-1 ring-gray-200"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
