import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Users, 
  Target, 
  Globe, 
  Leaf, 
  GraduationCap, 
  ArrowRight,
  Quote
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const impactAreas = [
    {
      icon: GraduationCap,
      title: "Education & Literacy",
      description: "Providing quality education and literacy programs to underserved communities worldwide.",
      stat: "15,000+ students supported"
    },
    {
      icon: Leaf,
      title: "Environmental Conservation",
      description: "Protecting our planet through sustainable practices and conservation initiatives.",
      stat: "50+ reforestation projects"
    },
    {
      icon: Heart,
      title: "Healthcare Access",
      description: "Ensuring basic healthcare reaches remote and marginalized communities.",
      stat: "100+ health clinics supported"
    },
    {
      icon: Users,
      title: "Community Development",
      description: "Empowering communities to build sustainable livelihoods and infrastructure.",
      stat: "200+ communities transformed"
    }
  ];

  const testimonials = [
    {
      quote: "Volunteering with HopeConnect changed my perspective on life. I've seen firsthand how small actions can create ripple effects of positive change.",
      author: "Maria Santos",
      role: "Volunteer since 2020"
    },
    {
      quote: "The education program helped my daughter learn to read. Now she dreams of becoming a teacher to help other children in our village.",
      author: "James Kiprotich",
      role: "Community Member, Kenya"
    },
    {
      quote: "Being part of this organization means being part of a family that truly cares about making the world a better place.",
      author: "Dr. Sarah Ahmed",
      role: "Medical Volunteer"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      
      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4">
              Our Mission
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Creating <span className="text-primary">Lasting Change</span> Together
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We believe that sustainable development comes from empowering communities 
              with the tools, knowledge, and resources they need to thrive independently. 
              Our collaborative approach ensures that every project creates lasting impact.
            </p>
          </div>

          {/* Impact Areas */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactAreas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <Card key={index} className="bg-gradient-card border-0 shadow-soft hover:shadow-strong transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-accent rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-accent-strong" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {area.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {area.description}
                    </p>
                    <Badge variant="secondary" className="text-sm">
                      {area.stat}
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of volunteers worldwide who are creating positive change 
            in their communities. Your journey starts with a single step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="xl" asChild>
              <Link to="/volunteer">
                Start Volunteering
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
              <Link to="/about">Learn About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Stories of Impact
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear from the volunteers and communities whose lives have been transformed through our work.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-soft">
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-muted-foreground mb-6 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-semibold">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold text-foreground">
                  NGO<span className="text-primary">Connect</span>
                </span>
              </div>
              <p className="text-muted-foreground mb-4">
                Empowering communities worldwide through sustainable development, 
                education, and collaborative partnerships that create lasting positive change.
              </p>
              <div className="flex space-x-4">
                <Badge variant="outline">Registered Charity</Badge>
                <Badge variant="outline">Global Impact</Badge>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link to="/about" className="block text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
                <Link to="/volunteer" className="block text-muted-foreground hover:text-primary transition-colors">
                  Volunteer
                </Link>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Donate
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-4">Impact Areas</h3>
              <div className="space-y-2">
                <p className="text-muted-foreground">Education</p>
                <p className="text-muted-foreground">Environment</p>
                <p className="text-muted-foreground">Healthcare</p>
                <p className="text-muted-foreground">Community Development</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-12 pt-8 text-center">
            <p className="text-muted-foreground">
              © 2025 NGOConnect. All rights reserved. Building a better world together.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
