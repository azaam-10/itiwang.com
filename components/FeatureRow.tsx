import React from 'react';

const FeatureItem: React.FC<{ icon: string; label: string; color: string; isPulse?: boolean }> = ({ icon, label, color, isPulse }) => (
  <div className="flex flex-col items-center flex-1 active:opacity-70 transition-opacity">
    <div className={`w-11 h-11 flex items-center justify-center text-[38px] mb-2 relative`} style={{ color }}>
      {isPulse ? (
        <div className="relative flex items-center justify-center">
          <i className="fa-solid fa-circle text-[40px]"></i>
          <i className="fa-solid fa-chart-line text-white text-[18px] absolute"></i>
        </div>
      ) : (
        <i className={icon}></i>
      )}
    </div>
    <span className="text-[11px] text-[#555] font-bold text-center leading-tight px-1">{label}</span>
  </div>
);

const FeatureRow: React.FC = () => {
  return (
    <div className="flex justify-between items-start px-2 py-3.5">
      <FeatureItem icon="fa-solid fa-user-large" label="Teams" color="#ff9c00" />
      <FeatureItem icon="fa-solid fa-file-invoice" label="Record" color="#47d195" />
      <FeatureItem icon="" label="Wallet management" color="#ff4d4d" isPulse={true} />
      <FeatureItem icon="fa-solid fa-envelope-open-text" label="Invite friends" color="#4da6ff" />
    </div>
  );
};

export default FeatureRow;