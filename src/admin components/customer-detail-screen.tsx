"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useNavigation } from "./navigation-context"
import { ArrowLeft, Star, Phone, Mail, Calendar, MapPin, CreditCard, Gift, MessageSquare, Ban } from "lucide-react"
import { useMobile } from "../hooks/use-mobile"

export default function CustomerDetailScreen() {
  const { goBack, screenData, navigateTo } = useNavigation()
  const isMobile = useMobile()

  // Mock customer data
  const customer = {
    id: "CU001",
    name: "Elisa Johnson",
    avatar: "/diverse-woman-portrait.png",
    email: "elisa.j@email.com",
    phone: "+92 300 1111222",
    totalRides: 45,
    totalSpent: "$1,250.75",
    joinDate: "Dec 2023",
    rating: 4.9,
    status: "Active",
    averageRideValue: "$27.80",
    favoriteLocations: ["Downtown", "Airport", "Mall"],
    paymentMethod: "Credit Card (**** 1234)",
    lastRide: "Jan 20, 2025",
    membershipTier: "Gold",
    loyaltyPoints: 1250,
    completedRides: 43,
    cancelledRides: 2,
    averageRating: 4.9,
  }

  const recentRides = [
    {
      id: "#RT8249",
      driver: "John Cooper",
      route: "Downtown → Airport",
      date: "Jan 20, 2025",
      time: "2:30 PM",
      amount: "$35.50",
      status: "Completed",
      rating: 5,
    },
    {
      id: "#RT8248",
      driver: "Sarah Chen",
      route: "Mall → University",
      date: "Jan 19, 2025",
      time: "11:15 AM",
      amount: "$22.75",
      status: "Completed",
      rating: 4,
    },
    {
      id: "#RT8247",
      driver: "Michael Ross",
      route: "Airport → Downtown",
      date: "Jan 18, 2025",
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
              <AvatarImage src={customer.avatar || "/placeholder.svg"} className="rounded-full" />
              <AvatarFallback className="rounded-full">
                {customer.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-900">{customer.name}</h1>
              <div className="flex items-center gap-4 mt-1">
                <Badge
                  className={
                    customer.status === "Active"
                      ? "bg-green-100 text-green-800 rounded-none"
                      : "bg-gray-100 text-gray-800 rounded-none"
                  }
                >
                  {customer.status}
                </Badge>
                <Badge className="bg-yellow-100 text-yellow-800 rounded-none">{customer.membershipTier}</Badge>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm text-gray-600">{customer.rating} rating</span>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-auto flex gap-2">
            <Button variant="outline" className="rounded-none bg-transparent">
              <MessageSquare className="w-4 h-4 mr-2" />
              Message
            </Button>
            <Button variant="outline" className="rounded-none bg-transparent text-red-600 border-red-200">
              <Ban className="w-4 h-4 mr-2" />
              Block
            </Button>
          </div>
        </div>
      </div>

      <div className="p-4 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Stats and Rides */}
          <div className="lg:col-span-2 space-y-6">
            {/* Customer Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="rounded-none shadow-none">
                <CardContent className="p-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900">{customer.totalRides}</p>
                    <p className="text-sm text-gray-600">Total Rides</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="rounded-none shadow-none">
                <CardContent className="p-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900">{customer.totalSpent}</p>
                    <p className="text-sm text-gray-600">Total Spent</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="rounded-none shadow-none">
                <CardContent className="p-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900">{customer.averageRideValue}</p>
                    <p className="text-sm text-gray-600">Avg Ride Value</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="rounded-none shadow-none">
                <CardContent className="p-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900">{customer.loyaltyPoints}</p>
                    <p className="text-sm text-gray-600">Loyalty Points</p>
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
                        <p className="text-sm text-gray-600 mb-1">Driver: {ride.driver}</p>
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

            {/* Favorite Locations */}
            <Card className="rounded-none shadow-none">
              <CardHeader>
                <CardTitle>Favorite Locations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {customer.favoriteLocations.map((location, index) => (
                    <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-800 rounded-none">
                      <MapPin className="w-3 h-3 mr-1" />
                      {location}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Contact and Account Info */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card className="rounded-none shadow-none">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-900">{customer.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-900">{customer.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-900">Joined {customer.joinDate}</span>
                </div>
              </CardContent>
            </Card>

            {/* Account Details */}
            <Card className="rounded-none shadow-none">
              <CardHeader>
                <CardTitle>Account Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Membership</span>
                  <Badge className="bg-yellow-100 text-yellow-800 rounded-none">{customer.membershipTier}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Loyalty Points</span>
                  <span className="font-medium text-gray-900">{customer.loyaltyPoints}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Last Ride</span>
                  <span className="font-medium text-gray-900">{customer.lastRide}</span>
                </div>
              </CardContent>
            </Card>

            {/* Payment Information */}
            <Card className="rounded-none shadow-none">
              <CardHeader>
                <CardTitle>Payment Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <CreditCard className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-900">{customer.paymentMethod}</span>
                </div>
              </CardContent>
            </Card>

            {/* Ride Statistics */}
            <Card className="rounded-none shadow-none">
              <CardHeader>
                <CardTitle>Ride Statistics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Completed Rides</span>
                  <span className="font-medium text-gray-900">{customer.completedRides}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Cancelled Rides</span>
                  <span className="font-medium text-gray-900">{customer.cancelledRides}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Average Rating</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="font-medium text-gray-900">{customer.averageRating}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="rounded-none shadow-none">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white rounded-none">
                  <Gift className="w-4 h-4 mr-2" />
                  Send Promo Code
                </Button>
                <Button variant="outline" className="w-full rounded-none bg-transparent">
                  <MessageSquare className="w-4 h-4 mr-2" />
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
