import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { MapPin, Award, Shield, Wrench, Star, ArrowRight, MessageCircle, Phone } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button size="icon" className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg">
          <MessageCircle className="w-6 h-6 text-white" />
        </Button>
      </div>

      <main>
        {/* Hero Section with Video Background */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          {/* Video Background Placeholder */}
          <div className="absolute inset-0 bg-gradient-to-br from-yamaha-blue via-yamaha-blue/90 to-yamaha-blue-light">
            <div className="w-full h-full bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-20"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10 text-white">
            <div className="max-w-4xl">
              <Badge variant="secondary" className="mb-6 bg-yamaha-yellow text-yamaha-dark text-lg px-4 py-2">
                <Award className="w-5 h-5 mr-2" />
                Official Yamaha Dealer Since 2008
              </Badge>
              
              <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-6">
                <span className="block">Ride The</span>
                <span className="block text-yamaha-yellow">Blue Legacy</span>
              </h1>
              
              <p className="text-2xl mb-8 text-yamaha-blue-light max-w-2xl">
                Experience Japanese excellence with 3 showrooms, 3 service centers, and Nepal's most trusted Yamaha partnership in Narayangarh.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 mb-12">
                <Link to="/bikes">
                  <Button size="lg" className="bg-yamaha-yellow text-yamaha-dark hover:bg-yamaha-yellow/90 text-xl px-8 py-4">
                    Explore Bikes
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link to="/scooters">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-yamaha-blue text-xl px-8 py-4">
                    View Scooters
                  </Button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-8">
                <div className="flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-yamaha-yellow" />
                  <span className="font-medium text-lg">3 Showrooms</span>
                </div>
                <div className="flex items-center gap-3">
                  <Wrench className="h-6 w-6 text-yamaha-yellow" />
                  <span className="font-medium text-lg">3 Service Centers</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-yamaha-yellow" />
                  <span className="font-medium text-lg">10-Year Warranty</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Models Slider */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4">
                Our Collection
              </Badge>
              <h2 className="text-4xl font-bold mb-4">
                Featured <span className="text-yamaha-blue">Models</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Discover the latest Yamaha motorcycles and scooters
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="group hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img src="/api/placeholder/400/250" alt="R15 V4" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                  <Badge className="absolute top-4 left-4 bg-yamaha-yellow text-yamaha-dark">
                    <Star className="w-3 h-3 mr-1" />
                    Popular
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">R15 V4</h3>
                  <p className="text-muted-foreground mb-4">Ultimate sport performance</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-yamaha-blue">NPR 5,85,000</span>
                    <Link to="/bikes">
                      <Button size="sm" className="bg-yamaha-blue">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img src="/api/placeholder/400/250" alt="Aerox 155" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Aerox 155</h3>
                  <p className="text-muted-foreground mb-4">Premium maxi-scooter</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-yamaha-blue">NPR 4,99,000</span>
                    <Link to="/scooters">
                      <Button size="sm" className="bg-yamaha-blue">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img src="/api/placeholder/400/250" alt="MT-15 V2" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">MT-15 V2</h3>
                  <p className="text-muted-foreground mb-4">Dark side of Japan</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-yamaha-blue">NPR 5,49,000</span>
                    <Link to="/bikes">
                      <Button size="sm" className="bg-yamaha-blue">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Link to="/bikes">
                <Button variant="outline" size="lg" className="mr-4 border-yamaha-blue text-yamaha-blue hover:bg-yamaha-blue hover:text-white">
                  View All Bikes
                </Button>
              </Link>
              <Link to="/scooters">
                <Button variant="outline" size="lg" className="border-yamaha-yellow text-yamaha-yellow hover:bg-yamaha-yellow hover:text-yamaha-dark">
                  View All Scooters
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Special Offers */}
        <section className="py-20 bg-yamaha-yellow text-yamaha-dark">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="secondary" className="mb-4 bg-yamaha-blue text-white">
              Limited Time
            </Badge>
            <h2 className="text-4xl font-bold mb-6">Dashain-Tihar Special Offers</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Celebrate the festive season with incredible savings and finance schemes. 
              Up to NPR 50,000 off with 0% down payment options!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/offers">
                <Button size="lg" className="bg-yamaha-blue text-white hover:bg-yamaha-blue-light">
                  View All Offers
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="border-yamaha-dark text-yamaha-dark hover:bg-yamaha-dark hover:text-white">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Quick Services */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                Why Choose <span className="text-yamaha-blue">Navin Auto Centre?</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <Card className="text-center p-6">
                <div className="w-16 h-16 bg-yamaha-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-yamaha-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Authorized Dealer</h3>
                <p className="text-muted-foreground">Official Yamaha partner since 2008</p>
              </Card>

              <Card className="text-center p-6">
                <div className="w-16 h-16 bg-yamaha-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-yamaha-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-2">3 Convenient Locations</h3>
                <p className="text-muted-foreground">Showrooms & service centers</p>
              </Card>

              <Card className="text-center p-6">
                <div className="w-16 h-16 bg-yamaha-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-8 h-8 text-yamaha-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Service</h3>
                <p className="text-muted-foreground">Certified technicians</p>
              </Card>

              <Card className="text-center p-6">
                <div className="w-16 h-16 bg-yamaha-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-yamaha-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Genuine Parts</h3>
                <p className="text-muted-foreground">Original Yamaha quality</p>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;