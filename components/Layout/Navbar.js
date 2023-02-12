import React, { useState } from "react";
import { SlBasketLoaded } from "react-icons/sl";
import CartModal from "../CartModal";

function Navbar() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className=" flex justify-between items-center p-4">
        <div>
          <h1 className=" text-slate-50 text-2xl lg:text-4xl font-extrabold font-Nunito">
            Food order
          </h1>
        </div>

        <button onClick={() => setShowModal(true)}>
          <div className="bg-red-700 hover:bg-red-900 rounded-full flex gap-3 items-center py-[5px] lg:py-2 px-3 lg:px-5 lg:mx-20">
            <SlBasketLoaded className=" text-slate-50 text-lg lg:text-2xl font-bold" />
            <h1 className=" text-slate-50 lg:font-bold">Orders</h1>
            <h1 className=" text-slate-50 font-bold lg:text-lg">2</h1>
          </div>
        </button>
      </div>
      <CartModal isVisible={showModal} onClose={() => setShowModal(false)}/>
    </>
  );
}

export default Navbar;
