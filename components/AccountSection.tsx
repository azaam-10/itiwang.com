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
        {/* Deposit Button: Rounded square #F5F5F5 with blue gradient icon */}
        <div className="flex flex-col items-center">
          <div className="action-card mb-2">
             <i className="fa-solid fa-wallet icon-gradient"></i>
          </div>
          <span className="text-white text-[11px] font-bold tracking-wide">Deposit</span>
        </div>

        {/* Withdrawal Button: Rounded square #F5F5F5 with blue gradient icon */}
        <div className="flex flex-col items-center">
          <div className="action-card mb-2">
             <i className="fa-solid fa-credit-card icon-gradient" style={{ fontSize: '28px' }}></i>
          </div>
          <span className="text-white text-[11px] font-bold tracking-wide">Withdrawal</span>
        </div>
      </div>
    </div>
  );
};

export default AccountSection;