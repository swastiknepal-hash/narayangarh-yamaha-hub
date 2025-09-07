import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Fuel, Gauge, Users, Star, Heart, Share2, Zap } from "lucide-react";

const scooters = [
  {
    id: 1,
    name: "Aerox 155",
    category: "Premium Scooter",
    price: "NPR 4,99,000",
    image: "/api/placeholder/400/300",
    features: ["155cc Engine", "VVA Technology", "Smart Key", "USB Charging", "LED Lighting", "Large Storage"],
    specs: {
      engine: "155cc",
      mileage: "42 kmpl",
      topSpeed: "120 km/h",
      power: "15.4 PS",
      torque: "13.9 Nm"
    },
    popular: true,
    description: "Premium maxi-scooter with sporty design and advanced features."
  },
  {
    id: 2,
    name: "RayZR 125 Hybrid",
    category: "Hybrid Scooter",
    price: "NPR 2,89,000",
    image: "/api/placeholder/400/300",
    features: ["125cc Hybrid", "Smart Motor Generator", "Side Stand Engine Cut-off", "LED Headlight", "Digital Meter"],
    specs: {
      engine: "125cc",
      mileage: "58 kmpl",
      topSpeed: "95 km/h",
      power: "8.2 PS",
      torque: "10.3 Nm"
    },
    popular: true,
    description: "Eco-friendly hybrid technology with impressive fuel efficiency."
  },
  {
    id: 3,
    name: "Fascino 125 Hybrid",
    category: "Stylish Scooter",
    price: "NPR 2,79,000",
    image: "/api/placeholder/400/300",
    features: ["125cc Hybrid", "Retro Design", "Digital Instrument", "Under Seat Storage", "LED Position Lamp"],
    specs: {
      engine: "125cc",
      mileage: "56 kmpl",
      topSpeed: "90 km/h",
      power: "8.2 PS",
      torque: "10.3 Nm"
    },
    popular: false,
    description: "Elegant retro styling meets modern hybrid technology."
  },
  {
    id: 4,
    name: "Fascino 125",
    category: "Classic Scooter",
    price: "NPR 2,45,000",
    image: "/api/placeholder/400/300",
    features: ["125cc Engine", "Bluetooth Connectivity", "Digital Console", "Large Storage", "Comfortable Seat"],
    specs: {
      engine: "125cc",
      mileage: "50 kmpl",
      topSpeed: "90 km/h",
      power: "8.2 PS",
      torque: "10.3 Nm"
    },
    popular: false,
    description: "Classic design with modern convenience features."
  },
  {
    id: 5,
    name: "RayZR 125",
    category: "Sport Scooter",
    price: "NPR 2,55,000",
    image: "/api/placeholder/400/300",
    features: ["125cc Engine", "LED Headlight", "Digital Meter", "Mobile Charging", "Side Stand Indicator"],
    specs: {
      engine: "125cc",
      mileage: "52 kmpl",
      topSpeed: "95 km/h",
      power: "8.2 PS",
      torque: "10.3 Nm"
    },
    popular: false,
    description: "Sporty design with youthful appeal and practical features."
  },
  {
    id: 6,
    name: "Ray ZR Street Rally",
    category: "Adventure Scooter",
    price: "NPR 2,65,000",
    image: "/api/placeholder/400/300",
    features: ["125cc Engine", "Rugged Design", "LED DRL", "Smartphone Connectivity", "Adventure Graphics"],
    specs: {
      engine: "125cc",
      mileage: "52 kmpl",
      topSpeed: "95 km/h",
      power: "8.2 PS",
      torque: "10.3 Nm"
    },
    popular: false,
    description: "Adventure-styled scooter for urban exploration."
  }
];

