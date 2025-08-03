import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Heart, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/ngo.jpg')" }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Together We Can
            <span className="block text-secondary">Make a Difference</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Join our mission to create positive change in communities worldwide. 
            Every action matters, every voice counts.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="secondary" size="xl" asChild>
              <Link to="/volunteer">
                Become a Volunteer
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
              asChild
            >
              <Link to="/about">Learn More</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start mb-2">
                <Users className="h-6 w-6 text-secondary mr-2" />
                <span className="text-3xl font-bold text-white">5,000+</span>
              </div>
              <p className="text-white/80">Active Volunteers</p>
            </div>

            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start mb-2">
                <Heart className="h-6 w-6 text-secondary mr-2" />
                <span className="text-3xl font-bold text-white">25,000+</span>
              </div>
              <p className="text-white/80">Lives Impacted</p>
            </div>

            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start mb-2">
                <Globe className="h-6 w-6 text-secondary mr-2" />
                <span className="text-3xl font-bold text-white">50+</span>
              </div>
              <p className="text-white/80">Countries Reached</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
