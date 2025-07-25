import { Button } from "@/components/ui/button";
import { Car, Users, Shield, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-car.jpg";

const Landing = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Car,
      title: "Premium Fleet",
      description: "Choose from our wide range of luxury and economy vehicles"
    },
    {
      icon: Users,
      title: "Professional Drivers",
      description: "Experienced, licensed drivers ensuring your safety"
    },
    {
      icon: Shield,
      title: "Secure & Safe",
      description: "Background-checked drivers and insured rides"
    },
    {
      icon: Clock,
      title: "24/7 Service",
      description: "Available anytime, anywhere in the city"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground animate-slide-in">
              Drive & Go
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-in">
              Your premium car booking experience starts here
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-in">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-8 py-6 h-auto"
                onClick={() => navigate('/phone-verification')}
              >
                <Car className="mr-2 h-6 w-6" />
                Book a Ride
              </Button>
              <Button 
                variant="glass" 
                size="lg" 
                className="text-lg px-8 py-6 h-auto"
                onClick={() => navigate('/become-driver')}
              >
                <Users className="mr-2 h-6 w-6" />
                Become a Driver
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Why Choose Drive & Go?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the best in class car booking service with our premium features
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-card p-6 rounded-lg shadow-primary/10 shadow-lg hover:shadow-glow transition-all duration-300 hover:-translate-y-2"
              >
                <feature.icon className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2 text-center text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-primary-foreground">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Drive & Go for their transportation needs
          </p>
          <Button 
            variant="glass" 
            size="lg" 
            className="text-lg px-8 py-6 h-auto bg-background/20 hover:bg-background/30 text-primary-foreground border-background/30"
            onClick={() => navigate('/phone-verification')}
          >
            Start Your Journey Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Landing;