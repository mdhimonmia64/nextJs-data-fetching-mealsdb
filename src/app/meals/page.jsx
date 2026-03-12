"use client";
import React, { useEffect, useState } from "react";

export default function MealsPage() {
  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");

  const fetchMeals = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`,
      );
      const data = await res.json();
      setMeals(data?.meals || []);
      return data?.meals;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  useEffect(() => {
    fetchMeals();
  }, [search]);
  return (
    <div>
      <div>
       <input type="text" className="border border-4" value={search} onChange={(e) => setSearch(e.target.value)} /> 
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
                <iframe
                 className="rounded"
                  src={`https://www.youtube.com/embed/${singleMeal?.strYoutube?.split("v=")[1]}`}
                  title="YouTube video"
                ></iframe>
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
