"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useNavigation } from "./navigation-context"
import { ArrowLeft, Star, MapPin, Phone, Mail, Calendar, Car, Clock, CheckCircle, Edit, Ban } from "lucide-react"
import { useMobile } from "../hooks/use-mobile"

export default function DriverDetailScreen() {
  const { goBack, screenData, navigateTo } = useNavigation()
  const isMobile = useMobile()

  // Mock driver data - in real app this would come from screenData
  const driver = {
    id: "DR001",
    name: "John Cooper",
    avatar: "/thoughtful-man.png",
    status: "Online",
    rating: 4.8,
    totalRides: 342,
    location: "Downtown",
    joinDate: "Jan 2023",
    earnings: "$12,450",
    phone: "+92 300 1234567",
    email: "john.cooper@email.com",
    cnic: "42101-1234567-8",
    licenseNumber: "DL-123456789",
    vehicleAssigned: "Toyota Camry 2022 (ABC-123)",
    completionRate: 98.5,
    averageResponseTime: "2.3 min",
    totalDistance: "15,420 km",
    monthlyEarnings: "$2,890",
    weeklyRides: 45,
    cancelledRides: 5,
    documents: [
      { name: "Driver License", status: "verified", uploadDate: "Jan 15, 2023" },
      { name: "CNIC", status: "verified", uploadDate: "Jan 15, 2023" },
      { name: "Medical Certificate", status: "verified", uploadDate: "Jan 15, 2023" },
      { name: "Vehicle Registration", status: "pending", uploadDate: "Jan 20, 2025" },
    ],
  }

  const recentRides = [
    {
      id: "#RT8249",
      customer: "Elisa Johnson",
      route: "Downtown → Airport",
      date: "Jan 20, 2025",
      time: "2:30 PM",
      amount: "$35.50",
      status: "Completed",
      rating: 5,
    },
    {
      id: "#RT8248",
      customer: "Michael Smith",
      route: "Mall → University",
      date: "Jan 20, 2025",
      time: "11:15 AM",
      amount: "$22.75",
      status: "Completed",
      rating: 4,
    },
    {
      id: "#RT8247",
      customer: "Sarah Wilson",
      route: "Airport → Downtown",
      date: "Jan 19, 2025",
      time: "6:45 PM",
      amount: "$28.90",
      status: "Completed",
      rating: 5,
    },
  ]

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
            <Avatar className="w-12 h-12">
              <AvatarImage src={driver.avatar || "/placeholder.svg"} className="rounded-full" />
              <AvatarFallback className="rounded-full">
                {driver.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-900">{driver.name}</h1>
              <div className="flex items-center gap-4 mt-1">
                <Badge
                  className={
                    driver.status === "Online"
                      ? "bg-green-100 text-green-800 rounded-none"
                      : "bg-gray-100 text-gray-800 rounded-none"
                  }
                >
                  {driver.status}
                </Badge>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm text-gray-600">{driver.rating} rating</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{driver.location}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-auto flex gap-2">
            <Button variant="outline" className="rounded-none bg-transparent">
              <Edit className="w-4 h-4 mr-2" />
              Edit
            </Button>
            <Button variant="outline" className="rounded-none bg-transparent text-red-600 border-red-200">
              <Ban className="w-4 h-4 mr-2" />
              Suspend
            </Button>
          </div>
        </div>
      </div>

      <div className="p-4 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Stats and Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Performance Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="rounded-none shadow-none">
                <CardContent className="p-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900">{driver.totalRides}</p>
                    <p className="text-sm text-gray-600">Total Rides</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="rounded-none shadow-none">
                <CardContent className="p-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900">{driver.completionRate}%</p>
                    <p className="text-sm text-gray-600">Completion Rate</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="rounded-none shadow-none">
                <CardContent className="p-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900">{driver.averageResponseTime}</p>
                    <p className="text-sm text-gray-600">Avg Response</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="rounded-none shadow-none">
                <CardContent className="p-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900">{driver.totalDistance}</p>
                    <p className="text-sm text-gray-600">Total Distance</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Rides */}
            <Card className="rounded-none shadow-none">
              <CardHeader>
                <CardTitle>Recent Rides</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentRides.map((ride) => (
                    <div
                      key={ride.id}
                      className="flex items-center justify-between p-4 border border-gray-200 hover:bg-gray-50 cursor-pointer"
                      onClick={() => navigateTo("ride-detail", ride)}
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <span className="font-medium text-gray-900">{ride.id}</span>
                          <Badge
                            className={
                              ride.status === "Completed"
                                ? "bg-green-100 text-green-800 rounded-none text-xs"
                                : "bg-orange-100 text-orange-800 rounded-none text-xs"
                            }
                          >
                            {ride.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-1">{ride.customer}</p>
                        <p className="text-sm text-gray-500">{ride.route}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-gray-900">{ride.amount}</p>
                        <p className="text-sm text-gray-500">{ride.date}</p>
                        <div className="flex items-center gap-1 mt-1">
                          <Star className="w-3 h-3 text-yellow-500 fill-current" />
                          <span className="text-xs text-gray-600">{ride.rating}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Documents */}
            <Card className="rounded-none shadow-none">
              <CardHeader>
                <CardTitle>Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {driver.documents.map((doc, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border border-gray-200">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            doc.status === "verified" ? "bg-green-100" : "bg-orange-100"
                          }`}
                        >
                          {doc.status === "verified" ? (
                            <CheckCircle className="w-4 h-4 text-green-600" />
                          ) : (
                            <Clock className="w-4 h-4 text-orange-600" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{doc.name}</p>
                          <p className="text-sm text-gray-500">Uploaded: {doc.uploadDate}</p>
                        </div>
                      </div>
                      <Badge
                        className={
                          doc.status === "verified"
                            ? "bg-green-100 text-green-800 rounded-none text-xs"
                            : "bg-orange-100 text-orange-800 rounded-none text-xs"
                        }
                      >
                        {doc.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Contact and Vehicle Info */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card className="rounded-none shadow-none">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-900">{driver.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-900">{driver.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-900">Joined {driver.joinDate}</span>
                </div>
              </CardContent>
            </Card>

            {/* Vehicle Information */}
            <Card className="rounded-none shadow-none">
              <CardHeader>
                <CardTitle>Vehicle Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Car className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-900">{driver.vehicleAssigned}</span>
                </div>
                <Button
                  variant="outline"
                  className="w-full rounded-none bg-transparent"
                  onClick={() => navigateTo("vehicle-detail", { id: "VH001" })}
                >
                  View Vehicle Details
                </Button>
              </CardContent>
            </Card>

            {/* Earnings */}
            <Card className="rounded-none shadow-none">
              <CardHeader>
                <CardTitle>Earnings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Total Earnings</span>
                  <span className="font-medium text-gray-900">{driver.earnings}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">This Month</span>
                  <span className="font-medium text-gray-900">{driver.monthlyEarnings}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">This Week</span>
                  <span className="font-medium text-gray-900">{driver.weeklyRides} rides</span>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="rounded-none shadow-none">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white rounded-none"
                  onClick={() => navigateTo("ride-allocation", { driverId: driver.id })}
                >
                  Assign Ride
                </Button>
                <Button variant="outline" className="w-full rounded-none bg-transparent">
                  Send Message
                </Button>
                <Button variant="outline" className="w-full rounded-none bg-transparent">
                  View All Rides
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
