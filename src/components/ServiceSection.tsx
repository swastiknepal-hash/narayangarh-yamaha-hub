import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wrench, Clock, Shield, MapPin, Phone, Calendar } from "lucide-react";
import serviceImage from "@/assets/yamaha-service.jpg";

const services = [
  {
    icon: Wrench,
    title: "Expert Service",
    description: "Certified Yamaha technicians with original spare parts and advanced diagnostic tools."
  },
  {
    icon: Clock,
    title: "Express Service",
    description: "Quick 30-minute basic service for busy schedules. Book online and save time."
  },
  {
    icon: Shield,
    title: "Warranty Service",
    description: "Complete warranty support with genuine Yamaha parts and authorized service."
  },
  {
    icon: Calendar,
    title: "Service Scheduling",
    description: "Convenient online booking system. Schedule service at your preferred time."
  }
];

const serviceLocations = [
  {
    name: "Main Service Center",
    address: "Bharatpur-10, Narayangarh",
    phone: "+977-56-XXXXXX",
    timing: "8:00 AM - 6:00 PM"
  },
  {
    name: "Express Service Hub",
    address: "Pulchowk, Narayangarh",
    phone: "+977-56-XXXXXX",
    timing: "9:00 AM - 5:00 PM"
  },
  {
    name: "Quick Fix Center",
    address: "Bus Park, Narayangarh",
    phone: "+977-56-XXXXXX",
    timing: "8:30 AM - 5:30 PM"
  }
];

const ServiceSection = () => {
  return (
    <section id="service" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Service Excellence
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            Professional <span className="text-yamaha-blue">Service Centers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Keep your Yamaha running at peak performance with our expert service network. 
            3 strategically located service centers for your convenience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Service Features */}
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="border-border hover:border-yamaha-blue/30 transition-colors">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-yamaha-blue/10 rounded-lg">
                        <service.icon className="h-5 w-5 text-yamaha-blue" />
                      </div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-gradient-to-r from-yamaha-blue/5 to-yamaha-blue-light/5 border border-yamaha-blue/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-yamaha-blue">Yamaha Express Service</h3>
              <p className="text-muted-foreground mb-4">
                Get your bike serviced in just 30 minutes! Perfect for oil changes, basic maintenance, 
                and quick inspections. No appointment needed for express services.
              </p>
              <Button variant="yamaha-outline" size="sm">
                Learn More
              </Button>
            </div>
          </div>

          {/* Service Center Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={serviceImage} 
                alt="Yamaha Service Center" 
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-yamaha-blue/20 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Service Locations */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Our Service Centers</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {serviceLocations.map((location, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <MapPin className="h-5 w-5 text-yamaha-blue" />
                    {location.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">{location.address}</p>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-yamaha-blue" />
                    <span className="font-medium">{location.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-yamaha-blue" />
                    <span className="text-sm text-muted-foreground">{location.timing}</span>
                  </div>
                  <Button variant="yamaha-outline" size="sm" className="w-full mt-4">
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-muted/50 to-muted/30 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">Ready to Service Your Yamaha?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Book your service appointment online or visit any of our service centers. 
            We ensure your Yamaha runs smoothly with genuine parts and expert care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="yamaha" size="lg">
              Book Service Online
            </Button>
            <Button variant="yamaha-outline" size="lg">
              Emergency Service
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;