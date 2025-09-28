// import { useState, useRef, useEffect } from "react";
// // TODO: Import GoogleMapSelector from its correct location
// // import GoogleMapSelector from "@/components/GoogleMapSelector";
// // ...existing code...
// import {
//   Plane,
//   MapPin,
//   Calendar,
//   Clock,
//   User,
//   Phone,
//   Car,
//   MessageSquare,
//   CreditCard,
//   Plus,
//   X,
//   ArrowLeft,
//   Navigation,
//   Search,
//   Crosshair
// } from "lucide-react";
// import { Button } from "@/components/ui/button";

// const AirportServicesForm = () => {
//   const [formData, setFormData] = useState({
//     bookingDate: "",
//     bookingTime: "",
//     fromLocation: "",
//     toLocation: "",
//     fromCoordinates: null,
//     toCoordinates: null,
//     viaLocations: [],
//     passengerName: "",
//     passengerMobile: "",
//     vehicleType: "",
//     noteForDriver: "",
//     paymentMethod: ""
//   });

//   const [newViaLocation, setNewViaLocation] = useState("");
//   const [showFromMap, setShowFromMap] = useState(false);
//   const [showToMap, setShowToMap] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");

//   const vehicleTypes = [
//     { value: "sedan", label: "Sedan (4 seats)" },
//     { value: "suv", label: "SUV (7 seats)" },
//     { value: "luxury", label: "Luxury Car (4 seats)" },
//     { value: "van", label: "Van (12 seats)" },
//     { value: "bus", label: "Mini Bus (20 seats)" }
//   ];

//   const paymentMethods = [
//     { value: "cash", label: "Cash Payment" },
//     { value: "card", label: "Credit/Debit Card" },
//     { value: "digital", label: "Digital Wallet" },
//     { value: "bank", label: "Bank Transfer" }
//   ];

//   const handleInputChange = (field, value) => {
//     setFormData(prev => ({ ...prev, [field]: value }));
//   };

//   const addViaLocation = () => {
//     if (newViaLocation.trim()) {
//       setFormData(prev => ({
//         ...prev,
//         viaLocations: [...prev.viaLocations, newViaLocation.trim()]
//       }));
//       setNewViaLocation("");
//     }
//   };

//   const removeViaLocation = (index) => {
//     setFormData(prev => ({
//       ...prev,
//       viaLocations: prev.viaLocations.filter((_, i) => i !== index)
//     }));
//   };

//   const handleLocationSelect = (location, coordinates, type) => {
//     if (type === "from") {
//       handleInputChange("fromLocation", location);
//       handleInputChange("fromCoordinates", coordinates);
//       setShowFromMap(false);
//     } else if (type === "to") {
//       handleInputChange("toLocation", location);
//       handleInputChange("toCoordinates", coordinates);
//       setShowToMap(false);
//     }
//   };

//   const handleSubmit = () => {
//     // Validate required fields
//     if (!formData.bookingDate || !formData.bookingTime || !formData.fromLocation || 
//         !formData.toLocation || !formData.passengerName || !formData.passengerMobile || 
//         !formData.vehicleType || !formData.paymentMethod) {
//       alert("Please fill in all required fields");
//       return;
//     }
    
//     console.log("Booking Data:", formData);
//     alert("Airport service booking submitted successfully!");
//   };

//   const InteractiveMapSelector = ({ isVisible, onClose, onSelect, title, type }) => {
//     const mapRef = useRef(null);
//     const [selectedLocation, setSelectedLocation] = useState(null);
//     const [userLocation, setUserLocation] = useState(null);
//     const [suggestions, setSuggestions] = useState([]);
//     const [isSearching, setIsSearching] = useState(false);

//     // Lahore coordinates as default center
//     const defaultCenter = { lat: 31.5497, lng: 74.3436 };

//     // Popular locations in Pakistan
//     const popularLocations = [
//       { name: "Allama Iqbal International Airport (LHE)", lat: 31.5216, lng: 74.4036 },
//       { name: "Islamabad International Airport (ISB)", lat: 33.5661, lng: 73.0516 },
//       { name: "Jinnah International Airport (KHI)", lat: 24.9056, lng: 67.1608 },
//       { name: "Downtown Lahore", lat: 31.5804, lng: 74.3587 },
//       { name: "Gulberg, Lahore", lat: 31.5204, lng: 74.3587 },
//       { name: "DHA Lahore", lat: 31.4697, lng: 74.4131 },
//       { name: "Johar Town, Lahore", lat: 31.4697, lng: 74.2728 },
//       { name: "Blue Area, Islamabad", lat: 33.7077, lng: 73.0563 },
//       { name: "F-6 Sector, Islamabad", lat: 33.7215, lng: 73.0433 },
//       { name: "Clifton, Karachi", lat: 24.8138, lng: 67.0299 }
//     ];

//     const getCurrentLocation = () => {
//       if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//           (position) => {
//             const coords = {
//               lat: position.coords.latitude,
//               lng: position.coords.longitude
//             };
//             setUserLocation(coords);
//             setSelectedLocation(coords);
//           },
//           (error) => {
//             console.error("Error getting location:", error);
//             alert("Unable to get your current location. Please select manually.");
//           }
//         );
//       }
//     };

