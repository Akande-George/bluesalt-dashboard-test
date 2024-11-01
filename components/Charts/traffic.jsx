import React from "react";

const Traffic = () => {
  return (
    <div className="p-6 bg-[#F7F9FB] rounded-xl">
      <div className="mb-6">
        <div className="font-semibold text-xs">Traffic by Website</div>
      </div>
      <section className="space-y-14">
        <div className="grid grid-cols-2">
          <div className="text-xs text-[#1C1C1C]">Google</div>
          <div className="flex justify-start space-x-1 items-center">
            <div className="w-[9.71px] h-[2.33px] bg-[#1C1C1C]"></div>
            <div className="w-[9.71px] h-[2.33px] bg-[#1C1C1C66]"></div>
            <div className="w-[9.71px] h-[2.33px] bg-[#1C1C1C1A]"></div>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="text-xs text-[#1C1C1C]">Youtube</div>
          <div className="flex justify-start space-x-1 items-center">
            <div className="w-[18.5px] h-[2.33px] bg-[#1C1C1C]"></div>
            <div className="w-[18.5px] h-[2.33px] bg-[#1C1C1C66]"></div>
            <div className="w-[18.5px] h-[2.33px] bg-[#1C1C1C1A]"></div>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="text-xs text-[#1C1C1C]">Instagram</div>
          <div className="flex justify-start space-x-1 items-center">
            <div className="w-[9.71px] h-[2.33px] bg-[#1C1C1C]"></div>
            <div className="w-[9.71px] h-[2.33px] bg-[#1C1C1C66]"></div>
            <div className="w-[9.71px] h-[2.33px] bg-[#1C1C1C1A]"></div>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="text-xs text-[#1C1C1C]">Pinterest</div>
          <div className="flex justify-start space-x-1 items-center">
            <div className="w-[25.3px] h-[2.33px] bg-[#1C1C1C]"></div>
            <div className="w-[25.3px] h-[2.33px] bg-[#1C1C1C66]"></div>
            <div className="w-[25.3px] h-[2.33px] bg-[#1C1C1C1A]"></div>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="text-xs text-[#1C1C1C]">Facebook</div>
          <div className="flex justify-start space-x-1 items-center">
            <div className="w-[9.71px] h-[2.33px] bg-[#1C1C1C]"></div>
            <div className="w-[9.71px] h-[2.33px] bg-[#1C1C1C66]"></div>
            <div className="w-[9.71px] h-[2.33px] bg-[#1C1C1C1A]"></div>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="text-xs text-[#1C1C1C]">Twitter</div>
          <div className="flex justify-start space-x-1 items-center">
            <div className="w-[18.5px] h-[2.33px] bg-[#1C1C1C]"></div>
            <div className="w-[18.5px] h-[2.33px] bg-[#1C1C1C66]"></div>
            <div className="w-[18.5px] h-[2.33px] bg-[#1C1C1C1A]"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Traffic;
