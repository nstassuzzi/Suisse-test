import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { ArrowRight, Check } from "lucide-react";

const GetStarted = () => {
  const [formData, setFormData] = useState({
    investmentAmount: "",
    propertyType: "",
    priorities: "",
  });

  const handleOptionSelect = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const isFormComplete =
    formData.investmentAmount && formData.propertyType && formData.priorities;

  const investmentOptions = [
    { value: "under-10k", label: "< $10k", description: "Getting started" },
    { value: "10k-50k", label: "$10k - $50k", description: "Building wealth" },
    {
      value: "50k-250k",
      label: "$50k - $250k",
      description: "Serious investor",
    },
    { value: "over-250k", label: "> $250k", description: "High net worth" },
  ];

  const propertyOptions = [
    {
      value: "residential",
      label: "Residential",
      description: "Single-family homes",
    },
    {
      value: "rental",
      label: "Rental Income",
      description: "Cash flow properties",
    },
    {
      value: "vacation",
      label: "Vacation Homes",
      description: "Lifestyle investments",
    },
    {
      value: "luxury",
      label: "Luxury Developments",
      description: "Premium projects",
    },
  ];

  const priorityOptions = [
    { value: "return", label: "Return", description: "Maximize profits" },
    { value: "stability", label: "Stability", description: "Steady growth" },
    { value: "speed", label: "Speed", description: "Quick transactions" },
    {
      value: "passive",
      label: "Passive Income",
      description: "Regular cash flow",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="/" className="text-navy font-bold text-2xl tracking-tight">
              Suisse <span className="font-light">Wealth</span>
            </a>
            <div className="text-sm text-gray-500">Step 1 of 3</div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-lavender text-navy border-lavender-300 px-4 py-2 text-sm font-medium">
              Personalized Journey
            </Badge>

            <h1 className="text-5xl md:text-6xl font-light text-navy mb-6 tracking-tight">
              Tell us about your
              <span className="block font-normal italic text-navy-600">
                investment goals
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
              We'll personalize your journey based on your preferences and
              create a tailored investment strategy just for you.
            </p>
          </div>

          {/* Form Section */}
          <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 max-w-3xl mx-auto">
            <CardContent className="p-12">
              {/* Investment Amount */}
              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-navy mb-2">
                  How much are you planning to invest?
                </h3>
                <p className="text-gray-600 mb-6">
                  This helps us recommend appropriate investment opportunities.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {investmentOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() =>
                        handleOptionSelect("investmentAmount", option.value)
                      }
                      className={`p-6 rounded-lg border-2 text-left transition-all duration-300 group hover:shadow-md ${
                        formData.investmentAmount === option.value
                          ? "border-navy bg-navy/5 shadow-md"
                          : "border-gray-200 hover:border-lavender-300"
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <div
                            className={`text-lg font-semibold mb-1 ${
                              formData.investmentAmount === option.value
                                ? "text-navy"
                                : "text-gray-900"
                            }`}
                          >
                            {option.label}
                          </div>
                          <div className="text-sm text-gray-600">
                            {option.description}
                          </div>
                        </div>
                        {formData.investmentAmount === option.value && (
                          <div className="bg-navy rounded-full p-1">
                            <Check className="h-4 w-4 text-white" />
                          </div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Property Type */}
              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-navy mb-2">
                  What type of property are you most interested in?
                </h3>
                <p className="text-gray-600 mb-6">
                  Choose the property type that aligns with your investment
                  strategy.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {propertyOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() =>
                        handleOptionSelect("propertyType", option.value)
                      }
                      className={`p-6 rounded-lg border-2 text-left transition-all duration-300 group hover:shadow-md ${
                        formData.propertyType === option.value
                          ? "border-navy bg-navy/5 shadow-md"
                          : "border-gray-200 hover:border-lavender-300"
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <div
                            className={`text-lg font-semibold mb-1 ${
                              formData.propertyType === option.value
                                ? "text-navy"
                                : "text-gray-900"
                            }`}
                          >
                            {option.label}
                          </div>
                          <div className="text-sm text-gray-600">
                            {option.description}
                          </div>
                        </div>
                        {formData.propertyType === option.value && (
                          <div className="bg-navy rounded-full p-1">
                            <Check className="h-4 w-4 text-white" />
                          </div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Investment Priorities */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-navy mb-2">
                  What matters most to you?
                </h3>
                <p className="text-gray-600 mb-6">
                  Select your primary investment objective to guide our
                  recommendations.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {priorityOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() =>
                        handleOptionSelect("priorities", option.value)
                      }
                      className={`p-6 rounded-lg border-2 text-left transition-all duration-300 group hover:shadow-md ${
                        formData.priorities === option.value
                          ? "border-navy bg-navy/5 shadow-md"
                          : "border-gray-200 hover:border-lavender-300"
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <div
                            className={`text-lg font-semibold mb-1 ${
                              formData.priorities === option.value
                                ? "text-navy"
                                : "text-gray-900"
                            }`}
                          >
                            {option.label}
                          </div>
                          <div className="text-sm text-gray-600">
                            {option.description}
                          </div>
                        </div>
                        {formData.priorities === option.value && (
                          <div className="bg-navy rounded-full p-1">
                            <Check className="h-4 w-4 text-white" />
                          </div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center mt-12">
            <Button
              size="lg"
              disabled={!isFormComplete}
              className={`px-12 py-4 rounded-lg text-lg font-medium transition-all duration-300 shadow-lg group ${
                isFormComplete
                  ? "bg-navy hover:bg-navy-800 text-white hover:shadow-xl"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Start My Journey
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <p className="text-sm text-gray-500 mt-4">
              Free to start �� No credit card required • Cancel anytime
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center mt-16">
            <div className="flex space-x-2">
              <div className="w-12 h-2 bg-navy rounded-full" />
              <div className="w-12 h-2 bg-gray-200 rounded-full" />
              <div className="w-12 h-2 bg-gray-200 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Optional Background Visual */}
      <div
        className="fixed inset-0 pointer-events-none opacity-5 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
    </div>
  );
};

export default GetStarted;
