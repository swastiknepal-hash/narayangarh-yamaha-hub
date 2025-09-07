import { Car, MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-yamaha-dark text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Car className="h-8 w-8 text-yamaha-yellow" />
              <div>
                <h3 className="text-xl font-bold">Navin Auto Centre</h3>
                <p className="text-yamaha-blue-light text-sm">Official Yamaha Dealer</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your trusted Yamaha partner in Narayangarh, Chitwan. We bring you the best of 
              Japanese engineering with 3 showrooms and 3 service centers for your convenience.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost" className="hover:bg-yamaha-blue/20 hover:text-yamaha-yellow">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-yamaha-blue/20 hover:text-yamaha-yellow">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-yamaha-blue/20 hover:text-yamaha-yellow">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-yamaha-yellow">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-yamaha-yellow transition-colors">Home</a></li>
              <li><a href="#motorcycles" className="text-gray-300 hover:text-yamaha-yellow transition-colors">Motorcycles</a></li>
              <li><a href="#scooters" className="text-gray-300 hover:text-yamaha-yellow transition-colors">Scooters</a></li>
              <li><a href="#service" className="text-gray-300 hover:text-yamaha-yellow transition-colors">Service Centers</a></li>
              <li><a href="#offers" className="text-gray-300 hover:text-yamaha-yellow transition-colors">Offers & Finance</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-yamaha-yellow transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-yamaha-yellow">Our Services</h4>
            <ul className="space-y-3">
              <li className="text-gray-300">New Vehicle Sales</li>
              <li className="text-gray-300">Authorized Service</li>
              <li className="text-gray-300">Genuine Spare Parts</li>
              <li className="text-gray-300">Finance Assistance</li>
              <li className="text-gray-300">Test Rides</li>
              <li className="text-gray-300">Express Service</li>
              <li className="text-gray-300">Insurance Support</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-yamaha-yellow">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-yamaha-blue-light mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Main Showroom</p>
                  <p className="text-gray-300 text-sm">Bharatpur-10, Narayangarh, Chitwan</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-yamaha-blue-light" />
                <div>
                  <p className="font-medium">+977-56-XXXXXX</p>
                  <p className="text-gray-300 text-sm">Sales & Service</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-yamaha-blue-light" />
                <div>
                  <p className="font-medium">info@navinauto.com.np</p>
                  <p className="text-gray-300 text-sm">General Inquiries</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-yamaha-blue-light mt-1" />
                <div>
                  <p className="font-medium">Mon-Sat: 9:00 AM - 7:00 PM</p>
                  <p className="text-gray-300 text-sm">Sunday: 10:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-12 bg-gray-600" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-300">
              © {currentYear} Navin Auto Centre. All rights reserved.
            </p>
            <p className="text-sm text-gray-400">
              Official authorized dealer of Yamaha Motor Nepal.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-6 text-sm">
            <a href="#" className="text-gray-300 hover:text-yamaha-yellow transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-300 hover:text-yamaha-yellow transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-300 hover:text-yamaha-yellow transition-colors">Warranty Policy</a>
            <a href="#" className="text-gray-300 hover:text-yamaha-yellow transition-colors">Sitemap</a>
          </div>
        </div>

        {/* Yamaha Brand Notice */}
        <div className="mt-8 p-4 bg-yamaha-blue/10 rounded-lg border border-yamaha-blue/20">
          <p className="text-center text-sm text-gray-300">
            Yamaha and all related marks are trademarks of Yamaha Motor Co., Ltd. 
            Navin Auto Centre is an authorized dealer of Yamaha Motor Nepal.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;