"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Logo } from "./Logo";
import { TextContent } from "./TextContent";
import { ActionButton } from "./ActionButton";
import Image from "next/image";

export function AlertBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const handleJoinNow = () => {
    // Handle join action
    console.log("Join clicked");
  };

  return (
    <div className="w-fit flex  bg-[#FFD700]/40 mx-auto  shadow-2xl rounded-xl relative top-0 ">
      
      <div className="relative  flex items-center  rounded-xl  p-2  overflow-hidden">
       
        {/* Content */}
        <div className="flex gap-4 md:flex-row items-center justify-between  w-full">
          <TextContent
            // title="Join Presale - Earn 10X at Listing"
            // subtitle="Refer and Earn"
            details="Join Presale - Earn 10X at Listing"
          // details2="( 15% USDT + 15% UCC )"
          />

          <div className="flex justify-center">
            <ActionButton onClick={handleJoinNow} />
          </div>

        </div>

        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/30 via-yellow-500/20 to-yellow-600/30 pointer-events-none" />
      </div>
      <button
          onClick={() => setIsVisible(false)}
          className="absolutex top-1 right-1 text-white hover:text-white transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
    </div>
  );
}