import React from "react";

function MealCard({ mealName, mealDescription, mealPrice }) {
  return (
    <div className=" bg-slate-100 rounded-xl p-3 lg:p-5 my-5 lg:my-7 shadow-lg shadow-slate-50/40 flex justify-between">
      <div>
        <p className=" text-lg lg:text-3xl font-Nunito font-black lg:font-black ">
          {mealName}
        </p>
        <p className=" font-Nunito text-slate-500">{mealDescription}</p>
        <p className=" text-red-800 text-lg lg:text-2xl font-Nunito font-extrabold mt-1 lg:mt-3">
          ${mealPrice}
        </p>
      </div>
      <div>
        <div className=" flex gap-2 items-center">
          <label
            htmlFor="amount"
            className=" font-Nunito font-semibold lg:font-bold"
          >
            Quantity
          </label>
          <input
            type="number"
            id="points"
            min={1}
            max={5}
            defaultValue={1}
            name="points"
            step="1"
            className=" w-16 border
           lg:border-2 border-black pl-6 lg:pl-2 text-lg"
          />
        </div>
        <button className=" bg-red-900 hover:bg-red-700 text-slate-50 font-Nunito font-bold rounded-lg py-1 px-3 lg:px-4 mt-4 lg:mt-6 ml-16">
          + Add
        </button>
      </div>
    </div>
  );
}

export default MealCard;
