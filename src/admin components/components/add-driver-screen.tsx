"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useNavigation } from "./navigation-context"
import { ArrowLeft, User, Upload, FileText, CheckCircle, AlertTriangle, Camera } from "lucide-react"
import { useState } from "react"
import { useMobile } from "../hooks/use-mobile"

export default function AddDriverScreen() {
  const { goBack } = useNavigation()
  const isMobile = useMobile()
  const [currentStep, setCurrentStep] = useState(1)
  const [profilePhoto, setProfilePhoto] = useState("")
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    nationality: "",
    cnic: "",
    phone: "",
    email: "",
    emergencyContact: "",
    emergencyPhone: "",

    // Address Information
    currentAddress: "",
    permanentAddress: "",
    city: "",
    postalCode: "",

    // License Information
    licenseNumber: "",
    licenseType: "",
    licenseIssueDate: "",
    licenseExpiryDate: "",
    licenseIssuingAuthority: "",

    // Experience & Skills
    drivingExperience: "",
    previousEmployer: "",
    vehicleTypes: "",
    languages: "",

    // Bank Information
    bankName: "",
    accountNumber: "",
    accountTitle: "",
    branchCode: "",

    // Vehicle Assignment
    assignedVehicle: "",
    operatingArea: "",
    workingHours: "",

    // Additional Information
    medicalConditions: "",
    criminalRecord: "",
    references: "",
    notes: "",
  })

  const [uploadedDocuments, setUploadedDocuments] = useState([
    { name: "Driver License", uploaded: false, required: true },
    { name: "CNIC Copy", uploaded: false, required: true },
    { name: "Medical Certificate", uploaded: false, required: true },
    { name: "Police Character Certificate", uploaded: false, required: true },
    { name: "Experience Certificate", uploaded: false, required: false },
    { name: "Bank Statement", uploaded: false, required: false },
    { name: "Reference Letters", uploaded: false, required: false },
  ])

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleDocumentUpload = (index: number) => {
    setUploadedDocuments((prev) => prev.map((doc, i) => (i === index ? { ...doc, uploaded: true } : doc)))
  }

  const handlePhotoUpload = () => {
    // Simulate photo upload
    setProfilePhoto("/driver-profile.png")
  }

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = () => {
    // Handle form submission
    console.log("Submitting driver registration:", formData)
    // Navigate back or show success message
    goBack()
  }

  const steps = [
    { number: 1, title: "Personal Information", description: "Basic personal details" },
    { number: 2, title: "License & Experience", description: "Driving credentials" },
    { number: 3, title: "Banking & Assignment", description: "Payment and vehicle details" },
    { number: 4, title: "Documents Upload", description: "Required documentation" },
    { number: 5, title: "Review & Submit", description: "Final review" },
  ]

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            {/* Profile Photo */}
            <div className="flex flex-col items-center space-y-4">
              <Avatar className="w-24 h-24">
                <AvatarImage src={profilePhoto || "/placeholder.svg"} className="rounded-full" />
                <AvatarFallback className="rounded-full text-lg">
                  <Camera className="w-8 h-8 text-gray-400" />
                </AvatarFallback>
              </Avatar>
              <Button variant="outline" onClick={handlePhotoUpload} className="rounded-none bg-transparent">
                <Upload className="w-4 h-4 mr-2" />
                Upload Photo
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  placeholder="Enter first name"
                  className="rounded-none"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  placeholder="Enter last name"
                  className="rounded-none"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                  className="rounded-none"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="gender">Gender *</Label>
                <Select value={formData.gender} onValueChange={(value) => handleInputChange("gender", value)}>
                  <SelectTrigger className="rounded-none">
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent className="rounded-none">
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="nationality">Nationality *</Label>
                <Input
                  id="nationality"
                  value={formData.nationality}
                  onChange={(e) => handleInputChange("nationality", e.target.value)}
                  placeholder="e.g., Pakistani"
                  className="rounded-none"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cnic">CNIC Number *</Label>
                <Input
                  id="cnic"
                  value={formData.cnic}
                  onChange={(e) => handleInputChange("cnic", e.target.value)}
                  placeholder="e.g., 42101-1234567-8"
                  className="rounded-none"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="e.g., +92 300 1234567"
                  className="rounded-none"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="driver@email.com"
                  className="rounded-none"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="emergencyContact">Emergency Contact Name *</Label>
                <Input
                  id="emergencyContact"
                  value={formData.emergencyContact}
                  onChange={(e) => handleInputChange("emergencyContact", e.target.value)}
                  placeholder="Emergency contact name"
                  className="rounded-none"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="emergencyPhone">Emergency Contact Phone *</Label>
                <Input
                  id="emergencyPhone"
                  value={formData.emergencyPhone}
                  onChange={(e) => handleInputChange("emergencyPhone", e.target.value)}
                  placeholder="Emergency contact phone"
                  className="rounded-none"
                />
              </div>
            </div>

            {/* Address Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Address Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="currentAddress">Current Address *</Label>
                  <Textarea
                    id="currentAddress"
                    value={formData.currentAddress}
                    onChange={(e) => handleInputChange("currentAddress", e.target.value)}
                    placeholder="Current residential address"
                    className="rounded-none"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="permanentAddress">Permanent Address</Label>
                  <Textarea
                    id="permanentAddress"
                    value={formData.permanentAddress}
                    onChange={(e) => handleInputChange("permanentAddress", e.target.value)}
                    placeholder="Permanent address (if different)"
                    className="rounded-none"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="city">City *</Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                    placeholder="City name"
                    className="rounded-none"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="postalCode">Postal Code</Label>
                  <Input
                    id="postalCode"
                    value={formData.postalCode}
                    onChange={(e) => handleInputChange("postalCode", e.target.value)}
                    placeholder="Postal code"
                    className="rounded-none"
                  />
                </div>
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            {/* License Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Driving License Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="licenseNumber">License Number *</Label>
                  <Input
                    id="licenseNumber"
                    value={formData.licenseNumber}
                    onChange={(e) => handleInputChange("licenseNumber", e.target.value)}
                    placeholder="Driving license number"
                    className="rounded-none"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="licenseType">License Type *</Label>
                  <Select
                    value={formData.licenseType}
                    onValueChange={(value) => handleInputChange("licenseType", value)}
                  >
                    <SelectTrigger className="rounded-none">
                      <SelectValue placeholder="Select license type" />
                    </SelectTrigger>
                    <SelectContent className="rounded-none">
                      <SelectItem value="light">Light Vehicle (LTV)</SelectItem>
                      <SelectItem value="heavy">Heavy Vehicle (HTV)</SelectItem>
                      <SelectItem value="motorcycle">Motorcycle</SelectItem>
                      <SelectItem value="commercial">Commercial</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="licenseIssueDate">License Issue Date *</Label>
                  <Input
                    id="licenseIssueDate"
                    type="date"
                    value={formData.licenseIssueDate}
                    onChange={(e) => handleInputChange("licenseIssueDate", e.target.value)}
                    className="rounded-none"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="licenseExpiryDate">License Expiry Date *</Label>
                  <Input
                    id="licenseExpiryDate"
                    type="date"
                    value={formData.licenseExpiryDate}
                    onChange={(e) => handleInputChange("licenseExpiryDate", e.target.value)}
                    className="rounded-none"
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="licenseIssuingAuthority">Issuing Authority</Label>
                  <Input
                    id="licenseIssuingAuthority"
                    value={formData.licenseIssuingAuthority}
                    onChange={(e) => handleInputChange("licenseIssuingAuthority", e.target.value)}
                    placeholder="e.g., Karachi Traffic Police"
                    className="rounded-none"
                  />
                </div>
              </div>
            </div>

            {/* Experience & Skills */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Experience & Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="drivingExperience">Driving Experience *</Label>
                  <Select
                    value={formData.drivingExperience}
                    onValueChange={(value) => handleInputChange("drivingExperience", value)}
                  >
                    <SelectTrigger className="rounded-none">
                      <SelectValue placeholder="Select experience" />
                    </SelectTrigger>
                    <SelectContent className="rounded-none">
                      <SelectItem value="1-2">1-2 years</SelectItem>
                      <SelectItem value="3-5">3-5 years</SelectItem>
                      <SelectItem value="6-10">6-10 years</SelectItem>
                      <SelectItem value="10+">10+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="vehicleTypes">Vehicle Types Experience</Label>
                  <Input
                    id="vehicleTypes"
                    value={formData.vehicleTypes}
                    onChange={(e) => handleInputChange("vehicleTypes", e.target.value)}
                    placeholder="e.g., Sedan, SUV, Hatchback"
                    className="rounded-none"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="previousEmployer">Previous Employer</Label>
                  <Input
                    id="previousEmployer"
                    value={formData.previousEmployer}
                    onChange={(e) => handleInputChange("previousEmployer", e.target.value)}
                    placeholder="Previous company/employer"
                    className="rounded-none"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="languages">Languages Spoken</Label>
                  <Input
                    id="languages"
                    value={formData.languages}
                    onChange={(e) => handleInputChange("languages", e.target.value)}
                    placeholder="e.g., Urdu, English, Punjabi"
                    className="rounded-none"
                  />
                </div>
              </div>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            {/* Banking Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Banking Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="bankName">Bank Name *</Label>
                  <Select value={formData.bankName} onValueChange={(value) => handleInputChange("bankName", value)}>
                    <SelectTrigger className="rounded-none">
                      <SelectValue placeholder="Select bank" />
                    </SelectTrigger>
                    <SelectContent className="rounded-none">
                      <SelectItem value="hbl">HBL</SelectItem>
                      <SelectItem value="ubl">UBL</SelectItem>
                      <SelectItem value="mcb">MCB</SelectItem>
                      <SelectItem value="allied">Allied Bank</SelectItem>
                      <SelectItem value="nbp">NBP</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="accountNumber">Account Number *</Label>
                  <Input
                    id="accountNumber"
                    value={formData.accountNumber}
                    onChange={(e) => handleInputChange("accountNumber", e.target.value)}
                    placeholder="Bank account number"
                    className="rounded-none"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="accountTitle">Account Title *</Label>
                  <Input
                    id="accountTitle"
                    value={formData.accountTitle}
                    onChange={(e) => handleInputChange("accountTitle", e.target.value)}
                    placeholder="Account holder name"
                    className="rounded-none"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="branchCode">Branch Code</Label>
                  <Input
                    id="branchCode"
                    value={formData.branchCode}
                    onChange={(e) => handleInputChange("branchCode", e.target.value)}
                    placeholder="Branch code"
                    className="rounded-none"
                  />
                </div>
              </div>
            </div>

            {/* Vehicle Assignment */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Vehicle Assignment</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="assignedVehicle">Assigned Vehicle</Label>
                  <Select
                    value={formData.assignedVehicle}
                    onValueChange={(value) => handleInputChange("assignedVehicle", value)}
                  >
                    <SelectTrigger className="rounded-none">
                      <SelectValue placeholder="Select vehicle (optional)" />
                    </SelectTrigger>
                    <SelectContent className="rounded-none">
                      <SelectItem value="VH001">Toyota Camry 2022 (ABC-123)</SelectItem>
                      <SelectItem value="VH002">Honda Accord 2023 (XYZ-789)</SelectItem>
                      <SelectItem value="VH003">Nissan Altima 2021 (DEF-456)</SelectItem>
                      <SelectItem value="unassigned">Leave Unassigned</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="operatingArea">Operating Area</Label>
                  <Select
                    value={formData.operatingArea}
                    onValueChange={(value) => handleInputChange("operatingArea", value)}
                  >
                    <SelectTrigger className="rounded-none">
                      <SelectValue placeholder="Select area" />
                    </SelectTrigger>
                    <SelectContent className="rounded-none">
                      <SelectItem value="downtown">Downtown</SelectItem>
                      <SelectItem value="airport">Airport</SelectItem>
                      <SelectItem value="westpark">Westpark</SelectItem>
                      <SelectItem value="university">University Area</SelectItem>
                      <SelectItem value="citywide">City Wide</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="workingHours">Preferred Working Hours</Label>
                  <Select
                    value={formData.workingHours}
                    onValueChange={(value) => handleInputChange("workingHours", value)}
                  >
                    <SelectTrigger className="rounded-none">
                      <SelectValue placeholder="Select working hours" />
                    </SelectTrigger>
                    <SelectContent className="rounded-none">
                      <SelectItem value="morning">Morning Shift (6 AM - 2 PM)</SelectItem>
                      <SelectItem value="evening">Evening Shift (2 PM - 10 PM)</SelectItem>
                      <SelectItem value="night">Night Shift (10 PM - 6 AM)</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Additional Information</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="medicalConditions">Medical Conditions</Label>
                  <Textarea
                    id="medicalConditions"
                    value={formData.medicalConditions}
                    onChange={(e) => handleInputChange("medicalConditions", e.target.value)}
                    placeholder="Any medical conditions that may affect driving (optional)"
                    className="rounded-none"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="criminalRecord">Criminal Record Declaration</Label>
                  <Select
                    value={formData.criminalRecord}
                    onValueChange={(value) => handleInputChange("criminalRecord", value)}
                  >
                    <SelectTrigger className="rounded-none">
                      <SelectValue placeholder="Select declaration" />
                    </SelectTrigger>
                    <SelectContent className="rounded-none">
                      <SelectItem value="none">No criminal record</SelectItem>
                      <SelectItem value="minor">Minor offenses only</SelectItem>
                      <SelectItem value="disclosed">Will disclose separately</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="references">References</Label>
                  <Textarea
                    id="references"
                    value={formData.references}
                    onChange={(e) => handleInputChange("references", e.target.value)}
                    placeholder="Professional references (name, contact, relationship)"
                    className="rounded-none"
                  />
                </div>
              </div>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <Card className="rounded-none shadow-none">
              <CardHeader>
                <CardTitle>Required Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {uploadedDocuments.map((doc, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-gray-200">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            doc.uploaded ? "bg-green-100" : "bg-gray-100"
                          }`}
                        >
                          {doc.uploaded ? (
                            <CheckCircle className="w-4 h-4 text-green-600" />
                          ) : (
                            <FileText className="w-4 h-4 text-gray-400" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">
                            {doc.name}
                            {doc.required && <span className="text-red-500 ml-1">*</span>}
                          </p>
                          <p className="text-sm text-gray-500">{doc.required ? "Required" : "Optional"}</p>
                        </div>
                      </div>
                      <Button
                        variant={doc.uploaded ? "outline" : "default"}
                        size="sm"
                        className="rounded-none"
                        onClick={() => handleDocumentUpload(index)}
                      >
                        <Upload className="w-4 h-4 mr-2" />
                        {doc.uploaded ? "Uploaded" : "Upload"}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-none shadow-none">
              <CardHeader>
                <CardTitle>Additional Notes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Label htmlFor="notes">Notes</Label>
                  <Textarea
                    id="notes"
                    value={formData.notes}
                    onChange={(e) => handleInputChange("notes", e.target.value)}
                    placeholder="Any additional information about the driver..."
                    className="rounded-none min-h-[100px]"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        )

      case 5:
        return (
          <div className="space-y-6">
            <Card className="rounded-none shadow-none">
              <CardHeader>
                <CardTitle>Review Driver Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Personal Info Summary */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Personal Information</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Name:</span>
                      <span className="ml-2 text-gray-900">
                        {formData.firstName} {formData.lastName}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-600">CNIC:</span>
                      <span className="ml-2 text-gray-900">{formData.cnic}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Phone:</span>
                      <span className="ml-2 text-gray-900">{formData.phone}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Email:</span>
                      <span className="ml-2 text-gray-900">{formData.email}</span>
                    </div>
                  </div>
                </div>

                {/* License Info Summary */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">License Information</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">License Number:</span>
                      <span className="ml-2 text-gray-900">{formData.licenseNumber}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">License Type:</span>
                      <span className="ml-2 text-gray-900">{formData.licenseType}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Experience:</span>
                      <span className="ml-2 text-gray-900">{formData.drivingExperience}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Expiry Date:</span>
                      <span className="ml-2 text-gray-900">{formData.licenseExpiryDate}</span>
                    </div>
                  </div>
                </div>

                {/* Assignment Summary */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Assignment</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Vehicle:</span>
                      <span className="ml-2 text-gray-900">{formData.assignedVehicle || "Unassigned"}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Operating Area:</span>
                      <span className="ml-2 text-gray-900">{formData.operatingArea}</span>
                    </div>
                  </div>
                </div>

                {/* Documents Summary */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Documents Status</h4>
                  <div className="space-y-2">
                    {uploadedDocuments
                      .filter((doc) => doc.required)
                      .map((doc, index) => (
                        <div key={index} className="flex items-center gap-2">
                          {doc.uploaded ? (
                            <CheckCircle className="w-4 h-4 text-green-600" />
                          ) : (
                            <AlertTriangle className="w-4 h-4 text-red-600" />
                          )}
                          <span className={`text-sm ${doc.uploaded ? "text-green-700" : "text-red-700"}`}>
                            {doc.name}: {doc.uploaded ? "Uploaded" : "Missing"}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )

      default:
        return null
    }
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
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <User className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-900">Add New Driver</h1>
              <p className="text-sm text-gray-600">Register a new driver to your fleet</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 md:p-8">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full ${
                    currentStep >= step.number ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {currentStep > step.number ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <span className="text-sm font-medium">{step.number}</span>
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-full h-1 mx-4 ${currentStep > step.number ? "bg-blue-600" : "bg-gray-200"}`} />
                )}
              </div>
            ))}
          </div>
          <div className="text-center">
            <h2 className="text-lg font-semibold text-gray-900">{steps[currentStep - 1].title}</h2>
            <p className="text-sm text-gray-600">{steps[currentStep - 1].description}</p>
          </div>
        </div>

        {/* Form Content */}
        <Card className="rounded-none shadow-none max-w-4xl mx-auto">
          <CardContent className="p-6 md:p-8">{renderStepContent()}</CardContent>
        </Card>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8 max-w-4xl mx-auto">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 1}
            className="rounded-none bg-transparent"
          >
            Previous
          </Button>
          <div className="flex gap-3">
            {currentStep < 5 ? (
              <Button onClick={nextStep} className="bg-blue-600 hover:bg-blue-700 text-white rounded-none">
                Next Step
              </Button>
            ) : (
              <Button onClick={handleSubmit} className="bg-green-600 hover:bg-green-700 text-white rounded-none">
                <CheckCircle className="w-4 h-4 mr-2" />
                Register Driver
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
