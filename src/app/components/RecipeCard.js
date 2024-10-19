"use client"; 
import React, { useState } from "react";
import { Label } from "@/app/components/ui/label";
import { Input } from "@/app/components/ui/input";
import styles from "@/app/styles/Recipe.css"; // Ensure to check if you need this import

const RecipeCard = ({ onSubmit }) => {
  const [ingredients, setIngredients] = useState("");
  const [mealType, setMealType] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [complexity, setComplexity] = useState("");
  const [recipeType, setRecipeType] = useState("Veg"); // Default to Veg

  const handleSubmit = () => {
    const recipeData = {
      ingredients,
      mealType,
      cuisine,
      cookingTime,
      complexity,
      recipeType,
    };
    onSubmit(recipeData);
  };

  return (
    <div
    className="max-w-xs w-full mx-auto rounded-lg" // Removed shadow-lg and hover effects
    style={{
      marginLeft: "60px",
      marginBottom: "200px",
      marginTop: "80px", // Adjust as needed
      background: "linear-gradient(180deg, #000, #434343)", // Black gradient for background
      border: "1px solid #434343", // Ensure the border is subtle and blends in
      boxShadow: "none" // Removed any additional shadow
    }}
  >
      <div className="recipe-card-container">
        <div className="recipe-card-inner">
          <div className="p-4">
            <h2 className="font-bold text-lg text-neutral-200">Recipe Generator</h2>
            <p className="text-neutral-300 text-sm mt-2 mb-1">
              Discover Deliciousness: Your Continent, Your Ingredients, Your Recipe!
            </p>

            {/* Ingredients Input */}
            <div className="mb-2">
              <Label className="label" htmlFor="ingredients">
                Ingredients
              </Label>
              <Input
                id="ingredients"
                placeholder="Enter ingredients"
                type="text"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                className="bg-black text-white border border-gray-600 shadow-md focus:shadow-lg focus:outline-none transition-shadow duration-200" // Adjusted shadow
              />
            </div>

            {/* Meal Type Dropdown */}
            <div className="mb-2 flex items-center">
              <Label className="label w-1/3" htmlFor="mealType">
                Meal Type
              </Label>
              <select
                className="select w-2/3 bg-black text-white border border-gray-600 h-[32px]" // Adjust height for compactness
                id="mealType"
                value={mealType}
                onChange={(e) => setMealType(e.target.value)}
              >
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
                <option value="Snack">Snack</option>
              </select>
            </div>

            {/* Recipe Type Dropdown */}
            <div className="mb-2 flex items-center">
              <Label className="label w-1/3" htmlFor="recipeType">
                Recipe Type
              </Label>
              <select
                className="select w-2/3 bg-black text-white border border-gray-600 h-[32px]" // Adjust height for compactness
                id="recipeType"
                value={recipeType}
                onChange={(e) => setRecipeType(e.target.value)}
              >
                <option value="Veg">Vegetarian</option>
                <option value="Non-Veg">Non-Vegetarian</option>
              </select>
            </div>

            {/* Cuisine Preference */}
            <div className="mb-2 flex items-center">
              <Label className="label w-1/3" htmlFor="cuisine">
                Cuisine
              </Label>
              <Input
                id="cuisine"
                type="text"
                placeholder="e.g., Indian, Pakistani"
                value={cuisine}
                onChange={(e) => setCuisine(e.target.value)}
                className="w-2/3 bg-black text-white border border-gray-600 shadow-md focus:shadow-lg focus:outline-none transition-shadow duration-200" // Adjusted shadow
              />
            </div>

            {/* Cooking Time Dropdown */}
            <div className="mb-2 flex items-center">
              <Label className="label w-1/3" htmlFor="cookingTime">
                Cooking Time
              </Label>
              <select
                className="select w-2/3 bg-black text-white border border-gray-600 h-[32px]" // Adjust height for compactness
                id="cookingTime"
                value={cookingTime}
                onChange={(e) => setCookingTime(e.target.value)}
              >
                <option value="Less than 30 minutes">Less than 30 minutes</option>
                <option value="30-60 minutes">30-60 minutes</option>
                <option value="More than 1 hour">More than 1 hour</option>
              </select>
            </div>

            {/* Complexity Dropdown */}
            <div className="mb-2 flex items-center">
              <Label className="label w-1/3" htmlFor="complexity">
                Complexity
              </Label>
              <select
                className="select w-2/3 bg-black text-white border border-gray-600 h-[32px]" // Adjust height for compactness
                id="complexity"
                value={complexity}
                onChange={(e) => setComplexity(e.target.value)}
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>

            {/* Submit Button */}
            <div>
              <button
                className="bg-gradient-to-br relative group/btn from-black to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_black_inset,0px_-1px_0px_0px_black_inset] hover:bg-black" // Changed shadow color to black
                type="button"
                onClick={handleSubmit}
              >
                Generate Recipe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
