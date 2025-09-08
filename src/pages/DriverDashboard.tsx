"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Upload, FileText, CreditCard, User, Camera } from "lucide-react"

const DriverDashboard = () => {
  const [profilePic, setProfilePic] = useState(null)
  const [cnicPic, setCnicPic] = useState(null)
  const [licensePic, setLicensePic] = useState(null)
  const [applicationDoc, setApplicationDoc] = useState(null)
  const [cnicNumber, setCnicNumber] = useState("")
  const [dragStates, setDragStates] = useState({
    profile: false,
    cnic: false,
    license: false,
    document: false,
  })

  const formatCNIC = (value) => {
    const cleaned = value.replace(/\D/g, "")
    const match = cleaned.match(/^(\d{0,5})(\d{0,7})(\d{0,1})$/)
    if (match) {
      return [match[1], match[2], match[3]].filter(Boolean).join("-")
    }
    return cleaned
  }

  const handleCNICChange = (e) => {
    const formatted = formatCNIC(e.target.value)
    if (formatted.replace(/-/g, "").length <= 13) {
      setCnicNumber(formatted)
    }
  }

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

  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-12">
      <Card className="max-w-lg w-full shadow-lg border border-border bg-card">
        <CardHeader>
          <CardTitle className="text-primary text-2xl">Driver Dashboard</CardTitle>
        </CardHeader>
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
              <div className="absolute -bottom-2 -right-2 bg-primary rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                <Camera className="h-3 w-3 text-primary-foreground" />
              </div>
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
              CNIC Number
            </label>
            <Input
              type="text"
              placeholder="12345-1234567-1"
              value={cnicNumber}
              onChange={handleCNICChange}
              className="font-mono tracking-wider"
              maxLength={15}
            />
            <span className="text-xs text-muted-foreground">Format: 12345-1234567-1</span>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground flex items-center gap-2">
              <CreditCard className="h-4 w-4 text-primary" />
              CNIC Picture
            </label>
            <div
              className={`border-2 border-dashed rounded-lg p-6 text-center transition-all duration-300 cursor-pointer ${
                dragStates.cnic
                  ? "border-primary bg-primary/5 scale-[1.02]"
                  : "border-muted-foreground/30 hover:border-primary/50 hover:bg-muted/30"
              }`}
              onDragOver={(e) => handleDragOver(e, "cnic")}
              onDragLeave={(e) => handleDragLeave(e, "cnic")}
              onDrop={(e) => handleDrop(e, "cnic", setCnicPic)}
              onClick={() => document.getElementById("cnic-input").click()}
            >
              {cnicPic ? (
                <div className="space-y-2">
                  <img
                    src={URL.createObjectURL(cnicPic) || "/placeholder.svg"}
                    alt="CNIC"
                    className="max-h-20 mx-auto rounded"
                  />
                  <p className="text-sm text-primary font-medium">{cnicPic.name}</p>
                </div>
              ) : (
                <div className="space-y-3">
                  <CreditCard
                    className={`h-8 w-8 mx-auto transition-colors ${
                      dragStates.cnic ? "text-primary" : "text-muted-foreground"
                    }`}
                  />
                  <div>
                    <p className="text-sm font-medium text-foreground">Drop CNIC image here</p>
                    <p className="text-xs text-muted-foreground">or click to browse</p>
                  </div>
                </div>
              )}
            </div>
            <input
              id="cnic-input"
              type="file"
              accept="image/*"
              onChange={(e) => handleFileChange(e, setCnicPic)}
              className="hidden"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground flex items-center gap-2">
              <FileText className="h-4 w-4 text-primary" />
              License Picture
            </label>
            <div
              className={`border-2 border-dashed rounded-lg p-6 text-center transition-all duration-300 cursor-pointer ${
                dragStates.license
                  ? "border-primary bg-primary/5 scale-[1.02]"
                  : "border-muted-foreground/30 hover:border-primary/50 hover:bg-muted/30"
              }`}
              onDragOver={(e) => handleDragOver(e, "license")}
              onDragLeave={(e) => handleDragLeave(e, "license")}
              onDrop={(e) => handleDrop(e, "license", setLicensePic)}
              onClick={() => document.getElementById("license-input").click()}
            >
              {licensePic ? (
                <div className="space-y-2">
                  <img
                    src={URL.createObjectURL(licensePic) || "/placeholder.svg"}
                    alt="License"
                    className="max-h-20 mx-auto rounded"
                  />
                  <p className="text-sm text-primary font-medium">{licensePic.name}</p>
                </div>
              ) : (
                <div className="space-y-3">
                  <FileText
                    className={`h-8 w-8 mx-auto transition-colors ${
                      dragStates.license ? "text-primary" : "text-muted-foreground"
                    }`}
                  />
                  <div>
                    <p className="text-sm font-medium text-foreground">Drop license image here</p>
                    <p className="text-xs text-muted-foreground">or click to browse</p>
                  </div>
                </div>
              )}
            </div>
            <input
              id="license-input"
              type="file"
              accept="image/*"
              onChange={(e) => handleFileChange(e, setLicensePic)}
              className="hidden"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground flex items-center gap-2">
              <Upload className="h-4 w-4 text-primary" />
              Application Document
            </label>
            <div
              className={`border-2 border-dashed rounded-lg p-6 text-center transition-all duration-300 cursor-pointer ${
                dragStates.document
                  ? "border-primary bg-primary/5 scale-[1.02]"
                  : "border-muted-foreground/30 hover:border-primary/50 hover:bg-muted/30"
              }`}
              onDragOver={(e) => handleDragOver(e, "document")}
              onDragLeave={(e) => handleDragLeave(e, "document")}
              onDrop={(e) => handleDrop(e, "document", setApplicationDoc)}
              onClick={() => document.getElementById("document-input").click()}
            >
              {applicationDoc ? (
                <div className="space-y-2">
                  <FileText className="h-8 w-8 mx-auto text-primary" />
                  <p className="text-sm text-primary font-medium">{applicationDoc.name}</p>
                  <p className="text-xs text-muted-foreground">{(applicationDoc.size / 1024).toFixed(1)} KB</p>
                </div>
              ) : (
                <div className="space-y-3">
                  <Upload
                    className={`h-8 w-8 mx-auto transition-colors ${
                      dragStates.document ? "text-primary" : "text-muted-foreground"
                    }`}
                  />
                  <div>
                    <p className="text-sm font-medium text-foreground">Drop application document here</p>
                    <p className="text-xs text-muted-foreground">PDF, DOC, or DOCX files</p>
                  </div>
                </div>
              )}
            </div>
            <input
              id="document-input"
              type="file"
              accept="application/pdf,.doc,.docx"
              onChange={(e) => handleFileChange(e, setApplicationDoc)}
              className="hidden"
            />
          </div>

          <Button className="w-full mt-6" variant="hero">
            Submit Application
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default DriverDashboard
