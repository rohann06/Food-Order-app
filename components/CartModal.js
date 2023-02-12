import React from "react";

const CART_MEALS = [
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
];

function CartModal({ isVisible, onClose }) {
  if (!isVisible) return null;

  return (
    <div className=" fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className=" w-full mx-8 lg:w-[600px]">
        <div className=" bg-slate-100 p-2 rounded-lg">
          <div className=" flex justify-between px-2 border-b-2 pb-2 text-black">
            <p className=" font-Poppins font-medium ">Meals in your cart</p>
          </div>
          <div className=" my-2 lg:my-5">
            {CART_MEALS.map((order) => {
              return (
                <div key={order.id} className=" border-b-2">
                  <div className=" flex justify-between p-3">
                    <p className=" font-bold ">{order.name}</p>
                    <p className=" font-semibold">$ {order.price}</p>
                  </div>
                </div>
              );
            })}
            <div className=" flex justify-between p-3">
              <p className=" font-extrabold text-xl lg:text-2xl">Total Price</p>
              <p className="font-extrabold text-xl lg:text-2xl text-red-900">
                $ 40
              </p>
            </div>
          </div>
          <div className=" flex gap-3">
            <button
              onClick={() => onClose()}
              className=" font-bold text-sm border-2 px-3 py-2 rounded-full hover:border-red-600 hover:text-red-600"
            >
              Cancel
            </button>
            <button className=" font-bold text-sm border-2 px-3 py-2 rounded-full bg-red-600 text-slate-50 hover:bg-red-400">
              Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartModal;
