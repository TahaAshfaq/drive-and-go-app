import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, DollarSign, Clock, Shield, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BecomeDriver = () => {
  const navigate = useNavigate();

  const benefits = [
    {
      icon: DollarSign,
      title: "Earn More",
      description: "Competitive rates with weekly payouts"
    },
    {
      icon: Clock,
      title: "Flexible Hours",
      description: "Work on your own schedule"
    },
    {
      icon: Shield,
      title: "Insurance Coverage",
      description: "Full protection while driving"
    },
    {
      icon: Star,
      title: "5-Star Support",
      description: "24/7 driver assistance available"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          className="mb-6"
          onClick={() => navigate('/')}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Become a Driver
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join our community of professional drivers and start earning with Drive & Go
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-glow transition-all duration-300">
                <benefit.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </Card>
            ))}
          </div>

          <Card className="shadow-primary/10 shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Ready to Get Started?</CardTitle>
              <CardDescription>
                Complete our simple application process and start driving today
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6 h-auto">
                Apply Now
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Application takes less than 10 minutes
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BecomeDriver;