const Scooters = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-yamaha-yellow via-accent to-yamaha-yellow overflow-hidden">
          <div className="absolute inset-0 bg-[url('/api/placeholder/1920/600')] bg-cover bg-center opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center text-yamaha-dark">
              <Badge variant="secondary" className="mb-4 bg-yamaha-blue text-white">
                <Zap className="w-4 h-4 mr-2" />
                Yamaha Scooters
              </Badge>
              <h1 className="text-5xl font-bold mb-6">
                Smart <span className="text-yamaha-blue">Mobility</span> Solutions
              </h1>
              <p className="text-xl max-w-3xl mx-auto mb-8 text-yamaha-dark/80">
                Discover the perfect blend of style, comfort, and efficiency with our range of Yamaha scooters. 
                From hybrid technology to premium features, experience the future of urban mobility.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="default" size="lg" className="bg-yamaha-blue text-white hover:bg-yamaha-blue-light">
                  Book Test Ride
                </Button>
                <Button variant="outline" size="lg" className="border-yamaha-dark text-yamaha-dark hover:bg-yamaha-dark hover:text-white">
                  View Brochures
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-background border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="default" size="sm" className="bg-yamaha-blue">All Scooters</Button>
              <Button variant="outline" size="sm">Hybrid</Button>
              <Button variant="outline" size="sm">Premium</Button>
              <Button variant="outline" size="sm">Classic</Button>
              <Button variant="outline" size="sm">Sport</Button>
            </div>
          </div>
        </section>

        {/* Scooters Grid */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {scooters.map((scooter) => (
                <Card key={scooter.id} className="group hover:shadow-2xl transition-all duration-300 bg-card border-border hover:border-yamaha-yellow/50 overflow-hidden">
                  <CardHeader className="relative p-0">
                    {scooter.popular && (
                      <Badge className="absolute top-4 left-4 z-10 bg-yamaha-yellow text-yamaha-dark">
                        <Star className="w-3 h-3 mr-1" />
                        Popular
                      </Badge>
                    )}
                    {scooter.name.includes("Hybrid") && (
                      <Badge className="absolute top-4 left-4 z-10 mt-10 bg-green-500 text-white">
                        <Zap className="w-3 h-3 mr-1" />
                        Hybrid
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
                        src={scooter.image} 
                        alt={scooter.name}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-yamaha-yellow border-yamaha-yellow/30">
                        {scooter.category}
                      </Badge>
                      <span className="text-2xl font-bold text-yamaha-blue">{scooter.price}</span>
                    </div>
                    
                    <CardTitle className="text-xl mb-3">{scooter.name}</CardTitle>
                    <p className="text-sm text-muted-foreground mb-4">{scooter.description}</p>
                    
                    {/* Specifications */}
                    <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Gauge className="w-4 h-4 text-yamaha-yellow" />
                        <span className="text-muted-foreground">{scooter.specs.engine}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Fuel className="w-4 h-4 text-yamaha-yellow" />
                        <span className="text-muted-foreground">{scooter.specs.mileage}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4 text-yamaha-yellow" />
                        <span className="text-muted-foreground">{scooter.specs.topSpeed}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yamaha-yellow" />
                        <span className="text-muted-foreground">{scooter.specs.power}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-1">
                      {scooter.features.slice(0, 4).map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <div className="w-1 h-1 bg-yamaha-yellow rounded-full"></div>
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  
                  <CardFooter className="p-6 pt-0 space-y-3">
                    <div className="grid grid-cols-2 gap-3 w-full">
                      <Button variant="outline" size="sm" className="border-yamaha-yellow text-yamaha-yellow hover:bg-yamaha-yellow hover:text-yamaha-dark">
                        View Details
                      </Button>
                      <Button variant="default" size="sm" className="bg-yamaha-yellow text-yamaha-dark hover:bg-yamaha-yellow/90">
                        Test Ride
                      </Button>
                    </div>
                    <Button variant="ghost" size="sm" className="w-full text-yamaha-yellow hover:bg-yamaha-yellow/10">
                      Compare Models
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Hybrid Technology Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4 bg-green-500 text-white">
                <Zap className="w-4 h-4 mr-2" />
                Hybrid Technology
              </Badge>
              <h2 className="text-4xl font-bold mb-4">
                Experience <span className="text-yamaha-yellow">Yamaha Hybrid</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Revolutionary hybrid technology that delivers exceptional fuel efficiency without compromising on performance.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">58 km/l Mileage</h3>
                <p className="text-muted-foreground">Best-in-class fuel efficiency with hybrid technology</p>
              </Card>

              <Card className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gauge className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Smooth Performance</h3>
                <p className="text-muted-foreground">Enhanced acceleration and refined riding experience</p>
              </Card>

              <Card className="text-center p-6">
                <div className="w-16 h-16 bg-yamaha-yellow/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-yamaha-yellow" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
                <p className="text-muted-foreground">Reduced emissions for a cleaner environment</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-yamaha-yellow text-yamaha-dark">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Find Your Perfect Scooter</h2>
            <p className="text-xl mb-8">
              Visit our showrooms in Narayangarh and experience the comfort of Yamaha scooters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg" className="bg-yamaha-blue text-white hover:bg-yamaha-blue-light">
                Visit Showroom
              </Button>
              <Button variant="outline" size="lg" className="border-yamaha-dark text-yamaha-dark hover:bg-yamaha-dark hover:text-white">
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

export default Scooters;