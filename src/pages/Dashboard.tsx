import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Car,
  Plane,
  MapPin,
  Calendar,
  Briefcase,
  PartyPopper,
  Navigation,
  User,
  History,
  Bell,      
  HeadphonesIcon,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { IconButton } from "@/components/ui/icon-button"; // You can create this as a wrapper over lucide icons

const Dashboard = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const services = [
    {
      id: "rent-car",
      title: "Rent a Car",
      description: "Choose from our premium fleet of vehicles",
      icon: Car,
      img: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8",
      route: "/service/rent-car",
      buttonText: "Book Now",
    },
    {
      id: "airport",
      title: "Airport Services",
      description: "Reliable airport transfers with professional drivers",
      icon: Plane,
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05",
    route: "/airport-services",
      buttonText: "Schedule Pickup",
    },
    {
      id: "intercity",
      title: "Intercity Travel",
      description: "Comfortable intercity transportation services",
      icon: MapPin,
      img: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d",
      route: "/service/intercity",
      buttonText: "Plan Journey",
    },
    {
      id: "trip",
      title: "Trip Planning",
      description: "Customize your perfect travel itinerary",
      icon: Calendar,
      img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800",
      route: "/service/trip",
      buttonText: "Start Planning",
    },
    {
      id: "corporate",
      title: "Corporate Driver",
      description: "Professional drivers for business travel",
      icon: Briefcase,
      img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85",
      route: "/service/corporate",
      buttonText: "Book Service",
    },
    {
      id: "events",
      title: "Events",
      description: "Transportation solutions for special events",
      icon: PartyPopper,
      img: "https://images.unsplash.com/photo-1511578314322-379afb476865",
      route: "/service/events",
      buttonText: "Plan Event",
    },
    {
      id: "outstation",
      title: "City-to-City",
      description: "Long-distance travel between major cities",
      icon: Navigation,
      img: "https://images.unsplash.com/photo-1519003722824-194d4455a60c",
      route: "/service/outstation",
      buttonText: "Reserve Now",
    },
  ];

  const navItems = [
    { title: "Ride History", icon: History, route: "/history" },
    { title: "Support", icon: HeadphonesIcon, route: "/support" },
    { title: "", icon:   Bell, route: "/notifications" },
    { title: "", icon: User, route: "/account" },

  ];

  const handleLogout = () => navigate("/");

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navbar */}
      <nav className="bg-card border-b sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary" onClick={handleLogout}>Drive & Go</h1>
          <div className="hidden md:flex items-center gap-0">
            {navItems.map((item) => (
              <Button
                key={item.title}
                variant="ghost"
                className="flex items-center gap-2"
                onClick={() => navigate(item.route)}
              >
                <item.icon className="h-4 w-4" />
                {item.title}
              </Button>
            ))}
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden px-4 py-2 border-t">
            {navItems.map((item) => (
              <Button
                key={item.title}
                variant="ghost"
                className="w-full justify-start"
                onClick={() => {
                  navigate(item.route);
                  setMobileMenuOpen(false);
                }}
              >
                <item.icon className="h-4 w-4 mr-2" />
                {item.title}
              </Button>
            ))}
            <Button variant="outline" className="w-full justify-start" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" /> Logout
            </Button>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="px-6 py-12 w-full flex flex-col items-center gap-8 bg-background">
        <div className="max-w-[1280px] w-full flex flex-wrap gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col rounded-md border border-border bg-card shadow-sm basis-[calc(33.33%-16px)] overflow-hidden"
            >
              <img src={service.img} className="h-48 w-full object-cover" />
              <div className="flex flex-col gap-6 px-6 py-6">
                <div className="flex flex-col gap-1 w-full">
                  <div className="flex items-center justify-between w-full">
                    <span className="text-lg font-semibold text-foreground">{service.title}</span>
                    <IconButton size="sm" icon={<service.icon className="h-5 w-5" />} />
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">{service.description}</p>
                </div>
                <Button className="h-8 w-full" onClick={() => navigate(service.route)}>
                  {service.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </main>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <span className="font-semibold text-xl">RENTALS</span>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Useful Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cars</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Account</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Sign In</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Register</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Partner</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
