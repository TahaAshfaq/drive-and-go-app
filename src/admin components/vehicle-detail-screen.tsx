"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useNavigation } from "./navigation-context"
import {
  ArrowLeft,
  Car,
  Fuel,
  MapPin,
  User,
  Wrench,
  AlertTriangle,
  CheckCircle,
  Clock,
  Route,
  Edit,
  Settings,
} from "lucide-react"
import { useMobile } from "../hooks/use-mobile"

export default function VehicleDetailScreen() {
  const { goBack, screenData, navigateTo } = useNavigation()
  const isMobile = useMobile()

  // Mock vehicle data
  const vehicle = {
    id: "VH001",
    model: "Toyota Camry 2022",
    licensePlate: "ABC-123",
    driver: {
      id: "DR001",
      name: "John Cooper",
      avatar: "/thoughtful-man.png",
    },
    status: "Active",
    mileage: "45,230 km",
    fuelLevel: "85%",
    lastService: "Dec 15, 2024",
    nextService: "Mar 15, 2025",
    location: "Downtown",
    color: "Silver",
    year: "2022",
    vin: "1HGBH41JXMN109186",
    registrationExpiry: "Dec 2025",
    insuranceExpiry: "Aug 2025",
    totalRides: 1247,
    totalDistance: "45,230 km",
    totalEarnings: "$18,450",
    averageRating: 4.8,
    fuelEfficiency: "12.5 km/l",
    maintenanceCost: "$2,340",
    lastInspection: "Nov 20, 2024",
    documents: [
      { name: "Registration Certificate", status: "verified", expiry: "Dec 2025" },
      { name: "Insurance Policy", status: "verified", expiry: "Aug 2025" },
      { name: "Fitness Certificate", status: "verified", expiry: "Jun 2025" },
      { name: "Route Permit", status: "pending", expiry: "Apr 2025" },
    ],
    maintenanceHistory: [
      {
        date: "Dec 15, 2024",
        type: "Regular Service",
        description: "Oil change, filter replacement, general inspection",
        cost: "$120",
        status: "Completed",
      },
      {
        date: "Oct 10, 2024",
        type: "Brake Service",
        description: "Brake pad replacement and brake fluid change",
        cost: "$280",
        status: "Completed",
      },
      {
        date: "Aug 5, 2024",
        type: "Tire Replacement",
        description: "All four tires replaced with new ones",
        cost: "$450",
        status: "Completed",
      },
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
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
              <Car className="w-6 h-6 text-gray-600" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-900">{vehicle.model}</h1>
              <div className="flex items-center gap-4 mt-1">
                <span className="text-gray-600">{vehicle.licensePlate}</span>
                <Badge
                  className={
                    vehicle.status === "Active"
                      ? "bg-green-100 text-green-800 rounded-none"
                      : vehicle.status === "In Transit"
                        ? "bg-blue-100 text-blue-800 rounded-none"
                        : "bg-orange-100 text-orange-800 rounded-none"
                  }
                >
                  {vehicle.status}
                </Badge>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{vehicle.location}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-auto flex gap-2">
            <Button variant="outline" className="rounded-none bg-transparent">
              <Edit className="w-4 h-4 mr-2" />
              Edit
            </Button>
            <Button variant="outline" className="rounded-none bg-transparent">
              <Settings className="w-4 h-4 mr-2" />
              Manage
            </Button>
          </div>
        </div>
      </div>

      <div className="p-4 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Vehicle Stats and History */}
          <div className="lg:col-span-2 space-y-6">
            {/* Vehicle Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="rounded-none shadow-none">
                <CardContent className="p-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900">{vehicle.totalRides}</p>
                    <p className="text-sm text-gray-600">Total Rides</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="rounded-none shadow-none">
                <CardContent className="p-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900">{vehicle.totalDistance}</p>
                    <p className="text-sm text-gray-600">Total Distance</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="rounded-none shadow-none">
                <CardContent className="p-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900">{vehicle.totalEarnings}</p>
                    <p className="text-sm text-gray-600">Total Earnings</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="rounded-none shadow-none">
                <CardContent className="p-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900">{vehicle.fuelEfficiency}</p>
                    <p className="text-sm text-gray-600">Fuel Efficiency</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Current Status */}
            <Card className="rounded-none shadow-none">
              <CardHeader>
                <CardTitle>Current Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Fuel className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{vehicle.fuelLevel}</p>
                      <p className="text-sm text-gray-600">Fuel Level</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <Route className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{vehicle.mileage}</p>
                      <p className="text-sm text-gray-600">Mileage</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{vehicle.location}</p>
                      <p className="text-sm text-gray-600">Current Location</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Maintenance History */}
            <Card className="rounded-none shadow-none">
              <CardHeader>
                <CardTitle>Maintenance History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {vehicle.maintenanceHistory.map((maintenance, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 border border-gray-200">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-gray-900">{maintenance.type}</h4>
                          <span className="font-medium text-gray-900">{maintenance.cost}</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{maintenance.description}</p>
                        <p className="text-sm text-gray-500">{maintenance.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Documents */}
            <Card className="rounded-none shadow-none">
              <CardHeader>
                <CardTitle>Vehicle Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {vehicle.documents.map((doc, index) => (
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
                          <p className="text-sm text-gray-500">Expires: {doc.expiry}</p>
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

          {/* Right Column - Vehicle Info and Driver */}
          <div className="space-y-6">
            {/* Vehicle Information */}
            <Card className="rounded-none shadow-none">
              <CardHeader>
                <CardTitle>Vehicle Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Model</span>
                  <span className="font-medium text-gray-900">{vehicle.model}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Year</span>
                  <span className="font-medium text-gray-900">{vehicle.year}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Color</span>
                  <span className="font-medium text-gray-900">{vehicle.color}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">License Plate</span>
                  <span className="font-medium text-gray-900">{vehicle.licensePlate}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">VIN</span>
                  <span className="font-medium text-gray-900 text-sm">{vehicle.vin}</span>
                </div>
              </CardContent>
            </Card>

            {/* Assigned Driver */}
            <Card className="rounded-none shadow-none">
              <CardHeader>
                <CardTitle>Assigned Driver</CardTitle>
              </CardHeader>
              <CardContent>
                <div
                  className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 -m-2 rounded"
                  onClick={() => navigateTo("driver-detail", vehicle.driver)}
                >
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{vehicle.driver.name}</p>
                    <p className="text-sm text-gray-500">View Profile</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Service Schedule */}
            <Card className="rounded-none shadow-none">
              <CardHeader>
                <CardTitle>Service Schedule</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Last Service</span>
                  <span className="font-medium text-gray-900">{vehicle.lastService}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Next Service</span>
                  <span className="font-medium text-gray-900">{vehicle.nextService}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Last Inspection</span>
                  <span className="font-medium text-gray-900">{vehicle.lastInspection}</span>
                </div>
              </CardContent>
            </Card>

            {/* Expiry Dates */}
            <Card className="rounded-none shadow-none">
              <CardHeader>
                <CardTitle>Important Dates</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Registration</span>
                  <span className="font-medium text-gray-900">{vehicle.registrationExpiry}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Insurance</span>
                  <span className="font-medium text-gray-900">{vehicle.insuranceExpiry}</span>
                </div>
              </CardContent>
            </Card>

            {/* Financial Summary */}
            <Card className="rounded-none shadow-none">
              <CardHeader>
                <CardTitle>Financial Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Total Earnings</span>
                  <span className="font-medium text-gray-900">{vehicle.totalEarnings}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Maintenance Cost</span>
                  <span className="font-medium text-gray-900">{vehicle.maintenanceCost}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Average Rating</span>
                  <span className="font-medium text-gray-900">{vehicle.averageRating}/5.0</span>
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
                  <Wrench className="w-4 h-4 mr-2" />
                  Schedule Service
                </Button>
                <Button variant="outline" className="w-full rounded-none bg-transparent">
                  Update Location
                </Button>
                <Button variant="outline" className="w-full rounded-none bg-transparent">
                  View All Rides
                </Button>
                <Button variant="outline" className="w-full rounded-none bg-transparent text-red-600 border-red-200">
                  <AlertTriangle className="w-4 h-4 mr-2" />
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
