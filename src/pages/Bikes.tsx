import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Fuel, Gauge, Users, Star, Heart, Share2 } from "lucide-react";

const bikes = [
  {
    id: 1,
    name: "R15 V4",
    category: "Sport",
    price: "NPR 5,85,000",
    image: "/api/placeholder/400/300",
    features: ["155cc Engine", "VVA Technology", "Bi-LED Headlight", "6-Speed Transmission", "Quickshifter", "Traction Control"],
    specs: {
      engine: "155cc",
      mileage: "40 kmpl",
      topSpeed: "136 km/h",
      power: "18.4 PS",
      torque: "14.2 Nm"
    },
    popular: true,
    description: "The ultimate sport machine with cutting-edge technology and aggressive styling."
  },
  {
    id: 2,
    name: "MT-15 V2",
    category: "Naked Sport",
    price: "NPR 5,49,000",
    image: "/api/placeholder/400/300",
    features: ["155cc Engine", "Darknight Color", "LCD Display", "ABS", "LED Lighting", "Assist & Slipper Clutch"],
    specs: {
      engine: "155cc",
      mileage: "45 kmpl",
      topSpeed: "131 km/h",
      power: "18.4 PS",
      torque: "14.2 Nm"
    },
    popular: true,
    description: "Raw power meets street attitude in this naked sport masterpiece."
  },
  {
    id: 3,
    name: "FZ-S FI V3",
    category: "Commuter",
    price: "NPR 3,29,000",
    image: "/api/placeholder/400/300",
    features: ["149cc Engine", "Fuel Injection", "LED Lighting", "Single Channel ABS", "Bluetooth Connectivity"],
    specs: {
      engine: "149cc",
      mileage: "50 kmpl",
      topSpeed: "110 km/h",
      power: "12.4 PS",
      torque: "13.3 Nm"
    },
    popular: false,
    description: "Perfect blend of style, performance and fuel efficiency for daily commuting."
  },
  {
    id: 4,
    name: "FZ V3",
    category: "Commuter",
    price: "NPR 3,15,000",
    image: "/api/placeholder/400/300",
    features: ["149cc Engine", "Fuel Injection", "LED Headlight", "Digital Meter", "Side Stand Engine Cut-off"],
    specs: {
      engine: "149cc",
      mileage: "50 kmpl",
      topSpeed: "110 km/h",
      power: "12.4 PS",
      torque: "13.3 Nm"
    },
    popular: false,
    description: "Stylish and reliable commuter bike with modern features."
  },
  {
    id: 5,
    name: "YZF R15M",
    category: "Track Focused",
    price: "NPR 6,25,000",
    image: "/api/placeholder/400/300",
    features: ["155cc Engine", "VVA Technology", "Quickshifter", "Up & Down", "Track Mode", "Carbon Fiber"],
    specs: {
      engine: "155cc",
      mileage: "40 kmpl",
      topSpeed: "136 km/h",
      power: "18.4 PS",
      torque: "14.2 Nm"
    },
    popular: false,
    description: "Track-focused machine with premium features and aggressive styling."
  },
  {
    id: 6,
    name: "MT-15M",
    category: "Premium Naked",
    price: "NPR 5,89,000",
    image: "/api/placeholder/400/300",
    features: ["155cc Engine", "Monster Energy Edition", "Premium Graphics", "LED Lighting", "Digital Display"],
    specs: {
      engine: "155cc",
      mileage: "45 kmpl",
      topSpeed: "131 km/h",
      power: "18.4 PS",
      torque: "14.2 Nm"
    },
    popular: false,
    description: "Premium monster edition with exclusive styling and enhanced features."
  }
];

const Bikes = () => {
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
                <Star className="w-4 h-4 mr-2" />
                Yamaha Motorcycles
              </Badge>
              <h1 className="text-5xl font-bold mb-6">
                Feel The <span className="text-yamaha-yellow">Call of the Blue</span>
              </h1>
              <p className="text-xl max-w-3xl mx-auto mb-8 text-yamaha-blue-light">
                Experience the thrill of Japanese engineering with our complete range of Yamaha motorcycles. 
                From track-focused sport bikes to comfortable commuters, find your perfect ride.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="default" size="lg" className="bg-yamaha-yellow text-yamaha-dark hover:bg-yamaha-yellow/90">
                  Schedule Test Ride
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-yamaha-blue">
                  Download Brochure
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Bikes Grid */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {bikes.map((bike) => (
                <Card key={bike.id} className="group hover:shadow-2xl transition-all duration-300 bg-card border-border hover:border-yamaha-blue/30 overflow-hidden">
                  <CardHeader className="relative p-0">
                    {bike.popular && (
                      <Badge className="absolute top-4 left-4 z-10 bg-yamaha-yellow text-yamaha-dark">
                        <Star className="w-3 h-3 mr-1" />
                        Popular
                      </Badge>
                    )}
                    <div className="absolute top-4 right-4 z-10 flex gap-2">
                      <Button size="icon" variant="ghost" className="bg-white/90 hover:bg-white">
                        <Heart className="w-4 h-4" />
                      </Button>
                      <Button size="icon" variant="ghost" className="bg-white/90 hover:bg-white">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="relative overflow-hidden">
                      <img 
                        src={bike.image} 
                        alt={bike.name}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-yamaha-blue border-yamaha-blue/30">
                        {bike.category}
                      </Badge>
                      <span className="text-2xl font-bold text-yamaha-blue">{bike.price}</span>
                    </div>
                    
                    <CardTitle className="text-xl mb-3">{bike.name}</CardTitle>
                    <p className="text-sm text-muted-foreground mb-4">{bike.description}</p>
                    
                    {/* Specifications */}
                    <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Gauge className="w-4 h-4 text-yamaha-blue" />
                        <span className="text-muted-foreground">{bike.specs.engine}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Fuel className="w-4 h-4 text-yamaha-blue" />
                        <span className="text-muted-foreground">{bike.specs.mileage}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4 text-yamaha-blue" />
                        <span className="text-muted-foreground">{bike.specs.topSpeed}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yamaha-blue" />
                        <span className="text-muted-foreground">{bike.specs.power}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-1">
                      {bike.features.slice(0, 4).map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <div className="w-1 h-1 bg-yamaha-blue rounded-full"></div>
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  
                  <CardFooter className="p-6 pt-0 space-y-3">
                    <div className="grid grid-cols-2 gap-3 w-full">
                      <Button variant="outline" size="sm" className="border-yamaha-blue text-yamaha-blue hover:bg-yamaha-blue hover:text-white">
                        View Details
                      </Button>
                      <Button variant="default" size="sm" className="bg-yamaha-blue hover:bg-yamaha-blue-light">
                        Test Ride
                      </Button>
                    </div>
                    <Button variant="ghost" size="sm" className="w-full text-yamaha-blue hover:bg-yamaha-blue/10">
                      Compare Models
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-yamaha-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Experience Yamaha?</h2>
            <p className="text-xl mb-8 text-yamaha-blue-light">
              Visit our showrooms in Narayangarh for test rides and personalized consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg" className="bg-yamaha-yellow text-yamaha-dark hover:bg-yamaha-yellow/90">
                Visit Showroom
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-yamaha-blue">
                Call Now: +977-56-XXXXXX
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Bikes;