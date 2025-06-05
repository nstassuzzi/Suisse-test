import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  GraduationCap,
  Brain,
  TrendingUp,
  FileText,
  BarChart3,
  ArrowRight,
  Shield,
  Users,
  Star,
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-navy font-bold text-2xl tracking-tight">
              Suisse <span className="font-light">Wealth Investment</span>
            </div>
            <div className="hidden md:flex space-x-8 text-gray-700">
              <a
                href="#platform"
                className="hover:text-navy transition-colors font-medium"
              >
                Platform
              </a>
              <a
                href="#education"
                className="hover:text-navy transition-colors font-medium"
              >
                Education
              </a>
              <a
                href="#about"
                className="hover:text-navy transition-colors font-medium"
              >
                About
              </a>
              <a
                href="#contact"
                className="hover:text-navy transition-colors font-medium"
              >
                Contact
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="/login">
                <Button
                  variant="outline"
                  className="text-gray-700 hover:text-navy px-4 py-2 rounded-lg font-medium transition-all duration-300"
                >
                  Log in
                </Button>
              </a>
              <Button
                className="bg-navy hover:bg-navy-800 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300"
                onClick={() => (window.location.href = "/get-started")}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
          }}
        />

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 pt-20">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-navy mb-8 tracking-tight leading-none">
            Invest with
            <span className="block font-normal italic text-navy-600">
              Class
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Education, automation, and AI to help you invest like the pros.
          </p>

          <a href="/get-started">
            <Button
              size="lg"
              className="bg-navy hover:bg-navy-800 text-white px-12 py-4 rounded-lg text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              Start your journey
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>

          <div className="mt-16 flex justify-center items-center gap-8 text-gray-500 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span>SEC Compliant</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-300" />
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>10,000+ Investors</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-300" />
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4" />
              <span>4.9/5 Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-navy mb-6">
              Why Choose <span className="font-normal">Suisse</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We've reimagined real estate investing for the modern investor
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            <Card className="bg-white border-0 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="bg-lavender w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <GraduationCap className="h-8 w-8 text-navy" />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-4">
                  Interactive Education
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Free financial education with interactive courses and
                  real-world scenarios.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="bg-lavender w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Brain className="h-8 w-8 text-navy" />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-4">
                  AI-Powered Advisory
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Personalized investment recommendations powered by advanced AI
                  algorithms.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="bg-lavender w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <TrendingUp className="h-8 w-8 text-navy" />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-4">
                  Return Simulation
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Simulate potential returns before making any investment
                  decisions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="bg-lavender w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <FileText className="h-8 w-8 text-navy" />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-4">
                  100% Digital Process
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Contracts, signatures, and reservations handled entirely
                  online.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="bg-lavender w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <BarChart3 className="h-8 w-8 text-navy" />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-4">
                  Simple Tracking
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Post-investment tracking and performance monitoring made
                  effortless.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Inspirational Quote Section */}
      <section className="py-24 bg-navy">
        <div className="container mx-auto px-6 text-center">
          <blockquote className="max-w-4xl mx-auto">
            <p className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-relaxed mb-8">
              "It's not just about investing. It's about transforming your
              <span className="italic text-lavender">
                {" "}
                relationship with money and time.
              </span>
              "
            </p>
            <div className="w-24 h-px bg-lavender mx-auto" />
          </blockquote>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-navy mb-6">
            Ready to invest{" "}
            <span className="font-normal italic">intelligently?</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join thousands of investors who have already transformed their
            financial future with Suisse.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/get-started">
              <Button
                size="lg"
                className="bg-navy hover:bg-navy-800 text-white px-10 py-4 rounded-lg text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Sign up free
              </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              className="border-navy text-navy hover:bg-navy hover:text-white px-10 py-4 rounded-lg text-lg font-medium transition-all duration-300"
            >
              Schedule a demo
            </Button>
          </div>

          <p className="text-sm text-gray-500 mt-8">
            No credit card required • Free forever plan available • Cancel
            anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="text-navy font-bold text-2xl tracking-tight mb-4">
              Suisse <span className="font-light">Wealth</span>
            </div>
            <p className="text-gray-600 text-sm mb-6 max-w-md mx-auto">
              Revolutionizing real estate investment through education,
              automation, and AI.
            </p>
            <div className="flex justify-center space-x-8 text-gray-500 text-sm">
              <a href="#" className="hover:text-navy transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-navy transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-navy transition-colors">
                Contact Us
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-100 text-gray-400 text-sm">
              © 2024 Suisse Wealth Management. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;