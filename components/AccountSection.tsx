import React from 'react';

const AccountSection: React.FC = () => {
  return (
    <div className="px-5 mt-5 mb-3 flex justify-between items-end">
      <div className="flex flex-col text-white">
        <span className="text-[13px] font-bold mb-3 opacity-80">My Account</span>
        <div className="flex items-baseline">
          <span className="text-[10px] font-bold mr-1.5 opacity-60">USDT</span>
          <span className="text-[44px] font-bold leading-none">0</span>
        </div>
      </div>

      <div className="flex space-x-5 pr-1 mb-1">
        {/* Deposit Button */}
        <div className="flex flex-col items-center">
          <div className="w-13 h-13 bg-white squircle flex items-center justify-center shadow-lg mb-2 active:scale-95 transition-transform">
             <div className="w-9 h-9 bg-[#1a73e8] rounded-[10px] flex items-center justify-center">
               <i className="fa-solid fa-wallet text-white text-[17px]"></i>
             </div>
          </div>
          <span className="text-white text-[11px] font-bold opacity-80">Deposit</span>
        </div>

        {/* Withdrawal Button */}
        <div className="flex flex-col items-center">
          <div className="w-13 h-13 bg-white squircle flex items-center justify-center shadow-lg mb-2 active:scale-95 transition-transform">
             <div className="w-9 h-9 bg-[#1a73e8] rounded-[10px] flex items-center justify-center">
               <i className="fa-solid fa-credit-card text-white text-[17px]"></i>
             </div>
          </div>
          <span className="text-white text-[11px] font-bold opacity-80">Withdrawal</span>
        </div>
      </div>
    </div>
  );
};

export default AccountSection;