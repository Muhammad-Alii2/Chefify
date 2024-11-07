"use client";
import React, { useState } from "react";
import { Label } from "@/app/components/ui/label";
import { Input } from "@/app/components/ui/input";
import nonVegRomanWords from "@/app/data/nonVegRomanWords";

const RecipeCard = ({ onSubmit }) => {
  const [ingredients, setIngredients] = useState("");
  const [mealType, setMealType] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [complexity, setComplexity] = useState("");
  const [recipeType, setRecipeType] = useState("");

  const containsNonVegWords = (ingredients) => {
    const lowerCaseIngredients = ingredients.toLowerCase();
    return nonVegRomanWords.some(word => lowerCaseIngredients.includes(word));
  };

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
    <div className="p-6 max-w-lg mx-auto bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-white mb-4">Recipe Generator</h2>
      <p className="text-gray-400 mb-6">Discover Deliciousness: Your Continent, Your Ingredients, Your Recipe!</p>
      
      {/* Ingredients Input */}
      <div className="mb-4">
        <Label htmlFor="ingredients" className="text-gray-300">Ingredients</Label>
        <Input
          id="ingredients"
          placeholder="Enter ingredients"
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full mt-1 p-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Meal Type Dropdown */}
      <div className="mb-4">
        <Label htmlFor="mealType" className="text-gray-300">Meal Type</Label>
        <select
          id="mealType"
          value={mealType}
          onChange={(e) => setMealType(e.target.value)}
          className="w-full mt-1 p-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:border-blue-500"
        >
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Snack">Snack</option>
        </select>
      </div>

      {/* Recipe Type Dropdown */}
      <div className="mb-4">
        <Label htmlFor="recipeType" className="text-gray-300">Recipe Type</Label>
        <select
          id="recipeType"
          value={recipeType}
          onChange={(e) => setRecipeType(e.target.value)}
          className="w-full mt-1 p-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:border-blue-500"
        >
          <option value="Veg" disabled={containsNonVegWords(ingredients)}>Vegetarian</option>
          <option value="Non-Veg">Non-Vegetarian</option>
        </select>
      </div>

      {/* Cuisine Preference */}
      <div className="mb-4">
        <Label htmlFor="cuisine" className="text-gray-300">Cuisine</Label>
        <Input
          id="cuisine"
          type="text"
          placeholder="e.g., Indian, Pakistani"
          value={cuisine}
          onChange={(e) => setCuisine(e.target.value)}
          className="w-full mt-1 p-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Cooking Time Dropdown */}
      <div className="mb-4">
        <Label htmlFor="cookingTime" className="text-gray-300">Cooking Time</Label>
        <select
          id="cookingTime"
          value={cookingTime}
          onChange={(e) => setCookingTime(e.target.value)}
          className="w-full mt-1 p-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:border-blue-500"
        >
          <option value="Less than 30 minutes">Less than 30 minutes</option>
          <option value="30-60 minutes">30-60 minutes</option>
          <option value="More than 1 hour">More than 1 hour</option>
        </select>
      </div>

      {/* Complexity Dropdown */}
      <div className="mb-6">
        <Label htmlFor="complexity" className="text-gray-300">Complexity</Label>
        <select
          id="complexity"
          value={complexity}
          onChange={(e) => setComplexity(e.target.value)}
          className="w-full mt-1 p-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:border-blue-500"
        >
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <button
          type="button"
          onClick={handleSubmit}
          className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 focus:outline-none"
        >
          Generate Recipe
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
