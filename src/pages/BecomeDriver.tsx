"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, DollarSign, Clock, Shield, Star } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function BecomeDriver() {
  const navigate = useNavigate()

  const benefits = [
    {
      icon: DollarSign,
      title: "Earn More",
      description: "Competitive rates with weekly payouts",
    },
    {
      icon: Clock,
      title: "Flexible Hours",
      description: "Work on your own schedule",
    },
    {
      icon: Shield,
      title: "Insurance Coverage",
      description: "Full protection while driving",
    },
    {
      icon: Star,
      title: "5-Star Support",
      description: "24/7 driver assistance available",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Button variant="ghost" className="mb-6" onClick={() => navigate("/")}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Become a Driver</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Join thousands of drivers earning great money with flexible schedules. Start your journey with Drive &
                Go today and take control of your income.
              </p>
            </div>

            {/* CTA Button */}
           <div className="flex items-center gap-[10px]">
  <Button
    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg"
    onClick={() => navigate("/driver-phone-verification")}
  >
    Apply now
  </Button>
  <Button
    variant="outline"
    className="bg-white text-gray-900 hover:bg-gray-100"
    onClick={() => navigate("/login-driver-phone-verification")}
  >
    Already have an account
  </Button>
</div>

<p className="text-sm text-muted-foreground mt-4">
  ✓ Application takes less than 10 minutes
  <br />✓ Start earning within 24 hours of approval
</p>

          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-primary/10 shadow-lg">
              <img
      src="https://images.unsplash.com/photo-1617646131890-163a0e9e6658?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b3JhbmdlJTIwY2FyfGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=60&w=3000"
                alt="Professional driver in car"
                className="w-full h-[600px] object-cover"
              />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
