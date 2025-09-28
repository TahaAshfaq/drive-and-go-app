import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import PhoneVerification from "./pages/PhoneVerification";
import LoginPhoneVerification from "./pages/LoginPhoneVerification";
import DriverPhoneVerification from "./pages/DriverPhoneVerification";
import LoginDriverPhoneVerification from "./pages/LoginDriverPhoneVerification";
import Dashboard from "./pages/Dashboard";
import BecomeDriver from "./pages/BecomeDriver";
import ServiceBooking from "./pages/ServiceBooking";
import NotFound from "./pages/NotFound";
import AirportServicesForm from "./pages/AirportServicesForm";
import DriverDashboard from "./pages/DriverDashboard";
import Account from "./pages/Account";
import Admindashboard from "./pages/Admindahboard";
import DriverView from "./pages/DriverView";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/phone-verification" element={<PhoneVerification />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/become-driver" element={<BecomeDriver />} />
          <Route path="/service/:serviceId" element={<ServiceBooking />} />
          <Route path="/login-phone-verification" element={<LoginPhoneVerification />} />
          <Route path="/driver-phone-verification" element={<DriverPhoneVerification />} />
          <Route path="/login-driver-phone-verification" element={<LoginDriverPhoneVerification />} />
          <Route path="/airport-services" element={<AirportServicesForm />} />
          <Route path="/driver-dashboard" element={<DriverDashboard />} />
          <Route path="/account" element={<Account />} />
          <Route path="/admin-dashboard" element={<Admindashboard />} />
          <Route path="/driver-view" element={<DriverView />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
