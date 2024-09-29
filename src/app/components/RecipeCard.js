"use client";
import React, { useState } from "react";
import { Label } from "@/app/components/ui/label";
import { Input } from "@/app/components/ui/input";
import styles from "@/app/styles/Recipe.css";
import styled from "styled-components";

const RecipeCard = ({ onSubmit }) => {
  const [ingredients, setIngredients] = useState("");
  const [mealType, setMealType] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [complexity, setComplexity] = useState("");

  const handleSubmit = () => {
    const recipeData = {
      ingredients,
      mealType,
      cuisine,
      cookingTime,
      complexity,
    };
    onSubmit(recipeData);
  };

  return (
    <div
      className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black"
      style={{ marginLeft: "60px", marginTop: "50px" }}
    >
      <div className="recipe-card-container">
        <div className="recipe-card-inner">
          <div className="px-6 py-4">
            <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
              Recipe Generator
            </h2>
            <p
              className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300"
              style={{ marginBottom: "15px" }}
            >
              Discover Deliciousness: Your Continent, Your Ingredients, Your
              Recipe!
            </p>
            <div className="mb-4">
              <Label className="label" htmlFor="ingredients">
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
            <div className="mb-4">
              <Label className="label" htmlFor="mealType">
                Meal Type
              </Label>
              <select
                className="select"
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
            <div className="mb-4">
              <Label className="label" htmlFor="cuisine">
                Cuisine Preference
              </Label>
              <Input
                id="cuisine"
                type="text"
                placeholder="e.g., Indian, Pakistani"
                value={cuisine}
                onChange={(e) => setCuisine(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <Label className="label" htmlFor="cookingTime">
                Cooking Time
              </Label>
              <select
                className="select"
                id="cookingTime"
                value={cookingTime}
                onChange={(e) => setCookingTime(e.target.value)}
              >
                <option value="Less than 30 minutes">Less than 30 minutes</option>
                <option value="30-60 minutes">30-60 minutes</option>
                <option value="More than 1 hour">More than 1 hour</option>
              </select>
            </div>
            <div className="mb-4">
              <Label className="label" htmlFor="complexity">
                Complexity
              </Label>
              <select
                className="select"
                id="complexity"
                value={complexity}
                onChange={(e) => setComplexity(e.target.value)}
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>

            <div>
              <button
                className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
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
