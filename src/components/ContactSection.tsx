import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, MessageSquare, Calendar } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    primary: "+977-56-XXXXXX",
    secondary: "+977-56-XXXXXX",
    description: "Mon-Sat: 9:00 AM - 7:00 PM"
  },
  {
    icon: Mail,
    title: "Email Us",
    primary: "info@navinauto.com.np",
    secondary: "service@navinauto.com.np",
    description: "We'll respond within 24 hours"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    primary: "Bharatpur-10, Narayangarh",
    secondary: "Chitwan, Nepal",
    description: "Main Showroom & Service Center"
  },
  {
    icon: Clock,
    title: "Business Hours",
    primary: "Mon-Sat: 9:00 AM - 7:00 PM",
    secondary: "Sunday: 10:00 AM - 5:00 PM",
    description: "Emergency service available"
  }
];

const ContactSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <MessageSquare className="w-4 h-4 mr-2" />
            Contact Us
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            Get in <span className="text-yamaha-blue">Touch</span> With Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your Yamaha journey? Contact us for inquiries, test rides, 
            service appointments, or any assistance. We're here to help!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-border hover:border-yamaha-blue/30 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-yamaha-blue/10 rounded-lg">
                          <info.icon className="h-5 w-5 text-yamaha-blue" />
                        </div>
                        <h4 className="font-semibold">{info.title}</h4>
                      </div>
                      <div className="space-y-1">
                        <p className="font-medium text-yamaha-blue">{info.primary}</p>
                        <p className="text-muted-foreground">{info.secondary}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <Button variant="yamaha" className="h-12">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Test Ride
                </Button>
                <Button variant="yamaha-outline" className="h-12">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Showroom
                </Button>
                <Button variant="yamaha-outline" className="h-12">
                  <MapPin className="w-4 h-4 mr-2" />
                  Get Directions
                </Button>
                <Button variant="yamaha-outline" className="h-12">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  WhatsApp Chat
                </Button>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-muted border border-border rounded-lg h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-yamaha-blue mx-auto mb-3" />
                <p className="text-muted-foreground">Interactive Map</p>
                <p className="text-sm text-muted-foreground">Bharatpur-10, Narayangarh, Chitwan</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Full Name *</label>
                    <Input placeholder="Your full name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone Number *</label>
                    <Input placeholder="+977-XXXXXXXXX" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Email Address</label>
                  <Input type="email" placeholder="your.email@example.com" />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Inquiry Type</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="purchase">New Purchase</SelectItem>
                        <SelectItem value="testride">Test Ride</SelectItem>
                        <SelectItem value="service">Service Booking</SelectItem>
                        <SelectItem value="finance">Finance Options</SelectItem>
                        <SelectItem value="spares">Spare Parts</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Preferred Model</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select model" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="r15">R15 V4</SelectItem>
                        <SelectItem value="mt15">MT-15 V2</SelectItem>
                        <SelectItem value="fzs">FZ-S FI V3</SelectItem>
                        <SelectItem value="aerox">Aerox 155</SelectItem>
                        <SelectItem value="rayzr">RayZR 125 Hybrid</SelectItem>
                        <SelectItem value="fascino">Fascino 125 Hybrid</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea 
                    placeholder="Tell us more about your requirements..."
                    className="min-h-[120px]"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="yamaha" size="lg" className="flex-1">
                    Send Message
                  </Button>
                  <Button variant="yamaha-outline" size="lg" className="flex-1">
                    Call Instead
                  </Button>
                </div>

                <div className="text-sm text-muted-foreground">
                  * Required fields. We respect your privacy and will never share your information.
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;