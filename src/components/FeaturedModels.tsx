import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Fuel, Gauge, Users, Star } from "lucide-react";

const models = [
  {
    id: 1,
    name: "R15 V4",
    category: "Sport",
    price: "NPR 5,85,000",
    image: "/api/placeholder/400/300",
    features: ["155cc Engine", "VVA Technology", "Bi-LED Headlight", "6-Speed Transmission"],
    specs: {
      engine: "155cc",
      mileage: "40 kmpl",
      topSpeed: "136 km/h"
    },
    popular: true
  },
  {
    id: 2,
    name: "MT-15 V2",
    category: "Naked Sport",
    price: "NPR 5,49,000",
    image: "/api/placeholder/400/300",
    features: ["155cc Engine", "Darknight Color", "LCD Display", "ABS"],
    specs: {
      engine: "155cc",
      mileage: "45 kmpl",
      topSpeed: "131 km/h"
    },
    popular: false
  },
  {
    id: 3,
    name: "FZ-S FI V3",
    category: "Commuter",
    price: "NPR 3,29,000",
    image: "/api/placeholder/400/300",
    features: ["149cc Engine", "Fuel Injection", "LED Lighting", "Single Channel ABS"],
    specs: {
      engine: "149cc",
      mileage: "50 kmpl",
      topSpeed: "110 km/h"
    },
    popular: false
  },
  {
    id: 4,
    name: "Aerox 155",
    category: "Premium Scooter",
    price: "NPR 4,99,000",
    image: "/api/placeholder/400/300",
    features: ["155cc Engine", "VVA Technology", "Smart Key", "USB Charging"],
    specs: {
      engine: "155cc",
      mileage: "42 kmpl",
      topSpeed: "120 km/h"
    },
    popular: true
  },
  {
    id: 5,
    name: "RayZR 125 Hybrid",
    category: "Hybrid Scooter",
    price: "NPR 2,89,000",
    image: "/api/placeholder/400/300",
    features: ["125cc Hybrid", "Smart Motor Generator", "Side Stand Engine Cut-off", "LED Headlight"],
    specs: {
      engine: "125cc",
      mileage: "58 kmpl",
      topSpeed: "95 km/h"
    },
    popular: false
  },
  {
    id: 6,
    name: "Fascino 125 Hybrid",
    category: "Stylish Scooter",
    price: "NPR 2,79,000",
    image: "/api/placeholder/400/300",
    features: ["125cc Hybrid", "Retro Design", "Digital Instrument", "Under Seat Storage"],
    specs: {
      engine: "125cc",
      mileage: "56 kmpl",
      topSpeed: "90 km/h"
    },
    popular: false
  }
];

const FeaturedModels = () => {
  return (
    <section id="motorcycles" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Our Collection
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            Featured <span className="text-yamaha-blue">Yamaha Models</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our complete range of Yamaha motorcycles and scooters. From sport bikes to 
            comfortable commuters, find your perfect ride with authentic Yamaha performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {models.map((model) => (
            <Card key={model.id} className="group hover:shadow-xl transition-all duration-300 bg-card border-border hover:border-yamaha-blue/30">
              <CardHeader className="relative p-0">
                {model.popular && (
                  <Badge className="absolute top-4 left-4 z-10 bg-yamaha-yellow text-yamaha-dark">
                    <Star className="w-3 h-3 mr-1" />
                    Popular
                  </Badge>
                )}
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={model.image} 
                    alt={model.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-yamaha-blue border-yamaha-blue/30">
                    {model.category}
                  </Badge>
                  <span className="text-2xl font-bold text-yamaha-blue">{model.price}</span>
                </div>
                
                <CardTitle className="text-xl mb-3">{model.name}</CardTitle>
                
                {/* Specifications */}
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Gauge className="w-4 h-4" />
                    <span>{model.specs.engine}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Fuel className="w-4 h-4" />
                    <span>{model.specs.mileage}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{model.specs.topSpeed}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-1">
                  {model.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <div className="w-1 h-1 bg-yamaha-blue rounded-full"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="p-6 pt-0 space-y-3">
                <div className="grid grid-cols-2 gap-3 w-full">
                  <Button variant="yamaha-outline" size="sm">
                    View Details
                  </Button>
                  <Button variant="yamaha" size="sm">
                    Test Ride
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="yamaha" size="lg">
            View All Models
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedModels;