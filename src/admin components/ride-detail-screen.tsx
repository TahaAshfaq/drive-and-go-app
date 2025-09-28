"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useNavigation } from "./navigation-context"
import { ArrowLeft, Star, Phone, DollarSign, Car, Route, CheckCircle, MessageSquare, RefreshCw } from "lucide-react"
import { useMobile } from "../hooks/use-mobile"

export default function RideDetailScreen() {
  const { goBack, screenData, navigateTo } = useNavigation()
  const isMobile = useMobile()

  // Mock ride data
  const ride = {
    id: "#RT8249",
    status: "Completed",
    driver: {
      id: "DR001",
      name: "John Cooper",
      avatar: "/thoughtful-man.png",
      rating: 4.8,
      phone: "+92 300 1234567",
    },
    customer: {
      id: "CU001",
      name: "Elisa Johnson",
      avatar: "/diverse-woman-portrait.png",
      rating: 4.9,
      phone: "+92 300 1111222",
    },
    vehicle: {
      id: "VH001",
      model: "Toyota Camry 2022",
      licensePlate: "ABC-123",
    },
    pickup: {
      address: "123 Downtown Plaza, Main Street",
      time: "2:30 PM",
      coordinates: "24.8607° N, 67.0011° E",
    },
    dropoff: {
      address: "Karachi International Airport, Terminal 1",
      time: "3:15 PM",
      coordinates: "24.9056° N, 67.1608° E",
    },
    date: "Jan 20, 2025",
    duration: "45 minutes",
    distance: "28.5 km",
    fare: {
      baseFare: "$15.00",
      distanceFare: "$14.25",
      timeFare: "$4.25",
      serviceFee: "$2.00",
      total: "$35.50",
    },
    paymentMethod: "Credit Card (**** 1234)",
    rideRating: 5,
    driverRating: 5,
    customerRating: 5,
    notes: "Customer requested AC to be on high. Smooth ride with no issues.",
    timeline: [
      { time: "2:25 PM", event: "Ride requested", status: "completed" },
      { time: "2:27 PM", event: "Driver assigned", status: "completed" },
      { time: "2:30 PM", event: "Driver arrived at pickup", status: "completed" },
      { time: "2:32 PM", event: "Ride started", status: "completed" },
      { time: "3:15 PM", event: "Ride completed", status: "completed" },
    ],
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
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-gray-900">Ride {ride.id}</h1>
            <div className="flex items-center gap-4 mt-1">
              <Badge
                className={
                  ride.status === "Completed"
                    ? "bg-green-100 text-green-800 rounded-none"
                    : ride.status === "In Progress"
                      ? "bg-blue-100 text-blue-800 rounded-none"
                      : "bg-orange-100 text-orange-800 rounded-none"
                }
              >
                {ride.status}
              </Badge>
              <span className="text-sm text-gray-600">
                {ride.date} • {ride.duration}
              </span>
            </div>
          </div>
          <div className="ml-auto flex gap-2">
            <Button variant="outline" className="rounded-none bg-transparent">
              <MessageSquare className="w-4 h-4 mr-2" />
              Contact Support
            </Button>
            <Button variant="outline" className="rounded-none bg-transparent">
              <RefreshCw className="w-4 h-4 mr-2" />
              Refund
            </Button>
          </div>
        </div>
      </div>

      <div className="p-4 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Main Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Route Information */}
            <Card className="rounded-none shadow-none">
              <CardHeader>
                <CardTitle>Route Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Pickup */}
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">Pickup Location</p>
                      <p className="text-gray-600 mt-1">{ride.pickup.address}</p>
                      <p className="text-sm text-gray-500 mt-1">
                        {ride.date} at {ride.pickup.time}
                      </p>
                    </div>
                  </div>

                  {/* Route Line */}
                  <div className="flex items-center gap-4 ml-1">
                    <div className="w-1 h-8 bg-gray-300"></div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Route className="w-4 h-4" />
                      <span>
                        {ride.distance} • {ride.duration}
                      </span>
                    </div>
                  </div>

                  {/* Dropoff */}
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">Dropoff Location</p>
                      <p className="text-gray-600 mt-1">{ride.dropoff.address}</p>
                      <p className="text-sm text-gray-500 mt-1">
                        {ride.date} at {ride.dropoff.time}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Participants */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Driver */}
              <Card className="rounded-none shadow-none">
                <CardHeader>
                  <CardTitle>Driver</CardTitle>
                </CardHeader>
                <CardContent>
                  <div
                    className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 -m-2 rounded"
                    onClick={() => navigateTo("driver-detail", ride.driver)}
                  >
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={ride.driver.avatar || "/placeholder.svg"} className="rounded-full" />
                      <AvatarFallback className="rounded-full">
                        {ride.driver.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{ride.driver.name}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm text-gray-600">{ride.driver.rating}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{ride.driver.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Car className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">
                        {ride.vehicle.model} ({ride.vehicle.licensePlate})
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Customer */}
              <Card className="rounded-none shadow-none">
                <CardHeader>
                  <CardTitle>Customer</CardTitle>
                </CardHeader>
                <CardContent>
                  <div
                    className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 -m-2 rounded"
                    onClick={() => navigateTo("customer-detail", ride.customer)}
                  >
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={ride.customer.avatar || "/placeholder.svg"} className="rounded-full" />
                      <AvatarFallback className="rounded-full">
                        {ride.customer.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{ride.customer.name}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm text-gray-600">{ride.customer.rating}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{ride.customer.phone}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Timeline */}
            <Card className="rounded-none shadow-none">
              <CardHeader>
                <CardTitle>Ride Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {ride.timeline.map((event, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{event.event}</p>
                        <p className="text-sm text-gray-500">{event.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Notes */}
            {ride.notes && (
              <Card className="rounded-none shadow-none">
                <CardHeader>
                  <CardTitle>Ride Notes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{ride.notes}</p>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Right Column - Fare and Ratings */}
          <div className="space-y-6">
            {/* Fare Breakdown */}
            <Card className="rounded-none shadow-none">
              <CardHeader>
                <CardTitle>Fare Breakdown</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Base Fare</span>
                  <span className="text-gray-900">{ride.fare.baseFare}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Distance ({ride.distance})</span>
                  <span className="text-gray-900">{ride.fare.distanceFare}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Time ({ride.duration})</span>
                  <span className="text-gray-900">{ride.fare.timeFare}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Service Fee</span>
                  <span className="text-gray-900">{ride.fare.serviceFee}</span>
                </div>
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-900">Total</span>
                    <span className="font-bold text-gray-900 text-lg">{ride.fare.total}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Information */}
            <Card className="rounded-none shadow-none">
              <CardHeader>
                <CardTitle>Payment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <DollarSign className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-900">{ride.paymentMethod}</span>
                </div>
              </CardContent>
            </Card>

            {/* Ratings */}
            <Card className="rounded-none shadow-none">
              <CardHeader>
                <CardTitle>Ratings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Overall Ride</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="font-medium text-gray-900">{ride.rideRating}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Driver Rating</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="font-medium text-gray-900">{ride.driverRating}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Customer Rating</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="font-medium text-gray-900">{ride.customerRating}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="rounded-none shadow-none">
              <CardHeader>
                <CardTitle>Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white rounded-none">
                  Generate Invoice
                </Button>
                <Button variant="outline" className="w-full rounded-none bg-transparent">
                  Contact Driver
                </Button>
                <Button variant="outline" className="w-full rounded-none bg-transparent">
                  Contact Customer
                </Button>
                <Button variant="outline" className="w-full rounded-none bg-transparent text-red-600 border-red-200">
                  Report Issue
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
