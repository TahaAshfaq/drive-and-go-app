"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useNavigation } from "./navigation-context"
import { ArrowLeft, Car, Upload, FileText, CheckCircle } from "lucide-react"
import { useState } from "react"
import { useMobile } from "../hooks/use-mobile"

export default function CarRegistrationScreen() {
  const { goBack } = useNavigation()
  const isMobile = useMobile()
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Vehicle Information
    make: "",
    model: "",
    year: "",
    color: "",
    licensePlate: "",
    vin: "",
    engineNumber: "",
    fuelType: "",
    transmission: "",
    seatingCapacity: "",

    // Registration Details
    registrationNumber: "",
    registrationDate: "",
    registrationExpiry: "",
    registeredOwner: "",

    // Insurance Information
    insuranceCompany: "",
    policyNumber: "",
    insuranceExpiry: "",
    coverageAmount: "",

    // Technical Details
    engineCapacity: "",
    mileage: "",
    condition: "",
    purchaseDate: "",
    purchasePrice: "",

    // Assignment
    assignedDriver: "",
    operatingArea: "",

    // Additional Information
    notes: "",
  })

  const [uploadedDocuments, setUploadedDocuments] = useState([
    { name: "Registration Certificate", uploaded: false, required: true },
    { name: "Insurance Policy", uploaded: false, required: true },
    { name: "Fitness Certificate", uploaded: false, required: true },
    { name: "Route Permit", uploaded: false, required: false },
    { name: "Vehicle Photos", uploaded: false, required: true },
    { name: "Purchase Invoice", uploaded: false, required: false },
  ])

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleDocumentUpload = (index: number) => {
    setUploadedDocuments((prev) => prev.map((doc, i) => (i === index ? { ...doc, uploaded: true } : doc)))
  }

  const nextStep = () => {
    if (currentStep < 4) {
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
    console.log("Submitting vehicle registration:", formData)
    // Navigate back or show success message
    goBack()
  }

  const steps = [
    { number: 1, title: "Vehicle Information", description: "Basic vehicle details" },
    { number: 2, title: "Registration & Insurance", description: "Legal documentation" },
    { number: 3, title: "Technical & Financial", description: "Technical specs and costs" },
    { number: 4, title: "Assignment & Documents", description: "Driver assignment and file uploads" },
  ]

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="make">Make *</Label>
                <Select value={formData.make} onValueChange={(value) => handleInputChange("make", value)}>
                  <SelectTrigger className="rounded-none">
                    <SelectValue placeholder="Select make" />
                  </SelectTrigger>
                  <SelectContent className="rounded-none">
                    <SelectItem value="toyota">Toyota</SelectItem>
                    <SelectItem value="honda">Honda</SelectItem>
                    <SelectItem value="nissan">Nissan</SelectItem>
                    <SelectItem value="hyundai">Hyundai</SelectItem>
                    <SelectItem value="suzuki">Suzuki</SelectItem>
                    <SelectItem value="kia">KIA</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="model">Model *</Label>
                <Input
                  id="model"
                  value={formData.model}
                  onChange={(e) => handleInputChange("model", e.target.value)}
                  placeholder="e.g., Camry, Accord, Altima"
                  className="rounded-none"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="year">Year *</Label>
                <Select value={formData.year} onValueChange={(value) => handleInputChange("year", value)}>
                  <SelectTrigger className="rounded-none">
                    <SelectValue placeholder="Select year" />
                  </SelectTrigger>
                  <SelectContent className="rounded-none">
                    {Array.from({ length: 15 }, (_, i) => 2025 - i).map((year) => (
                      <SelectItem key={year} value={year.toString()}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="color">Color *</Label>
                <Select value={formData.color} onValueChange={(value) => handleInputChange("color", value)}>
                  <SelectTrigger className="rounded-none">
                    <SelectValue placeholder="Select color" />
                  </SelectTrigger>
                  <SelectContent className="rounded-none">
                    <SelectItem value="white">White</SelectItem>
                    <SelectItem value="black">Black</SelectItem>
                    <SelectItem value="silver">Silver</SelectItem>
                    <SelectItem value="gray">Gray</SelectItem>
                    <SelectItem value="blue">Blue</SelectItem>
                    <SelectItem value="red">Red</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="licensePlate">License Plate *</Label>
                <Input
                  id="licensePlate"
                  value={formData.licensePlate}
                  onChange={(e) => handleInputChange("licensePlate", e.target.value)}
                  placeholder="e.g., ABC-123"
                  className="rounded-none"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="vin">VIN Number *</Label>
                <Input
                  id="vin"
                  value={formData.vin}
                  onChange={(e) => handleInputChange("vin", e.target.value)}
                  placeholder="17-character VIN"
                  className="rounded-none"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="engineNumber">Engine Number</Label>
                <Input
                  id="engineNumber"
                  value={formData.engineNumber}
                  onChange={(e) => handleInputChange("engineNumber", e.target.value)}
                  placeholder="Engine number"
                  className="rounded-none"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="fuelType">Fuel Type *</Label>
                <Select value={formData.fuelType} onValueChange={(value) => handleInputChange("fuelType", value)}>
                  <SelectTrigger className="rounded-none">
                    <SelectValue placeholder="Select fuel type" />
                  </SelectTrigger>
                  <SelectContent className="rounded-none">
                    <SelectItem value="petrol">Petrol</SelectItem>
                    <SelectItem value="diesel">Diesel</SelectItem>
                    <SelectItem value="cng">CNG</SelectItem>
                    <SelectItem value="hybrid">Hybrid</SelectItem>
                    <SelectItem value="electric">Electric</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="transmission">Transmission *</Label>
                <Select
                  value={formData.transmission}
                  onValueChange={(value) => handleInputChange("transmission", value)}
                >
                  <SelectTrigger className="rounded-none">
                    <SelectValue placeholder="Select transmission" />
                  </SelectTrigger>
                  <SelectContent className="rounded-none">
                    <SelectItem value="manual">Manual</SelectItem>
                    <SelectItem value="automatic">Automatic</SelectItem>
                    <SelectItem value="cvt">CVT</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="seatingCapacity">Seating Capacity *</Label>
                <Select
                  value={formData.seatingCapacity}
                  onValueChange={(value) => handleInputChange("seatingCapacity", value)}
                >
                  <SelectTrigger className="rounded-none">
                    <SelectValue placeholder="Select capacity" />
                  </SelectTrigger>
                  <SelectContent className="rounded-none">
                    <SelectItem value="2">2 Seater</SelectItem>
                    <SelectItem value="4">4 Seater</SelectItem>
                    <SelectItem value="5">5 Seater</SelectItem>
                    <SelectItem value="7">7 Seater</SelectItem>
                    <SelectItem value="8">8 Seater</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="registrationNumber">Registration Number *</Label>
                <Input
                  id="registrationNumber"
                  value={formData.registrationNumber}
                  onChange={(e) => handleInputChange("registrationNumber", e.target.value)}
                  placeholder="Registration number"
                  className="rounded-none"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="registrationDate">Registration Date *</Label>
                <Input
                  id="registrationDate"
                  type="date"
                  value={formData.registrationDate}
                  onChange={(e) => handleInputChange("registrationDate", e.target.value)}
                  className="rounded-none"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="registrationExpiry">Registration Expiry *</Label>
                <Input
                  id="registrationExpiry"
                  type="date"
                  value={formData.registrationExpiry}
                  onChange={(e) => handleInputChange("registrationExpiry", e.target.value)}
                  className="rounded-none"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="registeredOwner">Registered Owner *</Label>
                <Input
                  id="registeredOwner"
                  value={formData.registeredOwner}
                  onChange={(e) => handleInputChange("registeredOwner", e.target.value)}
                  placeholder="Owner name"
                  className="rounded-none"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="insuranceCompany">Insurance Company *</Label>
                <Input
                  id="insuranceCompany"
                  value={formData.insuranceCompany}
                  onChange={(e) => handleInputChange("insuranceCompany", e.target.value)}
                  placeholder="Insurance company name"
                  className="rounded-none"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="policyNumber">Policy Number *</Label>
                <Input
                  id="policyNumber"
                  value={formData.policyNumber}
                  onChange={(e) => handleInputChange("policyNumber", e.target.value)}
                  placeholder="Insurance policy number"
                  className="rounded-none"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="insuranceExpiry">Insurance Expiry *</Label>
                <Input
                  id="insuranceExpiry"
                  type="date"
                  value={formData.insuranceExpiry}
                  onChange={(e) => handleInputChange("insuranceExpiry", e.target.value)}
                  className="rounded-none"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="coverageAmount">Coverage Amount</Label>
                <Input
                  id="coverageAmount"
                  value={formData.coverageAmount}
                  onChange={(e) => handleInputChange("coverageAmount", e.target.value)}
                  placeholder="e.g., $50,000"
                  className="rounded-none"
                />
              </div>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="engineCapacity">Engine Capacity</Label>
                <Input
                  id="engineCapacity"
                  value={formData.engineCapacity}
                  onChange={(e) => handleInputChange("engineCapacity", e.target.value)}
                  placeholder="e.g., 1.8L, 2000cc"
                  className="rounded-none"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="mileage">Current Mileage</Label>
                <Input
                  id="mileage"
                  value={formData.mileage}
                  onChange={(e) => handleInputChange("mileage", e.target.value)}
                  placeholder="e.g., 45,000 km"
                  className="rounded-none"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="condition">Vehicle Condition *</Label>
                <Select value={formData.condition} onValueChange={(value) => handleInputChange("condition", value)}>
                  <SelectTrigger className="rounded-none">
                    <SelectValue placeholder="Select condition" />
                  </SelectTrigger>
                  <SelectContent className="rounded-none">
                    <SelectItem value="excellent">Excellent</SelectItem>
                    <SelectItem value="good">Good</SelectItem>
                    <SelectItem value="fair">Fair</SelectItem>
                    <SelectItem value="poor">Poor</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="purchaseDate">Purchase Date</Label>
                <Input
                  id="purchaseDate"
                  type="date"
                  value={formData.purchaseDate}
                  onChange={(e) => handleInputChange("purchaseDate", e.target.value)}
                  className="rounded-none"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="purchasePrice">Purchase Price</Label>
                <Input
                  id="purchasePrice"
                  value={formData.purchasePrice}
                  onChange={(e) => handleInputChange("purchasePrice", e.target.value)}
                  placeholder="e.g., $25,000"
                  className="rounded-none"
                />
              </div>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            {/* Driver Assignment */}
            <Card className="rounded-none shadow-none">
              <CardHeader>
                <CardTitle>Driver Assignment</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="assignedDriver">Assigned Driver</Label>
                    <Select
                      value={formData.assignedDriver}
                      onValueChange={(value) => handleInputChange("assignedDriver", value)}
                    >
                      <SelectTrigger className="rounded-none">
                        <SelectValue placeholder="Select driver (optional)" />
                      </SelectTrigger>
                      <SelectContent className="rounded-none">
                        <SelectItem value="DR001">John Cooper</SelectItem>
                        <SelectItem value="DR002">Sarah Chen</SelectItem>
                        <SelectItem value="DR003">Michael Ross</SelectItem>
                        <SelectItem value="DR004">Emma Wilson</SelectItem>
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
                </div>
              </CardContent>
            </Card>

            {/* Document Upload */}
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

            {/* Additional Notes */}
            <Card className="rounded-none shadow-none">
              <CardHeader>
                <CardTitle>Additional Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Label htmlFor="notes">Notes</Label>
                  <Textarea
                    id="notes"
                    value={formData.notes}
                    onChange={(e) => handleInputChange("notes", e.target.value)}
                    placeholder="Any additional information about the vehicle..."
                    className="rounded-none min-h-[100px]"
                  />
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
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <Car className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-900">Register New Vehicle</h1>
              <p className="text-sm text-gray-600">Add a new vehicle to your fleet</p>
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
                    currentStep >= step.number ? "bg-orange-600 text-white" : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {currentStep > step.number ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <span className="text-sm font-medium">{step.number}</span>
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-full h-1 mx-4 ${currentStep > step.number ? "bg-orange-600" : "bg-gray-200"}`} />
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
            {currentStep < 4 ? (
              <Button onClick={nextStep} className="bg-orange-600 hover:bg-orange-700 text-white rounded-none">
                Next Step
              </Button>
            ) : (
              <Button onClick={handleSubmit} className="bg-green-600 hover:bg-green-700 text-white rounded-none">
                <CheckCircle className="w-4 h-4 mr-2" />
                Register Vehicle
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
