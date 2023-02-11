import React from "react";
import MealCard from "./MealCard";

// Meals
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

function Meals() {
  return (
    <div className=" my-20 mx-4 lg:mx-96">
      {DUMMY_MEALS.map((meal) => {
        return (
          <div key={meal.id}>
            <MealCard mealName={meal.name} mealDescription={meal.description} mealPrice={meal.price}/>
          </div>
        );
      })}
    </div>
  );
}

export default Meals;
