import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gift, Percent, CreditCard, RefreshCw, Calendar, Star } from "lucide-react";

const offers = [
  {
    icon: Gift,
    title: "Dashain-Tihar Special",
    subtitle: "Festival Mega Offer",
    description: "Special discounts up to NPR 50,000 on select models. Limited time festival offer!",
    validity: "Valid till Tihar 2081",
    highlight: "Up to NPR 50,000 OFF",
    color: "bg-gradient-to-br from-red-500/10 to-orange-500/10 border-red-200"
  },
  {
    icon: CreditCard,
    title: "Zero Down Payment",
    subtitle: "Easy Finance Scheme",
    description: "Start your Yamaha journey with 0% down payment and flexible EMI options.",
    validity: "Processing fee waived",
    highlight: "0% Down Payment",
    color: "bg-gradient-to-br from-yamaha-blue/10 to-yamaha-blue-light/10 border-yamaha-blue/20"
  },
  {
    icon: RefreshCw,
    title: "Exchange Bonus",
    subtitle: "Upgrade Your Ride",
    description: "Get the best exchange value for your old bike plus additional cash bonus.",
    validity: "Any brand accepted",
    highlight: "Extra NPR 15,000",
    color: "bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-200"
  },
  {
    icon: Percent,
    title: "Service Package",
    subtitle: "Maintenance Made Easy",
    description: "Annual service package with genuine parts at discounted rates.",
    validity: "Save up to 30%",
    highlight: "Service Savings",
    color: "bg-gradient-to-br from-yamaha-yellow/10 to-amber-500/10 border-yamaha-yellow/30"
  }
];

const financeOptions = [
  {
    bank: "Himalayan Bank",
    rate: "11.5% per annum",
    tenure: "Up to 5 years",
    processing: "Minimal documentation"
  },
  {
    bank: "NIC Asia Bank",
    rate: "12% per annum",
    tenure: "Up to 4 years",
    processing: "Quick approval"
  },
  {
    bank: "Machhapuchchhre Bank",
    rate: "11.8% per annum",
    tenure: "Up to 5 years",
    processing: "Same day processing"
  }
];

const OffersSection = () => {
  return (
    <section id="offers" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Gift className="w-4 h-4 mr-2" />
            Special Offers
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            Exciting <span className="text-yamaha-blue">Offers & Deals</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Make your Yamaha dreams come true with our special offers, easy finance options, 
            and festival discounts. Best deals in Narayangarh!
          </p>
        </div>

        {/* Main Offers */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {offers.map((offer, index) => (
            <Card key={index} className={`${offer.color} border hover:shadow-lg transition-all duration-300 group`}>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="p-2 bg-background/80 rounded-lg">
                    <offer.icon className="h-5 w-5 text-yamaha-blue" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {offer.validity}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{offer.title}</CardTitle>
                <p className="text-sm text-yamaha-blue font-medium">{offer.subtitle}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-3">{offer.description}</p>
                <div className="bg-background/80 rounded-lg p-3 text-center">
                  <div className="text-lg font-bold text-yamaha-blue">{offer.highlight}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Festival Offer */}
        <div className="bg-gradient-to-r from-yamaha-blue/5 via-yamaha-blue-light/5 to-yamaha-yellow/5 border border-yamaha-blue/20 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <Badge className="bg-yamaha-yellow text-yamaha-dark mb-4">
              <Star className="w-4 h-4 mr-2" />
              Limited Time Offer
            </Badge>
            <h3 className="text-3xl font-bold mb-4">
              Mega Dashain-Tihar <span className="text-yamaha-blue">Festival Sale</span>
            </h3>
            <p className="text-xl text-muted-foreground mb-6">
              Biggest discounts of the year! Up to NPR 50,000 off + Zero down payment + Exchange bonus
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="yamaha" size="lg">
                View Festival Offers
              </Button>
              <Button variant="yamaha-outline" size="lg">
                Calculate EMI
              </Button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-background/80 rounded-lg p-4">
              <div className="text-2xl font-bold text-yamaha-blue">NPR 50,000</div>
              <div className="text-sm text-muted-foreground">Maximum Discount</div>
            </div>
            <div className="bg-background/80 rounded-lg p-4">
              <div className="text-2xl font-bold text-yamaha-blue">0%</div>
              <div className="text-sm text-muted-foreground">Down Payment</div>
            </div>
            <div className="bg-background/80 rounded-lg p-4">
              <div className="text-2xl font-bold text-yamaha-blue">5 Years</div>
              <div className="text-sm text-muted-foreground">Easy EMI</div>
            </div>
          </div>
        </div>

        {/* Finance Partners */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Our Finance Partners</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {financeOptions.map((finance, index) => (
              <Card key={index} className="border-border hover:border-yamaha-blue/30 transition-colors">
                <CardHeader>
                  <CardTitle className="text-lg text-yamaha-blue">{finance.bank}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Interest Rate:</span>
                    <span className="font-medium">{finance.rate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tenure:</span>
                    <span className="font-medium">{finance.tenure}</span>
                  </div>
                  <div className="text-sm text-yamaha-blue">{finance.processing}</div>
                  <Button variant="yamaha-outline" size="sm" className="w-full">
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Don't miss out on these amazing offers! Visit our showroom or call us today.
          </p>
          <Button variant="yamaha" size="lg">
            <Calendar className="w-5 h-5 mr-2" />
            Book Appointment
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OffersSection;