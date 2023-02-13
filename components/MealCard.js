import React from "react";
import { HiOutlinePlusSm, HiMinusSm } from "react-icons/hi";

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
        <div className=" flex gap-1 items-center">
          <label
            htmlFor="amount"
            className=" font-Nunito font-semibold lg:font-bold"
          >
            Qty:
          </label>
          <div className=" flex gap-2 lg:gap-3 border lg:border-2 border-black">
            <button className=" font-bold text-lg px-2 py-1 ">
              <HiOutlinePlusSm />
            </button>

            <span className=" font-semibold text-lg">1</span>

            <button className=" font-bold px-2 "> <HiMinusSm/> </button>
          </div>
        </div>
        <button className=" bg-red-900 hover:bg-red-700 text-slate-50 font-Nunito font-bold rounded-lg py-1 px-3 lg:px-4 mt-4 lg:mt-6 ml-16">
          + Add
        </button>
      </div>
    </div>
  );
}

export default MealCard;
