"use client"

import { NavigationProvider, useNavigation } from "./navigation-context"
import AdminDashboard from "./admin-dashboard"
import DriverDetailScreen from "./driver-detail-screen"
import CustomerDetailScreen from "./customer-detail-screen"
import RideDetailScreen from "./ride-detail-screen"
import VehicleDetailScreen from "./vehicle-detail-screen"
import CarRegistrationScreen from "./car-registration-screen"
import AddDriverScreen from "./add-driver-screen"
import RideAllocationScreen from "./ride-allocation-screen"

function AppRouter() {
  const { currentScreen } = useNavigation()

  switch (currentScreen) {
    case "dashboard":
      return <AdminDashboard />
    case "driver-detail":
      return <DriverDetailScreen />
    case "customer-detail":
      return <CustomerDetailScreen />
    case "ride-detail":
      return <RideDetailScreen />
    case "vehicle-detail":
      return <VehicleDetailScreen />
    case "car-registration":
      return <CarRegistrationScreen />
    case "add-driver":
      return <AddDriverScreen />
    case "ride-allocation":
      return <RideAllocationScreen />
    default:
      return <AdminDashboard />
  }
}

export default function AdminDashboardRouter() {
  return (
    <NavigationProvider>
      <AppRouter />
    </NavigationProvider>
  )
}
