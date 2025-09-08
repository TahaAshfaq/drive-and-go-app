"use client"
import { useNavigate } from "react-router-dom";
import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Upload, FileText, } from "lucide-react"
import {
  User,
  History,
  CreditCard,
  HeadphonesIcon,
  Bell,      
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { IconButton } from "@/components/ui/icon-button"; // You can create this as a wrapper over lucide icons

const Account = () => {
      const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
      const navigate = useNavigate();
  const [profilePic, setProfilePic] = useState(null)
  const [phoneNumber, setPhoneNumber] = useState("")
  const [fullName, setFullName] = useState("")
  const [dragStates, setDragStates] = useState({
    profile: false,
    phoneNumber: false,
    fullName: false,
  })

  const formatCNIC = (value) => {
    const cleaned = value.replace(/\D/g, "")
    const match = cleaned.match(/^(\d{0,5})(\d{0,7})(\d{0,1})$/)
    if (match) {
      return [match[1], match[2], match[3]].filter(Boolean).join("-")
    }
    return cleaned
  }

   const navItems = [
    { title: "Ride History", icon: History, route: "/history" },
    { title: "Support", icon: HeadphonesIcon, route: "/support" },
    { title: "", icon: Bell, route: "/notifications" },
    { title: "", icon: User, route: "/account" },

  ];

  const handleDragOver = (e, type) => {
    e.preventDefault()
    setDragStates((prev) => ({ ...prev, [type]: true }))
  }

  const handleDragLeave = (e, type) => {
    e.preventDefault()
    setDragStates((prev) => ({ ...prev, [type]: false }))
  }

  const handleDrop = (e, type, setter) => {
    e.preventDefault()
    setDragStates((prev) => ({ ...prev, [type]: false }))
    const files = e.dataTransfer.files
    if (files[0]) {
      setter(files[0])
    }
  }

  const handleFileChange = (e, setter) => {
    if (e.target.files[0]) {
      setter(e.target.files[0])
    }
  }
    const handleLogout = () => navigate("/");


  return (
    <div min-h-screen bg-background>
        {/* Top Navbar */}
              <nav className="bg-card border-b sticky top-0 z-50 shadow-sm">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                  <h1 className="text-2xl font-bold text-primary" onClick={handleLogout}>Drive & Go</h1>
                  <div className="hidden md:flex items-center gap-0">
                    {navItems.map((item) => (
                      <Button
                        key={item.title}
                        variant="ghost"
                        className="flex items-center gap-2"
                        onClick={() => navigate(item.route)}
                      >
                        <item.icon className="h-4 w-4" />
                        {item.title}
                      </Button>
                    ))}
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  >
                    {mobileMenuOpen ? <X /> : <Menu />}
                  </Button>
                </div>
                {mobileMenuOpen && (
                  <div className="md:hidden px-4 py-2 border-t">
                    {navItems.map((item) => (
                      <Button
                        key={item.title}
                        variant="ghost"
                        className="w-full justify-start"
                        onClick={() => {
                          navigate(item.route);
                          setMobileMenuOpen(false);
                        }}
                      >
                        <item.icon className="h-4 w-4 mr-2" />
                        {item.title}
                      </Button>
                    ))}
                    <Button variant="outline" className="w-full justify-start" onClick={handleLogout}>
                      <LogOut className="h-4 w-4 mr-2" /> Logout
                    </Button>
                  </div>
                )}
              </nav>
<div className="flex items-center justify-center min-h-screen -mt-20">
  <Card className="max-w-lg w-full bg-card border-0">
    <CardContent className="space-y-6">
          <div className="flex flex-col items-center gap-4">
            <div
              className={`relative group cursor-pointer transition-all duration-300 ${
                dragStates.profile ? "scale-105" : ""
              }`}
              onDragOver={(e) => handleDragOver(e, "profile")}
              onDragLeave={(e) => handleDragLeave(e, "profile")}
              onDrop={(e) => handleDrop(e, "profile", setProfilePic)}
              onClick={() => document.getElementById("profile-input").click()}
            >
              <Avatar className="h-24 w-24 border-2 border-dashed border-muted-foreground/30 group-hover:border-primary/50 transition-colors">
                {profilePic ? (
                  <AvatarImage src={URL.createObjectURL(profilePic) || "/placeholder.svg"} alt="Profile" />
                ) : (
                  <AvatarFallback className="bg-muted/50 group-hover:bg-muted transition-colors">
                    <User className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
                  </AvatarFallback>
                )}
              </Avatar>
              {dragStates.profile && (
                <div className="absolute inset-0 bg-primary/10 rounded-full flex items-center justify-center">
                  <Upload className="h-6 w-6 text-primary" />
                </div>
              )}
            </div>
            <input
              id="profile-input"
              type="file"
              accept="image/*"
              onChange={(e) => handleFileChange(e, setProfilePic)}
              className="hidden"
            />
            <span className="text-muted-foreground text-sm font-medium">Drop profile picture or click to upload</span>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground flex items-center gap-2">
              <CreditCard className="h-4 w-4 text-primary" />
              Phone number
            </label>
            <Input
              type="text"
              placeholder="0300-1234567-1"
              value={phoneNumber}
              className="font-mono tracking-wider"
              maxLength={11}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground flex items-center gap-2">
              <CreditCard className="h-4 w-4 text-primary" />
              Full name
            </label>
            <Input
              type="text"
              placeholder="Taha Ashfaq"
              value={fullName}
              className="font-mono tracking-wider"
              maxLength={11}
            />
          </div>
          <Button className="w-full mt-6" variant="hero">
            Update Profile
          </Button>
          <Button variant="outline" className="w-full justify-centers" onClick={handleLogout}>
              <LogOut className="h-4 w-4" /> Logout
            </Button>
        </CardContent>
      </Card>
    </div></div>
  )
}

export default Account
