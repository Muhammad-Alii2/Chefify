"use client";
import React from "react";

const ServicesAboutUs = () => {
  return (
    <div className="flex flex-col bg-[#0f1e27] w-full min-h-screen p-12">
      {/* Header Section */}
      <div className="text-white text-center mt-12 space-y-4">
  {/* Service Subtitle */}
  <h4 className="text-[#ffc300] text-xl md:text-2xl font-bold tracking-widest font-delius uppercase relative">
    OUR SERVICES
    {/* Add subtle underline effect below the text */}
    <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-[#ffc300] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
  </h4>

  {/* Main Title */}
  <h1 className="text-5xl md:text-6xl font-extrabold uppercase tracking-tight font-delius bg-gradient-to-r from-[#ffc300] to-[#ff5733] text-transparent bg-clip-text">
    What we <span className="bg-gradient-to-l from-[#ff5733] to-[#ffc300] text-transparent bg-clip-text">offer</span>
  </h1>

  {/* Horizontal Line */}
  <div className="flex justify-center">
    <div className="w-24 h-[3px] bg-[#ffc300] mt-4"></div>
  </div>

        <hr className="border-2 border-[#ffc300] w-16 mb-4 mx-auto" />

        <p className="text-center mx-auto max-w-2xl mb-12 font-delius text-gray-300">
          Discover delicious recipes tailored to your taste and preferences using our AI-driven platform.
        </p>
      </div>

      {/* Services Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {[
          {
            icon: "fa-solid fa-utensils",
            title: "Recipe Generation",
            description:
              "Input your ingredients and preferences to get personalized recipe suggestions crafted by AI.",
          },
          {
            icon: "fa-solid fa-video",
            title: "YouTube Video Suggestions",
            description:
              "Find engaging cooking videos from YouTube to enhance your culinary skills and experience.",
          },
          {
            icon: "fa-solid fa-user-circle",
            title: "User Interaction",
            description:
              "Connect through Google and specify your preferences for a more personalized experience.",
          },
          {
            icon: "fa-solid fa-star",
            title: "Featured Recipes",
            description:
              "Explore our curated selection of popular and featured recipes just for you.",
          },
          {
            icon: "fa-solid fa-list-alt",
            title: "Ingredient List",
            description:
              "Get a comprehensive list of ingredients for each recipe generated based on your input.",
          },
          {
            icon: "fa-solid fa-rocket",
            title: "Quick Recipes",
            description:
              "Find quick and easy recipes that fit your schedule and cooking preferences.",
          },
        ].map((service, index) => (
          <div
            key={index}
            className="group relative bg-[#1b2937] hover:bg-[#ffc300] transition-all duration-300 rounded-lg shadow-lg p-8 flex flex-col items-center text-center"
          >
            <div className="bg-[#ffc300] text-black group-hover:bg-black group-hover:text-[#ffc300] transition-colors duration-300 p-6 rounded-full shadow-lg mb-6">
              <i className={`${service.icon} fa-3x`}></i>
            </div>
            <h3 className="text-white text-xl font-semibold mb-4 group-hover:text-black transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-gray-300 group-hover:text-black transition-colors duration-300">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesAboutUs;
