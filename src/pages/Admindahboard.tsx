"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Home,
  Inbox,
  BarChart3,
  Bell,
  MoreHorizontal,
  Download,
  TrendingUp,
  Users,
  DollarSign,
  ChevronDown,
  Star,
  MapPin,
  Car,
  Fuel,
  Calendar,
  X,
  FileText,
  Phone,
  CreditCard,
  CheckCircle,
  XCircle,
  Mail,
  AlertTriangle,
  Eye,
  UserPlus,
} from "lucide-react"
import { useState } from "react"

export default function Admindashboard() {
  const [activeTab, setActiveTab] = useState("Overview")
  const [activeSidebarTab, setActiveSidebarTab] = useState("Home")
  const [showDriverApplications, setShowDriverApplications] = useState(false)

  const rides = [
    {
      id: "#RT8249",
      driver: { name: "John Cooper", avatar: "/thoughtful-man.png" },
      customer: { name: "Elisa", avatar: "/diverse-woman-portrait.png" },
      route: "Downtown → Airport",
      status: "Completed",
      amount: "$35.50",
    },
    {
      id: "#RT8248",
      driver: { name: "Sarah Chen", avatar: "/asian-woman.jpg" },
      customer: { name: "Namya", avatar: "/indian-woman.jpg" },
      route: "Westpark → Mall",
      status: "In Progress",
      amount: "$22.75",
    },
    {
      id: "#RT8247",
      driver: { name: "Michael Ross", avatar: "/black-man.jpg" },
      customer: { name: "Jhon", avatar: "/young-man.jpg" },
      route: "Station → University",
      status: "Completed",
      amount: "$18.25",
    },
  ]

  const drivers = [
    {
      id: "DR001",
      name: "John Cooper",
      avatar: "/thoughtful-man.png",
      status: "Online",
      rating: 4.8,
      totalRides: 342,
      location: "Downtown",
      joinDate: "Jan 2023",
      earnings: "$12,450",
    },
    {
      id: "DR002",
      name: "Sarah Chen",
      avatar: "/asian-woman.jpg",
      status: "Busy",
      rating: 4.9,
      totalRides: 298,
      location: "Westpark",
      joinDate: "Mar 2023",
      earnings: "$9,870",
    },
    {
      id: "DR003",
      name: "Michael Ross",
      avatar: "/black-man.jpg",
      status: "Offline",
      rating: 4.7,
      totalRides: 156,
      location: "Station Area",
      joinDate: "Jun 2023",
      earnings: "$6,230",
    },
    {
      id: "DR004",
      name: "Emma Wilson",
      avatar: "/diverse-woman-portrait.png",
      status: "Online",
      rating: 4.9,
      totalRides: 423,
      location: "Airport",
      joinDate: "Dec 2022",
      earnings: "$15,680",
    },
  ]

  const fleet = [
    {
      id: "VH001",
      model: "Toyota Camry 2022",
      licensePlate: "ABC-123",
      driver: "John Cooper",
      status: "Active",
      mileage: "45,230 km",
      fuelLevel: "85%",
      lastService: "Dec 15, 2024",
      location: "Downtown",
    },
    {
      id: "VH002",
      model: "Honda Accord 2023",
      licensePlate: "XYZ-789",
      driver: "Sarah Chen",
      status: "In Transit",
      mileage: "32,100 km",
      fuelLevel: "62%",
      lastService: "Nov 28, 2024",
      location: "Westpark",
    },
    {
      id: "VH003",
      model: "Nissan Altima 2021",
      licensePlate: "DEF-456",
      driver: "Michael Ross",
      status: "Maintenance",
      mileage: "67,890 km",
      fuelLevel: "40%",
      lastService: "Oct 10, 2024",
      location: "Service Center",
    },
    {
      id: "VH004",
      model: "Hyundai Elantra 2023",
      licensePlate: "GHI-012",
      driver: "Emma Wilson",
      status: "Active",
      mileage: "28,450 km",
      fuelLevel: "90%",
      lastService: "Jan 5, 2025",
      location: "Airport",
    },
  ]

  const driverApplications = [
    {
      id: "APP001",
      name: "Ahmed Hassan",
      phone: "+92 300 1234567",
      avatar: "/thoughtful-man.png",
      cnic: "42101-1234567-8",
      applicationDate: "Jan 15, 2025",
      documents: ["License", "CNIC", "Vehicle Registration"],
      status: "Pending",
    },
    {
      id: "APP002",
      name: "Maria Rodriguez",
      phone: "+92 301 9876543",
      avatar: "/diverse-woman-portrait.png",
      cnic: "42101-9876543-2",
      applicationDate: "Jan 14, 2025",
      documents: ["License", "CNIC", "Insurance"],
      status: "Under Review",
    },
    {
      id: "APP003",
      name: "David Kim",
      phone: "+92 302 5555444",
      avatar: "/asian-woman.jpg",
      cnic: "42101-5555444-1",
      applicationDate: "Jan 13, 2025",
      documents: ["License", "CNIC", "Medical Certificate"],
      status: "Pending",
    },
  ]

  const customers = [
    {
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
    },
    {
      id: "CU002",
      name: "Namya Patel",
      avatar: "/indian-woman.jpg",
      email: "namya.p@email.com",
      phone: "+92 301 3333444",
      totalRides: 32,
      totalSpent: "$890.50",
      joinDate: "Jan 2024",
      rating: 4.7,
      status: "Active",
    },
    {
      id: "CU003",
      name: "Jhon Smith",
      avatar: "/young-man.jpg",
      email: "jhon.s@email.com",
      phone: "+92 302 5555666",
      totalRides: 18,
      totalSpent: "$425.25",
      joinDate: "Mar 2024",
      rating: 4.8,
      status: "Inactive",
    },
  ]

  const inboxMessages = [
    {
      id: "MSG001",
      from: "John Cooper",
      subject: "Vehicle maintenance request",
      preview: "Hi, I need to schedule maintenance for my vehicle...",
      time: "2 hours ago",
      unread: true,
      avatar: "/thoughtful-man.png",
    },
    {
      id: "MSG002",
      from: "Sarah Chen",
      subject: "Customer complaint resolution",
      preview: "The customer issue has been resolved successfully...",
      time: "5 hours ago",
      unread: false,
      avatar: "/asian-woman.jpg",
    },
  ]

  const reports = [
    {
      id: "RPT001",
      title: "Weekly Revenue Report",
      description: "Detailed breakdown of weekly earnings and performance",
      generatedDate: "Jan 15, 2025",
      type: "Revenue",
      status: "Ready",
    },
    {
      id: "RPT002",
      title: "Driver Performance Analysis",
      description: "Monthly analysis of driver ratings and efficiency",
      generatedDate: "Jan 10, 2025",
      type: "Performance",
      status: "Processing",
    },
  ]

  const notifications = [
    {
      id: "NOT001",
      title: "New driver application received",
      message: "Ahmed Hassan has submitted a new driver application",
      time: "30 minutes ago",
      type: "info",
      unread: true,
    },
    {
      id: "NOT002",
      title: "Vehicle maintenance due",
      message: "Toyota Camry (ABC-123) is due for scheduled maintenance",
      time: "2 hours ago",
      type: "warning",
      unread: true,
    },
    {
      id: "NOT003",
      title: "Revenue milestone reached",
      message: "Congratulations! You've reached $25,000 in monthly revenue",
      time: "1 day ago",
      type: "success",
      unread: false,
    },
  ]

  const renderSidebarContent = () => {
    switch (activeSidebarTab) {
      case "Inbox":
        return (
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Inbox</h2>
            <div className="space-y-4">
              {inboxMessages.map((message) => (
                <div
                  key={message.id}
                  className={`p-4 border border-gray-200 ${message.unread ? "bg-blue-50" : "bg-white"}`}
                >
                  <div className="flex items-start gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={message.avatar || "/placeholder.svg"} className="rounded-full" />
                      <AvatarFallback className="rounded-full">{message.from[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-gray-900">{message.from}</span>
                        <span className="text-sm text-gray-500">{message.time}</span>
                      </div>
                      <h4 className="font-medium text-gray-800 mb-1">{message.subject}</h4>
                      <p className="text-sm text-gray-600">{message.preview}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )

      case "Reports":
        return (
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Reports</h2>
            <div className="space-y-4">
              {reports.map((report) => (
                <div key={report.id} className="p-4 border border-gray-200 bg-white">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900">{report.title}</h4>
                    <Badge
                      className={`rounded-none ${report.status === "Ready" ? "bg-green-100 text-green-800" : "bg-orange-100 text-orange-800"}`}
                    >
                      {report.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{report.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Generated: {report.generatedDate}</span>
                    <Button size="sm" variant="outline" className="rounded-none bg-transparent">
                      <Eye className="w-4 h-4 mr-2" />
                      View
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )

      case "Notifications":
        return (
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Notifications</h2>
            <div className="space-y-4">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-4 border border-gray-200 ${notification.unread ? "bg-blue-50" : "bg-white"}`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        notification.type === "info"
                          ? "bg-blue-100"
                          : notification.type === "warning"
                            ? "bg-orange-100"
                            : "bg-green-100"
                      }`}
                    >
                      {notification.type === "info" && <Bell className="w-4 h-4 text-blue-600" />}
                      {notification.type === "warning" && <AlertTriangle className="w-4 h-4 text-orange-600" />}
                      {notification.type === "success" && <CheckCircle className="w-4 h-4 text-green-600" />}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-medium text-gray-900">{notification.title}</h4>
                        <span className="text-sm text-gray-500">{notification.time}</span>
                      </div>
                      <p className="text-sm text-gray-600">{notification.message}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )

      default:
        return (
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Dashboard Overview</h2>
            <p className="text-gray-600">
              Welcome to your ride booking admin panel. Use the navigation to access different sections.
            </p>
          </div>
        )
    }
  }

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200">
        <div className="p-6">
          <div className="w-8 h-8 bg-black flex items-center justify-center">
            <div className="w-4 h-4 bg-white"></div>
          </div>
        </div>

        <nav className="px-4 space-y-2">
          <button
            onClick={() => setActiveSidebarTab("Home")}
            className={`w-full flex items-center gap-3 px-3 py-2 text-left ${activeSidebarTab === "Home" ? "text-orange-600 bg-orange-50" : "text-gray-600 hover:bg-gray-50"}`}
          >
            <Home className="w-5 h-5" />
            <span className={activeSidebarTab === "Home" ? "font-medium" : ""}>Home</span>
          </button>
          <button
            onClick={() => setActiveSidebarTab("Inbox")}
            className={`w-full flex items-center gap-3 px-3 py-2 text-left ${activeSidebarTab === "Inbox" ? "text-orange-600 bg-orange-50" : "text-gray-600 hover:bg-gray-50"}`}
          >
            <Inbox className="w-5 h-5" />
            <span className={activeSidebarTab === "Inbox" ? "font-medium" : ""}>Inbox</span>
          </button>
          <button
            onClick={() => setActiveSidebarTab("Reports")}
            className={`w-full flex items-center gap-3 px-3 py-2 text-left ${activeSidebarTab === "Reports" ? "text-orange-600 bg-orange-50" : "text-gray-600 hover:bg-gray-50"}`}
          >
            <BarChart3 className="w-5 h-5" />
            <span className={activeSidebarTab === "Reports" ? "font-medium" : ""}>Reports</span>
          </button>
          <button
            onClick={() => setActiveSidebarTab("Notifications")}
            className={`w-full flex items-center gap-3 px-3 py-2 text-left ${activeSidebarTab === "Notifications" ? "text-orange-600 bg-orange-50" : "text-gray-600 hover:bg-gray-50"}`}
          >
            <Bell className="w-5 h-5" />
            <span className={activeSidebarTab === "Notifications" ? "font-medium" : ""}>Notifications</span>
          </button>
          <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50">
            <MoreHorizontal className="w-5 h-5" />
            <span>More</span>
          </a>
        </nav>

        {/* Bonus Card */}
        <div className="absolute bottom-6 left-4 right-4"></div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 text-white">
        {activeSidebarTab !== "Home" ? (
          renderSidebarContent()
        ) : (
          <>
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Ride Dashboard</h1>
                <p className="text-gray-600">Monitor real-time fleet performance and trip statistics</p>
              </div>
              <div className="flex gap-3">
                <Button
                  onClick={() => setShowDriverApplications(true)}
                  className="bg-orange-600 hover:bg-orange-700 text-white"
                >
                  Add Driver
                </Button>
                <Button variant="outline" className="text-gray-600 bg-transparent">
                  <Download className="w-4 h-4 mr-2" />
                  Download report
                </Button>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-8 mb-8 border-b border-gray-200">
              <button
                onClick={() => setActiveTab("Overview")}
                className={`pb-3 font-medium ${activeTab === "Overview" ? "text-orange-600 border-b-2 border-orange-600" : "text-gray-500 hover:text-gray-700"}`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab("Drivers")}
                className={`pb-3 font-medium ${activeTab === "Drivers" ? "text-orange-600 border-b-2 border-orange-600" : "text-gray-500 hover:text-gray-700"}`}
              >
                Drivers
              </button>
              <button
                onClick={() => setActiveTab("Fleet")}
                className={`pb-3 font-medium ${activeTab === "Fleet" ? "text-orange-600 border-b-2 border-orange-600" : "text-gray-500 hover:text-gray-700"}`}
              >
                Fleet
              </button>
              <button
                onClick={() => setActiveTab("Customers")}
                className={`pb-3 font-medium ${activeTab === "Customers" ? "text-orange-600 border-b-2 border-orange-600" : "text-gray-500 hover:text-gray-700"}`}
              >
                Customers
              </button>
            </div>

            {activeTab === "Overview" && (
              <>
                {/* Metrics Cards */}
                <div className="grid grid-cols-3 mb-8">
                  <Card className="rounded-none shadow-none">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Total Rides</p>
                          <p className="text-3xl font-bold text-gray-900">842</p>
                          <div className="flex items-center gap-1 mt-2">
                            <TrendingUp className="w-4 h-4 text-green-600" />
                            <span className="text-sm text-green-600">+12% today</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="rounded-none shadow-none">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Active Drivers</p>
                          <p className="text-3xl font-bold text-gray-900">124</p>
                          <div className="flex items-center gap-1 mt-2">
                            <Users className="w-4 h-4 text-gray-500" />
                            <span className="text-sm text-gray-500">Online now</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="rounded-none shadow-none">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Revenue</p>
                          <p className="text-3xl font-bold text-gray-900">$24,892</p>
                          <div className="flex items-center gap-1 mt-2">
                            <DollarSign className="w-4 h-4 text-green-600" />
                            <span className="text-sm text-green-600">+8% vs last week</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Rides Table */}
                <Card className="rounded-none shadow-none border-0">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Rides</CardTitle>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" size="sm" className="rounded-none bg-transparent">
                            All Trips
                            <ChevronDown className="w-4 h-4 ml-2" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="rounded-none">
                          <DropdownMenuItem>All Trips</DropdownMenuItem>
                          <DropdownMenuItem>Completed</DropdownMenuItem>
                          <DropdownMenuItem>In Progress</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-gray-200">
                            <th className="text-left py-3 px-4 font-medium text-gray-600">Driver</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-600">Customer</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-600">Trip ID</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-600">Route</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-600">Amount</th>
                            <th className="w-12"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {rides.map((ride, index) => (
                            <tr key={ride.id} className="border-b border-gray-100">
                              <td className="py-4 px-4">
                                <div className="flex items-center gap-3">
                                  <Avatar className="w-8 h-8">
                                    <AvatarImage
                                      src={ride.driver.avatar || "/placeholder.svg"}
                                      className="rounded-full"
                                    />
                                    <AvatarFallback className="rounded-full">
                                      {ride.driver.name
                                        .split(" ")
                                        .map((n) => n[0])
                                        .join("")}
                                    </AvatarFallback>
                                  </Avatar>
                                  <span className="font-medium text-gray-900">{ride.driver.name}</span>
                                </div>
                              </td>
                              <td className="py-4 px-4">
                                <div className="flex items-center gap-3">
                                  <Avatar className="w-8 h-8">
                                    <AvatarImage
                                      src={ride.customer.avatar || "/placeholder.svg"}
                                      className="rounded-full"
                                    />
                                    <AvatarFallback className="rounded-full">{ride.customer.name[0]}</AvatarFallback>
                                  </Avatar>
                                  <span className="text-gray-900">{ride.customer.name}</span>
                                </div>
                              </td>
                              <td className="py-4 px-4 text-gray-600">{ride.id}</td>
                              <td className="py-4 px-4 text-gray-600">{ride.route}</td>
                              <td className="py-4 px-4">
                                <Badge
                                  variant={ride.status === "Completed" ? "default" : "secondary"}
                                  className={
                                    ride.status === "Completed"
                                      ? "bg-green-100 text-green-800 hover:bg-green-100 rounded-none"
                                      : "bg-orange-100 text-orange-800 hover:bg-orange-100 rounded-none"
                                  }
                                >
                                  {ride.status}
                                </Badge>
                              </td>
                              <td className="py-4 px-4 font-medium text-gray-900">{ride.amount}</td>
                              <td className="py-4 px-4">
                                <Button variant="ghost" size="sm" className="rounded-none">
                                  <MoreHorizontal className="w-4 h-4" />
                                </Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </>
            )}

            {activeTab === "Drivers" && (
              <>
                {/* Driver Metrics */}
                <div className="grid grid-cols-3 mb-8">
                  <Card className="rounded-none shadow-none">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Total Drivers</p>
                          <p className="text-3xl font-bold text-gray-900">124</p>
                          <div className="flex items-center gap-1 mt-2">
                            <Users className="w-4 h-4 text-green-600" />
                            <span className="text-sm text-green-600">+5 this week</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="rounded-none shadow-none">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Online Now</p>
                          <p className="text-3xl font-bold text-gray-900">89</p>
                          <div className="flex items-center gap-1 mt-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-sm text-gray-500">Active drivers</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="rounded-none shadow-none">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Avg Rating</p>
                          <p className="text-3xl font-bold text-gray-900">4.8</p>
                          <div className="flex items-center gap-1 mt-2">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span className="text-sm text-gray-500">Out of 5.0</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Drivers Table */}
                <Card className="rounded-none shadow-none border-0">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Drivers</CardTitle>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" size="sm" className="rounded-none bg-transparent">
                            All Drivers
                            <ChevronDown className="w-4 h-4 ml-2" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="rounded-none">
                          <DropdownMenuItem>All Drivers</DropdownMenuItem>
                          <DropdownMenuItem>Online</DropdownMenuItem>
                          <DropdownMenuItem>Offline</DropdownMenuItem>
                          <DropdownMenuItem>Busy</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-gray-200">
                            <th className="text-left py-3 px-4 font-medium text-gray-600">Driver</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-600">Rating</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-600">Total Rides</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-600">Location</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-600">Earnings</th>
                            <th className="w-12"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {drivers.map((driver) => (
                            <tr key={driver.id} className="border-b border-gray-100">
                              <td className="py-4 px-4">
                                <div className="flex items-center gap-3">
                                  <Avatar className="w-8 h-8">
                                    <AvatarImage src={driver.avatar || "/placeholder.svg"} className="rounded-full" />
                                    <AvatarFallback className="rounded-full">
                                      {driver.name
                                        .split(" ")
                                        .map((n) => n[0])
                                        .join("")}
                                    </AvatarFallback>
                                  </Avatar>
                                  <div>
                                    <span className="font-medium text-gray-900">{driver.name}</span>
                                    <p className="text-sm text-gray-500">Joined {driver.joinDate}</p>
                                  </div>
                                </div>
                              </td>
                              <td className="py-4 px-4">
                                <Badge
                                  variant="secondary"
                                  className={
                                    driver.status === "Online"
                                      ? "bg-green-100 text-green-800 hover:bg-green-100 rounded-none"
                                      : driver.status === "Busy"
                                        ? "bg-orange-100 text-orange-800 hover:bg-orange-100 rounded-none"
                                        : "bg-gray-100 text-gray-800 hover:bg-gray-100 rounded-none"
                                  }
                                >
                                  {driver.status}
                                </Badge>
                              </td>
                              <td className="py-4 px-4">
                                <div className="flex items-center gap-1">
                                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                                  <span className="text-gray-900">{driver.rating}</span>
                                </div>
                              </td>
                              <td className="py-4 px-4 text-gray-600">{driver.totalRides}</td>
                              <td className="py-4 px-4">
                                <div className="flex items-center gap-1">
                                  <MapPin className="w-4 h-4 text-gray-400" />
                                  <span className="text-gray-600">{driver.location}</span>
                                </div>
                              </td>
                              <td className="py-4 px-4 font-medium text-gray-900">{driver.earnings}</td>
                              <td className="py-4 px-4">
                                <Button variant="ghost" size="sm" className="rounded-none">
                                  <MoreHorizontal className="w-4 h-4" />
                                </Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </>
            )}

            {activeTab === "Fleet" && (
              <>
                {/* Fleet Metrics */}
                <div className="grid grid-cols-3 mb-8">
                  <Card className="rounded-none shadow-none">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Total Vehicles</p>
                          <p className="text-3xl font-bold text-gray-900">156</p>
                          <div className="flex items-center gap-1 mt-2">
                            <Car className="w-4 h-4 text-blue-600" />
                            <span className="text-sm text-blue-600">+3 this month</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="rounded-none shadow-none">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Active Vehicles</p>
                          <p className="text-3xl font-bold text-gray-900">142</p>
                          <div className="flex items-center gap-1 mt-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-sm text-gray-500">On the road</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="rounded-none shadow-none">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Maintenance</p>
                          <p className="text-3xl font-bold text-gray-900">14</p>
                          <div className="flex items-center gap-1 mt-2">
                            <Calendar className="w-4 h-4 text-orange-600" />
                            <span className="text-sm text-orange-600">Scheduled</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Fleet Table */}
                <Card className="rounded-none shadow-none border-0">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Fleet</CardTitle>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" size="sm" className="rounded-none bg-transparent">
                            All Vehicles
                            <ChevronDown className="w-4 h-4 ml-2" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="rounded-none">
                          <DropdownMenuItem>All Vehicles</DropdownMenuItem>
                          <DropdownMenuItem>Active</DropdownMenuItem>
                          <DropdownMenuItem>In Transit</DropdownMenuItem>
                          <DropdownMenuItem>Maintenance</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-gray-200">
                            <th className="text-left py-3 px-4 font-medium text-gray-600">Vehicle</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-600">Driver</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-600">Mileage</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-600">Fuel Level</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-600">Location</th>
                            <th className="w-12"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {fleet.map((vehicle) => (
                            <tr key={vehicle.id} className="border-b border-gray-100">
                              <td className="py-4 px-4">
                                <div>
                                  <span className="font-medium text-gray-900">{vehicle.model}</span>
                                  <p className="text-sm text-gray-500">{vehicle.licensePlate}</p>
                                </div>
                              </td>
                              <td className="py-4 px-4 text-gray-600">{vehicle.driver}</td>
                              <td className="py-4 px-4">
                                <Badge
                                  variant="secondary"
                                  className={
                                    vehicle.status === "Active"
                                      ? "bg-green-100 text-green-800 hover:bg-green-100 rounded-none"
                                      : vehicle.status === "In Transit"
                                        ? "bg-blue-100 text-blue-800 hover:bg-blue-100 rounded-none"
                                        : "bg-orange-100 text-orange-800 hover:bg-orange-100 rounded-none"
                                  }
                                >
                                  {vehicle.status}
                                </Badge>
                              </td>
                              <td className="py-4 px-4 text-gray-600">{vehicle.mileage}</td>
                              <td className="py-4 px-4">
                                <div className="flex items-center gap-2">
                                  <Fuel className="w-4 h-4 text-gray-400" />
                                  <span className="text-gray-600">{vehicle.fuelLevel}</span>
                                </div>
                              </td>
                              <td className="py-4 px-4">
                                <div className="flex items-center gap-1">
                                  <MapPin className="w-4 h-4 text-gray-400" />
                                  <span className="text-gray-600">{vehicle.location}</span>
                                </div>
                              </td>
                              <td className="py-4 px-4">
                                <Button variant="ghost" size="sm" className="rounded-none">
                                  <MoreHorizontal className="w-4 h-4" />
                                </Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </>
            )}

            {activeTab === "Customers" && (
              <>
                {/* Customer Metrics */}
                <div className="grid grid-cols-3 mb-8">
                  <Card className="rounded-none shadow-none">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Total Customers</p>
                          <p className="text-3xl font-bold text-gray-900">2,847</p>
                          <div className="flex items-center gap-1 mt-2">
                            <UserPlus className="w-4 h-4 text-green-600" />
                            <span className="text-sm text-green-600">+12% this month</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="rounded-none shadow-none">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Active Customers</p>
                          <p className="text-3xl font-bold text-gray-900">1,923</p>
                          <div className="flex items-center gap-1 mt-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-sm text-gray-500">Last 30 days</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="rounded-none shadow-none">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Avg Rating</p>
                          <p className="text-3xl font-bold text-gray-900">4.7</p>
                          <div className="flex items-center gap-1 mt-2">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span className="text-sm text-gray-500">Customer satisfaction</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Customers Table */}
                <Card className="rounded-none shadow-none border-0">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Customers</CardTitle>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" size="sm" className="rounded-none bg-transparent">
                            All Customers
                            <ChevronDown className="w-4 h-4 ml-2" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="rounded-none">
                          <DropdownMenuItem>All Customers</DropdownMenuItem>
                          <DropdownMenuItem>Active</DropdownMenuItem>
                          <DropdownMenuItem>Inactive</DropdownMenuItem>
                          <DropdownMenuItem>VIP</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-gray-200">
                            <th className="text-left py-3 px-4 font-medium text-gray-600">Customer</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-600">Contact</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-600">Total Rides</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-600">Total Spent</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-600">Rating</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                            <th className="w-12"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {customers.map((customer) => (
                            <tr key={customer.id} className="border-b border-gray-100">
                              <td className="py-4 px-4">
                                <div className="flex items-center gap-3">
                                  <Avatar className="w-8 h-8">
                                    <AvatarImage src={customer.avatar || "/placeholder.svg"} className="rounded-full" />
                                    <AvatarFallback className="rounded-full">
                                      {customer.name
                                        .split(" ")
                                        .map((n) => n[0])
                                        .join("")}
                                    </AvatarFallback>
                                  </Avatar>
                                  <div>
                                    <span className="font-medium text-gray-900">{customer.name}</span>
                                    <p className="text-sm text-gray-500">Joined {customer.joinDate}</p>
                                  </div>
                                </div>
                              </td>
                              <td className="py-4 px-4">
                                <div>
                                  <div className="flex items-center gap-1 mb-1">
                                    <Mail className="w-4 h-4 text-gray-400" />
                                    <span className="text-sm text-gray-600">{customer.email}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Phone className="w-4 h-4 text-gray-400" />
                                    <span className="text-sm text-gray-600">{customer.phone}</span>
                                  </div>
                                </div>
                              </td>
                              <td className="py-4 px-4 text-gray-600">{customer.totalRides}</td>
                              <td className="py-4 px-4 font-medium text-gray-900">{customer.totalSpent}</td>
                              <td className="py-4 px-4">
                                <div className="flex items-center gap-1">
                                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                                  <span className="text-gray-900">{customer.rating}</span>
                                </div>
                              </td>
                              <td className="py-4 px-4">
                                <Badge
                                  variant="secondary"
                                  className={
                                    customer.status === "Active"
                                      ? "bg-green-100 text-green-800 hover:bg-green-100 rounded-none"
                                      : "bg-gray-100 text-gray-800 hover:bg-gray-100 rounded-none"
                                  }
                                >
                                  {customer.status}
                                </Badge>
                              </td>
                              <td className="py-4 px-4">
                                <Button variant="ghost" size="sm" className="rounded-none">
                                  <MoreHorizontal className="w-4 h-4" />
                                </Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </>
            )}
          </>
        )}
      </div>

      {showDriverApplications && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="absolute right-0 top-0 h-full w-96 bg-white shadow-lg overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">Driver Applications</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowDriverApplications(false)}
                  className="rounded-none"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {driverApplications.map((application) => (
                <div key={application.id} className="border border-gray-200 p-4 bg-white">
                  <div className="flex items-start gap-4 mb-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={application.avatar || "/placeholder.svg"} className="rounded-full" />
                      <AvatarFallback className="rounded-full">
                        {application.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{application.name}</h3>
                      <div className="flex items-center gap-1 mt-1">
                        <Phone className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{application.phone}</span>
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <CreditCard className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{application.cnic}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Application Documents</h4>
                    <div className="space-y-2">
                      {application.documents.map((doc, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <FileText className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-600">{doc}</span>
                          <CheckCircle className="w-4 h-4 text-green-500 ml-auto" />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Applied: {application.applicationDate}</span>
                    <Badge className="bg-orange-100 text-orange-800 rounded-none">{application.status}</Badge>
                  </div>

                  <div className="flex gap-2 mt-4">
                    <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white rounded-none flex-1">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Approve
                    </Button>
                    <Button size="sm" variant="outline" className="rounded-none flex-1 bg-transparent">
                      <XCircle className="w-4 h-4 mr-2" />
                      Reject
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
