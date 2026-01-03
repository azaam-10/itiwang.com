
import React from 'react';

const AccountSection: React.FC = () => {
  return (
    <div className="px-5 mt-6 mb-4 flex justify-between items-end">
      <div className="flex flex-col text-white">
        <span className="text-[14px] font-bold mb-3 opacity-90">My Account</span>
        <div className="flex items-baseline">
          <span className="text-[12px] font-bold mr-1.5 opacity-60">USDT</span>
          <span className="text-[38px] font-bold leading-none">0</span>
        </div>
      </div>

      <div className="flex space-x-5 pr-2">
        {/* Deposit Button */}
        <div className="flex flex-col items-center">
          <div className="w-14 h-14 bg-white squircle flex items-center justify-center shadow-lg mb-2 active:scale-95 transition-transform">
             <div className="w-10 h-10 bg-[#1a73e8] rounded-xl flex items-center justify-center">
               <i className="fa-solid fa-wallet text-white text-[18px]"></i>
             </div>
          </div>
          <span className="text-white text-[11px] font-bold opacity-90">Deposit</span>
        </div>

        {/* Withdrawal Button */}
        <div className="flex flex-col items-center">
          <div className="w-14 h-14 bg-white squircle flex items-center justify-center shadow-lg mb-2 active:scale-95 transition-transform">
             <div className="w-10 h-10 bg-[#1a73e8] rounded-xl flex items-center justify-center">
               <i className="fa-solid fa-credit-card text-white text-[18px]"></i>
             </div>
          </div>
          <span className="text-white text-[11px] font-bold opacity-90">Withdrawal</span>
        </div>
      </div>
    </div>
  );
};

export default AccountSection;