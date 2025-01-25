"use client";
import Link from "next/link";

interface ActionButtonProps {
  onClick: () => void;
}

export function ActionButton({ onClick }: ActionButtonProps) {
  return (
    <div className="relative">
      <Link href="https://join.ucchain.org" >
      <button
        onClick={onClick}
        className="bg-white text-black text-[10px] font-black px-6 py-1 rounded-full
          shadow-[0_4px_8px_rgba(0,0,0,0.2)]
          hover:bg-gray-100 transition-all duration-300 transform hover:scale-105
          [text-shadow:_1px_1px_0_rgb(255_255_255)]"
      >
        Join now
      </button>
      </Link>
    </div>
  );
}