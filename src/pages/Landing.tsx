import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, MapPin, Shield, DollarSign, User } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"

export default function Landing() {
  const navigate = useNavigate()

  const features = [
    {
      icon: DollarSign,
      title: "Best price guaranteed",
      description: "Find a lower price? We'll refund you 100% of the difference.",
    },
    {
      icon: User,
      title: "Experience Driver",
      description: "Don't have a driver? Don't worry, we have an experienced driver for you.",
    },
    {
      icon: Shield,
      title: "24/7 technical support",
      description: "Contact our customer service any time of day or night.",
    },
  ]

  const services = [
    {
      title: "Airport Services",
      description: "Find a lower price? We'll refund you 100% of the difference.",
      image: "/services/service1.png",
      className: "bg-gradient-to-br from-orange-400 to-orange-600",
    },
    {
      title: "Hotel City Travel",
      description: "Find a lower price? We'll refund you 100% of the difference.",
      image: "/services/service2.png",
      className: "bg-gradient-to-br from-blue-400 to-blue-600",
    },
    {
      title: "Rent a Car",
      description: "Find a lower price? We'll refund you 100% of the difference.",
      image: "/services/service3.png",
      className: "bg-gradient-to-br from-gray-400 to-gray-600",
    },
    {
      title: "For Corporate",
      description: "Find a lower price? We'll refund you 100% of the difference.",
      image: "/services/service4.png",
      className: "bg-gradient-to-br from-gray-600 to-gray-800",
    },
    {
      title: "Trips",
      description: "Find a lower price? We'll refund you 100% of the difference.",
      image: "/services/service5.png",
      className: "bg-gradient-to-br from-blue-600 to-blue-800",
    },
  ]

  const testimonials = [
    {
      name: "Charlie Johnson",
      role: "Happy User (Renter)",
      rating: 5,
      comment:
        "I feel very secure when using carsrent's services. Your customer care team is very enthusiastic and the driver is always on time.",
      avatar: "/testimonial/testimonial1.png",
    },
    {
      name: "Charlie Johnson",
      role: "Happy User (Renter)",
      rating: 5,
      comment:
        "I feel very secure when using carsrent's services. Your customer care team is very enthusiastic and the driver is always on time.",
      avatar: "/testimonial/testimonial2.png",
    },
    {
      name: "Charlie Johnson",
      role: "Happy User (Renter)",
      rating: 5,
      comment:
        "I feel very secure when using carsrent's services. Your customer care team is very enthusiastic and the driver is always on time.",
      avatar: "/testimonial/testimonial3.png",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-semibold">RENTALS</span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-white hover:text-orange-300 transition-colors">RENTALS</a>
              <a href="#" className="text-white hover:text-orange-300 transition-colors">BUSINESS</a>
              <a href="#" className="text-white hover:text-orange-300 transition-colors">OUR SERVICES</a>
              <a href="#" className="text-white hover:text-orange-300 transition-colors">WHY CHOOSE US</a>
              <a href="#" className="text-white hover:text-orange-300 transition-colors">CONTACT</a>
            </nav>

            <Button
                  variant="outline"
                  className="bg-white text-gray-900 hover:bg-gray-100"
                  onClick={() => navigate("/login-phone-verification")}>
            Login
          </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 h-screen">
          <img src="/hero.png" alt="Orange Tesla Model 3 on scenic road" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-medium text-white mb-6 leading-tight">
              Get A Car, Go
              <br />
              Anywhere, Anytime
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Get a car wherever and whenever you
              <br />
              need it with your iOS and Android device.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg"
    onClick={() => navigate("/phone-verification")}
  >
    Book a ride
  </Button>
              <Button
  variant="outline"
  className="border border-white/20 text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg bg-transparent"
  onClick={() => navigate("/become-driver")}
>
  Register as driver
</Button>

            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-orange-500 font-medium mb-2">Why Choose Us</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              We offer the best experience with our rental deals
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-orange-500 font-medium mb-2">Our Services</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              We offer the best experience with our rental deals
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden h-96`}
              >
                <div className="absolute inset-0">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover object-center" style={{height: '100%', width: '100%'}} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                </div>
                <CardContent className="relative z-10 p-6 h-full flex flex-col justify-end">
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-white/90 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-orange-500 font-medium mb-2">Testimonials</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What people say about us?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <div className="flex items-center mb-1">
                        <span className="font-semibold mr-2">{testimonial.rating}.0 stars</span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">"{testimonial.comment}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <span className="font-semibold text-xl">RENTALS</span>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Useful Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cars</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Account</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Sign In</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Register</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Partner</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
