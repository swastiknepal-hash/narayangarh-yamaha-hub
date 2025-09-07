import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Users, MapPin, Calendar, Target, Heart, Shield, Zap } from "lucide-react";

const About = () => {
  const stats = [
    { number: "15+", label: "Years of Experience", icon: Calendar },
    { number: "1000+", label: "Happy Customers", icon: Users },
    { number: "3", label: "Showrooms", icon: MapPin },
    { number: "3", label: "Service Centers", icon: Shield }
  ];

  const values = [
    {
      icon: Target,
      title: "Customer First",
      description: "Every decision we make is centered around providing the best experience for our customers."
    },
    {
      icon: Heart,
      title: "Trust & Integrity",
      description: "We build lasting relationships through honest dealings and transparent communication."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from sales to service to customer support."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We embrace new technologies and methods to better serve our customers' evolving needs."
    }
  ];

  const milestones = [
    {
      year: "2008",
      title: "Establishment",
      description: "Founded Navin Auto Centre as an authorized Yamaha dealer in Narayangarh."
    },
    {
      year: "2012",
      title: "First Expansion",
      description: "Opened our second showroom to serve the growing customer base."
    },
    {
      year: "2016",
      title: "Service Excellence",
      description: "Launched dedicated service centers with certified technicians."
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Introduced online booking and digital customer services."
    },
    {
      year: "2023",
      title: "Third Showroom",
      description: "Expanded to three showrooms and three service centers in Narayangarh."
    }
  ];

  const team = [
    {
      name: "Navin Kumar Sharma",
      position: "Founder & Managing Director",
      experience: "15+ years in automotive industry",
      description: "Visionary leader who established Navin Auto Centre with a mission to bring Japanese quality to Nepal."
    },
    {
      name: "Rajesh Bhatta",
      position: "Sales Manager",
      experience: "12+ years in sales",
      description: "Expert in customer relations and vehicle sales with deep knowledge of Yamaha products."
    },
    {
      name: "Suresh Thapa",
      position: "Service Manager",
      experience: "10+ years in service",
      description: "Certified Yamaha technician ensuring the highest quality service standards."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-yamaha-blue via-yamaha-blue to-yamaha-blue-light overflow-hidden">
          <div className="absolute inset-0 bg-[url('/api/placeholder/1920/600')] bg-cover bg-center opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center text-white">
              <Badge variant="secondary" className="mb-4 bg-yamaha-yellow text-yamaha-dark">
                <Award className="w-4 h-4 mr-2" />
                About Navin Auto Centre
              </Badge>
              <h1 className="text-5xl font-bold mb-6">
                Your Trusted <span className="text-yamaha-yellow">Yamaha Partner</span>
              </h1>
              <p className="text-xl max-w-3xl mx-auto mb-8 text-yamaha-blue-light">
                For over 15 years, we've been serving the Narayangarh community with authentic Yamaha motorcycles, 
                professional service, and unwavering commitment to customer satisfaction.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-yamaha-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-yamaha-blue" />
                  </div>
                  <div className="text-3xl font-bold text-yamaha-blue mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="secondary" className="mb-4">
                  Our Story
                </Badge>
                <h2 className="text-3xl font-bold mb-6">Building Trust Since 2008</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Navin Auto Centre was born from a simple vision: to bring the reliability and innovation 
                    of Yamaha motorcycles to the people of Narayangarh and surrounding areas. What started 
                    as a small dealership has grown into the region's most trusted Yamaha partner.
                  </p>
                  <p>
                    Our founder, Navin Kumar Sharma, recognized the need for quality two-wheelers that could 
                    handle Nepal's diverse terrain while providing exceptional value. Today, we're proud to 
                    serve over 1000 satisfied customers with three strategically located showrooms and 
                    dedicated service centers.
                  </p>
                  <p>
                    Every Yamaha we sell comes with our commitment to long-term support, genuine parts, 
                    and expert service. We're not just selling motorcycles; we're building relationships 
                    and supporting dreams of mobility and freedom.
                  </p>
                </div>
                <Button className="mt-6 bg-yamaha-blue hover:bg-yamaha-blue-light">
                  Visit Our Showrooms
                </Button>
              </div>
              
              <div className="relative">
                <img 
                  src="/api/placeholder/600/400" 
                  alt="Navin Auto Centre History" 
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-yamaha-yellow text-yamaha-dark p-4 rounded-lg font-bold">
                  15+ Years of Excellence
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                Our Values
              </Badge>
              <h2 className="text-3xl font-bold mb-4">What Drives Us Forward</h2>
              <p className="text-xl text-muted-foreground">The principles that guide everything we do</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-yamaha-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-yamaha-yellow" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                Our Journey
              </Badge>
              <h2 className="text-3xl font-bold mb-4">Milestones That Matter</h2>
              <p className="text-xl text-muted-foreground">Key moments in our growth story</p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-yamaha-blue rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {milestone.year.slice(-2)}
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-0.5 h-16 bg-yamaha-blue/30 mt-2"></div>
                    )}
                  </div>
                  
                  <Card className="flex-1 p-4">
                    <CardContent className="p-0">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="outline" className="text-yamaha-blue border-yamaha-blue/30">
                          {milestone.year}
                        </Badge>
                        <h3 className="font-semibold">{milestone.title}</h3>
                      </div>
                      <p className="text-muted-foreground text-sm">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                <Users className="w-4 h-4 mr-2" />
                Our Team
              </Badge>
              <h2 className="text-3xl font-bold mb-4">Meet the People Behind Our Success</h2>
              <p className="text-xl text-muted-foreground">Dedicated professionals committed to your satisfaction</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <div className="w-24 h-24 bg-yamaha-blue/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-yamaha-blue" />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-yamaha-blue font-medium mb-2">{member.position}</p>
                  <Badge variant="outline" className="mb-3 text-xs">
                    {member.experience}
                  </Badge>
                  <p className="text-muted-foreground text-sm">{member.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Awards & Recognition */}
        <section className="py-16 bg-yamaha-blue text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4 bg-yamaha-yellow text-yamaha-dark">
                <Award className="w-4 h-4 mr-2" />
                Recognition
              </Badge>
              <h2 className="text-3xl font-bold mb-4">Awards & Achievements</h2>
              <p className="text-xl text-yamaha-blue-light">Recognition for our commitment to excellence</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white/10 border-white/20 text-white p-6 text-center">
                <Award className="w-12 h-12 text-yamaha-yellow mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Best Dealer Award 2023</h3>
                <p className="text-yamaha-blue-light text-sm">Yamaha Motor Nepal</p>
              </Card>
              
              <Card className="bg-white/10 border-white/20 text-white p-6 text-center">
                <Users className="w-12 h-12 text-yamaha-yellow mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Customer Satisfaction Excellence</h3>
                <p className="text-yamaha-blue-light text-sm">2022 & 2023</p>
              </Card>
              
              <Card className="bg-white/10 border-white/20 text-white p-6 text-center">
                <Target className="w-12 h-12 text-yamaha-yellow mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Sales Achievement Award</h3>
                <p className="text-yamaha-blue-light text-sm">Multiple Years</p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-yamaha-yellow text-yamaha-dark">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Experience the Navin Auto Centre Difference</h2>
            <p className="text-xl mb-8">
              Join our family of satisfied customers and experience why we're Narayangarh's most trusted Yamaha dealer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg" className="bg-yamaha-blue text-white hover:bg-yamaha-blue-light">
                Visit Our Showrooms
              </Button>
              <Button variant="outline" size="lg" className="border-yamaha-dark text-yamaha-dark hover:bg-yamaha-dark hover:text-white">
                Contact Us Today
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;