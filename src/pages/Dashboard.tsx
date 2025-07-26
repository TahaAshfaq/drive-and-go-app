// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { 
//   Car, 
//   Plane, 
//   MapPin, 
//   Calendar, 
//   Briefcase, 
//   PartyPopper, 
//   Navigation,
//   User,
//   History,
//   CreditCard,
//   HeadphonesIcon,
//   Settings,
//   LogOut,
//   Menu,
//   X
// } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const Dashboard = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const navigate = useNavigate();

//   const services = [
//     {
//       id: 'rent-car',
//       title: 'Rent a Car',
//       description: 'Self-drive rental cars for your convenience',
//       icon: Car,
//       color: 'from-blue-500 to-blue-600',
//       route: '/service/rent-car'
//     },
//     {
//       id: 'airport',
//       title: 'Airport Services',
//       description: 'Reliable airport pickup and drop-off',
//       icon: Plane,
//       color: 'from-green-500 to-green-600',
//       route: '/service/airport'
//     },
//     {
//       id: 'intercity',
//       title: 'Intercity Travel',
//       description: 'Comfortable rides between cities',
//       icon: MapPin,
//       color: 'from-purple-500 to-purple-600',
//       route: '/service/intercity'
//     },
//     {
//       id: 'trip',
//       title: 'Day Trip',
//       description: 'Explore the city with our day packages',
//       icon: Calendar,
//       color: 'from-orange-500 to-orange-600',
//       route: '/service/trip'
//     },
//     {
//       id: 'corporate',
//       title: 'Corporate Driver',
//       description: 'Professional drivers for business needs',
//       icon: Briefcase,
//       color: 'from-gray-600 to-gray-700',
//       route: '/service/corporate'
//     },
//     {
//       id: 'events',
//       title: 'Events',
//       description: 'Special occasion transportation',
//       icon: PartyPopper,
//       color: 'from-pink-500 to-pink-600',
//       route: '/service/events'
//     },
//     {
//       id: 'outstation',
//       title: 'Outstation Travel',
//       description: 'Long distance comfortable journeys',
//       icon: Navigation,
//       color: 'from-indigo-500 to-indigo-600',
//       route: '/service/outstation'
//     }
//   ];

//   const navItems = [
//     { title: 'Profile', icon: User, route: '/profile' },
//     { title: 'Ride History', icon: History, route: '/history' },
//     { title: 'Payment Methods', icon: CreditCard, route: '/payments' },
//     { title: 'Support', icon: HeadphonesIcon, route: '/support' },
//     { title: 'Settings', icon: Settings, route: '/settings' },
//   ];

//   const handleLogout = () => {
//     navigate('/');
//   };

//   return (
//     <div className="min-h-screen bg-background">
//       {/* Top Navigation */}
//       <nav className="bg-card border-b shadow-sm sticky top-0 z-50">
//         <div className="container mx-auto px-4">
//           <div className="flex items-center justify-between h-16">
//             {/* Logo */}
//             <div className="flex items-center">
//               <h1 className="text-2xl font-bold text-primary">Drive & Go</h1>
//             </div>

//             {/* Desktop Navigation */}
//             <div className="hidden md:flex items-center space-x-6">
//               {navItems.map((item) => (
//                 <Button
//                   key={item.title}
//                   variant="ghost"
//                   className="flex items-center gap-2"
//                   onClick={() => navigate(item.route)}
//                 >
//                   <item.icon className="h-4 w-4" />
//                   {item.title}
//                 </Button>
//               ))}
//               <Button variant="outline" onClick={handleLogout}>
//                 <LogOut className="h-4 w-4 mr-2" />
//                 Logout
//               </Button>
//             </div>

//             {/* Mobile Menu Button */}
//             <Button
//               variant="ghost"
//               size="icon"
//               className="md:hidden"
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             >
//               {mobileMenuOpen ? <X /> : <Menu />}
//             </Button>
//           </div>

//           {/* Mobile Navigation */}
//           {mobileMenuOpen && (
//             <div className="md:hidden py-4 border-t">
//               <div className="flex flex-col space-y-2">
//                 {navItems.map((item) => (
//                   <Button
//                     key={item.title}
//                     variant="ghost"
//                     className="justify-start"
//                     onClick={() => {
//                       navigate(item.route);
//                       setMobileMenuOpen(false);
//                     }}
//                   >
//                     <item.icon className="h-4 w-4 mr-2" />
//                     {item.title}
//                   </Button>
//                 ))}
//                 <Button variant="outline" className="justify-start" onClick={handleLogout}>
//                   <LogOut className="h-4 w-4 mr-2" />
//                   Logout
//                 </Button>
//               </div>
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* Main Content */}
//       <main className="container mx-auto px-4 py-8">
//         {/* Welcome Section */}
//         <div className="mb-8">
//           <h2 className="text-3xl font-bold text-foreground mb-2">
//             Welcome back!
//           </h2>
//           <p className="text-muted-foreground text-lg">
//             Choose from our premium services for your next journey
//           </p>
//         </div>

//         {/* Services Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {services.map((service) => (
//             <Card 
//               key={service.id}
//               className="group cursor-pointer hover:shadow-glow transition-all duration-300 hover:-translate-y-2 overflow-hidden"
//               onClick={() => navigate(service.route)}
//             >
//               <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
//               <CardHeader className="pb-3">
//                 <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
//                   <service.icon className="h-6 w-6 text-white" />
//                 </div>
//                 <CardTitle className="text-lg group-hover:text-primary transition-colors">
//                   {service.title}
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <CardDescription className="text-sm">
//                   {service.description}
//                 </CardDescription>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         {/* Quick Stats */}
//         <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
//           <Card className="text-center p-6">
//             <h3 className="text-2xl font-bold text-primary mb-2">150+</h3>
//             <p className="text-muted-foreground">Cities Covered</p>
//           </Card>
//           <Card className="text-center p-6">
//             <h3 className="text-2xl font-bold text-primary mb-2">10K+</h3>
//             <p className="text-muted-foreground">Happy Customers</p>
//           </Card>
//           <Card className="text-center p-6">
//             <h3 className="text-2xl font-bold text-primary mb-2">24/7</h3>
//             <p className="text-muted-foreground">Support Available</p>
//           </Card>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Dashboard;
























// Updated Customer Dashboard UI Based on Subframe Layout But Integrated with Your Component System

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
  CreditCard,
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
      route: "/service/airport",
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
    { title: "Profile", icon: User, route: "/profile" },
    { title: "Ride History", icon: History, route: "/history" },
    { title: "Payment Methods", icon: CreditCard, route: "/payments" },
    { title: "Support", icon: HeadphonesIcon, route: "/support" },
    { title: "Settings", icon: Settings, route: "/settings" },
  ];

  const handleLogout = () => navigate("/");

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navbar */}
      <nav className="bg-card border-b sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">Drive & Go</h1>
          <div className="hidden md:flex items-center gap-6">
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
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" /> Logout
            </Button>
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
    </div>
  );
};

export default Dashboard;
