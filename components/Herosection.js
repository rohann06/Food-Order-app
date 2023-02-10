import React from "react";

function Herosection() {
  return (
    <div>
      <div className=" absolute top-[66px] lg:top-[76px] inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center  w-screen h-[168px] lg:h-[550px]"></div>

      <p className=" absolute text-slate-50 font-semibold text-4xl lg:text-8xl left-[120px] lg:left-[700px] top-[120px] lg:top-[260px] font-Nunito">
        Order Food
      </p>
      <p className=" absolute text-slate-50 lg:font-thin text-[13px] lg:text-[20px] left-[125px] lg:left-[710px] top-[155px] lg:top-[355px] font-Nunito">
        Order what crave for...
      </p>
      <img
        src="https://thumbs.dreamstime.com/b/abstract-food-background-top-view-dark-rustic-kitchen-table-wooden-cutting-board-cooking-spoon-frame-banner-137304354.jpg"
        className=" w-screen  lg:h-[550px] "
      />
    </div>
  );
}

export default Herosection;
