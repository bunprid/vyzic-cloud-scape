
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Cloud } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center py-20">
        <div className="container">
          <div className="max-w-md mx-auto text-center">
            <Cloud className="h-20 w-20 text-vyzic-400 mx-auto mb-4" />
            
            <h1 className="text-6xl font-bold text-vyzic-800 mb-6">404</h1>
            <p className="text-2xl text-gray-600 mb-8">Oops! This cloud resource was not found.</p>
            <p className="text-gray-500 mb-8">
              The page you're looking for doesn't exist or has been moved to a different region.
            </p>
            
            <Button className="bg-vyzic-600 hover:bg-vyzic-700" asChild>
              <a href="/">Return to Homepage</a>
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
