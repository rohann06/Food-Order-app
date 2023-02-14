import React from "react";
import { HiOutlinePlusSm, HiMinusSm } from "react-icons/hi";
import { useCartContext } from "../context/CartContext";

function MealCard({ mealName, mealDescription, mealPrice, mealId }) {
  const { decQty, incQty, qty, onAdd } = useCartContext();

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
            <button
              onClick={incQty}
              className=" font-bold text-lg px-2 py-1 bg-red-100"
            >
              <HiOutlinePlusSm />
            </button>

            <span className=" font-semibold text-lg">{qty}</span>

            <button onClick={decQty} className=" font-bold px-2 bg-red-100">
              <HiMinusSm />
            </button>
          </div>
        </div>
        <button
          onClick={() => onAdd(mealName, mealPrice, mealId, qty)}
          className=" bg-red-900 hover:bg-red-700 text-slate-50 font-Nunito font-bold rounded-lg py-1 px-3 lg:px-4 mt-4 lg:mt-6 ml-16"
        >
          + Add
        </button>
      </div>
    </div>
  );
}

export default MealCard;
