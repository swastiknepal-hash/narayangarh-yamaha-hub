import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Users, Award, MapPin, Clock, Phone } from "lucide-react";
import showroomsImage from "@/assets/showrooms.jpg";

const stats = [
  {
    icon: Building,
    number: "3",
    label: "Showrooms",
    description: "Strategically located across Narayangarh"
  },
  {
    icon: Users,
    number: "3",
    label: "Service Centers",
    description: "Complete after-sales support"
  },
  {
    icon: Award,
    number: "15+",
    label: "Years Experience",
    description: "Trusted Yamaha partner"
  },
  {
    icon: MapPin,
    number: "1000+",
    label: "Happy Customers",
    description: "Satisfied riders in Chitwan"
  }
];

const locations = [
  {
    type: "Main Showroom",
    address: "Bharatpur-10, Narayangarh, Chitwan",
    timing: "9:00 AM - 7:00 PM",
    phone: "+977-56-XXXXXX",
    services: ["Sales", "Service", "Spare Parts", "Finance"]
  },
  {
    type: "Sales Outlet",
    address: "Pulchowk, Narayangarh, Chitwan",
    timing: "9:30 AM - 6:30 PM",
    phone: "+977-56-XXXXXX",
    services: ["Sales", "Test Rides", "Finance Consultation"]
  },
  {
    type: "Service Center",
    address: "Bus Park Area, Narayangarh, Chitwan",
    timing: "8:00 AM - 6:00 PM",
    phone: "+977-56-XXXXXX",
    services: ["Service", "Repairs", "Spare Parts", "Express Service"]
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            About Us
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            Your Trusted <span className="text-yamaha-blue">Yamaha Partner</span> in Chitwan
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Navin Auto Centre has been serving the Narayangarh community as the official Yamaha dealer, 
            bringing you the best of Japanese engineering and reliability.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Why Choose Navin Auto Centre?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yamaha-blue rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-yamaha-blue">Official Yamaha Dealer</h4>
                    <p className="text-muted-foreground">Authorized dealership ensuring genuine products and warranty support.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yamaha-blue rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-yamaha-blue">Local Market Leadership</h4>
                    <p className="text-muted-foreground">Largest Yamaha network in Chitwan with 3 showrooms and 3 service centers.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yamaha-blue rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-yamaha-blue">Expert Service Team</h4>
                    <p className="text-muted-foreground">Certified technicians with genuine Yamaha spare parts and tools.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yamaha-blue rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-yamaha-blue">Customer-First Approach</h4>
                    <p className="text-muted-foreground">Dedicated to providing excellent customer service and satisfaction.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yamaha-blue/5 to-yamaha-blue-light/5 border border-yamaha-blue/20 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-yamaha-blue mb-3">Our Mission</h4>
              <p className="text-muted-foreground">
                To provide the people of Chitwan with world-class Yamaha motorcycles and scooters, 
                backed by exceptional service and support. We believe in building long-term relationships 
                with our customers through trust, quality, and reliability.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={showroomsImage} 
                alt="Navin Auto Centre Showrooms" 
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-yamaha-blue/20 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-border hover:border-yamaha-blue/30 transition-colors">
              <CardContent className="pt-6 pb-4">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-yamaha-blue/10 rounded-lg">
                    <stat.icon className="h-8 w-8 text-yamaha-blue" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-yamaha-blue mb-2">{stat.number}</div>
                <div className="text-lg font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Locations */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Our Locations</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {locations.map((location, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-yamaha-blue mb-3">{location.type}</h4>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-yamaha-blue mt-1 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{location.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-yamaha-blue" />
                      <span className="text-sm text-muted-foreground">{location.timing}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-yamaha-blue" />
                      <span className="text-sm font-medium">{location.phone}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h5 className="text-sm font-medium mb-2">Services Available:</h5>
                    <div className="flex flex-wrap gap-1">
                      {location.services.map((service, serviceIndex) => (
                        <Badge key={serviceIndex} variant="outline" className="text-xs border-yamaha-blue/30 text-yamaha-blue">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button variant="yamaha-outline" size="sm" className="w-full">
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;