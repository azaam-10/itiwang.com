import React from 'react';

const AccountSection: React.FC = () => {
  return (
    <div className="px-5 mt-7 mb-4 flex justify-between items-end">
      <div className="flex flex-col text-white">
        <span className="text-[14px] font-bold mb-4 opacity-90">My Account</span>
        <div className="flex items-baseline">
          <span className="text-[12px] font-bold mr-2 opacity-70">USDT</span>
          <span className="text-[46px] font-bold leading-none">0</span>
        </div>
      </div>

      <div className="flex space-x-5 pr-1 pb-1">
        {/* Deposit Button: White card with blue wallet icon */}
        <div className="flex flex-col items-center">
          <div className="w-15 h-15 action-button-bg flex items-center justify-center mb-2 active:scale-95 transition-transform p-3">
             <i className="fa-solid fa-wallet text-[#1a73e8] text-[26px]"></i>
          </div>
          <span className="text-white text-[11px] font-bold tracking-wide">Deposit</span>
        </div>

        {/* Withdrawal Button: White card with blue card icon */}
        <div className="flex flex-col items-center">
          <div className="w-15 h-15 action-button-bg flex items-center justify-center mb-2 active:scale-95 transition-transform p-3">
             <i className="fa-solid fa-credit-card text-[#1a73e8] text-[24px]"></i>
          </div>
          <span className="text-white text-[11px] font-bold tracking-wide">Withdrawal</span>
        </div>
      </div>
    </div>
  );
};

export default AccountSection;