import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Heart, Users, Clock, MapPin, CheckCircle } from "lucide-react";

const Volunteer = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    availability: "",
    interests: [] as string[],
    experience: "",
    motivation: "",
    agreeToTerms: false,
  });

  const opportunities = [
    {
      title: "Community Garden Project",
      location: "Local Communities",
      time: "Weekends",
      description: "Help establish sustainable food gardens in underserved communities.",
      skills: ["Gardening", "Community Outreach", "Environmental"],
    },
    {
      title: "Education Support",
      location: "Schools & Centers",
      time: "Flexible",
      description: "Assist with tutoring, mentoring, and educational program development.",
      skills: ["Teaching", "Mentoring", "Curriculum Development"],
    },
    {
      title: "Digital Literacy Training",
      location: "Community Centers",
      time: "Evenings",
      description: "Teach basic computer and internet skills to adults and seniors.",
      skills: ["Technology", "Training", "Patience"],
    },
    {
      title: "Event Organization",
      location: "Various Venues",
      time: "Event-based",
      description: "Help plan and execute fundraising events and community gatherings.",
      skills: ["Event Planning", "Coordination", "Communication"],
    },
  ];

  const interestAreas = [
    "Education & Literacy",
    "Environmental Conservation",
    "Community Development",
    "Healthcare Support",
    "Technology Training",
    "Event Organization",
    "Fundraising",
    "Administrative Support",
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreeToTerms) {
      toast({
        title: "Please agree to terms",
        description: "You must agree to the terms and conditions to continue.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Application submitted successfully!",
      description: "Thank you for your interest in volunteering. We'll be in touch soon.",
    });
    
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      location: "",
      availability: "",
      interests: [],
      experience: "",
      motivation: "",
      agreeToTerms: false,
    });
    
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-card py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              Join Our Mission
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Become a <span className="text-primary">Volunteer</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Join thousands of passionate individuals making a real difference in communities worldwide. 
              Your skills, time, and dedication can help transform lives.
            </p>
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Current Opportunities
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore various ways you can contribute your skills and make an impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {opportunities.map((opportunity, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-soft hover:shadow-strong transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground mb-2">
                    {opportunity.title}
                  </CardTitle>
                  <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {opportunity.location}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {opportunity.time}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {opportunity.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {opportunity.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-background border-0 shadow-strong">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-foreground mb-2">
                Volunteer Application
              </CardTitle>
              <p className="text-muted-foreground">
                Tell us about yourself and how you'd like to contribute.
              </p>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="text-base">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-base">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email" className="text-base">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-base">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="location" className="text-base">Location/City *</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => handleInputChange("location", e.target.value)}
                    required
                    className="mt-1"
                    placeholder="City, State/Country"
                  />
                </div>

                <div>
                  <Label htmlFor="availability" className="text-base">Availability *</Label>
                  <Select onValueChange={(value) => handleInputChange("availability", value)} required>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select your availability" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="weekdays">Weekdays</SelectItem>
                      <SelectItem value="weekends">Weekends</SelectItem>
                      <SelectItem value="evenings">Evenings</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                      <SelectItem value="occasional">Occasional Events</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Areas of Interest */}
                <div>
                  <Label className="text-base">Areas of Interest *</Label>
                  <p className="text-sm text-muted-foreground mt-1 mb-3">
                    Select all areas where you'd like to contribute (select at least one).
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    {interestAreas.map((interest) => (
                      <div key={interest} className="flex items-center space-x-2">
                        <Checkbox
                          id={interest}
                          checked={formData.interests.includes(interest)}
                          onCheckedChange={() => handleInterestToggle(interest)}
                        />
                        <Label htmlFor={interest} className="text-sm font-normal">
                          {interest}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="experience" className="text-base">Relevant Experience</Label>
                  <Textarea
                    id="experience"
                    value={formData.experience}
                    onChange={(e) => handleInputChange("experience", e.target.value)}
                    placeholder="Tell us about any relevant volunteer work, professional experience, or skills..."
                    className="mt-1 min-h-[100px]"
                  />
                </div>

                <div>
                  <Label htmlFor="motivation" className="text-base">Why do you want to volunteer with us? *</Label>
                  <Textarea
                    id="motivation"
                    value={formData.motivation}
                    onChange={(e) => handleInputChange("motivation", e.target.value)}
                    placeholder="Share what motivates you to volunteer and what you hope to achieve..."
                    className="mt-1 min-h-[120px]"
                    required
                  />
                </div>

                {/* Terms and Conditions */}
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) => 
                      setFormData(prev => ({ ...prev, agreeToTerms: checked as boolean }))
                    }
                    required
                  />
                  <Label htmlFor="terms" className="text-sm font-normal leading-relaxed">
                    I agree to the terms and conditions and understand that HopeConnect will 
                    contact me regarding volunteer opportunities. I confirm that the information 
                    provided is accurate to the best of my knowledge.
                  </Label>
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting || formData.interests.length === 0}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                      Submitting Application...
                    </>
                  ) : (
                    <>
                      Submit Application
                      <CheckCircle className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Volunteer */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Volunteer with Us?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center bg-gradient-card border-0 shadow-soft">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-hero rounded-full mb-6">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Make Real Impact
                </h3>
                <p className="text-muted-foreground">
                  See the direct results of your efforts in the communities we serve. 
                  Every hour you contribute creates meaningful change.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-card border-0 shadow-soft">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-hero rounded-full mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Join a Community
                </h3>
                <p className="text-muted-foreground">
                  Connect with like-minded individuals who share your passion for 
                  making a difference. Build lasting friendships and networks.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-card border-0 shadow-soft">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-hero rounded-full mb-6">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Develop Skills
                </h3>
                <p className="text-muted-foreground">
                  Gain valuable experience, learn new skills, and enhance your 
                  professional development while contributing to a worthy cause.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Volunteer;