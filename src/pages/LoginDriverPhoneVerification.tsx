import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Phone, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const LoginDriverPhoneVerification = () => {
    const [fullName, setFullName] = useState('');
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handlePhoneSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.length < 10) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid phone number",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setStep('otp');
      toast({
        title: "OTP Sent",
        description: `Verification code sent to ${phoneNumber}`,
      });
    }, 1500);
  };

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length !== 6) {
      toast({
        title: "Invalid OTP",
        description: "Please enter the 6-digit verification code",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Phone Verified",
        description: "Your phone number has been successfully verified",
      });
      navigate('/driver-dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Button 
          variant="ghost" 
          className="mb-6"
          onClick={() => step === 'otp' ? setStep('phone') : navigate('/')}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <Card className="shadow-primary/10 shadow-lg">
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              {step === 'phone' ? (
                <Phone className="h-6 w-6 text-primary" />
              ) : (
                <Shield className="h-6 w-6 text-primary" />
              )}
            </div>
            <CardTitle className="text-2xl">
              {step === 'phone' ? 'Enter Phone Number' : 'Verify OTP'}
            </CardTitle>
            <CardDescription>
              {step === 'phone' 
                ? 'We\'ll send you a verification code to confirm your number'
                : `Enter the 6-digit code sent to ${phoneNumber}`
              }
            </CardDescription>
          </CardHeader>

          <CardContent>
            {step === 'phone' ? (
              <form onSubmit={handlePhoneSubmit} className="space-y-4">
                <div>
                  <Input
                    type="tel"
                    placeholder="Enter your phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="text-center text-lg"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={loading}
                  variant="hero"
                >
                  {loading ? 'Sending OTP...' : 'Send Verification Code'}
                </Button>
              </form>
            ) : (
              <form onSubmit={handleOtpSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="000000"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                    className="text-center text-2xl tracking-widest"
                    maxLength={6}
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={loading}
                  variant="hero"
                >
                  {loading ? 'Verifying...' : 'Verify & Continue'}
                </Button>
                <Button 
                  type="button" 
                  variant="ghost" 
                  className="w-full"
                  onClick={() => {
                    toast({
                      title: "OTP Resent",
                      description: `New verification code sent to ${phoneNumber}`,
                    });
                  }}
                >
                  Resend OTP
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginDriverPhoneVerification;