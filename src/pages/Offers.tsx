import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Gift, Percent, Calendar, Star, CreditCard, ArrowRight, Clock } from "lucide-react";

const Offers = () => {
  const festivalOffers = [
    {
      title: "Dashain Mega Sale",
      subtitle: "Special Festival Pricing",
      discount: "Up to NPR 50,000 Off",
      description: "Celebrate Dashain with incredible savings on all Yamaha models",
      validity: "Valid till Kojagrat Purnima",
      features: [
        "Up to NPR 50,000 discount",
        "0% down payment option",
        "Free accessories worth NPR 15,000",
        "1-year extended warranty"
      ],
      color: "bg-red-500",
      popular: true
    },
    {
      title: "Tihar Dhamaka",
      subtitle: "Light Up Your Ride",
      discount: "Special Finance Rates",
      description: "Brighten your Tihar with attractive finance schemes",
      validity: "Valid during Tihar period",
      features: [
        "0% interest for 6 months",
        "Flexible EMI options",
        "Quick loan approval",
        "No processing fees"
      ],
      color: "bg-orange-500",
      popular: false
    }
  ];

  const financeOptions = [
    {
      bank: "NMB Bank",
      rate: "12.5% p.a.",
      tenure: "Up to 5 years",
      processing: "Minimal",
      features: ["Quick approval", "Flexible EMI", "Easy documentation"]
    },
    {
      bank: "Prabhu Bank",
      rate: "13% p.a.",
      tenure: "Up to 4 years",
      processing: "1% of loan",
      features: ["Fast processing", "Competitive rates", "Online application"]
    },
    {
      bank: "Kumari Bank",
      rate: "12.8% p.a.",
      tenure: "Up to 5 years",
      processing: "0.5% of loan",
      features: ["Low interest", "Flexible terms", "Digital process"]
    }
  ];

  const exchangeOffers = [
    {
      title: "Old to Gold Exchange",
      description: "Exchange your old bike for a new Yamaha with attractive rates",
      benefits: [
        "Best exchange value guaranteed",
        "Free evaluation at showroom",
        "Instant quotation",
        "Hassle-free paperwork"
      ]
    },
    {
      title: "Upgrade Program",
      description: "Upgrade your current Yamaha to a higher model with special benefits",
      benefits: [
        "Loyalty bonus for Yamaha owners",
        "Additional exchange value",
        "Priority service booking",
        "Extended warranty benefits"
      ]
    }
  ];

  const monthlyOffers = [
    {
      month: "January 2024",
      title: "New Year Special",
      description: "Start the year with a new Yamaha",
      discount: "NPR 25,000 Off",
      status: "Active"
    },
    {
      month: "February 2024",
      title: "Valentine's Ride",
      description: "Perfect gift for your loved ones",
      discount: "Special Couple Package",
      status: "Coming Soon"
    },
    {
      month: "March 2024",
      title: "Holi Celebration",
      description: "Colorful deals on colorful bikes",
      discount: "Free Color Variants",
      status: "Coming Soon"
    }
  ];

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
                <Gift className="w-4 h-4 mr-2" />
                Special Offers
              </Badge>
              <h1 className="text-5xl font-bold mb-6">
                Exclusive <span className="text-yamaha-blue">Yamaha Deals</span>
              </h1>
              <p className="text-xl max-w-3xl mx-auto mb-8 text-yamaha-dark/80">
                Don't miss our incredible festival offers, finance schemes, and exchange programs. 
                Get the best value for your dream Yamaha bike or scooter.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="default" size="lg" className="bg-yamaha-blue text-white hover:bg-yamaha-blue-light">
                  View All Offers
                </Button>
                <Button variant="outline" size="lg" className="border-yamaha-dark text-yamaha-dark hover:bg-yamaha-dark hover:text-white">
                  Calculate EMI
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Festival Offers */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                Festival Offers
              </Badge>
              <h2 className="text-3xl font-bold mb-4">Dashain-Tihar Special Schemes</h2>
              <p className="text-xl text-muted-foreground">Celebrate the festive season with amazing discounts and offers</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {festivalOffers.map((offer, index) => (
                <Card key={index} className={`relative overflow-hidden hover:shadow-xl transition-shadow ${offer.popular ? 'ring-2 ring-yamaha-blue' : ''}`}>
                  {offer.popular && (
                    <Badge className="absolute top-4 right-4 z-10 bg-yamaha-blue">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  )}
                  
                  <div className={`h-2 ${offer.color}`}></div>
                  
                  <CardHeader className="p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-2xl mb-2">{offer.title}</CardTitle>
                        <p className="text-muted-foreground mb-2">{offer.subtitle}</p>
                        <div className="text-3xl font-bold text-yamaha-blue mb-2">{offer.discount}</div>
                        <p className="text-sm text-muted-foreground mb-4">{offer.description}</p>
                        <Badge variant="outline" className="text-xs">
                          <Clock className="w-3 h-3 mr-1" />
                          {offer.validity}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="px-6 pb-6">
                    <div className="space-y-2 mb-6">
                      {offer.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-yamaha-blue rounded-full"></div>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button className="w-full bg-yamaha-blue hover:bg-yamaha-blue-light">
                      Claim This Offer
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Finance Options */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                <CreditCard className="w-4 h-4 mr-2" />
                Finance Partners
              </Badge>
              <h2 className="text-3xl font-bold mb-4">Easy Finance Options</h2>
              <p className="text-xl text-muted-foreground">Choose from our trusted banking partners for the best finance deals</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {financeOptions.map((option, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-xl">{option.bank}</CardTitle>
                  </CardHeader>
                  
                  <CardContent className="p-0 space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Interest Rate</p>
                        <p className="font-semibold text-yamaha-blue">{option.rate}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Max Tenure</p>
                        <p className="font-semibold">{option.tenure}</p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-muted-foreground">Processing Fee</p>
                        <p className="font-semibold">{option.processing}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Key Features:</h4>
                      <div className="space-y-1">
                        {option.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm">
                            <div className="w-1 h-1 bg-yamaha-blue rounded-full"></div>
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Button variant="outline" className="w-full border-yamaha-blue text-yamaha-blue hover:bg-yamaha-blue hover:text-white">
                      Apply Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Exchange Offers */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                <Percent className="w-4 h-4 mr-2" />
                Exchange Programs
              </Badge>
              <h2 className="text-3xl font-bold mb-4">Trade-In & Upgrade Programs</h2>
              <p className="text-xl text-muted-foreground">Get the best value for your old vehicle</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {exchangeOffers.map((offer, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-xl">{offer.title}</CardTitle>
                    <p className="text-muted-foreground">{offer.description}</p>
                  </CardHeader>
                  
                  <CardContent className="p-0">
                    <div className="space-y-2 mb-6">
                      {offer.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-yamaha-yellow rounded-full"></div>
                          <span className="text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button variant="default" className="w-full bg-yamaha-yellow text-yamaha-dark hover:bg-yamaha-yellow/90">
                      Get Evaluation
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Monthly Offers */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                Year-Round Offers
              </Badge>
              <h2 className="text-3xl font-bold mb-4">Monthly Special Deals</h2>
              <p className="text-xl text-muted-foreground">Something special every month throughout the year</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {monthlyOffers.map((offer, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <CardHeader className="p-0 mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant={offer.status === 'Active' ? 'default' : 'secondary'} className="text-xs">
                        {offer.status}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{offer.month}</span>
                    </div>
                    <CardTitle className="text-xl">{offer.title}</CardTitle>
                    <p className="text-muted-foreground">{offer.description}</p>
                  </CardHeader>
                  
                  <CardContent className="p-0">
                    <div className="text-2xl font-bold text-yamaha-blue mb-4">{offer.discount}</div>
                    <Button 
                      variant={offer.status === 'Active' ? 'default' : 'outline'} 
                      className={`w-full ${offer.status === 'Active' ? 'bg-yamaha-blue hover:bg-yamaha-blue-light' : ''}`}
                      disabled={offer.status !== 'Active'}
                    >
                      {offer.status === 'Active' ? 'Avail Now' : 'Coming Soon'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-yamaha-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Don't Miss These Limited Time Offers!</h2>
            <p className="text-xl mb-8 text-yamaha-blue-light">
              Visit our showrooms today and take advantage of these exclusive deals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg" className="bg-yamaha-yellow text-yamaha-dark hover:bg-yamaha-yellow/90">
                Visit Showroom Now
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-yamaha-blue">
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

export default Offers;