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
  
  const [formData, setFormData] = useState({
    pickupLocation: '',
    dropoffLocation: '',
    date: '',
    time: '',
    specialRequests: ''
  });

  const serviceDetails = {
    'rent-car': {
      title: 'Rent a Car',
      description: 'Book a self-drive rental car',
      fields: ['pickupLocation', 'date', 'time', 'specialRequests']
    },
    'airport': {
      title: 'Airport Services',
      description: 'Airport pickup and drop-off service',
      fields: ['pickupLocation', 'dropoffLocation', 'date', 'time', 'specialRequests']
    },
    'intercity': {
      title: 'Intercity Travel',
      description: 'Travel between cities comfortably',
      fields: ['pickupLocation', 'dropoffLocation', 'date', 'time', 'specialRequests']
    },
    'trip': {
      title: 'Day Trip',
      description: 'City exploration packages',
      fields: ['pickupLocation', 'date', 'time', 'specialRequests']
    },
    'corporate': {
      title: 'Corporate Driver',
      description: 'Professional business transportation',
      fields: ['pickupLocation', 'dropoffLocation', 'date', 'time', 'specialRequests']
    },
    'events': {
      title: 'Events',
      description: 'Special occasion transportation',
      fields: ['pickupLocation', 'dropoffLocation', 'date', 'time', 'specialRequests']
    },
    'outstation': {
      title: 'Outstation Travel',
      description: 'Long distance travel service',
      fields: ['pickupLocation', 'dropoffLocation', 'date', 'time', 'specialRequests']
    }
  };

  const currentService = serviceDetails[serviceId as keyof typeof serviceDetails];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking Submitted",
      description: "Your booking request has been submitted successfully. We'll contact you shortly.",
    });
    navigate('/dashboard');
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
                {currentService.fields.includes('pickupLocation') && (
                  <div className="space-y-2">
                    <Label htmlFor="pickup" className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      Pickup Location
                    </Label>
                    <Input
                      id="pickup"
                      placeholder="Enter pickup address"
                      value={formData.pickupLocation}
                      onChange={(e) => handleInputChange('pickupLocation', e.target.value)}
                      required
                    />
                    <Button 
                      type="button" 
                      variant="outline" 
                      size="sm"
                      className="w-full"
                    >
                      Choose on Map
                    </Button>
                  </div>
                )}

                {currentService.fields.includes('dropoffLocation') && (
                  <div className="space-y-2">
                    <Label htmlFor="dropoff" className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      Drop-off Location
                    </Label>
                    <Input
                      id="dropoff"
                      placeholder="Enter drop-off address"
                      value={formData.dropoffLocation}
                      onChange={(e) => handleInputChange('dropoffLocation', e.target.value)}
                      required
                    />
                    <Button 
                      type="button" 
                      variant="outline" 
                      size="sm"
                      className="w-full"
                    >
                      Choose on Map
                    </Button>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentService.fields.includes('date') && (
                    <div className="space-y-2">
                      <Label htmlFor="date" className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        Date
                      </Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => handleInputChange('date', e.target.value)}
                        required
                      />
                    </div>
                  )}

                  {currentService.fields.includes('time') && (
                    <div className="space-y-2">
                      <Label htmlFor="time" className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        Time
                      </Label>
                      <Input
                        id="time"
                        type="time"
                        value={formData.time}
                        onChange={(e) => handleInputChange('time', e.target.value)}
                        required
                      />
                    </div>
                  )}
                </div>

                {currentService.fields.includes('specialRequests') && (
                  <div className="space-y-2">
                    <Label htmlFor="requests">Special Requests</Label>
                    <Textarea
                      id="requests"
                      placeholder="Any special requirements or preferences..."
                      value={formData.specialRequests}
                      onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                      rows={3}
                    />
                  </div>
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