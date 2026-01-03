import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="flex items-start justify-between px-5 pt-10 pb-0.5 relative">
      <div className="flex items-center space-x-3.5">
        {/* Avatar: Lighter and centered 5-point star design as per original logo */}
        <div className="w-[74px] h-[74px] rounded-full bg-white flex items-center justify-center overflow-hidden shadow-sm">
          <svg viewBox="0 0 100 100" className="w-[85%] h-[85%]">
            <path d="M50 48 L50 5 L88 32 L74 76 L26 76 L12 32 Z" fill="none" />
            <path d="M50 50 L50 0 L93 31 L50 50 Z" fill="#ec5e5e" /> {/* Top Red Segment */}
            <path d="M50 50 L93 31 L77 81 L50 50 Z" fill="#f4c542" /> {/* Right Yellow Segment */}
            <path d="M50 50 L77 81 L23 81 L50 50 Z" fill="#8e5db5" /> {/* Bottom Purple Segment */}
            <path d="M50 50 L23 81 L7 31 L50 50 Z" fill="#3498db" />  {/* Left Blue Segment */}
            <path d="M50 50 L7 31 L50 0 L50 50 Z" fill="#4cb050" />  {/* Top-Left Green Segment */}
            <circle cx="50" cy="50" r="15" fill="#fff" />
          </svg>
        </div>

        <div className="flex flex-col">
          <div className="flex items-center">
            <span className="text-white text-[22px] font-bold tracking-tight">SANDRA122385</span>
            <div className="vip-badge">VIP 0</div>
          </div>
          <span className="text-white/80 text-[13px] mt-0.5 font-medium">Invitation code: 804461</span>
        </div>
      </div>

      <div className="pt-2 pr-0.5">
        {/* Chat icon matches the screenshot: speech bubble with three lines */}
        <div className="w-9 h-9 border-2 border-white/80 rounded-full flex items-center justify-center">
          <div className="flex flex-col space-y-[2px] items-center">
             <div className="w-3.5 h-[2px] bg-white rounded-full"></div>
             <div className="w-3.5 h-[2px] bg-white rounded-full"></div>
             <div className="w-2.5 h-[2px] bg-white rounded-full self-start ml-[1px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;