//     const searchLocations = async (query) => {
//       if (!query.trim()) {
//         setSuggestions([]);
//         return;
//       }

//       setIsSearching(true);
      
//       // Simulate search results (in real app, you'd use a geocoding service)
//       const filtered = popularLocations.filter(location =>
//         location.name.toLowerCase().includes(query.toLowerCase())
//       );
      
//       // Add some mock additional results
//       const mockResults = [
//         { name: `${query} - Main Area`, lat: defaultCenter.lat + Math.random() * 0.1, lng: defaultCenter.lng + Math.random() * 0.1 },
//         { name: `${query} - City Center`, lat: defaultCenter.lat - Math.random() * 0.1, lng: defaultCenter.lng - Math.random() * 0.1 }
//       ];

//       setTimeout(() => {
//         setSuggestions([...filtered, ...mockResults]);
//         setIsSearching(false);
//       }, 500);
//     };

//     const handleMapClick = (event) => {
//       const lat = event.clientY / event.currentTarget.offsetHeight * 0.2 + defaultCenter.lat - 0.1;
//       const lng = event.clientX / event.currentTarget.offsetWidth * 0.2 + defaultCenter.lng - 0.1;
      
//       const coords = { lat, lng };
//       setSelectedLocation(coords);
//     };

//     const confirmSelection = () => {
//       if (selectedLocation) {
//         const locationName = `Location (${selectedLocation.lat.toFixed(4)}, ${selectedLocation.lng.toFixed(4)})`;
//         onSelect(locationName, selectedLocation);
//       }
//     };

//     useEffect(() => {
//       if (searchQuery) {
//         searchLocations(searchQuery);
//       }
//     }, [searchQuery]);

//     if (!isVisible) return null;

//     return (
//       <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
//         <div className="bg-card rounded-lg shadow-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
//           <div className="flex items-center justify-between p-4 border-b">
//             <h3 className="text-lg font-semibold">{title}</h3>
//             <Button variant="ghost" size="icon" onClick={onClose}>
//               <X className="h-4 w-4" />
//             </Button>
//           </div>
          
//           <div className="flex h-96">
//             {/* Search Panel */}
//             <div className="w-1/3 border-r p-4 overflow-y-auto">
//               <div className="space-y-4">
//                 <div className="relative">
//                   <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
//                   <input
//                     type="text"
//                     placeholder="Search locations..."
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     className="w-full pl-10 pr-4 py-2 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
//                   />
//                 </div>

//                 <Button
//                   type="button"
//                   variant="outline"
//                   onClick={getCurrentLocation}
//                   className="w-full justify-start"
//                 >
//                   <Crosshair className="h-4 w-4 mr-2" />
//                   Use Current Location
//                 </Button>

//                 <div className="space-y-2">
//                   <h4 className="text-sm font-medium text-muted-foreground">
//                     {searchQuery ? "Search Results" : "Popular Locations"}
//                   </h4>
                  
//                   {isSearching ? (
//                     <div className="flex items-center justify-center py-4">
//                       <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
//                     </div>
//                   ) : (
//                     <div className="space-y-1 max-h-48 overflow-y-auto">
//                       {(suggestions.length > 0 ? suggestions : popularLocations).map((location, index) => (
//                         <button
//                           key={index}
//                           className="w-full text-left p-3 rounded-md hover:bg-muted transition-colors border border-border"
//                           onClick={() => {
//                             setSelectedLocation({ lat: location.lat, lng: location.lng });
//                             onSelect(location.name, { lat: location.lat, lng: location.lng });
//                           }}
//                         >
//                           <div className="flex items-center gap-2">
//                             <MapPin className="h-4 w-4 text-primary" />
//                             <span className="text-sm">{location.name}</span>
//                           </div>
//                         </button>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>

//             {/* Map Area */}
//             <div className="flex-1 relative">
//               <div 
//                 ref={mapRef}
//                 className="w-full h-full bg-gradient-to-br from-green-100 to-green-200 relative cursor-crosshair overflow-hidden"
//                 onClick={handleMapClick}
//               >
//                 {/* Mock Map Background */}
//                 <div className="absolute inset-0 opacity-30">
//                   <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-300 rounded-full opacity-50"></div>
//                   <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-brown-300 rounded-lg opacity-50"></div>
//                   <div className="absolute bottom-1/4 left-1/3 w-40 h-20 bg-gray-300 rounded-full opacity-50"></div>
//                 </div>

//                 {/* Grid Lines */}
//                 <svg className="absolute inset-0 w-full h-full pointer-events-none">
//                   <defs>
//                     <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
//                       <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e5e7eb" strokeWidth="1" opacity="0.3"/>
//                     </pattern>
//                   </defs>
//                   <rect width="100%" height="100%" fill="url(#grid)" />
//                 </svg>

//                 {/* Popular Locations Markers */}
//                 {popularLocations.map((location, index) => (
//                   <div
//                     key={index}
//                     className="absolute w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-125 transition-transform"
//                     style={{
//                       left: `${30 + index * 8}%`,
//                       top: `${20 + (index % 3) * 20}%`
//                     }}
//                     title={location.name}
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       setSelectedLocation({ lat: location.lat, lng: location.lng });
//                     }}
//                   />
//                 ))}

//                 {/* Selected Location Marker */}
//                 {selectedLocation && (
//                   <div className="absolute transform -translate-x-1/2 -translate-y-full">
//                     <div 
//                       className="relative"
//                       style={{
//                         left: '50%',
//                         top: '50%'
//                       }}
//                     >
//                       <div className="w-6 h-6 bg-red-500 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
//                       <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-black/75 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
//                         Selected Location
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 {/* User Location Marker */}
//                 {userLocation && (
//                   <div className="absolute w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-lg transform -translate-x-1/2 -translate-y-1/2 animate-pulse"
//                        style={{ left: '60%', top: '40%' }} />
//                 )}

//                 <div className="absolute top-4 left-4 bg-black/75 text-white px-3 py-2 rounded-lg text-sm">
//                   Click anywhere on the map to select location
//                 </div>
//               </div>

//               {/* Confirm Button */}
//               {selectedLocation && (
//                 <div className="absolute bottom-4 right-4">
//                   <Button onClick={confirmSelection} className="shadow-lg">
//                     Confirm Location
//                   </Button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-background">
//       {/* Header */}
//       <div className="bg-card border-b sticky top-0 z-40 shadow-sm">
//         <div className="container mx-auto px-4 h-16 flex items-center gap-4">
//           <Button variant="ghost" size="icon" onClick={() => window.history.back()}>
//             <ArrowLeft className="h-5 w-5" />
//           </Button>
//           <div className="flex items-center gap-3">
//             <div className="bg-primary/10 p-2 rounded-lg">
//               <Plane className="h-6 w-6 text-primary" />
//             </div>
//             <div>
//               <h1 className="text-xl font-semibold">Airport Services</h1>
//               <p className="text-sm text-muted-foreground">Book your airport transfer</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Form */}
//       <main className="container mx-auto px-4 py-8 max-w-2xl">
//         <div className="space-y-6">
//           {/* Date and Time */}
//           <div className="bg-card rounded-lg p-6 border shadow-sm">
//             <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
//               <Calendar className="h-5 w-5 text-primary" />
//               Booking Date & Time
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium mb-2">Date</label>
//                 <input
//                   type="date"
//                   value={formData.bookingDate}
//                   onChange={(e) => handleInputChange("bookingDate", e.target.value)}
//                   className="w-full p-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-2">Time</label>
//                 <input
//                   type="time"
//                   value={formData.bookingTime}
//                   onChange={(e) => handleInputChange("bookingTime", e.target.value)}
//                   className="w-full p-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
//                   required
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Location Details */}
//           <div className="bg-card rounded-lg p-6 border shadow-sm">
//             <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
//               <MapPin className="h-5 w-5 text-primary" />
//               Location Details
//             </h2>
//             <div className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium mb-2">From Location</label>
//                 <div className="flex gap-2">
//                   <input
//                     type="text"
//                     value={formData.fromLocation}
//                     onChange={(e) => handleInputChange("fromLocation", e.target.value)}
//                     placeholder="Enter pickup location"
//                     className="flex-1 p-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
//                     required
//                   />
//                   <Button
//                     type="button"
//                     variant="outline"
//                     onClick={() => setShowFromMap(true)}
//                     className="px-4 bg-primary/10 hover:bg-primary/20"
//                   >
//                     <Navigation className="h-4 w-4" />
//                   </Button>
//                 </div>
//                 {formData.fromCoordinates && (
//                   <p className="text-xs text-muted-foreground mt-1">
//                     Coordinates: {formData.fromCoordinates.lat.toFixed(4)}, {formData.fromCoordinates.lng.toFixed(4)}
//                   </p>
//                 )}
//               </div>

//               <div>
//                 <label className="block text-sm font-medium mb-2">To Location (Destination)</label>
//                 <div className="flex gap-2">
//                   <input
//                     type="text"
//                     value={formData.toLocation}
//                     onChange={(e) => handleInputChange("toLocation", e.target.value)}
//                     placeholder="Enter destination"
//                     className="flex-1 p-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
//                     required
//                   />
//                   <Button
//                     type="button"
//                     variant="outline"
//                     onClick={() => setShowToMap(true)}
//                     className="px-4 bg-primary/10 hover:bg-primary/20"
//                   >
//                     <Navigation className="h-4 w-4" />
//                   </Button>
//                 </div>
//                 {formData.toCoordinates && (
//                   <p className="text-xs text-muted-foreground mt-1">
//                     Coordinates: {formData.toCoordinates.lat.toFixed(4)}, {formData.toCoordinates.lng.toFixed(4)}
//                   </p>
//                 )}
//               </div>

//               {/* Via Locations */}
//               <div>
//                 <label className="block text-sm font-medium mb-2">Add Via (Optional)</label>
//                 <div className="flex gap-2 mb-2">
//                   <input
//                     type="text"
//                     value={newViaLocation}
//                     onChange={(e) => setNewViaLocation(e.target.value)}
//                     placeholder="Add a stop along the way"
//                     className="flex-1 p-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
//                     onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addViaLocation())}
//                   />
//                   <Button type="button" onClick={addViaLocation} size="icon">
//                     <Plus className="h-4 w-4" />
//                   </Button>
//                 </div>
//                 {formData.viaLocations.length > 0 && (
//                   <div className="space-y-2">
//                     {formData.viaLocations.map((location, index) => (
//                       <div key={index} className="flex items-center gap-2 p-2 bg-muted rounded-md">
//                         <MapPin className="h-4 w-4 text-muted-foreground" />
//                         <span className="flex-1 text-sm">{location}</span>
//                         <Button
//                           type="button"
//                           variant="ghost"
//                           size="icon"
//                           onClick={() => removeViaLocation(index)}
//                           className="h-6 w-6"
//                         >
//                           <X className="h-3 w-3" />
//                         </Button>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* Passenger Details */}
//           <div className="bg-card rounded-lg p-6 border shadow-sm">
//             <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
//               <User className="h-5 w-5 text-primary" />
//               Passenger Details
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium mb-2">Passenger Name</label>
//                 <input
//                   type="text"
//                   value={formData.passengerName}
//                   onChange={(e) => handleInputChange("passengerName", e.target.value)}
//                   placeholder="Full name"
//                   className="w-full p-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-2">Mobile Number</label>
//                 <input
//                   type="tel"
//                   value={formData.passengerMobile}
//                   onChange={(e) => handleInputChange("passengerMobile", e.target.value)}
//                   placeholder="+92 300 1234567"
//                   className="w-full p-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
//                   required
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Vehicle Type */}
//           <div className="bg-card rounded-lg p-6 border shadow-sm">
//             <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
//               <Car className="h-5 w-5 text-primary" />
//               Vehicle Type
//             </h2>
//             <select
//               value={formData.vehicleType}
//               onChange={(e) => handleInputChange("vehicleType", e.target.value)}
//               className="w-full p-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
//               required
//             >
//               <option value="">Select vehicle type</option>
//               {vehicleTypes.map((type) => (
//                 <option key={type.value} value={type.value}>
//                   {type.label}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Note for Driver */}
//           <div className="bg-card rounded-lg p-6 border shadow-sm">
//             <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
//               <MessageSquare className="h-5 w-5 text-primary" />
//               Note for Driver (Optional)
//             </h2>
//             <textarea
//               value={formData.noteForDriver}
//               onChange={(e) => handleInputChange("noteForDriver", e.target.value)}
//               placeholder="Any special instructions or requirements..."
//               rows={3}
//               className="w-full p-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
//             />
//           </div>

//           {/* Payment Method */}
//           <div className="bg-card rounded-lg p-6 border shadow-sm">
//             <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
//               <CreditCard className="h-5 w-5 text-primary" />
//               Payment Method
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//               {paymentMethods.map((method) => (
//                 <label
//                   key={method.value}
//                   className={`flex items-center p-4 border rounded-md cursor-pointer transition-colors ${
//                     formData.paymentMethod === method.value
//                       ? "border-primary bg-primary/5"
//                       : "border-border hover:bg-muted/50"
//                   }`}
//                 >
//                   <input
//                     type="radio"
//                     name="paymentMethod"
//                     value={method.value}
//                     checked={formData.paymentMethod === method.value}
//                     onChange={(e) => handleInputChange("paymentMethod", e.target.value)}
//                     className="mr-3"
//                     required
//                   />
//                   <span className="text-sm font-medium">{method.label}</span>
//                 </label>
//               ))}
//             </div>
//           </div>

//           {/* Submit Button */}
//           <div className="flex gap-4 pt-6">
//             <Button
//               type="button"
//               variant="outline"
//               onClick={() => window.history.back()}
//               className="flex-1"
//             >
//               Cancel
//             </Button>
//             <Button type="button" onClick={handleSubmit} className="flex-1">
//               Book Airport Service
//             </Button>
//           </div>
//         </div>
//       </main>

//       {/* Interactive Map Selectors */}
//       <InteractiveMapSelector
//         isVisible={showFromMap}
//         onClose={() => setShowFromMap(false)}
//         onSelect={(location, coordinates) => handleLocationSelect(location, coordinates, "from")}
//         title="Select Pickup Location"
//         type="from"
//       />
//       <InteractiveMapSelector
//         isVisible={showToMap}
//         onClose={() => setShowToMap(false)}
//         onSelect={(location, coordinates) => handleLocationSelect(location, coordinates, "to")}
//         title="Select Destination"
//         type="to"
//       />
//     </div>
//   );
// };

// export default AirportServicesForm;




















































"use client"

