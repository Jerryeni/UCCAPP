import React from "react";

const StayUpdated = () => {
  return (
    <div className="flex flex-col gap-4 md:flex-row justify-between items-center bg-black text-white p-4 rounded-xl shadow-md">
      <p className="text-sm font-semibold w-40">Stay Up To Date!</p>
      <div className="relative overflow-hidden px-2 flex items-center gap-2 w-full rounded-full p-1 justify-between bg-white text-black">
        <input
          type="email"
          placeholder="Email Address*"
          className="px-4 py-2 bg-transparent outline-none "
        />
        <button className="md:px-6 text-[8px] px-4 py-2 flex justify-end bg-slate-200 text-balck rounded-full hover:bg-purple-600">
          Get Connected
        </button>
      </div>
    </div>
  );
};

export default StayUpdated;