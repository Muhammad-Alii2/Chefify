"use client"; 
import React, { useState } from "react";
import { Label } from "@/app/components/ui/label";
import { Input } from "@/app/components/ui/input";
import styles from "@/app/styles/Recipe.css"; // Ensure to check if you need this import
import nonVegRomanWords from "@/app/data/nonVegRomanWords"; // Adjust the path accordingly

const RecipeCard = ({ onSubmit }) => {
  const [ingredients, setIngredients] = useState("");
  const [mealType, setMealType] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [complexity, setComplexity] = useState("");
  const [recipeType, setRecipeType] = useState("");

  // Function to check if non-veg words are present in ingredients
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
    <div>
      <div>
        <div>
          <div>
            <h2>Recipe Generator</h2>
            <p>
              Discover Deliciousness: Your Continent, Your Ingredients, Your Recipe!
            </p>

            {/* Ingredients Input */}
            <div>
              <Label htmlFor="ingredients">
                Ingredients
              </Label>
              <Input
                id="ingredients"
                placeholder="Enter ingredients"
                type="text"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
              />
            </div>

            {/* Meal Type Dropdown */}
            <div>
              <Label htmlFor="mealType">
                Meal Type
              </Label>
              <select
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
            <div>
              <Label htmlFor="recipeType">
                Recipe Type
              </Label>
              <select
                id="recipeType"
                value={recipeType}
                onChange={(e) => setRecipeType(e.target.value)}
              >
                <option value="Veg" disabled={containsNonVegWords(ingredients)}>Vegetarian</option>
                <option value="Non-Veg">Non-Vegetarian</option>
              </select>
            </div>

            {/* Cuisine Preference */}
            <div>
              <Label htmlFor="cuisine">
                Cuisine
              </Label>
              <Input
                id="cuisine"
                type="text"
                placeholder="e.g., Indian, Pakistani"
                value={cuisine}
                onChange={(e) => setCuisine(e.target.value)}
              />
            </div>

            {/* Cooking Time Dropdown */}
            <div>
              <Label htmlFor="cookingTime">
                Cooking Time
              </Label>
              <select
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
            <div>
              <Label htmlFor="complexity">
                Complexity
              </Label>
              <select
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
