import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Award, Shield, Wrench } from "lucide-react";
import heroImage from "@/assets/yamaha-hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Yamaha Motorcycles Showroom" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/60"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-yamaha-blue border-yamaha-blue/20">
                <Award className="w-4 h-4 mr-2" />
                Official Yamaha Dealer
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-foreground">Your Trusted</span>
                <br />
                <span className="text-yamaha-blue">Yamaha Partner</span>
                <br />
                <span className="text-foreground">in Narayangarh</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg">
                Experience excellence with 3 showrooms, 3 service centers, and Yamaha's legendary 
                performance. From R15 to Aerox, we're your gateway to the Yamaha experience.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-yamaha-blue" />
                <span className="font-medium">3 Showrooms</span>
              </div>
              <div className="flex items-center gap-2">
                <Wrench className="h-5 w-5 text-yamaha-blue" />
                <span className="font-medium">3 Service Centers</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-yamaha-blue" />
                <span className="font-medium">10-Year Warranty</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="yamaha" size="lg" className="text-lg px-8">
                Explore Motorcycles
              </Button>
              <Button variant="yamaha-outline" size="lg" className="text-lg px-8">
                Book Test Ride
              </Button>
            </div>

            {/* Special Offer Banner */}
            <div className="bg-gradient-to-r from-yamaha-yellow/10 to-accent/10 border border-yamaha-yellow/20 rounded-lg p-4">
              <div className="flex items-center gap-3">
                <Badge variant="default" className="bg-yamaha-yellow text-yamaha-dark">
                  Festival Offer
                </Badge>
                <span className="font-medium text-foreground">
                  Special Dashain-Tihar schemes available! Finance options starting from 0% down payment.
                </span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Yamaha Showroom" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-yamaha-blue/20 to-transparent"></div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -right-4 bg-card border border-border rounded-lg p-4 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-yamaha-blue">15+</div>
                <div className="text-sm text-muted-foreground">Models Available</div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-lg p-4 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-yamaha-blue">1000+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;