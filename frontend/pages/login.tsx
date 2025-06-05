import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Separator } from "../components/ui/separator";
import { Eye, EyeOff, ArrowRight, Shield, Lock } from "lucide-react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      // Handle login logic here
      console.log("Login attempt:", formData);
    }, 2000);
  };

  const isFormValid = formData.email && formData.password;

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="/" className="text-navy font-bold text-2xl tracking-tight">
              Suisse <span className="font-light">Wealth</span>
            </a>
            <div className="text-sm text-gray-500">Secure Login</div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-16">
        <div className="max-w-md mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-lavender text-navy border-lavender-300 px-4 py-2 text-sm font-medium">
              <Shield className="w-4 h-4 mr-2" />
              Secure Access
            </Badge>

            <h1 className="text-4xl md:text-5xl font-light text-navy mb-4 tracking-tight">
              Welcome
              <span className="block font-normal italic text-navy-600">
                back
              </span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed font-light">
              Sign in to your Suisse Wealth Management account
            </p>
          </div>

          {/* Login Form */}
          <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Field */}
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="h-12 border-gray-200 focus:border-navy focus:ring-navy rounded-lg"
                    required
                  />
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <Label
                    htmlFor="password"
                    className="text-sm font-medium text-gray-700"
                  >
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={(e) =>
                        handleInputChange("password", e.target.value)
                      }
                      className="h-12 border-gray-200 focus:border-navy focus:ring-navy rounded-lg pr-12"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Forgot Password Link */}
                <div className="text-right">
                  <a
                    href="/forgot-password"
                    className="text-sm text-navy hover:text-navy-800 transition-colors font-medium"
                  >
                    Forgot your password?
                  </a>
                </div>

                {/* Login Button */}
                <Button
                  type="submit"
                  size="lg"
                  disabled={!isFormValid || isLoading}
                  className={`w-full h-12 rounded-lg text-lg font-medium transition-all duration-300 shadow-lg group ${
                    isFormValid && !isLoading
                      ? "bg-navy hover:bg-navy-800 text-white hover:shadow-xl"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2" />
                      Signing in...
                    </div>
                  ) : (
                    <>
                      Sign In
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>

                {/* Divider */}
                <div className="relative my-6">
                  <Separator className="bg-gray-200" />
                  <div className="absolute inset-0 flex justify-center">
                    <span className="bg-white px-4 text-sm text-gray-500">
                      or
                    </span>
                  </div>
                </div>

                {/* Register Link */}
                <div className="text-center">
                  <p className="text-gray-600 mb-4">Don't have an account?</p>
                  <a href="/register">
                    <Button
                      type="button"
                      variant="outline"
                      size="lg"
                      className="w-full h-12 border-navy text-navy hover:bg-navy hover:text-white rounded-lg text-lg font-medium transition-all duration-300"
                    >
                      Create Account
                    </Button>
                  </a>
                </div>

                {/* Security Notice */}
                <div className="mt-6 p-4 bg-lavender/30 rounded-lg border border-lavender-200">
                  <div className="flex items-start gap-3">
                    <Lock className="h-5 w-5 text-navy mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-navy mb-1">
                        Your security is our priority
                      </p>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        We use bank-level encryption to protect your personal
                        and financial information. Your data is never shared
                        with third parties.
                      </p>
                    </div>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Help Text */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">
              Need help?{" "}
              <a
                href="/contact"
                className="text-navy hover:text-navy-800 font-medium"
              >
                Contact support
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