import { useState, useRef, useEffect } from "react"
import {
  MapPin,
  Calendar,
  User,
  Car,
  MessageSquare,
  CreditCard,
  ArrowLeft,
  Search,
  Crosshair,
  Star,
  Shield,
  Route,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import L from "leaflet"

const YangoStyleBooking = () => {
  const [formData, setFormData] = useState({
    bookingDate: "",
    bookingTime: "",
    fromLocation: "",
    toLocation: "",
    fromCoordinates: null,
    toCoordinates: null,
    viaLocations: [],
    passengerName: "",
    passengerMobile: "",
    vehicleType: "sedan",
    noteForDriver: "",
    paymentMethod: "cash",
  })

  const [currentStep, setCurrentStep] = useState(1)
  const [showLocationPicker, setShowLocationPicker] = useState(false)
  const [locationPickerType, setLocationPickerType] = useState("from")
  const [estimatedPrice, setEstimatedPrice] = useState("PKR 850-1,200")
  const [estimatedTime, setEstimatedTime] = useState("25 min")

  const vehicleTypes = [
    {
      value: "economy",
      label: "Economy",
      subtitle: "Budget-friendly rides",
      price: "PKR 8/km",
      icon: "🚗",
      time: "2-5 min",
    },
    {
      value: "comfort",
      label: "Comfort",
      subtitle: "More space & comfort",
      price: "PKR 12/km",
      icon: "🚙",
      time: "3-7 min",
    },
    {
      value: "premium",
      label: "Premium",
      subtitle: "Luxury vehicles",
      price: "PKR 18/km",
      icon: "🚘",
      time: "5-10 min",
    },
    {
      value: "xl",
      label: "XL",
      subtitle: "6+ passengers",
      price: "PKR 15/km",
      icon: "🚐",
      time: "4-8 min",
    },
  ]

  const paymentMethods = [
    { value: "cash", label: "Cash", icon: "💵" },
    { value: "card", label: "Card", icon: "💳" },
    { value: "wallet", label: "Yango Wallet", icon: "📱" },
  ]

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const openLocationPicker = (type) => {
    setLocationPickerType(type)
    setShowLocationPicker(true)
  }

  const handleLocationSelect = (location, coordinates) => {
    if (locationPickerType === "from") {
      handleInputChange("fromLocation", location)
      handleInputChange("fromCoordinates", coordinates)
    } else {
      handleInputChange("toLocation", location)
      handleInputChange("toCoordinates", coordinates)
    }
    setShowLocationPicker(false)
  }

  const LocationPicker = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [suggestions, setSuggestions] = useState([])

    const popularLocations = [
      { name: "Allama Iqbal International Airport", subtitle: "LHE • Lahore", lat: 31.5216, lng: 74.4036 },
      { name: "Islamabad International Airport", subtitle: "ISB • Islamabad", lat: 33.5661, lng: 73.0516 },
      { name: "Jinnah International Airport", subtitle: "KHI • Karachi", lat: 24.9056, lng: 67.1608 },
      { name: "Mall Road", subtitle: "Lahore", lat: 31.5804, lng: 74.3587 },
      { name: "Blue Area", subtitle: "Islamabad", lat: 33.7077, lng: 73.0563 },
      { name: "Gulberg", subtitle: "Lahore", lat: 31.5204, lng: 74.3587 },
      { name: "DHA Phase 5", subtitle: "Lahore", lat: 31.4697, lng: 74.4131 },
      { name: "F-6 Markaz", subtitle: "Islamabad", lat: 33.7215, lng: 73.0433 },
    ]

    const filteredLocations = searchQuery
      ? popularLocations.filter(
          (loc) =>
            loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            loc.subtitle.toLowerCase().includes(searchQuery.toLowerCase()),
        )
      : popularLocations

    if (!showLocationPicker) return null

    return (
      <div className="fixed inset-0 bg-white z-50 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b bg-white">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={() => setShowLocationPicker(false)} className="h-10 w-10">
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h2 className="text-lg font-semibold">
              {locationPickerType === "from" ? "Pickup location" : "Destination"}
            </h2>
          </div>
        </div>

        <div className="flex-1 flex">
          {/* Left Panel */}
          <div className="w-full md:w-2/5 flex flex-col bg-white">
            {/* Search */}
            <div className="p-4 border-b">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search places..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#f97015] focus:border-transparent text-base"
                  autoFocus
                />
              </div>
            </div>

            {/* Current Location */}
            <div className="p-4 border-b">
              <button
                className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-gray-50 transition-colors"
                onClick={() => {
                  // Simulate getting current location
                  handleLocationSelect("Current Location", { lat: 31.5497, lng: 74.3436 })
                }}
              >
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Crosshair className="h-5 w-5 text-blue-600" />
                </div>
                <div className="text-left">
                  <div className="font-medium">Current location</div>
                  <div className="text-sm text-gray-500">Use GPS to find your location</div>
                </div>
              </button>
            </div>

            {/* Locations List */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-500 mb-3">
                  {searchQuery ? "Search results" : "Popular places"}
                </h3>
                <div className="space-y-1">
                  {filteredLocations.map((location, index) => (
                    <button
                      key={index}
                      className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-gray-50 transition-colors text-left"
                      onClick={() => handleLocationSelect(location.name, { lat: location.lat, lng: location.lng })}
                    >
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-gray-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium truncate">{location.name}</div>
                        <div className="text-sm text-gray-500 truncate">{location.subtitle}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="hidden md:block flex-1 bg-gradient-to-br from-green-100 to-green-200 relative">
            {/* Mock Map */}
            <div className="absolute inset-0">
              {/* Grid Pattern */}
              <svg className="w-full h-full opacity-20">
                <defs>
                  <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                    <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#10b981" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>

              {/* Mock locations */}
              {filteredLocations.map((location, index) => (
                <div
                  key={index}
                  className="absolute w-3 h-3 bg-[#f97015] rounded-full border-2 border-white shadow-lg"
                  style={{
                    left: `${20 + (index % 4) * 15}%`,
                    top: `${15 + Math.floor(index / 4) * 20}%`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  const handleSubmit = () => {
    console.log("Booking Data:", formData)
    alert("Airport service booking submitted successfully!")
  }

  // Live Map Component
  const LiveMap = ({ fromLocation, toLocation, fromName, toName }) => {
    const mapRef = useRef(null)
    const leafletMapRef = useRef(null)
    const markersRef = useRef({ from: null, to: null })
    const routeRef = useRef(null)

    useEffect(() => {
      if (mapRef.current && !leafletMapRef.current) {
        L.map(mapRef.current, {
          center: [31.5497, 74.3436],
          zoom: 11,
          zoomControl: true,
          scrollWheelZoom: true,
          dragging: true,
        }).then((map) => {
          leafletMapRef.current = map

          // Add tile layer with custom style
          L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: "© OpenStreetMap contributors",
            maxZoom: 18,
          }).addTo(leafletMapRef.current)

          // Add popular airport locations
          const airports = [
            { name: "Allama Iqbal International Airport", lat: 31.5216, lng: 74.4036, color: "#3b82f6" },
            { name: "Islamabad International Airport", lat: 33.5661, lng: 73.0516, color: "#3b82f6" },
          ]

          airports.forEach((airport) => {
            if (leafletMapRef.current) {
              const airportIcon = L.divIcon({
                html: `<div style="background-color: ${airport.color}; width: 12px; height: 12px; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"></div>`,
                className: "custom-marker",
                iconSize: [12, 12],
                iconAnchor: [6, 6],
              })

              L.marker([airport.lat, airport.lng], { icon: airportIcon })
                .addTo(leafletMapRef.current)
                .bindPopup(`<b>${airport.name}</b>`)
            }
          })
        })
      }
    }, [])

    // Update markers when locations change
    useEffect(() => {
      if (leafletMapRef.current) {
        const bounds = []

        // Add from marker
        if (fromLocation) {
          const fromIcon = L.divIcon({
            html: '<div style="background-color: #10b981; width: 16px; height: 16px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3);"></div>',
            className: "custom-marker",
            iconSize: [16, 16],
            iconAnchor: [8, 8],
          })

          markersRef.current.from = L.marker([fromLocation.lat, fromLocation.lng], { icon: fromIcon })
            .addTo(leafletMapRef.current)
            .bindPopup(`<b>Pickup:</b><br>${fromName}`)

          bounds.push([fromLocation.lat, fromLocation.lng])
        }

        // Add to marker
        if (toLocation) {
          const toIcon = L.divIcon({
            html: '<div style="background-color: #ef4444; width: 16px; height: 16px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3);"></div>',
            className: "custom-marker",
            iconSize: [16, 16],
            iconAnchor: [8, 8],
          })

          markersRef.current.to = L.marker([toLocation.lat, toLocation.lng], { icon: toIcon })
            .addTo(leafletMapRef.current)
            .bindPopup(`<b>Destination:</b><br>${toName}`)

          bounds.push([toLocation.lat, toLocation.lng])
        }

        // Draw route line if both locations exist
        if (fromLocation && toLocation) {
          routeRef.current = L.polyline(
            [
              [fromLocation.lat, fromLocation.lng],
              [toLocation.lat, toLocation.lng],
            ],
            {
              color: "#f59e0b",
              weight: 4,
              opacity: 0.8,
              dashArray: "10, 5",
            },
          ).addTo(leafletMapRef.current)

          // Fit bounds to show both markers
          leafletMapRef.current.fitBounds(bounds, { padding: [50, 50] })
        } else if (bounds.length > 0) {
          // Center on single marker
          leafletMapRef.current.setView(bounds[0], 13)
        }
      }
    }, [fromLocation, toLocation, fromName, toName])

    return (
      <div className="relative h-full">
        <div ref={mapRef} className="w-full h-full" style={{ minHeight: "100vh" }} />

        {/* Floating Info Cards */}
        {fromLocation && toLocation && (
          <>
            <div className="absolute top-6 left-6 bg-white rounded-lg shadow-lg p-4 max-w-xs z-[1000]">
              <div className="flex items-center gap-3 mb-2">
                <Route className="h-5 w-5 text-[#f97015]" />
                <span className="font-medium">Route Overview</span>
              </div>
              <div className="text-sm text-gray-600">
                <div>Distance: ~{Math.round(calculateDistance(fromLocation, toLocation) * 100) / 100} km</div>
                <div>Duration: {estimatedTime}</div>
                <div>Price: {estimatedPrice}</div>
              </div>
            </div>

            <div className="absolute bottom-6 right-6 bg-white rounded-lg shadow-lg p-4 z-[1000]">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="font-medium">{fromName}</span>
              </div>
              <div className="w-px h-4 bg-gray-200 ml-1.5 my-1"></div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="font-medium">{toName}</span>
              </div>
            </div>
          </>
        )}

        {/* Welcome Message */}
        {!fromLocation && !toLocation && (
          <div className="absolute inset-0 flex items-center justify-center z-[1000]">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 text-center max-w-md shadow-xl">
              <div className="w-16 h-16 bg-[#f97015] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">Y</span>
              </div>
              <h2 className="text-2xl font-bold mb-2">Book Your Airport Transfer</h2>
              <p className="text-gray-600 mb-4">Safe, reliable, and comfortable rides to and from the airport</p>
              <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-[#f97015] text-[#f97015]" />
                  <span>4.9 rating</span>
                </div>
                <div>•</div>
                <div className="flex items-center gap-1">
                  <Shield className="h-4 w-4" />
                  <span>Verified drivers</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }

  // Helper function to calculate distance between two points
  const calculateDistance = (from, to) => {
    const R = 6371 // Earth's radius in km
    const dLat = ((to.lat - from.lat) * Math.PI) / 180
    const dLon = ((to.lng - from.lng) * Math.PI) / 180
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((from.lat * Math.PI) / 180) *
        Math.cos((to.lat * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    return R * c
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Layout */}
      <div className="flex h-screen">
        {/* Left Side - Form */}
        <div className="w-full md:w-2/5 bg-white flex flex-col">
          {/* Header */}
          <div className="p-4 border-b">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-[#f97015] rounded-lg flex items-center justify-center">
                <span className="font-bold text-white text-lg">Y</span>
              </div>
              <h1 className="text-xl font-bold">Airport Transfer</h1>
            </div>
          </div>

          {/* Form Content */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {/* Location Inputs */}
            <div className="space-y-3">
              <div className="relative">
                <div className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="flex-1">
                    {formData.fromLocation ? (
                      <div>
                        <div className="font-medium">{formData.fromLocation}</div>
                        <div className="text-sm text-gray-500">Pickup location</div>
                      </div>
                    ) : (
                      <button className="text-left text-gray-500 w-full" onClick={() => openLocationPicker("from")}>
                        Where from?
                      </button>
                    )}
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => openLocationPicker("from")}>
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-px h-6 bg-gray-200"></div>
              </div>

              <div className="relative">
                <div className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="flex-1">
                    {formData.toLocation ? (
                      <div>
                        <div className="font-medium">{formData.toLocation}</div>
                        <div className="text-sm text-gray-500">Destination</div>
                      </div>
                    ) : (
                      <button className="text-left text-gray-500 w-full" onClick={() => openLocationPicker("to")}>
                        Where to?
                      </button>
                    )}
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => openLocationPicker("to")}>
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Date and Time */}
            <div className="space-y-3">
              <h3 className="font-medium flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                When do you need it?
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Date</label>
                  <input
                    type="date"
                    value={formData.bookingDate}
                    onChange={(e) => handleInputChange("bookingDate", e.target.value)}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#f97015] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Time</label>
                  <input
                    type="time"
                    value={formData.bookingTime}
                    onChange={(e) => handleInputChange("bookingTime", e.target.value)}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#f97015] focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Vehicle Selection */}
            {formData.fromLocation && formData.toLocation && (
              <div className="space-y-3">
                <h3 className="font-medium flex items-center gap-2">
                  <Car className="h-4 w-4" />
                  Choose your ride
                </h3>
                <div className="space-y-2">
                  {vehicleTypes.map((vehicle) => (
                    <button
                      key={vehicle.value}
                      className={`w-full p-4 border rounded-lg text-left transition-all ${
                        formData.vehicleType === vehicle.value
                          ? "border-[#f97015] bg-orange-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => handleInputChange("vehicleType", vehicle.value)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{vehicle.icon}</span>
                          <div>
                            <div className="font-medium">{vehicle.label}</div>
                            <div className="text-sm text-gray-500">{vehicle.subtitle}</div>
                            <div className="text-xs text-gray-400">{vehicle.time}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">{vehicle.price}</div>
                          {formData.vehicleType === vehicle.value && (
                            <div className="text-sm text-green-600">Selected</div>
                          )}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Passenger Details */}
            <div className="space-y-3">
              <h3 className="font-medium flex items-center gap-2">
                <User className="h-4 w-4" />
                Passenger details
              </h3>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Full name"
                  value={formData.passengerName}
                  onChange={(e) => handleInputChange("passengerName", e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#f97015] focus:border-transparent"
                />
                <input
                  type="tel"
                  placeholder="+92 300 1234567"
                  value={formData.passengerMobile}
                  onChange={(e) => handleInputChange("passengerMobile", e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#f97015] focus:border-transparent"
                />
              </div>
            </div>

            {/* Payment Method */}
            <div className="space-y-3">
              <h3 className="font-medium flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                Payment
              </h3>
              <div className="space-y-2">
                {paymentMethods.map((method) => (
                  <button
                    key={method.value}
                    className={`w-full p-3 border rounded-lg text-left transition-colors ${
                      formData.paymentMethod === method.value
                        ? "border-[#f97015] bg-orange-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => handleInputChange("paymentMethod", method.value)}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{method.icon}</span>
                      <span className="font-medium">{method.label}</span>
                      {formData.paymentMethod === method.value && (
                        <div className="ml-auto w-2 h-2 bg-[#f97015] rounded-full"></div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Notes */}
            <div className="space-y-3">
              <h3 className="font-medium flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                Add note (optional)
              </h3>
              <textarea
                placeholder="Special instructions for driver..."
                value={formData.noteForDriver}
                onChange={(e) => handleInputChange("noteForDriver", e.target.value)}
                rows={3}
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#f97015] focus:border-transparent resize-none"
              />
            </div>
          </div>

          {/* Bottom Action */}
          <div className="p-4 border-t bg-white">
            {formData.fromLocation && formData.toLocation && formData.vehicleType && (
              <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-medium">{estimatedPrice}</div>
                    <div className="text-sm text-gray-500">Estimated • {estimatedTime}</div>
                  </div>
                  <div className="flex items-center gap-1 text-[#f97015]">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm font-medium">4.9</span>
                  </div>
                </div>
              </div>
            )}

            <Button
              onClick={handleSubmit}
              className="w-full bg-[#f97015] hover:bg-[#e8640f] text-white font-medium py-3 rounded-lg transition-colors"
              disabled={
                !formData.fromLocation || !formData.toLocation || !formData.passengerName || !formData.passengerMobile
              }
            >
              Book Airport Transfer
            </Button>

            <div className="mt-3 text-center">
              <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                <Shield className="h-3 w-3" />
                <span>Safe & secure rides</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Map */}
        <div className="hidden md:block flex-1 bg-gradient-to-br from-blue-100 via-green-100 to-yellow-100 relative overflow-hidden">
          {/* Mock Map Interface */}
          <div className="absolute inset-0">
            {/* Map Grid */}
            <svg className="w-full h-full opacity-10">
              <defs>
                <pattern id="mapGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#10b981" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#mapGrid)" />
            </svg>

            {/* Route Line */}
            {formData.fromLocation && formData.toLocation && (
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <line x1="30%" y1="70%" x2="70%" y2="30%" stroke="#f97015" strokeWidth="4" strokeDasharray="8,4" />
              </svg>
            )}

            {/* Location Markers */}
            {formData.fromLocation && (
              <div className="absolute" style={{ left: "30%", top: "70%" }}>
                <div className="w-6 h-6 bg-green-500 rounded-full border-3 border-white shadow-lg flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
            )}

            {formData.toLocation && (
              <div className="absolute" style={{ left: "70%", top: "30%" }}>
                <div className="w-6 h-6 bg-red-500 rounded-full border-3 border-white shadow-lg flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
            )}

            {/* Floating Info Cards */}
            {formData.fromLocation && formData.toLocation && (
              <>
                <div className="absolute top-6 left-6 bg-white rounded-lg shadow-lg p-4 max-w-xs">
                  <div className="flex items-center gap-3 mb-2">
                    <Route className="h-5 w-5 text-[#f97015]" />
                    <span className="font-medium">Route Overview</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    <div>Distance: ~15.2 km</div>
                    <div>Duration: {estimatedTime}</div>
                    <div>Price: {estimatedPrice}</div>
                  </div>
                </div>

                <div className="absolute bottom-6 right-6 bg-white rounded-lg shadow-lg p-4">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="font-medium">{formData.fromLocation}</span>
                  </div>
                  <div className="w-px h-4 bg-gray-200 ml-1.5 my-1"></div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="font-medium">{formData.toLocation}</span>
                  </div>
                </div>
              </>
            )}

            {/* Welcome Message */}
            {!formData.fromLocation && !formData.toLocation && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 text-center max-w-md">
                  <div className="w-16 h-16 bg-[#f97015] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">Y</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Book Your Airport Transfer</h2>
                  <p className="text-gray-600 mb-4">Safe, reliable, and comfortable rides to and from the airport</p>
                  <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-[#f97015] text-[#f97015]" />
                      <span>4.9 rating</span>
                    </div>
                    <div>•</div>
                    <div className="flex items-center gap-1">
                      <Shield className="h-4 w-4" />
                      <span>Verified drivers</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Location Picker Modal */}
      <LocationPicker />
    </div>
  )
}

export default YangoStyleBooking
