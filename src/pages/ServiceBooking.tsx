import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, MapPin, Calendar, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ServiceBooking = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState<Record<string, string>>({});

  const serviceDetails = {
    'rent-car': {
      title: 'Rent a Car',
      description: 'Book a self-drive rental car',
      fields: {
        pickupLocation: { label: 'Pickup Location', type: 'text', required: true },
        date: { label: 'Rental Date', type: 'date', required: true },
        time: { label: 'Pickup Time', type: 'time', required: true },
        returnDate: { label: 'Return Date', type: 'date', required: true },
        carType: { label: 'Car Type', type: 'select', required: true, options: ['Economy', 'Compact', 'Mid-size', 'Full-size', 'Premium', 'Luxury'] }
      }
    },
    'airport': {
      title: 'Airport Services',
      description: 'Airport pickup and drop-off service',
      fields: {
        serviceType: { label: 'Service Type', type: 'select', required: true, options: ['Airport Pickup', 'Airport Drop-off'] },
        pickupLocation: { label: 'Pickup Location', type: 'text', required: true },
        dropoffLocation: { label: 'Drop-off Location', type: 'text', required: true },
        flightNumber: { label: 'Flight Number', type: 'text', required: true },
        date: { label: 'Travel Date', type: 'date', required: true },
        time: { label: 'Flight Time', type: 'time', required: true }
      }
    },
    'intercity': {
      title: 'Intercity Travel',
      description: 'Travel between cities comfortably',
      fields: {
        pickupLocation: { label: 'Pickup City', type: 'text', required: true },
        dropoffLocation: { label: 'Destination City', type: 'text', required: true },
        date: { label: 'Travel Date', type: 'date', required: true },
        time: { label: 'Departure Time', type: 'time', required: true },
        passengers: { label: 'Number of Passengers', type: 'number', required: true, min: 1, max: 8 },
        tripType: { label: 'Trip Type', type: 'select', required: true, options: ['One Way', 'Round Trip'] }
      }
    },
    'trip': {
      title: 'Day Trip',
      description: 'City exploration packages',
      fields: {
        pickupLocation: { label: 'Pickup Location', type: 'text', required: true },
        destinations: { label: 'Places to Visit', type: 'textarea', required: true },
        date: { label: 'Trip Date', type: 'date', required: true },
        time: { label: 'Start Time', type: 'time', required: true },
        duration: { label: 'Trip Duration', type: 'select', required: true, options: ['4 Hours', '8 Hours', '12 Hours', 'Full Day'] },
        passengers: { label: 'Number of Passengers', type: 'number', required: true, min: 1, max: 8 }
      }
    },
    'corporate': {
      title: 'Corporate Driver',
      description: 'Professional business transportation',
      fields: {
        pickupLocation: { label: 'Pickup Location', type: 'text', required: true },
        dropoffLocation: { label: 'Drop-off Location', type: 'text', required: true },
        date: { label: 'Service Date', type: 'date', required: true },
        time: { label: 'Pickup Time', type: 'time', required: true },
        passengers: { label: 'Number of Passengers', type: 'number', required: true, min: 1, max: 4 },
        companyName: { label: 'Company Name', type: 'text', required: true },
        serviceType: { label: 'Service Type', type: 'select', required: true, options: ['Executive Meeting', 'Airport Transfer', 'Client Transport', 'Daily Commute'] }
      }
    },
    'events': {
      title: 'Events',
      description: 'Special occasion transportation',
      fields: {
        pickupLocation: { label: 'Pickup Location', type: 'text', required: true },
        dropoffLocation: { label: 'Event Venue', type: 'text', required: true },
        eventType: { label: 'Event Type', type: 'select', required: true, options: ['Wedding', 'Birthday Party', 'Corporate Event', 'Anniversary', 'Graduation', 'Other'] },
        date: { label: 'Event Date', type: 'date', required: true },
        time: { label: 'Pickup Time', type: 'time', required: true },
        duration: { label: 'Service Duration', type: 'select', required: true, options: ['2 Hours', '4 Hours', '6 Hours', '8 Hours', 'All Day'] },
        passengers: { label: 'Number of Passengers', type: 'number', required: true, min: 1, max: 12 }
      }
    },
    'outstation': {
      title: 'Outstation Travel',
      description: 'Long distance travel service',
      fields: {
        pickupLocation: { label: 'Pickup Location', type: 'text', required: true },
        dropoffLocation: { label: 'Destination', type: 'text', required: true },
        date: { label: 'Departure Date', type: 'date', required: true },
        returnDate: { label: 'Return Date', type: 'date', required: false },
        time: { label: 'Departure Time', type: 'time', required: true },
        passengers: { label: 'Number of Passengers', type: 'number', required: true, min: 1, max: 8 },
        vehicleType: { label: 'Vehicle Type', type: 'select', required: true, options: ['Sedan', 'SUV', 'Tempo Traveller', 'Mini Bus'] }
      }
    }
  };

  const currentService = serviceDetails[serviceId as keyof typeof serviceDetails];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    const missingFields = Object.entries(currentService.fields)
      .filter(([_, config]) => config.required && !formData[_])
      .map(([field]) => field);
    
    if (missingFields.length > 0) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Booking Submitted",
      description: "Your booking request has been submitted successfully. We'll contact you shortly.",
    });
    navigate('/dashboard');
  };

  const renderField = (fieldName: string, config: any) => {
    const { label, type, required, options, min, max } = config;
    
    switch (type) {
      case 'select':
        return (
          <div key={fieldName} className="space-y-2">
            <Label htmlFor={fieldName} className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              {label} {required && <span className="text-destructive">*</span>}
            </Label>
            <select
              id={fieldName}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              value={formData[fieldName] || ''}
              onChange={(e) => handleInputChange(fieldName, e.target.value)}
              required={required}
            >
              <option value="">Select {label}</option>
              {options.map((option: string) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
        );
      
      case 'textarea':
        return (
          <div key={fieldName} className="space-y-2">
            <Label htmlFor={fieldName}>
              {label} {required && <span className="text-destructive">*</span>}
            </Label>
            <Textarea
              id={fieldName}
              placeholder={`Enter ${label.toLowerCase()}`}
              value={formData[fieldName] || ''}
              onChange={(e) => handleInputChange(fieldName, e.target.value)}
              required={required}
              rows={3}
            />
          </div>
        );
      
      case 'number':
        return (
          <div key={fieldName} className="space-y-2">
            <Label htmlFor={fieldName}>
              {label} {required && <span className="text-destructive">*</span>}
            </Label>
            <Input
              id={fieldName}
              type="number"
              min={min}
              max={max}
              placeholder={`Enter ${label.toLowerCase()}`}
              value={formData[fieldName] || ''}
              onChange={(e) => handleInputChange(fieldName, e.target.value)}
              required={required}
            />
          </div>
        );
      
      default:
        return (
          <div key={fieldName} className="space-y-2">
            <Label htmlFor={fieldName} className="flex items-center gap-2">
              {(fieldName.includes('location') || fieldName.includes('Location')) && (
                <MapPin className="h-4 w-4 text-primary" />
              )}
              {fieldName === 'date' && <Calendar className="h-4 w-4 text-primary" />}
              {fieldName === 'time' && <Clock className="h-4 w-4 text-primary" />}
              {label} {required && <span className="text-destructive">*</span>}
            </Label>
            <Input
              id={fieldName}
              type={type}
              placeholder={type === 'text' ? `Enter ${label.toLowerCase()}` : ''}
              value={formData[fieldName] || ''}
              onChange={(e) => handleInputChange(fieldName, e.target.value)}
              required={required}
            />
            {(fieldName.includes('location') || fieldName.includes('Location')) && (
              <Button 
                type="button" 
                variant="outline" 
                size="sm"
                className="w-full"
              >
                Choose on Map
              </Button>
            )}
          </div>
        );
    }
  };

  if (!currentService) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
          <Button onClick={() => navigate('/dashboard')}>
            Return to Dashboard
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          className="mb-6"
          onClick={() => navigate('/dashboard')}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Dashboard
        </Button>

        <div className="max-w-2xl mx-auto">
          <Card className="shadow-primary/10 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">{currentService.title}</CardTitle>
              <CardDescription>{currentService.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {Object.entries(currentService.fields).map(([fieldName, config]) => 
                  renderField(fieldName, config)
                )}

                <div className="pt-4">
                  <Button 
                    type="submit" 
                    variant="hero" 
                    className="w-full"
                    size="lg"
                  >
                    Book Now
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Map Integration Placeholder */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-lg">Location Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Interactive map will be displayed here</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ServiceBooking;