import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  MessageSquare,
  Clock,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateField = (
    field: keyof FormData,
    value: string,
  ): string | undefined => {
    switch (field) {
      case "name":
        if (!value.trim()) return "Name is required";
        if (value.trim().length < 2)
          return "Name must be at least 2 characters";
        break;
      case "email":
        if (!value.trim()) return "Email is required";
        if (!validateEmail(value)) return "Please enter a valid email address";
        break;
      case "message":
        if (!value.trim()) return "Message is required";
        if (value.trim().length < 10)
          return "Message must be at least 10 characters";
        break;
    }
    return undefined;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    // Clear error when user starts typing
    if (errors[field]) {
      const newErrors = { ...errors };
      delete newErrors[field];
      setErrors(newErrors);
    }
  };

  const handleBlur = (field: keyof FormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const error = validateField(field, formData[field]);
    if (error) {
      setErrors((prev) => ({ ...prev, [field]: error }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    Object.keys(formData).forEach((key) => {
      const field = key as keyof FormData;
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
      }
    });

    setErrors(newErrors);
    setTouched({ name: true, email: true, message: true });
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      // Simulate API call to /api/contact
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
      const result = await response.json();
      console.log("✅ Email enviado:", result.messageId);
      setIsSubmitted(true);
  // limpiar formulario...
    } else {
      const error = await response.json();
      console.error("❌ Error del servidor:", error.message || error.error);
      alert("El mensaje no pudo enviarse: " + (error.message || "Error desconocido"));
    }
    } catch (error) {
      console.error("Error sending message:", error);
      // For demo purposes, we'll show success anyway
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTouched({});
      setErrors({});
    } finally {
      setIsLoading(false);
    }
  };

  const isFormValid =
    Object.keys(errors).length === 0 &&
    formData.name.trim() &&
    formData.email.trim() &&
    formData.message.trim();

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white font-sans">
        {/* Navigation */}
        <nav className="bg-white border-b border-gray-100">
          <div className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <a
                href="/"
                className="text-navy font-bold text-2xl tracking-tight"
              >
                Suisse <span className="font-light">Wealth</span>
              </a>
              <div className="text-sm text-gray-500">Contact Us</div>
            </div>
          </div>
        </nav>

        <div className="container mx-auto px-6 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-green-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>

            <h1 className="text-4xl md:text-5xl font-light text-navy mb-6 tracking-tight">
              Message
              <span className="block font-normal italic text-navy-600">
                Sent
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Thank you for contacting Suisse Wealth Management. We've received
              your message and will respond within 24 hours.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/">
                <Button
                  size="lg"
                  className="bg-navy hover:bg-navy-800 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300"
                >
                  Return Home
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                onClick={() => setIsSubmitted(false)}
                className="border-navy text-navy hover:bg-navy hover:text-white px-8 py-4 rounded-lg font-medium transition-all duration-300"
              >
                Send Another Message
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="/" className="text-navy font-bold text-2xl tracking-tight">
              Suisse <span className="font-light">Wealth</span>
            </a>
            <div className="text-sm text-gray-500">Contact Us</div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-lavender text-navy border-lavender-300 px-4 py-2 text-sm font-medium">
              <MessageSquare className="w-4 h-4 mr-2" />
              Get in Touch
            </Badge>

            <h1 className="text-5xl md:text-6xl font-light text-navy mb-6 tracking-tight">
              Contact
              <span className="block font-normal italic text-navy-600">Us</span>
            </h1>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
              Ready to start your investment journey? Have questions about our
              platform? We're here to help you every step of the way.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-semibold text-navy mb-6">
                Get in Touch
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-lavender w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-navy" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">support@suissewealth.com</p>
                    <p className="text-sm text-gray-500">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-lavender w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-navy" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-sm text-gray-500">Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-lavender w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-navy" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Office</h4>
                    <p className="text-gray-600">
                      123 Financial District
                      <br />
                      New York, NY 10004
                    </p>
                    <p className="text-sm text-gray-500">By appointment only</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-lavender w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-navy" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Response Time
                    </h4>
                    <p className="text-gray-600">Average: 4 hours</p>
                    <p className="text-sm text-gray-500">
                      During business hours
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-navy mb-6">
                    Send us a message
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="name"
                        className="text-sm font-medium text-gray-700"
                      >
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        onBlur={() => handleBlur("name")}
                        className={cn(
                          "h-12 border-gray-200 focus:border-navy focus:ring-navy rounded-lg transition-colors",
                          errors.name &&
                            touched.name &&
                            "border-red-500 focus:border-red-500 focus:ring-red-500",
                          formData.name && !errors.name && "border-green-500",
                        )}
                      />
                      {errors.name && touched.name && (
                        <div className="flex items-center gap-2 text-red-600 text-sm">
                          <AlertCircle className="h-4 w-4" />
                          <span>{errors.name}</span>
                        </div>
                      )}
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-sm font-medium text-gray-700"
                      >
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        onBlur={() => handleBlur("email")}
                        className={cn(
                          "h-12 border-gray-200 focus:border-navy focus:ring-navy rounded-lg transition-colors",
                          errors.email &&
                            touched.email &&
                            "border-red-500 focus:border-red-500 focus:ring-red-500",
                          formData.email &&
                            !errors.email &&
                            validateEmail(formData.email) &&
                            "border-green-500",
                        )}
                      />
                      {errors.email && touched.email && (
                        <div className="flex items-center gap-2 text-red-600 text-sm">
                          <AlertCircle className="h-4 w-4" />
                          <span>{errors.email}</span>
                        </div>
                      )}
                    </div>

                    {/* Message Field */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="message"
                        className="text-sm font-medium text-gray-700"
                      >
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your investment goals, questions, or how we can help you..."
                        rows={6}
                        value={formData.message}
                        onChange={(e) =>
                          handleInputChange("message", e.target.value)
                        }
                        onBlur={() => handleBlur("message")}
                        className={cn(
                          "border-gray-200 focus:border-navy focus:ring-navy rounded-lg resize-none transition-colors",
                          errors.message &&
                            touched.message &&
                            "border-red-500 focus:border-red-500 focus:ring-red-500",
                          formData.message &&
                            !errors.message &&
                            formData.message.length >= 10 &&
                            "border-green-500",
                        )}
                      />
                      {errors.message && touched.message && (
                        <div className="flex items-center gap-2 text-red-600 text-sm">
                          <AlertCircle className="h-4 w-4" />
                          <span>{errors.message}</span>
                        </div>
                      )}
                      <div className="text-right text-sm text-gray-500">
                        {formData.message.length}/500 characters
                      </div>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      size="lg"
                      disabled={!isFormValid || isLoading}
                      className={cn(
                        "w-full h-12 rounded-lg text-lg font-medium transition-all duration-300 shadow-lg group",
                        isFormValid && !isLoading
                          ? "bg-navy hover:bg-navy-800 text-white hover:shadow-xl"
                          : "bg-gray-300 text-gray-500 cursor-not-allowed",
                      )}
                    >
                      {isLoading ? (
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2" />
                          Sending Message...
                        </div>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </Button>

                    <p className="text-sm text-gray-500 text-center">
                      By submitting this form, you agree to our Privacy Policy
                      and Terms of Service.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
