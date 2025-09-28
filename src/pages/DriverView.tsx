"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Home,
  History,
  Navigation,
  Calendar,
  BarChart3,
  MessageCircle,
  CreditCard,
  DollarSign,
  Bell,
  FileText,
  Settings,
  MapPin,
  Clock,
  Star,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Eye,
  Menu,
  Phone,
  Car,
  TrendingUp,
  Users,
  Upload,
  Download,
  RefreshCw,
} from "lucide-react"
import { useState } from "react"
import { useMobile } from "../hooks/use-mobile"

export default function DriverView() {
  const [activeTab, setActiveTab] = useState("Current Ride")
  const [activeSidebarTab, setActiveSidebarTab] = useState("Home")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [showDocumentModal, setShowDocumentModal] = useState(false)
  const [selectedDocument, setSelectedDocument] = useState<any>(null)
  const isMobile = useMobile()

  const driverDocuments = [
    {
      id: 1,
      type: "CNIC",
      name: "National Identity Card",
      status: "success",
      uploadDate: "2024-01-15",
      expiryDate: "2029-01-15",
      fileUrl: "#",
    },
    {
      id: 2,
      type: "License",
      name: "Driving License",
      status: "reviewed",
      uploadDate: "2024-01-10",
      expiryDate: "2026-01-10",
      fileUrl: "#",
    },
    {
      id: 3,
      type: "Application",
      name: "Driver Application Form",
      status: "rejected",
      uploadDate: "2024-01-05",
      expiryDate: null,
      fileUrl: "#",
      rejectionReason: "Photo quality is poor, please resubmit with clearer image",
    },
    {
      id: 4,
      type: "Vehicle Registration",
      name: "Vehicle Registration Certificate",
      status: "expired",
      uploadDate: "2023-12-01",
      expiryDate: "2024-01-01",
      fileUrl: "#",
    },
  ]

  const rideHistory = [
    {
      id: 1,
      date: "2024-01-20",
      time: "14:30",
      from: "Downtown Mall",
      to: "Airport Terminal 1",
      distance: "12.5 km",
      duration: "25 min",
      fare: "$18.50",
      rating: 4.8,
      customer: "John Smith",
    },
    {
      id: 2,
      date: "2024-01-20",
      time: "12:15",
      from: "Central Station",
      to: "Business District",
      distance: "8.2 km",
      duration: "18 min",
      fare: "$12.30",
      rating: 5.0,
      customer: "Sarah Johnson",
    },
    {
      id: 3,
      date: "2024-01-19",
      time: "18:45",
      from: "University Campus",
      to: "Residential Area",
      distance: "6.8 km",
      duration: "15 min",
      fare: "$9.75",
      rating: 4.5,
      customer: "Mike Wilson",
    },
  ]

  const futureRides = [
    {
      id: 1,
      date: "2024-01-21",
      time: "09:00",
      from: "Hotel Grand Plaza",
      to: "Conference Center",
      estimatedFare: "$15.00",
      customer: "Emma Davis",
      phone: "+1 234-567-8901",
    },
    {
      id: 2,
      date: "2024-01-21",
      time: "14:30",
      from: "Shopping Mall",
      to: "Residential Complex",
      estimatedFare: "$11.50",
      customer: "Robert Brown",
      phone: "+1 234-567-8902",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "success":
        return "bg-green-100 text-green-800"
      case "reviewed":
        return "bg-blue-100 text-blue-800"
      case "rejected":
        return "bg-red-100 text-red-800"
      case "expired":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "success":
        return <CheckCircle className="w-4 h-4" />
      case "reviewed":
        return <Eye className="w-4 h-4" />
      case "rejected":
        return <XCircle className="w-4 h-4" />
      case "expired":
        return <AlertTriangle className="w-4 h-4" />
      default:
        return <Clock className="w-4 h-4" />
    }
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case "Ride History":
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">Ride History</h2>
              <Button variant="outline" className="text-gray-600 bg-transparent">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
            <div className="space-y-3">
              {rideHistory.map((ride) => (
                <Card key={ride.id} className="rounded-none shadow-none">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-sm text-gray-500">
                            {ride.date} • {ride.time}
                          </span>
                          <Badge className="bg-green-100 text-green-800">{ride.fare}</Badge>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                          <MapPin className="w-4 h-4" />
                          <span>
                            {ride.from} → {ride.to}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span>{ride.distance}</span>
                          <span>{ride.duration}</span>
                          <span>Customer: {ride.customer}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium">{ride.rating}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )

      case "Current Ride":
        return (
          <div className="space-y-6">
            <Card className="rounded-none shadow-none border-orange-200 bg-orange-50">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold text-gray-900">Current Live Ride</h2>
                  <Badge className="bg-orange-600 text-white">In Progress</Badge>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-orange-600" />
                        <div>
                          <p className="text-sm text-gray-500">Pickup</p>
                          <p className="font-medium">Central Business District</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Navigation className="w-5 h-5 text-orange-600" />
                        <div>
                          <p className="text-sm text-gray-500">Destination</p>
                          <p className="font-medium">International Airport</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-orange-600" />
                        <div>
                          <p className="text-sm text-gray-500">Duration</p>
                          <p className="font-medium">28 minutes</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-orange-600" />
                        <div>
                          <p className="text-sm text-gray-500">Customer</p>
                          <p className="font-medium">Alex Thompson</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-5 h-5 text-orange-600" />
                        <div>
                          <p className="text-sm text-gray-500">Contact</p>
                          <p className="font-medium">+1 234-567-8900</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-5 h-5 text-orange-600" />
                        <div>
                          <p className="text-sm text-gray-500">Estimated Fare</p>
                          <p className="font-medium text-lg">$22.50</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3 mt-6">
                  <Button className="bg-orange-600 hover:bg-orange-700 text-white flex-1">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat with Customer
                  </Button>
                  <Button variant="outline" className="text-gray-600 bg-transparent">
                    <Phone className="w-4 h-4 mr-2" />
                    Call
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="rounded-none shadow-none">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Today's Rides</p>
                      <p className="text-2xl font-bold text-gray-900">8</p>
                      <div className="flex items-center gap-1 mt-2">
                        <TrendingUp className="w-4 h-4 text-green-600" />
                        <span className="text-sm text-green-600">+2 from yesterday</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-none shadow-none">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Today's Earnings</p>
                      <p className="text-2xl font-bold text-gray-900">$156.80</p>
                      <div className="flex items-center gap-1 mt-2">
                        <DollarSign className="w-4 h-4 text-green-600" />
                        <span className="text-sm text-green-600">+$23 from yesterday</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-none shadow-none">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Rating</p>
                      <p className="text-2xl font-bold text-gray-900">4.8</p>
                      <div className="flex items-center gap-1 mt-2">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm text-gray-500">Based on 156 rides</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )

      case "Future Rides":
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">Scheduled Rides</h2>
              <Button variant="outline" className="text-gray-600 bg-transparent">
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh
              </Button>
            </div>
            <div className="space-y-3">
              {futureRides.map((ride) => (
                <Card key={ride.id} className="rounded-none shadow-none">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="w-4 h-4 text-orange-600" />
                          <span className="font-medium">
                            {ride.date} • {ride.time}
                          </span>
                          <Badge className="bg-blue-100 text-blue-800">Scheduled</Badge>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                          <MapPin className="w-4 h-4" />
                          <span>
                            {ride.from} → {ride.to}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span>Customer: {ride.customer}</span>
                          <span>{ride.phone}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-semibold text-gray-900">{ride.estimatedFare}</p>
                        <p className="text-sm text-gray-500">Estimated</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )

      case "Documents":
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">Driver Documents</h2>
              <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                <Upload className="w-4 h-4 mr-2" />
                Upload Document
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {driverDocuments.map((doc) => (
                <Card key={doc.id} className="rounded-none shadow-none">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <FileText className="w-5 h-5 text-gray-500" />
                        <div>
                          <h3 className="font-medium text-gray-900">{doc.name}</h3>
                          <p className="text-sm text-gray-500">{doc.type}</p>
                        </div>
                      </div>
                      <Badge className={getStatusColor(doc.status)}>
                        <div className="flex items-center gap-1">
                          {getStatusIcon(doc.status)}
                          <span className="capitalize">{doc.status}</span>
                        </div>
                      </Badge>
                    </div>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span>Uploaded:</span>
                        <span>{doc.uploadDate}</span>
                      </div>
                      {doc.expiryDate && (
                        <div className="flex justify-between">
                          <span>Expires:</span>
                          <span>{doc.expiryDate}</span>
                        </div>
                      )}
                      {doc.status === "rejected" && doc.rejectionReason && (
                        <div className="mt-2 p-2 bg-red-50 border border-red-200 rounded">
                          <p className="text-sm text-red-800">{doc.rejectionReason}</p>
                        </div>
                      )}
                    </div>
                    <div className="flex gap-2 mt-3">
                      <Button variant="outline" size="sm" className="text-gray-600 flex-1 bg-transparent">
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </Button>
                      {(doc.status === "rejected" || doc.status === "expired") && (
                        <Button size="sm" className="bg-orange-600 hover:bg-orange-700 text-white flex-1">
                          <Upload className="w-4 h-4 mr-1" />
                          Reupload
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )

      default:
        return (
          <div className="text-center py-8">
            <p className="text-gray-500">Select a tab to view content</p>
          </div>
        )
    }
  }

  return (
    <div className="flex min-h-screen bg-white">
      {isMobile && sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setSidebarOpen(false)} />
      )}

      <div
        className={`${
          isMobile
            ? `fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out ${
                sidebarOpen ? "translate-x-0" : "-translate-x-full"
              }`
            : "w-64"
        } bg-white border-r border-gray-200 flex-shrink-0`}
      >
        <div className="p-6">
          <div className="w-8 h-8 bg-black flex items-center justify-center">
            <div className="w-4 h-4 bg-white"></div>
          </div>
        </div>

        <nav className="px-4 space-y-2">
          <button
            onClick={() => {
              setActiveSidebarTab("Home")
              if (isMobile) setSidebarOpen(false)
            }}
            className={`w-full flex items-center gap-3 px-3 py-2 text-left ${activeSidebarTab === "Home" ? "text-orange-600 bg-orange-50" : "text-gray-600 hover:bg-gray-50"}`}
          >
            <Home className="w-5 h-5" />
            <span className={activeSidebarTab === "Home" ? "font-medium" : ""}>Dashboard</span>
          </button>
          <button
            onClick={() => {
              setActiveSidebarTab("History")
              if (isMobile) setSidebarOpen(false)
            }}
            className={`w-full flex items-center gap-3 px-3 py-2 text-left ${activeSidebarTab === "History" ? "text-orange-600 bg-orange-50" : "text-gray-600 hover:bg-gray-50"}`}
          >
            <History className="w-5 h-5" />
            <span className={activeSidebarTab === "History" ? "font-medium" : ""}>Ride History</span>
          </button>
          <button
            onClick={() => {
              setActiveSidebarTab("Reports")
              if (isMobile) setSidebarOpen(false)
            }}
            className={`w-full flex items-center gap-3 px-3 py-2 text-left ${activeSidebarTab === "Reports" ? "text-orange-600 bg-orange-50" : "text-gray-600 hover:bg-gray-50"}`}
          >
            <BarChart3 className="w-5 h-5" />
            <span className={activeSidebarTab === "Reports" ? "font-medium" : ""}>Reports</span>
          </button>
          <button
            onClick={() => {
              setActiveSidebarTab("Chat")
              if (isMobile) setSidebarOpen(false)
            }}
            className={`w-full flex items-center gap-3 px-3 py-2 text-left ${activeSidebarTab === "Chat" ? "text-orange-600 bg-orange-50" : "text-gray-600 hover:bg-gray-50"}`}
          >
            <MessageCircle className="w-5 h-5" />
            <span className={activeSidebarTab === "Chat" ? "font-medium" : ""}>Chat</span>
          </button>
          <button
            onClick={() => {
              setActiveSidebarTab("Payments")
              if (isMobile) setSidebarOpen(false)
            }}
            className={`w-full flex items-center gap-3 px-3 py-2 text-left ${activeSidebarTab === "Payments" ? "text-orange-600 bg-orange-50" : "text-gray-600 hover:bg-gray-50"}`}
          >
            <CreditCard className="w-5 h-5" />
            <span className={activeSidebarTab === "Payments" ? "font-medium" : ""}>Payments</span>
          </button>
          <button
            onClick={() => {
              setActiveSidebarTab("Notifications")
              if (isMobile) setSidebarOpen(false)
            }}
            className={`w-full flex items-center gap-3 px-3 py-2 text-left ${activeSidebarTab === "Notifications" ? "text-orange-600 bg-orange-50" : "text-gray-600 hover:bg-gray-50"}`}
          >
            <Bell className="w-5 h-5" />
            <span className={activeSidebarTab === "Notifications" ? "font-medium" : ""}>Notifications</span>
          </button>
          <button
            onClick={() => {
              setActiveSidebarTab("Documents")
              if (isMobile) setSidebarOpen(false)
            }}
            className={`w-full flex items-center gap-3 px-3 py-2 text-left ${activeSidebarTab === "Documents" ? "text-orange-600 bg-orange-50" : "text-gray-600 hover:bg-gray-50"}`}
          >
            <FileText className="w-5 h-5" />
            <span className={activeSidebarTab === "Documents" ? "font-medium" : ""}>Documents</span>
          </button>
          <button
            onClick={() => {
              setActiveSidebarTab("Settings")
              if (isMobile) setSidebarOpen(false)
            }}
            className={`w-full flex items-center gap-3 px-3 py-2 text-left ${activeSidebarTab === "Settings" ? "text-orange-600 bg-orange-50" : "text-gray-600 hover:bg-gray-50"}`}
          >
            <Settings className="w-5 h-5" />
            <span className={activeSidebarTab === "Settings" ? "font-medium" : ""}>Settings</span>
          </button>
        </nav>

        <div className="absolute bottom-6 left-4 right-4">
          
        </div>
      </div>

      <div className="flex-1 p-4 md:p-8 min-w-0">
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <div className="flex items-center gap-4">
            {isMobile && (
              <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(true)} className="p-2">
                <Menu className="w-5 h-5 text-gray-600" />
              </Button>
            )}
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-900">
                {activeSidebarTab === "Home"
                  ? "Driver Dashboard"
                  : activeSidebarTab === "History"
                    ? "Ride History"
                    : activeSidebarTab === "Reports"
                      ? "Reports"
                      : activeSidebarTab === "Chat"
                        ? "Chat"
                        : activeSidebarTab === "Payments"
                          ? "Payments"
                          : activeSidebarTab === "Notifications"
                            ? "Notifications"
                            : activeSidebarTab === "Documents"
                              ? "Driver Documents"
                              : activeSidebarTab === "Settings"
                                ? "Account Settings"
                                : "Dashboard"}
              </h1>
              <p className="text-sm md:text-base text-gray-600 hidden sm:block">
                {activeSidebarTab === "Home"
                  ? "Manage your rides and track your earnings"
                  : activeSidebarTab === "History"
                    ? "View your completed rides and earnings history"
                    : activeSidebarTab === "Reports"
                      ? "Access your performance reports and analytics"
                      : activeSidebarTab === "Chat"
                        ? "Communicate with customers and support"
                        : activeSidebarTab === "Payments"
                          ? "Manage your payments and fare details"
                          : activeSidebarTab === "Notifications"
                            ? "Stay updated with important notifications"
                            : activeSidebarTab === "Documents"
                              ? "Manage your driver documents and verification status"
                              : activeSidebarTab === "Settings"
                                ? "Update your account settings and preferences"
                                : ""}
              </p>
            </div>
          </div>
        </div>

        {activeSidebarTab === "Home" && (
          <>
            <div className="flex gap-4 md:gap-8 mb-6 md:mb-8 border-b border-gray-200 overflow-x-auto">
              <button
                onClick={() => setActiveTab("Current Ride")}
                className={`pb-3 font-medium whitespace-nowrap ${activeTab === "Current Ride" ? "text-orange-600 border-b-2 border-orange-600" : "text-gray-500 hover:text-gray-700"}`}
              >
                Current Ride
              </button>
              <button
                onClick={() => setActiveTab("Ride History")}
                className={`pb-3 font-medium whitespace-nowrap ${activeTab === "Ride History" ? "text-orange-600 border-b-2 border-orange-600" : "text-gray-500 hover:text-gray-700"}`}
              >
                Ride History
              </button>
              <button
                onClick={() => setActiveTab("Future Rides")}
                className={`pb-3 font-medium whitespace-nowrap ${activeTab === "Future Rides" ? "text-orange-600 border-b-2 border-orange-600" : "text-gray-500 hover:text-gray-700"}`}
              >
                Future Rides
              </button>
              <button
                onClick={() => setActiveTab("Documents")}
                className={`pb-3 font-medium whitespace-nowrap ${activeTab === "Documents" ? "text-orange-600 border-b-2 border-orange-600" : "text-gray-500 hover:text-gray-700"}`}
              >
                Documents
              </button>
            </div>
            {renderTabContent()}
          </>
        )}

        {activeSidebarTab === "History" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">Complete Ride History</h2>
              <div className="flex gap-2">
                <Button variant="outline" className="text-gray-600 bg-transparent">
                  Filter
                </Button>
                <Button variant="outline" className="text-gray-600 bg-transparent">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>
            <div className="space-y-3">
              {rideHistory.map((ride) => (
                <Card key={ride.id} className="rounded-none shadow-none">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-sm text-gray-500">
                            {ride.date} • {ride.time}
                          </span>
                          <Badge className="bg-green-100 text-green-800">{ride.fare}</Badge>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                          <MapPin className="w-4 h-4" />
                          <span>
                            {ride.from} → {ride.to}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span>{ride.distance}</span>
                          <span>{ride.duration}</span>
                          <span>Customer: {ride.customer}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium">{ride.rating}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSidebarTab === "Reports" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="rounded-none shadow-none">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Weekly Earnings</p>
                      <p className="text-2xl font-bold text-gray-900">$1,247.50</p>
                      <div className="flex items-center gap-1 mt-2">
                        <TrendingUp className="w-4 h-4 text-green-600" />
                        <span className="text-sm text-green-600">+15% from last week</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="rounded-none shadow-none">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Total Rides</p>
                      <p className="text-2xl font-bold text-gray-900">47</p>
                      <div className="flex items-center gap-1 mt-2">
                        <Car className="w-4 h-4 text-blue-600" />
                        <span className="text-sm text-gray-500">This week</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="rounded-none shadow-none">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Average Rating</p>
                      <p className="text-2xl font-bold text-gray-900">4.8</p>
                      <div className="flex items-center gap-1 mt-2">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm text-gray-500">Based on 156 rides</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeSidebarTab === "Chat" && (
          <div className="space-y-4">
            <Card className="rounded-none shadow-none">
              <CardContent className="p-6">
                <div className="text-center py-8">
                  <MessageCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No active chats</h3>
                  <p className="text-gray-500">Your customer conversations will appear here</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSidebarTab === "Payments" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="rounded-none shadow-none">
                <CardHeader>
                  <CardTitle className="text-lg">Fare Payments</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Today's Earnings</span>
                      <span className="font-medium">$156.80</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Weekly Earnings</span>
                      <span className="font-medium">$1,247.50</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Pending Payments</span>
                      <span className="font-medium text-orange-600">$89.30</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="rounded-none shadow-none">
                <CardHeader>
                  <CardTitle className="text-lg">Payment Method</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3">
                    <CreditCard className="w-8 h-8 text-gray-400" />
                    <div>
                      <p className="font-medium">Bank Account</p>
                      <p className="text-sm text-gray-500">****1234</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4 bg-transparent">
                    Update Payment Method
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeSidebarTab === "Notifications" && (
          <div className="space-y-4">
            <Card className="rounded-none shadow-none">
              <CardContent className="p-6">
                <div className="text-center py-8">
                  <Bell className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No new notifications</h3>
                  <p className="text-gray-500">You're all caught up!</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSidebarTab === "Documents" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">Driver Documents</h2>
              <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                <Upload className="w-4 h-4 mr-2" />
                Upload Document
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {driverDocuments.map((doc) => (
                <Card key={doc.id} className="rounded-none shadow-none">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <FileText className="w-5 h-5 text-gray-500" />
                        <div>
                          <h3 className="font-medium text-gray-900">{doc.name}</h3>
                          <p className="text-sm text-gray-500">{doc.type}</p>
                        </div>
                      </div>
                      <Badge className={getStatusColor(doc.status)}>
                        <div className="flex items-center gap-1">
                          {getStatusIcon(doc.status)}
                          <span className="capitalize">{doc.status}</span>
                        </div>
                      </Badge>
                    </div>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span>Uploaded:</span>
                        <span>{doc.uploadDate}</span>
                      </div>
                      {doc.expiryDate && (
                        <div className="flex justify-between">
                          <span>Expires:</span>
                          <span>{doc.expiryDate}</span>
                        </div>
                      )}
                      {doc.status === "rejected" && doc.rejectionReason && (
                        <div className="mt-2 p-2 bg-red-50 border border-red-200 rounded">
                          <p className="text-sm text-red-800">{doc.rejectionReason}</p>
                        </div>
                      )}
                    </div>
                    <div className="flex gap-2 mt-3">
                      <Button variant="outline" size="sm" className="text-gray-600 flex-1 bg-transparent">
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </Button>
                      {(doc.status === "rejected" || doc.status === "expired") && (
                        <Button size="sm" className="bg-orange-600 hover:bg-orange-700 text-white flex-1">
                          <Upload className="w-4 h-4 mr-1" />
                          Reupload
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSidebarTab === "Settings" && (
          <div className="space-y-6">
            <Card className="rounded-none shadow-none">
              <CardHeader>
                <CardTitle className="text-lg">Account Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    defaultValue="John Driver"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    defaultValue="john.driver@example.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    defaultValue="+1 234-567-8900"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <Button className="bg-orange-600 hover:bg-orange-700 text-white">Save Changes</Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
