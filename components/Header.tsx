
import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="flex items-start justify-between px-5 pt-10 pb-2 relative">
      <div className="flex items-center space-x-3">
        {/* Exact Hexagonal Logo Recreation */}
        <div className="w-[72px] h-[72px] rounded-full bg-white flex items-center justify-center overflow-hidden shadow-md p-1">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {/* Center light area */}
            <circle cx="50" cy="50" r="15" fill="#fff" z-index="10" />
            {/* Triangles making the hexagon */}
            <path d="M50 50 L50 0 L93.3 25 Z" fill="#ec5e5e" /> {/* Red */}
            <path d="M50 50 L93.3 25 L93.3 75 Z" fill="#f4c542" /> {/* Yellow */}
            <path d="M50 50 L93.3 75 L50 100 Z" fill="#8e5db5" /> {/* Purple */}
            <path d="M50 50 L50 100 L6.7 75 Z" fill="#3498db" />  {/* Blue */}
            <path d="M50 50 L6.7 75 L6.7 25 Z" fill="#4cb050" />  {/* Green */}
            <path d="M50 50 L6.7 25 L50 0 Z" fill="#46d2d2" />   {/* Cyan */}
          </svg>
        </div>

        <div className="flex flex-col">
          <div className="flex items-center">
            <span className="text-white text-[22px] font-bold tracking-tight">SANDRA122385</span>
            <div className="vip-badge">VIP 0</div>
          </div>
          <span className="text-white/70 text-[13px] mt-0.5 font-medium">Invitation code: 804461</span>
        </div>
      </div>

      <div className="pt-2 pr-1">
        <i className="fa-regular fa-comment-dots text-white text-[28px]"></i>
      </div>
    </div>
  );
};

export default Header;