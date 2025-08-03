import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Target, Users, Globe, Award, Lightbulb } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Executive Director",
      bio: "15+ years in nonprofit leadership, passionate about sustainable development.",
    },
    {
      name: "Michael Chen",
      role: "Program Manager",
      bio: "Expert in community outreach with a background in social work.",
    },
    {
      name: "Dr. Aisha Patel",
      role: "Research Director",
      bio: "PhD in Environmental Science, leading our impact measurement initiatives.",
    },
    {
      name: "David Rodriguez",
      role: "Operations Director",
      bio: "Former corporate strategist, now dedicated to optimizing our mission delivery.",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We lead with empathy and understanding in everything we do.",
    },
    {
      icon: Target,
      title: "Impact",
      description: "We focus on measurable, sustainable change in communities.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of working together towards common goals.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "We think globally while acting locally in diverse communities.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-card py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              Our Story
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              About <span className="text-primary">HopeConnect</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Founded in 2015, HopeConnect emerged from a simple belief: when communities 
              come together with purpose and compassion, extraordinary change becomes possible.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-gradient-card border-0 shadow-soft">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-primary mr-3" />
                  <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To empower communities worldwide through sustainable development programs, 
                  education initiatives, and collaborative partnerships that create lasting 
                  positive change for generations to come.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-soft">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Lightbulb className="h-8 w-8 text-primary mr-3" />
                  <h2 className="text-2xl font-bold text-foreground">Our Vision</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  A world where every community has access to the resources, knowledge, 
                  and opportunities needed to thrive independently and sustainably, 
                  creating a global network of empowered change-makers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These principles guide every decision we make and every action we take.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center bg-background border-0 shadow-soft hover:shadow-strong transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-accent rounded-full mb-4">
                      <IconComponent className="h-8 w-8 text-accent-strong" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate individuals dedicated to making a meaningful impact in the world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-soft hover:shadow-strong transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-gradient-hero rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {member.name}
                  </h3>
                  <Badge variant="outline" className="mb-3">
                    {member.role}
                  </Badge>
                  <p className="text-muted-foreground text-sm">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Impact by the Numbers
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                8
              </div>
              <p className="text-white/90 text-lg">Years of Service</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                50+
              </div>
              <p className="text-white/90 text-lg">Countries Served</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                100+
              </div>
              <p className="text-white/90 text-lg">Active Projects</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                1M+
              </div>
              <p className="text-white/90 text-lg">Lives Touched</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;