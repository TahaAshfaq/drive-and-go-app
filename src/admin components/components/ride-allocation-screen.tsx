"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { useNavigation } from "./navigation-context"
import { ArrowLeft, MapPin, Clock, DollarSign, Car, Star, CheckCircle, Route } from "lucide-react"
import { useState } from "react"
import { useMobile } from "../hooks/use-mobile"

export default function RideAllocationScreen() {
  const { goBack, screenData } = useNavigation()
  const isMobile = useMobile()
  const [selectedDriver, setSelectedDriver] = useState("")
  const [rideDetails, setRideDetails] = useState({
    customerId: "",
    customerName: "",
    customerPhone: "",
    pickupAddress: "",
    dropoffAddress: "",
    scheduledTime: "",
    estimatedDuration: "",
    estimatedFare: "",
    rideType: "standard",
    priority: "normal",
    specialInstructions: "",
    paymentMethod: "cash",
  })

  // Mock data for available drivers
  const availableDrivers = [
    {
      id: "DR001",
      name: "John Cooper",
      avatar: "/thoughtful-man.png",
      status: "Online",
      rating: 4.8,
      location: "Downtown",
      distance: "0.5 km",
      vehicle: "Toyota Camry 2022",
      licensePlate: "ABC-123",
      completedRides: 342,
      responseTime: "2.3 min",
    },
    {
      id: "DR002",
      name: "Sarah Chen",
      avatar: "/asian-woman.jpg",
      status: "Online",
      rating: 4.9,
      location: "Westpark",
      distance: "1.2 km",
      vehicle: "Honda Accord 2023",
      licensePlate: "XYZ-789",
      completedRides: 298,
      responseTime: "1.8 min",
    },
    {
      id: "DR004",
      name: "Emma Wilson",
      avatar: "/diverse-woman-portrait.png",
      status: "Online",
      rating: 4.9,
      location: "Airport",
      distance: "2.1 km",
      vehicle: "Hyundai Elantra 2023",
      licensePlate: "GHI-012",
      completedRides: 423,
      responseTime: "3.1 min",
    },
  ]

  // Mock recent customers for quick selection
  const recentCustomers = [
    {
      id: "CU001",
      name: "Elisa Johnson",
      phone: "+92 300 1111222",
      avatar: "/diverse-woman-portrait.png",
      lastRide: "Jan 20, 2025",
    },
    {
      id: "CU002",
      name: "Namya Patel",
      phone: "+92 301 3333444",
      avatar: "/indian-woman.jpg",
      lastRide: "Jan 19, 2025",
    },
    {
      id: "CU003",
      name: "Jhon Smith",
      phone: "+92 302 5555666",
      avatar: "/young-man.jpg",
      lastRide: "Jan 18, 2025",
    },
  ]

  const handleInputChange = (field: string, value: string) => {
    setRideDetails((prev) => ({ ...prev, [field]: value }))
  }

  const handleCustomerSelect = (customer: any) => {
    setRideDetails((prev) => ({
      ...prev,
      customerId: customer.id,
      customerName: customer.name,
      customerPhone: customer.phone,
    }))
  }

  const calculateEstimatedFare = () => {
    // Mock fare calculation
    const baseFare = 15
    const distanceFare = Math.random() * 20 + 10
    const timeFare = Math.random() * 8 + 3
    const total = baseFare + distanceFare + timeFare
    setRideDetails((prev) => ({ ...prev, estimatedFare: `$${total.toFixed(2)}` }))
  }

  const handleAllocateRide = () => {
    if (!selectedDriver || !rideDetails.pickupAddress || !rideDetails.dropoffAddress) {
      alert("Please fill in all required fields")
      return
    }

    // Handle ride allocation
    console.log("Allocating ride:", {
      driver: selectedDriver,
      rideDetails,
    })

    // Show success message and go back
    alert("Ride allocated successfully!")
    goBack()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 md:px-8 py-4">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={goBack} className="rounded-none">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Route className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-900">Allocate Ride</h1>
              <p className="text-sm text-gray-600">Assign a new ride to an available driver</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Left Column - Ride Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Customer Information */}
            <Card className="rounded-none shadow-none">
              <CardHeader>
                <CardTitle>Customer Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Quick Customer Selection */}
                <div>
                  <Label className="text-sm font-medium text-gray-700 mb-3 block">Recent Customers</Label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {recentCustomers.map((customer) => (
                      <div
                        key={customer.id}
                        className={`p-3 border rounded cursor-pointer transition-colors ${
                          rideDetails.customerId === customer.id
                            ? "border-green-500 bg-green-50"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                        onClick={() => handleCustomerSelect(customer)}
                      >
                        <div className="flex items-center gap-2">
                          <Avatar className="w-8 h-8 flex-shrink-0">
                            <AvatarImage src={customer.avatar || "/placeholder.svg"} className="rounded-full" />
                            <AvatarFallback className="rounded-full text-xs">
                              {customer.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="min-w-0 flex-1">
                            <p className="font-medium text-gray-900 text-sm truncate">{customer.name}</p>
                            <p className="text-xs text-gray-500 truncate">{customer.phone}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Manual Customer Entry */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="customerName">Customer Name *</Label>
                    <Input
                      id="customerName"
                      value={rideDetails.customerName}
                      onChange={(e) => handleInputChange("customerName", e.target.value)}
                      placeholder="Enter customer name"
                      className="rounded-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="customerPhone">Phone Number *</Label>
                    <Input
                      id="customerPhone"
                      value={rideDetails.customerPhone}
                      onChange={(e) => handleInputChange("customerPhone", e.target.value)}
                      placeholder="Enter phone number"
                      className="rounded-none"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Ride Details */}
            <Card className="rounded-none shadow-none">
              <CardHeader>
                <CardTitle>Ride Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="pickupAddress">Pickup Address *</Label>
                    <Input
                      id="pickupAddress"
                      value={rideDetails.pickupAddress}
                      onChange={(e) => handleInputChange("pickupAddress", e.target.value)}
                      placeholder="Enter pickup location"
                      className="rounded-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dropoffAddress">Dropoff Address *</Label>
                    <Input
                      id="dropoffAddress"
                      value={rideDetails.dropoffAddress}
                      onChange={(e) => handleInputChange("dropoffAddress", e.target.value)}
                      placeholder="Enter destination"
                      className="rounded-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="scheduledTime">Scheduled Time</Label>
                    <Input
                      id="scheduledTime"
                      type="datetime-local"
                      value={rideDetails.scheduledTime}
                      onChange={(e) => handleInputChange("scheduledTime", e.target.value)}
                      className="rounded-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="rideType">Ride Type</Label>
                    <Select
                      value={rideDetails.rideType}
                      onValueChange={(value) => handleInputChange("rideType", value)}
                    >
                      <SelectTrigger className="rounded-none">
                        <SelectValue placeholder="Select ride type" />
                      </SelectTrigger>
                      <SelectContent className="rounded-none">
                        <SelectItem value="standard">Standard</SelectItem>
                        <SelectItem value="premium">Premium</SelectItem>
                        <SelectItem value="economy">Economy</SelectItem>
                        <SelectItem value="xl">XL (Large Vehicle)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="priority">Priority</Label>
                    <Select
                      value={rideDetails.priority}
                      onValueChange={(value) => handleInputChange("priority", value)}
                    >
                      <SelectTrigger className="rounded-none">
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                      <SelectContent className="rounded-none">
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="normal">Normal</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="urgent">Urgent</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="paymentMethod">Payment Method</Label>
                    <Select
                      value={rideDetails.paymentMethod}
                      onValueChange={(value) => handleInputChange("paymentMethod", value)}
                    >
                      <SelectTrigger className="rounded-none">
                        <SelectValue placeholder="Select payment method" />
                      </SelectTrigger>
                      <SelectContent className="rounded-none">
                        <SelectItem value="cash">Cash</SelectItem>
                        <SelectItem value="card">Credit Card</SelectItem>
                        <SelectItem value="wallet">Digital Wallet</SelectItem>
                        <SelectItem value="corporate">Corporate Account</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="specialInstructions">Special Instructions</Label>
                  <Textarea
                    id="specialInstructions"
                    value={rideDetails.specialInstructions}
                    onChange={(e) => handleInputChange("specialInstructions", e.target.value)}
                    placeholder="Any special instructions for the driver..."
                    className="rounded-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <Button variant="outline" onClick={calculateEstimatedFare} className="rounded-none bg-transparent">
                    Calculate Fare
                  </Button>
                  {rideDetails.estimatedFare && (
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-green-600" />
                      <span className="font-medium text-green-600 text-sm md:text-base">
                        Estimated Fare: {rideDetails.estimatedFare}
                      </span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Driver Selection */}
          <div className="space-y-6">
            <Card className="rounded-none shadow-none">
              <CardHeader>
                <CardTitle>Available Drivers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {availableDrivers.map((driver) => (
                    <div
                      key={driver.id}
                      className={`p-3 md:p-4 border rounded cursor-pointer transition-colors ${
                        selectedDriver === driver.id
                          ? "border-green-500 bg-green-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => setSelectedDriver(driver.id)}
                    >
                      <div className="flex items-start gap-3">
                        <Avatar className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
                          <AvatarImage src={driver.avatar || "/placeholder.svg"} className="rounded-full" />
                          <AvatarFallback className="rounded-full">
                            {driver.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-medium text-gray-900 truncate text-sm md:text-base">{driver.name}</h4>
                            <Badge
                              className={
                                driver.status === "Online"
                                  ? "bg-green-100 text-green-800 rounded-none text-xs"
                                  : "bg-gray-100 text-gray-800 rounded-none text-xs"
                              }
                            >
                              {driver.status}
                            </Badge>
                          </div>

                          <div className="space-y-1">
                            <div className="flex items-center gap-1">
                              <Star className="w-3 h-3 text-yellow-500 fill-current flex-shrink-0" />
                              <span className="text-xs text-gray-600">{driver.rating}</span>
                              <span className="text-xs text-gray-400">•</span>
                              <span className="text-xs text-gray-600 truncate">{driver.completedRides} rides</span>
                            </div>

                            <div className="flex items-center gap-1">
                              <MapPin className="w-3 h-3 text-gray-400 flex-shrink-0" />
                              <span className="text-xs text-gray-600 truncate">{driver.location}</span>
                              <span className="text-xs text-gray-400">•</span>
                              <span className="text-xs text-gray-600">{driver.distance} away</span>
                            </div>

                            <div className="flex items-center gap-1">
                              <Car className="w-3 h-3 text-gray-400 flex-shrink-0" />
                              <span className="text-xs text-gray-600 truncate">{driver.vehicle}</span>
                            </div>

                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3 text-gray-400 flex-shrink-0" />
                              <span className="text-xs text-gray-600">Avg response: {driver.responseTime}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Selected Driver Summary */}
            {selectedDriver && (
              <Card className="rounded-none shadow-none">
                <CardHeader>
                  <CardTitle>Selected Driver</CardTitle>
                </CardHeader>
                <CardContent>
                  {(() => {
                    const driver = availableDrivers.find((d) => d.id === selectedDriver)
                    return driver ? (
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Avatar className="w-10 h-10">
                            <AvatarImage src={driver.avatar || "/placeholder.svg"} className="rounded-full" />
                            <AvatarFallback className="rounded-full">
                              {driver.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium text-gray-900">{driver.name}</p>
                            <p className="text-sm text-gray-600">{driver.vehicle}</p>
                          </div>
                        </div>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">Rating:</span>
                            <div className="flex items-center gap-1">
                              <Star className="w-3 h-3 text-yellow-500 fill-current" />
                              <span className="text-gray-900">{driver.rating}</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">Distance:</span>
                            <span className="text-gray-900">{driver.distance}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">Response Time:</span>
                            <span className="text-gray-900">{driver.responseTime}</span>
                          </div>
                        </div>
                      </div>
                    ) : null
                  })()}
                </CardContent>
              </Card>
            )}

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button
                onClick={handleAllocateRide}
                disabled={!selectedDriver || !rideDetails.pickupAddress || !rideDetails.dropoffAddress}
                className="w-full bg-green-600 hover:bg-green-700 text-white rounded-none"
              >
                <CheckCircle className="w-4 h-4 mr-2" />
                Allocate Ride
              </Button>
              <Button variant="outline" onClick={goBack} className="w-full rounded-none bg-transparent">
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
