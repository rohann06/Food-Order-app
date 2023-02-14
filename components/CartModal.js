import React from "react";
import { SlBasketLoaded } from "react-icons/sl";
import { useCartContext } from "../context/CartContext";

// const CART_MEALS = [
//   {
//     id: "m1",
//     name: "Sushi",
//     description: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     id: "m2",
//     name: "Schnitzel",
//     description: "A german specialty!",
//     price: 16.5,
//   },
// ];

function CartModal() {
  const { setShowCart, cartItems, totalPrice } = useCartContext();

  return (
    <div className=" fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className=" w-full mx-8 lg:w-[600px]">
        <div className=" bg-slate-100 p-2 rounded-lg">
          <div className=" flex justify-between px-2 border-b-2 pb-2 text-black">
            <p className=" font-Poppins font-medium ">Meals in your cart</p>
          </div>

          {/* If Cart is empty */}
          {cartItems.lenght < 1 && (
            <div className=" text-center m-3">
              <p className=" text-lg font-Nunito font-bold">
                Your Cart is empty
              </p>
            </div>
          )}

          {/* If CartItems are There */}
          {cartItems.lenght >= 1 &&
            cartItems.map((meal, index) => (
              <div key={order.id} className=" border-b-2">
                <div className=" flex justify-between p-3">
                  <p className=" font-bold ">{meal.name}</p>
                  <p className=" font-semibold">$ {meal.price}</p>
                </div>
              </div>
            ))}

          <div className=" flex justify-between p-3">
            <p className=" font-extrabold text-xl lg:text-2xl">Total Price</p>
            <p className="font-extrabold text-xl lg:text-2xl text-red-900">
              $ {totalPrice}
            </p>
          </div>

          <div className=" flex gap-3">
            <button
              onClick={() => setShowCart(false)}
              className=" font-bold text-sm lg:text-lg border-2 px-3 py-2 lg:px-4 lg:py-3  rounded-full hover:border-red-600 hover:text-red-600"
            >
              Cancel
            </button>
            <button className=" font-bold text-sm lg:text-lg border-2 px-3 py-2 lg:px-4 lg:py-3 rounded-full bg-red-600 text-slate-50 hover:bg-red-400">
              Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartModal;
