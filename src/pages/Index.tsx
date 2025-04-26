import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Stats from "../components/Stats";
import FeaturedGrid from "../components/FeaturedGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Latest Content
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Explore our most recent educational resources and insights
            </p>
          </div>
          <FeaturedGrid />
        </div>
      </div>
    </div>
  );
};

export default Index;
