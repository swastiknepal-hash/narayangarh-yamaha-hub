import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, Navigation } from "lucide-react";

const Contact = () => {
  const locations = [
    {
      name: "Main Showroom & Service Center",
      address: "Bharatpur-10, Narayangarh, Chitwan",
      phone: "+977-56-521XXX",
      email: "main@navinauto.com.np",
      hours: "Mon-Sat: 9:00 AM - 7:00 PM, Sun: 10:00 AM - 5:00 PM",
      services: ["New Vehicle Sales", "Complete Service", "Spare Parts", "Body Repair"],
      coordinates: "27.6764, 84.4391"
    },
    {
      name: "Express Service Center",
      address: "Bharatpur-8, Narayangarh, Chitwan",
      phone: "+977-56-522XXX",
      email: "express@navinauto.com.np",
      hours: "Mon-Sat: 8:00 AM - 8:00 PM, Sun: 9:00 AM - 6:00 PM",
      services: ["Quick Service", "Oil Change", "Tire Service", "Minor Repairs"],
      coordinates: "27.6854, 84.4281"
    },
    {
      name: "Premium Sales Showroom",
      address: "Bharatpur-12, Narayangarh, Chitwan",
      phone: "+977-56-523XXX",
      email: "premium@navinauto.com.np",
      hours: "Mon-Sat: 9:00 AM - 6:00 PM, Sun: 10:00 AM - 4:00 PM",
      services: ["Premium Models", "Test Rides", "Finance Consultation", "Accessories"],
      coordinates: "27.6654, 84.4501"
    }
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our team",
      value: "+977-56-XXXXXX",
      action: "Call Now"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      description: "Quick chat and support",
      value: "+977-98XXXXXXXX",
      action: "Chat Now"
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us your queries",
      value: "info@navinauto.com.np",
      action: "Send Email"
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
                <MessageSquare className="w-4 h-4 mr-2" />
                Contact Us
              </Badge>
              <h1 className="text-5xl font-bold mb-6">
                Get in <span className="text-yamaha-yellow">Touch</span>
              </h1>
              <p className="text-xl max-w-3xl mx-auto mb-8 text-yamaha-blue-light">
                We're here to help! Visit any of our 3 showrooms, call us, or send a message. 
                Our team is ready to assist you with all your Yamaha needs.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Contact Methods */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="w-16 h-16 bg-yamaha-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <method.icon className="w-8 h-8 text-yamaha-blue" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{method.description}</p>
                  <p className="font-medium text-yamaha-blue mb-4">{method.value}</p>
                  <Button variant="outline" size="sm" className="border-yamaha-blue text-yamaha-blue hover:bg-yamaha-blue hover:text-white">
                    {method.action}
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Map Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <Badge variant="secondary" className="mb-4">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Badge>
                <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
                
                <Card className="p-6">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">First Name *</label>
                        <Input placeholder="Enter your first name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Last Name *</label>
                        <Input placeholder="Enter your last name" />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Email *</label>
                        <Input type="email" placeholder="Enter your email" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Phone *</label>
                        <Input type="tel" placeholder="Enter your phone number" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Subject *</label>
                      <Input placeholder="What is this regarding?" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Interested In</label>
                      <select className="w-full p-2 border border-border rounded-md bg-background">
                        <option value="">Select an option</option>
                        <option value="bikes">Motorcycles</option>
                        <option value="scooters">Scooters</option>
                        <option value="service">Service</option>
                        <option value="parts">Spare Parts</option>
                        <option value="finance">Finance</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Message *</label>
                      <Textarea 
                        placeholder="Tell us more about your inquiry..."
                        rows={5}
                      />
                    </div>
                    
                    <Button className="w-full bg-yamaha-blue hover:bg-yamaha-blue-light">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </Card>
              </div>

              {/* Map & Quick Info */}
              <div>
                <Badge variant="secondary" className="mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  Find Us
                </Badge>
                <h2 className="text-3xl font-bold mb-6">Visit Our Locations</h2>
                
                {/* Interactive Map Placeholder */}
                <Card className="mb-6 overflow-hidden">
                  <div className="h-64 bg-muted flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-yamaha-blue mx-auto mb-2" />
                      <p className="text-muted-foreground">Interactive Map</p>
                      <p className="text-sm text-muted-foreground">3 Locations in Narayangarh</p>
                      <Button variant="outline" size="sm" className="mt-2">
                        <Navigation className="w-4 h-4 mr-2" />
                        Open in Google Maps
                      </Button>
                    </div>
                  </div>
                </Card>

                {/* Quick Business Hours */}
                <Card className="p-6">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-yamaha-blue" />
                      Business Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 space-y-2">
                    <div className="flex justify-between">
                      <span>Monday - Saturday</span>
                      <span className="font-medium">9:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-medium">10:00 AM - 5:00 PM</span>
                    </div>
                    <div className="pt-2 mt-2 border-t border-border">
                      <p className="text-sm text-muted-foreground">
                        Express service center open extended hours (8 AM - 8 PM)
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Locations */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                <MapPin className="w-4 h-4 mr-2" />
                Our Locations
              </Badge>
              <h2 className="text-3xl font-bold mb-4">3 Convenient Locations</h2>
              <p className="text-xl text-muted-foreground">Choose the location that's most convenient for you</p>
            </div>
            
            <div className="space-y-8">
              {locations.map((location, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="grid lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <CardHeader className="p-0 mb-4">
                        <CardTitle className="text-xl flex items-center gap-2">
                          <MapPin className="w-5 h-5 text-yamaha-blue" />
                          {location.name}
                        </CardTitle>
                      </CardHeader>
                      
                      <CardContent className="p-0 grid md:grid-cols-2 gap-4">
                        <div className="space-y-3">
                          <div>
                            <p className="text-sm text-muted-foreground">Address</p>
                            <p className="font-medium">{location.address}</p>
                          </div>
                          
                          <div>
                            <p className="text-sm text-muted-foreground">Phone</p>
                            <p className="font-medium text-yamaha-blue">{location.phone}</p>
                          </div>
                          
                          <div>
                            <p className="text-sm text-muted-foreground">Email</p>
                            <p className="font-medium">{location.email}</p>
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          <div>
                            <p className="text-sm text-muted-foreground">Hours</p>
                            <p className="font-medium">{location.hours}</p>
                          </div>
                          
                          <div>
                            <p className="text-sm text-muted-foreground">Services</p>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {location.services.map((service, idx) => (
                                <Badge key={idx} variant="outline" className="text-xs">
                                  {service}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                    
                    <div className="flex flex-col gap-3">
                      <Button variant="outline" className="border-yamaha-blue text-yamaha-blue hover:bg-yamaha-blue hover:text-white">
                        <Navigation className="w-4 h-4 mr-2" />
                        Get Directions
                      </Button>
                      <Button variant="default" className="bg-yamaha-blue hover:bg-yamaha-blue-light">
                        <Phone className="w-4 h-4 mr-2" />
                        Call Location
                      </Button>
                      <Button variant="ghost" className="text-yamaha-blue hover:bg-yamaha-blue/10">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        WhatsApp
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                FAQ
              </Badge>
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground">Quick answers to common questions</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="p-6">
                <h3 className="font-semibold mb-2">What are your business hours?</h3>
                <p className="text-muted-foreground text-sm">Our main showrooms are open Mon-Sat 9 AM-7 PM, Sun 10 AM-5 PM. Express service center has extended hours.</p>
              </Card>
              
              <Card className="p-6">
                <h3 className="font-semibold mb-2">Do you provide home delivery?</h3>
                <p className="text-muted-foreground text-sm">Yes, we provide free home delivery within Narayangarh city limits for new vehicle purchases.</p>
              </Card>
              
              <Card className="p-6">
                <h3 className="font-semibold mb-2">What finance options are available?</h3>
                <p className="text-muted-foreground text-sm">We partner with multiple banks offering competitive interest rates starting from 12.5% with flexible tenure options.</p>
              </Card>
              
              <Card className="p-6">
                <h3 className="font-semibold mb-2">Do you accept exchange vehicles?</h3>
                <p className="text-muted-foreground text-sm">Yes, we accept all brands of motorcycles and scooters for exchange with fair market value assessment.</p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-yamaha-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Connect?</h2>
            <p className="text-xl mb-8 text-yamaha-blue-light">
              Choose the most convenient way to reach us. We're here to help with all your Yamaha needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg" className="bg-yamaha-yellow text-yamaha-dark hover:bg-yamaha-yellow/90">
                <MapPin className="w-5 h-5 mr-2" />
                Visit Showroom
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-yamaha-blue">
                <MessageSquare className="w-5 h-5 mr-2" />
                WhatsApp Chat
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;