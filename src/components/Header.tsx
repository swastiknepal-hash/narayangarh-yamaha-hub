import { Button } from "@/components/ui/button";
import { Bike, Phone, MapPin, Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="hidden md:flex items-center justify-between py-2 text-sm border-b border-border/50">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-yamaha-blue" />
              <span className="text-muted-foreground">Bharatpur, Narayangarh, Chitwan</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-yamaha-blue" />
              <span className="text-muted-foreground">+977-56-XXXXXX</span>
            </div>
          </div>
          <div className="text-muted-foreground">
            3 Showrooms • 3 Service Centers
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-3">
            <Bike className="h-8 w-8 text-yamaha-blue" />
            <div>
              <h1 className="text-xl font-bold text-foreground">Navin Auto Centre</h1>
              <p className="text-xs text-yamaha-blue font-medium">Official Yamaha Dealer</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/" className="text-foreground hover:text-yamaha-blue transition-colors">Home</Link>
            <Link to="/bikes" className="text-foreground hover:text-yamaha-blue transition-colors">Bikes</Link>
            <Link to="/scooters" className="text-foreground hover:text-yamaha-blue transition-colors">Scooters</Link>
            <Link to="/services" className="text-foreground hover:text-yamaha-blue transition-colors">Services</Link>
            <Link to="/offers" className="text-foreground hover:text-yamaha-blue transition-colors">Offers</Link>
            <Link to="/about" className="text-foreground hover:text-yamaha-blue transition-colors">About</Link>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="yamaha-outline" size="sm" className="hidden md:flex">
              Book Test Ride
            </Button>
            <Button variant="yamaha" size="sm">
              Contact Us
            </Button>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4 space-y-2">
            <a href="#home" className="block py-2 text-foreground hover:text-yamaha-blue transition-colors">Home</a>
            <a href="#motorcycles" className="block py-2 text-foreground hover:text-yamaha-blue transition-colors">Motorcycles</a>
            <a href="#scooters" className="block py-2 text-foreground hover:text-yamaha-blue transition-colors">Scooters</a>
            <a href="#service" className="block py-2 text-foreground hover:text-yamaha-blue transition-colors">Service</a>
            <a href="#offers" className="block py-2 text-foreground hover:text-yamaha-blue transition-colors">Offers</a>
            <a href="#about" className="block py-2 text-foreground hover:text-yamaha-blue transition-colors">About</a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;