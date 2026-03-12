import React from "react";
import MealSearchInput from "./components/MealSearchInput";

export default async function MealsPage({searchParams}) {
  const query = await searchParams; 

  const fetchMeals = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query?.search}`,
      );
      const data = await res.json();
      // setMeals(data?.meals || []);
      return data?.meals;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const meals = await fetchMeals();

  return (
    <div>
      <div>
        <MealSearchInput />
      </div>
      <div className="flex flex-wrap w-11/12 mx-auto gap-2">
      {meals?.map((singleMeal) => {
        return (
          <div key={singleMeal.idMeal}>
            <div className="card bg-base-100 w-96 shadow-sm">
              <figure className="px-10 pt-10">
                <img
                  src={singleMeal?.strMealThumb}
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{singleMeal?.strMeal}</h2>
                <p className="line-clamp-3">{singleMeal?.strInstructions}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
    </div>
  );
}
