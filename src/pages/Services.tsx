import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Wrench, Clock, Shield, MapPin, Phone, Calendar, CheckCircle, Star } from "lucide-react";

const Services = () => {
  const serviceFeatures = [
    {
      icon: Wrench,
      title: "Expert Technicians",
      description: "Yamaha-certified technicians with years of experience"
    },
    {
      icon: Shield,
      title: "Genuine Parts",
      description: "Only original Yamaha spare parts and accessories"
    },
    {
      icon: Clock,
      title: "Express Service",
      description: "Quick and efficient service to minimize downtime"
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Comprehensive quality checks before delivery"
    }
  ];

  const servicePackages = [
    {
      name: "Basic Service",
      price: "NPR 2,500",
      duration: "2-3 hours",
      features: [
        "Engine oil change",
        "Oil filter replacement",
        "Basic inspection",
        "Tire pressure check",
        "Chain lubrication"
      ]
    },
    {
      name: "Standard Service",
      price: "NPR 4,500",
      duration: "4-5 hours",
      features: [
        "Everything in Basic",
        "Air filter cleaning",
        "Spark plug check",
        "Brake inspection",
        "Battery check",
        "Carburetor cleaning"
      ],
      popular: true
    },
    {
      name: "Premium Service",
      price: "NPR 7,500",
      duration: "6-8 hours",
      features: [
        "Everything in Standard",
        "Complete engine tune-up",
        "Transmission service",
        "Cooling system check",
        "Electrical system diagnosis",
        "Performance optimization"
      ]
    }
  ];

  const locations = [
    {
      name: "Main Service Center",
      address: "Bharatpur-10, Narayangarh",
      phone: "+977-56-521XXX",
      hours: "9:00 AM - 7:00 PM",
      services: ["All Services", "Express Service", "Body Repair"]
    },
    {
      name: "Express Service Center",
      address: "Bharatpur-8, Narayangarh",
      phone: "+977-56-522XXX",
      hours: "8:00 AM - 8:00 PM",
      services: ["Quick Service", "Oil Change", "Tire Service"]
    },
    {
      name: "Premium Service Hub",
      address: "Bharatpur-12, Narayangarh",
      phone: "+977-56-523XXX",
      hours: "9:00 AM - 6:00 PM",
      services: ["Premium Service", "Customization", "Accessories"]
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
                <Wrench className="w-4 h-4 mr-2" />
                Service Centers
              </Badge>
              <h1 className="text-5xl font-bold mb-6">
                Expert <span className="text-yamaha-yellow">Yamaha Service</span>
              </h1>
              <p className="text-xl max-w-3xl mx-auto mb-8 text-yamaha-blue-light">
                Keep your Yamaha running at peak performance with our expert service centers. 
                3 locations in Narayangarh with certified technicians and genuine parts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="default" size="lg" className="bg-yamaha-yellow text-yamaha-dark hover:bg-yamaha-yellow/90">
                  Book Service Online
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-yamaha-blue">
                  Call Service Center
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Service Features */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose Our Service?</h2>
              <p className="text-xl text-muted-foreground">Experience the difference with our professional service</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {serviceFeatures.map((feature, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-yamaha-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-yamaha-blue" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service Packages */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                Service Packages
              </Badge>
              <h2 className="text-3xl font-bold mb-4">Choose Your Service Plan</h2>
              <p className="text-xl text-muted-foreground">Transparent pricing with comprehensive service packages</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {servicePackages.map((pkg, index) => (
                <Card key={index} className={`relative p-6 ${pkg.popular ? 'ring-2 ring-yamaha-blue shadow-lg' : ''}`}>
                  {pkg.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yamaha-blue">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  )}
                  
                  <CardHeader className="text-center p-0 mb-6">
                    <CardTitle className="text-2xl mb-2">{pkg.name}</CardTitle>
                    <div className="text-3xl font-bold text-yamaha-blue mb-2">{pkg.price}</div>
                    <div className="text-muted-foreground flex items-center justify-center gap-1">
                      <Clock className="w-4 h-4" />
                      {pkg.duration}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-0">
                    <ul className="space-y-3">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      variant={pkg.popular ? "default" : "outline"} 
                      className={`w-full mt-6 ${pkg.popular ? 'bg-yamaha-blue hover:bg-yamaha-blue-light' : 'border-yamaha-blue text-yamaha-blue hover:bg-yamaha-blue hover:text-white'}`}
                    >
                      Book This Service
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service Centers */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                <MapPin className="w-4 h-4 mr-2" />
                Our Locations
              </Badge>
              <h2 className="text-3xl font-bold mb-4">3 Service Centers in Narayangarh</h2>
              <p className="text-xl text-muted-foreground">Convenient locations for all your Yamaha service needs</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {locations.map((location, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-xl flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-yamaha-blue" />
                      {location.name}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="p-0 space-y-4">
                    <div className="space-y-2">
                      <p className="text-muted-foreground">{location.address}</p>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-yamaha-blue" />
                        <span className="font-medium">{location.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-yamaha-blue" />
                        <span className="text-muted-foreground">{location.hours}</span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Available Services:</h4>
                      <div className="flex flex-wrap gap-2">
                        {location.services.map((service, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <MapPin className="w-4 h-4 mr-2" />
                        Directions
                      </Button>
                      <Button variant="default" size="sm" className="flex-1 bg-yamaha-blue">
                        <Calendar className="w-4 h-4 mr-2" />
                        Book Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Online Booking CTA */}
        <section className="py-16 bg-yamaha-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Book Your Service Online</h2>
            <p className="text-xl mb-8 text-yamaha-blue-light">
              Save time with our convenient online booking system. Choose your preferred date and service center.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg" className="bg-yamaha-yellow text-yamaha-dark hover:bg-yamaha-yellow/90">
                <Calendar className="w-5 h-5 mr-2" />
                Book Service Now
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-yamaha-blue">
                <Phone className="w-5 h-5 mr-2" />
                Call: +977-56-XXXXXX
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;